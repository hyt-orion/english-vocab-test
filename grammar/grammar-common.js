/* ===== 语法互动 2.0 · 渲染引擎（5 步学习环）=====
 * 复用主页火宝宝 qilin 图；风格对齐 App 主页（深色暖橙）。
 * 火宝宝等级 / 成长值读取与主页面完全相同的 localStorage key（huobao_growth / huobao_theme_pref）。
 * 内容数据来自 window.GRAMMAR_MODULES（?id= 取章节）。
 */
(function () {
  'use strict';

  var MODULES = window.GRAMMAR_MODULES || {};
  var KEY = 'grammarModuleProgress';

  /* ---------- 火宝宝等级：与主页 App 完全统一 ---------- */
  var HUOBAO_LEVELS = [
    { lv: 1, min: 0,    name: '小火苗',   iceName: '小冰晶' },
    { lv: 2, min: 20,   name: '跳跳火',   iceName: '跳跳冰' },
    { lv: 3, min: 50,   name: '烈焰宝宝', iceName: '冰晶宝宝' },
    { lv: 4, min: 100,  name: '炽焰精灵', iceName: '寒霜精灵' },
    { lv: 5, min: 250,  name: '炎龙之魂', iceName: '冰龙之魂' },
    { lv: 6, min: 550,  name: '不灭圣火', iceName: '不灭玄冰' },
    { lv: 7, min: 1000, name: '传说火神', iceName: '传说冰神' }
  ];
  function getHuobaoLevelByGrowth(v) {
    var lvl = HUOBAO_LEVELS[0];
    for (var i = 0; i < HUOBAO_LEVELS.length; i++) if (v >= HUOBAO_LEVELS[i].min) lvl = HUOBAO_LEVELS[i];
    return lvl;
  }
  // 与主页 app.js 同套「未命名空间」key：huobao_growth / huobao_theme_pref / huobao_growth_log
  function getHuobaoState() {
    var growth = parseInt(localStorage.getItem('huobao_growth') || '0', 10) || 0;
    var variant = (localStorage.getItem('huobao_theme_pref') || 'fire') === 'ice' ? 'ice' : 'fire';
    var L = getHuobaoLevelByGrowth(growth);
    return { level: L.lv, growth: growth, variant: variant, name: variant === 'ice' ? L.iceName : L.name };
  }

  /* ---------- 取章节 ---------- */
  function getId() {
    var p = new URLSearchParams(location.search);
    var id = p.get('id');
    if (id && MODULES[id]) return id;
    return Object.keys(MODULES)[0] || null;
  }
  function curMod() { return MODULES[getId()]; }
  function curSec() { var m = curMod(); return m && m.sections[state.secIdx]; }
  function isLastSec() { var m = curMod(); return m && state.secIdx >= m.sections.length - 1; }

  function practiceTotal(m) {
    if (!m) return 0;
    var t = 0;
    m.sections.forEach(function (s) { t += (s.practice ? s.practice.length : 0); });
    return t;
  }

  /* ---------- 状态 ---------- */
  var root, state, inited = false;
  function init() {
    if (inited) return;
    inited = true;
    root = document.getElementById('gm2-root');
    if (!root) return; // 目录页(index.html)无 gm2-root：只暴露 getHuobaoState，不渲染详情
    state = { secIdx: 0, step: 1, secWrong: [], streak: 0, guidedHint: 0, guidedFilled: [], matchMap: {}, matched: false };
    render();
  }

  /* ---------- 渲染骨架 ---------- */
  function render() {
    if (!root) return;
    var m = curMod();
    if (!m) { root.innerHTML = '<p style="color:#a8978a">未找到该语法模块。</p>'; return; }
    var s = curSec();
    var hb = getHuobaoState();
    var html = '';
    html += '<div class="gm2-bar">'
      + '<a class="gm2-back" href="index.html">← 全部语法</a>'
      + '<div class="gm2-ch">' + m.title + '</div>'
      + mascotHtml(hb)
      + '</div>';
    html += stepBar(state.step);
    html += '<div class="gm2-body">' + stepHtml(s, state.step, hb) + '</div>';
    root.innerHTML = html;
    bind(s, state.step);
    document.title = m.title + ' · 语法互动2.0';
  }

  function mascotHtml(hb) {
    var cls = hb.variant === 'ice' ? 'gm2-mascot gm2-ice' : 'gm2-mascot';
    return '<div class="' + cls + '" id="gm2-mascot" title="戳一戳火宝宝"><img src="../assets/qilin/qilin-' + hb.level + '.png" alt="火宝宝" draggable="false">'
      + '<span class="gm2-lv">Lv.' + hb.level + ' ' + hb.name + '</span></div>';
  }

  var STEP_LABELS = ['引你入门', '带析例句', '引导练习', '独立练习', '巩固复盘'];
  function stepBar(step) {
    var h = '<div class="gm2-stepbar">';
    for (var i = 0; i < 5; i++) {
      var n = i + 1;
      var cls = n < step ? 'done' : (n === step ? 'cur' : '');
      h += '<div class="gm2-step ' + cls + '"><span class="gm2-dot">' + (n < step ? '✓' : n) + '</span>' + STEP_LABELS[i] + '</div>';
      if (n < 5) h += '<span class="gm2-line ' + (n < step ? 'on' : '') + '"></span>';
    }
    h += '</div><div class="gm2-progress"><i style="width:' + (step / 5 * 100) + '%"></i></div>';
    return h;
  }

  /* ---------- 各步骤内容 ---------- */
  function stepHtml(s, step, hb) {
    if (step === 1) return stepIntro(s);
    if (step === 2) return stepWorked(s);
    if (step === 3) return stepGuided(s);
    if (step === 4) return stepPractice(s);
    if (step === 5) return stepRecap(s, hb);
    return '';
  }

  function stepIntro(s) {
    return '<div class="gm2-card">'
      + '<div class="gm2-kicker">STEP 1 · 火宝宝引你入门</div>'
      + '<h2>' + s.title + '</h2>'
      + '<p class="gm2-concept">' + s.intro.concept + '</p>'
      + '<div class="gm2-mnem"><span class="gm2-tag">📌 记忆口诀</span><button class="gm2-pin" data-pin="' + s.id + '">收藏记忆卡</button>'
      + '<div class="gm2-mnem-txt">' + s.intro.mnemonic + '</div></div>'
      + '<div class="gm2-analogy">🧠 类比理解：' + s.intro.analogy + '</div>'
      + '<button class="gm2-next" data-go="2">开始学习 →</button>'
      + '</div>';
  }

  function stepWorked(s) {
    var h = '<div class="gm2-card"><div class="gm2-kicker">STEP 2 · 带析例句（火宝宝一步步讲）</div>';
    s.worked.forEach(function (w, wi) {
      h += '<div class="gm2-worked">'
        + '<div class="gm2-sent">' + w.sentence.replace('___', '<u>___</u>')
        + ' <button class="gm2-spk" data-spk="' + wi + '">🔊 朗读</button></div>'
        + '<button class="gm2-reveal" data-wi="' + wi + '">👉 看火宝宝怎么想</button>'
        + '<ol class="gm2-steps" id="ws-' + wi + '" style="display:none">' + w.steps.map(function (st) { return '<li>' + st + '</li>'; }).join('') + '</ol>'
        + (w.diagram ? '<div class="gm2-diagram">🖼 ' + w.diagram + '</div>' : '')
        + '</div>';
    });
    h += '<button class="gm2-next" data-go="3">我懂了，练练 →</button></div>';
    return h;
  }

  function stepGuided(s) {
    var g = s.guided;
    var text = g.text;
    for (var i = 0; i < g.blanks; i++) {
      text = text.replace('___', '<span class="gm2-blank" data-bi="' + i + '">＿＿＿</span>');
    }
    var bank = g.bank.map(function (b, bi) {
      var label = (b === '' || b === '∅') ? '∅ 零冠词' : b;
      return '<button class="gm2-bank" data-bi="' + bi + '" data-val="' + b + '">' + label + '</button>';
    }).join('');
    return '<div class="gm2-card"><div class="gm2-kicker">STEP 3 · 引导练习（先扶你一把）</div>'
      + '<p class="gm2-guide-tip">点空白框选中，再点下面的词填进去。填错火宝宝会给提示，可以重试～</p>'
      + '<div class="gm2-guided-text">' + text + '</div>'
      + '<div class="gm2-bank-row">' + bank + '</div>'
      + '<div class="gm2-hint" id="gm2-hint" style="display:none"></div>'
      + '<div class="gm2-fb" id="gm2-guided-fb"></div>'
      + '<div class="gm2-actions"><button class="gm2-check" data-check="guided">检查</button>'
      + '<button class="gm2-next" data-go="4" style="display:none">下一步 →</button></div>'
      + '</div>';
  }

  function stepPractice(s) {
    var h = '<div class="gm2-card"><div class="gm2-kicker">STEP 4 · 独立练习（多题型混搭）</div>';
    h += '<div id="gm2-practice">';
    s.practice.forEach(function (q, qi) { h += renderQuestion(q, qi); });
    h += '</div>';
    h += '<div class="gm2-streak" id="gm2-streak" style="display:none"></div>';
    h += '<button class="gm2-next" data-go="5" id="gm2-prac-next" disabled>复盘 →</button>';
    return h + '</div>';
  }

  function renderQuestion(q, qi) {
    var h = '<div class="gm2-q" data-qi="' + qi + '" data-type="' + q.type + '">';
    h += '<div class="gm2-qno">第 ' + (qi + 1) + ' 题 · ' + typeName(q.type) + '</div>';
    if (q.note) h += '<div class="gm2-qnote">' + q.note + '</div>';
    h += '<div class="gm2-qtext">' + q.q + '</div>';
    if (q.type === 'mcq') {
      h += '<div class="gm2-opts">';
      q.options.forEach(function (o) {
        h += '<button class="gm2-opt" data-val="' + o + '">' + o + '</button>';
      });
      h += '</div>';
    } else if (q.type === 'fill') {
      h += '<div class="gm2-inrow"><input class="gm2-input" data-qi="' + qi + '" placeholder="填入答案">';
      if (q.bank) h += '<div class="gm2-minibank">' + q.bank.map(function (b) { return '<button class="gm2-mini" data-val="' + b + '">' + (b === '' || b === '∅' ? '∅' : b) + '</button>'; }).join('') + '</div>';
      h += '</div>';
    } else if (q.type === 'correct') {
      h += '<div class="gm2-inrow"><input class="gm2-input" data-qi="' + qi + '" placeholder="写出正确句子"></div>';
    } else if (q.type === 'transform') {
      h += '<div class="gm2-inrow"><input class="gm2-input" data-qi="' + qi + '" placeholder="改写句子"></div>';
    } else if (q.type === 'match') {
      h += renderMatch(q);
    }
    if (q.type !== 'match') {
      h += '<button class="gm2-check" data-check="' + qi + '">检查</button>';
    }
    h += '<div class="gm2-fb" data-fb="' + qi + '"></div>';
    h += '</div>';
    return h;
  }
  function typeName(t) { return { mcq: '选择题', fill: '填空题', correct: '改错题', transform: '转换题', match: '匹配题' }[t] || '题'; }

  function renderMatch(q) {
    var exs = q.pairs.map(function (p, i) { return { ex: p.ex, match: i }; });
    for (var i = exs.length - 1; i > 0; i--) { var j = (i * 7 + 3) % (i + 1); var t = exs[i]; exs[i] = exs[j]; exs[j] = t; }
    var h = '<div class="gm2-match"><div class="gm2-col"><div class="gm2-col-h">规则</div>';
    q.pairs.forEach(function (p, i) { h += '<button class="gm2-rule" data-ri="' + i + '">' + p.rule + '</button>'; });
    h += '</div><div class="gm2-col"><div class="gm2-col-h">例子</div>';
    exs.forEach(function (e) { h += '<button class="gm2-ex" data-ei="' + e.match + '">' + e.ex + '</button>'; });
    h += '</div></div><button class="gm2-check" data-check="match">检查配对</button>';
    return h;
  }

  function stepRecap(s, hb) {
    var h = '<div class="gm2-card"><div class="gm2-kicker">STEP 5 · 巩固复盘</div>';
    h += '<div class="gm2-recap">📣 火宝宝划重点：<b>' + s.recap + '</b></div>';
    h += '<button class="gm2-next" data-recap="1">我记住了 ✓</button>';
    if (state.secWrong.length) {
      h += '<div class="gm2-review"><div class="gm2-rv-h">🔁 易错点回炉（刚才错过的，再练一次）</div><div id="gm2-review-list">';
      state.secWrong.forEach(function (qi) { h += renderQuestion(s.practice[qi], 'r' + qi); });
      h += '</div></div>';
    }
    h += '</div>';
    return h;
  }

  /* ---------- 事件绑定 ---------- */
  function bind(s, step) {
    var m = document.getElementById('gm2-mascot');
    if (m) m.addEventListener('click', cheer);
    root.querySelectorAll('[data-go]').forEach(function (b) { b.addEventListener('click', function () { gotoStep(parseInt(b.getAttribute('data-go'), 10)); }); });
    root.querySelectorAll('[data-pin]').forEach(function (b) { b.addEventListener('click', function () { pin(b.getAttribute('data-pin'), s); }); });
    root.querySelectorAll('.gm2-reveal').forEach(function (b) { b.addEventListener('click', function () {
      var ol = document.getElementById('ws-' + b.getAttribute('data-wi'));
      if (ol) { ol.style.display = ol.style.display === 'none' ? 'block' : 'none'; }
    }); });
    root.querySelectorAll('.gm2-spk').forEach(function (b) { b.addEventListener('click', function () { speak(cleanSentence(s.worked[parseInt(b.getAttribute('data-spk'), 10)])); }); });

    if (step === 3) bindGuided(s);
    if (step === 4) bindPractice(s);
    if (step === 5) bindRecap(s);
  }

  function bindGuided(s) {
    var g = s.guided;
    var sel = -1;
    root.querySelectorAll('.gm2-blank').forEach(function (el) {
      el.addEventListener('click', function () {
        root.querySelectorAll('.gm2-blank').forEach(function (x) { x.classList.remove('sel'); });
        el.classList.add('sel'); sel = parseInt(el.getAttribute('data-bi'), 10);
      });
    });
    root.querySelectorAll('.gm2-bank').forEach(function (el) {
      el.addEventListener('click', function () {
        if (sel < 0) { flashHint('先点一下要填的空白框～'); return; }
        state.guidedFilled[sel] = el.getAttribute('data-val');
        var b = root.querySelector('.gm2-blank[data-bi="' + sel + '"]');
        var v = state.guidedFilled[sel];
        if (b) b.textContent = v === '' ? '∅' : v;
        sel = -1;
        root.querySelectorAll('.gm2-blank').forEach(function (x) { x.classList.remove('sel'); });
      });
    });
    var check = root.querySelector('[data-check="guided"]');
    if (check) check.addEventListener('click', function () {
      var ok = true;
      for (var i = 0; i < g.blanks; i++) { if ((state.guidedFilled[i] || '') !== g.answers[i]) ok = false; }
      var fb = document.getElementById('gm2-guided-fb');
      var next = root.querySelector('[data-go="4"]');
      if (ok) {
        state.streak = Math.max(0, state.streak) + 1;
        fb.className = 'gm2-fb ok'; fb.textContent = praise();
        if (next) next.style.display = 'inline-block';
      } else {
        state.streak = -1;
        state.guidedHint = Math.min(state.guidedHint + 1, g.hints.length);
        var hi = document.getElementById('gm2-hint');
        if (state.guidedHint <= g.hints.length) { hi.style.display = 'block'; hi.textContent = '💡 提示 ' + state.guidedHint + '：' + g.hints[state.guidedHint - 1]; }
        fb.className = 'gm2-fb bad';
        if (state.guidedHint >= g.hints.length) { fb.textContent = '🔑 答案：' + g.answers.join(' / '); if (next) next.style.display = 'inline-block'; }
        else fb.textContent = '再试试看，火宝宝相信你～';
        gentle();
      }
    });
  }

  function bindPractice(s) {
    root.querySelectorAll('.gm2-opt').forEach(function (el) {
      el.addEventListener('click', function () {
        var q = el.closest('.gm2-q');
        q.querySelectorAll('.gm2-opt').forEach(function (x) { x.classList.remove('pick'); });
        el.classList.add('pick');
      });
    });
    root.querySelectorAll('.gm2-mini').forEach(function (el) {
      el.addEventListener('click', function () {
        var inp = el.closest('.gm2-inrow').querySelector('.gm2-input');
        if (inp) inp.value = el.getAttribute('data-val') === '' ? '' : el.getAttribute('data-val');
      });
    });
    root.querySelectorAll('.gm2-check').forEach(function (el) {
      var v = el.getAttribute('data-check');
      if (v === 'match') el.addEventListener('click', function () { checkMatch(s); });
      else el.addEventListener('click', function () { checkQ(s, parseInt(v, 10)); });
    });
    bindMatch(s);
  }

  function checkQ(s, qi) {
    var q = s.practice[qi];
    var qEl = root.querySelector('.gm2-q[data-qi="' + qi + '"]');
    var fb = root.querySelector('[data-fb="' + qi + '"]');
    var user;
    if (q.type === 'mcq') {
      var pick = qEl.querySelector('.gm2-opt.pick');
      if (!pick) { flashFb(fb, '先选一个答案哦'); return; }
      user = pick.getAttribute('data-val');
    } else {
      user = (qEl.querySelector('.gm2-input').value || '').trim();
      if (!user) { flashFb(fb, '先写点什么～'); return; }
    }
    var correct = normalize(user) === normalize(q.answer);
    if (correct) {
      qEl.classList.add('solved');
      fb.className = 'gm2-fb ok'; fb.innerHTML = praise() + ' <span class="gm2-exp">' + q.explain + '</span>';
      state.streak = state.streak >= 0 ? state.streak + 1 : 1;
      removeWrong(s, qi);
    } else {
      state.streak = -1;
      fb.className = 'gm2-fb bad';
      var retry = (q.type === 'fill' || q.type === 'correct' || q.type === 'transform');
      fb.innerHTML = (retry ? '❌ 不对，再想想。' : '❌ 不对哦。') + ' <span class="gm2-exp">' + q.explain + '</span>';
      addWrong(s, qi);
      gentle();
    }
    updateStreakBanner();
    updatePracNext(s);
  }
  function normalize(s) { return (s || '').toString().replace(/\s+/g, ' ').replace(/\.*$/, '').trim().toLowerCase(); }

  function bindMatch(s) {
    var selRule = null;
    root.querySelectorAll('.gm2-rule').forEach(function (r) {
      r.addEventListener('click', function () {
        root.querySelectorAll('.gm2-rule').forEach(function (x) { x.classList.remove('sel'); });
        r.classList.add('sel'); selRule = parseInt(r.getAttribute('data-ri'), 10);
      });
    });
    root.querySelectorAll('.gm2-ex').forEach(function (e) {
      e.addEventListener('click', function () {
        if (selRule === null) { flashHint('先点左边的规则，再点右边的例子'); return; }
        if (e.classList.contains('paired')) return;
        state.matchMap[selRule] = parseInt(e.getAttribute('data-ei'), 10);
        e.classList.add('paired'); e.classList.add('sel2');
        var r = root.querySelector('.gm2-rule[data-ri="' + selRule + '"]');
        if (r) { r.classList.add('paired'); r.classList.remove('sel'); }
        selRule = null;
      });
    });
  }
  function checkMatch(s) {
    var allOk = true;
    Object.keys(state.matchMap).forEach(function (ri) {
      var correctEi = parseInt(ri, 10);
      if (state.matchMap[ri] !== correctEi) {
        allOk = false;
        var ex = root.querySelector('.gm2-ex[data-ei="' + state.matchMap[ri] + '"]');
        var ru = root.querySelector('.gm2-rule[data-ri="' + ri + '"]');
        if (ex) ex.classList.add('wrong');
        if (ru) ru.classList.add('wrong');
      } else {
        var ex2 = root.querySelector('.gm2-ex[data-ei="' + correctEi + '"]');
        var ru2 = root.querySelector('.gm2-rule[data-ri="' + correctEi + '"]');
        if (ex2) ex2.classList.add('right'); if (ru2) ru2.classList.add('right');
      }
    });
    var fb = root.querySelector('[data-fb]');
    var next = document.getElementById('gm2-prac-next');
    if (allOk) { if (next) next.disabled = false; if (fb) { fb.className = 'gm2-fb ok'; fb.textContent = praise() + ' 全部连对！'; } }
    else { if (fb) { fb.className = 'gm2-fb bad'; fb.textContent = '有连错的，红色的是错的，拆开重连～'; } }
  }

  function bindRecap(s) {
    var btn = root.querySelector('[data-recap]');
    if (btn) btn.addEventListener('click', function () {
      btn.disabled = true; btn.textContent = '火宝宝已收到 👍';
      confetti();
      var m = document.getElementById('gm2-mascot');
      if (m) { var sp = m.querySelector('span'); if (sp) sp.textContent = '🔥 学完啦！'; }
      setTimeout(function () {
        if (isLastSec()) { chapterDone(); }
        else { state.secIdx++; state.step = 1; state.secWrong = []; state.streak = 0; state.guidedHint = 0; state.guidedFilled = []; state.matchMap = {}; render(); }
      }, 900);
    });
    root.querySelectorAll('#gm2-review-list .gm2-q').forEach(function (qEl) {
      var qi = qEl.getAttribute('data-qi');
      if (qi.indexOf('r') === 0) qi = parseInt(qi.slice(1), 10);
      var type = qEl.getAttribute('data-type');
      if (type === 'mcq') {
        qEl.querySelectorAll('.gm2-opt').forEach(function (o) { o.addEventListener('click', function () { qEl.querySelectorAll('.gm2-opt').forEach(function (x) { x.classList.remove('pick'); }); o.classList.add('pick'); }); });
      }
      var chk = qEl.querySelector('.gm2-check');
      if (chk) chk.addEventListener('click', function () {
        var q = s.practice[qi];
        var fb = qEl.querySelector('.gm2-fb');
        var user;
        if (type === 'mcq') { var p = qEl.querySelector('.gm2-opt.pick'); if (!p) { fb.className = 'gm2-fb bad'; fb.textContent = '先选一个'; return; } user = p.getAttribute('data-val'); }
        else { user = (qEl.querySelector('.gm2-input').value || '').trim(); if (!user) { fb.className = 'gm2-fb bad'; fb.textContent = '先写'; return; } }
        if (normalize(user) === normalize(q.answer)) { qEl.classList.add('solved'); fb.className = 'gm2-fb ok'; fb.innerHTML = '✅ 这回对了！ ' + q.explain; removeWrong(s, qi); }
        else { fb.className = 'gm2-fb bad'; fb.innerHTML = '❌ 还是不对，看解析：' + q.explain; }
      });
    });
  }

  /* ---------- 进度 / 反馈 ---------- */
  function addWrong(s, qi) { if (state.secWrong.indexOf(qi) < 0) state.secWrong.push(qi); }
  function removeWrong(s, qi) { var i = state.secWrong.indexOf(qi); if (i >= 0) state.secWrong.splice(i, 1); }
  function updatePracNext(s) {
    var next = document.getElementById('gm2-prac-next');
    if (!next) return;
    var total = s.practice.length;
    var solved = root.querySelectorAll('.gm2-q.solved').length;
    next.disabled = solved < total;
    next.textContent = solved < total ? ('还差 ' + (total - solved) + ' 题 →') : '复盘 →';
  }
  function updateStreakBanner() {
    var el = document.getElementById('gm2-streak');
    if (!el) return;
    if (state.streak <= -2) { el.style.display = 'block'; el.className = 'gm2-streak soft'; el.textContent = '🌱 别急，火宝宝陪你慢慢来～ 回去看一眼口诀和带析例句？'; }
    else { el.style.display = 'none'; }
  }

  function praise() { var p = ['太棒了！🔥', '完全正确！', '火宝宝给你点赞👍', '就是这样！', '稳！']; var k = Math.max(0, state.streak); return p[k % p.length]; }
  function gentle() { /* 连错已由 updateStreakBanner 处理 */ }
  function flashHint(t) { var h = document.getElementById('gm2-hint'); if (h) { h.style.display = 'block'; h.textContent = '💡 ' + t; } }
  function flashFb(fb, t) { if (fb) { fb.className = 'gm2-fb bad'; fb.textContent = t; } }

  function pin(id, s) {
    try {
      var cards = JSON.parse(localStorage.getItem('gm2_cards') || '[]');
      if (cards.indexOf(id) < 0) { cards.push(id); localStorage.setItem('gm2_cards', JSON.stringify(cards)); }
      var b = root.querySelector('[data-pin="' + id + '"]');
      if (b) { b.textContent = '✅ 已收藏'; b.disabled = true; }
    } catch (e) {}
  }
  function cheer() {
    var m = document.getElementById('gm2-mascot');
    if (!m) return;
    m.classList.remove('bounce'); void m.offsetWidth; m.classList.add('bounce');
    var sp = m.querySelector('span');
    if (sp) { var old = sp.textContent; sp.textContent = '加油，你可以的！🔥'; setTimeout(function () { var hb = getHuobaoState(); sp.textContent = 'Lv.' + hb.level + ' ' + hb.name; }, 1200); }
  }

  /* ---------- 章节完成 + 成长值（与主页同 key） ---------- */
  function chapterDone() {
    var m = curMod();
    var awarded = awardGrammarGrowth(getId(), m ? m.title : getId());
    state.step = 6;
    var total = practiceTotal(m);
    setProgress(getId(), { done: true, correct: total, total: total, date: new Date().toISOString().slice(0, 10) });
    root.innerHTML = '<div class="gm2-card gm2-done">'
      + '<div class="gm2-kicker">本章通关 🎉</div>'
      + '<h2>' + (m ? m.title : '本章') + ' 全学完啦！</h2>'
      + (awarded ? '<p class="gm2-done-grow">🔥 火宝宝成长 +5！（与主页面同步）</p>' : '<p class="gm2-done-grow">（本章已学过，不重复发成长值）</p>')
      + '<canvas id="gm2-confetti" class="gm2-confetti"></canvas>'
      + '<a class="gm2-next" href="index.html">返回全部语法</a></div>';
    confetti();
  }

  /* 学完本章给火宝宝加成长值（每章仅首次发放，防止「再学一遍」刷分）
     写入的 key 与 app.js 完全一致（huobao_growth / huobao_growth_log / grammar_modules_done）。 */
  var GRAMMAR_DONE_KEY = 'grammar_modules_done';
  var GRAMMAR_REWARD = 5;
  function awardGrammarGrowth(id, title) {
    try {
      var done = {};
      try { done = JSON.parse(localStorage.getItem(GRAMMAR_DONE_KEY) || '{}'); } catch (e) {}
      if (done[id]) return false; // 本章已发放过，不再加
      done[id] = true;
      localStorage.setItem(GRAMMAR_DONE_KEY, JSON.stringify(done));
      var g = parseInt(localStorage.getItem('huobao_growth') || '0', 10) || 0;
      g += GRAMMAR_REWARD;
      localStorage.setItem('huobao_growth', String(g));
      var log = [];
      try { log = JSON.parse(localStorage.getItem('huobao_growth_log') || '[]'); } catch (e) {}
      log.push({
        t: Date.now(),
        date: new Date().toISOString().slice(0, 10),
        reason: '语法互动·' + (title || id),
        points: GRAMMAR_REWARD,
        balance: g
      });
      if (log.length > 200) log.splice(0, log.length - 200);
      localStorage.setItem('huobao_growth_log', JSON.stringify(log));
      try { window.dispatchEvent(new StorageEvent('storage', { key: 'huobao_growth' })); } catch (e) {}
      return true;
    } catch (e) { return false; }
  }

  function getProgress() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } }
  function setProgress(id, val) { var all = getProgress(); all[id] = val; try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {} }

  /* ---------- 朗读 / 撒花 ---------- */
  // 生成"可朗读"的句子：优先取 steps 里 ✅ 开头的完整正确句；否则去掉 ___ / 星号 / 标签，
  // 避免把填空下划线念成"underscore underscore underscore"（听感像卡住重复念一个词）。
  function cleanSentence(w) {
    if (!w) return '';
    var steps = w.steps || [];
    for (var i = 0; i < steps.length; i++) {
      var st = steps[i];
      if (typeof st === 'string' && st.indexOf('✅') === 0) {
        var eng = st.slice(1).trim().replace(/[（(][^）)]*[）)]/g, '');
        // 仅当这句以英文为主（含字母且无中文）才采用，避免念中文注释
        if (/[A-Za-z]/.test(eng) && !/[\u4e00-\u9fff]/.test(eng)) {
          return eng.replace(/\s+/g, ' ').trim();
        }
      }
    }
    return (w.sentence || '')
      .replace(/<[^>]+>/g, '')
      .replace(/_{2,}/g, ' ')
      .replace(/\*/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }
  function speak(text) {
    try {
      if (!window.speechSynthesis || !text) return;
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.9;
      // 兜底：部分 Chromium 版本 end 事件偶发不触发会导致重复/卡住，结束后强制 cancel
      u.onend = function () { try { window.speechSynthesis.cancel(); } catch (e) {} };
      u.onerror = function () { try { window.speechSynthesis.cancel(); } catch (e) {} };
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }
  function confetti() {
    var canvas = document.getElementById('gm2-confetti');
    if (!canvas || !canvas.getContext) return;
    var ctx;
    try { ctx = canvas.getContext('2d'); } catch (e) { return; }
    if (!ctx) return;
    canvas.width = canvas.offsetWidth || 320; canvas.height = canvas.offsetHeight || 200;
    var colors = ['#ff9a3c', '#ff5e3a', '#ffd166', '#ff7eb3', '#06d6a0'];
    var parts = [];
    for (var i = 0; i < 120; i++) parts.push({ x: Math.random() * canvas.width, y: Math.random() * -canvas.height, r: Math.random() * 4 + 2, c: colors[i % colors.length], v: Math.random() * 3 + 2, a: Math.random() * Math.PI });
    var t = 0;
    (function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      parts.forEach(function (p) { p.y += p.v; p.x += Math.sin(p.a + t / 10) * 0.6; ctx.beginPath(); ctx.fillStyle = p.c; ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill(); if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; } });
      t++; if (t < 160) requestAnimationFrame(loop);
    })();
  }

  /* ---------- 步骤跳转 ---------- */
  function gotoStep(n) { state.step = n; render(); }

  /* ---------- 暴露 ---------- */
  window.getHuobaoState = getHuobaoState;
  window.GM2 = { init: init, goto: gotoStep, state: function () { return state; }, curMod: curMod, getId: getId, awardGrammarGrowth: awardGrammarGrowth, practiceTotal: practiceTotal };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
