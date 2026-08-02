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
  App.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const tab = document.querySelector(`.nav-tab[data-page="${page}"]`);
  if (tab) tab.classList.add('active');

  if (page === 'home') renderDashboard();
  if (page === 'stats') renderStats();
  if (page === 'wrong') renderWrongBook();
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
  const data = JSON.parse(localStorage.getItem('dailyGoals') || '{}');
  if (data.date !== today) {
    // 新的一天，重置
    return {
      date: today,
      wordsTarget: 20,
      wordsDone: 0,
      examTarget: 1,
      examDone: 0,
      testTarget: 1,
      testDone: 0,
    };
  }
  return data;
}

function saveDailyGoals(data) {
  localStorage.setItem('dailyGoals', JSON.stringify(data));
}

function recordDailyActivity(type, count = 1) {
  const goals = getDailyGoals();
  if (type === 'word') goals.wordsDone += count;
  if (type === 'exam') goals.examDone += count;
  if (type === 'test') goals.testDone += count;
  saveDailyGoals(goals);
}

function renderDailyGoals() {
  const container = document.getElementById('daily-goals');
  if (!container) return;
  const goals = getDailyGoals();
  const today = new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', weekday: 'long' });

  const items = [
    { key: 'word', icon: '📖', text: '背单词', done: goals.wordsDone, target: goals.wordsTarget },
    { key: 'test', icon: '📝', text: '词汇测试', done: goals.testDone, target: goals.testTarget },
    { key: 'exam', icon: '📋', text: '做试卷', done: goals.examDone, target: goals.examTarget },
  ];

  container.innerHTML = `
    <div class="daily-goals-header">
      <span class="daily-goals-title">🎯 今日学习目标</span>
      <span class="daily-goals-date">${today}</span>
    </div>
    <div class="daily-goals-list">
      ${items.map(item => {
        const isDone = item.done >= item.target;
        return `
          <div class="daily-goal-item ${isDone ? 'done' : ''}">
            <div class="daily-goal-checkbox"></div>
            <span class="daily-goal-text">${item.icon} ${item.text}</span>
            <span class="daily-goal-progress">${item.done}/${item.target}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
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
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

// ==================== 初始化 ====================
function init() {
  initTheme();
  loadRecord();
  setupTestConfig();
  renderDashboard();
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

// 启动
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
