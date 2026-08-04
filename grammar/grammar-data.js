/* ===== 语法互动模块 · 内容脚本（13 章，原创） =====
   每章 = 一个模块；每节含 content / examples / quiz（原创选择题，规避第三方版权） */
window.GRAMMAR_MODULES = {

  /* 1. 冠词 */
  articles: {
    id: 'articles', icon: '🔤', title: '冠词 (a/an/the)', diff: '基础', level: 2,
    intro: '火宝宝来啦！冠词就看「发音」不看「拼写」，跟我一节一节啃下来～',
    sections: [
      { title: '不定冠词 a/an', content: 'a 用于辅音音素开头的词前，an 用于元音音素开头的词前。\n判断依据是【发音】不是拼写！\n• a book, a university (以 /j/ 音开头)\n• an apple, an hour (h 不发音，以元音开头)',
        examples: [ { en: 'She is a teacher.', cn: '她是一名老师。' }, { en: 'He is an honest boy.', cn: '他是一个诚实的男孩。(honest 的 h 不发音)' } ],
        quiz: [
          { q: '选择正确的冠词：He is ___ honest boy.', options: ['a', 'an', 'the', '（不填）'], answer: 1, explain: 'honest 的 h 不发音，以元音音素 /ɒ/ 开头，用 <b>an</b>。' },
          { q: 'We need ___ university student.', options: ['a', 'an', 'the', '（不填）'], answer: 0, explain: 'university 以 /j/ 辅音音素开头，用 <b>a</b>。' }
        ] },
      { title: '定冠词 the', content: '1. 特指：the book on the desk\n2. 独一无二：the sun, the moon\n3. 乐器：play the piano\n4. 序数词/最高级：the first, the best',
        examples: [ { en: 'The earth goes around the sun.', cn: '地球绕着太阳转。' }, { en: 'She plays the violin well.', cn: '她小提琴拉得很好。' } ],
        quiz: [
          { q: '___ sun rises in the east.', options: ['A', 'An', 'The', '（不填）'], answer: 2, explain: '世界上独一无二的事物前用 <b>the</b>。' },
          { q: 'She plays ___ piano very well.', options: ['a', 'an', 'the', '（不填）'], answer: 2, explain: '西洋乐器前加 <b>the</b>。' }
        ] },
      { title: '零冠词', content: '1. 三餐前：have breakfast\n2. 球类运动前：play basketball\n3. 学科前：study English\n4. 泛指复数名词：Dogs are loyal.',
        examples: [ { en: 'I play football after school.', cn: '放学后我踢足球。' }, { en: 'She has lunch at noon.', cn: '她中午吃午饭。' } ],
        quiz: [
          { q: 'I have ___ lunch at noon.', options: ['a', 'an', 'the', '（不填）'], answer: 3, explain: '三餐前用<b>零冠词</b>（不填）。' },
          { q: 'He likes playing ___ basketball.', options: ['a', 'an', 'the', '（不填）'], answer: 3, explain: '球类运动前用<b>零冠词</b>。' }
        ] }
    ]
  },

  /* 2. 时态 */
  tenses: {
    id: 'tenses', icon: '⏰', title: '时态', diff: '核心', level: 3,
    intro: '时间旅行开始！一般现在、过去、将来、进行、完成，五种时态火宝宝带你通关～',
    sections: [
      { title: '一般现在时', content: '表习惯、事实、客观规律。第三人称单数加 s/es。\n标志词：always, usually, often, every day',
        examples: [ { en: 'She walks to school every day.', cn: '她每天步行上学。' }, { en: 'The sun rises in the east.', cn: '太阳从东方升起。' } ],
        quiz: [
          { q: 'She ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 1, explain: '第三人称单数用 <b>goes</b>。' },
          { q: 'The sun ___ in the east.', options: ['rise', 'rises', 'rose', 'rising'], answer: 1, explain: '客观事实用一般现在时，三单 <b>rises</b>。' }
        ] },
      { title: '一般过去时', content: '表过去发生的动作。动词用过去式。\n标志词：yesterday, last week, ago, in 2020',
        examples: [ { en: 'I visited Beijing last summer.', cn: '去年夏天我参观了北京。' }, { en: 'He didn\'t go to school yesterday.', cn: '他昨天没去上学。' } ],
        quiz: [
          { q: 'I ___ Beijing last summer.', options: ['visit', 'visits', 'visited', 'visiting'], answer: 2, explain: 'last summer 表过去，用过去式 <b>visited</b>。' },
          { q: 'He didn\'t ___ to school yesterday.', options: ['go', 'went', 'goes', 'going'], answer: 0, explain: 'didn\'t 后接动词<b>原形</b> go。' }
        ] },
      { title: '现在进行时', content: '结构：am/is/are + doing。表此时此刻正在发生。\n标志词：now, look, listen',
        examples: [ { en: 'I am reading a book now.', cn: '我现在正在读书。' }, { en: 'Look! The cat is climbing the tree.', cn: '看！猫正在爬树。' } ],
        quiz: [
          { q: 'Look! The cat ___ the tree.', options: ['climb', 'climbs', 'is climbing', 'climbed'], answer: 2, explain: 'Look! 提示此刻正在发生，用 <b>is climbing</b>。' },
          { q: 'I ___ a book now.', options: ['read', 'reads', 'am reading', 'readed'], answer: 2, explain: 'now 提示现在进行时 <b>am reading</b>。' }
        ] },
      { title: '现在完成时', content: '结构：have/has + 过去分词。表过去动作影响现在。\n标志词：already, yet, just, ever, never, for, since',
        examples: [ { en: 'I have finished my homework.', cn: '我已经完成了作业。' }, { en: 'She has lived here for 5 years.', cn: '她在这里住了5年了。' } ],
        quiz: [
          { q: 'I ___ my homework already.', options: ['finish', 'finished', 'have finished', 'has finished'], answer: 2, explain: 'already 提示现在完成时 <b>have finished</b>。' },
          { q: 'She ___ here for 5 years.', options: ['lives', 'lived', 'has lived', 'live'], answer: 2, explain: 'for + 时间段用现在完成时 <b>has lived</b>。' }
        ] },
      { title: '一般将来时', content: '结构：will + 动词原形 / be going to + 动词原形\n标志词：tomorrow, next week, soon',
        examples: [ { en: 'I will call you tomorrow.', cn: '我明天会打电话给你。' }, { en: 'It is going to rain.', cn: '快要下雨了。' } ],
        quiz: [
          { q: 'I ___ you tomorrow.', options: ['call', 'called', 'will call', 'calling'], answer: 2, explain: 'tomorrow 表将来，用 <b>will call</b>。' },
          { q: 'It ___ rain soon.', options: ['is going to', 'goes to', 'went to', 'go to'], answer: 0, explain: '表将要发生用 <b>is going to rain</b>。' }
        ] }
    ]
  },

  /* 3. 被动语态 */
  passive: {
    id: 'passive', icon: '🔄', title: '被动语态', diff: '进阶', level: 4,
    intro: '谁是动作承受者？被动语态让宾语站 C 位！be + 过去分词，火宝宝拆解给你看～',
    sections: [
      { title: '被动语态结构', content: 'be + 过去分词 (p.p.)\n各时态变化：\n• 一般现在：am/is/are done\n• 一般过去：was/were done\n• 现在完成：have/has been done\n• 一般将来：will be done\n• 含情态动词：can/must be done',
        examples: [ { en: 'English is spoken all over the world.', cn: '全世界都说英语。' }, { en: 'The bridge was built in 1990.', cn: '这座桥建于1990年。' } ],
        quiz: [
          { q: 'English ___ all over the world.', options: ['speaks', 'is spoken', 'spoke', 'was spoke'], answer: 1, explain: '客观事实 + 被动，一般现在时 <b>is spoken</b>。' },
          { q: 'The bridge ___ in 1990.', options: ['builds', 'built', 'was built', 'is built'], answer: 2, explain: '1990 表过去，被动用 <b>was built</b>。' }
        ] },
      { title: '主动变被动', content: '主动：We build houses. → 被动：Houses are built by us.\n步骤：1.宾语变主语 2.动词变 be+pp 3.主语变 by 短语',
        examples: [ { en: 'The letter was written by Tom.', cn: '这封信是 Tom 写的。' }, { en: 'The trees will be planted next week.', cn: '树将于下周种下。' } ],
        quiz: [
          { q: 'We build houses. → Houses ___ by us.', options: ['build', 'are built', 'built', 'were build'], answer: 1, explain: '宾语 houses 变主语，被动 <b>are built</b>。' },
          { q: 'Tom wrote the letter. → The letter ___ by Tom.', options: ['wrote', 'was written', 'is written', 'write'], answer: 1, explain: '过去时被动 <b>was written</b>。' }
        ] }
    ]
  },

  /* 4. 从句 */
  clauses: {
    id: 'clauses', icon: '🔗', title: '从句', diff: '高级', level: 5,
    intro: '句子套句子？宾语从句、定语从句、状语从句，火宝宝教你看清「谁修饰谁」！',
    sections: [
      { title: '宾语从句', content: '作宾语的从句。三要素：引导词、语序(陈述语序)、时态。\n• that 引导陈述句：I think that...\n• if/whether 引导一般疑问句：I wonder if...\n• what/who/when 等引导特殊疑问句',
        examples: [ { en: 'I don\'t know whether he will come.', cn: '我不知道他是否会来。' }, { en: 'Could you tell me where the post office is?', cn: '你能告诉我邮局在哪吗？(陈述语序)' } ],
        quiz: [
          { q: 'Could you tell me ___ the post office is?', options: ['where', 'what', 'which', 'who'], answer: 0, explain: '宾语从句用<b>陈述语序</b>，问地点用 <b>where</b>。' },
          { q: 'I wonder ___ he will come.', options: ['that', 'if', 'what', '（不填）'], answer: 1, explain: '一般疑问句变宾语从句意为「是否」，用 <b>if/whether</b>。' }
        ] },
      { title: '定语从句', content: '修饰名词/代词的从句。先行词是被修饰的词。\n• who 修饰人(作主语)  • whom 修饰人(作宾语)\n• which 修饰物  • that 修饰人或物  • whose 表所属',
        examples: [ { en: 'The man who is talking is my father.', cn: '正在说话的那个男人是我爸爸。' }, { en: 'This is the book which I bought.', cn: '这是我买的书。' } ],
        quiz: [
          { q: 'The man ___ is talking is my father.', options: ['which', 'who', 'whose', 'whom'], answer: 1, explain: '先行词指人且作主语，用 <b>who</b>。' },
          { q: 'This is the book ___ I bought.', options: ['who', 'whom', 'which', 'whose'], answer: 2, explain: '先行词指物，用 <b>which</b>。' }
        ] },
      { title: '状语从句', content: '时间(when/while/as soon as)、条件(if/unless)、原因(because/since)、让步(although/though)、目的(so that)',
        examples: [ { en: 'When I got home, Mom was cooking.', cn: '我到家时，妈妈正在做饭。' }, { en: 'If it rains, we will stay home.', cn: '如果下雨，我们就待在家。' } ],
        quiz: [
          { q: '___ it rains, we will stay home.', options: ['If', 'Although', 'Because', 'Unless'], answer: 0, explain: '条件状语从句「如果」用 <b>If</b>。' },
          { q: 'When I got home, Mom ___ cooking.', options: ['cook', 'cooks', 'cooked', 'was cooking'], answer: 3, explain: '过去某时刻正在发生，用过去进行时 <b>was cooking</b>。' }
        ] }
    ]
  },

  /* 5. 情态动词 */
  modal: {
    id: 'modal', icon: '🎭', title: '情态动词', diff: '核心', level: 3,
    intro: 'can / must / should / may…… 情态动词有态度！火宝宝教你「能力、必须、推测」三板斧～',
    sections: [
      { title: '基本用法', content: '• can/could：能力、请求\n• must：必须、肯定推测\n• should：应该\n• may/might：可能、许可\n• need：需要\n• mustn\'t：禁止  needn\'t：不必',
        examples: [ { en: 'You must finish it today.', cn: '你必须今天完成。' }, { en: '—Must I go now? —No, you needn\'t.', cn: '—我必须现在走吗？—不，你不必。' } ],
        quiz: [
          { q: '—Must I go now? —No, you ___.', options: ['mustn\'t', 'needn\'t', 'can\'t', 'shouldn\'t'], answer: 1, explain: 'Must 提问否定回答用 <b>needn\'t</b>（不必）。' },
          { q: 'You ___ finish it today.', options: ['must', 'might', 'may', 'can'], answer: 0, explain: '表「必须」用 <b>must</b>。' }
        ] },
      { title: '表推测', content: '• must do：一定（肯定推测）\n• can\'t do：不可能（否定推测）\n• may/might do：可能\n• should do：按理应该',
        examples: [ { en: 'He must be tired after working all day.', cn: '工作了一天，他一定很累。' }, { en: 'That can\'t be true.', cn: '那不可能是真的。' } ],
        quiz: [
          { q: 'He worked all day. He ___ be tired.', options: ['must', 'can\'t', 'needn\'t', 'shouldn\'t'], answer: 0, explain: '有依据的肯定推测用 <b>must</b>（一定）。' },
          { q: 'That ___ be true.', options: ['must', 'can\'t', 'need', 'should'], answer: 1, explain: '否定推测「不可能」用 <b>can\'t</b>。' }
        ] }
    ]
  },

  /* 6. 代词 */
  pronouns: {
    id: 'pronouns', icon: '👥', title: '代词', diff: '基础', level: 2,
    intro: '谁代替名词？人称、物主、反身、不定代词，火宝宝一张表讲清「格」与「所属」！',
    sections: [
      { title: '人称代词', content: '主格(作主语)：I/you/he/she/we/they\n宾格(作宾语)：me/you/him/her/us/them',
        examples: [ { en: 'She gave me a book.', cn: '她给了我一本书。(me 作宾语)' } ],
        quiz: [
          { q: 'She gave ___ a book.', options: ['I', 'me', 'my', 'mine'], answer: 1, explain: '动词 gave 后作宾语，用宾格 <b>me</b>。' },
          { q: '___ is my brother.', options: ['He', 'Him', 'His', 'Him'], answer: 0, explain: '作主语用主格 <b>He</b>。' }
        ] },
      { title: '物主代词', content: '形容词性(后接名词)：my/your/his/her/our/their\n名词性(独立使用)：mine/yours/his/hers/ours/theirs',
        examples: [ { en: 'This is my book. Yours is on the desk.', cn: '这是我的书。你的在桌上。' } ],
        quiz: [
          { q: 'This is ___ book.', options: ['my', 'mine', 'me', 'I'], answer: 0, explain: '后接名词 book，用形容词性 <b>my</b>。' },
          { q: 'The book is ___.', options: ['my', 'mine', 'me', 'I'], answer: 1, explain: '独立使用、不接名词，用名词性 <b>mine</b>。' }
        ] },
      { title: '反身代词', content: 'myself/yourself/himself/herself/itself/ourselves/themselves\n常见搭配：teach oneself(自学)、enjoy oneself(玩得开心)、help oneself to(自便)',
        examples: [ { en: 'I taught myself English.', cn: '我自学英语。' } ],
        quiz: [
          { q: 'I taught ___ English.', options: ['me', 'myself', 'my', 'mine'], answer: 1, explain: 'teach oneself 自学，用 <b>myself</b>。' },
          { q: 'Help ___ to some fish.', options: ['you', 'your', 'yourself', 'yours'], answer: 2, explain: 'help oneself to 自便，用 <b>yourself</b>。' }
        ] },
      { title: '不定代词', content: 'something(肯定句)、anything(否定/疑问)、nothing、everything\n形容词修饰不定代词要后置：something important',
        examples: [ { en: 'I have something important to tell you.', cn: '我有重要的事告诉你。' } ],
        quiz: [
          { q: 'I have ___ important to tell you.', options: ['something important', 'important something', 'anything important', 'important anything'], answer: 0, explain: '肯定句用 <b>something</b>，形容词<b>后置</b>。' },
          { q: 'Is there ___ in the box?', options: ['something', 'anything', 'nothing', 'everything'], answer: 1, explain: '疑问句用 <b>anything</b>。' }
        ] }
    ]
  },

  /* 7. 句子结构 */
  sentences: {
    id: 'sentences', icon: '🏗️', title: '句子结构', diff: '基础', level: 2,
    intro: '盖房子的蓝图！主语谓语宾语……五种基本句型，火宝宝帮你搭好英语句子的骨架～',
    sections: [
      { title: '句子成分', content: '英语句子由成分构成：\n• 主语 Subject：句子的主角\n• 谓语 Predicate：动作或状态\n• 宾语 Object：动作的承受者\n• 表语 Predicative：说明主语身份或状态\n• 定语/状语/补语：起修饰与补充作用',
        examples: [ { en: 'The boy plays football.', cn: '男孩踢足球。(主+谓+宾)' } ],
        quiz: [
          { q: 'In "The boy plays football", "football" is the ___.', options: ['subject', 'predicate', 'object', 'predicative'], answer: 2, explain: '动作的承受者，是<b>宾语 object</b>。' },
          { q: 'In "She is a teacher", "a teacher" is the ___.', options: ['subject', 'object', 'predicative', 'attribute'], answer: 2, explain: '说明主语身份，是<b>表语 predicative</b>。' }
        ] },
      { title: '五种基本句型', content: '1. 主+谓 (S+V)\n2. 主+谓+宾 (S+V+O)\n3. 主+谓+表 (S+V+P)\n4. 主+谓+双宾 (S+V+IO+DO)\n5. 主+谓+宾+补 (S+V+O+C)',
        examples: [ { en: 'She gave me a book.', cn: '她给了我一本书。(双宾)' }, { en: 'We made him happy.', cn: '我们让他开心。(宾补)' } ],
        quiz: [
          { q: 'She gave me a book. (S+V+IO+DO) — "me" is ___', options: ['direct object', 'indirect object', 'subject', 'predicate'], answer: 1, explain: 'me 是间接宾语 <b>indirect object</b>（人）。' },
          { q: 'We made him happy. — "happy" is ___', options: ['object', 'object complement', 'predicative', 'attribute'], answer: 1, explain: '补充说明宾语 him，是<b>宾语补足语</b>。' }
        ] },
      { title: '并列句与句子种类', content: '并列句用 and / but / or / so 连接两个独立分句。\n句子按用途分为：陈述句、疑问句、祈使句、感叹句。',
        examples: [ { en: 'I like tea but he likes coffee.', cn: '我喜欢茶，但他喜欢咖啡。' } ],
        quiz: [
          { q: 'I like tea ___ he likes coffee.', options: ['and', 'but', 'or', 'so'], answer: 1, explain: '前后意思转折，用 <b>but</b>。' },
          { q: 'Which is a 祈使句 (imperative)?', options: ['He runs.', 'Stop!', 'What is this?', 'How tall!'], answer: 1, explain: '<b>Stop!</b> 表示命令/请求，是祈使句。' }
        ] }
    ]
  },

  /* 8. 动词 */
  verbs: {
    id: 'verbs', icon: '🎯', title: '动词', diff: '核心', level: 3,
    intro: '句子的发动机！系动词、助动词、实义动词，火宝宝区分「谁在干活、谁在帮忙」～',
    sections: [
      { title: '系动词', content: '后接表语，说明主语状态或特征。\n常见：be, look(看起来), sound(听起来), feel(感觉), smell(闻起来), become(变得), get(变得)',
        examples: [ { en: 'She looks happy.', cn: '她看起来很开心。' } ],
        quiz: [
          { q: 'She ___ happy.', options: ['looks', 'looks like', 'look', 'looking'], answer: 0, explain: '系动词 look 后接形容词，三单 <b>looks</b>。' },
          { q: 'The soup ___ good.', options: ['smells', 'smells like', 'smell', 'smelling'], answer: 0, explain: '系动词 smell 后接形容词 <b>smells</b>。' }
        ] },
      { title: '助动词', content: 'do/does/did 帮助构成疑问与否定；\nbe 帮助构成进行时和被动语态；\nhave/has 帮助构成完成时态。',
        examples: [ { en: 'Does she go to school?', cn: '她去上学吗？' } ],
        quiz: [
          { q: '___ she go to school?', options: ['Do', 'Does', 'Did', 'Is'], answer: 1, explain: '三单主语疑问用 <b>Does</b>。' },
          { q: 'He ___ finished his homework.', options: ['has', 'have', 'is', 'does'], answer: 0, explain: '现在完成时助动词用 <b>has/have</b>。' }
        ] },
      { title: '实义动词', content: '有实际词义，表示动作或状态。\n分及物动词(带宾语)与不及物动词(不带宾语)。',
        examples: [ { en: 'He eats an apple.', cn: '他吃一个苹果。(及物)' }, { en: 'Birds fly.', cn: '鸟会飞。(不及物)' } ],
        quiz: [
          { q: 'Birds ___.', options: ['fly', 'flies', 'flying', 'flew'], answer: 0, explain: '复数主语 + 不及物 <b>fly</b>。' },
          { q: 'He ___ an apple.', options: ['eat', 'eats', 'eating', 'eaten'], answer: 1, explain: '三单及物动词 <b>eats</b>。' }
        ] }
    ]
  },

  /* 9. 非谓语动词 */
  nonfinite: {
    id: 'nonfinite', icon: '🔁', title: '非谓语动词', diff: '高级', level: 5,
    intro: '动词不「做谓语」时干嘛？不定式、动名词、分词，火宝宝讲清「动词的第二种活法」～',
    sections: [
      { title: '不定式 to do', content: '可作主语、宾语、定语、目的状语。\nIt is important to study. / I want to sleep.',
        examples: [ { en: 'He came to help me.', cn: '他来帮我。(目的状语)' } ],
        quiz: [
          { q: 'He came ___ me.', options: ['help', 'to help', 'helping', 'helped'], answer: 1, explain: '表目的用不定式 <b>to help</b>。' },
          { q: 'I want ___ sleep.', options: ['to', '（不填）', 'sleeping', 'slept'], answer: 0, explain: 'want to do，用 <b>to</b>。' }
        ] },
      { title: '动名词 doing', content: '动词性名词，作主语或宾语。\nSwimming is fun. / I enjoy reading.',
        examples: [ { en: 'Reading books is my hobby.', cn: '读书是我的爱好。' } ],
        quiz: [
          { q: 'I enjoy ___ books.', options: ['read', 'to read', 'reading', 'reads'], answer: 2, explain: 'enjoy doing，用 <b>reading</b>。' },
          { q: '___ is fun.', options: ['Swim', 'To swim', 'Swimming', 'Swims'], answer: 2, explain: '动名词作主语 <b>Swimming</b>。' }
        ] },
      { title: '分词', content: '现在分词(doing)表主动、进行；\n过去分词(done)表被动、完成。',
        examples: [ { en: 'The broken window was fixed.', cn: '破了的窗户被修好了。(过去分词作定语)' } ],
        quiz: [
          { q: 'The ___ window was fixed.', options: ['break', 'breaking', 'broken', 'broke'], answer: 2, explain: '过去分词 <b>broken</b> 表被动、完成。' },
          { q: 'The ___ girl is my sister.', options: ['smile', 'smiling', 'smiled', 'smiles'], answer: 1, explain: '现在分词 <b>smiling</b> 表主动、进行。' }
        ] }
    ]
  },

  /* 10. 形容词与副词 */
  adjadv: {
    id: 'adjadv', icon: '🎨', title: '形容词与副词', diff: '基础', level: 2,
    intro: '形容词妆扮名词，副词修饰动作！火宝宝教你「什么样的词放在哪」～',
    sections: [
      { title: '形容词', content: '修饰名词，通常前置：a big house / an interesting book。\n比较级 -er / more，最高级 -est / most。',
        examples: [ { en: 'She is a beautiful girl.', cn: '她是个漂亮的女孩。' } ],
        quiz: [
          { q: 'She is a ___ girl.', options: ['beautiful', 'beautifully', 'beauty', 'more beautiful'], answer: 0, explain: '修饰名词用形容词 <b>beautiful</b>。' },
          { q: 'This is an ___ book.', options: ['interest', 'interesting', 'interested', 'interests'], answer: 1, explain: '修饰物用 <b>interesting</b>（令人感兴趣的）。' }
        ] },
      { title: '副词', content: '修饰动词、形容词或其他副词，表方式、时间、地点、程度。\nquickly, very, here, yesterday',
        examples: [ { en: 'He runs fast.', cn: '他跑得快。' } ],
        quiz: [
          { q: 'He runs ___.', options: ['fast', 'fastly', 'quick', 'faster'], answer: 0, explain: '修饰动词用副词，fast 本身可作副词 <b>fast</b>。' },
          { q: 'She sings ___.', options: ['good', 'well', 'better', 'best'], answer: 1, explain: '修饰动词用副词 <b>well</b>（good 的副词）。' }
        ] },
      { title: '比较等级', content: '原级 → 比较级 → 最高级\n• 单音节：fast → faster → fastest\n• 多音节：beautiful → more beautiful → most beautiful',
        examples: [ { en: 'She sings better than me.', cn: '她唱得比我好。' } ],
        quiz: [
          { q: 'She sings ___ than me.', options: ['good', 'well', 'better', 'best'], answer: 2, explain: '两者比较用比较级 <b>better</b>。' },
          { q: 'This is the ___ book I\'ve read.', options: ['interesting', 'more interesting', 'most interesting', 'interested'], answer: 2, explain: '三者以上最高级，多音节用 <b>most interesting</b>。' }
        ] }
    ]
  },

  /* 11. 名词 */
  nouns: {
    id: 'nouns', icon: '📦', title: '名词', diff: '基础', level: 2,
    intro: '万物之名！可数不可数、复数变化、所有格，火宝宝帮你数清楚～',
    sections: [
      { title: '可数与不可数', content: '可数名词有单复数(chair → chairs)；\n不可数名词无复数，表数量用 a piece of / two cups of 等。',
        examples: [ { en: 'I have two books.', cn: '我有两本书。' }, { en: 'I need some water.', cn: '我需要一些水。(不可数)' } ],
        quiz: [
          { q: 'I need some ___.', options: ['water', 'book', 'apple', 'chair'], answer: 0, explain: 'water 是不可数名词。' },
          { q: 'There are two ___ on the desk.', options: ['book', 'books', 'water', 'milks'], answer: 1, explain: '可数名词复数 <b>books</b>。' }
        ] },
      { title: '所有格', content: '有生命名词加 \'s：Tom\'s book；\n无生命用 of：the door of the room',
        examples: [ { en: 'This is my mother\'s bag.', cn: '这是我妈妈的包。' } ],
        quiz: [
          { q: 'This is ___ bag.', options: ['Tom', 'Tom\'s', 'Toms', 'Toms\''], answer: 1, explain: '有生命名词所有格加 <b>Tom\'s</b>。' },
          { q: 'the door ___ the room', options: ['of', '\'s', 'for', 'to'], answer: 0, explain: '无生命用 <b>of</b>：the door of the room。' }
        ] }
    ]
  },

  /* 12. 介词 */
  prepositions: {
    id: 'prepositions', icon: '🧩', title: '介词', diff: '基础', level: 2,
    intro: '小词大用处！时间、方位、方式介词，火宝宝用一张图帮你记牢～',
    sections: [
      { title: '时间介词', content: 'in + 年/月/季节；on + 具体某天；at + 时刻/年龄。\nin 2024, on Monday, at 7 o\'clock',
        examples: [ { en: 'The party is on Sunday.', cn: '聚会在周日。' } ],
        quiz: [
          { q: 'The party is ___ Sunday.', options: ['in', 'on', 'at', '（不填）'], answer: 1, explain: '具体某天用 <b>on</b>。' },
          { q: 'Class begins ___ 7 o\'clock.', options: ['in', 'on', 'at', 'for'], answer: 2, explain: '具体时刻用 <b>at</b>。' }
        ] },
      { title: '方位与其他', content: 'in 在…里 / on 在…上 / under 在…下；\nwith 和、用；for 为了；by 被、乘；from 从',
        examples: [ { en: 'The cat is under the table.', cn: '猫在桌子下面。' } ],
        quiz: [
          { q: 'The cat is ___ the table.', options: ['in', 'on', 'under', 'with'], answer: 2, explain: '在…下面用 <b>under</b>。' },
          { q: 'He goes to school ___ bus.', options: ['by', 'with', 'on', 'in'], answer: 0, explain: '乘交通工具用 <b>by</b>。' }
        ] }
    ]
  },

  /* 13. 数词 */
  numerals: {
    id: 'numerals', icon: '🔢', title: '数词', diff: '基础', level: 2,
    intro: '数出顺序！基数词表数量、序数词表顺序，火宝宝带你读编号和日期～',
    sections: [
      { title: '基数词与序数词', content: '基数词表数量(one, two, three)；\n序数词表顺序(first, second, third)，前常加 the。',
        examples: [ { en: 'He is the first student.', cn: '他是第一个学生。' } ],
        quiz: [
          { q: 'He is the ___ student to come.', options: ['one', 'first', 'once', 'only'], answer: 1, explain: '表顺序用序数词 <b>first</b>。' },
          { q: 'There are ___ apples on the table.', options: ['three', 'third', 'the three', 'threes'], answer: 0, explain: '表数量用基数词 <b>three</b>。' }
        ] },
      { title: '常见表达', content: '编号：Room 305；年份：in 2024；分数：one third (1/3)',
        examples: [ { en: 'My birthday is on May 1st.', cn: '我的生日在5月1日。' } ],
        quiz: [
          { q: 'My birthday is on May ___.', options: ['one', 'first', '1st', 'on'], answer: 2, explain: '日期用序数词缩写 <b>1st</b>。' },
          { q: 'We live in ___.', options: ['Room 305', '305 Room', 'the 305 room', 'room 305th'], answer: 0, explain: '编号表达 <b>Room 305</b>。' }
        ] }
    ]
  }

};
