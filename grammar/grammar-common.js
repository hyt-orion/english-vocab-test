/* ===== 语法互动模块 · 渲染引擎（复用主页火宝宝 qilin 图） ===== */
(function () {
  'use strict';

  var MODULES = window.GRAMMAR_MODULES || {};
  var KEY = 'grammarModuleProgress';

  // ===== 火宝宝等级：与主页面 app.js 完全统一 =====
  // 阈值需与 app.js 的 HUOBAO_LEVELS 保持一致（主页调整时此处同步改）
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
  // 读取与主页面一致的火宝宝状态（等级 / 成长值 / 主题火或冰）
  // 注意：主页面 app.js 把成长值存于「未命名空间」的 huobao_growth（与 huobao_growth_log /
  // huobao_theme_pref / huobao_achievements 同套 key），此处直接读同一处，保证和 App 主页完全一致。
  function getHuobaoState() {
    var growth = parseInt(localStorage.getItem('huobao_growth') || '0', 10) || 0;
    var variant = (localStorage.getItem('huobao_theme_pref') || 'fire') === 'ice' ? 'ice' : 'fire';
    var L = getHuobaoLevelByGrowth(growth);
    return { level: L.lv, growth: growth, variant: variant, name: variant === 'ice' ? L.iceName : L.name };
  }

  function $(sel, root) { return (root || document).querySelector(sel); }

  function getId() {
    var p = new URLSearchParams(location.search);
    var id = p.get('id');
    if (id && MODULES[id]) return id;
    return Object.keys(MODULES)[0] || null;
  }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; }
  }
  function setProgress(id, val) {
    var all = getProgress(); all[id] = val;
    try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {}
  }

  var ENCOURAGE = ['太棒了！🔥', '你真聪明！', '继续加油～', '火宝宝为你点赞！', '就是这样！', '离通关又近一步💪'];

  var state = { total: 0, answered: 0, correct: 0 };

  function render() {
    var id = getId();
    var m = MODULES[id];
    var root = document.getElementById('gm-root');
    if (!root) return; // 目录页等非详情页：不渲染详情，仅暴露 getHuobaoState
    if (!m) { root.innerHTML = '<p style="color:#a8978a">未找到该语法模块。</p>'; return; }

    // 火宝宝等级与主页面统一：直接读主页面同一处成长值
    var hb = getHuobaoState();
    var lvName = hb.name;
    var img = '../assets/qilin/qilin-' + hb.level + '.png';
    var imgCls = 'gm-img' + (hb.variant === 'ice' ? ' gm-img-ice' : '');
    document.title = m.title + ' · 语法互动';

    // 统计题目总数
    state.total = 0;
    m.sections.forEach(function (s) { state.total += (s.quiz ? s.quiz.length : 0); });

    var html = '';
    // 顶栏
    html += '<div class="gm-topbar">' +
      '<a class="gm-back" href="index.html">← 全部语法</a>' +
      '<h1>' + m.icon + ' ' + m.title + '</h1>' +
      '<span class="gm-badge">' + m.diff + '</span></div>';
    // 进度条
    html += '<div class="gm-progress"><div class="gm-progress-fill" id="gm-prog"></div></div>';
    // 火宝宝卡片
    html += '<div class="gm-mascot-card">' +
      '<div class="gm-flame-wrap">' +
        '<div class="gm-mascot" id="gm-mascot" title="戳一戳火宝宝"><img class="' + imgCls + '" src="' + img + '" alt="火宝宝" draggable="false"></div>' +
        '<span class="gm-level-tag">Lv.' + hb.level + ' ' + lvName + '</span>' +
      '</div>' +
      '<div class="gm-mascot-right">' +
        '<div class="gm-mascot-title"><span class="gm-emoji">🔥</span>火宝宝陪你学</div>' +
        '<div class="gm-speech" id="gm-speech">' + (m.intro || '一起来学 ' + m.title + '！') + '</div>' +
        '<div class="gm-poke-tip">👆 戳一戳火宝宝，它会给你打气</div>' +
      '</div></div>';
    // 小节
    m.sections.forEach(function (s, si) {
      html += '<div class="gm-section">' +
        '<h3 class="gm-section-title">' + s.title + '</h3>' +
        '<div class="gm-content">' + escapeHtml(s.content) + '</div>';
      if (s.examples && s.examples.length) {
        html += '<div class="gm-examples">';
        s.examples.forEach(function (ex) {
          html += '<div class="gm-ex"><span class="gm-ex-en">' + escapeHtml(ex.en) + '</span><span class="gm-ex-cn">' + escapeHtml(ex.cn) + '</span></div>';
        });
        html += '</div>';
      }
      if (s.quiz && s.quiz.length) {
        html += '<div class="gm-quiz"><div class="gm-quiz-h">✍️ 小测验 · 学一点练一点</div>';
        s.quiz.forEach(function (q, qi) {
          var qid = 'q-' + si + '-' + qi;
          html += '<div class="gm-q" data-qid="' + qid + '">' +
            '<div class="gm-q-text">' + escapeHtml(q.q) + '</div>' +
            '<div class="gm-opts">';
          q.options.forEach(function (opt, oi) {
            html += '<button class="gm-opt" data-q="' + qid + '" data-oi="' + oi + '" onclick="GM.answer(this)">' + escapeHtml(opt) + '</button>';
          });
          html += '</div><div class="gm-explain" id="ex-' + qid + '"></div></div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    // 完成面板
    html += '<div class="gm-done" id="gm-done">' +
      '<div class="gm-done-emoji">🎉</div>' +
      '<div class="gm-done-title" id="gm-done-title"></div>' +
      '<div class="gm-done-sub" id="gm-done-sub"></div>' +
      '<button class="gm-done-btn" onclick="location.reload()">🔁 再学一遍</button></div>';

    html += '<canvas id="gm-confetti"></canvas>';
    root.innerHTML = html;

    // 交互绑定
    var mascot = document.getElementById('gm-mascot');
    mascot.addEventListener('click', function () {
      mascot.classList.remove('wave'); void mascot.offsetWidth; mascot.classList.add('wave');
      var sp = document.getElementById('gm-speech');
      sp.textContent = ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)];
    });

    updateProgress();
  }

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // 选项点击判分（暴露到全局供 onclick）
  window.GM = {
    answer: function (btn) {
      var qid = btn.getAttribute('data-q');
      var oi = parseInt(btn.getAttribute('data-oi'), 10);
      var wrap = btn.closest('.gm-q');
      if (!wrap || wrap.getAttribute('data-done') === '1') return;
      // 找到对应题目数据
      var parts = qid.split('-'); var si = +parts[1], qi = +parts[2];
      var m = MODULES[getId()];
      var q = m.sections[si].quiz[qi];
      var opts = wrap.querySelectorAll('.gm-opt');
      opts.forEach(function (o) { o.disabled = true; });
      if (oi === q.answer) {
        btn.classList.add('correct'); state.correct++;
        pokeMascot();
      } else {
        btn.classList.add('wrong');
        opts[q.answer].classList.add('correct');
      }
      var ex = document.getElementById('ex-' + qid);
      ex.innerHTML = (oi === q.answer ? '✅ 答对了！ ' : '❌ 正确答案：<b>' + escapeHtml(q.options[q.answer]) + '</b>。 ') + q.explain;
      ex.classList.add('show');
      wrap.setAttribute('data-done', '1');
      state.answered++;
      updateProgress();
      if (state.answered >= state.total) finish();
    }
  };

  function pokeMascot() {
    var mascot = document.getElementById('gm-mascot');
    if (!mascot) return;
    mascot.classList.remove('wave'); void mascot.offsetWidth; mascot.classList.add('wave');
    var sp = document.getElementById('gm-speech');
    if (sp) sp.textContent = ENCOURAGE[Math.floor(Math.random() * ENCOURAGE.length)];
  }

  function updateProgress() {
    var pct = state.total ? Math.round(state.answered / state.total * 100) : 0;
    var bar = document.getElementById('gm-prog');
    if (bar) bar.style.width = pct + '%';
  }

  // 学完本章给火宝宝加成长值（每章仅首次发放，防止「再学一遍」刷分）
  // 写入的 key 与 app.js 完全一致（huobao_growth / huobao_growth_log），写回 localStorage 时
  // 主程序标签页会通过 storage 事件实时刷新火宝宝等级与成就。
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
      return true;
    } catch (e) { return false; }
  }

  function finish() {
    var id = getId();
    var done = document.getElementById('gm-done');
    var title = document.getElementById('gm-done-title');
    var sub = document.getElementById('gm-done-sub');
    if (!done) return;
    var allRight = state.correct === state.total;
    title.textContent = allRight ? '全对！本章通关🔥' : ('本章完成！正确 ' + state.correct + ' / ' + state.total);
    sub.textContent = allRight ? '火宝宝给你点了一万个赞，去挑战下一章吧！' : '错题回顾一下，火宝宝相信你可以全对！';
    done.classList.add('show');
    setProgress(id, { done: true, correct: state.correct, total: state.total, date: new Date().toISOString().slice(0, 10) });
    // 通关发成长值（首次完成才发）+ 即时反馈
    var m = MODULES[id];
    var awarded = awardGrammarGrowth(id, m ? m.title : id);
    if (awarded) {
      var hb = getHuobaoState();
      var lvlTag = document.querySelector('.gm-level-tag');
      if (lvlTag) lvlTag.textContent = 'Lv.' + hb.level + ' ' + hb.name;
      var mascotImg = document.querySelector('.gm-mascot img');
      if (mascotImg) mascotImg.src = '../assets/qilin/qilin-' + hb.level + '.png';
      sub.textContent += ' 🔥 火宝宝成长 +' + GRAMMAR_REWARD + '！';
    }
    if (allRight) confetti();
  }

  /* 轻量撒花（无外部库） */
  function confetti() {
    var canvas = document.getElementById('gm-confetti');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    if (!ctx) return; // 环境不支持 canvas 时静默跳过（如部分无 canvas 的测试/老浏览器）
    var W = canvas.width = window.innerWidth, H = canvas.height = window.innerHeight;
    var colors = ['#ff8a00', '#ff5e3a', '#f59e0b', '#34d399', '#fb923c', '#fff'];
    var parts = [];
    for (var i = 0; i < 160; i++) {
      parts.push({
        x: Math.random() * W, y: -20 - Math.random() * H * 0.4,
        vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 4,
        s: 5 + Math.random() * 7, c: colors[i % colors.length],
        r: Math.random() * Math.PI
      });
    }
    var t = 0;
    function tick() {
      ctx.clearRect(0, 0, W, H);
      parts.forEach(function (p) {
        p.x += p.vx; p.y += p.vy; p.r += 0.1;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r);
        ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); ctx.restore();
      });
      t++;
      if (t < 160) requestAnimationFrame(tick); else ctx.clearRect(0, 0, W, H);
    }
    tick();
  }

  // 供目录页读取与主页面统一的火宝宝状态
  window.getHuobaoState = getHuobaoState;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
