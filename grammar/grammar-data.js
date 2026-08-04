/* ===== 语法互动 2.0 · 内容脚本（13 章，5 步学习环，原创） =====
   每章 = 一个模块，id 与 App 语法页 GRAMMAR_TOPICS 对应；
   每节含 intro(口诀/类比) / worked(带析例句) / guided(引导填空) / practice(多题型) / recap(巩固) */
window.GRAMMAR_MODULES = {

  /* 1. 冠词 */
  articles: {
    id: 'articles', icon: '🔤', title: '冠词 a / an / the / 零冠词', diff: '基础',
    intro: '火宝宝来啦！冠词就看「发音」不看「拼写」，跟我一节一节啃下来～',
    sections: [
      {
        id: 'a-an',
        title: '不定冠词 a / an',
        intro: {
          concept: 'a / an 用在<b>单数可数名词</b>前，表示"一个 / 某个"，用于<b>首次提到、不特指</b>的人或物。',
          mnemonic: '元音发音用 an，辅音发音用 a；<b>看发音，不看字母！</b>',
          analogy: 'a/an 像随手拿一个（"随便哪个都行"）；the 像指着说"就是那个你要的"。'
        },
        worked: [
          { sentence: 'I ate ___ apple.', steps: ['apple 是单数可数名词 ✓', '首次提到、不特指 → 用 a/an', 'apple 首音是 /æ/，是元音 → 用 an', '✅ I ate an apple.'], diagram: '口型图：/æ/ 张大嘴 → 用 an' },
          { sentence: 'She is ___ honest girl.', steps: ['honest 首字母是 h，但 h 不发音', '真正首音是 /ɒ/（元音）→ 用 an', '✅ She is an honest girl.（别被字母骗了！）'], diagram: '⚠️ 看发音不看字母：h 哑音' }
        ],
        guided: {
          text: 'He bought ___ orange and ___ book.',
          blanks: 2,
          bank: ['a', 'an'],
          answers: ['an', 'a'],
          hints: ['orange 首音 /ɒ/ 是元音 → an', 'book 首音 /b/ 是辅音 → a']
        },
        practice: [
          { type: 'mcq', q: '___ university student', options: ['a', 'an'], answer: 'a', explain: 'university 首音是 /j/（辅音），用 a，不是 an！' },
          { type: 'fill', q: 'I need ___ umbrella.', bank: ['a', 'an'], answer: 'an', explain: 'umbrella 首音 /ʌ/ 是元音 → an。' },
          { type: 'correct', q: 'She has a apple.', answer: 'She has an apple.', note: '找出错误并改正 a → ?', explain: 'apple 元音开头，a 要改成 an。' },
          { type: 'transform', q: 'Give me a pen.（改成复数，去掉冠词）', answer: 'Give me pens.', explain: '复数泛指用零冠词，pen → pens。' }
        ],
        recap: 'a/an 用于单数可数名词泛指；an 用于<b>元音发音</b>开头（看发音不看字母）。'
      },
      {
        id: 'the',
        title: '定冠词 the',
        intro: {
          concept: 'the 表示<b>特指</b>：双方都知道的、上文提过的、世上独一的。',
          mnemonic: '特指才用 the：唯一 / 上文 / 双方知。',
          analogy: 'the 像伸出手指："就是那个！"'
        },
        worked: [
          { sentence: 'I bought a book. ___ book is interesting.', steps: ['前句已经提到过 book', '再次提到 = 特指 → 用 the', '✅ The book is interesting.'], diagram: '↺ 上文提及 → the' },
          { sentence: '___ sun rises in the east.', steps: ['sun 世上只有一个，独一', '独一事物前用 the', '✅ The sun rises in the east.'], diagram: '☀ 独一事物 → the' }
        ],
        guided: {
          text: 'Close ___ door, please.',
          blanks: 1,
          bank: ['the', 'a', 'an'],
          answers: ['the'],
          hints: ['说话双方都知道是哪一扇门 → 特指', '特指用 the']
        },
        practice: [
          { type: 'mcq', q: '___ Earth moves around ___ Sun.', options: ['The / the', 'A / a', '/ / the'], answer: 'The / the', explain: 'Earth 和 Sun 都是独一事物，都用 the。' },
          { type: 'fill', q: 'I love ___ music.', bank: ['∅', 'the', 'a'], answer: '∅', explain: '指"音乐"这一类（泛指），不加冠词 = 零冠词。' },
          { type: 'correct', q: 'The cats are cute.（这里指猫这一类，不该特指）', answer: 'Cats are cute.', note: '如果是泛指一类，要不要 the？', explain: '泛指一类复数不加 the：Cats are cute.' },
          { type: 'transform', q: 'A boy is crying.（改成特指，用 the）', answer: 'The boy is crying.', explain: '特指某个男孩 → The boy。' }
        ],
        recap: 'the 用于<b>特指</b>：上文提过、双方都知道、或世上独一的事物。'
      },
      {
        id: 'zero',
        title: '零冠词（不用 a/an/the）',
        intro: {
          concept: '复数名词 / 不可数名词<b>泛指</b>时不加 a/an/the；三餐、运动、学科、语言前常零冠词。',
          mnemonic: '复数不可数泛指零，三餐运动学科语。',
          analogy: '零冠词像"不点名"——泛指全体，不挑某一个。'
        },
        worked: [
          { sentence: '___ Water is important.', steps: ['water 是不可数名词', '泛指"水"这一类 → 零冠词', '✅ Water is important.（没有 a/the）'], diagram: '💧 不可数泛指 → 零' },
          { sentence: 'I play ___ basketball.', steps: ['basketball 是运动项目', '运动前零冠词', '✅ I play basketball.'], diagram: '🏀 运动 → 零' }
        ],
        guided: {
          text: '___ Children like ___ ice cream.',
          blanks: 2,
          bank: ['∅', 'the', 'a'],
          answers: ['∅', '∅'],
          hints: ['Children 是复数泛指 → 零冠词', 'ice cream 泛指"冰淇淋"这一类 → 零冠词']
        },
        practice: [
          { type: 'mcq', q: 'I go to school by ___ bus.', options: ['∅', 'a', 'the'], answer: '∅', explain: 'by + 交通工具，零冠词。' },
          { type: 'fill', q: 'She drinks ___ milk every day.', bank: ['∅', 'a', 'the'], answer: '∅', explain: 'milk 不可数泛指 → 零冠词。' },
          { type: 'correct', q: 'I eat the breakfast at 7.', answer: 'I eat breakfast at 7.', note: '三餐前通常要不要 the？', explain: '三餐前零冠词：I eat breakfast at 7.' },
          { type: 'match', prompt: '把规则和例子连起来', pairs: [
            { rule: 'a/an + 单数可数泛指', ex: 'an egg' },
            { rule: 'the + 特指 / 独一', ex: 'the moon' },
            { rule: '零冠词 + 复数 / 不可数泛指', ex: 'Water is wet.' }
          ] }
        ],
        recap: '复数 / 不可数名词<b>泛指</b>、以及三餐、运动、学科、语言前，用<b>零冠词</b>。'
      }
    ]
  },

  /* 2. 时态 */
  tenses: {
    id: 'tenses', icon: '⏰', title: '时态', diff: '核心',
    intro: '时间旅行开始！一般现在、过去、将来、进行、完成，五种时态火宝宝带你通关～',
    sections: [
      {
        id: 'present',
        title: '一般现在时',
        intro: {
          concept: '表<b>习惯、事实、客观规律</b>。第三人称单数动词加 s/es。',
          mnemonic: '三单别忘 s：he/she/it 要加尾巴。',
          analogy: '一般现在像"常态拍照"——重复的、一直如此的事。'
        },
        worked: [
          { sentence: 'She ___ to school every day.', steps: ['every day 是习惯标志词', '主语 she 是三单', '动词 go → 加 es：goes', '✅ She goes to school every day.'], diagram: '📅 习惯/事实 → 一般现在' },
          { sentence: 'The sun ___ in the east.', steps: ['客观事实，永远如此', '主语 sun 三单', 'rise → rises', '✅ The sun rises in the east.'], diagram: '🌞 客观真理 → 三单' }
        ],
        guided: {
          text: 'He ___ (like) apples.',
          blanks: 1,
          bank: ['like', 'likes', 'liking'],
          answers: ['likes'],
          hints: ['主语 he 是第三人称单数', '一般现在三单动词加 s → likes']
        },
        practice: [
          { type: 'mcq', q: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'goes', explain: '第三人称单数用 <b>goes</b>。' },
          { type: 'fill', q: 'The sun ___ in the east.', bank: ['rise', 'rises', 'rose'], answer: 'rises', explain: '客观事实用一般现在时，三单 <b>rises</b>。' },
          { type: 'correct', q: 'He go to school by bus.', answer: 'He goes to school by bus.', note: '找出错误', explain: '主语 he 三单，go 要加 es。' },
          { type: 'transform', q: 'I eat breakfast at 7.（改成 he 作主语）', answer: 'He eats breakfast at 7.', explain: '换三单主语，eat → eats。' }
        ],
        recap: '一般现在时表习惯/事实；<b>三单</b>动词加 s/es。'
      },
      {
        id: 'past',
        title: '一般过去时',
        intro: {
          concept: '表<b>过去发生</b>的动作或状态。动词用过去式（规则加 ed，不规则记搭配）。',
          mnemonic: '过去标志词：yesterday / last / ago / in + 过去年份。',
          analogy: '一般过去像"翻旧账"——已经结束的事。'
        },
        worked: [
          { sentence: 'I ___ Beijing last summer.', steps: ['last summer 表过去时间', '动作发生在过去 → 用过去式', 'visit → visited（规则加 ed）', '✅ I visited Beijing last summer.'], diagram: '📜 过去时间 → 过去式' },
          { sentence: 'He didn\'t ___ to school yesterday.', steps: ['didn\'t 已经体现过去', '助动词后接动词<b>原形</b>', 'go 不变化', '✅ He didn\'t go to school yesterday.'], diagram: '⚠️ didn\'t 后接原形' }
        ],
        guided: {
          text: 'We ___ (watch) a movie yesterday.',
          blanks: 1,
          bank: ['watch', 'watched', 'watching'],
          answers: ['watched'],
          hints: ['yesterday 是过去标志词', 'watch 规则动词 → 加 ed：watched']
        },
        practice: [
          { type: 'mcq', q: 'I ___ Beijing last summer.', options: ['visit', 'visits', 'visited', 'visiting'], answer: 'visited', explain: 'last summer 表过去，用过去式 <b>visited</b>。' },
          { type: 'fill', q: 'He didn\'t ___ to school yesterday.', bank: ['go', 'went', 'goes'], answer: 'go', explain: 'didn\'t 后接动词<b>原形</b> go。' },
          { type: 'correct', q: 'She goed to the park.', answer: 'She went to the park.', note: 'go 的过去式是规则吗？', explain: 'go 是不规则动词，过去式是 <b>went</b>。' },
          { type: 'match', prompt: '连一连动词的原形与过去式', pairs: [
            { rule: 'go', ex: 'went' },
            { rule: 'eat', ex: 'ate' },
            { rule: 'watch', ex: 'watched' }
          ] }
        ],
        recap: '一般过去时表过去动作；动词用<b>过去式</b>，didn\'t 后接<b>原形</b>。'
      },
      {
        id: 'progressive',
        title: '现在进行时',
        intro: {
          concept: '结构：<b>am/is/are + 动词-ing</b>。表<b>此时此刻正在发生</b>。',
          mnemonic: '进行 = be + doing；标志词 look / listen / now。',
          analogy: '现在进行时像"直播画面"——正在进行的动作。'
        },
        worked: [
          { sentence: 'Look! The cat ___ the tree.', steps: ['Look! 提示此刻正在发生', '主语 cat 三单 → 用 is', 'climb → climbing', '✅ The cat is climbing the tree.'], diagram: '👀 Look! → 正在发生' },
          { sentence: 'I ___ a book now.', steps: ['now 提示现在进行', '主语 I → 用 am', 'read → reading', '✅ I am reading a book now.'], diagram: '⏳ now → 进行' }
        ],
        guided: {
          text: 'They ___ (play) football now.',
          blanks: 1,
          bank: ['play', 'are playing', 'played'],
          answers: ['are playing'],
          hints: ['now 提示现在进行时', '主语 they → are + playing']
        },
        practice: [
          { type: 'mcq', q: 'Look! The cat ___ the tree.', options: ['climb', 'climbs', 'is climbing', 'climbed'], answer: 'is climbing', explain: 'Look! 提示此刻正在发生，用 <b>is climbing</b>。' },
          { type: 'fill', q: 'I ___ a book now.', bank: ['am reading', 'read', 'reads'], answer: 'am reading', explain: 'now 提示现在进行时 <b>am reading</b>。' },
          { type: 'correct', q: 'He is read a book.', answer: 'He is reading a book.', note: 'be 动词后动词怎么变？', explain: '进行时 be + <b>doing</b>，read → reading。' },
          { type: 'transform', q: 'She eats. （改成现在进行时）', answer: 'She is eating.', explain: 'eat → eating，配 is。' }
        ],
        recap: '现在进行时 = <b>am/is/are + doing</b>，表此时此刻正在发生。'
      },
      {
        id: 'perfect',
        title: '现在完成时',
        intro: {
          concept: '结构：<b>have/has + 过去分词</b>。表<b>过去动作对现在的影响</b>或持续。',
          mnemonic: '完成标志词：already / yet / just / ever / never / for / since。',
          analogy: '现在完成时像"连通器"——过去的事和现在有牵连。'
        },
        worked: [
          { sentence: 'I ___ my homework already.', steps: ['already 是完成标志词', '主语 I → 用 have', 'finish → finished（过去分词）', '✅ I have finished my homework.'], diagram: '✅ already → 完成' },
          { sentence: 'She ___ here for 5 years.', steps: ['for + 时间段，动作持续到现在', '主语 she 三单 → has', 'live → lived', '✅ She has lived here for 5 years.'], diagram: '⏱ for 5 years → 持续' }
        ],
        guided: {
          text: 'He ___ (finish) the work.',
          blanks: 1,
          bank: ['finished', 'has finished', 'finishes'],
          answers: ['has finished'],
          hints: ['完成时需 have/has + 过去分词', '主语 he → has finished']
        },
        practice: [
          { type: 'mcq', q: 'I ___ my homework already.', options: ['finish', 'finished', 'have finished', 'has finished'], answer: 'have finished', explain: 'already 提示现在完成时 <b>have finished</b>。' },
          { type: 'fill', q: 'She ___ here for 5 years.', bank: ['has lived', 'lived', 'lives'], answer: 'has lived', explain: 'for + 时间段用现在完成时 <b>has lived</b>。' },
          { type: 'correct', q: 'I have finish my homework.', answer: 'I have finished my homework.', note: 'have 后接什么形式？', explain: '完成时 have/has + <b>过去分词</b> finished。' },
          { type: 'match', prompt: '连一连完成时的助动词与主语', pairs: [
            { rule: 'I / you / we / they', ex: 'have' },
            { rule: 'he / she / it', ex: 'has' },
            { rule: '过去分词', ex: 'done' }
          ] }
        ],
        recap: '现在完成时 = <b>have/has + 过去分词</b>，表过去动作影响现在或持续。'
      },
      {
        id: 'future',
        title: '一般将来时',
        intro: {
          concept: '结构：<b>will + 原形</b> 或 <b>be going to + 原形</b>。表将来。',
          mnemonic: '将来标志词：tomorrow / next / soon；will 表意愿，going to 表计划/迹象。',
          analogy: '一般将来像"预告片"——还没发生但要发生。'
        },
        worked: [
          { sentence: 'I ___ you tomorrow.', steps: ['tomorrow 表将来', '用 will + 原形', 'call 不变', '✅ I will call you tomorrow.'], diagram: '📞 tomorrow → will' },
          { sentence: 'It ___ rain soon.', steps: ['soon 表即将发生', '有迹象"要下雨" → be going to', 'it is → is going to', '✅ It is going to rain.'], diagram: '🌧 迹象 → going to' }
        ],
        guided: {
          text: 'We ___ (visit) grandma next week.',
          blanks: 1,
          bank: ['visit', 'will visit', 'visited'],
          answers: ['will visit'],
          hints: ['next week 表将来', '用 will + 原形：will visit']
        },
        practice: [
          { type: 'mcq', q: 'I ___ you tomorrow.', options: ['call', 'called', 'will call', 'calling'], answer: 'will call', explain: 'tomorrow 表将来，用 <b>will call</b>。' },
          { type: 'fill', q: 'It ___ rain soon.', bank: ['is going to', 'goes to', 'went to'], answer: 'is going to', explain: '表将要发生用 <b>is going to rain</b>。' },
          { type: 'correct', q: 'He will goes to school.', answer: 'He will go to school.', note: 'will 后动词怎么变？', explain: 'will 后接<b>原形</b> go，不加 s。' },
          { type: 'transform', q: 'I eat. （改成一般将来时）', answer: 'I will eat.', explain: 'will + 原形 eat。' }
        ],
        recap: '一般将来时 = <b>will + 原形</b> 或 <b>be going to + 原形</b>。'
      }
    ]
  },

  /* 3. 被动语态 */
  passive: {
    id: 'passive', icon: '🔄', title: '被动语态', diff: '进阶',
    intro: '谁是动作承受者？被动语态让宾语站 C 位！be + 过去分词，火宝宝拆解给你看～',
    sections: [
      {
        id: 'structure',
        title: '被动语态结构',
        intro: {
          concept: '被动 = <b>be + 过去分词 (p.p.)</b>。时态由 be 动词体现，动作执行者用 by 引出。',
          mnemonic: '被动公式记心间：be + 分词，时态看 be。',
          analogy: '主动是"我打你"，被动是"你被我打"——焦点换人了。'
        },
        worked: [
          { sentence: 'English ___ all over the world.', steps: ['English 是"被说"的对象', '客观事实 → 一般现在被动', 'be 用 is，speak → spoken', '✅ English is spoken all over the world.'], diagram: '🌍 一般现在被动 → is spoken' },
          { sentence: 'The bridge ___ in 1990.', steps: ['1990 是过去时间', '过去被动 → be 用 was', 'build → built', '✅ The bridge was built in 1990.'], diagram: '🌉 过去被动 → was built' }
        ],
        guided: {
          text: 'The letter ___ (write) by Tom.',
          blanks: 1,
          bank: ['wrote', 'was written', 'writes'],
          answers: ['was written'],
          hints: ['被动 = be + 过去分词', '过去时 → was，write → written']
        },
        practice: [
          { type: 'mcq', q: 'English ___ all over the world.', options: ['speaks', 'is spoken', 'spoke', 'was spoke'], answer: 'is spoken', explain: '客观事实 + 被动，一般现在时 <b>is spoken</b>。' },
          { type: 'fill', q: 'The bridge ___ in 1990.', bank: ['builds', 'built', 'was built'], answer: 'was built', explain: '1990 表过去，被动用 <b>was built</b>。' },
          { type: 'correct', q: 'The window broken by the wind.', answer: 'The window was broken by the wind.', note: '缺了什么？', explain: '被动需要 be 动词，break → was broken。' },
          { type: 'match', prompt: '连一连时态与被动 be 动词', pairs: [
            { rule: '一般现在被动', ex: 'is / am / are done' },
            { rule: '一般过去被动', ex: 'was / were done' },
            { rule: '现在完成被动', ex: 'have / has been done' }
          ] }
        ],
        recap: '被动语态 = <b>be + 过去分词</b>；时态看 be，执行者用 by。'
      },
      {
        id: 'active2passive',
        title: '主动变被动',
        intro: {
          concept: '三步：①宾语变主语 ②动词变 be+pp ③原主语变 by 短语（可省）。',
          mnemonic: '主动转被动：宾升主、be+pp、原主 by。',
          analogy: '像把句子"倒过来拍"——主角换成承受者。'
        },
        worked: [
          { sentence: 'We build houses. → Houses ___ by us.', steps: ['宾语 houses 变主语', 'build → are built（一般现在）', 'we 变 by us', '✅ Houses are built by us.'], diagram: '🔁 宾升主 → are built' },
          { sentence: 'Tom wrote the letter. → The letter ___ by Tom.', steps: ['the letter 变主语', 'wrote → was written（过去）', 'Tom 变 by Tom', '✅ The letter was written by Tom.'], diagram: '✉️ 过去被动 → was written' }
        ],
        guided: {
          text: 'She ___ (make) the cake.',
          blanks: 1,
          bank: ['made', 'was made', 'makes'],
          answers: ['was made'],
          hints: ['宾语 the cake 变主语，被动', '过去时 → was made']
        },
        practice: [
          { type: 'mcq', q: 'We build houses. → Houses ___ by us.', options: ['build', 'are built', 'built', 'were build'], answer: 'are built', explain: '宾语 houses 变主语，被动 <b>are built</b>。' },
          { type: 'fill', q: 'Tom wrote the letter. → The letter ___ by Tom.', bank: ['wrote', 'was written', 'is written'], answer: 'was written', explain: '过去时被动 <b>was written</b>。' },
          { type: 'correct', q: 'The book was write by him.', answer: 'The book was written by him.', note: 'write 的过去分词？', explain: 'write 的过去分词是 <b>written</b>。' },
          { type: 'transform', q: 'They clean the room. （变被动）', answer: 'The room is cleaned by them.', explain: 'room 升主语，clean → is cleaned。' }
        ],
        recap: '主动变被动：①宾语变主语 ②be+pp ③原主语变 by 短语。'
      }
    ]
  },

  /* 4. 从句 */
  clauses: {
    id: 'clauses', icon: '🔗', title: '从句', diff: '高级',
    intro: '句子套句子？宾语从句、定语从句、状语从句，火宝宝教你看清「谁修饰谁」！',
    sections: [
      {
        id: 'object',
        title: '宾语从句',
        intro: {
          concept: '作<b>宾语</b>的从句。三要素：引导词、<b>陈述语序</b>、时态呼应。',
          mnemonic: '宾语从句三件宝：引导词、陈述序、时态要呼应。',
          analogy: '宾语从句像"句子里的句子"——整句当一个名词用。'
        },
        worked: [
          { sentence: 'Could you tell me ___ the post office is?', steps: ['tell me 后接宾语从句', '问地点 → 引导词 where', '<b>陈述语序</b>：where the post office is', '✅ Could you tell me where the post office is?'], diagram: '📍 陈述语序（别用 is the post office）' },
          { sentence: 'I wonder ___ he will come.', steps: ['"是否"→ 引导词 if / whether', '从句主语 he 在前', '✅ I wonder if he will come.'], diagram: '❓ 是否 → if / whether' }
        ],
        guided: {
          text: 'I don\'t know ___ he is.',
          blanks: 1,
          bank: ['where', 'what', 'which'],
          answers: ['where'],
          hints: ['问地点用 where', '且保持陈述语序']
        },
        practice: [
          { type: 'mcq', q: 'Could you tell me ___ the post office is?', options: ['where', 'what', 'which', 'who'], answer: 'where', explain: '宾语从句用<b>陈述语序</b>，问地点用 <b>where</b>。' },
          { type: 'fill', q: 'I wonder ___ he will come.', bank: ['that', 'if', 'what'], answer: 'if', explain: '一般疑问句变宾语从句意为「是否」，用 <b>if/whether</b>。' },
          { type: 'correct', q: 'Do you know where is the library?', answer: 'Do you know where the library is?', note: '语序对吗？', explain: '从句要用<b>陈述语序</b>：where the library is。' },
          { type: 'match', prompt: '连一连引导词与用法', pairs: [
            { rule: 'that（陈述句）', ex: 'I think that...' },
            { rule: 'if / whether（是否）', ex: 'I wonder if...' },
            { rule: 'what / who（特殊疑问）', ex: 'I know what...' }
          ] }
        ],
        recap: '宾语从句注意：引导词 + <b>陈述语序</b> + 时态呼应。'
      },
      {
        id: 'attributive',
        title: '定语从句',
        intro: {
          concept: '修饰<b>名词/代词</b>的从句。被修饰的词叫<b>先行词</b>；关系词 who/whom/which/that/whose。',
          mnemonic: '定从关系词：who人主、whom人宾、which物、that人/物、whose表所属。',
          analogy: '定语从句像"贴标签"——给名词加详细说明。'
        },
        worked: [
          { sentence: 'The man ___ is talking is my father.', steps: ['先行词 the man 指人', '在从句中作主语 → who', '✅ The man who is talking is my father.'], diagram: '👤 指人作主语 → who' },
          { sentence: 'This is the book ___ I bought.', steps: ['先行词 the book 指物', '在从句中作宾语 → which / that', '✅ This is the book which I bought.'], diagram: '📖 指物 → which / that' }
        ],
        guided: {
          text: 'The girl ___ is singing is my sister.',
          blanks: 1,
          bank: ['which', 'who', 'whose'],
          answers: ['who'],
          hints: ['先行词 the girl 指人', '在从句作主语 → who']
        },
        practice: [
          { type: 'mcq', q: 'The man ___ is talking is my father.', options: ['which', 'who', 'whose', 'whom'], answer: 'who', explain: '先行词指人且作主语，用 <b>who</b>。' },
          { type: 'fill', q: 'This is the book ___ I bought.', bank: ['who', 'whom', 'which'], answer: 'which', explain: '先行词指物，用 <b>which</b>。' },
          { type: 'correct', q: 'The boy which won is my friend.', answer: 'The boy who won is my friend.', note: '指人用哪个？', explain: '先行词指人作主语用 <b>who</b>，不用 which。' },
          { type: 'match', prompt: '连一连关系词与用法', pairs: [
            { rule: 'who（人，作主语）', ex: 'the man who...' },
            { rule: 'which（物）', ex: 'the book which...' },
            { rule: 'whose（所属）', ex: 'the girl whose...' }
          ] }
        ],
        recap: '定语从句：找<b>先行词</b>，看它在从句作什么成分选关系词。'
      },
      {
        id: 'adverbial',
        title: '状语从句',
        intro: {
          concept: '修饰<b>动词/句子</b>，表时间、条件、原因、让步、目的等。',
          mnemonic: '状从引导词：when/while 时间、if/unless 条件、because 原因、although 让步。',
          analogy: '状语从句像"加背景"——给动作补足时间/条件/原因。'
        },
        worked: [
          { sentence: '___ it rains, we will stay home.', steps: ['"如果"→ 条件状语', '引导词 if', '✅ If it rains, we will stay home.'], diagram: '🌧 条件 → if' },
          { sentence: 'When I got home, Mom ___ cooking.', steps: ['过去某时刻正在发生', '用过去进行时', 'cook → was cooking', '✅ When I got home, Mom was cooking.'], diagram: '🏠 过去某刻进行 → was cooking' }
        ],
        guided: {
          text: '___ you study hard, you will pass.',
          blanks: 1,
          bank: ['If', 'Although', 'Because'],
          answers: ['If'],
          hints: ['"如果"→ 条件状语从句', '引导词 If']
        },
        practice: [
          { type: 'mcq', q: '___ it rains, we will stay home.', options: ['If', 'Although', 'Because', 'Unless'], answer: 'If', explain: '条件状语从句「如果」用 <b>If</b>。' },
          { type: 'fill', q: 'When I got home, Mom ___ cooking.', bank: ['cook', 'cooks', 'was cooking'], answer: 'was cooking', explain: '过去某时刻正在发生，用过去进行时 <b>was cooking</b>。' },
          { type: 'correct', q: 'Although it rained, but we went out.', answer: 'Although it rained, we went out.', note: '重复了吗？', explain: 'although 和 but <b>不连用</b>，去掉 but。' },
          { type: 'transform', q: 'I will call you when I arrive. （保持原意，强调时间）', answer: 'When I arrive, I will call you.', explain: '时间状语从句可前置。' }
        ],
        recap: '状语从句给动作加<b>时间/条件/原因/让步</b>等背景，注意引导词与连词不重复。'
      }
    ]
  },

  /* 5. 情态动词 */
  modal: {
    id: 'modal', icon: '🎭', title: '情态动词', diff: '核心',
    intro: 'can / must / should / may…… 情态动词有态度！火宝宝教你「能力、必须、推测」三板斧～',
    sections: [
      {
        id: 'basic',
        title: '基本用法',
        intro: {
          concept: '情态动词后接<b>动词原形</b>：can/could 能力请求、must 必须、should 应该、may/might 可能、need 需要。',
          mnemonic: '情态后接原形；mustn\'t 禁止、needn\'t 不必。',
          analogy: '情态动词像"语气滤镜"——给动作加能力/态度色彩。'
        },
        worked: [
          { sentence: 'You ___ finish it today.', steps: ['表"必须"', '用 must + 原形', '✅ You must finish it today.'], diagram: '⚠️ 必须 → must' },
          { sentence: '—Must I go now? —No, you ___ .', steps: ['must 提问否定回答', '用 needn\'t（不必）', '✅ No, you needn\'t.'], diagram: '🚫 mustn\'t=禁止，needn\'t=不必' }
        ],
        guided: {
          text: 'You ___ (can) swim very well.',
          blanks: 1,
          bank: ['can', 'cans', 'could'],
          answers: ['can'],
          hints: ['情态动词后接原形', '表能力用 can']
        },
        practice: [
          { type: 'mcq', q: '—Must I go now? —No, you ___.', options: ['mustn\'t', 'needn\'t', 'can\'t', 'shouldn\'t'], answer: 'needn\'t', explain: 'Must 提问否定回答用 <b>needn\'t</b>（不必）。' },
          { type: 'fill', q: 'You ___ finish it today.', bank: ['must', 'might', 'may'], answer: 'must', explain: '表「必须」用 <b>must</b>。' },
          { type: 'correct', q: 'He can to sing.', answer: 'He can sing.', note: 'can 后接什么？', explain: '情态动词后接<b>原形</b>，去掉 to。' },
          { type: 'match', prompt: '连一连情态动词与含义', pairs: [
            { rule: 'can', ex: '能力 / 请求' },
            { rule: 'must', ex: '必须' },
            { rule: 'should', ex: '应该' }
          ] }
        ],
        recap: '情态动词后接<b>动词原形</b>；mustn\'t 禁止，needn\'t 不必。'
      },
      {
        id: 'infer',
        title: '表推测',
        intro: {
          concept: '推测语气：must（一定）、can\'t（不可能）、may/might（可能）、should（按理应）。',
          mnemonic: '推测梯度：must 一定 → should 应该 → may/might 可能 → can\'t 不可能。',
          analogy: '推测像"侦探推理"——证据越强，语气越肯定。'
        },
        worked: [
          { sentence: 'He worked all day. He ___ be tired.', steps: ['有充分证据支撑', '肯定推测 → must', '✅ He must be tired.'], diagram: '💪 有证据 → must（一定）' },
          { sentence: 'That ___ be true.', steps: ['否定推测"不可能"', '用 can\'t', '✅ That can\'t be true.'], diagram: '🚫 不可能 → can\'t' }
        ],
        guided: {
          text: 'The light is on. He ___ be at home.',
          blanks: 1,
          bank: ['must', 'might', 'can\'t'],
          answers: ['must'],
          hints: ['灯亮了，有证据', '肯定推测 → must']
        },
        practice: [
          { type: 'mcq', q: 'He worked all day. He ___ be tired.', options: ['must', 'can\'t', 'needn\'t', 'shouldn\'t'], answer: 'must', explain: '有依据的肯定推测用 <b>must</b>（一定）。' },
          { type: 'fill', q: 'That ___ be true.', bank: ['must', 'can\'t', 'need'], answer: 'can\'t', explain: '否定推测「不可能」用 <b>can\'t</b>。' },
          { type: 'correct', q: 'It must raining now.', answer: 'It must be raining now.', note: 'must 后怎么接？', explain: 'must 后接<b>原形 be</b> + 现在分词。' },
          { type: 'match', prompt: '连一连推测语气', pairs: [
            { rule: 'must', ex: '一定（肯定推测）' },
            { rule: 'can\'t', ex: '不可能（否定推测）' },
            { rule: 'may / might', ex: '可能' }
          ] }
        ],
        recap: '推测：<b>must</b> 一定、<b>can\'t</b> 不可能、<b>may/might</b> 可能。'
      }
    ]
  },

  /* 6. 代词 */
  pronouns: {
    id: 'pronouns', icon: '👥', title: '代词', diff: '基础',
    intro: '谁代替名词？人称、物主、反身、不定代词，火宝宝一张表讲清「格」与「所属」！',
    sections: [
      {
        id: 'personal',
        title: '人称代词',
        intro: {
          concept: '主格作<b>主语</b>（I/you/he/she/we/they），宾格作<b>宾语</b>（me/you/him/her/us/them）。',
          mnemonic: '主格站主语位，宾格站动词/介词后。',
          analogy: '人称代词像"替身"——主格是主角，宾格是被作用者。'
        },
        worked: [
          { sentence: '___ is my brother.', steps: ['作主语 → 主格', '"他"主格 he', '✅ He is my brother.'], diagram: '🧍 主语 → 主格 he' },
          { sentence: 'She gave ___ a book.', steps: ['gave 后作宾语 → 宾格', '"我"宾格 me', '✅ She gave me a book.'], diagram: '📕 宾语 → 宾格 me' }
        ],
        guided: {
          text: '___ (He) loves ___ (I).',
          blanks: 2,
          bank: ['He', 'Him', 'I', 'me'],
          answers: ['He', 'me'],
          hints: ['第一空作主语 → 主格 He', '第二空作宾语 → 宾格 me']
        },
        practice: [
          { type: 'mcq', q: 'She gave ___ a book.', options: ['I', 'me', 'my', 'mine'], answer: 'me', explain: '动词 gave 后作宾语，用宾格 <b>me</b>。' },
          { type: 'fill', q: '___ is my brother.', bank: ['He', 'Him', 'His'], answer: 'He', explain: '作主语用主格 <b>He</b>。' },
          { type: 'correct', q: 'Him is a teacher.', answer: 'He is a teacher.', note: '格用对了吗？', explain: '作主语要用主格 <b>He</b>，不是 Him。' },
          { type: 'match', prompt: '连一连主格与宾格', pairs: [
            { rule: 'I（主格）', ex: 'me（宾格）' },
            { rule: 'he（主格）', ex: 'him（宾格）' },
            { rule: 'she（主格）', ex: 'her（宾格）' }
          ] }
        ],
        recap: '人称代词：<b>主格</b>作主语，<b>宾格</b>作宾语（动词/介词后）。'
      },
      {
        id: 'possessive',
        title: '物主代词',
        intro: {
          concept: '形容词性<b>后接名词</b>（my/your/his/her/our/their）；名词性<b>独立使用</b>（mine/yours/his/hers/ours/theirs）。',
          mnemonic: '形物后带名，名物自己行。',
          analogy: '形容词性像"标签贴名词上"，名词性像"替名词出场"。'
        },
        worked: [
          { sentence: 'This is ___ book.', steps: ['后接名词 book', '用形容词性 my', '✅ This is my book.'], diagram: '🏷 后接名词 → my' },
          { sentence: 'The book is ___.', steps: ['独立使用、不接名词', '用名词性 mine', '✅ The book is mine.'], diagram: '📗 独立 → mine' }
        ],
        guided: {
          text: 'That is ___ (he) pen. It is ___ (he).',
          blanks: 2,
          bank: ['his', 'he', 'him'],
          answers: ['his', 'his'],
          hints: ['第一空后接 pen → 形物 his', '第二空独立 → 名物 his']
        },
        practice: [
          { type: 'mcq', q: 'This is ___ book.', options: ['my', 'mine', 'me', 'I'], answer: 'my', explain: '后接名词 book，用形容词性 <b>my</b>。' },
          { type: 'fill', q: 'The book is ___.', bank: ['my', 'mine', 'me'], answer: 'mine', explain: '独立使用、不接名词，用名词性 <b>mine</b>。' },
          { type: 'correct', q: 'This pen is your.', answer: 'This pen is yours.', note: 'your 还是 yours？', explain: '独立使用要用名词性 <b>yours</b>。' },
          { type: 'match', prompt: '连一连形容词性与名词性', pairs: [
            { rule: 'my', ex: 'mine' },
            { rule: 'her', ex: 'hers' },
            { rule: 'their', ex: 'theirs' }
          ] }
        ],
        recap: '物主代词：形物<b>后接名词</b>，名物<b>独立使用</b>。'
      },
      {
        id: 'reflexive',
        title: '反身代词',
        intro: {
          concept: 'myself/yourself/himself/herself/itself/ourselves/themselves，动作回到主语自身。',
          mnemonic: '反身常搭：teach oneself 自学、enjoy oneself 玩得开心、help oneself to 自便。',
          analogy: '反身代词像"照镜子"——主语自己承受动作。'
        },
        worked: [
          { sentence: 'I taught ___ English.', steps: ['"自学"→ teach oneself', '主语 I → myself', '✅ I taught myself English.'], diagram: '🪞 teach oneself → myself' },
          { sentence: 'Help ___ to some fish.', steps: ['"自便"→ help oneself to', '对听话人用 yourself', '✅ Help yourself to some fish.'], diagram: '🐟 help oneself → yourself' }
        ],
        guided: {
          text: 'They enjoyed ___ at the party.',
          blanks: 1,
          bank: ['them', 'themselves', 'their'],
          answers: ['themselves'],
          hints: ['主语 they，反身用 themselves', 'enjoy oneself 玩得开心']
        },
        practice: [
          { type: 'mcq', q: 'I taught ___ English.', options: ['me', 'myself', 'my', 'mine'], answer: 'myself', explain: 'teach oneself 自学，用 <b>myself</b>。' },
          { type: 'fill', q: 'Help ___ to some fish.', bank: ['you', 'your', 'yourself'], answer: 'yourself', explain: 'help oneself to 自便，用 <b>yourself</b>。' },
          { type: 'correct', q: 'She hurt her in the accident.', answer: 'She hurt herself in the accident.', note: '反身代词？', explain: '动作回到主语，用 <b>herself</b>。' },
          { type: 'transform', q: 'He can do it by him.', answer: 'He can do it by himself.', explain: 'by oneself 独自，用 himself。' }
        ],
        recap: '反身代词动作回主语自身，常搭 teach/enjoy/help oneself。'
      }
    ]
  },

  /* 7. 句子结构 */
  sentences: {
    id: 'sentences', icon: '🏗️', title: '句子结构', diff: '基础',
    intro: '盖房子的蓝图！主语谓语宾语……五种基本句型，火宝宝帮你搭好英语句子的骨架～',
    sections: [
      {
        id: 'members',
        title: '句子成分',
        intro: {
          concept: '主语(主角)、谓语(动作/状态)、宾语(承受者)、表语(说明主语)、定语/状语/补语(修饰补充)。',
          mnemonic: '主谓宾表定状补，成分七兄弟。',
          analogy: '句子成分像"人体器官"——各司其职组成完整句子。'
        },
        worked: [
          { sentence: 'In "The boy plays football", "football" is the ___.', steps: ['plays 的承受者', '是宾语 object', '✅ football 是宾语'], diagram: '⚽ 动作承受者 → 宾语' },
          { sentence: 'In "She is a teacher", "a teacher" is the ___.', steps: ['说明主语身份', '是表语 predicative', '✅ a teacher 是表语'], diagram: '🪪 说明主语 → 表语' }
        ],
        guided: {
          text: 'The cat (主语) ___ (谓语) on the roof.',
          blanks: 1,
          bank: ['sleeps', 'sleep', 'sleeping'],
          answers: ['sleeps'],
          hints: ['谓语是动作，主语 cat 三单', 'sleep → sleeps']
        },
        practice: [
          { type: 'mcq', q: 'In "The boy plays football", "football" is the ___.', options: ['subject', 'predicate', 'object', 'predicative'], answer: 'object', explain: '动作的承受者，是<b>宾语 object</b>。' },
          { type: 'fill', q: 'In "She is a teacher", "a teacher" is the ___.', bank: ['subject', 'object', 'predicative'], answer: 'predicative', explain: '说明主语身份，是<b>表语 predicative</b>。' },
          { type: 'correct', q: 'Running is he hobby.', answer: 'Running is his hobby.', note: '成分正确吗？', explain: 'hobby 前要用物主 his，主语是 Running。' },
          { type: 'match', prompt: '连一连成分与说明', pairs: [
            { rule: '主语 subject', ex: '句子的主角' },
            { rule: '宾语 object', ex: '动作的承受者' },
            { rule: '表语 predicative', ex: '说明主语身份' }
          ] }
        ],
        recap: '句子成分：主谓宾表定状补，各司其职。'
      },
      {
        id: 'five',
        title: '五种基本句型',
        intro: {
          concept: '1.主+谓 2.主+谓+宾 3.主+谓+表 4.主+谓+双宾 5.主+谓+宾+补。',
          mnemonic: '五句型：SV / SVO / SVP / SVOO / SVOC。',
          analogy: '五种句型像"五种乐高底座"——所有句子都搭在这之上。'
        },
        worked: [
          { sentence: 'She gave me a book.', steps: ['She 主语', 'gave 谓语', 'me 间接宾语、a book 直接宾语', '✅ S + V + IO + DO 双宾'], diagram: '🎁 双宾：人+物' },
          { sentence: 'We made him happy.', steps: ['We 主语', 'made 谓语', 'him 宾语', 'happy 补充说明 him → 宾补', '✅ S + V + O + C 宾补'], diagram: '😊 宾补：补充说明宾语' }
        ],
        guided: {
          text: 'He (主语) bought (谓语) ___ (间接宾语) a gift (直接宾语).',
          blanks: 1,
          bank: ['her', 'she', 'hers'],
          answers: ['her'],
          hints: ['双宾中"人"是间接宾语', '用宾格 her']
        },
        practice: [
          { type: 'mcq', q: 'She gave me a book. — "me" is ___', options: ['direct object', 'indirect object', 'subject', 'predicate'], answer: 'indirect object', explain: 'me 是间接宾语 <b>indirect object</b>（人）。' },
          { type: 'fill', q: 'We made him happy. — "happy" is ___', bank: ['object', 'object complement', 'predicative'], answer: 'object complement', explain: '补充说明宾语 him，是<b>宾语补足语</b>。' },
          { type: 'correct', q: 'They elected he captain.', answer: 'They elected him captain.', note: '格对吗？', explain: '宾语用宾格 <b>him</b>，captain 是宾补。' },
          { type: 'match', prompt: '连一连句型缩写', pairs: [
            { rule: 'S + V', ex: '主 + 谓' },
            { rule: 'S + V + O', ex: '主 + 谓 + 宾' },
            { rule: 'S + V + P', ex: '主 + 谓 + 表' }
          ] }
        ],
        recap: '五种基本句型：SV / SVO / SVP / SVOO / SVOC。'
      }
    ]
  },

  /* 8. 动词 */
  verbs: {
    id: 'verbs', icon: '🎯', title: '动词', diff: '核心',
    intro: '句子的发动机！系动词、助动词、实义动词，火宝宝区分「谁在干活、谁在帮忙」～',
    sections: [
      {
        id: 'linking',
        title: '系动词',
        intro: {
          concept: '后接<b>表语</b>说明主语状态/特征。如 be, look, sound, feel, smell, become, get。',
          mnemonic: '系动词后跟形容词：look/sound/feel/smell + adj。',
          analogy: '系动词像"等号"——把主语和状态连起来。'
        },
        worked: [
          { sentence: 'She ___ happy.', steps: ['后接形容词 happy', '用系动词 look 的三单', '✅ She looks happy.'], diagram: '😊 look + adj → 系动词' },
          { sentence: 'The soup ___ good.', steps: ['"闻起来"→ smell + adj', '主语 soup 三单', '✅ The soup smells good.'], diagram: '🍲 smell + adj' }
        ],
        guided: {
          text: 'He ___ (seem) tired.',
          blanks: 1,
          bank: ['seem', 'seems', 'seeming'],
          answers: ['seems'],
          hints: ['系动词后接形容词', '主语 he 三单 → seems']
        },
        practice: [
          { type: 'mcq', q: 'She ___ happy.', options: ['looks', 'looks like', 'look', 'looking'], answer: 'looks', explain: '系动词 look 后接形容词，三单 <b>looks</b>。' },
          { type: 'fill', q: 'The soup ___ good.', bank: ['smells', 'smell', 'smelling'], answer: 'smells', explain: '系动词 smell 后接形容词 <b>smells</b>。' },
          { type: 'correct', q: 'She looks sadly.', answer: 'She looks sad.', note: 'look 后接什么词？', explain: '系动词后接<b>形容词</b> sad，不是副词。' },
          { type: 'match', prompt: '连一连系动词', pairs: [
            { rule: 'look', ex: '看起来' },
            { rule: 'sound', ex: '听起来' },
            { rule: 'become', ex: '变得' }
          ] }
        ],
        recap: '系动词后接<b>表语（形容词）</b>说明主语状态：look/sound/feel/smell/become。'
      },
      {
        id: 'auxiliary',
        title: '助动词',
        intro: {
          concept: 'do/does/did 帮构成疑问否定；be 帮构成进行时/被动；have/has 帮构成完成时。',
          mnemonic: '助动词三大家：do 家族、be 家族、have 家族。',
          analogy: '助动词像"助手"——自己没实义，帮主干动词搭时态/语气。'
        },
        worked: [
          { sentence: '___ she go to school?', steps: ['三单主语疑问', '用助动词 Does', '✅ Does she go to school?'], diagram: '❓ 三单疑问 → Does' },
          { sentence: 'He ___ finished his homework.', steps: ['现在完成时', '三单主语 → has', '✅ He has finished his homework.'], diagram: '✅ 完成 → has' }
        ],
        guided: {
          text: 'You (主语) ___ (do) like coffee?',
          blanks: 1,
          bank: ['do', 'does', 'did'],
          answers: ['do'],
          hints: ['主语 you，疑问句用助动词 do', '后接原形 like']
        },
        practice: [
          { type: 'mcq', q: '___ she go to school?', options: ['Do', 'Does', 'Did', 'Is'], answer: 'Does', explain: '三单主语疑问用 <b>Does</b>。' },
          { type: 'fill', q: 'He ___ finished his homework.', bank: ['has', 'have', 'is'], answer: 'has', explain: '现在完成时助动词用 <b>has/have</b>。' },
          { type: 'correct', q: 'Does he likes tea?', answer: 'Does he like tea?', note: 'likes 对吗？', explain: '助动词后接<b>原形</b> like，不加 s。' },
          { type: 'match', prompt: '连一连助动词与功能', pairs: [
            { rule: 'do / does / did', ex: '疑问与否定' },
            { rule: 'be (am/is/are)', ex: '进行时 / 被动' },
            { rule: 'have / has', ex: '完成时' }
          ] }
        ],
        recap: '助动词 do/be/have 帮主干动词搭时态与疑问否定，自身无实义。'
      }
    ]
  },

  /* 9. 非谓语动词 */
  nonfinite: {
    id: 'nonfinite', icon: '🔁', title: '非谓语动词', diff: '高级',
    intro: '动词不「做谓语」时干嘛？不定式、动名词、分词，火宝宝讲清「动词的第二种活法」～',
    sections: [
      {
        id: 'infinitive',
        title: '不定式 to do',
        intro: {
          concept: 'to + 原形，可作主语、宾语、定语、<b>目的状语</b>。',
          mnemonic: 'want / hope / decide + to do；表目的常用 to do。',
          analogy: '不定式像"待办标签"——表示"要去做的事"。'
        },
        worked: [
          { sentence: 'He came ___ me.', steps: ['表目的"来帮我"', '用不定式 to help', '✅ He came to help me.'], diagram: '🎯 目的 → to help' },
          { sentence: 'I want ___ sleep.', steps: ['want to do 固定搭配', '用 to', '✅ I want to sleep.'], diagram: '😴 want to do' }
        ],
        guided: {
          text: 'She went to the shop ___ (buy) milk.',
          blanks: 1,
          bank: ['buy', 'to buy', 'buying'],
          answers: ['to buy'],
          hints: ['表目的用不定式', 'to + buy']
        },
        practice: [
          { type: 'mcq', q: 'He came ___ me.', options: ['help', 'to help', 'helping', 'helped'], answer: 'to help', explain: '表目的用不定式 <b>to help</b>。' },
          { type: 'fill', q: 'I want ___ sleep.', bank: ['to', '（不填）', 'sleeping'], answer: 'to', explain: 'want to do，用 <b>to</b>。' },
          { type: 'correct', q: 'It is important study English.', answer: 'It is important to study English.', note: '缺了什么？', explain: '真正主语用<b>不定式</b> to study。' },
          { type: 'match', prompt: '连一连不定式用法', pairs: [
            { rule: '主语', ex: 'To swim is fun.' },
            { rule: '目的状语', ex: 'He came to help.' },
            { rule: '宾语', ex: 'I want to go.' }
          ] }
        ],
        recap: '不定式 to do 可作主语/宾语/定语/<b>目的状语</b>。'
      },
      {
        id: 'gerund',
        title: '动名词 doing',
        intro: {
          concept: '动词性名词，作<b>主语或宾语</b>。enjoy / mind / finish + doing。',
          mnemonic: '爱享受：enjoy / like / mind / finish + doing。',
          analogy: '动名词像"把动作当名词用"——动词穿了名词的马甲。'
        },
        worked: [
          { sentence: 'I enjoy ___ books.', steps: ['enjoy 后接动名词', 'read → reading', '✅ I enjoy reading books.'], diagram: '📚 enjoy + doing' },
          { sentence: '___ is fun.', steps: ['作主语，动词变名词', 'swim → swimming', '✅ Swimming is fun.'], diagram: '🏊 动名词作主语' }
        ],
        guided: {
          text: 'He finished ___ (write) the letter.',
          blanks: 1,
          bank: ['write', 'to write', 'writing'],
          answers: ['writing'],
          hints: ['finish 后接动名词', 'write → writing']
        },
        practice: [
          { type: 'mcq', q: 'I enjoy ___ books.', options: ['read', 'to read', 'reading', 'reads'], answer: 'reading', explain: 'enjoy doing，用 <b>reading</b>。' },
          { type: 'fill', q: '___ is fun.', bank: ['Swim', 'To swim', 'Swimming'], answer: 'Swimming', explain: '动名词作主语 <b>Swimming</b>。' },
          { type: 'correct', q: 'She avoided to answer.', answer: 'She avoided answering.', note: 'avoid 后接什么？', explain: 'avoid 后接<b>动名词</b> answering，不是 to do。' },
          { type: 'transform', q: 'Read books is my hobby. （改正）', answer: 'Reading books is my hobby.', explain: '动词作主语要用动名词 Reading。' }
        ],
        recap: '动名词 doing 作<b>主语/宾语</b>；enjoy/mind/finish + doing。'
      }
    ]
  },

  /* 10. 形容词与副词 */
  adjadv: {
    id: 'adjadv', icon: '🎨', title: '形容词与副词', diff: '基础',
    intro: '形容词妆扮名词，副词修饰动作！火宝宝教你「什么样的词放在哪」～',
    sections: [
      {
        id: 'adj',
        title: '形容词',
        intro: {
          concept: '修饰<b>名词</b>，通常前置：a big house。比较级 -er/more，最高级 -est/most。',
          mnemonic: '形容词贴名词；比较级更，最高级最。',
          analogy: '形容词像"化妆师"——给名词添色彩。'
        },
        worked: [
          { sentence: 'She is a ___ girl.', steps: ['修饰名词 girl', '用形容词 beautiful', '✅ She is a beautiful girl.'], diagram: '🌸 修饰名词 → 形容词' },
          { sentence: 'This is an ___ book.', steps: ['修饰物 book', '"令人感兴趣的"用 interesting', '✅ This is an interesting book.'], diagram: '📘 -ing 形容词修饰物' }
        ],
        guided: {
          text: 'The ___ (happy) child is smiling.',
          blanks: 1,
          bank: ['happy', 'happily', 'happiness'],
          answers: ['happy'],
          hints: ['修饰名词 child', '用形容词 happy']
        },
        practice: [
          { type: 'mcq', q: 'She is a ___ girl.', options: ['beautiful', 'beautifully', 'beauty', 'more beautiful'], answer: 'beautiful', explain: '修饰名词用形容词 <b>beautiful</b>。' },
          { type: 'fill', q: 'This is an ___ book.', bank: ['interest', 'interesting', 'interested'], answer: 'interesting', explain: '修饰物用 <b>interesting</b>（令人感兴趣的）。' },
          { type: 'correct', q: 'She is a quietly girl.', answer: 'She is a quiet girl.', note: 'quietly 对吗？', explain: '修饰名词要用<b>形容词</b> quiet，不是副词。' },
          { type: 'match', prompt: '连一连形容词位置', pairs: [
            { rule: '前置修饰名词', ex: 'a red apple' },
            { rule: '作表语', ex: 'The apple is red.' },
            { rule: '修饰物用 -ing', ex: 'an interesting book' }
          ] }
        ],
        recap: '形容词修饰<b>名词</b>，常前置；注意 -ing（修饰物）与 -ed（感受）区别。'
      },
      {
        id: 'adv',
        title: '副词',
        intro: {
          concept: '修饰<b>动词/形容词/副词</b>，表方式、时间、地点、程度。quickly, very, here。',
          mnemonic: '副词常带 -ly；good 的副词是 well。',
          analogy: '副词像"放大镜"——给动作/形容词加细节。'
        },
        worked: [
          { sentence: 'He runs ___.', steps: ['修饰动词 runs', '用副词 fast / quickly', '✅ He runs fast.'], diagram: '🏃 修饰动词 → 副词' },
          { sentence: 'She sings ___.', steps: ['修饰动词 sings', 'good 的副词是 well', '✅ She sings well.'], diagram: '🎤 well 不是 good' }
        ],
        guided: {
          text: 'Please speak ___ (slow).',
          blanks: 1,
          bank: ['slow', 'slowly', 'slower'],
          answers: ['slowly'],
          hints: ['修饰动词 speak', '用副词 slowly']
        },
        practice: [
          { type: 'mcq', q: 'He runs ___.', options: ['fast', 'fastly', 'quick', 'faster'], answer: 'fast', explain: '修饰动词用副词，fast 本身可作副词 <b>fast</b>。' },
          { type: 'fill', q: 'She sings ___.', bank: ['good', 'well', 'better'], answer: 'well', explain: '修饰动词用副词 <b>well</b>（good 的副词）。' },
          { type: 'correct', q: 'He did the work careful.', answer: 'He did the work carefully.', note: 'careful 对吗？', explain: '修饰动词 did 用<b>副词</b> carefully。' },
          { type: 'match', prompt: '连一连形容词与副词', pairs: [
            { rule: 'quick（形容词）', ex: 'quickly（副词）' },
            { rule: 'happy（形容词）', ex: 'happily（副词）' },
            { rule: 'good（形容词）', ex: 'well（副词）' }
          ] }
        ],
        recap: '副词修饰<b>动词/形容词/副词</b>，常带 -ly；good→well。'
      }
    ]
  },

  /* 11. 名词 */
  nouns: {
    id: 'nouns', icon: '📦', title: '名词', diff: '基础',
    intro: '万物之名！可数不可数、复数变化、所有格，火宝宝帮你数清楚～',
    sections: [
      {
        id: 'count',
        title: '可数与不可数',
        intro: {
          concept: '可数名词有单复数（chair→chairs）；不可数无复数，表数量用 a piece of / two cups of 等。',
          mnemonic: '不可数常见：water, milk, advice, information, news。',
          analogy: '可数像"一颗颗糖"，不可数像"一摊水"——不能一个个数。'
        },
        worked: [
          { sentence: 'I need some ___.', steps: ['water 不可数', '不用复数、不加 a', '✅ I need some water.'], diagram: '💧 不可数 → 无复数' },
          { sentence: 'There are two ___ on the desk.', steps: ['可数名词表数量', 'book → books', '✅ two books'], diagram: '📚 可数 → 复数' }
        ],
        guided: {
          text: 'I drank two ___ (cup) of ___ (water).',
          blanks: 2,
          bank: ['cup', 'cups', 'water', 'waters'],
          answers: ['cups', 'water'],
          hints: ['two 后可数用复数 cups', 'water 不可数无复数']
        },
        practice: [
          { type: 'mcq', q: 'I need some ___.', options: ['water', 'book', 'apple', 'chair'], answer: 'water', explain: 'water 是不可数名词。' },
          { type: 'fill', q: 'There are two ___ on the desk.', bank: ['book', 'books', 'water'], answer: 'books', explain: '可数名词复数 <b>books</b>。' },
          { type: 'correct', q: 'I have many homeworks.', answer: 'I have much homework.', note: 'homework 可数吗？', explain: 'homework <b>不可数</b>，不用 many/复数。' },
          { type: 'match', prompt: '连一连名词类型', pairs: [
            { rule: '可数', ex: 'book → books' },
            { rule: '不可数', ex: 'water' },
            { rule: '不可数', ex: 'information' }
          ] }
        ],
        recap: '可数有单复数；不可数无复数，用量词表数量。'
      },
      {
        id: 'possessive',
        title: '所有格',
        intro: {
          concept: '有生命名词加 \'s（Tom\'s）；无生命用 of（the door of the room）。',
          mnemonic: '有命加 \'s，无命用 of。',
          analogy: '所有格像"贴 ownership 标签"——标明归属。'
        },
        worked: [
          { sentence: 'This is my ___ bag.', steps: ['有生命 mother', '加 \'s：mother\'s', '✅ This is my mother\'s bag.'], diagram: '👜 有生命 → \'s' },
          { sentence: 'the door ___ the room', steps: ['无生命 room', '用 of', '✅ the door of the room'], diagram: '🚪 无生命 → of' }
        ],
        guided: {
          text: 'That is ___ (Tom) book.',
          blanks: 1,
          bank: ['Tom', 'Tom\'s', 'Toms'],
          answers: ['Tom\'s'],
          hints: ['有生命名词所有格加 \'s', 'Tom\'s']
        },
        practice: [
          { type: 'mcq', q: 'This is ___ bag.', options: ['Tom', 'Tom\'s', 'Toms', 'Toms\''], answer: 'Tom\'s', explain: '有生命名词所有格加 <b>Tom\'s</b>。' },
          { type: 'fill', q: 'the door ___ the room', bank: ['of', '\'s', 'for'], answer: 'of', explain: '无生命用 <b>of</b>：the door of the room。' },
          { type: 'correct', q: 'the leg of the dog → the dog leg', answer: 'the dog\'s leg', note: '有生命该用？', explain: '狗是有生命的，用 <b>dog\'s leg</b> 更自然。' },
          { type: 'transform', q: 'the tail of the cat （改所有格）', answer: 'the cat\'s tail', explain: '有生命用 \'s：cat\'s tail。' }
        ],
        recap: '所有格：有生命加 <b>\'s</b>，无生命用 <b>of</b>。'
      }
    ]
  },

  /* 12. 介词 */
  prepositions: {
    id: 'prepositions', icon: '🧩', title: '介词', diff: '基础',
    intro: '小词大用处！时间、方位、方式介词，火宝宝用一张图帮你记牢～',
    sections: [
      {
        id: 'time',
        title: '时间介词',
        intro: {
          concept: 'in + 年/月/季节；on + 具体某天；at + 时刻/年龄。',
          mnemonic: 'in 大 on 小 at 点：in 2024, on Monday, at 7 o\'clock。',
          analogy: '时间介词像"时间刻度尺"——范围从大到小。'
        },
        worked: [
          { sentence: 'The party is ___ Sunday.', steps: ['具体某天 Sunday', '用 on', '✅ The party is on Sunday.'], diagram: '📅 具体某天 → on' },
          { sentence: 'Class begins ___ 7 o\'clock.', steps: ['具体时刻', '用 at', '✅ Class begins at 7 o\'clock.'], diagram: '🕖 时刻 → at' }
        ],
        guided: {
          text: 'We met ___ (in/on/at) a rainy day.',
          blanks: 1,
          bank: ['in', 'on', 'at'],
          answers: ['on'],
          hints: ['"a rainy day" 具体某天', '用 on']
        },
        practice: [
          { type: 'mcq', q: 'The party is ___ Sunday.', options: ['in', 'on', 'at', '（不填）'], answer: 'on', explain: '具体某天用 <b>on</b>。' },
          { type: 'fill', q: 'Class begins ___ 7 o\'clock.', bank: ['in', 'on', 'at'], answer: 'at', explain: '具体时刻用 <b>at</b>。' },
          { type: 'correct', q: 'I was born in May 1st.', answer: 'I was born on May 1st.', note: 'May 1st 用 in 还是 on？', explain: '具体某天用 <b>on</b>，不是 in。' },
          { type: 'match', prompt: '连一连时间介词', pairs: [
            { rule: 'in', ex: 'in 2024 / in summer' },
            { rule: 'on', ex: 'on Monday' },
            { rule: 'at', ex: 'at 7 o\'clock' }
          ] }
        ],
        recap: '时间介词：<b>in</b> 大范围、<b>on</b> 具体某天、<b>at</b> 时刻。'
      },
      {
        id: 'place',
        title: '方位与其他',
        intro: {
          concept: 'in 里 / on 上 / under 下；with 和、用；for 为了；by 被、乘；from 从。',
          mnemonic: '方位三兄弟：in / on / under；方式 by 乘、with 用。',
          analogy: '方位介词像"空间坐标"——标出东西在哪。'
        },
        worked: [
          { sentence: 'The cat is ___ the table.', steps: ['"在…下面"', '用 under', '✅ The cat is under the table.'], diagram: '🐱 下方 → under' },
          { sentence: 'He goes to school ___ bus.', steps: ['乘交通工具', '用 by', '✅ He goes to school by bus.'], diagram: '🚌 乘 → by' }
        ],
        guided: {
          text: 'The book is ___ (in/on/under) the desk.',
          blanks: 1,
          bank: ['in', 'on', 'under'],
          answers: ['on'],
          hints: ['"在桌子上面"', '用 on']
        },
        practice: [
          { type: 'mcq', q: 'The cat is ___ the table.', options: ['in', 'on', 'under', 'with'], answer: 'under', explain: '在…下面用 <b>under</b>。' },
          { type: 'fill', q: 'He goes to school ___ bus.', bank: ['by', 'with', 'on'], answer: 'by', explain: '乘交通工具用 <b>by</b>。' },
          { type: 'correct', q: 'She wrote the letter by a pen.', answer: 'She wrote the letter with a pen.', note: 'by 还是 with？', explain: '具体工具用 <b>with</b>，by 表手段/被动。' },
          { type: 'match', prompt: '连一连方位介词', pairs: [
            { rule: 'in', ex: '在…里' },
            { rule: 'on', ex: '在…上' },
            { rule: 'under', ex: '在…下' }
          ] }
        ],
        recap: '方位：in/on/under；方式：by 乘、with 用、for 为了。'
      }
    ]
  },

  /* 13. 数词 */
  numerals: {
    id: 'numerals', icon: '🔢', title: '数词', diff: '基础',
    intro: '数出顺序！基数词表数量、序数词表顺序，火宝宝带你读编号和日期～',
    sections: [
      {
        id: 'cardinal',
        title: '基数词与序数词',
        intro: {
          concept: '基数词表<b>数量</b>（one, two）；序数词表<b>顺序</b>（first, second），前常加 the。',
          mnemonic: '基数量、序数序；序数多数加 th（first/second/third 特例）。',
          analogy: '基数词像"数数"，序数词像"排名"。'
        },
        worked: [
          { sentence: 'He is the ___ student to come.', steps: ['表顺序"第一个"', '用序数词 first', '✅ He is the first student to come.'], diagram: '🥇 顺序 → first' },
          { sentence: 'There are ___ apples.', steps: ['表数量"三个"', '用基数词 three', '✅ There are three apples.'], diagram: '🍎 数量 → three' }
        ],
        guided: {
          text: 'She is the ___ (two) child in her family.',
          blanks: 1,
          bank: ['two', 'second', 'twice'],
          answers: ['second'],
          hints: ['表顺序"第二个"', '用序数词 second']
        },
        practice: [
          { type: 'mcq', q: 'He is the ___ student to come.', options: ['one', 'first', 'once', 'only'], answer: 'first', explain: '表顺序用序数词 <b>first</b>。' },
          { type: 'fill', q: 'There are ___ apples on the table.', bank: ['three', 'third', 'the three'], answer: 'three', explain: '表数量用基数词 <b>three</b>。' },
          { type: 'correct', q: 'He is the two boy.', answer: 'He is the second boy.', note: 'two 还是 second？', explain: '表顺序用序数词 <b>second</b>，且加 the。' },
          { type: 'match', prompt: '连一连基数与序数', pairs: [
            { rule: 'one', ex: 'first' },
            { rule: 'two', ex: 'second' },
            { rule: 'three', ex: 'third' }
          ] }
        ],
        recap: '基数词表<b>数量</b>，序数词表<b>顺序</b>（常加 the）。'
      },
      {
        id: 'expression',
        title: '常见表达',
        intro: {
          concept: '编号：Room 305；年份：in 2024；日期：May 1st；分数：one third。',
          mnemonic: '编号大写在前，日期用序数缩写，年份分两组读。',
          analogy: '数词表达像"地址格式"——有固定写法。'
        },
        worked: [
          { sentence: 'My birthday is on May ___.', steps: ['日期用序数词缩写', '1st', '✅ My birthday is on May 1st.'], diagram: '🎂 日期 → 1st' },
          { sentence: 'We live in ___.', steps: ['编号表达', 'Room 305（名前数后）', '✅ We live in Room 305.'], diagram: '🏠 编号 → Room 305' }
        ],
        guided: {
          text: 'The meeting is on March ___ (3).',
          blanks: 1,
          bank: ['three', 'third', '3rd'],
          answers: ['3rd'],
          hints: ['日期用序数词缩写', '3rd']
        },
        practice: [
          { type: 'mcq', q: 'My birthday is on May ___.', options: ['one', 'first', '1st', 'on'], answer: '1st', explain: '日期用序数词缩写 <b>1st</b>。' },
          { type: 'fill', q: 'We live in ___.', bank: ['Room 305', '305 Room', 'the 305 room'], answer: 'Room 305', explain: '编号表达 <b>Room 305</b>。' },
          { type: 'correct', q: 'I was born in the 2024 year.', answer: 'I was born in 2024.', note: '年份怎么说？', explain: '年份直接读 <b>2024</b>，不加 the year。' },
          { type: 'transform', q: 'three fifths （写成数字分数）', answer: '3/5', explain: '分数 three fifths = 3/5。' }
        ],
        recap: '编号 Room 305、日期 May 1st、年份 2024、分数 3/5。'
      }
    ]
  }

};
