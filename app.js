/**
 * 英语词汇测试与学习系统
 * 测试方法论：主动回忆 + 间隔重复 + 双向测试 + 即时反馈
 */

// ==================== 应用状态 ====================
const App = {
  currentPage: 'home',
  // 测试配置
  testConfig: {
    direction: 'en2cn',    // en2cn | cn2en | mixed
    format: 'choice',       // choice | recall
    level: 0,               // 0=all, 1=小学, 2=初中, 3=高中
    count: 20,              // 每轮题数
    selectMode: 'random',   // random | custom
  },
  customSelectedIds: new Set(), // 自选模式中选中的单词ID
  wordPickerPage: 1, // 词汇选择器当前页码
  // 试卷模块状态
  examState: {
    currentExam: null,       // 当前试卷对象
    answers: {},             // {questionId: 'A'|'B'|'C'|'D'}
    startTime: null,         // 考试开始时间戳
    timeLimit: null,         // 考试时长（分钟），null=不限时
    timerInterval: null,     // 计时器
    elapsedSeconds: 0,       // 已用秒数
  },
  // 拖拽选择状态
  dragSelect: {
    isDragging: false,   // 是否正在拖拽
    mode: null,          // 'select' | 'deselect'（由首个点击项决定）
    lastId: null,        // 上一次处理的ID（避免重复）
  },
  // 测试运行时状态
  testState: {
    queue: [],         // 题目队列
    currentIdx: 0,
    correctCount: 0,
    wrongCount: 0,
    wrongWords: [],    // 本轮答错的词
    startTime: 0,
    answered: false,
  },
  // 学习记录 (持久化到 localStorage)
  record: {
    wordStats: {},     // { wordId: { correct: n, wrong: n, lastReview: timestamp, mastery: 0-3 } }
    testHistory: [],   // [{ date, mode, level, total, correct, wrong }]
    totalTests: 0,
  },
};

// ==================== 持久化 ====================
const STORAGE_KEY = 'engVocabApp_v1';

function loadRecord() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      App.record = JSON.parse(data);
    }
  } catch (e) {
    console.warn('加载记录失败', e);
  }
}

function saveRecord() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(App.record));
  } catch (e) {
    console.warn('保存记录失败', e);
  }
}

// ==================== 间隔重复算法 (简化版SM-2) ====================
/**
 * 掌握度等级: 0=新词, 1=学习中, 2=熟悉, 3=已掌握
 * 答对: mastery +1 (上限3), 答错: mastery -1 (下限0)
 * 优先复习低掌握度的词
 */
function updateWordMastery(wordId, isCorrect) {
  if (!App.record.wordStats[wordId]) {
    App.record.wordStats[wordId] = { correct: 0, wrong: 0, lastReview: 0, mastery: 0 };
  }
  const stat = App.record.wordStats[wordId];
  stat.lastReview = Date.now();

  if (isCorrect) {
    stat.correct++;
    stat.mastery = Math.min(3, stat.mastery + 1);
  } else {
    stat.wrong++;
    stat.mastery = Math.max(0, stat.mastery - 1);
  }
  saveRecord();
}

/**
 * 智能选题：70%概率优先选低掌握度词，30%随机
 */
function selectWords(count, level) {
  let pool = WORD_BANK.filter(w => level === 0 || w.level === level);

  // 按掌握度分组
  const newWords = [];      // mastery 0
  const learningWords = []; // mastery 1
  const familiarWords = []; // mastery 2
  const masteredWords = []; // mastery 3

  pool.forEach(w => {
    const stat = App.record.wordStats[w.id];
    const m = stat ? stat.mastery : 0;
    if (m === 0) newWords.push(w);
    else if (m === 1) learningWords.push(w);
    else if (m === 2) familiarWords.push(w);
    else masteredWords.push(w);
  });

  // 打乱各组
  const shuffle = arr => arr.sort(() => Math.random() - 0.5);
  shuffle(newWords);
  shuffle(learningWords);
  shuffle(familiarWords);
  shuffle(masteredWords);

  // 按优先级选题: 新词 > 学习中 > 熟悉 > 已掌握
  const priority = [...newWords, ...learningWords, ...familiarWords, ...masteredWords];
  const selected = priority.slice(0, count);

  // 如果优先队列不足，从池中随机补
  if (selected.length < count) {
    const remaining = shuffle(pool.filter(w => !selected.includes(w)));
    selected.push(...remaining.slice(0, count - selected.length));
  }

  return shuffle(selected);
}

/**
 * 生成选择题干扰项
 */
function generateChoices(correctWord, direction) {
  let pool = WORD_BANK.filter(w => w.id !== correctWord.id);

  // 同级别优先
  const sameLevel = pool.filter(w => w.level === correctWord.level);
  const otherLevel = pool.filter(w => w.level !== correctWord.level);

  const distractors = [];
  // 取2个同级别 + 1个其他级别
  if (sameLevel.length >= 2) {
    distractors.push(...sameLevel.sort(() => Math.random() - 0.5).slice(0, 2));
  } else {
    distractors.push(...sameLevel);
  }
  while (distractors.length < 3) {
    const idx = Math.floor(Math.random() * otherLevel.length);
    const w = otherLevel[idx];
    if (!distractors.includes(w)) distractors.push(w);
  }

  const allOptions = [correctWord, ...distractors.slice(0, 3)].sort(() => Math.random() - 0.5);

  return allOptions.map(w => ({
    word: w,
    text: direction === 'en2cn' ? w.meaning : w.word,
  }));
}

// ==================== 语音朗读 ====================
function speak(text, lang = 'en-US') {
  if (!('speechSynthesis' in window)) {
    console.warn('浏览器不支持语音合成');
    return;
  }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

// ==================== 页面导航 ====================
function navigateTo(page) {
  const pageEl = document.getElementById('page-' + page);
  if (!pageEl) {
    console.warn('[navigateTo] 页面不存在:', page);
    return;
  }
  App.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  pageEl.classList.add('active');
  const tab = document.querySelector(`.nav-tab[data-page="${page}"]`);
  if (tab) tab.classList.add('active');

  if (page === 'home') { renderDashboard(); renderStudyCalendar(); }
  if (page === 'stats') renderStats();
  if (page === 'wrong') renderWrongBook();
  if (page === 'listening') setupListening();
  if (page === 'grammar') renderGrammarTopics();
  if (page === 'ielts') setupIELTS();
  if (page === 'dict') { renderQuickWords(); }
  if (page === 'exam') {
    showExamListView();
  }
  if (page === 'test') {
    // 重置测试页面：显示配置，隐藏运行
    const cfg = document.getElementById('page-test-config');
    const run = document.getElementById('page-test-running');
    if (cfg) cfg.style.display = 'block';
    if (run) run.style.display = 'none';
    setupTestConfig();
    // 根据选题模式切换UI
    toggleSelectMode(App.testConfig.selectMode);
  }
}

// ==================== 首页仪表盘 ====================
function renderDashboard() {
  const stats = App.record.wordStats;
  const wordIds = Object.keys(stats);
  let mastered = 0, learning = 0, totalReviews = 0;
  wordIds.forEach(id => {
    if (stats[id].mastery >= 3) mastered++;
    else if (stats[id].mastery >= 1) learning++;
    totalReviews += stats[id].correct + stats[id].wrong;
  });

  const totalWords = WORD_BANK.length;
  const masteryRate = totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0;
  const avgAccuracy = totalReviews > 0
    ? Math.round((Object.values(stats).reduce((s, v) => s + v.correct, 0) / totalReviews) * 100)
    : 0;

  document.getElementById('stat-mastered').textContent = mastered;
  document.getElementById('stat-learning').textContent = learning;
  document.getElementById('stat-accuracy').textContent = avgAccuracy + '%';
  document.getElementById('stat-tests').textContent = App.record.totalTests;
  renderHuobao();
}

// ==================== 测试配置页 ====================
function setupTestConfig() {
  // 重置配置界面选中状态
  document.querySelectorAll('[data-config]').forEach(btn => {
    const group = btn.dataset.config;
    const value = btn.dataset.value;
    const isActive = String(App.testConfig[group]) === value;
    btn.classList.toggle('active', isActive);
  });
}

function setConfig(group, value) {
  App.testConfig[group] = isNaN(Number(value)) ? value : Number(value);
  // 更新UI
  document.querySelectorAll(`[data-config="${group}"]`).forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === String(value));
  });
  // 选题模式切换
  if (group === 'selectMode') {
    toggleSelectMode(value);
  }
}

// ==================== 词汇选择面板 ====================
function toggleSelectMode(mode) {
  const levelConfig = document.getElementById('config-level');
  const countConfig = document.getElementById('config-count');
  const customConfig = document.getElementById('config-custom');

  if (mode === 'custom') {
    levelConfig.style.display = 'none';
    countConfig.style.display = 'none';
    customConfig.style.display = 'block';
    renderWordPicker();
  } else {
    levelConfig.style.display = 'block';
    countConfig.style.display = 'block';
    customConfig.style.display = 'none';
  }
}

function renderWordPicker() {
  const list = document.getElementById('word-picker-list');
  if (!list) return;

  const searchTerm = (document.getElementById('word-picker-search')?.value || '').toLowerCase().trim();
  const filterLevel = parseInt(document.getElementById('word-picker-filter')?.value || '0');

  // 筛选
  let filtered = WORD_BANK.filter(w => {
    if (filterLevel > 0 && w.level !== filterLevel) return false;
    if (searchTerm) {
      return w.word.toLowerCase().includes(searchTerm) ||
             w.meaning.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  // 分页：每页50个词
  const PAGE_SIZE = 50;
  if (!App.wordPickerPage) App.wordPickerPage = 1;
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE) || 1;
  if (App.wordPickerPage > totalPages) App.wordPickerPage = 1;
  const startIdx = (App.wordPickerPage - 1) * PAGE_SIZE;
  const showList = filtered.slice(startIdx, startIdx + PAGE_SIZE);

  if (filtered.length === 0) {
    list.innerHTML = '<div class="word-picker-empty">没有匹配的单词</div>';
    updateWordPickerCount();
    return;
  }

  const levelNames = {1: '小学', 2: '初中', 3: '高中'};

  list.innerHTML = showList.map(w => {
    const isSelected = App.customSelectedIds.has(w.id);
    return `
      <div class="word-picker-item ${isSelected ? 'selected' : ''}"
           data-word-id="${w.id}"
           onclick="toggleWordSelection(${w.id})"
           onmousedown="dragSelectStart(${w.id}, event)"
           onmouseenter="dragSelectEnter(${w.id})">
        <div class="word-picker-checkbox"></div>
        <span class="wp-word">${w.word}</span>
        <span class="wp-phonetic">${w.phonetic || ''}</span>
        <span class="wp-meaning">${w.meaning}</span>
        <span class="wp-level wp-level-${w.level}">${levelNames[w.level]}</span>
      </div>
    `;
  }).join('');

  // 分页导航
  list.innerHTML += `
    <div class="word-picker-pagination">
      <button class="btn btn-ghost btn-sm" onclick="wordPickerPrevPage()" ${App.wordPickerPage <= 1 ? 'disabled' : ''}>← 上一页</button>
      <span class="page-info">第 ${App.wordPickerPage} / ${totalPages} 页（${startIdx + 1}-${Math.min(startIdx + PAGE_SIZE, filtered.length)} / 共${filtered.length}词）</span>
      <button class="btn btn-ghost btn-sm" onclick="wordPickerNextPage()" ${App.wordPickerPage >= totalPages ? 'disabled' : ''}>下一页 →</button>
    </div>
  `;

  updateWordPickerCount();
}

function wordPickerPrevPage() {
  if (App.wordPickerPage > 1) {
    App.wordPickerPage--;
    renderWordPicker();
  }
}

function wordPickerNextPage() {
  App.wordPickerPage++;
  renderWordPicker();
}

// ==================== 拖拽批量选择 ====================
function dragSelectStart(wordId, event) {
  // 不调用preventDefault，让click事件能正常触发（手机端依赖click）
  // 根据首个项目的当前状态决定模式：已选中→取消，未选中→选中
  const isSelected = App.customSelectedIds.has(wordId);
  App.dragSelect.isDragging = true;
  App.dragSelect.mode = isSelected ? 'deselect' : 'select';
  App.dragSelect.lastId = wordId;
  App.dragSelect.toggledIds = new Set(); // 记录本次拖拽已切换的词
  // 立即切换首个项目
  applyDragSelect(wordId);
}

function dragSelectEnter(wordId) {
  if (!App.dragSelect.isDragging) return;
  if (wordId === App.dragSelect.lastId) return;
  App.dragSelect.lastId = wordId;
  applyDragSelect(wordId);
}

function applyDragSelect(wordId) {
  if (App.dragSelect.toggledIds && App.dragSelect.toggledIds.has(wordId)) return;
  if (App.dragSelect.mode === 'select') {
    App.customSelectedIds.add(wordId);
  } else {
    App.customSelectedIds.delete(wordId);
  }
  if (App.dragSelect.toggledIds) App.dragSelect.toggledIds.add(wordId);
  // 只更新该项的UI
  const item = document.querySelector(`.word-picker-item[data-word-id="${wordId}"]`);
  if (item) {
    item.classList.toggle('selected', App.customSelectedIds.has(wordId));
  }
  updateWordPickerCount();
}

function dragSelectEnd() {
  if (App.dragSelect.isDragging) {
    App.dragSelect.isDragging = false;
    App.dragSelect.mode = null;
    App.dragSelect.lastId = null;
    // 延迟清除toggledIds，让紧随其后的click事件能检查到
    setTimeout(() => { App.dragSelect.toggledIds = null; }, 150);
  }
}

// 触摸支持
function dragSelectTouchStart(wordId, event) {
  event.preventDefault();
  const isSelected = App.customSelectedIds.has(wordId);
  App.dragSelect.isDragging = true;
  App.dragSelect.mode = isSelected ? 'deselect' : 'select';
  App.dragSelect.lastId = wordId;
  applyDragSelect(wordId);
}

function dragSelectTouchMove(event) {
  if (!App.dragSelect.isDragging) return;
  event.preventDefault();
  const touch = event.touches[0];
  const el = document.elementFromPoint(touch.clientX, touch.clientY);
  if (el) {
    const item = el.closest('.word-picker-item');
    if (item) {
      const wordId = parseInt(item.dataset.wordId);
      if (wordId && wordId !== App.dragSelect.lastId) {
        App.dragSelect.lastId = wordId;
        applyDragSelect(wordId);
      }
    }
  }
}

function toggleWordSelection(wordId) {
  // 如果这个词刚被拖拽切换过，跳过（避免click重复切换）
  if (App.dragSelect.toggledIds && App.dragSelect.toggledIds.has(wordId)) {
    return;
  }
  if (App.customSelectedIds.has(wordId)) {
    App.customSelectedIds.delete(wordId);
  } else {
    App.customSelectedIds.add(wordId);
  }
  // 更新UI（只切换样式，不重新渲染）
  const item = document.querySelector(`.word-picker-item[data-word-id="${wordId}"]`);
  if (item) {
    item.classList.toggle('selected', App.customSelectedIds.has(wordId));
  }
  updateWordPickerCount();
}

function selectAllWords(selectAll) {
  const searchTerm = (document.getElementById('word-picker-search')?.value || '').toLowerCase().trim();
  const filterLevel = parseInt(document.getElementById('word-picker-filter')?.value || '0');

  let filtered = WORD_BANK.filter(w => {
    if (filterLevel > 0 && w.level !== filterLevel) return false;
    if (searchTerm) {
      return w.word.toLowerCase().includes(searchTerm) ||
             w.meaning.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  if (selectAll) {
    filtered.forEach(w => App.customSelectedIds.add(w.id));
  } else {
    filtered.forEach(w => App.customSelectedIds.delete(w.id));
  }
  renderWordPicker();
}

function invertWordSelection() {
  const searchTerm = (document.getElementById('word-picker-search')?.value || '').toLowerCase().trim();
  const filterLevel = parseInt(document.getElementById('word-picker-filter')?.value || '0');

  let filtered = WORD_BANK.filter(w => {
    if (filterLevel > 0 && w.level !== filterLevel) return false;
    if (searchTerm) {
      return w.word.toLowerCase().includes(searchTerm) ||
             w.meaning.toLowerCase().includes(searchTerm);
    }
    return true;
  });

  filtered.forEach(w => {
    if (App.customSelectedIds.has(w.id)) {
      App.customSelectedIds.delete(w.id);
    } else {
      App.customSelectedIds.add(w.id);
    }
  });
  renderWordPicker();
}

function filterWordPicker() {
  App.wordPickerPage = 1; // 搜索/筛选时重置到第一页
  renderWordPicker();
}

function updateWordPickerCount() {
  const countEl = document.getElementById('word-picker-count');
  if (countEl) {
    countEl.textContent = `已选 ${App.customSelectedIds.size} 词`;
  }
}

function getCustomSelectedWords() {
  return WORD_BANK.filter(w => App.customSelectedIds.has(w.id));
}

// ==================== 测试引擎 ====================
function startTest() {
  const { direction, format, level, count, selectMode } = App.testConfig;

  // 选题
  let words;
  if (selectMode === 'custom') {
    words = getCustomSelectedWords();
    if (words.length === 0) {
      alert('请先选择要测试的词汇！');
      return;
    }
    // 打乱顺序
    words = [...words].sort(() => Math.random() - 0.5);
  } else {
    words = selectWords(count, level);
  }

  if (words.length === 0) {
    alert('没有可用的单词，请调整难度级别');
    return;
  }

  // 构建题目队列
  App.testState.queue = words.map(word => {
    // mixed 模式下随机方向
    const dir = direction === 'mixed'
      ? (Math.random() < 0.5 ? 'en2cn' : 'cn2en')
      : direction;

    return {
      word,
      direction: dir,
      choices: format === 'choice' ? generateChoices(word, dir) : null,
    };
  });

  App.testState.currentIdx = 0;
  App.testState.correctCount = 0;
  App.testState.wrongCount = 0;
  App.testState.wrongWords = [];
  App.testState.startTime = Date.now();
  App.testState.answered = false;

  // 切换到测试运行页面
  document.getElementById('page-test-config').style.display = 'none';
  document.getElementById('page-test-running').style.display = 'block';

  renderQuestion();
}

function renderQuestion() {
  const state = App.testState;
  const item = state.queue[state.currentIdx];
  if (!item) return finishTest();

  state.answered = false;
  const { word, direction, choices } = item;
  const isEn2Cn = direction === 'en2cn';

  // 头部进度
  const progress = ((state.currentIdx) / state.queue.length) * 100;
  document.getElementById('test-progress-fill').style.width = progress + '%';
  document.getElementById('test-progress-text').textContent =
    `${state.currentIdx + 1} / ${state.queue.length}`;
  document.getElementById('test-correct-count').textContent = state.correctCount;
  document.getElementById('test-wrong-count').textContent = state.wrongCount;

  // 方向标签
  const dirLabel = isEn2Cn ? '英 → 中' : '中 → 英';
  document.getElementById('question-tag').textContent = dirLabel;

  // 题目内容
  if (isEn2Cn) {
    // 显示英文，选/写中文
    document.getElementById('question-word').innerHTML =
      `${word.word} <button class="speak-btn" onclick="speak('${word.word}')" title="朗读">🔊</button>`;
    document.getElementById('question-phonetic').textContent = word.phonetic;
    document.getElementById('question-pos').textContent = word.pos;
  } else {
    // 显示中文，选/写英文
    document.getElementById('question-word').textContent = word.meaning;
    document.getElementById('question-phonetic').textContent = '';
    document.getElementById('question-pos').textContent = '';
  }

  // 隐藏反馈
  document.getElementById('feedback-bar').classList.remove('show', 'correct', 'wrong');

  // 根据格式渲染
  if (App.testConfig.format === 'choice') {
    renderChoiceQuestion(choices, word, isEn2Cn);
  } else {
    renderRecallQuestion(word, isEn2Cn);
  }
}

function renderChoiceQuestion(choices, correctWord, isEn2Cn) {
  const container = document.getElementById('question-body');
  const letters = ['A', 'B', 'C', 'D'];

  container.innerHTML = `
    <div class="choices-grid">
      ${choices.map((c, i) => `
        <button class="choice-btn" onclick="handleChoice('${c.word.id}', '${correctWord.id}', this)">
          <span class="choice-letter">${letters[i]}</span>
          <span>${c.text}</span>
        </button>
      `).join('')}
    </div>
  `;
}

function handleChoice(selectedId, correctId, btnEl) {
  if (App.testState.answered) return;
  App.testState.answered = true;

  const isCorrect = selectedId === correctId;
  const correctWord = WORD_BANK.find(w => String(w.id) === correctId);

  // 标记选项
  const allBtns = document.querySelectorAll('.choice-btn');
  allBtns.forEach(btn => {
    btn.disabled = true;
    const onclick = btn.getAttribute('onclick');
    const match = onclick.match(/handleChoice\('(\d+)',/);
    if (match && match[1] === correctId) {
      btn.classList.add('correct');
    } else if (btn === btnEl && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  // 反馈
  showFeedback(isCorrect, correctWord);

  // 更新统计
  if (isCorrect) {
    App.testState.correctCount++;
  } else {
    App.testState.wrongCount++;
    App.testState.wrongWords.push(correctWord);
  }
  updateWordMastery(Number(correctId), isCorrect);

  // 显示"下一题"按钮
  showNextButton();
}

function renderRecallQuestion(word, isEn2Cn) {
  const container = document.getElementById('question-body');
  const placeholder = isEn2Cn ? '请输入中文意思...' : '请输入英文单词...';

  container.innerHTML = `
    <input type="text" class="recall-input" id="recall-input"
           placeholder="${placeholder}"
           onkeydown="if(event.key==='Enter') revealAnswer()" autofocus>
    <div class="mt-20">
      <button class="btn btn-primary" onclick="revealAnswer()">
        🔍 揭晓答案
      </button>
    </div>
    <div class="reveal-section" id="reveal-section">
      <div class="reveal-answer">
        <p><strong>${isEn2Cn ? '中文意思' : '英文单词'}:</strong> ${isEn2Cn ? word.meaning : word.word}</p>
        ${!isEn2Cn ? `<p style="margin-top:8px"><strong>音标:</strong> <span style="font-family:var(--font-mono)">${word.phonetic}</span>
          <button class="speak-btn" onclick="speak('${word.word}')" title="朗读">🔊</button></p>` : ''}
        <p style="margin-top:8px"><strong>词性:</strong> <em>${word.pos}</em></p>
        <div class="reveal-example">
          <div class="en">📖 ${word.example}</div>
          <div class="cn">${word.exampleCn}</div>
        </div>
      </div>
      <p style="text-align:center; color:var(--text-secondary); font-size:0.9rem; margin-bottom:12px;">
        你答对了吗？请自评：
      </p>
      <div class="self-grade-row">
        <button class="btn btn-danger" onclick="selfGrade(false)">❌ 答错了</button>
        <button class="btn btn-success" onclick="selfGrade(true)">✅ 答对了</button>
      </div>
    </div>
  `;
}

function revealAnswer() {
  const section = document.getElementById('reveal-section');
  if (section) section.classList.add('show');
  // 如果是中→英模式，自动朗读
  if (App.testState.queue[App.testState.currentIdx].direction === 'cn2en') {
    const word = App.testState.queue[App.testState.currentIdx].word;
    setTimeout(() => speak(word.word), 300);
  }
}

function selfGrade(isCorrect) {
  if (App.testState.answered) return;
  App.testState.answered = true;

  const word = App.testState.queue[App.testState.currentIdx].word;
  showFeedback(isCorrect, word);

  if (isCorrect) {
    App.testState.correctCount++;
  } else {
    App.testState.wrongCount++;
    App.testState.wrongWords.push(word);
  }
  updateWordMastery(word.id, isCorrect);
  showNextButton();
}

function showFeedback(isCorrect, word) {
  const bar = document.getElementById('feedback-bar');
  bar.className = 'feedback-bar show ' + (isCorrect ? 'correct' : 'wrong');
  bar.innerHTML = isCorrect
    ? `✅ 正确！ ${word.word} — ${word.meaning}`
    : `❌ 正确答案：${word.word} (${word.pos}) ${word.meaning}`;
}

function showNextButton() {
  const container = document.getElementById('question-body');
  const isLast = App.testState.currentIdx >= App.testState.queue.length - 1;
  const btnText = isLast ? '🏁 查看结果' : '下一题 →';

  const existing = document.getElementById('next-btn-wrapper');
  if (existing) existing.remove();

  const wrapper = document.createElement('div');
  wrapper.id = 'next-btn-wrapper';
  wrapper.className = 'mt-20 text-center';
  wrapper.innerHTML = `<button class="btn btn-primary btn-lg" onclick="nextQuestion()">${btnText}</button>`;
  container.appendChild(wrapper);
}

function nextQuestion() {
  App.testState.currentIdx++;
  if (App.testState.currentIdx >= App.testState.queue.length) {
    finishTest();
  } else {
    renderQuestion();
  }
}

function finishTest() {
  const state = App.testState;
  const total = state.queue.length;
  const correct = state.correctCount;
  const wrong = state.wrongCount;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const elapsed = Math.round((Date.now() - state.startTime) / 1000);

  // 保存历史记录
  App.record.testHistory.push({
    date: Date.now(),
    mode: App.testConfig.direction,
    format: App.testConfig.format,
    level: App.testConfig.level,
    total,
    correct,
    wrong,
    accuracy,
    elapsed,
  });
  App.record.totalTests++;
  saveRecord();

  // 记录每日目标
  recordDailyActivity('test');
  recordDailyActivity('word', correct);

  // 收集错题到错题本
  state.wrongWords.forEach(w => {
    addWrongQuestion(
      { id: w.id, question: w.word, options: [], answer: w.meaning, explanation: `'${w.word}' 的意思是「${w.meaning}」`, knowledgePoints: ['词汇-词义'], skill: 'vocabulary', difficulty: w.level || 2 },
      '未答对',
      'test',
      `词汇测试(${App.testConfig.direction})`
    );
  });

  // 评级
  let grade, gradeClass, msg;
  if (accuracy >= 90) { grade = '🎉'; gradeClass = 'excellent'; msg = '太棒了！你的词汇量很扎实！'; }
  else if (accuracy >= 75) { grade = '👍'; gradeClass = 'good'; msg = '不错！继续保持，你正在进步！'; }
  else if (accuracy >= 60) { grade = '💪'; gradeClass = 'fair'; msg = '还可以，多复习错词会有很大提升！'; }
  else { grade = '📚'; gradeClass = 'poor'; msg = '别灰心，坚持练习就会越来越好！'; }

  // 渲染结果页
  document.getElementById('page-test-running').style.display = 'none';
  document.getElementById('page-test').classList.remove('active');
  document.getElementById('page-result').classList.add('active');

  document.getElementById('result-score').textContent = accuracy + '%';
  document.getElementById('result-score').className = 'result-score ' + gradeClass;
  document.getElementById('result-emoji').textContent = grade;
  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-correct').textContent = correct;
  document.getElementById('result-wrong').textContent = wrong;
  document.getElementById('result-total').textContent = total;

  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById('result-time').textContent = `${mins}'${secs}"`;

  // 错词列表
  const reviewList = document.getElementById('result-review-list');
  if (state.wrongWords.length > 0) {
    reviewList.innerHTML = `
      <h3>📝 错词复习 (${state.wrongWords.length})</h3>
      ${state.wrongWords.map(w => `
        <div class="review-item">
          <div>
            <span class="word">${w.word}</span>
            <span style="color:var(--text-muted); font-size:0.82rem; margin-left:8px">${w.phonetic}</span>
          </div>
          <span class="meaning">${w.meaning}</span>
        </div>
      `).join('')}
    `;
  } else {
    reviewList.innerHTML = `<div class="empty-state"><div class="icon">🎯</div><p>全部答对，没有错词！</p></div>`;
  }
}

function backToHome() {
  document.getElementById('page-result').classList.remove('active');
  navigateTo('home');
}

function restartTest() {
  document.getElementById('page-result').classList.remove('active');
  document.getElementById('page-test').classList.add('active');
  document.getElementById('page-test-config').style.display = 'block';
  document.getElementById('page-test-running').style.display = 'none';
  setupTestConfig();
  toggleSelectMode(App.testConfig.selectMode);
}

function backToConfig() {
  document.getElementById('page-test-config').style.display = 'block';
  document.getElementById('page-test-running').style.display = 'none';
}

// ==================== 词典功能 ====================
function searchDictionary(keyword) {
  keyword = keyword.trim().toLowerCase();
  if (!keyword) return;

  const resultDiv = document.getElementById('dict-result');
  resultDiv.className = 'dict-result show';
  resultDiv.innerHTML = '<div class="dict-loading">🔍 搜索中...</div>';

  // 先搜本地词库
  const localMatch = WORD_BANK.find(w => w.word.toLowerCase() === keyword);

  if (localMatch) {
    renderDictResult(localMatch, null);
    // 同时请求在线词典补充更多信息
    fetchOnlineDict(keyword, localMatch);
  } else {
    // 模糊匹配本地词库
    const fuzzy = WORD_BANK.filter(w =>
      w.word.toLowerCase().includes(keyword) ||
      w.meaning.includes(keyword)
    ).slice(0, 8);

    // 请求在线词典
    fetchOnlineDict(keyword, null, fuzzy);
  }
}

function fetchOnlineDict(word, localMatch, fuzzyMatches) {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Not found');
      return res.json();
    })
    .then(data => {
      // 解析在线词典数据
      const entry = data[0];
      const onlineData = {
        word: entry.word || keyword,
        phonetic: entry.phonetic || (entry.phonetics && entry.phonetics.find(p => p.text) ? entry.phonetics.find(p => p.text).text : ''),
        meanings: entry.meanings ? entry.meanings.map(m => ({
          partOfSpeech: m.partOfSpeech,
          definitions: m.definitions.slice(0, 3).map(d => d.definition),
        })) : [],
        audio: entry.phonetics ? (entry.phonetics.find(p => p.audio) || {}).audio : null,
      };
      renderDictResult(localMatch, onlineData, fuzzyMatches);
    })
    .catch(() => {
      if (localMatch) {
        renderDictResult(localMatch, null, fuzzyMatches);
      } else if (fuzzyMatches && fuzzyMatches.length > 0) {
        renderDictSuggestions(fuzzyMatches);
      } else {
        const resultDiv = document.getElementById('dict-result');
        resultDiv.innerHTML = `
          <div class="dict-error">
            <p>😕 未找到「${word}」</p>
            <p style="font-size:0.88rem; margin-top:8px; color:var(--text-secondary)">
              该词不在本地词库中，在线词典也未收录。请检查拼写或尝试其他词。
            </p>
          </div>
        `;
      }
    });
}

function renderDictResult(localMatch, onlineData, fuzzyMatches) {
  const resultDiv = document.getElementById('dict-result');

  let html = '';

  // 本地词库数据
  if (localMatch) {
    html += `
      <div class="dict-entry">
        <div class="dict-word-header">
          <span class="dict-word">${localMatch.word}</span>
          <button class="speak-btn" onclick="speak('${localMatch.word}')" title="朗读">🔊</button>
          <span class="dict-phonetic">${localMatch.phonetic}</span>
          <span class="dict-pos-tag">${localMatch.pos}</span>
        </div>
        <div class="dict-meaning">
          <strong>中文释义：</strong>${localMatch.meaning}
        </div>
        <div class="dict-example">
          <div class="en">📖 ${localMatch.example}</div>
          <div class="cn">${localMatch.exampleCn}</div>
        </div>
        <div style="margin-top:12px; font-size:0.82rem; color:var(--text-muted)">
          难度等级：${localMatch.level === 1 ? '⭐ 小学 (3-6年级)' : localMatch.level === 2 ? '⭐⭐ 初中 (7-9年级)' : '⭐⭐⭐ 高中 (必修1-3)'}
        </div>
      </div>
    `;
  }

  // 在线词典补充数据
  if (onlineData) {
    if (!localMatch) {
      html += `
        <div class="dict-entry">
          <div class="dict-word-header">
            <span class="dict-word">${onlineData.word}</span>
            <button class="speak-btn" onclick="speak('${onlineData.word}')" title="朗读">🔊</button>
            ${onlineData.phonetic ? `<span class="dict-phonetic">${onlineData.phonetic}</span>` : ''}
          </div>
        </div>
      `;
    }

    // 英文释义
    if (onlineData.meanings && onlineData.meanings.length > 0) {
      html += `<div class="dict-entry">
        <h3 style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px">📖 英文释义 (English Definitions)</h3>
      `;
      onlineData.meanings.forEach(m => {
        html += `
          <div style="margin-bottom:12px">
            <span class="dict-pos-tag" style="margin-bottom:6px">${m.partOfSpeech}</span>
            <ol style="margin-top:8px; margin-left:20px; font-size:0.92rem; color:var(--text-secondary)">
              ${m.definitions.map(d => `<li style="margin-bottom:4px">${d}</li>`).join('')}
            </ol>
          </div>
        `;
      });
      html += '</div>';
    }

    // 如果有在线音标且与本地不同
    if (onlineData.phonetic && (!localMatch || localMatch.phonetic !== onlineData.phonetic)) {
      html += `
        <div style="font-size:0.85rem; color:var(--text-muted); margin-top:8px">
          📢 在线音标: ${onlineData.phonetic}
        </div>
      `;
    }
  }

  // 模糊匹配建议
  if (fuzzyMatches && fuzzyMatches.length > 0) {
    html += renderDictSuggestionsHTML(fuzzyMatches);
  }

  if (!html) {
    html = `<div class="dict-error"><p>未找到相关结果</p></div>`;
  }

  resultDiv.innerHTML = html;
}

function renderDictSuggestions(matches) {
  const resultDiv = document.getElementById('dict-result');
  resultDiv.innerHTML = renderDictSuggestionsHTML(matches);
}

function renderDictSuggestionsHTML(matches) {
  return `
    <div class="dict-suggestions">
      <h3 style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:12px">
        💡 你是不是要找：
      </h3>
      ${matches.map(w => `
        <div class="dict-suggestion-item" onclick="searchDictionary('${w.word}')">
          <div>
            <span class="word">${w.word}</span>
            <span style="color:var(--text-muted); font-size:0.82rem; margin-left:8px">${w.phonetic}</span>
          </div>
          <span class="meaning">${w.meaning}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderQuickWords() {
  const container = document.getElementById('quick-words-grid');
  // 随机显示20个词 (用副本避免修改原数组)
  const random = [...WORD_BANK].sort(() => Math.random() - 0.5).slice(0, 20);
  container.innerHTML = random.map(w =>
    `<span class="quick-word-chip" onclick="searchDictionary('${w.word}')">${w.word}</span>`
  ).join('');
}

// ==================== 统计页面 ====================
function renderStats() {
  const stats = App.record.wordStats;
  const wordIds = Object.keys(stats);

  let mastered = 0, learning = 0, newWords = WORD_BANK.length - wordIds.length;
  let totalCorrect = 0, totalWrong = 0;

  wordIds.forEach(id => {
    const s = stats[id];
    totalCorrect += s.correct;
    totalWrong += s.wrong;
    if (s.mastery >= 3) mastered++;
    else if (s.mastery >= 1) learning++;
  });

  const totalReviews = totalCorrect + totalWrong;
  const accuracy = totalReviews > 0 ? Math.round((totalCorrect / totalReviews) * 100) : 0;
  const totalWords = WORD_BANK.length;
  const masteryRate = totalWords > 0 ? Math.round((mastered / totalWords) * 100) : 0;

  // 概览
  document.getElementById('stat-overview-mastered').textContent = mastered;
  document.getElementById('stat-overview-learning').textContent = learning;
  document.getElementById('stat-overview-new').textContent = newWords;
  document.getElementById('stat-overview-accuracy').textContent = accuracy + '%';
  document.getElementById('stat-overview-reviews').textContent = totalReviews;
  document.getElementById('stat-overview-tests').textContent = App.record.totalTests;

  // 掌握度进度条
  const masteryBar = document.getElementById('mastery-bar');
  const mPct = (mastered / totalWords) * 100;
  const lPct = (learning / totalWords) * 100;
  const nPct = (newWords / totalWords) * 100;

  masteryBar.innerHTML = `
    ${mPct > 0 ? `<div class="mastery-segment mastered" style="width:${mPct}%">${mPct > 5 ? Math.round(mPct) + '%' : ''}</div>` : ''}
    ${lPct > 0 ? `<div class="mastery-segment learning" style="width:${lPct}%">${lPct > 5 ? Math.round(lPct) + '%' : ''}</div>` : ''}
    ${nPct > 0 ? `<div class="mastery-segment new" style="width:${nPct}%">${nPct > 5 ? Math.round(nPct) + '%' : ''}</div>` : ''}
  `;

  // 按级别统计
  const levelStats = { 1: { mastered: 0, learning: 0, total: 0 }, 2: { mastered: 0, learning: 0, total: 0 }, 3: { mastered: 0, learning: 0, total: 0 } };
  WORD_BANK.forEach(w => {
    const s = stats[w.id];
    levelStats[w.level].total++;
    if (s) {
      if (s.mastery >= 3) levelStats[w.level].mastered++;
      else if (s.mastery >= 1) levelStats[w.level].learning++;
    }
  });

  const levelHtml = [1, 2, 3].map(lv => {
    const ls = levelStats[lv];
    const name = lv === 1 ? '小学 (3-6年级)' : lv === 2 ? '初中 (7-9年级)' : '高中 (必修1-3)';
    const mPct = ls.total > 0 ? (ls.mastered / ls.total) * 100 : 0;
    return `
      <div style="margin-bottom:16px">
        <div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.88rem">
          <span>${name}</span>
          <span style="color:var(--text-secondary)">${ls.mastered}/${ls.total} 已掌握</span>
        </div>
        <div class="progress-bar" style="width:100%">
          <div class="progress-fill" style="width:${mPct}%"></div>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('level-breakdown').innerHTML = levelHtml;

  // 测试历史
  const history = App.record.testHistory.slice().reverse().slice(0, 15);
  const historyEl = document.getElementById('history-list');
  if (history.length === 0) {
    historyEl.innerHTML = `
      <div class="empty-state">
        <div class="icon">📊</div>
        <p>还没有测试记录，快去测试吧！</p>
      </div>
    `;
  } else {
    const modeNames = { en2cn: '英→中', cn2en: '中→英', mixed: '混合' };
    const formatNames = { choice: '选择题', recall: '自评' };
    historyEl.innerHTML = history.map(h => {
      const date = new Date(h.date);
      const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
      const color = h.accuracy >= 75 ? 'var(--success)' : h.accuracy >= 60 ? 'var(--warning)' : 'var(--danger)';
      return `
        <div class="history-item">
          <div class="history-info">
            <span class="history-mode">${modeNames[h.mode] || h.mode} · ${formatNames[h.format] || h.format}</span>
            <span class="history-date">${dateStr}</span>
          </div>
          <div class="history-score" style="color:${color}">${h.accuracy}%</div>
        </div>
      `;
    }).join('');
  }

  // 重置按钮
  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm('确定要清除所有学习记录吗？此操作不可恢复！')) {
        App.record = { wordStats: {}, testHistory: [], totalTests: 0 };
        saveRecord();
        renderStats();
        renderDashboard();
      }
    };
  }
}

// ==================== 试卷模块 ====================

function showExamListView() {
  document.getElementById('exam-list-view').style.display = 'block';
  document.getElementById('exam-taking-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'none';
  // 移除旧的恢复提示
  document.querySelector('.exam-resume-banner')?.remove();
  // 检查是否有未完成的试卷
  checkExamResume();
  renderExamList();
}

function renderExamList() {
  const container = document.getElementById('exam-cards');
  if (typeof EXAM_BANK === 'undefined') {
    container.innerHTML = '<p style="color:var(--text-secondary)">试卷数据加载中...</p>';
    return;
  }
  filterExams();
}

function filterExams() {
  const container = document.getElementById('exam-cards');
  if (typeof EXAM_BANK === 'undefined') return;

  const search = (document.getElementById('exam-search')?.value || '').toLowerCase();
  const stage = document.getElementById('exam-filter-stage')?.value || '';
  const type = document.getElementById('exam-filter-type')?.value || '';

  const filtered = EXAM_BANK.filter(exam => {
    if (search && !exam.title.toLowerCase().includes(search) && !exam.source.toLowerCase().includes(search)) return false;
    if (stage && exam.stage !== stage) return false;
    if (type && exam.type !== type) return false;
    return true;
  });

  document.getElementById('exam-count').textContent = `共 ${filtered.length} 份试卷`;

  container.innerHTML = filtered.map(exam => {
    const totalQuestions = exam.sections.reduce((sum, s) => sum + s.questions.length, 0);
    const practiceScore = exam.sections.reduce((sum, s) => sum + s.questions.reduce((ss, q) => ss + q.score, 0), 0);
    const fullScore = exam.fullScore || practiceScore;
    const scoreDisplay = fullScore > practiceScore
      ? `💯 练习${practiceScore}分 / 原卷${fullScore}分`
      : `💯 ${practiceScore}分`;
    return `
      <div class="exam-card" onclick="showTimePicker('${exam.id}')">
        <div class="exam-card-header">
          <div>
            <div class="exam-card-title">${exam.title}</div>
            <div class="exam-card-subtitle">${exam.subtitle}</div>
          </div>
          <div class="exam-card-tags">
            <span class="exam-tag exam-tag-type">${exam.type}</span>
            <span class="exam-tag exam-tag-grade">${exam.grade}</span>
            <span class="exam-tag exam-tag-year">${exam.year}年</span>
          </div>
        </div>
        ${exam.note ? `<div style="font-size:0.78rem; color:var(--warning); margin:6px 0;">⚠️ ${exam.note}</div>` : ''}
        <div class="exam-card-footer">
          <span>📝 ${totalQuestions} 题</span>
          <span>${scoreDisplay}</span>
          <span>⏱️ 建议用时 ${exam.totalTime} 分钟</span>
          <span>📂 ${exam.sections.length} 个大题</span>
        </div>
        <div class="exam-card-action">开始考试 →</div>
      </div>
    `;
  }).join('');

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:40px;">没有找到匹配的试卷，试试其他筛选条件</p>';
  }
}

function showTimePicker(examId) {
  const exam = EXAM_BANK.find(e => e.id === examId);
  if (!exam) return;

  // 移除已有弹窗
  const existing = document.querySelector('.exam-time-picker');
  if (existing) existing.remove();

  const defaultTime = exam.totalTime;
  const times = [30, 45, 60, 90, 120, 150];

  const overlay = document.createElement('div');
  overlay.className = 'exam-time-picker';
  overlay.innerHTML = `
    <div class="exam-time-picker-content">
      <div class="exam-time-picker-title">⏱️ 选择考试时间</div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px">
        《${exam.title}》· 建议用时 ${defaultTime} 分钟
      </p>
      <div class="exam-time-options">
        ${times.map(t => `
          <button class="exam-time-btn ${t === defaultTime ? 'active' : ''}"
                  onclick="selectExamTime(${t}, this)">${t} 分钟</button>
        `).join('')}
      </div>
      <div class="exam-time-custom">
        自定义：
        <input type="number" id="exam-custom-time" min="1" max="300" value="${defaultTime}" />
        分钟
      </div>
      <div class="instant-feedback-toggle" onclick="toggleInstantFeedback()">
        <div class="toggle-switch"></div>
        <span style="font-size:0.85rem; color:var(--text-secondary);">⚡ 即时反馈模式（做一题看一题解析）</span>
      </div>
      <div class="exam-time-picker-actions">
        <button class="btn btn-ghost" onclick="this.closest('.exam-time-picker').remove()">取消</button>
        <button class="btn btn-ghost" onclick="startExamWithTime('${examId}', 0)">🕐 不限时</button>
        <button class="btn btn-primary" onclick="startExamWithCustomTime('${examId}')">开始考试</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

let selectedExamTime = null;

function selectExamTime(minutes, btn) {
  selectedExamTime = minutes;
  document.querySelectorAll('.exam-time-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('exam-custom-time').value = minutes;
}

function startExamWithCustomTime(examId) {
  const customInput = document.getElementById('exam-custom-time');
  let minutes = selectedExamTime || parseInt(customInput.value) || 0;
  minutes = Math.max(0, minutes);
  startExamWithTime(examId, minutes);
}

function startExamWithTime(examId, timeLimit) {
  // 移除弹窗
  const picker = document.querySelector('.exam-time-picker');
  if (picker) picker.remove();

  const exam = EXAM_BANK.find(e => e.id === examId);
  if (!exam) return;

  // 重置状态
  App.examState.currentExam = exam;
  App.examState.answers = {};
  App.examState.startTime = Date.now();
  App.examState.timeLimit = timeLimit > 0 ? timeLimit : null;
  App.examState.elapsedSeconds = 0;
  selectedExamTime = null;

  // 切换视图
  document.getElementById('exam-list-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'none';
  document.getElementById('exam-taking-view').style.display = 'block';

  // 设置标题
  document.getElementById('exam-taking-title').textContent = exam.title;

  // 渲染题目
  renderExamQuestions(exam);

  // 启动计时器
  startExamTimer();

  // 滚动到顶部
  window.scrollTo(0, 0);
}

function renderExamQuestions(exam) {
  const container = document.getElementById('exam-questions-container');
  let html = '';
  let qNum = 0;

  exam.sections.forEach(section => {
    html += `<div class="exam-section">`;
    html += `<div class="exam-section-title">${section.title}</div>`;
    html += `<div class="exam-section-instruction">${section.instruction}</div>`;

    if (section.passage) {
      html += `<div class="exam-passage">${section.passage}</div>`;
    }

    section.questions.forEach(q => {
      qNum++;
      const options = q.options.map((opt, idx) => {
        const label = String.fromCharCode(65 + idx); // A, B, C, D
        return `
          <div class="exam-option" onclick="selectExamAnswer(${q.id}, '${label}', this)">
            <span class="exam-option-label">${label}.</span>
            <span>${opt}</span>
          </div>
        `;
      }).join('');

      html += `
        <div class="exam-question" id="exam-q-${q.id}">
          <div class="exam-question-text">
            <span class="exam-question-number">${qNum}.</span>${q.question}
          </div>
          <div class="exam-options">${options}</div>
        </div>
      `;
    });

    html += `</div>`;
  });

  container.innerHTML = html;
  updateExamProgress();
}

function selectExamAnswer(questionId, answer, element) {
  App.examState.answers[questionId] = answer;
  // 更新UI
  const questionEl = document.getElementById(`exam-q-${questionId}`);
  if (questionEl) {
    questionEl.querySelectorAll('.exam-option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
  }
  updateExamProgress();

  // 即时反馈模式
  if (instantFeedback) {
    selectExamAnswerInstant(questionId, answer, element);
  }
}

function updateExamProgress() {
  const exam = App.examState.currentExam;
  if (!exam) return;
  const totalQuestions = exam.sections.reduce((sum, s) => sum + s.questions.length, 0);
  const answered = Object.keys(App.examState.answers).length;
  const pct = totalQuestions > 0 ? (answered / totalQuestions * 100) : 0;
  document.getElementById('exam-progress-fill').style.width = pct + '%';
  document.getElementById('exam-progress-text').textContent = `已答 ${answered} / ${totalQuestions} 题`;
}

function startExamTimer() {
  // 清除已有计时器
  if (App.examState.timerInterval) clearInterval(App.examState.timerInterval);

  App.examState.timerInterval = setInterval(() => {
    App.examState.elapsedSeconds++;
    updateExamTimerDisplay();

    // 限时模式：检查是否超时
    if (App.examState.timeLimit) {
      const remaining = App.examState.timeLimit * 60 - App.examState.elapsedSeconds;
      if (remaining <= 0) {
        clearInterval(App.examState.timerInterval);
        alert('⏰ 考试时间到！系统将自动提交试卷。');
        submitExam();
      } else if (remaining <= 300) {
        // 最后5分钟标红
        document.getElementById('exam-timer').classList.add('warning');
      }
    }
  }, 1000);

  updateExamTimerDisplay();
}

function updateExamTimerDisplay() {
  const seconds = App.examState.elapsedSeconds;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const display = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  const timerEl = document.getElementById('exam-timer');
  if (App.examState.timeLimit) {
    const remaining = App.examState.timeLimit * 60 - seconds;
    const rh = Math.floor(remaining / 3600);
    const rm = Math.floor((remaining % 3600) / 60);
    const rs = remaining % 60;
    timerEl.textContent = `⏱️ 剩余 ${String(rh).padStart(2, '0')}:${String(rm).padStart(2, '0')}:${String(rs).padStart(2, '0')}`;
  } else {
    timerEl.textContent = `⏱️ ${display}`;
  }
}

function exitExam() {
  if (confirm('退出考试？已答内容会保存，下次可以继续。')) {
    if (App.examState.timerInterval) clearInterval(App.examState.timerInterval);
    saveExamProgress();
    showExamListView();
  }
}

function submitExam() {
  const exam = App.examState.currentExam;
  if (!exam) return;

  // 检查未答题数
  const totalQuestions = exam.sections.reduce((sum, s) => sum + s.questions.length, 0);
  const answered = Object.keys(App.examState.answers).length;
  const unanswered = totalQuestions - answered;

  if (unanswered > 0) {
    if (!confirm(`还有 ${unanswered} 题未作答，确定提交吗？`)) return;
  }

  // 停止计时器
  if (App.examState.timerInterval) clearInterval(App.examState.timerInterval);

  // 批改
  let correct = 0, wrong = 0, totalScore = 0, earnedScore = 0;
  const wrongQuestions = [];
  const sectionResults = {}; // 按题型统计

  exam.sections.forEach(section => {
    section.questions.forEach(q => {
      const userAnswer = App.examState.answers[q.id] || '未作答';
      const isCorrect = userAnswer === q.answer;

      if (isCorrect) {
        correct++;
        earnedScore += q.score;
      } else {
        wrong++;
        wrongQuestions.push({
          question: q,
          userAnswer,
          isCorrect: false,
        });
      }
      totalScore += q.score;

      // 按题型统计
      if (!sectionResults[section.title]) {
        sectionResults[section.title] = { total: 0, correct: 0 };
      }
      sectionResults[section.title].total++;
      if (isCorrect) sectionResults[section.title].correct++;
    });
  });

  // 切换到结果视图
  document.getElementById('exam-taking-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'block';

  // 计算成绩
  const percentage = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
  const scorePct = totalScore > 0 ? Math.round((earnedScore / totalScore) * 100) : 0;

  // 显示分数
  const fullScore = exam.fullScore || totalScore;
  const scoreText = fullScore > totalScore
    ? `${earnedScore} / ${totalScore} 分（原卷满分${fullScore}分）`
    : `${earnedScore} / ${totalScore} 分`;
  document.getElementById('exam-result-score').textContent = scoreText;
  document.getElementById('exam-result-correct').textContent = correct;
  document.getElementById('exam-result-wrong').textContent = wrong;
  document.getElementById('exam-result-total').textContent = totalQuestions;

  // 用时
  const elapsed = App.examState.elapsedSeconds;
  const mins = Math.floor(elapsed / 60);
  const secs = elapsed % 60;
  document.getElementById('exam-result-time').textContent = `${mins}'${String(secs).padStart(2, '0')}"`;

  // 评价
  let emoji, msg;
  if (scorePct >= 90) { emoji = '🏆'; msg = '优秀！你的英语水平很棒！'; }
  else if (scorePct >= 80) { emoji = '🎉'; msg = '很好！继续保持！'; }
  else if (scorePct >= 60) { emoji = '💪'; msg = '及格了，还有提升空间'; }
  else if (scorePct >= 40) { emoji = '📚'; msg = '需要加强练习，多复习基础'; }
  else { emoji = '🔧'; msg = '基础薄弱，建议系统复习'; }
  document.getElementById('exam-result-emoji').textContent = emoji;
  document.getElementById('exam-result-msg').textContent = msg;

  // 颜色
  const scoreEl = document.getElementById('exam-result-score');
  scoreEl.className = 'result-score ' + (scorePct >= 80 ? 'excellent' : scorePct >= 60 ? 'good' : 'needs-work');

  // 渲染分析报告
  renderExamAnalysis(sectionResults, exam, wrongQuestions, scorePct);

  // 渲染题目回顾
  renderExamReview(exam);

  // 保存到历史记录
  saveExamRecord(exam, correct, wrong, totalQuestions, earnedScore, totalScore, elapsed);

  // 记录每日目标
  recordDailyActivity('exam');

  // 收集错题到错题本（非即时反馈模式下）
  if (!instantFeedback) {
    exam.sections.forEach(section => {
      section.questions.forEach(q => {
        const userAnswer = App.examState.answers[q.id] || '未作答';
        if (userAnswer !== q.answer) {
          addWrongQuestion(q, userAnswer, 'exam', exam.title);
        }
      });
    });
  }

  // 清除试卷进度
  clearExamProgress();

  window.scrollTo(0, 0);
}

function renderExamAnalysis(sectionResults, exam, wrongQuestions, scorePct) {
  const container = document.getElementById('exam-analysis');

  // ===== 收集所有题目数据 =====
  const allQuestions = [];
  exam.sections.forEach(section => {
    section.questions.forEach(q => {
      const userAnswer = App.examState.answers[q.id] || '未作答';
      const isCorrect = userAnswer === q.answer;
      allQuestions.push({
        question: q,
        userAnswer,
        isCorrect,
        section: section.title,
      });
    });
  });

  // ===== 1. 能力维度分析（雷达图）=====
  const skillStats = {}; // skill -> {total, correct}
  allQuestions.forEach(item => {
    const skill = item.question.skill || 'other';
    if (!skillStats[skill]) skillStats[skill] = { total: 0, correct: 0 };
    skillStats[skill].total++;
    if (item.isCorrect) skillStats[skill].correct++;
  });

  const skillNames = {
    grammar: '语法',
    vocabulary: '词汇',
    reading: '阅读理解',
    cloze: '完形填空',
    communication: '情景交际',
    other: '其他',
  };

  // ===== 2. 知识点分析 =====
  const kpStats = {}; // knowledgePoint -> {total, correct}
  allQuestions.forEach(item => {
    const kps = item.question.knowledgePoints || ['未分类'];
    kps.forEach(kp => {
      if (!kpStats[kp]) kpStats[kp] = { total: 0, correct: 0, wrong: [] };
      kpStats[kp].total++;
      if (item.isCorrect) {
        kpStats[kp].correct++;
      } else {
        kpStats[kp].wrong.push(item.question.id);
      }
    });
  });

  // ===== 3. 难度分析 =====
  const diffStats = {}; // difficulty -> {total, correct}
  allQuestions.forEach(item => {
    const diff = item.question.difficulty || 3;
    if (!diffStats[diff]) diffStats[diff] = { total: 0, correct: 0 };
    diffStats[diff].total++;
    if (item.isCorrect) diffStats[diff].correct++;
  });

  // ===== 4. 生成SVG雷达图 =====
  const radarSkills = ['grammar', 'vocabulary', 'reading', 'cloze'];
  const radarData = radarSkills.map(s => {
    const stat = skillStats[s] || { total: 0, correct: 0 };
    return {
      name: skillNames[s] || s,
      pct: stat.total > 0 ? Math.round(stat.correct / stat.total * 100) : 0,
    };
  });

  const radarSvg = generateRadarChart(radarData);

  // ===== 5. 找出薄弱知识点 =====
  const weakKps = Object.entries(kpStats)
    .map(([kp, stat]) => ({
      name: kp,
      total: stat.total,
      correct: stat.correct,
      pct: stat.total > 0 ? Math.round(stat.correct / stat.total * 100) : 0,
    }))
    .filter(x => x.total > 0)
    .sort((a, b) => a.pct - b.pct);

  const strongKps = [...weakKps].sort((a, b) => b.pct - a.pct);

  // ===== 6. 生成个性化建议 =====
  const recommendations = generateRecommendations(scorePct, weakKps, diffStats, skillStats);

  // ===== 渲染HTML =====
  let html = '<div class="exam-analysis-title">📊 高级能力分析报告</div>';

  // 雷达图
  html += `<div class="exam-analysis-section"><h4>🎯 能力雷达图</h4>${radarSvg}</div>`;

  // 各题型得分率（保留原有）
  html += '<div class="exam-analysis-section"><h4>📋 各题型得分率</h4>';
  Object.entries(sectionResults).forEach(([title, result]) => {
    const pct = result.total > 0 ? Math.round(result.correct / result.total * 100) : 0;
    const color = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';
    html += `
      <div class="exam-skill-bar">
        <span class="exam-skill-name">${title}</span>
        <div class="exam-skill-track">
          <div class="exam-skill-fill" style="width:${pct}%; background:${color}"></div>
        </div>
        <span class="exam-skill-pct" style="color:${color}">${result.correct}/${result.total} (${pct}%)</span>
      </div>
    `;
  });
  html += '</div>';

  // 知识点分析
  if (Object.keys(kpStats).length > 0) {
    html += '<div class="exam-analysis-section"><h4>🔬 知识点掌握分析</h4>';
    html += '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">';

    // 薄弱知识点
    html += '<div><p style="color:var(--danger); font-size:0.82rem; margin-bottom:8px;">⚠️ 需要加强</p>';
    weakKps.slice(0, 8).forEach(kp => {
      const color = kp.pct >= 60 ? 'var(--warning)' : 'var(--danger)';
      html += `
        <div class="exam-skill-bar">
          <span class="exam-skill-name" style="min-width:80px">${kp.name}</span>
          <div class="exam-skill-track">
            <div class="exam-skill-fill" style="width:${kp.pct}%; background:${color}"></div>
          </div>
          <span class="exam-skill-pct" style="color:${color}; min-width:55px">${kp.correct}/${kp.total}</span>
        </div>
      `;
    });
    html += '</div>';

    // 掌握较好的知识点
    html += '<div><p style="color:var(--success); font-size:0.82rem; margin-bottom:8px;">✅ 掌握较好</p>';
    strongKps.slice(0, 8).forEach(kp => {
      if (kp.pct >= 80) {
        html += `
          <div class="exam-skill-bar">
            <span class="exam-skill-name" style="min-width:80px">${kp.name}</span>
            <div class="exam-skill-track">
              <div class="exam-skill-fill" style="width:${kp.pct}%; background:var(--success)"></div>
            </div>
            <span class="exam-skill-pct" style="color:var(--success); min-width:55px">${kp.correct}/${kp.total}</span>
          </div>
        `;
      }
    });
    html += '</div></div></div>';
  }

  // 难度分析
  html += '<div class="exam-analysis-section"><h4>📊 难度分布分析</h4>';
  const diffNames = { 1: '基础', 2: '较易', 3: '中等', 4: '较难', 5: '困难' };
  Object.keys(diffStats).sort((a, b) => a - b).forEach(diff => {
    const stat = diffStats[diff];
    const pct = stat.total > 0 ? Math.round(stat.correct / stat.total * 100) : 0;
    const color = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';
    html += `
      <div class="exam-skill-bar">
        <span class="exam-skill-name">${diffNames[diff] || `难度${diff}`}</span>
        <div class="exam-skill-track">
          <div class="exam-skill-fill" style="width:${pct}%; background:${color}"></div>
        </div>
        <span class="exam-skill-pct" style="color:${color}">${stat.correct}/${stat.total} (${pct}%)</span>
      </div>
    `;
  });
  html += '</div>';

  // 个性化学习建议
  html += '<div class="exam-analysis-section"><h4>💡 个性化学习建议</h4>';
  recommendations.forEach(rec => {
    const icon = rec.type === 'strength' ? '✅' : rec.type === 'weakness' ? '⚠️' : rec.type === 'action' ? '🎯' : '📝';
    html += `<p style="margin-bottom:6px;">${icon} ${rec.text}</p>`;
  });
  html += '</div>';

  // 错题模式分析
  if (wrongQuestions.length > 0) {
    html += '<div class="exam-analysis-section"><h4>🔍 错题模式分析</h4>';

    // 分析错误类型
    let blankCount = 0; // 未作答
    let confusedCount = 0; // 干扰项混淆
    wrongQuestions.forEach(wq => {
      if (wq.userAnswer === '未作答') {
        blankCount++;
      } else {
        confusedCount++;
      }
    });

    html += `<p>📊 共答错 ${wrongQuestions.length} 题（${(wrongQuestions.length / allQuestions.length * 100).toFixed(0)}%）</p>`;
    if (blankCount > 0) {
      html += `<p>• ⬜ 未作答：${blankCount} 题 — 建议提高答题速度，合理分配时间</p>`;
    }
    if (confusedCount > 0) {
      html += `<p>• ❌ 选错答案：${confusedCount} 题 — 说明知识点掌握不牢固，易被干扰项迷惑</p>`;
    }

    // 最常错的知识点
    if (weakKps.length > 0 && weakKps[0].pct < 60) {
      html += `<p>• 🔴 最薄弱知识点：<strong>${weakKps[0].name}</strong>（正确率${weakKps[0].pct}%）</p>`;
    }
    html += '</div>';
  }

  // 历史对比
  const records = JSON.parse(localStorage.getItem('examRecords') || '[]');
  if (records.length > 1) {
    html += '<div class="exam-analysis-section"><h4>📈 历史成绩对比</h4>';
    const recent = records.slice(0, 5).reverse();
    recent.forEach((r, i) => {
      const pct = r.totalScore > 0 ? Math.round(r.earnedScore / r.totalScore * 100) : 0;
      const isCurrent = i === recent.length - 1;
      const color = pct >= 80 ? 'var(--success)' : pct >= 60 ? 'var(--warning)' : 'var(--danger)';
      html += `<p style="color:${isCurrent ? 'var(--accent)' : 'var(--text-secondary)'}; font-weight:${isCurrent ? '600' : '400'};">`;
      html += `${isCurrent ? '👉 本次' : '   上次'}：${r.examTitle.substring(0, 20)}... → ${r.earnedScore}/${r.totalScore}分 (${pct}%)`;
      html += `</p>`;
    });
    html += '</div>';
  }

  container.innerHTML = html;
}

// ===== 生成SVG雷达图 =====
function generateRadarChart(data) {
  const size = 200;
  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = 70;
  const sides = data.length;

  // 计算各点坐标
  const points = data.map((d, i) => {
    const angle = (Math.PI * 2 * i / sides) - Math.PI / 2;
    const radius = (d.pct / 100) * maxRadius;
    return {
      x: cx + Math.cos(angle) * radius,
      y: cy + Math.sin(angle) * radius,
      labelX: cx + Math.cos(angle) * (maxRadius + 20),
      labelY: cy + Math.sin(angle) * (maxRadius + 20),
      name: d.name,
      pct: d.pct,
    };
  });

  // 网格圆
  let gridCircles = '';
  for (let r = 20; r <= maxRadius; r += 20) {
    let circlePoints = '';
    for (let i = 0; i <= sides; i++) {
      const angle = (Math.PI * 2 * i / sides) - Math.PI / 2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      circlePoints += `${x},${y} `;
    }
    gridCircles += `<polygon points="${circlePoints}" fill="none" stroke="var(--border)" stroke-width="0.5" opacity="0.5"/>`;
  }

  // 数据多边形
  const dataPoints = points.map(p => `${p.x},${p.y}`).join(' ');
  const labels = points.map(p =>
    `<text x="${p.labelX}" y="${p.labelY}" text-anchor="middle" dominant-baseline="middle" fill="var(--text-secondary)" font-size="11">${p.name}</text>
     <text x="${p.labelX}" y="${p.labelY + 13}" text-anchor="middle" fill="var(--accent)" font-size="10" font-weight="bold">${p.pct}%</text>`
  ).join('');

  return `
    <div style="display:flex; justify-content:center; margin:10px 0;">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        ${gridCircles}
        <polygon points="${dataPoints}" fill="rgba(99,102,241,0.2)" stroke="var(--accent)" stroke-width="2"/>
        ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3" fill="var(--accent)"/>`).join('')}
        ${labels}
      </svg>
    </div>
  `;
}

// ===== 生成个性化建议 =====
function generateRecommendations(scorePct, weakKps, diffStats, skillStats) {
  const recs = [];

  // 总体评价
  if (scorePct >= 90) {
    recs.push({ type: 'strength', text: '总体表现优秀！英语综合能力很强，可以挑战更高难度的试卷。' });
  } else if (scorePct >= 75) {
    recs.push({ type: 'strength', text: '总体表现良好！基础扎实，在部分知识点上还有提升空间。' });
  } else if (scorePct >= 60) {
    recs.push({ type: 'weakness', text: '刚刚及格，基础知识和解题技巧都需要加强。' });
  } else {
    recs.push({ type: 'weakness', text: '未达及格线，建议系统复习基础知识后再做套题练习。' });
  }

  // 薄弱知识点建议
  const reallyWeak = weakKps.filter(k => k.pct < 60 && k.total >= 1);
  if (reallyWeak.length > 0) {
    const top3 = reallyWeak.slice(0, 3).map(k => k.name).join('、');
    recs.push({ type: 'action', text: `重点复习知识点：${top3}。建议查阅课本相关章节，做针对性练习。` });
  }

  // 难度分析建议
  const easyWrong = diffStats[1] || diffStats[2];
  if (easyWrong && easyWrong.total > 0 && easyWrong.correct / easyWrong.total < 0.8) {
    recs.push({ type: 'weakness', text: '基础题失分较多，说明基本功不够扎实。建议回归课本，夯实基础词汇和语法。' });
  }
  const hardStat = diffStats[4] || diffStats[5];
  if (hardStat && hardStat.total > 0 && hardStat.correct / hardStat.total < 0.5) {
    recs.push({ type: 'weakness', text: '难题正确率偏低，说明综合运用能力不足。建议多读英语文章，提升语感和推理能力。' });
  }

  // 技能维度建议
  const readingStat = skillStats['reading'];
  if (readingStat && readingStat.total > 0 && readingStat.correct / readingStat.total < 0.6) {
    recs.push({ type: 'action', text: '阅读理解薄弱，建议每天阅读1-2篇英语短文，练习快速定位信息和理解主旨。' });
  }
  const grammarStat = skillStats['grammar'];
  if (grammarStat && grammarStat.total > 0 && grammarStat.correct / grammarStat.total < 0.6) {
    recs.push({ type: 'action', text: '语法薄弱，建议系统复习时态、语态、从句等核心语法点，配合专项练习。' });
  }
  const vocabStat = skillStats['vocabulary'];
  if (vocabStat && vocabStat.total > 0 && vocabStat.correct / vocabStat.total < 0.6) {
    recs.push({ type: 'action', text: '词汇量不足，建议利用本系统的词汇测试功能，每天背诵20-30个新单词。' });
  }

  // 优势肯定
  const strongSkills = Object.entries(skillStats).filter(([s, stat]) =>
    stat.total >= 2 && stat.correct / stat.total >= 0.8
  );
  if (strongSkills.length > 0) {
    const names = strongSkills.map(([s]) => skillNames[s] || s).join('、');
    recs.push({ type: 'strength', text: `${names}表现突出，继续保持！` });
  }

  return recs;
}

function renderExamReview(exam) {
  const container = document.getElementById('exam-review-list');
  let html = '<div class="exam-section-title" style="margin-bottom:16px">📝 题目详情与解析</div>';
  let qNum = 0;

  exam.sections.forEach(section => {
    html += `<div class="exam-section">`;
    html += `<div class="exam-section-title">${section.title}</div>`;
    if (section.passage) {
      html += `<div class="exam-passage">${section.passage}</div>`;
    }

    section.questions.forEach(q => {
      qNum++;
      const userAnswer = App.examState.answers[q.id] || '未作答';
      const isCorrect = userAnswer === q.answer;

      // 选项渲染
      const optionsHtml = q.options.map((opt, idx) => {
        const label = String.fromCharCode(65 + idx);
        let cls = 'exam-option';
        if (label === q.answer) cls += ' correct';
        else if (label === userAnswer && !isCorrect) cls += ' wrong';
        return `<div class="${cls}"><span class="exam-option-label">${label}.</span><span>${opt}</span></div>`;
      }).join('');

      html += `
        <div class="exam-question">
          <div class="exam-question-text">
            <span class="exam-question-number">${qNum}.</span>${q.question}
          </div>
          <div class="exam-options">${optionsHtml}</div>
          <div class="exam-question-explanation">
            <strong>正确答案：${q.answer}</strong> | ${q.explanation || '暂无解析'}
          </div>
        </div>
      `;
    });
    html += '</div>';
  });

  container.innerHTML = html;
}

function backToExamList() {
  showExamListView();
}

function retakeExam() {
  if (App.examState.currentExam) {
    startExamWithTime(App.examState.currentExam.id, App.examState.timeLimit || 0);
  }
}

function saveExamRecord(exam, correct, wrong, total, earnedScore, totalScore, elapsed) {
  const records = JSON.parse(localStorage.getItem('examRecords') || '[]');
  records.unshift({
    examId: exam.id,
    examTitle: exam.title,
    examType: exam.type,
    correct,
    wrong,
    total,
    earnedScore,
    totalScore,
    elapsed,
    date: new Date().toISOString(),
  });
  // 只保留最近50条
  if (records.length > 50) records.length = 50;
  localStorage.setItem('examRecords', JSON.stringify(records));
}

// ==================== 主题切换 ====================
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.querySelector('.theme-toggle').textContent = next === 'dark' ? '🌙' : '☀️';
}

function initTheme() {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  const btn = document.querySelector('.theme-toggle');
  if (btn) btn.textContent = saved === 'dark' ? '🌙' : '☀️';
}

// ==================== 键盘快捷键 ====================
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // 试卷答题中
    const examRunning = document.getElementById('exam-taking-view');
    if (examRunning && examRunning.style.display !== 'none') {
      handleExamKeyboard(e);
      return;
    }
    // 词汇测试中
    const testRunning = document.getElementById('page-test-running');
    if (testRunning && testRunning.style.display !== 'none') {
      handleTestKeyboard(e);
      return;
    }
  });
}

function handleExamKeyboard(e) {
  // A/B/C/D 选答案
  const key = e.key.toUpperCase();
  if (['A', 'B', 'C', 'D', 'E'].includes(key)) {
    const idx = key.charCodeAt(0) - 65;
    const firstQuestion = document.querySelector('.exam-question .exam-option');
    if (!firstQuestion) return;
    // 找到当前可视的第一个未答题目
    const questions = document.querySelectorAll('.exam-question');
    for (const q of questions) {
      const qId = q.id.replace('exam-q-', '');
      if (!App.examState.answers[qId]) {
        const options = q.querySelectorAll('.exam-option');
        if (options[idx]) {
          options[idx].click();
          // 滚动到下一题
          const nextQ = q.nextElementSibling;
          if (nextQ && nextQ.classList.contains('exam-question')) {
            nextQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        break;
      }
    }
  }
}

function handleTestKeyboard(e) {
  const key = e.key.toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(key)) {
    const idx = key.charCodeAt(0) - 65;
    const options = document.querySelectorAll('#question-body .choice-option, #question-body .option-btn');
    if (options[idx]) options[idx].click();
  }
}

// ==================== 即时反馈模式 ====================
let instantFeedback = false;

function toggleInstantFeedback() {
  instantFeedback = !instantFeedback;
  const el = document.querySelector('.instant-feedback-toggle');
  if (el) el.classList.toggle('active', instantFeedback);
}

// 在试卷答题中，选中后即时反馈
function selectExamAnswerInstant(questionId, answer, element) {
  selectExamAnswer(questionId, answer, element);

  if (instantFeedback) {
    const exam = App.examState.currentExam;
    let qData = null;
    for (const s of exam.sections) {
      qData = s.questions.find(q => q.id === questionId);
      if (qData) break;
    }
    if (!qData) return;

    const isCorrect = answer === qData.answer;
    const questionEl = document.getElementById(`exam-q-${questionId}`);
    if (!questionEl) return;

    // 标记对错
    questionEl.querySelectorAll('.exam-option').forEach(opt => {
      const label = opt.querySelector('.exam-option-label')?.textContent?.replace('.', '');
      if (label === qData.answer) {
        opt.classList.add('correct');
      } else if (label === answer && !isCorrect) {
        opt.classList.add('wrong');
      }
    });

    // 显示解析
    const existing = questionEl.querySelector('.exam-question-explanation');
    if (!existing) {
      const expDiv = document.createElement('div');
      expDiv.className = 'exam-question-explanation';
      expDiv.innerHTML = `<strong>${isCorrect ? '✅ 正确！' : '❌ 错误'}</strong> 正确答案：${qData.answer}\n${qData.explanation || ''}`;
      questionEl.appendChild(expDiv);
    }

    // 记录错题
    if (!isCorrect) {
      addWrongQuestion(qData, answer, 'exam', exam.title);
    }
  }
}

// ==================== 错题本 ====================
function getWrongBook() {
  return JSON.parse(localStorage.getItem('wrongBook') || '[]');
}

function addWrongQuestion(question, userAnswer, source, sourceTitle) {
  const book = getWrongBook();
  // 避免重复（同题同来源）
  const exists = book.find(w => w.questionId === question.id && w.sourceTitle === sourceTitle);
  if (!exists) {
    book.unshift({
      id: Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      questionId: question.id,
      question: question.question,
      options: question.options,
      answer: question.answer,
      userAnswer,
      explanation: question.explanation || '',
      knowledgePoints: question.knowledgePoints || [],
      skill: question.skill || '',
      source,
      sourceTitle,
      date: new Date().toISOString(),
      mastered: false,
    });
    localStorage.setItem('wrongBook', JSON.stringify(book));
  }
}

function renderWrongBook() {
  const container = document.getElementById('wrong-list');
  const statsContainer = document.getElementById('wrong-stats');
  let book = getWrongBook();

  if (book.length === 0) {
    statsContainer.innerHTML = '';
    container.innerHTML = '<div style="text-align:center; padding:60px; color:var(--text-secondary);"><div style="font-size:3rem; margin-bottom:12px;">🎉</div><p>错题本是空的！</p><p style="font-size:0.85rem; margin-top:8px;">去做些测试或试卷，答错的题会自动收集到这里</p></div>';
    return;
  }

  // 统计
  const mastered = book.filter(w => w.mastered).length;
  const learning = book.length - mastered;
  statsContainer.innerHTML = `
    <div class="wrong-stat-card"><div class="wrong-stat-num" style="color:var(--danger)">${learning}</div><div class="wrong-stat-label">待复习</div></div>
    <div class="wrong-stat-card"><div class="wrong-stat-num" style="color:var(--success)">${mastered}</div><div class="wrong-stat-label">已掌握</div></div>
    <div class="wrong-stat-card"><div class="wrong-stat-num" style="color:var(--accent)">${book.length}</div><div class="wrong-stat-label">总错题</div></div>
  `;

  // 更新知识点筛选
  const kpSet = new Set();
  book.forEach(w => w.knowledgePoints.forEach(kp => kpSet.add(kp)));
  const kpSelect = document.getElementById('wrong-filter-kp');
  const currentKp = kpSelect.value;
  kpSelect.innerHTML = '<option value="">全部知识点</option>' +
    [...kpSet].sort().map(kp => `<option value="${kp}" ${kp === currentKp ? 'selected' : ''}>${kp}</option>`).join('');

  // 筛选
  const filterKp = kpSelect.value;
  const filterSource = document.getElementById('wrong-filter-source').value;
  const showMastered = document.getElementById('wrong-show-mastered').checked;

  let filtered = book.filter(w => {
    if (!showMastered && w.mastered) return false;
    if (filterKp && !w.knowledgePoints.includes(filterKp)) return false;
    if (filterSource && w.source !== filterSource) return false;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:40px; color:var(--text-secondary);">没有符合条件的错题</p>';
    return;
  }

  container.innerHTML = filtered.map(w => `
    <div class="wrong-item ${w.mastered ? 'mastered' : ''}">
      <div class="wrong-item-header">
        <div class="wrong-item-tags">
          ${w.knowledgePoints.map(kp => `<span class="wrong-kp-tag">${kp}</span>`).join('')}
          <span class="wrong-source-tag">${w.source === 'exam' ? '📋' : '📝'} ${w.sourceTitle.substring(0, 20)}</span>
        </div>
        <span style="font-size:0.72rem; color:var(--text-muted);">${new Date(w.date).toLocaleDateString('zh-CN')}</span>
      </div>
      <div class="wrong-item-question">${w.question}</div>
      <div class="wrong-item-answers">
        <span class="your-ans">你的答案：${w.userAnswer}</span>
        <span class="correct-ans">正确答案：${w.answer}</span>
      </div>
      ${w.explanation ? `<div class="exam-question-explanation" style="margin-top:8px;">${w.explanation}</div>` : ''}
      <div class="wrong-item-actions">
        <button onclick="toggleWrongMastered('${w.id}')">${w.mastered ? '↩️ 标记未掌握' : '✅ 标记已掌握'}</button>
        <button onclick="deleteWrongItem('${w.id}')">🗑️ 删除</button>
      </div>
    </div>
  `).join('');
}

function toggleWrongMastered(id) {
  const book = getWrongBook();
  const item = book.find(w => w.id === id);
  if (item) {
    item.mastered = !item.mastered;
    localStorage.setItem('wrongBook', JSON.stringify(book));
    renderWrongBook();
  }
}

function deleteWrongItem(id) {
  let book = getWrongBook();
  book = book.filter(w => w.id !== id);
  localStorage.setItem('wrongBook', JSON.stringify(book));
  renderWrongBook();
}

function clearAllWrong() {
  if (confirm('确定清空所有错题吗？此操作不可撤销。')) {
    localStorage.setItem('wrongBook', '[]');
    renderWrongBook();
  }
}

// ==================== 单词收藏夹 ====================
function getFavorites() {
  return JSON.parse(localStorage.getItem('wordFavorites') || '[]');
}

function toggleFavorite(wordId) {
  let favs = getFavorites();
  const idx = favs.indexOf(wordId);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(wordId);
  }
  localStorage.setItem('wordFavorites', JSON.stringify(favs));
  return idx < 0; // 返回是否已收藏
}

function isFavorite(wordId) {
  return getFavorites().includes(wordId);
}

// ==================== 每日学习目标 ====================
function getDailyGoals() {
  const today = new Date().toDateString();
  // 读取自定义目标设置（持久化，不随日期重置）
  const settings = JSON.parse(localStorage.getItem('goalSettings') || '{}');
  const wordsTarget = settings.wordsTarget || 20;
  const examTarget = settings.examTarget || 1;
  const testTarget = settings.testTarget || 1;

  const data = JSON.parse(localStorage.getItem('dailyGoals') || '{}');
  if (data.date !== today) {
    // 新的一天，重置完成数但保留目标设置
    return {
      date: today,
      wordsTarget, wordsDone: 0,
      examTarget, examDone: 0,
      testTarget, testDone: 0,
    };
  }
  // 确保目标值是最新的（用户可能刚改过）
  data.wordsTarget = wordsTarget;
  data.examTarget = examTarget;
  data.testTarget = testTarget;
  return data;
}

function saveDailyGoals(data) {
  localStorage.setItem('dailyGoals', JSON.stringify(data));
}

function saveGoalSettings(settings) {
  localStorage.setItem('goalSettings', JSON.stringify(settings));
  // 同步更新今天的进度
  const goals = getDailyGoals();
  goals.wordsTarget = settings.wordsTarget;
  goals.examTarget = settings.examTarget;
  goals.testTarget = settings.testTarget;
  saveDailyGoals(goals);
  renderDailyGoals();
}

function recordDailyActivity(type, count = 1) {
  const goals = getDailyGoals();
  if (type === 'word') goals.wordsDone += count;
  if (type === 'exam') goals.examDone += count;
  if (type === 'test') goals.testDone += count;
  saveDailyGoals(goals);
  // 记录到学习日历
  logStudyActivity(type, count);
}

// ==================== 学习打卡日历 ====================
function logStudyActivity(type, count) {
  const today = new Date().toISOString().slice(0, 10);
  const log = JSON.parse(localStorage.getItem('studyLog') || '{}');
  if (!log[today]) log[today] = { words: 0, tests: 0, exams: 0, total: 0 };
  if (type === 'word') log[today].words += count;
  if (type === 'test') log[today].tests += count;
  if (type === 'exam') log[today].exams += count;
  log[today].total = log[today].words + log[today].tests * 10 + log[today].exams * 20;
  localStorage.setItem('studyLog', JSON.stringify(log));
}

function getStudyLog() {
  return JSON.parse(localStorage.getItem('studyLog') || '{}');
}

function calculateStreak(log) {
  const dates = Object.keys(log).sort();
  if (dates.length === 0) return { current: 0, longest: 0 };
  
  // 当前连胜
  let current = 0;
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);
  const yesterdayStr = new Date(today.getTime() - 86400000).toISOString().slice(0, 10);
  
  if (log[todayStr]) {
    current = 1;
    let d = new Date(today);
    while (true) {
      d.setDate(d.getDate() - 1);
      const ds = d.toISOString().slice(0, 10);
      if (log[ds]) current++;
      else break;
    }
  } else if (log[yesterdayStr]) {
    current = 1;
    let d = new Date(today.getTime() - 86400000);
    while (true) {
      d.setDate(d.getDate() - 1);
      const ds = d.toISOString().slice(0, 10);
      if (log[ds]) current++;
      else break;
    }
  }

  // 最长连胜
  let longest = 0;
  let tempStreak = 0;
  let prevDate = null;
  dates.forEach(d => {
    if (prevDate) {
      const diff = (new Date(d) - new Date(prevDate)) / 86400000;
      if (diff === 1) tempStreak++;
      else tempStreak = 1;
    } else {
      tempStreak = 1;
    }
    longest = Math.max(longest, tempStreak);
    prevDate = d;
  });

  return { current, longest };
}

function renderStudyCalendar() {
  const container = document.getElementById('study-calendar');
  if (!container) return;
  const log = getStudyLog();
  const { current, longest } = calculateStreak(log);

  // 生成最近12周的热力图
  const weeks = 12;
  const days = [];
  const today = new Date();
  // 从今天往前推12周
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - (weeks * 7 - 1));
  // 调整到周日开始
  startDate.setDate(startDate.getDate() - startDate.getDay());

  for (let w = 0; w < weeks; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + w * 7 + d);
      const dateStr = date.toISOString().slice(0, 10);
      const isFuture = date > today;
      const activity = log[dateStr];
      let level = 0;
      if (activity) {
        if (activity.total >= 50) level = 4;
        else if (activity.total >= 20) level = 3;
        else if (activity.total >= 5) level = 2;
        else if (activity.total > 0) level = 1;
      }
      week.push({ date: dateStr, level, isFuture, day: date.getDate(), month: date.getMonth() + 1 });
    }
    days.push(week);
  }

  const monthLabels = [];
  let lastMonth = -1;
  days.forEach((week, i) => {
    const firstDay = week[0];
    if (firstDay.month !== lastMonth && !firstDay.isFuture) {
      monthLabels.push({ week: i, label: firstDay.month + '月' });
      lastMonth = firstDay.month;
    }
  });

  const colors = ['var(--bg-secondary)', 'rgba(99,102,241,0.25)', 'rgba(99,102,241,0.5)', 'rgba(99,102,241,0.75)', 'var(--accent)'];

  container.innerHTML = `
    <div class="study-calendar-header">
      <div>
        <span class="study-calendar-title">📅 学习打卡</span>
        <span class="study-streak">🔥 连续 ${current} 天</span>
        ${longest > 0 ? `<span class="study-best">🏆 最长 ${longest} 天</span>` : ''}
      </div>
      <span class="study-total">累计 ${Object.keys(log).length} 天</span>
    </div>
    <div class="heatmap-container">
      <div class="heatmap-months">
        ${monthLabels.map(m => `<span style="grid-column:${m.week + 1}">${m.label}</span>`).join('')}
      </div>
      <div style="display:flex;gap:2px;">
        <div class="heatmap-weekdays">
          <span>一</span><span></span><span>三</span><span></span><span>五</span><span></span><span>日</span>
        </div>
        <div class="heatmap-grid">
          ${days.map(week => `
            <div class="heatmap-week">
              ${week.map(day => `
                <div class="heatmap-cell level-${day.level} ${day.isFuture ? 'future' : ''}"
                     title="${day.date} ${day.level > 0 ? '· 已学习' : ''}"></div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>
      <div class="heatmap-legend">
        <span style="font-size:0.72rem;color:var(--text-muted);">少</span>
        ${colors.map(c => `<div class="heatmap-cell" style="background:${c};width:11px;height:11px;"></div>`).join('')}
        <span style="font-size:0.72rem;color:var(--text-muted);">多</span>
      </div>
    </div>
  `;
}

// ==================== 火宝宝 · 连续打卡奖励系统 ====================
// 每个等级含两套主题：火系（首页/标准版）+ 冰系（雅思页）。其它文案（title/reward/desc）共用。
const HUOBAO_LEVELS = [
  { lv: 1, name: '小火苗',   iceName: '小冰晶',   min: 0,   emoji: '🔥', iceEmoji: '❄️', color: '#fb923c', desc: '刚刚点燃，每天都来喂火吧！',       iceDesc: '刚刚凝结，每天都来养冰吧！',         title: '萌新小火',   iceTitle: '萌新小冰',  reward: '点亮火宝宝，开启你的连续打卡之旅',       iceReward: '点亮小冰人，开启你的连续打卡之旅' },
  { lv: 2, name: '跳跳火',   iceName: '跳跳冰',   min: 3,   emoji: '🔥', iceEmoji: '❄️', color: '#f97316', desc: '连续 3 天，火苗稳住了',         iceDesc: '连续 3 天，冰晶稳固了',           title: '三日萌新',   iceTitle: '三日萌冰',  reward: '解锁「跳跳火」头像框 · 火宝宝动作更活泼',  iceReward: '解锁「跳跳冰」头像框 · 小冰人动作更活泼' },
  { lv: 3, name: '烈焰宝宝', iceName: '冰晶宝宝', min: 7,   emoji: '🔥', iceEmoji: '❄️', color: '#ef4444', desc: '坚持一周，超棒！',             iceDesc: '坚持一周，超棒！',             title: '周更达人',   iceTitle: '周更学徒',  reward: '解锁火焰主题光效 · 打卡卡片专属暖色底',    iceReward: '解锁冰晶主题光效 · 打卡卡片专属冷色底' },
  { lv: 4, name: '炽焰精灵', iceName: '寒霜精灵', min: 14,  emoji: '🔥', iceEmoji: '❄️', color: '#ec4899', desc: '两周不间断，渐入佳境',         iceDesc: '两周不间断，渐入佳境',         title: '半月骑士',   iceTitle: '半月骑士',  reward: '解锁「炽焰精灵」称号牌 · 成就墙点亮',       iceReward: '解锁「寒霜精灵」称号牌 · 成就墙点亮' },
  { lv: 5, name: '炎龙之魂', iceName: '冰龙之魂', min: 30,  emoji: '🔥', iceEmoji: '❄️', color: '#a855f7', desc: '月度学习战士',               iceDesc: '月度学习战士',               title: '月度战神',   iceTitle: '月度战神',  reward: '解锁金色流光特效 · 专属荣誉徽章',         iceReward: '解锁蓝白流光特效 · 专属荣誉徽章' },
  { lv: 6, name: '不灭圣火', iceName: '不灭玄冰', min: 60,  emoji: '🔥', iceEmoji: '❄️', color: '#6366f1', desc: '两个月坚如磐石',             iceDesc: '两个月坚如磐石',             title: '两月磐石',   iceTitle: '两月磐冰',  reward: '解锁「不灭圣火」终身勋章 · 段位永久展示',   iceReward: '解锁「不灭玄冰」终身勋章 · 段位永久展示' },
  { lv: 7, name: '传说火神', iceName: '传说冰神', min: 100, emoji: '🔥', iceEmoji: '❄️', color: '#f59e0b', desc: '百天传奇，封神！',           iceDesc: '百天传奇，封冰！',           title: '百天传奇',   iceTitle: '百天传奇',  reward: '解锁传说称号 + 终身荣誉墙 · 全站最靓的仔', iceReward: '解锁传说称号 + 终身荣誉墙 · 全站最靓的仔' },
];

// 按 variant 取等级展示字段（火/冰）
function pickLevelFields(L, variant) {
  return {
    name: variant === 'ice' ? L.iceName : L.name,
    emoji: variant === 'ice' ? L.iceEmoji : L.emoji,
  };
}

function getHuobaoLevel(streak) {
  let lvl = HUOBAO_LEVELS[0];
  for (const L of HUOBAO_LEVELS) if (streak >= L.min) lvl = L;
  return lvl;
}

function getStreakState() {
  const log = getStudyLog();
  const { current, longest } = calculateStreak(log);
  const today = new Date().toISOString().slice(0, 10);
  const checkedInToday = !!(log[today] && log[today].checkedIn);
  return { current, longest, checkedInToday, total: Object.keys(log).length };
}

function markDailyCheckIn() {
  const isIce = document.body.dataset.appMode === 'ielts';
  const today = new Date().toISOString().slice(0, 10);
  const log = getStudyLog();
  if (!log[today]) log[today] = { words: 0, tests: 0, exams: 0, total: 0 };
  if (log[today].checkedIn) { renderHuobao(); return; }
  log[today].checkedIn = true;
  log[today].total = Math.max(log[today].total || 0, 1);
  localStorage.setItem('studyLog', JSON.stringify(log));
  const { current } = getStreakState();
  const lvl = getHuobaoLevel(current);
  // 升级 / 解锁检测：在 render 之前读取旧的 seen 等级
  const seen = parseInt(localStorage.getItem('huobao_seen_level') || '1', 10);
  let unlocked = JSON.parse(localStorage.getItem('huobao_unlocked') || '[]');
  const newUnlocked = HUOBAO_LEVELS.filter(L => L.min > 0 && current >= L.min && !unlocked.includes(L.lv)).map(L => L.lv);
  renderHuobao();
  renderStudyCalendar();
  if (newUnlocked.length) {
    unlocked = unlocked.concat(newUnlocked);
    localStorage.setItem('huobao_unlocked', JSON.stringify(unlocked));
  }
  if (lvl.lv > seen) {
    localStorage.setItem('huobao_seen_level', String(lvl.lv));
    spawnConfetti(130);
    showLevelUpBanner(lvl, isIce);
    playSound('levelup');
  } else if (newUnlocked.length) {
    const L = HUOBAO_LEVELS.find(x => x.lv === newUnlocked[newUnlocked.length - 1]);
    spawnConfetti(80);
    showLevelUpBanner(L, isIce);
    playSound('unlock');
  } else {
    playSound('checkin');
    showToast(isIce
      ? `❄️ 打卡成功！小冰人已连续冻结 ${current} 天 · ${lvl.iceName}`
      : `🔥 打卡成功！火宝宝已连续燃烧 ${current} 天 · ${lvl.name}`);
  }
}

// ==================== 火麒麟 7 级（图片素材，严格按「火宝宝7级升级图鉴」参考图抠图） ====================
// 直接加载 assets/qilin/qilin-1..7.png（透明背景），不画一笔路径，保证与参考图一模一样
function flameSvg(lv) {
  lv = Math.max(1, Math.min(7, lv | 0 || 1));
  return `<img class="hb-img" src="assets/qilin/qilin-${lv}.png" alt="火麒麟 Lv.${lv}" draggable="false" />`;
}

// 雅思页「小冰人」——复用同一张麒麟图，CSS 用 hue-rotate 把火色变成冰色
function iceSvg(lv) {
  lv = Math.max(1, Math.min(7, lv | 0 || 1));
  return `<img class="hb-img hb-img-ice" src="assets/qilin/qilin-${lv}.png" alt="小冰人 Lv.${lv}" draggable="false" />`;
}

const ICE_COLOR = '#38bdf8'; // 雅思页小冰人主题色（冰蓝）

// ==================== 火宝宝音效（Web Audio，无需外部文件） ====================
let _hbAudioCtx = null;
function playSound(type) {
  try {
    if (!_hbAudioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      _hbAudioCtx = new AC();
    }
    const ctx = _hbAudioCtx;
    if (ctx.state === 'suspended') ctx.resume();
    const now = ctx.currentTime;
    // 每个音效 = 一串 [频率, 延迟(秒), 时长(秒)]
    const patterns = {
      checkin: [[660, 0, 0.12], [880, 0.08, 0.16]],
      levelup: [[523, 0, 0.10], [659, 0.10, 0.10], [784, 0.20, 0.10], [1047, 0.30, 0.26]],
      unlock:  [[784, 0, 0.10], [1047, 0.10, 0.20]],
      poke:    [[523, 0, 0.06], [330, 0.05, 0.09]],
      click:   [[520, 0, 0.05]],
    };
    const beeps = patterns[type] || patterns.click;
    beeps.forEach(([f, t, d]) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      o.connect(g); g.connect(ctx.destination);
      const s = now + t;
      g.gain.setValueAtTime(0.0001, s);
      g.gain.linearRampToValueAtTime(0.18, s + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, s + d);
      o.start(s); o.stop(s + d + 0.03);
    });
  } catch (e) { /* 音效失败不影响主流程 */ }
}

// ==================== 火宝宝庆祝动效 ====================
const HB_CONFETTI_COLORS = ['#fb923c','#f97316','#ef4444','#ec4899','#a855f7','#6366f1','#f59e0b','#22c55e','#06b6d4','#facc15'];

function spawnConfetti(count = 90) {
  let layer = document.getElementById('hb-confetti');
  if (!layer) {
    layer = document.createElement('div');
    layer.id = 'hb-confetti';
    layer.className = 'hb-confetti';
    document.body.appendChild(layer);
  }
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'hb-confetti-piece';
    p.style.background = HB_CONFETTI_COLORS[Math.floor(Math.random() * HB_CONFETTI_COLORS.length)];
    p.style.left = (Math.random() * 100) + 'vw';
    p.style.animationDuration = (1.1 + Math.random() * 1.2) + 's';
    p.style.animationDelay = (Math.random() * 0.35) + 's';
    p.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
    p.style.borderRadius = Math.random() > 0.5 ? '2px' : '50%';
    layer.appendChild(p);
    setTimeout(() => p.remove(), 2800);
  }
}

function showLevelUpBanner(lvl, isIce) {
  isIce = isIce !== undefined ? isIce : (document.body.dataset.appMode === 'ielts');
  let b = document.getElementById('hb-levelup');
  if (!b) {
    b = document.createElement('div');
    b.id = 'hb-levelup';
    b.className = 'hb-levelup';
    document.body.appendChild(b);
  }
  b.innerHTML = `<div class="hb-levelup-card" style="--huo-color:${lvl.color}">
      <div class="hb-levelup-emoji">${isIce ? '🧊' : '🎉'}</div>
      <div class="hb-levelup-title">${isIce ? '小冰人升级啦！' : '火宝宝升级啦！'}</div>
      <div class="hb-levelup-lv" style="color:${lvl.color}">Lv.${lvl.lv} ${isIce ? lvl.iceName : lvl.name}</div>
      <div class="hb-levelup-title2">🏅 ${lvl.title}</div>
      <div class="hb-levelup-reward">${lvl.reward}</div>
    </div>`;
  void b.offsetWidth;
  b.classList.add('show');
  clearTimeout(b._t);
  b._t = setTimeout(() => b.classList.remove('show'), 3300);
}

function showBadgeReward(lv) {
  const L = HUOBAO_LEVELS.find(x => x.lv === lv);
  if (!L) return;
  const cur = getStreakState().current;
  const reached = cur >= L.min;
  const isIce = document.body.dataset.appMode === 'ielts';
  const Lname = isIce ? L.iceName : L.name;
  const Lemo  = isIce ? L.iceEmoji : L.emoji;
  let m = document.getElementById('hb-reward-modal');
  if (!m) {
    m = document.createElement('div');
    m.id = 'hb-reward-modal';
    m.className = 'hb-reward-modal';
    document.body.appendChild(m);
  }
  m.innerHTML = `
    <div class="hb-reward-card" style="--huo-color:${L.color}">
      <button class="hb-reward-close" onclick="closeHbReward()">✕</button>
      <div class="hb-reward-emoji">${isIce ? '🧊' : Lemo}</div>
      <div class="hb-reward-lv">Lv.${L.lv} · ${Lname}</div>
      <div class="hb-reward-title">🏅 段位称号：${isIce ? (L.iceTitle || L.title) : L.title}</div>
      <div class="hb-reward-desc">${isIce ? (L.iceReward || L.reward) : L.reward}</div>
      <div class="hb-reward-status ${reached ? 'got' : ''}">${reached ? '✅ 已解锁，荣誉归你！' : ('🔒 还需连续 ' + (L.min - cur) + ' 天解锁')}</div>
      <button class="hb-reward-share" onclick="shareHuobaoReward(${L.lv})">📤 复制我的成就语</button>
    </div>`;
  void m.offsetWidth;
  m.classList.add('show');
  playSound('unlock');
}

function closeHbReward() {
  const m = document.getElementById('hb-reward-modal');
  if (m) m.classList.remove('show');
}

function shareHuobaoReward(lv) {
  const L = HUOBAO_LEVELS.find(x => x.lv === lv);
  if (!L) return;
  const cur = getStreakState().current;
  const isIce = document.body.dataset.appMode === 'ielts';
  const who = isIce ? '小冰人' : '火宝宝';
  const Lname = isIce ? L.iceName : L.name;
  const Ltitle = isIce ? (L.iceTitle || L.title) : L.title;
  const Lreward = isIce ? (L.iceReward || L.reward) : L.reward;
  const text = `${isIce ? '❄️' : '🔥'} 我在「英语词汇大师」连续打卡 ${cur} 天，${who}已成长为 Lv.${L.lv} ${Lname}（${Ltitle}）！${Lreward} 一起来背单词吧～`;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('📤 成就语已复制，去分享吧！')).catch(() => {});
  } else {
    showToast('📤 成就语已生成');
  }
}

function renderHuobao() {
  const state = getStreakState();
  const { current, longest, checkedInToday, total } = state;
  const lvl = getHuobaoLevel(current);
  const idx = HUOBAO_LEVELS.indexOf(lvl);
  const next = HUOBAO_LEVELS[idx + 1] || null;
  let progress = 1, remain = 0;
  if (next) {
    progress = (current - lvl.min) / (next.min - lvl.min);
    remain = next.min - current;
  }
  progress = Math.max(0, Math.min(1, progress));

  const scale = (1 + idx * 0.07).toFixed(2);
  const ctx = { current, longest, total, lvl, next, remain, progress, scale, checkedInToday };
  const c1 = document.getElementById('huobao-card');
  if (c1) c1.innerHTML = buildHuobaoHtml('fire', ctx);
  const c2 = document.getElementById('huobao-card-ielts');
  if (c2) c2.innerHTML = buildHuobaoHtml('ice', ctx);
  // 首次渲染把 seen / 已达成就同步到当前等级，避免之后误触发升级庆祝
  if (localStorage.getItem('huobao_seen_level') === null) {
    localStorage.setItem('huobao_seen_level', String(lvl.lv));
    const reached = HUOBAO_LEVELS.filter(L => L.min > 0 && current >= L.min).map(L => L.lv);
    localStorage.setItem('huobao_unlocked', JSON.stringify(reached));
  }
  renderStreakFlame();
}

// 生成火宝宝 / 小冰人卡片 HTML。variant: 'fire'（首页）| 'ice'（雅思页）。
// 功能完全一致（同一套等级 / 打卡 / 徽章数据），仅外观与文案主题不同。
function buildHuobaoHtml(variant, ctx) {
  const { current, longest, total, lvl, next, remain, progress, scale, checkedInToday } = ctx;
  const isIce = variant === 'ice';
  const accent = isIce ? ICE_COLOR : lvl.color;
  const mascot = isIce ? iceSvg(lvl.lv) : flameSvg(lvl.lv);
  const title = isIce ? '❄️ 小冰人' : '🔥 火宝宝';
  const aria = isIce ? '戳一戳小冰人' : '戳一戳火宝宝';
  const lvlName = isIce ? lvl.iceName : lvl.name;
  const nextName = next ? (isIce ? next.iceName : next.name) : null;
  const checkInBtn = checkedInToday
    ? `<button class="hb-checkin done" disabled>✅ 今日已打卡</button>`
    : `<button class="hb-checkin" onclick="markDailyCheckIn()">${isIce ? '❄️ 今日打卡' : '🔥 今日打卡'}</button>`;
  const hint = checkedInToday
    ? (isIce ? `<span class="hb-hint ok">冰晶稳固中，明天记得再来续冰 💪</span>` : `<span class="hb-hint ok">火苗旺盛中，明天记得再来续火 💪</span>`)
    : (current > 0
        ? (isIce ? `<span class="hb-hint warn">⚠️ 今天还没打卡，小冰人要融化了，快续上！</span>` : `<span class="hb-hint warn">⚠️ 今天还没打卡，火苗快熄灭了，快续上！</span>`)
        : (isIce ? `<span class="hb-hint">👋 点亮你的第一个小冰人，从今天开始打卡吧！</span>` : `<span class="hb-hint">👋 点亮你的第一个火宝宝，从今天开始打卡吧！</span>`));

  // 徽章按 variant 用火/冰名+图标
  const badges = HUOBAO_LEVELS.filter(L => L.min > 0).map(L => {
    const reached = current >= L.min;
    const sub = reached ? '已解锁' : ('还需 ' + (L.min - current) + ' 天');
    const Lname = isIce ? L.iceName : L.name;
    const Lemo  = isIce ? L.iceEmoji : L.emoji;
    return `<div class="hb-badge ${reached ? 'reached' : ''}" style="--bc:${L.color}" title="${Lname}：${isIce ? (L.iceDesc || L.desc) : L.desc}" onclick="showBadgeReward(${L.lv})" role="button">
      <div class="hb-badge-icon">${Lemo}</div>
      <div class="hb-badge-name">${Lname}</div>
      <div class="hb-badge-sub">${sub}</div>
    </div>`;
  }).join('');

  return `
    <div class="huobao-card${isIce ? ' ice' : ''}" style="--huo-color:${accent}">
      <div class="hb-left">
        <div class="hb-mascot hb-lv-${lvl.lv}${lvl.lv === 7 ? ' hb-god-aura' : ''}" style="transform:scale(${scale})" onclick="pokeHuobao(this)" role="button" aria-label="${aria}">
          <div class="hb-flame-wrap">
            ${mascot}
            <div class="hb-level-tag">Lv.${lvl.lv}</div>
          </div>
          <div class="hb-poke-tip">👆 戳我打招呼 · 看奖励</div>
        </div>
      </div>
      <div class="hb-right">
        <div class="hb-top">
          <span class="hb-title">${title}</span>
          <span class="hb-lvname" style="color:${accent}">${lvlName}</span>
          <span class="hb-title-badge">🏅 ${isIce ? (lvl.iceTitle || lvl.title) : lvl.title}</span>
        </div>
        <div class="hb-stats">
          <div class="hb-stat"><span class="hb-num">${current}</span><span class="hb-lbl">连续天数</span></div>
          <div class="hb-stat"><span class="hb-num">${longest}</span><span class="hb-lbl">最长纪录</span></div>
          <div class="hb-stat"><span class="hb-num">${total}</span><span class="hb-lbl">累计天数</span></div>
        </div>
        <div class="hb-progress-wrap">
          ${next
            ? `<div class="hb-progress-label">距 <b style="color:${next.color}">${nextName}</b> 还需 <b>${remain}</b> 天</div>`
            : `<div class="hb-progress-label">🏆 已达最高等级 · ${lvlName}</div>`}
          <div class="hb-progress"><div class="hb-progress-fill" style="width:${Math.round(progress * 100)}%;background:${accent}"></div></div>
        </div>
        <div class="hb-actions">
          ${checkInBtn}
          ${hint}
        </div>
        <div class="hb-badges-title">🎁 成长奖励 · 点徽章看详情</div>
        <div class="hb-badges">${badges}</div>
      </div>
    </div>
  `;
}

function showToast(msg) {
  let t = document.getElementById('hb-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'hb-toast';
    t.className = 'hb-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ==================== 火宝宝互动 ====================
const HUOBAO_GREETINGS = [
  '嗨！我是火宝宝🔥',
  '今天也来背单词啦？',
  '一起加油，别让火灭啦！',
  '戳到我的痒痒肉啦😄',
  '打卡了吗？打卡火更旺哦',
  '学习使我快乐🔥',
  '你就是我的小太阳☀️',
  '燃起来吧，少年！',
];

const ICE_GREETINGS = [
  '嗨！我是小冰人❄️',
  '今天也来背单词啦？',
  '一起加油，别让冰化啦！',
  '戳到我的痒痒肉啦😄',
  '打卡了吗？冰更结实哦',
  '冷静下来，一起冲！',
  '你就是我的小暖阳☀️',
  '冻住烦恼，专注学习❄️',
];

function pokeHuobao(el) {
  const mascot = el ? el.closest('.hb-mascot') : document.querySelector('.hb-mascot');
  if (!mascot) return;
  const isIce = !!(el && el.closest('#huobao-card-ielts'));
  const wrap = mascot.querySelector('.hb-flame-wrap');
  const moves = ['wave', 'jump', 'spin', 'blink'];
  const move = moves[Math.floor(Math.random() * moves.length)];
  mascot.classList.remove('wave', 'jump', 'spin', 'blink');
  void mascot.offsetWidth; // 强制重排以重启动画
  mascot.classList.add(move);
  clearTimeout(mascot._moveTimer);
  mascot._moveTimer = setTimeout(() => mascot.classList.remove(move), 1700);
  showHuobaoSpeech(wrap, isIce);
  spawnHuobaoHeart(wrap, isIce);
  playSound('poke');
}

function showHuobaoSpeech(wrap, isIce) {
  if (!wrap) wrap = document.querySelector('.hb-flame-wrap');
  if (!wrap) return;
  let s = document.getElementById('hb-speech');
  if (!s) {
    s = document.createElement('div');
    s.id = 'hb-speech';
    s.className = 'hb-speech';
    wrap.appendChild(s);
  }
  const src = isIce ? ICE_GREETINGS : HUOBAO_GREETINGS;
  s.textContent = src[Math.floor(Math.random() * src.length)];
  void s.offsetWidth;
  s.classList.add('show');
  clearTimeout(s._t);
  s._t = setTimeout(() => s.classList.remove('show'), 2200);
}

function spawnHuobaoHeart(wrap, isIce) {
  if (!wrap) wrap = document.querySelector('.hb-flame-wrap');
  if (!wrap) return;
  const h = document.createElement('div');
  h.className = 'hb-heart';
  h.textContent = isIce ? (Math.random() > 0.5 ? '❄️' : '💧') : (Math.random() > 0.5 ? '❤️' : '🔥');
  wrap.appendChild(h);
  setTimeout(() => h.remove(), 1300);
}

// ==================== 顶栏常驻小火苗 ====================
// 顶栏常驻迷你火焰（独立渐变 ID，避免与火宝宝卡片的 hbGrad/hbShine 冲突）
function navFlameSvg(color) {
  return `<svg class="nav-flame-mini-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="--huo-color:${color}">
    <defs>
      <linearGradient id="navHbGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#ffd166"/>
        <stop offset="55%" stop-color="${color}"/>
        <stop offset="100%" stop-color="#ffb703"/>
      </linearGradient>
      <radialGradient id="navHbShine" cx="38%" cy="28%" r="62%">
        <stop offset="0%" stop-color="#fff6d8" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#fff6d8" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <path d="M50 16 C 70 40, 86 58, 80 84 C 76 106, 59 116, 50 116 C 41 116, 24 106, 20 84 C 14 58, 30 40, 50 16 Z" fill="url(#navHbGrad)"/>
    <path d="M50 3 C 58 14, 55 22, 50 24 C 45 22, 42 14, 50 3 Z" fill="#ffd166"/>
    <ellipse cx="40" cy="48" rx="21" ry="29" fill="url(#navHbShine)"/>
  </svg>`;
}

function renderStreakFlame() {
  const num = document.getElementById('nav-streak-num');
  if (!num) return;
  const { current } = getStreakState();
  num.textContent = current;
  const mini = document.getElementById('nav-flame-mini');
  if (mini && !mini.dataset.built) {
    const lvl = getHuobaoLevel(current);
    mini.innerHTML = navFlameSvg(lvl.color);
    mini.dataset.built = '1';
  }
}

function goToHuobao() {
  const isIelts = document.body.dataset.appMode === 'ielts';
  if (isIelts) {
    navigateTo('ielts');
    const c = document.getElementById('huobao-card-ielts');
    if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    navigateTo('home');
    const c = document.getElementById('huobao-card');
    if (c) setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }
}

// ==================== 自定义文字目标 ====================
function getCustomGoals() {
  const today = new Date().toDateString();
  const data = JSON.parse(localStorage.getItem('customGoals') || '{}');
  if (data.date !== today) {
    return { date: today, goals: [] };
  }
  return data;
}

function saveCustomGoals(data) {
  localStorage.setItem('customGoals', JSON.stringify(data));
}

function addCustomGoal() {
  const input = document.getElementById('custom-goal-input');
  const text = input.value.trim();
  if (!text) return;
  const data = getCustomGoals();
  data.goals.push({ id: Date.now() + '_' + Math.random().toString(36).substr(2, 6), text, done: false });
  saveCustomGoals(data);
  input.value = '';
  renderDailyGoals();
  // 重新聚焦输入框方便连续添加
  setTimeout(() => document.getElementById('custom-goal-input')?.focus(), 50);
}

function toggleCustomGoal(id) {
  const data = getCustomGoals();
  const goal = data.goals.find(g => g.id === id);
  if (goal) {
    goal.done = !goal.done;
    saveCustomGoals(data);
    renderDailyGoals();
  }
}

function deleteCustomGoal(id) {
  const data = getCustomGoals();
  data.goals = data.goals.filter(g => g.id !== id);
  saveCustomGoals(data);
  renderDailyGoals();
}

function renderDailyGoals() {
  const container = document.getElementById('daily-goals');
  if (!container) return;
  const goals = getDailyGoals();
  const today = new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

  const items = [
    { key: 'word', icon: '📖', text: '背单词', done: goals.wordsDone, target: goals.wordsTarget, unit: '个' },
    { key: 'test', icon: '📝', text: '词汇测试', done: goals.testDone, target: goals.testTarget, unit: '次' },
    { key: 'exam', icon: '📋', text: '做试卷', done: goals.examDone, target: goals.examTarget, unit: '份' },
  ];

  const customData = getCustomGoals();
  const customGoalsHtml = customData.goals.length > 0
    ? customData.goals.map(g => `
        <div class="daily-goal-item custom-goal-item ${g.done ? 'done' : ''}">
          <div class="daily-goal-checkbox" onclick="toggleCustomGoal('${g.id}')"></div>
          <span class="daily-goal-text" onclick="toggleCustomGoal('${g.id}')">${g.text}</span>
          <button class="custom-goal-delete" onclick="deleteCustomGoal('${g.id}')" title="删除">×</button>
        </div>
      `).join('')
    : '';

  container.innerHTML = `
    <div class="daily-goals-header">
      <span class="daily-goals-title">🎯 今日学习目标</span>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="daily-goals-date">${today}</span>
        <button class="btn btn-ghost btn-sm" onclick="showGoalEditor()" style="padding:4px 10px; font-size:0.78rem;">⚙️ 自定义</button>
      </div>
    </div>
    <div class="daily-goals-list">
      ${items.map(item => {
        const isDone = item.done >= item.target;
        return `
          <div class="daily-goal-item ${isDone ? 'done' : ''}">
            <div class="daily-goal-checkbox"></div>
            <span class="daily-goal-text">${item.icon} ${item.text}</span>
            <span class="daily-goal-progress">${item.done}/${item.target}${item.unit}</span>
          </div>
        `;
      }).join('')}
    </div>
    <div style="margin-top:16px; padding-top:16px; border-top:1px solid var(--border);">
      <div style="font-size:0.82rem; color:var(--text-secondary); margin-bottom:10px; font-weight:600;">✍️ 个人目标</div>
      <div id="custom-goals-list">${customGoalsHtml}</div>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <input type="text" id="custom-goal-input" placeholder="输入你的目标，按回车添加..."
          style="flex:1; padding:9px 14px; background:var(--bg-secondary); border:1px solid var(--border); border-radius:var(--radius-sm); color:var(--text-primary); font-size:0.85rem; font-family:var(--font-main); outline:none; transition:var(--transition-fast);"
          onkeydown="if(event.key==='Enter') addCustomGoal()"
          onfocus="this.style.borderColor='var(--accent)'" onblur="this.style.borderColor='var(--border)'">
        <button class="btn btn-primary" onclick="addCustomGoal()" style="padding:9px 16px; font-size:0.82rem;">添加</button>
      </div>
    </div>
  `;
}

function showGoalEditor() {
  const goals = getDailyGoals();
  // 移除已有弹窗
  document.querySelector('.goal-editor-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.className = 'goal-editor-overlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;z-index:1000;backdrop-filter:blur(4px);';
  overlay.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:28px;max-width:380px;width:90%;box-shadow:var(--shadow-lg);">
      <div style="font-size:1.1rem;font-weight:700;margin-bottom:20px;letter-spacing:-0.02em;">⚙️ 自定义每日目标</div>
      <div style="display:flex;flex-direction:column;gap:16px;margin-bottom:24px;">
        <label style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <span style="font-size:0.9rem;color:var(--text-secondary);">📖 背单词</span>
          <div style="display:flex;align-items:center;gap:6px;">
            <input type="number" id="goal-words" value="${goals.wordsTarget}" min="1" max="500"
              style="width:70px;padding:8px 10px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.95rem;text-align:center;font-family:var(--font-main);">
            <span style="font-size:0.82rem;color:var(--text-muted);">个/天</span>
          </div>
        </label>
        <label style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <span style="font-size:0.9rem;color:var(--text-secondary);">📝 词汇测试</span>
          <div style="display:flex;align-items:center;gap:6px;">
            <input type="number" id="goal-test" value="${goals.testTarget}" min="0" max="20"
              style="width:70px;padding:8px 10px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.95rem;text-align:center;font-family:var(--font-main);">
            <span style="font-size:0.82rem;color:var(--text-muted);">次/天</span>
          </div>
        </label>
        <label style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
          <span style="font-size:0.9rem;color:var(--text-secondary);">📋 做试卷</span>
          <div style="display:flex;align-items:center;gap:6px;">
            <input type="number" id="goal-exam" value="${goals.examTarget}" min="0" max="20"
              style="width:70px;padding:8px 10px;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-size:0.95rem;text-align:center;font-family:var(--font-main);">
            <span style="font-size:0.82rem;color:var(--text-muted);">份/天</span>
          </div>
        </label>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button class="btn btn-ghost" onclick="this.closest('.goal-editor-overlay').remove()" style="padding:8px 20px;font-size:0.85rem;">取消</button>
        <button class="btn btn-primary" onclick="saveGoalEditor()" style="padding:8px 20px;font-size:0.85rem;">保存</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  // 点击遮罩关闭
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

function saveGoalEditor() {
  const wordsTarget = Math.max(1, parseInt(document.getElementById('goal-words').value) || 20);
  const testTarget = Math.max(0, parseInt(document.getElementById('goal-test').value) || 1);
  const examTarget = Math.max(0, parseInt(document.getElementById('goal-exam').value) || 1);
  saveGoalSettings({ wordsTarget, testTarget, examTarget });
  document.querySelector('.goal-editor-overlay')?.remove();
}

// ==================== 试卷进度保存 ====================
function saveExamProgress() {
  if (!App.examState.currentExam) return;
  const progress = {
    examId: App.examState.currentExam.id,
    answers: App.examState.answers,
    elapsedSeconds: App.examState.elapsedSeconds,
    timeLimit: App.examState.timeLimit,
    savedAt: Date.now(),
  };
  localStorage.setItem('examProgress', JSON.stringify(progress));
}

function loadExamProgress() {
  const data = localStorage.getItem('examProgress');
  if (!data) return null;
  return JSON.parse(data);
}

function clearExamProgress() {
  localStorage.removeItem('examProgress');
}

function checkExamResume() {
  const progress = loadExamProgress();
  if (!progress) return;
  const exam = EXAM_BANK.find(e => e.id === progress.examId);
  if (!exam) {
    clearExamProgress();
    return;
  }
  // 显示恢复提示
  const list = document.getElementById('exam-cards');
  const banner = document.createElement('div');
  banner.className = 'exam-resume-banner';
  const elapsedMin = Math.floor(progress.elapsedSeconds / 60);
  const answered = Object.keys(progress.answers).length;
  banner.innerHTML = `
    <div class="exam-resume-info">
      📌 你有未完成的试卷：<strong>${exam.title}</strong>
      （已答${answered}题，用时${elapsedMin}分钟）
    </div>
    <div class="exam-resume-actions">
      <button class="btn btn-ghost btn-sm" onclick="this.parentElement.parentElement.remove(); clearExamProgress();">放弃</button>
      <button class="btn btn-primary btn-sm" onclick="resumeExam()">继续答题</button>
    </div>
  `;
  list.parentElement.insertBefore(banner, list);
}

function resumeExam() {
  const progress = loadExamProgress();
  if (!progress) return;
  const exam = EXAM_BANK.find(e => e.id === progress.examId);
  if (!exam) return;

  App.examState.currentExam = exam;
  App.examState.answers = progress.answers || {};
  App.examState.startTime = Date.now() - progress.elapsedSeconds * 1000;
  App.examState.timeLimit = progress.timeLimit;
  App.examState.elapsedSeconds = progress.elapsedSeconds;

  document.querySelector('.exam-resume-banner')?.remove();
  document.getElementById('exam-list-view').style.display = 'none';
  document.getElementById('exam-result-view').style.display = 'none';
  document.getElementById('exam-taking-view').style.display = 'block';
  document.getElementById('exam-taking-title').textContent = exam.title + '（继续）';

  renderExamQuestions(exam);
  // 恢复已选答案的UI
  Object.entries(App.examState.answers).forEach(([qId, ans]) => {
    const qEl = document.getElementById(`exam-q-${qId}`);
    if (qEl) {
      qEl.querySelectorAll('.exam-option').forEach(opt => {
        const label = opt.querySelector('.exam-option-label')?.textContent?.replace('.', '');
        if (label === ans) opt.classList.add('selected');
      });
    }
  });
  updateExamProgress();
  startExamTimer();
  window.scrollTo(0, 0);
}

// ==================== PWA 注册 ====================
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.register('sw.js').then(reg => {
    // 检测到新版本时，安装完成后自动刷新以应用最新代码
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            window.location.reload();
          }
        });
      }
    });
  }).catch(() => {});
  // 新 SW 接管控制权后刷新（配合 skipWaiting）
  let reloading = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!reloading) { reloading = true; window.location.reload(); }
  });
}

// ==================== 语法专题 ====================
const GRAMMAR_TOPICS = [
  {
    id: 'articles', icon: '🔤', title: '冠词 (a/an/the)', desc: '不定冠词、定冠词、零冠词的用法', diff: '基础',
    videos: ['50--48冠词（1）.mp4'],
    sections: [
      { title: '📌 不定冠词 a/an', content: 'a用于辅音音素开头的词前，an用于元音音素开头的词前。\n判断依据是【发音】不是拼写！\n• a book, a university (以/j/音开头)\n• an apple, an hour (h不发音，以元音开头)', examples: [
        { en: 'She is a teacher.', cn: '她是一名老师。' },
        { en: 'He is an honest boy.', cn: '他是一个诚实的男孩。(honest的h不发音)' },
      ]},
      { title: '📌 定冠词 the', content: '1. 特指：the book on the desk\n2. 独一无二：the sun, the moon\n3. 乐器：play the piano\n4. 序数词/最高级：the first, the best', examples: [
        { en: 'The earth goes around the sun.', cn: '地球绕着太阳转。' },
        { en: 'She plays the violin well.', cn: '她小提琴拉得很好。' },
      ]},
      { title: '📌 零冠词', content: '1. 三餐前：have breakfast\n2. 球类运动前：play basketball\n3. 学科前：study English\n4. 泛指复数名词：Dogs are loyal.', examples: [
        { en: 'I play football after school.', cn: '放学后我踢足球。' },
        { en: 'She has lunch at noon.', cn: '她中午吃午饭。' },
      ]},
    ]
  },
  {
    id: 'tenses', icon: '⏰', title: '时态', desc: '一般现在、过去、将来、进行、完成时', diff: '核心',
    videos: ['34--32动词时态-一般现在时.mp4','35--33动词时态-一般过去时.mp4','36--34动词时态-一般将来时.mp4','37--35动词时态-过去进行时.mp4','38--36动词时态-现在完成时.mp4','39--37动词时态-过去完成时.mp4'],
    sections: [
      { title: '📌 一般现在时', content: '表习惯、事实、客观规律。第三人称单数加s/es。\n标志词：always, usually, often, every day', examples: [
        { en: 'She walks to school every day.', cn: '她每天步行上学。' },
        { en: 'The sun rises in the east.', cn: '太阳从东方升起。' },
      ]},
      { title: '📌 一般过去时', content: '表过去发生的动作。动词用过去式。\n标志词：yesterday, last week, ago, in 2020', examples: [
        { en: 'I visited Beijing last summer.', cn: '去年夏天我参观了北京。' },
        { en: 'He didn\'t go to school yesterday.', cn: '他昨天没去上学。' },
      ]},
      { title: '📌 现在进行时', content: '结构：am/is/are + doing。表此时此刻正在发生。\n标志词：now, look, listen', examples: [
        { en: 'I am reading a book now.', cn: '我现在正在读书。' },
        { en: 'Look! The cat is climbing the tree.', cn: '看！猫正在爬树。' },
      ]},
      { title: '📌 现在完成时', content: '结构：have/has + 过去分词。表过去动作影响现在。\n标志词：already, yet, just, ever, never, for, since', examples: [
        { en: 'I have finished my homework.', cn: '我已经完成了作业。' },
        { en: 'She has lived here for 5 years.', cn: '她在这里住了5年了。' },
      ]},
      { title: '📌 一般将来时', content: '结构：will + 动词原形 / be going to + 动词原形\n标志词：tomorrow, next week, soon', examples: [
        { en: 'I will call you tomorrow.', cn: '我明天会打电话给你。' },
        { en: 'It is going to rain.', cn: '快要下雨了。' },
      ]},
    ]
  },
  {
    id: 'passive', icon: '🔄', title: '被动语态', desc: 'be + 过去分词，各时态的被动结构', diff: '进阶',
    videos: ['40--38动词的语态-主动被动.mp4'],
    sections: [
      { title: '📌 被动语态结构', content: 'be + 过去分词(p.p.)\n各时态变化：\n• 一般现在：am/is/are done\n• 一般过去：was/were done\n• 现在完成：have/has been done\n• 一般将来：will be done\n• 含情态动词：can/must be done', examples: [
        { en: 'English is spoken all over the world.', cn: '全世界都说英语。' },
        { en: 'The bridge was built in 1990.', cn: '这座桥建于1990年。' },
      ]},
      { title: '📌 主动变被动', content: '主动：We build houses. → 被动：Houses are built by us.\n步骤：1.宾语变主语 2.动词变be+pp 3.主语变by短语', examples: [
        { en: 'The letter was written by Tom.', cn: '这封信是Tom写的。' },
        { en: 'The trees will be planted next week.', cn: '树将于下周种下。' },
      ]},
    ]
  },
  {
    id: 'clauses', icon: '🔗', title: '从句', desc: '宾语从句、定语从句、状语从句', diff: '高级',
    videos: ['11--11宾语从句（1）.mp4','12--12宾语从句（2）.mp4','13--13状语从句（1）.mp4','14--14状语从句（2）.mp4','15--15状语从句（3）.mp4','16--16状语从句（4）.mp4','17--17状语从句（5）.mp4','18--18定语从句（1）.mp4','19--19定语从句（2）.mp4','20--20定语从句（3）.mp4'],
    sections: [
      { title: '📌 宾语从句', content: '作宾语的从句。三要素：引导词、语序(陈述语序)、时态。\n• that引导陈述句：I think that...\n• if/whether引导一般疑问句：I wonder if...\n• what/who/when等引导特殊疑问句', examples: [
        { en: 'I don\'t know whether he will come.', cn: '我不知道他是否会来。' },
        { en: 'Could you tell me where the post office is?', cn: '你能告诉我邮局在哪吗？(陈述语序)' },
      ]},
      { title: '📌 定语从句', content: '修饰名词/代词的从句。先行词是被修饰的词。\n• who修饰人(作主语)  • whom修饰人(作宾语)\n• which修饰物  • that修饰人或物  • whose表所属', examples: [
        { en: 'The man who is talking is my father.', cn: '正在说话的那个男人是我爸爸。' },
        { en: 'This is the book which I bought.', cn: '这是我买的书。' },
      ]},
      { title: '📌 状语从句', content: '时间(when/while/as soon as)、条件(if/unless)、原因(because/since)、让步(although/though)、目的(so that)', examples: [
        { en: 'When I got home, Mom was cooking.', cn: '我到家时，妈妈正在做饭。' },
        { en: 'If it rains, we will stay home.', cn: '如果下雨，我们就待在家。' },
      ]},
    ]
  },
  {
    id: 'modal', icon: '🎭', title: '情态动词', desc: 'can/must/should/may的用法和推测', diff: '核心',
    videos: ['27--27动词-情态动词（1）.mp4','28--28动词-情态动词（2）.mp4'],
    sections: [
      { title: '📌 基本用法', content: '• can/could：能力、请求\n• must：必须、肯定推测\n• should：应该\n• may/might：可能、许可\n• need：需要\n• mustn\'t：禁止  needn\'t：不必', examples: [
        { en: 'You must finish it today.', cn: '你必须今天完成。' },
        { en: '—Must I go now? —No, you needn\'t.', cn: '—我必须现在走吗？—不，你不必。' },
      ]},
      { title: '📌 表推测', content: '• must do：一定（肯定推测）\n• can\'t do：不可能（否定推测）\n• may/might do：可能\n• should do：按理应该', examples: [
        { en: 'He must be tired after working all day.', cn: '工作了一天，他一定很累。' },
        { en: 'That can\'t be true.', cn: '那不可能是真的。' },
      ]},
    ]
  },
  {
    id: 'pronouns', icon: '👥', title: '代词', desc: '人称代词、物主代词、反身代词、不定代词', diff: '基础',
    videos: ['47--45代词（1）.mp4','48--46代词（2）.mp4','49--47代词（3）.mp4'],
    sections: [
      { title: '📌 人称代词', content: '主格(作主语)：I/you/he/she/we/they\n宾格(作宾语)：me/you/him/her/us/them', examples: [
        { en: 'She gave me a book.', cn: '她给了我一本书。(me作宾语)' },
      ]},
      { title: '📌 物主代词', content: '形容词性(后接名词)：my/your/his/her/our/their\n名词性(独立使用)：mine/yours/his/hers/ours/theirs', examples: [
        { en: 'This is my book. Yours is on the desk.', cn: '这是我的书。你的在桌上。' },
      ]},
      { title: '📌 反身代词', content: 'myself/yourself/himself/herself/itself/ourselves/themselves\n常见搭配：teach oneself(自学)、enjoy oneself(玩得开心)、help oneself to(自便)', examples: [
        { en: 'I taught myself English.', cn: '我自学英语。' },
      ]},
      { title: '📌 不定代词', content: 'something(肯定句)、anything(否定/疑问)、nothing、everything\n形容词修饰不定代词要后置：something important', examples: [
        { en: 'I have something important to tell you.', cn: '我有重要的事告诉你。' },
      ]},
    ]
  },
  {
    id: 'sentences', icon: '🏗️', title: '句子结构', desc: '句子成分、五种基本结构、并列句与句子种类', diff: '基础',
    sections: [
      { title: '📌 句子成分', content: `英语句子由成分构成：
• 主语 Subject：句子的主角
• 谓语 Predicate：动作或状态
• 宾语 Object：动作的承受者
• 表语 Predicative：说明主语身份或状态
• 定语/状语/补语：起修饰与补充作用`, examples: [
        { en: 'The boy plays football.', cn: '男孩踢足球。(主+谓+宾)' },
      ] },
      { title: '📌 五种基本句型', content: `1. 主+谓 (S+V)
2. 主+谓+宾 (S+V+O)
3. 主+谓+表 (S+V+P)
4. 主+谓+双宾 (S+V+IO+DO)
5. 主+谓+宾+补 (S+V+O+C)`, examples: [
        { en: 'She gave me a book.', cn: '她给了我一本书。(双宾)' },
        { en: 'We made him happy.', cn: '我们让他开心。(宾补)' },
      ] },
      { title: '📌 并列句与句子种类', content: `并列句用 and / but / or / so 连接两个独立分句。
句子按用途分为：陈述句、疑问句、祈使句、感叹句。`, examples: [
        { en: 'I like tea but he likes coffee.', cn: '我喜欢茶，但他喜欢咖啡。' },
      ] },
    ],
    videos: ['1--1汉语与英语句子比较.mp4','2--2句子五种结构（1）.mp4','3--3句子五种结构（2）.mp4','4--4简单句成分-谓语（1）.mp4','5--5简单句成分-谓语（2）-.mp4','6--6简单句成分-主语.mp4','7--7简单句成分-宾语.mp4','8--8简单句成分-表语.mp4','9--9并列句（1）.mp4','10--10并列句（2）.mp4','21--21句子的种类（1）.mp4','22--22句子的种类（2）.mp4','23--23句子的种类（3）.mp4','24--24句子的种类（4）.mp4'],
  },
  {
    id: 'verbs', icon: '🎯', title: '动词', desc: '系动词、助动词、实义动词的分类与用法', diff: '核心',
    sections: [
      { title: '📌 系动词', content: `后接表语，说明主语状态或特征。
常见：be, look(看起来), sound(听起来), feel(感觉), smell(闻起来), become(变得), get(变得)`, examples: [
        { en: 'She looks happy.', cn: '她看起来很开心。' },
      ] },
      { title: '📌 助动词', content: `do/does/did 帮助构成疑问与否定；
be 帮助构成进行时和被动语态；
have/has 帮助构成完成时态。`, examples: [
        { en: 'Does she go to school?', cn: '她去上学吗？' },
      ] },
      { title: '📌 实义动词', content: `有实际词义，表示动作或状态。
分及物动词(带宾语)与不及物动词(不带宾语)。`, examples: [
        { en: 'He eats an apple.', cn: '他吃一个苹果。(及物)' },
        { en: 'Birds fly.', cn: '鸟会飞。(不及物)' },
      ] },
    ],
    videos: ['25--25动词-系动词.mp4','26--26动词-助动词.mp4','29--29动词-实义动词（1）.mp4','30--30动词-实义动词（2）.mp4','31--29动词-实义动词（1）.mp4','32--30动词-实义动词（2）.mp4','33--31动词-举例复习.mp4'],
  },
  {
    id: 'nonfinite', icon: '🔁', title: '非谓语动词', desc: '不定式、动名词、分词的用法', diff: '高级',
    sections: [
      { title: '📌 不定式 to do', content: `可作主语、宾语、定语、目的状语。
It is important to study. / I want to sleep.`, examples: [
        { en: 'He came to help me.', cn: '他来帮我。(目的状语)' },
      ] },
      { title: '📌 动名词 doing', content: `动词性名词，作主语或宾语。
Swimming is fun. / I enjoy reading.`, examples: [
        { en: 'Reading books is my hobby.', cn: '读书是我的爱好。' },
      ] },
      { title: '📌 分词', content: `现在分词(doing)表主动、进行；
过去分词(done)表被动、完成。`, examples: [
        { en: 'The broken window was fixed.', cn: '破了的窗户被修好了。(过去分词作定语)' },
      ] },
    ],
    videos: ['41--39非谓语动词（1）.mp4','42--40非谓语动词（2）.mp4'],
  },
  {
    id: 'adjadv', icon: '🎨', title: '形容词与副词', desc: '形容词修饰名词，副词修饰动词/形容词', diff: '基础',
    sections: [
      { title: '📌 形容词', content: `修饰名词，通常前置：a big house / an interesting book。
比较级 -er / more，最高级 -est / most。`, examples: [
        { en: 'She is a beautiful girl.', cn: '她是个漂亮的女孩。' },
      ] },
      { title: '📌 副词', content: `修饰动词、形容词或其他副词，表方式、时间、地点、程度。
quickly, very, here, yesterday`, examples: [
        { en: 'He runs fast.', cn: '他跑得快。' },
      ] },
      { title: '📌 比较等级', content: `原级 → 比较级 → 最高级
• 单音节：fast → faster → fastest
• 多音节：beautiful → more beautiful → most beautiful`, examples: [
        { en: 'She sings better than me.', cn: '她唱得比我好。' },
      ] },
    ],
    videos: ['43--41形容词副词（1）.mp4','44--42形容词副词（2）.mp4','45--43形容词副词（3）.mp4'],
  },
  {
    id: 'nouns', icon: '📦', title: '名词', desc: '可数与不可数名词、复数变化、所有格', diff: '基础',
    sections: [
      { title: '📌 可数与不可数', content: `可数名词有单复数(chair → chairs)；
不可数名词无复数，表数量用 a piece of / two cups of 等。`, examples: [
        { en: 'I have two books.', cn: '我有两本书。' },
        { en: 'I need some water.', cn: '我需要一些水。(不可数)' },
      ] },
      { title: '📌 所有格', content: `有生命名词加 's：Tom's book；
无生命用 of：the door of the room`, examples: [
        { en: 'This is my mother\'s bag.', cn: '这是我妈妈的包。' },
      ] },
    ],
    videos: ['46--44名词.mp4'],
  },
  {
    id: 'prepositions', icon: '🧩', title: '介词', desc: '时间、方位、方式等介词的用法', diff: '基础',
    sections: [
      { title: '📌 时间介词', content: `in + 年/月/季节；on + 具体某天；at + 时刻/年龄。
in 2024, on Monday, at 7 o'clock`, examples: [
        { en: 'The party is on Sunday.', cn: '聚会在周日。' },
      ] },
      { title: '📌 方位与其他', content: `in 在…里 / on 在…上 / under 在…下；
with 和、用；for 为了；by 被、乘；from 从`, examples: [
        { en: 'The cat is under the table.', cn: '猫在桌子下面。' },
      ] },
    ],
    videos: ['51--49介词（1）.mp4','52--50介词（2）.mp4'],
  },
  {
    id: 'numerals', icon: '🔢', title: '数词', desc: '基数词、序数词及常见表达', diff: '基础',
    sections: [
      { title: '📌 基数词与序数词', content: `基数词表数量(one, two, three)；
序数词表顺序(first, second, third)，前常加 the。`, examples: [
        { en: 'He is the first student.', cn: '他是第一个学生。' },
      ] },
      { title: '📌 常见表达', content: `编号：Room 305；年份：in 2024；分数：one third (1/3)`, examples: [
        { en: 'My birthday is on May 1st.', cn: '我的生日在5月1日。' },
      ] },
    ],
    videos: ['53--51数词（自行看书）.mp4'],
  },
];

let currentGrammarTopic = null;

let grammarSearchQuery = '';

function getGrammarProgress() {
  try { return JSON.parse(localStorage.getItem('grammarProgress') || '{}'); } catch (e) { return {}; }
}

function renderGrammarTopics() {
  const container = document.getElementById('grammar-topics');
  const toolsEl = document.getElementById('grammar-tools');
  if (currentGrammarTopic) {
    if (toolsEl) toolsEl.style.display = 'none';
    // 显示专题详情
    renderGrammarDetail(currentGrammarTopic);
    return;
  }
  if (toolsEl) toolsEl.style.display = '';

  const q = (grammarSearchQuery || '').trim().toLowerCase();
  const prog = getGrammarProgress();
  let list = GRAMMAR_TOPICS;
  if (q) {
    list = list.filter(t => {
      const hay = (t.title + ' ' + t.desc + ' ' + (t.sections || []).map(s => s.title + ' ' + s.content).join(' ')).toLowerCase();
      return hay.indexOf(q) !== -1;
    });
  }
  const total = GRAMMAR_TOPICS.length;
  const learnedCount = GRAMMAR_TOPICS.filter(t => prog[t.id]).length;
  const progEl = document.getElementById('grammar-progress');
  if (progEl) progEl.innerHTML = '已学 <b>' + learnedCount + '</b> / ' + total + (learnedCount === total && total ? ' 🎉' : '');

  if (!list.length) {
    container.innerHTML = '<div class="empty-hint">🔍 未找到与“' + (grammarSearchQuery || '').replace(/</g, '&lt;') + '”匹配的语法专题</div>';
    return;
  }

  container.innerHTML = list.map(t => {
    const learned = !!prog[t.id];
    return '<div class="grammar-topic-card' + (learned ? ' learned' : '') + '" onclick="openGrammarTopic(\'' + t.id + '\')">'
      + '<div class="grammar-topic-header"><div>'
      + '<div class="grammar-topic-title">' + t.icon + ' ' + t.title + '</div>'
      + '<div class="grammar-topic-desc">' + t.desc + '</div>'
      + '</div><div class="grammar-topic-meta">'
      + (learned ? '<span class="grammar-learned-badge">✓ 已学</span>' : '')
      + '<span class="grammar-topic-badge">' + t.diff + '</span>'
      + '</div></div>'
      + '<button class="grammar-learn-btn' + (learned ? ' on' : '') + '" onclick="event.stopPropagation();toggleGrammarLearned(\'' + t.id + '\')">'
      + (learned ? '↺ 取消已学' : '✓ 标记已学') + '</button>'
      + '</div>';
  }).join('');
}

function toggleGrammarLearned(id) {
  const prog = getGrammarProgress();
  if (prog[id]) delete prog[id]; else prog[id] = true;
  localStorage.setItem('grammarProgress', JSON.stringify(prog));
  renderGrammarTopics();
}

function filterGrammarTopics(q) {
  grammarSearchQuery = q;
  if (!currentGrammarTopic) renderGrammarTopics();
}

function openGrammarTopic(id) {
  currentGrammarTopic = GRAMMAR_TOPICS.find(t => t.id === id);
  renderGrammarDetail(currentGrammarTopic);
}

// ===== 视频源配置 =====
// 留空 '' 表示使用本地 videos/ 目录（junction 到 D 盘，仅本地/自托管可用）
// 接入线上：把 53 个 mp4 上传到对象存储，保持原文件名，
//   并填写可公开访问的基址（末尾带 /）。例如：
//   const VIDEO_BASE_URL = 'https://your-bucket.cos.ap-guangzhou.myqcloud.com/grammar-videos/';
const VIDEO_BASE_URL = 'https://english-vocab-video-1462496247.cos.ap-guangzhou.myqcloud.com/grammar-videos/';

function renderGrammarDetail(topic) {
  const container = document.getElementById('grammar-topics');
  const videoBlock = (topic.videos && topic.videos.length) ? (() => {
    const items = topic.videos.map(v => {
      const t = v.replace(/^\d+--\d+/, '').replace(/\.mp4$/i, '');
      const src = (VIDEO_BASE_URL || 'videos/') + encodeURI(v);
      const vttSrc = (VIDEO_BASE_URL || 'videos/') + encodeURI(v.replace(/\.mp4$/i, '.vtt'));
      return '<div class="grammar-video-item">'
        + '<div class="grammar-video-title">&#9654; ' + t + '</div>'
        + '<div class="video-wrap">'
        + '<video class="grammar-video" controls preload="none" src="' + src + '">'
        + '<track kind="subtitles" srclang="zh" label="中文字幕" src="' + vttSrc + '">'
        + '</video>'
        + '<div class="video-toolbar">'
        + '<label class="video-speed">倍速'
        + '<select onchange="this.closest(\'.video-wrap\').querySelector(\'video\').playbackRate=parseFloat(this.value)">'
        + '<option value="0.5">0.5x</option><option value="0.75">0.75x</option>'
        + '<option value="1" selected>1.0x</option><option value="1.25">1.25x</option>'
        + '<option value="1.5">1.5x</option><option value="2">2.0x</option>'
        + '</select></label>'
        + '<a class="video-dl" href="' + src + '" download target="_blank" rel="noopener">⬇ 下载视频</a>'
        + '</div>'
        + '</div>';
    }).join('');
    return '<div class="grammar-video-section">'
      + '<div class="grammar-section-title">📺 配套视频课程</div>'
      + '<p class="grammar-video-hint">刘晓艳《不就是中考英语语法吗》配套视频，结合上方讲解深化理解</p>'
      + items
      + '</div>';
  })() : '';

  container.innerHTML = `
    <div class="grammar-detail">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h3 style="font-size:1.2rem;font-weight:800;letter-spacing:-0.02em;">${topic.icon} ${topic.title}</h3>
        <button class="btn btn-ghost btn-sm" onclick="currentGrammarTopic=null;renderGrammarTopics()">← 返回列表</button>
      </div>
      ${topic.sections.map(s => `
        <div class="grammar-section-title">${s.title}</div>
        <div class="grammar-content">${s.content}</div>
        ${s.examples.map(ex => `
          <div class="grammar-example">
            <strong>${ex.en}</strong><br>
            <span style="color:var(--text-secondary);">${ex.cn}</span>
          </div>
        `).join('')}
      `).join('')}
      ${videoBlock}
    </div>
  `;
  window.scrollTo(0, 0);
}

// ==================== 听力练习 ====================
const listeningState = {
  level: 1, speed: 0.9, count: 10, type: 'word',
  queue: [], currentIdx: 0, correct: 0, wrong: 0,
  currentWord: null, currentExample: '', answered: false,
  _advT: null, _vizT: null, _keyBound: false,
};

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/'/g, '&#39;')
    .replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function setupListening() {
  document.getElementById('listening-setup').style.display = 'block';
  document.getElementById('listening-running').style.display = 'none';

  // 难度
  document.querySelectorAll('#listening-level-options .option-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#listening-level-options .option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      listeningState.level = parseInt(btn.dataset.level);
    };
  });
  // 语速
  document.querySelectorAll('#listening-speed-options .option-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#listening-speed-options .option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      listeningState.speed = parseFloat(btn.dataset.speed);
    };
  });
  // 题数
  document.querySelectorAll('#listening-count-options .option-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#listening-count-options .option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      listeningState.count = parseInt(btn.dataset.count);
    };
  });
  // 题型
  document.querySelectorAll('#listening-type-options .option-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('#listening-type-options .option-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      listeningState.type = btn.dataset.type;
    };
  });

  // 历史最佳
  renderListeningBest();
}

function renderListeningBest() {
  const el = document.getElementById('listening-best');
  if (!el) return;
  let st = { total: 0, correct: 0, best: 0 };
  try { st = JSON.parse(localStorage.getItem('listeningStats')) || st; } catch (e) {}
  if (st.total > 0) {
    el.innerHTML = `📊 历史：已练 <b>${st.total}</b> 题，累计正确率 <b>${Math.round(st.correct / st.total * 100)}%</b>，单轮最佳 <b>${st.best}%</b>`;
  } else {
    el.innerHTML = `📊 还没有练习记录，开始第一轮吧！`;
  }
}

function startListening() {
  const pool = WORD_BANK.filter(w => w.level === listeningState.level && w.word && w.meaning);
  if (pool.length < 4) {
    alert('该级别词汇不足，请选择其他级别');
    return;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  listeningState.queue = shuffled.slice(0, Math.min(listeningState.count, shuffled.length));
  listeningState.currentIdx = 0;
  listeningState.correct = 0;
  listeningState.wrong = 0;

  document.getElementById('listening-setup').style.display = 'none';
  document.getElementById('listening-running').style.display = 'block';

  buildListeningShell();
  bindListeningKeys();
  renderListeningQuestion();
}

function buildListeningShell() {
  const speedActive = { 0.6: '', 0.9: 'active', 1.2: '' }[listeningState.speed] || 'active';
  document.getElementById('listening-running').innerHTML = `
    <div class="test-header">
      <div class="test-progress">
        <div class="progress-bar"><div class="progress-fill" id="listening-progress-fill" style="width:0%"></div></div>
        <span class="progress-text" id="listening-progress-text">1 / 10</span>
      </div>
      <div class="score-badge">
        <div class="score-item"><div class="score-num correct" id="listening-correct">0</div><div class="score-label">正确</div></div>
        <div class="score-item"><div class="score-num wrong" id="listening-wrong">0</div><div class="score-label">错误</div></div>
      </div>
    </div>
    <div class="question-card listening-card">
      <div class="listening-viz" id="listening-viz"><span></span><span></span><span></span><span></span><span></span></div>
      <span class="question-tag">🎧 听力 · <span id="listening-mode-name"></span></span>
      <div class="listening-hint" id="listening-word-hint"></div>
      <div class="listening-play-row">
        <button class="btn btn-primary btn-lg" id="play-audio-btn" onclick="playListeningAudio()">🔊 播放</button>
        <div class="listening-speed-inline" id="listening-speed-inline">
          <span class="lsi-label">语速</span>
          <button class="option-btn ${listeningState.speed === 0.6 ? 'active' : ''}" onclick="setListeningRate(0.6,this)">🐢 慢</button>
          <button class="option-btn ${listeningState.speed === 0.9 ? 'active' : ''}" onclick="setListeningRate(0.9,this)">✅ 常</button>
          <button class="option-btn ${listeningState.speed === 1.2 ? 'active' : ''}" onclick="setListeningRate(1.2,this)">🐇 快</button>
        </div>
        <button class="btn btn-ghost" onclick="replayListening()">↻ 重听</button>
      </div>
      <div id="listening-dynamic"></div>
      <div id="listening-reveal"></div>
      <div class="listening-foot">
        <button class="btn btn-ghost" onclick="exitListening()">← 退出</button>
        <button class="btn btn-primary" id="listening-next" style="display:none" onclick="nextListening()">下一题 →</button>
      </div>
    </div>
  `;
}

function renderListeningQuestion() {
  const q = listeningState.queue[listeningState.currentIdx];
  listeningState.currentWord = q;
  listeningState.currentExample = q.example || '';
  listeningState.answered = false;

  const total = listeningState.queue.length;
  document.getElementById('listening-progress-fill').style.width = (listeningState.currentIdx / total * 100) + '%';
  document.getElementById('listening-progress-text').textContent = (listeningState.currentIdx + 1) + ' / ' + total;
  document.getElementById('listening-correct').textContent = listeningState.correct;
  document.getElementById('listening-wrong').textContent = listeningState.wrong;

  const modeNames = { word: '听词选义', sentence: '听句选义', spell: '听音拼写' };
  document.getElementById('listening-mode-name').textContent = modeNames[listeningState.type];
  const hints = {
    word: '听音频，选出你听到的单词释义',
    sentence: '听句子，选出句中加粗词的意思',
    spell: '听音频，拼写出你听到的单词'
  };
  document.getElementById('listening-word-hint').textContent = hints[listeningState.type];

  document.getElementById('listening-reveal').innerHTML = '';
  document.getElementById('listening-next').style.display = 'none';

  const dyn = document.getElementById('listening-dynamic');
  if (listeningState.type === 'spell') {
    dyn.innerHTML = `
      <div class="spell-box">
        <input id="listening-spell-input" class="spell-input" placeholder="输入你听到的单词…" autocomplete="off"
          onkeydown="if(event.key==='Enter')submitListeningSpell()">
        <button class="btn btn-primary" onclick="submitListeningSpell()">✓ 提交</button>
      </div>`;
    setTimeout(() => { const i = document.getElementById('listening-spell-input'); if (i) i.focus(); }, 120);
  } else {
    const pool = WORD_BANK.filter(w => w.level === listeningState.level && w.meaning && w.word !== q.word);
    const distractors = [...pool].sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [...distractors, q].sort(() => Math.random() - 0.5);
    dyn.innerHTML = options.map((opt, i) =>
      `<div class="listening-option" data-answer="${escAttr(opt.meaning)}" onclick="selectListeningAnswer('${escAttr(opt.meaning)}', this)">
        <span class="listening-option-label">${String.fromCharCode(65 + i)}</span>
        <span>${escAttr(opt.meaning)}</span>
      </div>`).join('');
  }

  // 自动播放
  setTimeout(() => playListeningAudio(), 350);
}

function listeningViz(on) {
  const v = document.getElementById('listening-viz');
  if (v) v.classList.toggle('playing', on);
}

function speakListening(text, rate) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate || listeningState.speed;
  u.onstart = () => listeningViz(true);
  u.onend = () => listeningViz(false);
  u.onerror = () => listeningViz(false);
  speechSynthesis.speak(u);
  clearTimeout(listeningState._vizT);
  listeningState._vizT = setTimeout(() => listeningViz(false), Math.max(4000, text.length * 110 / (rate || 0.9) + 800));
}

function playListeningAudio() {
  if (!listeningState.currentWord) return;
  const w = listeningState.currentWord;
  if (listeningState.type === 'sentence' && w.example) {
    speakListening(w.example, listeningState.speed);
  } else {
    speakListening(w.word, listeningState.speed);
  }
}

function replayListening() { playListeningAudio(); }

function speakCurrentExample() {
  if (listeningState.currentExample) speak(listeningState.currentExample);
}

function setListeningRate(r, btn) {
  listeningState.speed = r;
  document.querySelectorAll('#listening-speed-inline .option-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  playListeningAudio();
}

function revealListening(isCorrect) {
  const w = listeningState.currentWord;
  const rev = document.getElementById('listening-reveal');
  let ex = '';
  if (w.example) {
    const exCn = w.exampleCn || '';
    let exHtml = w.example;
    try {
      const re = new RegExp('\\b' + w.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'ig');
      exHtml = exHtml.replace(re, '<b>' + w.word + '</b>');
    } catch (e) {}
    ex = `<div class="reveal-ex">📖 ${exHtml}</div>` + (exCn ? `<div class="reveal-excn">${exCn}</div>` : '') +
      `<button class="btn btn-ghost btn-sm" onclick="speakCurrentExample()">🔊 朗读例句</button>`;
  }
  rev.innerHTML = `
    <div class="reveal-card ${isCorrect ? 'ok' : 'no'}">
      <div class="reveal-word">${w.word} ${w.phonetic ? `<span class="rp">${w.phonetic}</span>` : ''} ${w.pos ? `<span class="pos">${w.pos}</span>` : ''}</div>
      ${ex}
      <div class="reveal-result">${isCorrect ? '✅ 答对了！' : '❌ 正确答案：' + w.word + '（' + w.meaning + '）'}</div>
    </div>`;
}

function showListeningNext() {
  const b = document.getElementById('listening-next');
  if (b) b.style.display = 'inline-flex';
}

function autoAdvance() {
  clearTimeout(listeningState._advT);
  listeningState._advT = setTimeout(() => nextListening(), 2800);
}

function selectListeningAnswer(answer, element) {
  if (listeningState.answered) return;
  listeningState.answered = true;

  const w = listeningState.currentWord;
  const isCorrect = answer === w.meaning;
  if (isCorrect) listeningState.correct++; else listeningState.wrong++;

  if (element) {
    element.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
      document.querySelectorAll('#listening-dynamic .listening-option').forEach(o => {
        if (o.dataset.answer === w.meaning) o.classList.add('correct');
      });
    }
  }
  if (!isCorrect) {
    addWrongQuestion(
      { id: w.id, question: `🎧 听力：听到的单词`, options: [], answer: `${w.word} (${w.meaning})`, explanation: `听到的单词是 '${w.word}'，意思是「${w.meaning}」。`, knowledgePoints: ['听力'], skill: 'listening', difficulty: listeningState.level },
      answer, 'listening', '听力练习'
    );
  }
  revealListening(isCorrect);
  showListeningNext();
  autoAdvance();
}

function submitListeningSpell() {
  if (listeningState.answered) return;
  const i = document.getElementById('listening-spell-input');
  if (!i) return;
  const val = i.value.trim().toLowerCase();
  if (!val) { i.focus(); return; }
  listeningState.answered = true;
  const w = listeningState.currentWord;
  const isCorrect = val === w.word.toLowerCase();
  if (isCorrect) listeningState.correct++; else listeningState.wrong++;
  i.disabled = true;
  if (!isCorrect) {
    addWrongQuestion(
      { id: w.id, question: `🎧 听力拼写：听到的单词`, options: [], answer: w.word, explanation: `听到的单词是 '${w.word}'，意思是「${w.meaning}」。`, knowledgePoints: ['听力'], skill: 'listening', difficulty: listeningState.level },
      val, 'listening', '听力练习'
    );
  }
  revealListening(isCorrect);
  showListeningNext();
  autoAdvance();
}

function nextListening() {
  clearTimeout(listeningState._advT);
  listeningState.currentIdx++;
  if (listeningState.currentIdx >= listeningState.queue.length) {
    finishListening();
  } else {
    renderListeningQuestion();
  }
}

function finishListening() {
  const total = listeningState.queue.length;
  const correct = listeningState.correct;
  const pct = Math.round((correct / total) * 100);

  // 持久化成绩
  let st = { total: 0, correct: 0, best: 0 };
  try { st = JSON.parse(localStorage.getItem('listeningStats')) || st; } catch (e) {}
  st.total += total; st.correct += correct;
  if (pct > st.best) st.best = pct;
  try { localStorage.setItem('listeningStats', JSON.stringify(st)); } catch (e) {}

  recordDailyActivity('test');
  recordDailyActivity('word', correct);

  let emoji, msg;
  if (pct >= 90) { emoji = '🏆'; msg = '听力很棒！'; }
  else if (pct >= 70) { emoji = '🎉'; msg = '不错，继续练！'; }
  else if (pct >= 60) { emoji = '💪'; msg = '及格了，多听多练'; }
  else { emoji = '🎧'; msg = '需要多听多练'; }

  // 题型小结
  const typeNames = { word: '听词选义', sentence: '听句选义', spell: '听音拼写' };
  const typeLine = `本轮题型：<b>${typeNames[listeningState.type]}</b>`;

  document.getElementById('listening-running').innerHTML = `
    <div class="card result-card">
      <div style="font-size:3rem;margin-bottom:8px;">${emoji}</div>
      <div class="result-score ${pct >= 80 ? 'excellent' : pct >= 60 ? 'good' : 'needs-work'}">${correct}/${total}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-sub">正确率 <b>${pct}%</b> · ${typeLine} · 历史最佳 <b>${st.best}%</b></div>
      <div class="result-actions">
        <button class="btn btn-ghost" onclick="exitListening()">← 返回</button>
        <button class="btn btn-primary" onclick="startListening()">🔄 再练一轮</button>
      </div>
    </div>
  `;
  unbindListeningKeys();
  window.scrollTo(0, 0);
}

function exitListening() {
  unbindListeningKeys();
  document.getElementById('listening-setup').style.display = 'block';
  document.getElementById('listening-running').style.display = 'none';
  renderListeningBest();
}

function listeningKeyHandler(e) {
  if (App.currentPage !== 'listening') return;
  const setup = document.getElementById('listening-setup');
  if (setup && setup.style.display !== 'none') return;
  if (e.key === ' ') { e.preventDefault(); replayListening(); return; }
  if (listeningState.answered) {
    if (e.key === 'Enter') { e.preventDefault(); nextListening(); }
    return;
  }
  const k = e.key.toLowerCase();
  if (['a', 'b', 'c', 'd'].includes(k)) {
    const opts = document.querySelectorAll('#listening-dynamic .listening-option');
    const idx = k.charCodeAt(0) - 97;
    if (opts[idx]) opts[idx].click();
  }
}

function bindListeningKeys() {
  if (listeningState._keyBound) return;
  document.addEventListener('keydown', listeningKeyHandler);
  listeningState._keyBound = true;
}
function unbindListeningKeys() {
  if (!listeningState._keyBound) return;
  document.removeEventListener('keydown', listeningKeyHandler);
  listeningState._keyBound = false;
}

// ==================== 初始化 ====================
// ==================== 软件封面 ====================
function initCover() {
  const cover = document.getElementById('app-cover');
  if (!cover) return;
  // 同一会话内已手动进入过 → 直接隐藏，并按上次模式进入对应页
  if (sessionStorage.getItem('coverEntered') === '1') {
    cover.classList.add('hide');
    cover.style.display = 'none';
    const savedMode = localStorage.getItem('appMode');
    if (savedMode === 'ielts') enterMode('ielts');
    else if (savedMode === 'standard') enterMode('standard');
    else navigateTo('home');
    return;
  }
  const btn = document.getElementById('cover-enter-btn');
  const loading = document.getElementById('cover-loading');
  const visited = localStorage.getItem('coverVisited') === '1';
  if (visited) {
    // 第二次及以后：隐藏按钮，显示加载圈，2 秒后自动进入
    if (btn) btn.style.display = 'none';
    if (loading) loading.style.display = 'flex';
    setTimeout(() => enterApp(), 2000);
  } else {
    // 第一次：显示「进入应用」按钮
    if (btn) btn.style.display = '';
    if (loading) loading.style.display = 'none';
  }
}

// 显示「模式选择页」（封面后 / 随时切换）
function showModeSelect() {
  const ms = document.getElementById('mode-select');
  if (ms) ms.style.display = 'flex';
}

// 选定模式：记录并进入对应界面
function selectMode(mode) {
  if (mode !== 'standard' && mode !== 'ielts') return;
  localStorage.setItem('appMode', mode);
  const ms = document.getElementById('mode-select');
  if (ms) {
    ms.classList.add('hide');
    setTimeout(() => { ms.style.display = 'none'; ms.classList.remove('hide'); }, 400);
  }
  enterMode(mode);
}

// 进入指定模式对应的页面
function enterMode(mode) {
  const logoEl = document.getElementById('brand-logo');
  const textEl = document.getElementById('brand-text');
  if (mode === 'ielts') {
    document.body.dataset.appMode = 'ielts';
    if (logoEl) logoEl.textContent = '🎓';
    if (textEl) textEl.textContent = '雅思备考';
    navigateTo('ielts');
  } else {
    document.body.dataset.appMode = 'standard';
    if (logoEl) logoEl.textContent = '📚';
    if (textEl) textEl.textContent = '英语词汇大师';
    navigateTo('home');
  }
}

// 从模式选择页返回封面
function backToCover() {
  const ms = document.getElementById('mode-select');
  if (ms) { ms.style.display = 'none'; ms.classList.remove('hide'); }
  const cover = document.getElementById('app-cover');
  if (cover) {
    cover.classList.remove('hide');
    cover.style.display = 'flex';
  }
  window.scrollTo(0, 0);
}

function enterApp() {
  const cover = document.getElementById('app-cover');
  if (!cover) return;
  cover.classList.add('hide');
  sessionStorage.setItem('coverEntered', '1');
  localStorage.setItem('coverVisited', '1');
  setTimeout(() => { cover.style.display = 'none'; }, 560);
  window.scrollTo(0, 0);
  // 进入系统后：已选过模式则直接进入，否则显示模式选择页
  const savedMode = localStorage.getItem('appMode');
  if (savedMode === 'standard' || savedMode === 'ielts') {
    enterMode(savedMode);
  } else {
    showModeSelect();
  }
}

function init() {
  initTheme();
  initCover();
  loadRecord();
  setupTestConfig();
  renderDashboard();
  renderStudyCalendar();
  renderQuickWords();
  renderDailyGoals();
  initKeyboardShortcuts();
  registerSW();

  // 全局拖拽结束监听（鼠标松开时结束拖拽选择）
  document.addEventListener('mouseup', dragSelectEnd);

  // 导航事件
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => navigateTo(tab.dataset.page));
  });

  // 模式卡片点击
  document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
      const mode = card.dataset.mode;
      if (mode === 'en2cn') {
        App.testConfig.direction = 'en2cn';
      } else if (mode === 'cn2en') {
        App.testConfig.direction = 'cn2en';
      } else if (mode === 'mixed') {
        App.testConfig.direction = 'mixed';
      } else if (mode === 'dictionary') {
        navigateTo('dict');
        return;
      } else if (mode === 'exam') {
        navigateTo('exam');
        return;
      }
      navigateTo('test');
    });
  });

  // 配置选项按钮点击
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setConfig(btn.dataset.config, btn.dataset.value);
    });
  });

  // 词典搜索
  const searchBox = document.getElementById('dict-search');
  if (searchBox) {
    searchBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') searchDictionary(e.target.value);
    });
  }
  const searchBtn = document.getElementById('dict-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchDictionary(document.getElementById('dict-search').value);
    });
  }

  // 预加载语音引擎
  if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
  }
}

// ==================== 雅思专项模块 ====================
const IELTS_VOCAB_KEY = 'ieltsVocabProgress_v1';
let ieltsStudy = { ns: 'topic', id: null, listIndex: 0, title: '', icon: '', words: [], idx: 0, flipped: false, mode: 'study', queue: [], current: null, answered: false, correct: 0, spellDone: false, itemMap: null };
let ieltsVocabView = 'topic'; // 'topic' | 'level'
let ieltsSpeakingTimer = null;
let ieltsSearchText = '';
let ieltsMasteryFilter = 'all'; // 'all' | 'unlearned' | 'learned'
let ieltsLevelFilter = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
let ieltsSearchList = []; // 当前搜索命中的 items（{w,ns,id,level}）

function ieltsProgKey(ns, id, word) { return ns + ':' + id + ':' + word; }

function ieltsEsc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// 通用进度 key：优先用 itemMap（搜索结果含多来源），否则用当前 ns/id
function ieltsKey(w) {
  const m = ieltsStudy.itemMap && ieltsStudy.itemMap[w.word];
  return ieltsProgKey(m ? m.ns : ieltsStudy.ns, m ? m.id : ieltsStudy.id, w.word);
}

// 当前视图的全部词（带来源 ns/id），用于搜索/筛选/导出
function ieltsCurrentScope() {
  const arr = [];
  if (ieltsVocabView === 'level') {
    IELTS_LEVELS.forEach(lv => lv.words.forEach(w => arr.push({ w, ns: 'level', id: lv.level, level: lv.level })));
  } else {
    IELTS_VOCAB.forEach((t, i) => t.words.forEach(w => arr.push({ w, ns: 'topic', id: i })));
  }
  return arr;
}

function ieltsBuildMap(items) {
  const map = {};
  items.forEach(it => { map[it.w.word] = { ns: it.ns, id: it.id }; });
  return map;
}

function ieltsLoadProgress() {
  try { return JSON.parse(localStorage.getItem(IELTS_VOCAB_KEY) || '{}'); }
  catch (e) { return {}; }
}
function ieltsSaveProgress(obj) {
  try { localStorage.setItem(IELTS_VOCAB_KEY, JSON.stringify(obj)); } catch (e) {}
}
function ieltsSpeak(text, rate) {
  if (!('speechSynthesis' in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate || 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function setupIELTS() {
  switchIELTS('vocab');
}

function switchIELTS(tab) {
  document.querySelectorAll('#ielts-tabs .ielts-tab').forEach(b => b.classList.toggle('active', b.dataset.ielts === tab));
  document.getElementById('ielts-vocab').style.display = tab === 'vocab' ? 'block' : 'none';
  document.getElementById('ielts-speaking').style.display = tab === 'speaking' ? 'block' : 'none';
  document.getElementById('ielts-writing').style.display = tab === 'writing' ? 'block' : 'none';
  document.getElementById('ielts-bands').style.display = tab === 'bands' ? 'block' : 'none';
  if (tab === 'vocab') { ieltsVocabView = 'topic'; if (document.getElementById('ielts-vocab-subtabs')) document.querySelectorAll('#ielts-vocab-subtabs .ielts-subtab').forEach(b => b.classList.toggle('active', b.dataset.vvocab === 'topic')); renderIeltsVocabHome(); }
  if (tab === 'speaking') switchSpeaking('part1');
  if (tab === 'writing') switchWriting('task1');
  if (tab === 'bands') renderIeltsBands();
}

/* ---------- 词汇：首页（主题 / 级别，含搜索筛选） ---------- */
function renderIeltsVocabHome() {
  document.getElementById('ielts-vocab-study').style.display = 'none';
  document.getElementById('ielts-vocab-home').style.display = 'block';
  const prog = ieltsLoadProgress();
  const cards = IELTS_VOCAB.map((t, i) => {
    const learned = t.words.filter(w => prog[ieltsProgKey('topic', i, w.word)]).length;
    const pct = Math.round((learned / t.words.length) * 100);
    return `<div class="ielts-topic-card" onclick="openIeltsTopic(${i})">
      <div class="ielts-topic-icon">${t.icon}</div>
      <div class="ielts-topic-name">${t.topic}</div>
      <div class="ielts-topic-count">${learned}/${t.words.length} 已掌握</div>
      <div class="ielts-topic-bar"><div class="ielts-topic-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
  const tools = ieltsSearchBarHtml(false);
  document.getElementById('ielts-vocab-home').innerHTML =
    `${tools}
     <div id="ielts-vocab-results"></div>
     <div id="ielts-vocab-cards"><div class="ielts-topic-grid">${cards}</div></div>`;
  updateIeltsResults();
}

function openIeltsTopic(i, mode) {
  const t = IELTS_VOCAB[i];
  ieltsStudy = { ns: 'topic', id: i, listIndex: i, title: t.topic, icon: t.icon, words: t.words, idx: 0, flipped: false, mode: mode || 'study', queue: [], current: null, answered: false, correct: 0, spellDone: false, itemMap: null };
  document.getElementById('ielts-vocab-home').style.display = 'none';
  document.getElementById('ielts-vocab-study').style.display = 'block';
  renderIeltsStudy();
}

function ieltsSearchBarHtml(isLevel) {
  const chipHtml = isLevel ? `
    <div class="ielts-level-chips">
      ${['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(l => `<button class="ielts-level-chip ${ieltsLevelFilter.has(l) ? 'on' : ''}" onclick="toggleIeltsLevelFilter('${l}')">${l}</button>`).join('')}
    </div>` : '';
  return `<div class="ielts-vocab-tools">
    <div class="ielts-search-bar">
      <span class="ielts-search-ico">🔍</span>
      <input id="ielts-search-input" class="ielts-search-input" type="text" placeholder="搜索单词或中文释义…" value="${ieltsEsc(ieltsSearchText)}" oninput="onIeltsSearchInput()">
      <select id="ielts-mastery-filter" class="ielts-mastery-filter" onchange="onIeltsSearchInput()">
        <option value="all" ${ieltsMasteryFilter === 'all' ? 'selected' : ''}>全部掌握度</option>
        <option value="unlearned" ${ieltsMasteryFilter === 'unlearned' ? 'selected' : ''}>未学习</option>
        <option value="learned" ${ieltsMasteryFilter === 'learned' ? 'selected' : ''}>已掌握</option>
      </select>
      <button class="btn btn-ghost btn-sm ielts-search-clear" onclick="clearIeltsSearch()">✕ 清除</button>
    </div>
    ${chipHtml}
  </div>`;
}

function onIeltsSearchInput() {
  const inp = document.getElementById('ielts-search-input');
  if (inp) ieltsSearchText = inp.value;
  const sel = document.getElementById('ielts-mastery-filter');
  if (sel) ieltsMasteryFilter = sel.value;
  updateIeltsResults();
}

function clearIeltsSearch() {
  ieltsSearchText = '';
  ieltsMasteryFilter = 'all';
  ieltsLevelFilter = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  if (ieltsVocabView === 'level') renderIeltsLevelsHome();
  else renderIeltsVocabHome();
}

function toggleIeltsLevelFilter(l) {
  if (ieltsLevelFilter.has(l)) ieltsLevelFilter.delete(l); else ieltsLevelFilter.add(l);
  if (ieltsLevelFilter.size === 0) ieltsLevelFilter = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  updateIeltsResults();
  // 同步 chips 高亮
  document.querySelectorAll('.ielts-level-chip').forEach(c => {
    const lv = c.textContent.trim();
    c.classList.toggle('on', ieltsLevelFilter.has(lv));
  });
}

function updateIeltsResults() {
  const resEl = document.getElementById('ielts-vocab-results');
  const cardsEl = document.getElementById('ielts-vocab-cards');
  if (!resEl || !cardsEl) return;
  const text = ieltsSearchText.trim().toLowerCase();
  const filtering = text !== '' || ieltsMasteryFilter !== 'all' ||
    (ieltsVocabView === 'level' && ieltsLevelFilter.size < 6);
  if (!filtering) { resEl.style.display = 'none'; resEl.innerHTML = ''; cardsEl.style.display = 'block'; return; }

  const scope = ieltsCurrentScope();
  const prog = ieltsLoadProgress();
  let list = scope;
  if (ieltsVocabView === 'level' && ieltsLevelFilter.size < 6) {
    list = list.filter(r => ieltsLevelFilter.has(r.level));
  }
  if (text) {
    list = list.filter(r =>
      r.w.word.toLowerCase().includes(text) ||
      (r.w.meaning && r.w.meaning.includes(text)) ||
      (r.w.example && r.w.example.toLowerCase().includes(text)));
  }
  if (ieltsMasteryFilter !== 'all') {
    list = list.filter(r => {
      const k = ieltsProgKey(r.ns, r.id, r.w.word);
      return ieltsMasteryFilter === 'learned' ? !!prog[k] : !prog[k];
    });
  }
  ieltsSearchList = list;
  cardsEl.style.display = 'none';
  resEl.style.display = 'block';
  if (!list.length) {
    resEl.innerHTML = `<div class="ielts-results-empty">😶 没有匹配「${ieltsEsc(ieltsSearchText)}」的单词，换个关键词试试</div>`;
    return;
  }
  const grid = list.map(r => {
    const w = r.w;
    const lvlTag = r.level ? `<span class="ielts-res-word-lvl">${r.level}</span>` : '';
    return `<div class="ielts-res-word" onclick="event.stopPropagation();ieltsSpeak('${ieltsEsc(w.word)}',1)">
      <div class="ielts-res-word-main">
        <span class="ielts-res-word-text">${ieltsEsc(w.word)}</span>
        <span class="ielts-res-word-phon">${ieltsEsc(w.phonetic || '')}</span>
        ${lvlTag}
      </div>
      <div class="ielts-res-word-meaning">${ieltsEsc(w.meaning || '')}</div>
    </div>`;
  }).join('');
  resEl.innerHTML = `
    <div class="ielts-results-head">
      <div class="ielts-results-count">🔍 找到 <b>${list.length}</b> 个匹配词${text ? `（"${ieltsEsc(ieltsSearchText)}"）` : ''}</div>
      <div class="ielts-results-actions">
        <button class="btn btn-primary btn-sm" onclick="openIeltsSearchStudy('study')">📖 学习匹配词</button>
        <button class="btn btn-ghost btn-sm" onclick="openIeltsSearchStudy('spell')">✍️ 拼写自测</button>
        <button class="btn btn-ghost btn-sm" onclick="exportIeltsWordCards(ieltsSearchList.map(r=>r.w))">📄 导出单词卡</button>
      </div>
    </div>
    <div class="ielts-results-grid">${grid}</div>`;
}

function switchIeltsVocabView(view) {
  ieltsVocabView = view;
  ieltsSearchText = '';
  ieltsMasteryFilter = 'all';
  ieltsLevelFilter = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  document.querySelectorAll('#ielts-vocab-subtabs .ielts-subtab').forEach(b => b.classList.toggle('active', b.dataset.vvocab === view));
  if (view === 'level') renderIeltsLevelsHome();
  else renderIeltsVocabHome();
}

function renderIeltsLevelsHome() {
  document.getElementById('ielts-vocab-study').style.display = 'none';
  document.getElementById('ielts-vocab-home').style.display = 'block';
  const prog = ieltsLoadProgress();
  const cards = IELTS_LEVELS.map((lv, i) => {
    const learned = lv.words.filter(w => prog[ieltsProgKey('level', lv.level, w.word)]).length;
    const pct = Math.round((learned / lv.words.length) * 100);
    return `<div class="ielts-level-card lvl-${lv.level}" onclick="openIeltsLevel(${i})">
      <div class="ielts-level-head">
        <span class="ielts-level-badge">${lv.level}</span>
        <span class="ielts-level-band">${lv.band}</span>
      </div>
      <div class="ielts-level-name">${lv.name}</div>
      <div class="ielts-level-desc">${lv.desc}</div>
      <div class="ielts-topic-count">${learned}/${lv.words.length} 已掌握</div>
      <div class="ielts-topic-bar"><div class="ielts-topic-fill" style="width:${pct}%"></div></div>
      <button class="btn btn-ghost btn-sm ielts-level-export" onclick="event.stopPropagation();exportIeltsWordCards(IELTS_LEVELS[${i}].words)">📄 导出该级单词卡</button>
    </div>`;
  }).join('');
  const tools = ieltsSearchBarHtml(true);
  document.getElementById('ielts-vocab-home').innerHTML =
    `${tools}
     <div id="ielts-vocab-results"></div>
     <div id="ielts-vocab-cards"><div class="ielts-level-grid">${cards}</div></div>`;
  updateIeltsResults();
}

function openIeltsLevel(i, mode) {
  const lv = IELTS_LEVELS[i];
  ieltsStudy = { ns: 'level', id: lv.level, listIndex: i, title: lv.level + ' · ' + lv.name, icon: '🏅', words: lv.words, idx: 0, flipped: false, mode: mode || 'study', queue: [], current: null, answered: false, correct: 0, spellDone: false, itemMap: null };
  document.getElementById('ielts-vocab-home').style.display = 'none';
  document.getElementById('ielts-vocab-study').style.display = 'block';
  renderIeltsStudy();
}

function openIeltsSearchStudy(mode) {
  const items = ieltsSearchList.length ? ieltsSearchList : ieltsCurrentScope();
  const words = items.map(r => r.w);
  if (!words.length) return;
  ieltsStudy = {
    ns: 'search', id: 'search', listIndex: -1, title: '搜索结果（' + words.length + ' 词）',
    icon: '🔍', words, items, itemMap: ieltsBuildMap(items),
    idx: 0, flipped: false, mode: mode || 'study', queue: [], current: null, answered: false, correct: 0, spellDone: false
  };
  document.getElementById('ielts-vocab-home').style.display = 'none';
  document.getElementById('ielts-vocab-study').style.display = 'block';
  renderIeltsStudy();
}

function exportIeltsWordCards(words) {
  words = words || (ieltsStudy && ieltsStudy.words && ieltsStudy.words.length ? ieltsStudy.words
    : (ieltsSearchList && ieltsSearchList.length ? ieltsSearchList.map(r => r.w) : ieltsCurrentScope().map(r => r.w)));
  if (!words || !words.length) return;
  if (words.length > 250 && !confirm('将导出 ' + words.length + ' 张单词卡，生成的 PDF 页数较多，确定继续？')) return;
  const title = (ieltsStudy && ieltsStudy.title) ? ieltsStudy.title : (ieltsVocabView === 'level' ? '雅思分级词库' : '雅思主题词库');
  const area = document.getElementById('ielts-print-area');
  if (!area) return;
  let html = `<div class="ielts-pc-title">${ieltsEsc(title)} · 共 ${words.length} 词</div><div class="ielts-pc-grid">`;
  words.forEach(w => {
    const ex = w.example
      ? `<div class="ielts-pc-ex">${ieltsEsc(w.example)}</div><div class="ielts-pc-excn">${ieltsEsc(w.exampleCn || '')}</div>`
      : '';
    html += `<div class="ielts-pc-card">
      <div class="ielts-pc-word">${ieltsEsc(w.word)}</div>
      <div class="ielts-pc-phon">${ieltsEsc(w.phonetic || '')}</div>
      <div class="ielts-pc-pos">${ieltsEsc(w.pos || '')}</div>
      <div class="ielts-pc-meaning">${ieltsEsc(w.meaning || '')}</div>
      ${ex}
    </div>`;
  });
  html += `</div>`;
  area.innerHTML = html;
  area.style.display = 'block';
  window.print();
  setTimeout(() => { area.style.display = 'none'; }, 800);
}

function ieltsVocabReturnHome() {
  if (ieltsVocabView === 'level') renderIeltsLevelsHome();
  else renderIeltsVocabHome();
}

function setIeltsMode(mode) {
  ieltsStudy.mode = mode;
  ieltsStudy.idx = 0;
  ieltsStudy.flipped = false;
  renderIeltsStudy();
}

function renderIeltsStudy() {
  const words = ieltsStudy.words;
  if (!words || !words.length) return;
  const prog = ieltsLoadProgress();
  const learned = words.filter(w => prog[ieltsKey(w)]).length;

  const head = `
    <div class="ielts-study-head">
      <button class="btn btn-ghost btn-sm" onclick="ieltsVocabReturnHome()">← 返回</button>
      <div class="ielts-study-title">${ieltsStudy.icon} ${ieltsStudy.title}</div>
      <div class="ielts-mode-switch">
        <button class="ielts-mode-btn ${ieltsStudy.mode === 'study' ? 'active' : ''}" onclick="setIeltsMode('study')">📖 学习</button>
        <button class="ielts-mode-btn ${ieltsStudy.mode === 'quiz' ? 'active' : ''}" onclick="setIeltsMode('quiz')">🧪 自测</button>
        <button class="ielts-mode-btn ${ieltsStudy.mode === 'spell' ? 'active' : ''}" onclick="setIeltsMode('spell')">✍️ 拼写</button>
      </div>
      <button class="btn btn-ghost btn-sm ielts-export-btn" onclick="exportIeltsWordCards()" title="导出当前单词卡为 PDF">📄 导出</button>
    </div>
    <div class="ielts-study-progress">已掌握 ${learned}/${words.length} · 第 ${ieltsStudy.idx + 1}/${words.length} 个</div>
  `;

  if (ieltsStudy.mode === 'study') {
    const w = words[ieltsStudy.idx];
    const isKnown = !!prog[ieltsKey(w)];
    const exHtml = w.example
      ? `<div class="ielts-flash-ex">${ieltsEsc(w.example)}</div><div class="ielts-flash-excn">${ieltsEsc(w.exampleCn)}</div><button class="ielts-speak-btn ielts-speak-btn-sm" onclick="event.stopPropagation();ieltsSpeak('${ieltsEsc(w.example)}',0.9)">🔊 朗读例句</button>`
      : '';
    document.getElementById('ielts-vocab-study').innerHTML = head + `
      <div class="ielts-flashcard ${ieltsStudy.flipped ? 'flipped' : ''}" onclick="flipIeltsCard()">
        <div class="ielts-flash-front">
          <button class="ielts-speak-btn" onclick="event.stopPropagation();ieltsSpeak('${ieltsEsc(w.word)}',1)">🔊</button>
          <div class="ielts-flash-word">${ieltsEsc(w.word)}</div>
          <div class="ielts-flash-phon">${ieltsEsc(w.phonetic)}</div>
          <div class="ielts-flash-hint">点击卡片翻面看释义</div>
        </div>
        <div class="ielts-flash-back">
          <div class="ielts-flash-pos">${ieltsEsc(w.pos)}</div>
          <div class="ielts-flash-meaning">${ieltsEsc(w.meaning)}</div>
          ${exHtml}
        </div>
      </div>
      <div class="ielts-flash-actions">
        <button class="btn btn-ghost" onclick="ieltsVocabUnknown()">🔁 还不熟</button>
        <button class="btn btn-primary" onclick="ieltsVocabKnown()">✓ ${isKnown ? '已掌握' : '认识'}</button>
      </div>
    `;
  } else if (ieltsStudy.mode === 'spell') {
    // 听音拼写自测
    ieltsStudy.spellDone = false;
    const w = words[ieltsStudy.idx];
    document.getElementById('ielts-vocab-study').innerHTML = head + `
      <div class="question-card ielts-spell-card">
        <span class="question-tag">✍️ 听音拼写</span>
        <div class="ielts-spell-prompt">听音频，把单词拼写出来（注意大小写）</div>
        <button class="btn btn-primary btn-lg" onclick="ieltsSpellPlay()" style="font-size:1.4rem;padding:14px 34px;">🔊 播放单词</button>
        <div class="ielts-spell-speed">
          <span>语速：</span>
          <button class="ielts-spell-speed-btn" data-rate="0.7" onclick="ieltsSpellPlay(0.7)">🐢 慢</button>
          <button class="ielts-spell-speed-btn active" data-rate="0.9" onclick="ieltsSpellPlay(0.9)">✅ 正常</button>
          <button class="ielts-spell-speed-btn" data-rate="1.1" onclick="ieltsSpellPlay(1.1)">🐇 快</button>
        </div>
        <div class="ielts-spell-input-wrap">
          <input id="ielts-spell-input" class="ielts-spell-input" type="text" autocomplete="off" spellcheck="false" placeholder="输入拼写…" onkeydown="if(event.key==='Enter')ieltsSpellCheck()">
          <button class="btn btn-primary" onclick="ieltsSpellCheck()">检查</button>
        </div>
        <div id="ielts-spell-feedback"></div>
      </div>`;
    setTimeout(() => {
      const inp = document.getElementById('ielts-spell-input');
      if (inp) inp.focus();
      ieltsSpellPlay();
    }, 60);
  } else {
    // 自测：四选一
    const w = words[ieltsStudy.idx];
    if (!ieltsStudy.queue.length || ieltsStudy.current !== w) {
      const others = words.filter(x => x.word !== w.word).sort(() => Math.random() - 0.5).slice(0, 3);
      ieltsStudy.queue = [...others, w].sort(() => Math.random() - 0.5);
      ieltsStudy.current = w;
      ieltsStudy.answered = false;
    }
    const opts = ieltsStudy.queue.map((o, i) => `
      <div class="listening-option" onclick="selectIeltsQuiz('${ieltsEsc(o.meaning)}', this)">
        <span class="listening-option-label">${String.fromCharCode(65 + i)}</span>
        <span>${ieltsEsc(o.meaning)}</span>
      </div>`).join('');
    document.getElementById('ielts-vocab-study').innerHTML = head + `
      <div class="question-card">
        <span class="question-tag">🧪 自测</span>
        <div class="question-word">${ieltsEsc(w.word)}</div>
        <div class="question-phonetic">${ieltsEsc(w.phonetic)}</div>
        <button class="btn btn-primary btn-lg" onclick="ieltsSpeak('${ieltsEsc(w.word)}',1)" style="font-size:1.4rem;padding:14px 34px;margin-top:8px;">🔊 朗读</button>
      </div>
      <div id="ielts-quiz-options">${opts}</div>
    `;
  }
}

function ieltsSpellPlay(rate) {
  const w = ieltsStudy.words[ieltsStudy.idx];
  if (w) ieltsSpeak(w.word, rate || 0.9);
  document.querySelectorAll('.ielts-spell-speed-btn').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.rate) === (rate || 0.9)));
}

function ieltsSpellCheck() {
  if (ieltsStudy.spellDone) return;
  const w = ieltsStudy.words[ieltsStudy.idx];
  const inp = document.getElementById('ielts-spell-input');
  const val = (inp ? inp.value : '').trim().toLowerCase();
  const correct = w.word.trim().toLowerCase();
  const fb = document.getElementById('ielts-spell-feedback');
  if (!fb) return;
  ieltsStudy.spellDone = true;
  if (val === correct) {
    ieltsStudy.correct = (ieltsStudy.correct || 0) + 1;
    const prog = ieltsLoadProgress();
    prog[ieltsKey(w)] = 1;
    ieltsSaveProgress(prog);
    fb.innerHTML = `<div class="ielts-spell-ok">✅ 拼写正确！</div>`;
  } else {
    fb.innerHTML = `<div class="ielts-spell-bad">❌ 正确答案：<b>${ieltsEsc(w.word)}</b> <span class="ielts-spell-phon">${ieltsEsc(w.phonetic || '')}</span></div>
      <div class="ielts-spell-meaning">${ieltsEsc(w.meaning || '')}${w.example ? (' · ' + ieltsEsc(w.example)) : ''}</div>`;
  }
  fb.innerHTML += `<div class="ielts-spell-next"><button class="btn btn-primary" onclick="ieltsNextCard()">下一题 →</button></div>`;
}

function flipIeltsCard() {
  ieltsStudy.flipped = !ieltsStudy.flipped;
  renderIeltsStudy();
}
function ieltsVocabKnown() {
  const w = ieltsStudy.words[ieltsStudy.idx];
  const prog = ieltsLoadProgress();
  prog[ieltsKey(w)] = 1;
  ieltsSaveProgress(prog);
  ieltsStudy.flipped = false;
  ieltsNextCard();
}
function ieltsVocabUnknown() {
  const prog = ieltsLoadProgress();
  delete prog[ieltsKey(ieltsStudy.words[ieltsStudy.idx])];
  ieltsSaveProgress(prog);
  ieltsStudy.flipped = false;
  ieltsNextCard();
}
function ieltsNextCard() {
  ieltsStudy.idx++;
  if (ieltsStudy.idx >= ieltsStudy.words.length) {
    const learned = ieltsStudy.words.filter(w => ieltsLoadProgress()[ieltsKey(w)]).length;
    const total = ieltsStudy.words.length;
    const isTest = ieltsStudy.mode === 'quiz' || ieltsStudy.mode === 'spell';
    const scoreLine = isTest ? `<div class="result-sub">${ieltsStudy.mode === 'spell' ? '拼写' : '自测'}答对 ${ieltsStudy.correct || 0}/${total} · 已掌握 ${learned}/${total}</div>` : `<div class="result-sub">已掌握 ${learned}/${total}</div>`;
    let replay;
    if (ieltsStudy.ns === 'level') replay = `openIeltsLevel(${ieltsStudy.listIndex}, '${ieltsStudy.mode}')`;
    else if (ieltsStudy.ns === 'topic') replay = `openIeltsTopic(${ieltsStudy.listIndex}, '${ieltsStudy.mode}')`;
    else replay = `openIeltsSearchStudy('${ieltsStudy.mode}')`;
    document.getElementById('ielts-vocab-study').innerHTML = `
      <div class="card result-card">
        <div style="font-size:3rem;margin-bottom:8px">🎉</div>
        <div class="result-msg">${ieltsStudy.title} 学完啦！</div>
        ${scoreLine}
        <div class="result-actions">
          <button class="btn btn-ghost" onclick="ieltsVocabReturnHome()">← 返回</button>
          <button class="btn btn-primary" onclick="${replay}">🔄 再来一轮</button>
        </div>
      </div>`;
    return;
  }
  renderIeltsStudy();
}
function selectIeltsQuiz(answer, el) {
  if (ieltsStudy.answered) return;
  ieltsStudy.answered = true;
  const correct = ieltsStudy.current.meaning;
  const ok = answer === correct;
  if (ok) {
    el.classList.add('correct');
    ieltsStudy.correct = (ieltsStudy.correct || 0) + 1;
    const prog = ieltsLoadProgress();
    prog[ieltsKey(ieltsStudy.current)] = 1;
    ieltsSaveProgress(prog);
  } else {
    el.classList.add('wrong');
    document.querySelectorAll('#ielts-quiz-options .listening-option').forEach(o => {
      if (o.textContent.includes(correct)) o.classList.add('correct');
    });
  }
  setTimeout(ieltsNextCard, 1500);
}

/* ---------- 口语 ---------- */
function switchSpeaking(part) {
  document.querySelectorAll('#ielts-speaking-sub .ielts-subtab').forEach(b => b.classList.toggle('active', b.dataset.part === part));
  const data = IELTS_SPEAKING[part] || [];
  let html = '';
  if (part === 'part2') {
    html += `<div class="ielts-speak-timer-bar">
      <span>⏱️ Part 2 练习：准备 1 分钟 + 作答 2 分钟</span>
      <button class="btn btn-primary btn-sm" id="ielts-speak-timer-btn" onclick="startIeltsSpeakingTimer()">开始计时</button>
      <span id="ielts-speak-timer" class="ielts-timer-text"></span>
    </div>`;
  }
  html += data.map((d, i) => `
    <div class="ielts-speak-card">
      <div class="ielts-speak-q"><span class="ielts-speak-part">${part.toUpperCase()}</span> ${d.q}</div>
      <button class="ielts-speak-toggle" onclick="toggleSpeakingSample(this)">查看范例与提示 ▾</button>
      <div class="ielts-speak-detail" style="display:none">
        <div class="ielts-speak-sample"><strong>范例：</strong>${d.sample}</div>
        <div class="ielts-speak-tips"><strong>💡 提示：</strong>${d.tips}</div>
      </div>
    </div>`).join('');
  document.getElementById('ielts-speaking-list').innerHTML = html;
  if (ieltsSpeakingTimer) { clearInterval(ieltsSpeakingTimer); ieltsSpeakingTimer = null; }
}
function toggleSpeakingSample(btn) {
  const box = btn.nextElementSibling;
  const open = box.style.display === 'none';
  box.style.display = open ? 'block' : 'none';
  btn.textContent = open ? '收起范例与提示 ▴' : '查看范例与提示 ▾';
}
function startIeltsSpeakingTimer() {
  if (ieltsSpeakingTimer) { clearInterval(ieltsSpeakingTimer); ieltsSpeakingTimer = null; }
  const btn = document.getElementById('ielts-speak-timer-btn');
  const out = document.getElementById('ielts-speak-timer');
  let phase = 'prep', left = 60;
  btn.disabled = true;
  const tick = () => {
    const m = String(Math.floor(left / 60)).padStart(2, '0');
    const s = String(left % 60).padStart(2, '0');
    out.textContent = (phase === 'prep' ? '准备 ' : '作答 ') + m + ':' + s;
    out.className = 'ielts-timer-text ' + (phase === 'prep' ? 'prep' : 'speak');
    if (left <= 0) {
      if (phase === 'prep') { phase = 'speak'; left = 120; }
      else { clearInterval(ieltsSpeakingTimer); ieltsSpeakingTimer = null; out.textContent = '✅ 完成！'; btn.disabled = false; return; }
    }
    left--;
  };
  tick();
  ieltsSpeakingTimer = setInterval(tick, 1000);
}

/* ---------- 写作 ---------- */
// 写作提示卡 & 批改引擎
const IELTS_WRITE_LINKERS = ['however','moreover','furthermore','therefore','thus','consequently','in addition','additionally','besides','on the other hand','in contrast','by contrast','for instance','for example','such as','as a result','as a consequence','nevertheless','nonetheless','meanwhile','similarly','likewise','in other words','to illustrate','on the contrary','what is more','as well as','in particular','specifically','overall','in conclusion','to conclude','in summary','to sum up','firstly','first','secondly','second','thirdly','third','finally','last but not least','in my opinion','from my perspective','i believe','i think','as far as i am concerned','on the one hand','that is to say','in fact','indeed','after all'];
const IELTS_WRITE_SUBORD = ['because','although','though','while','whereas','if','when','since','after','before','until','unless','that','which','who','whom','whose','where','why','despite','in spite of','not only','even though','even if','provided that','as long as','so that'];
const IELTS_WRITE_ADV = ['significant','significantly','substantial','dramatically','inevitable','fundamental','crucial','vital','essential','prominent','notable','considerable','paramount','compelling','advocate','alleviate','mitigate','deteriorate','profound','exacerbate','contribute','demonstrate','illustrate','reflect','highlight','emphasize','underscore','consequently','moreover','nevertheless','nonetheless','whereas','furthermore','ubiquitous','implement','establish','facilitate','generate','fluctuate','proportion','trend','category','robust','sustain','sustainable','phenomenon','perspective','consequence','implication','distribution','correlation','variation','approximately','predominant','marginal','negligible','stable','peak','plateau','respectively'];
let ieltsWrite = { task: 'task1', idx: 0, target: 150 };
let _ieltsWriteSec = 0;

function switchWriting(task) {
  document.querySelectorAll('#ielts-writing-sub .ielts-subtab').forEach(b => b.classList.toggle('active', b.dataset.task === task));
  if (task === 'phrases') {
    if (window._ieltsWriteTimer) { clearInterval(window._ieltsWriteTimer); window._ieltsWriteTimer = null; }
    document.getElementById('ielts-writing-view').innerHTML = renderIeltsPhrases();
    return;
  }
  ieltsWrite.task = task;
  ieltsWrite.target = task === 'task1' ? 150 : 250;
  ieltsWrite.idx = 0;
  renderIeltsWritePanel();
}

function curPrompt() { return IELTS_WRITING_PROMPTS[ieltsWrite.task][ieltsWrite.idx]; }

function renderIeltsWriteGuide(task) {
  const t = IELTS_WRITING[task];
  if (task === 'task1') {
    return `<details class="ielts-guide"><summary>📐 写作要点 · Task 1（点击展开/收起）</summary>
      <div class="ielts-write-block"><h4>📐 结构</h4><ul>${t.structure.map(s => `<li>${s}</li>`).join('')}</ul></div>
      <div class="ielts-write-block"><h4>🔤 趋势动词</h4><div class="ielts-chip-row">${t.verbs.map(v => `<span class="ielts-chip">${v}</span>`).join('')}</div></div>
      <div class="ielts-write-block"><h4>📈 程度副词</h4><div class="ielts-chip-row">${t.adverbs.map(v => `<span class="ielts-chip">${v}</span>`).join('')}</div></div>
      <div class="ielts-write-block"><h4>🧩 句型模板</h4>${t.frames.map(f => `<div class="ielts-frame">${f}</div>`).join('')}</div>
    </details>`;
  }
  return `<details class="ielts-guide"><summary>📐 写作要点 · Task 2（点击展开/收起）</summary>
    <div class="ielts-write-block"><h4>🗂️ 题型</h4><ul>${t.types.map(s => `<li>${s}</li>`).join('')}</ul></div>
    <div class="ielts-write-block"><h4>📐 结构</h4><ul>${t.structure.map(s => `<li>${s}</li>`).join('')}</ul></div>
    <div class="ielts-write-block"><h4>🚀 开头/过渡句型</h4>${t.starters.map(f => `<div class="ielts-frame">${f}</div>`).join('')}</div>
    <div class="ielts-write-block"><h4>🔗 连接词</h4><div class="ielts-chip-row">${t.links.slice(0,7).map(v => `<span class="ielts-chip">${v}</span>`).join('')}</div></div>
  </details>`;
}

function renderIeltsWritePanel() {
  const task = ieltsWrite.task;
  const target = ieltsWrite.target;
  const p = curPrompt();
  const html = renderIeltsWriteGuide(task) + `
    <div class="ielts-write-prompt-card">
      <div class="ielts-write-prompt-top">
        <span class="ielts-write-prompt-tag">${p.type}</span>
        <button class="btn btn-ghost btn-sm" onclick="shuffleIeltsWritePrompt()">🔄 换一题</button>
      </div>
      <div class="ielts-write-prompt-q">${p.prompt}</div>
      <div class="ielts-write-prompt-cn">📋 ${p.promptCn}</div>
      <div class="ielts-write-prompt-tip">💡 ${p.tip}</div>
    </div>
    <div class="ielts-write-practice">
      <div class="ielts-write-practice-head">
        <span>✍️ 你的作文（目标约 ${target} 词）</span>
        <span id="ielts-write-timer" class="ielts-timer-text">00:00</span>
        <button class="btn btn-ghost btn-sm" id="ielts-write-timer-btn" onclick="toggleIeltsWriteTimer()">⏱ 计时</button>
      </div>
      <textarea id="ielts-write-box" class="ielts-write-box" placeholder="在这里输入你的作文，写完后点“提交批改”…" oninput="countIeltsWords()"></textarea>
      <div class="ielts-write-foot"><span id="ielts-write-count">0 词</span><span id="ielts-write-target">目标 ${target} 词</span></div>
      <div class="ielts-write-actions">
        <button class="btn btn-ghost btn-sm" onclick="ieltsWriteClear()">🗑 清空</button>
        <button class="btn btn-ghost btn-sm" id="ielts-sample-btn" onclick="toggleIeltsWriteSample()">👀 看范文</button>
        <button class="btn btn-primary btn-sm" onclick="gradeIeltsEssay()">📝 提交批改</button>
      </div>
      <div id="ielts-write-sample" class="ielts-write-sample" style="display:none"></div>
      <div id="ielts-write-feedback"></div>
    </div>`;
  document.getElementById('ielts-writing-view').innerHTML = html;
  resetWriteTimer();
}

function shuffleIeltsWritePrompt() {
  const arr = IELTS_WRITING_PROMPTS[ieltsWrite.task];
  let n = ieltsWrite.idx;
  if (arr.length > 1) { while (n === ieltsWrite.idx) n = Math.floor(Math.random() * arr.length); }
  ieltsWrite.idx = n;
  renderIeltsWritePanel();
}

function ieltsWriteClear() {
  const box = document.getElementById('ielts-write-box'); if (box) box.value = '';
  const fb = document.getElementById('ielts-write-feedback'); if (fb) fb.innerHTML = '';
  const sp = document.getElementById('ielts-write-sample'); if (sp) { sp.style.display = 'none'; sp.innerHTML = ''; }
  const b = document.getElementById('ielts-sample-btn'); if (b) b.textContent = '👀 看范文';
  countIeltsWords();
  resetWriteTimer();
}

function toggleIeltsWriteSample() {
  const sp = document.getElementById('ielts-write-sample'); if (!sp) return;
  const b = document.getElementById('ielts-sample-btn');
  if (sp.style.display === 'none' || !sp.style.display) {
    sp.innerHTML = `<div class="ielts-sample-head">📄 参考范文（${curPrompt().type}）</div><div class="ielts-sample-body">${ieltsEscapeHtml(curPrompt().sample)}</div>`;
    sp.style.display = 'block'; b.textContent = '🙈 收起范文';
  } else { sp.style.display = 'none'; sp.innerHTML = ''; b.textContent = '👀 看范文'; }
}

function resetWriteTimer() {
  if (window._ieltsWriteTimer) { clearInterval(window._ieltsWriteTimer); window._ieltsWriteTimer = null; }
  const btn = document.getElementById('ielts-write-timer-btn'); if (btn) btn.textContent = '⏱ 计时';
  const out = document.getElementById('ielts-write-timer'); if (out) out.textContent = '00:00';
  _ieltsWriteSec = 0;
}

function toggleIeltsWriteTimer() {
  const btn = document.getElementById('ielts-write-timer-btn');
  const out = document.getElementById('ielts-write-timer');
  if (window._ieltsWriteTimer) {
    clearInterval(window._ieltsWriteTimer); window._ieltsWriteTimer = null; btn.textContent = '⏱ 计时'; return;
  }
  btn.textContent = '⏹ 停止';
  window._ieltsWriteTimer = setInterval(() => {
    _ieltsWriteSec++;
    const m = String(Math.floor(_ieltsWriteSec / 60)).padStart(2, '0');
    const s = String(_ieltsWriteSec % 60).padStart(2, '0');
    out.textContent = m + ':' + s;
  }, 1000);
}

function countIeltsWords() {
  const box = document.getElementById('ielts-write-box'); if (!box) return;
  const words = (box.value.trim().match(/\S+/g) || []).length;
  const el = document.getElementById('ielts-write-count'); if (!el) return;
  const target = ieltsWrite.target || 150;
  el.textContent = words + ' 词';
  el.className = words >= target ? 'ielts-write-count ok' : 'ielts-write-count';
}

function gradeIeltsEssay() {
  const box = document.getElementById('ielts-write-box'); if (!box) return;
  const text = box.value.trim();
  const words = (text.match(/\S+/g) || []).length;
  if (words < 20) { alert('请先写一点内容（至少 20 词）再提交批改哦～'); return; }
  const res = analyzeIeltsEssay(text, ieltsWrite.task, ieltsWrite.target);
  document.getElementById('ielts-write-feedback').innerHTML = renderIeltsWriteFeedback(res);
  const fb = document.getElementById('ielts-write-feedback'); if (fb) fb.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function ieltsEscapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }
function roundHalf(x) { return Math.round(x * 2) / 2; }

function analyzeIeltsEssay(text, task, minWords) {
  const isT1 = task === 'task1';
  const paras = text.split(/\n{1,}/).map(s => s.trim()).filter(Boolean);
  const sentences = text.replace(/([.!?]+)\s*/g, '$1|').split('|').map(s => s.trim()).filter(Boolean);
  const wordTokens = text.match(/[A-Za-z']+/g) || [];
  const wordCount = wordTokens.length;
  const lower = wordTokens.map(w => w.toLowerCase());
  const unique = new Set(lower);
  const ttr = unique.size / Math.max(wordCount, 1);
  const avgWordLen = lower.join('').length / Math.max(wordCount, 1);
  const avgSentLen = wordCount / Math.max(sentences.length, 1);

  const esc = w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const countHits = (list) => {
    let n = 0; const used = [];
    list.forEach(w => { const re = new RegExp('\\b' + esc(w) + '\\b', 'gi'); const m = text.match(re); if (m) { n += m.length; if (m.length) used.push(w); } });
    return { n, used };
  };
  const lk = countHits(IELTS_WRITE_LINKERS);
  const cx = countHits(IELTS_WRITE_SUBORD);
  const av = countHits(IELTS_WRITE_ADV);
  const linkerCount = lk.n, complexCount = cx.n, advCount = av.n;
  const advUsed = av.used.slice(0, 6);

  const issues = [];
  let m;
  const repRe = /\b([a-z']+)\s+\1\b/gi; const seenRep = new Set();
  while ((m = repRe.exec(text))) { const w = m[1].toLowerCase(); if (!seenRep.has(w)) { seenRep.add(w); issues.push({ type: '重复词', text: w + ' ' + w, advice: `连续重复了 “${w} ${w}”，检查是否多打了一遍。` }); } }
  const iRe = /(^|[^A-Za-z])i([^A-Za-z]|$)/g;
  if ((m = iRe.exec(text))) { issues.push({ type: '大小写', text: 'i', advice: '句中的 “i” 应大写为 “I”。' }); }
  const msRe = /\.([A-Za-z])/g;
  if ((m = msRe.exec(text))) { if (!'.!?'.includes(m[1])) issues.push({ type: '空格', text: '.' + m[1], advice: `句号后缺少空格：“.${m[1]}”。` }); }
  sentences.forEach((s, i) => { if (s && /^[a-z]/.test(s)) issues.push({ type: '大小写', text: s.slice(0, 22) + '…', advice: `第 ${i + 1} 句以一个小写字母开头，句首单词应大写。` }); });
  sentences.forEach((s, i) => { const c = (s.match(/\S+/g) || []).length; if (c > 55) issues.push({ type: '长句', text: s.slice(0, 26) + '…', advice: `第 ${i + 1} 句长达 ${c} 词，可能缺少标点，建议拆分为短句。` }); });

  // TR
  let tr = 5.0;
  if (wordCount >= minWords) tr = 6.5;
  if (wordCount >= minWords * 1.15) tr = 7.0;
  const hasOverview = isT1 && /overall|in general|generally|to sum up|it is clear|it can be seen|it is evident|it is obvious/i.test(text);
  const hasPosition = !isT1 && /(in my opinion|from my perspective|i believe|i think|i argue|i contend|this essay (will|agrees|argues)|my view|as far as i am concerned)/i.test(text);
  if ((isT1 && hasOverview) || (!isT1 && hasPosition)) tr += 0.5;
  if (wordCount < minWords * 0.6) tr -= 1.0;
  // CC
  let cc = 5.0;
  if (paras.length >= 3) cc = 6.0;
  if (paras.length >= 4) cc = 6.5;
  if (linkerCount >= 3) cc += 0.5;
  if (linkerCount >= 6) cc += 0.5;
  if (avgSentLen >= 10 && avgSentLen <= 28) cc += 0.5;
  // LR
  let lr = 5.0;
  if (ttr >= 0.45) lr = 6.0;
  if (ttr >= 0.55) lr = 6.5;
  if (ttr >= 0.65) lr = 7.0;
  if (advCount >= 3) lr += 0.5;
  if (advCount >= 6) lr += 0.5;
  if (avgWordLen >= 4.8) lr += 0.5;
  // GRA
  let gra = 5.0;
  if (sentences.length >= 5) gra = 6.0;
  if (sentences.length >= 8) gra = 6.5;
  if (complexCount >= 2) gra += 0.5;
  if (complexCount >= 5) gra += 0.5;
  const errN = issues.filter(i => i.type !== '长句').length;
  gra -= Math.min(2, errN * 0.5);
  tr = clamp(tr, 5, 9); cc = clamp(cc, 5, 9); lr = clamp(lr, 5, 9); gra = clamp(gra, 5, 9);
  let overall = (tr + cc + lr + gra) / 4;
  if (wordCount < minWords) overall = Math.min(overall, 5.0);
  overall = roundHalf(overall);
  tr = roundHalf(tr); cc = roundHalf(cc); lr = roundHalf(lr); gra = roundHalf(gra);

  const fb = { tr: [], cc: [], lr: [], gra: [] };
  if (wordCount < minWords) fb.tr.push(`词数 ${wordCount} 未达到 Task ${isT1 ? 1 : 2} 的最低要求 ${minWords} 词，会被扣分（TR 上限约 5.0）。`);
  else fb.tr.push(`词数 ${wordCount} 达标（要求 ${minWords}+）。`);
  if (isT1) fb.tr.push(hasOverview ? '已包含 Overview 总览段，概括了最显著趋势，符合 Task 1 要求。' : '缺少明确的 Overview（如 overall / in general），建议加一段概括最显著特征。');
  else fb.tr.push(hasPosition ? '文章有明确立场（opinion / position），Task Response 到位。' : '未清晰表达个人立场，Task 2 建议加入 In my opinion / I believe 等表明态度。');

  fb.cc.push(paras.length >= 3 ? `段落结构清晰（${paras.length} 段），分段合理。` : `段落偏少（${paras.length} 段），建议 Task ${isT1 ? 1 : 2} 至少分 ${isT1 ? 3 : 4} 段。`);
  fb.cc.push(linkerCount >= 3 ? `使用了 ${linkerCount} 处连接词/短语，衔接较自然。` : `连接词偏少（${linkerCount} 处），建议增加 however / moreover / therefore 等提升连贯。`);

  fb.lr.push(`词汇多样性 TTR=${ttr.toFixed(2)}（越接近 1 越好），平均词长 ${avgWordLen.toFixed(1)} 字母。`);
  fb.lr.push(advCount >= 3 ? `用到了 ${advCount} 个较高级词汇（如 ${advUsed.slice(0, 3).join(', ')}），LR 有亮点。` : `较高级词汇偏少（${advCount} 个），可适当引入学术/书面表达提升 LR。`);

  fb.gra.push(sentences.length >= 5 ? `句式数量充足（${sentences.length} 句），复合句标记 ${complexCount} 处。` : `句子数量偏少（${sentences.length} 句），建议多写完整句并加入从句。`);
  fb.gra.push(errN > 0 ? `检测到 ${errN} 处疑似语法/拼写问题，详见下方“具体问题”。` : `未检测到明显语法/拼写问题，准确性较好。`);

  return { wordCount, minWords, isT1, paras: paras.length, sentences: sentences.length, linkerCount, complexCount, advCount, ttr, avgSentLen, tr, cc, lr, gra, overall, issues, advUsed, fb };
}

function renderIeltsWriteFeedback(r) {
  const cls = b => b >= 7 ? 'good' : b >= 6 ? 'mid' : 'low';
  const crit = [
    { code: 'TR', name: '任务回应 Task Response', band: r.tr, items: r.fb.tr },
    { code: 'CC', name: '连贯衔接 Coherence & Cohesion', band: r.cc, items: r.fb.cc },
    { code: 'LR', name: '词汇资源 Lexical Resource', band: r.lr, items: r.fb.lr },
    { code: 'GRA', name: '语法 Grammatical Range & Accuracy', band: r.gra, items: r.fb.gra }
  ];
  const critHtml = crit.map(c => `
    <div class="ielts-fb-crit">
      <div class="ielts-fb-crit-head">
        <span class="ielts-fb-code">${c.code}</span>
        <span class="ielts-fb-crit-name">${c.name}</span>
        <span class="ielts-fb-band ${cls(c.band)}">${c.band.toFixed(1)}</span>
      </div>
      <ul class="ielts-fb-items">${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`).join('');
  const issuesHtml = r.issues.length
    ? `<div class="ielts-fb-issues"><h4>⚠ 具体问题（${r.issues.length}）</h4><ul>${r.issues.map(i => `<li><span class="ielts-issue-type">${i.type}</span> <code>${ieltsEscapeHtml(i.text)}</code> — ${i.advice}</li>`).join('')}</ul></div>`
    : `<div class="ielts-fb-issues ok">✅ 未发现明显语法/拼写问题。</div>`;
  return `
    <div class="ielts-feedback">
      <div class="ielts-fb-overall">
        <div class="ielts-fb-overall-num ${cls(r.overall)}">${r.overall.toFixed(1)}</div>
        <div class="ielts-fb-overall-meta">
          <div class="ielts-fb-overall-label">预估总分（Band）</div>
          <div class="ielts-fb-overall-sub">${r.wordCount} 词 · 目标 ${r.minWords} 词 · ${r.isT1 ? 'Task 1' : 'Task 2'}</div>
        </div>
      </div>
      <p class="ielts-fb-disclaimer">ⓘ 本分数为基于词汇、语法、结构等维度的 <b>AI 启发式估算</b>，仅供参考，不等同于官方成绩。你也可以把作文贴给 WorkBuddy，让我给出更细致的逐句批改。</p>
      <div class="ielts-fb-crits">${critHtml}</div>
      ${issuesHtml}
    </div>`;
}

function renderIeltsPhrases() {
  return `<div class="ielts-write-guide">
    <h3>🏆 高分短语库</h3>
    <p class="ielts-write-intro">熟记并灵活使用以下表达，可显著提升写作与口语的 Lexical Resource 分数。</p>
    <div class="ielts-phrase-list">${IELTS_PHRASES.map(p => { const sp = p.indexOf(' '); const en = p.slice(0, sp); const rest = p.slice(sp + 1); return `<div class="ielts-phrase"><span class="ielts-phrase-en">${en}</span><span class="ielts-phrase-cn">${rest}</span></div>`; }).join('')}</div>
  </div>`;
}

/* ---------- 评分标准 ---------- */
function renderIeltsBands() {
  const lr = IELTS_BANDS.listeningReading;
  const sp = IELTS_BANDS.speaking;
  const wr = IELTS_BANDS.writing;
  const crit = IELTS_BANDS.writingCriteria;
  document.getElementById('ielts-bands-view').innerHTML = `
    <div class="ielts-band-section">
      <h3>🎧 听力 / 📖 阅读（学术类）正确数 → 分数</h3>
      <table class="ielts-band-table">
        <thead><tr><th>正确题数（共40）</th><th>对应分数</th></tr></thead>
        <tbody>${lr.map(r => `<tr><td>${r.raw}</td><td><b>${r.band}</b></td></tr>`).join('')}</tbody>
      </table>
    </div>
    <div class="ielts-band-grid">
      <div class="ielts-band-col">
        <h3>🗣️ 口语评分</h3>
        <table class="ielts-band-table">
          <thead><tr><th>分数</th><th>描述</th></tr></thead>
          <tbody>${sp.map(r => `<tr><td><b>${r.band}</b></td><td>${r.desc}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      <div class="ielts-band-col">
        <h3>✍️ 写作评分</h3>
        <table class="ielts-band-table">
          <thead><tr><th>分数</th><th>描述</th></tr></thead>
          <tbody>${wr.map(r => `<tr><td><b>${r.band}</b></td><td>${r.desc}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </div>
    <div class="ielts-band-section">
      <h3>✍️ 写作四大评分项</h3>
      <div class="ielts-crit-grid">
        ${crit.map(c => `<div class="ielts-crit"><div class="ielts-crit-code">${c.code}</div><div class="ielts-crit-name">${c.name}</div><div class="ielts-crit-note">${c.note}</div></div>`).join('')}
      </div>
    </div>
  `;
}

// 启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
