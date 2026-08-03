/**
 * 雅思(IELTS)专项学习数据
 * 包含：词汇(分主题) / 口语(Part1·2·3) / 写作(Task1·2) / 评分标准
 * 全部为离线内置内容，无需联网。
 */

// ==================== 1. 雅思词汇（分主题） ====================
const IELTS_VOCAB = [
  {
    topic: '教育', icon: '🎓',
    words: [
      { word: 'curriculum', phonetic: '/kəˈrɪkjələm/', pos: 'n.', meaning: '课程（总称）', example: 'The school revised its curriculum to include more STEM courses.', exampleCn: '学校修订了课程，加入更多理工类科目。' },
      { word: 'literacy', phonetic: '/ˈlɪtərəsi/', pos: 'n.', meaning: '读写能力', example: 'Digital literacy is essential in modern society.', exampleCn: '数字素养在现代社会必不可少。' },
      { word: 'acquire', phonetic: '/əˈkwaɪə(r)/', pos: 'v.', meaning: '获得，习得', example: 'Children acquire language skills rapidly.', exampleCn: '儿童能快速习得语言技能。' },
      { word: 'compulsory', phonetic: '/kəmˈpʌlsəri/', pos: 'adj.', meaning: '必修的；强制的', example: 'Education is compulsory for children aged 6 to 15.', exampleCn: '6至15岁儿童接受教育是强制性的。' },
      { word: 'tuition', phonetic: '/tjuˈɪʃn/', pos: 'n.', meaning: '学费；讲授', example: 'Rising tuition fees worry many students.', exampleCn: '不断上涨的学费让许多学生担忧。' },
      { word: 'dropout', phonetic: '/ˈdrɒpaʊt/', pos: 'n.', meaning: '辍学者', example: 'The dropout rate fell after the reform.', exampleCn: '改革后辍学率下降了。' },
      { word: 'pedagogy', phonetic: '/ˈpedəɡɒdʒi/', pos: 'n.', meaning: '教学法', example: 'Modern pedagogy emphasizes active learning.', exampleCn: '现代教学法强调主动学习。' },
      { word: 'assessment', phonetic: '/əˈsesmənt/', pos: 'n.', meaning: '评估；考核', example: 'Continuous assessment reduces exam pressure.', exampleCn: '持续性评估减轻了考试压力。' }
    ]
  },
  {
    topic: '环境', icon: '🌿',
    words: [
      { word: 'sustainable', phonetic: '/səˈsteɪnəbl/', pos: 'adj.', meaning: '可持续的', example: 'We need sustainable development.', exampleCn: '我们需要可持续发展。' },
      { word: 'emissions', phonetic: '/iˈmɪʃnz/', pos: 'n.', meaning: '排放（物）', example: 'Carbon emissions must be cut sharply.', exampleCn: '必须大幅削减碳排放。' },
      { word: 'conserve', phonetic: '/kənˈsɜːv/', pos: 'v.', meaning: '保护；节约', example: 'We should conserve natural resources.', exampleCn: '我们应保护自然资源。' },
      { word: 'ecosystem', phonetic: '/ˈiːkəʊsɪstəm/', pos: 'n.', meaning: '生态系统', example: 'Pollution damages the local ecosystem.', exampleCn: '污染破坏了当地生态系统。' },
      { word: 'renewable', phonetic: '/rɪˈnjuːəbl/', pos: 'adj.', meaning: '可再生的', example: 'Renewable energy includes solar and wind.', exampleCn: '可再生能源包括太阳能和风能。' },
      { word: 'depletion', phonetic: '/dɪˈpliːʃn/', pos: 'n.', meaning: '耗尽；枯竭', example: 'Resource depletion is a global threat.', exampleCn: '资源枯竭是全球性威胁。' },
      { word: 'pollution', phonetic: '/pəˈluːʃn/', pos: 'n.', meaning: '污染', example: 'Air pollution harms public health.', exampleCn: '空气污染危害公共健康。' },
      { word: 'degrade', phonetic: '/dɪˈɡreɪd/', pos: 'v.', meaning: '退化；降解', example: 'Plastic degrades very slowly.', exampleCn: '塑料降解非常缓慢。' }
    ]
  },
  {
    topic: '科技', icon: '💡',
    words: [
      { word: 'innovation', phonetic: '/ˌɪnəˈveɪʃn/', pos: 'n.', meaning: '创新', example: 'Technological innovation drives growth.', exampleCn: '科技创新推动增长。' },
      { word: 'automate', phonetic: '/ˈɔːtəmeɪt/', pos: 'v.', meaning: '使自动化', example: 'Factories automate production lines.', exampleCn: '工厂使生产线自动化。' },
      { word: 'digital', phonetic: '/ˈdɪdʒɪtl/', pos: 'adj.', meaning: '数字的', example: 'The world is becoming digital.', exampleCn: '世界正变得数字化。' },
      { word: 'obsolete', phonetic: '/ˈɒbsəliːt/', pos: 'adj.', meaning: '过时的', example: 'Old skills may become obsolete.', exampleCn: '旧技能可能变得过时。' },
      { word: 'breakthrough', phonetic: '/ˈbreɪkθruː/', pos: 'n.', meaning: '突破', example: 'The discovery was a major breakthrough.', exampleCn: '这一发现是重大突破。' },
      { word: 'artificial', phonetic: '/ˌɑːtɪˈfɪʃl/', pos: 'adj.', meaning: '人工的；人造的', example: 'Artificial intelligence is advancing fast.', exampleCn: '人工智能正在快速发展。' },
      { word: 'facilitate', phonetic: '/fəˈsɪlɪteɪt/', pos: 'v.', meaning: '促进；使便利', example: 'The app facilitates communication.', exampleCn: '这款应用促进了沟通。' },
      { word: 'cyber', phonetic: '/ˈsaɪbə(r)/', pos: 'adj.', meaning: '网络的；网络的', example: 'Cyber security is a top priority.', exampleCn: '网络安全是首要任务。' }
    ]
  },
  {
    topic: '健康', icon: '🩺',
    words: [
      { word: 'epidemic', phonetic: '/ˌepɪˈdemɪk/', pos: 'n.', meaning: '流行病', example: 'The epidemic spread quickly.', exampleCn: '这场流行病迅速蔓延。' },
      { word: 'obesity', phonetic: '/əʊˈbiːsəti/', pos: 'n.', meaning: '肥胖（症）', example: 'Childhood obesity is rising.', exampleCn: '儿童肥胖率在上升。' },
      { word: 'sedentary', phonetic: '/ˈsedntri/', pos: 'adj.', meaning: '久坐的', example: 'A sedentary lifestyle is unhealthy.', exampleCn: '久坐的生活方式不健康。' },
      { word: 'nutritious', phonetic: '/njuˈtrɪʃəs/', pos: 'adj.', meaning: '有营养的', example: 'Eat a nutritious diet daily.', exampleCn: '每天摄入有营养的饮食。' },
      { word: 'preventative', phonetic: '/prɪˈventətɪv/', pos: 'adj.', meaning: '预防性的', example: 'Preventative care saves lives.', exampleCn: '预防性照护能挽救生命。' },
      { word: 'therapy', phonetic: '/ˈθerəpi/', pos: 'n.', meaning: '治疗；疗法', example: 'Physical therapy helped recovery.', exampleCn: '物理疗法帮助了康复。' },
      { word: 'mortality', phonetic: '/mɔːˈtæləti/', pos: 'n.', meaning: '死亡率', example: 'Mortality fell with better care.', exampleCn: '随着照护改善，死亡率下降。' },
      { word: 'hygiene', phonetic: '/ˈhaɪdʒiːn/', pos: 'n.', meaning: '卫生', example: 'Good hygiene prevents disease.', exampleCn: '良好卫生能预防疾病。' }
    ]
  },
  {
    topic: '政府与社会', icon: '🏛️',
    words: [
      { word: 'policy', phonetic: '/ˈpɒləsi/', pos: 'n.', meaning: '政策', example: 'The government announced a new policy.', exampleCn: '政府宣布了一项新政策。' },
      { word: 'allocate', phonetic: '/ˈæləkeɪt/', pos: 'v.', meaning: '分配', example: 'Funds were allocated to education.', exampleCn: '资金被分配给教育。' },
      { word: 'legislation', phonetic: '/ˌledʒɪsˈleɪʃn/', pos: 'n.', meaning: '立法', example: 'New legislation protects workers.', exampleCn: '新立法保护劳动者。' },
      { word: 'infrastructure', phonetic: '/ˈɪnfrəstrʌktʃə(r)/', pos: 'n.', meaning: '基础设施', example: 'Infrastructure needs investment.', exampleCn: '基础设施需要投资。' },
      { word: 'reform', phonetic: '/rɪˈfɔːm/', pos: 'v./n.', meaning: '改革', example: 'They plan to reform the system.', exampleCn: '他们计划改革该体系。' },
      { word: 'welfare', phonetic: '/ˈwelfeə(r)/', pos: 'n.', meaning: '福利', example: 'Social welfare supports the poor.', exampleCn: '社会福利救助贫困人群。' },
      { word: 'taxation', phonetic: '/tækˈseɪʃn/', pos: 'n.', meaning: '税收', example: 'Higher taxation funds services.', exampleCn: '更高的税收为公共服务提供资金。' },
      { word: 'demographic', phonetic: '/ˌdeməˈɡræfɪk/', pos: 'adj.', meaning: '人口的', example: 'Demographic change affects pensions.', exampleCn: '人口结构变化影响养老金。' }
    ]
  },
  {
    topic: '媒体', icon: '📺',
    words: [
      { word: 'broadcast', phonetic: '/ˈbrɔːdkɑːst/', pos: 'v./n.', meaning: '广播；播送', example: 'The news was broadcast live.', exampleCn: '这则新闻被现场直播。' },
      { word: 'coverage', phonetic: '/ˈkʌvərɪdʒ/', pos: 'n.', meaning: '报道；覆盖范围', example: 'Media coverage was extensive.', exampleCn: '媒体报道十分广泛。' },
      { word: 'biased', phonetic: '/ˈbaɪəst/', pos: 'adj.', meaning: '有偏见的', example: 'Some reports are biased.', exampleCn: '一些报道带有偏见。' },
      { word: 'censorship', phonetic: '/ˈsensəʃɪp/', pos: 'n.', meaning: '审查（制度）', example: 'Censorship limits free speech.', exampleCn: '审查制度限制了言论自由。' },
      { word: 'sensational', phonetic: '/senˈseɪʃənl/', pos: 'adj.', meaning: '耸人听闻的', example: 'Sensational headlines attract clicks.', exampleCn: '耸人听闻的标题吸引点击。' },
      { word: 'exposure', phonetic: '/ɪkˈspəʊʒə(r)/', pos: 'n.', meaning: '接触；曝光', example: 'Exposure to ads shapes opinions.', exampleCn: '接触广告会塑造观点。' },
      { word: 'platform', phonetic: '/ˈplætfɔːm/', pos: 'n.', meaning: '平台', example: 'Social platforms spread news fast.', exampleCn: '社交平台快速传播新闻。' },
      { word: 'influence', phonetic: '/ˈɪnfluəns/', pos: 'n./v.', meaning: '影响', example: 'Media influences public views.', exampleCn: '媒体影响公众看法。' }
    ]
  },
  {
    topic: '工作与职业', icon: '💼',
    words: [
      { word: 'recruit', phonetic: '/rɪˈkruːt/', pos: 'v.', meaning: '招聘；招募', example: 'Firms recruit skilled staff.', exampleCn: '公司招聘熟练员工。' },
      { word: 'profession', phonetic: '/prəˈfeʃn/', pos: 'n.', meaning: '职业；专业', example: 'Teaching is a respected profession.', exampleCn: '教师是受尊敬的职业。' },
      { word: 'salary', phonetic: '/ˈsæləri/', pos: 'n.', meaning: '薪水', example: 'Salaries vary by region.', exampleCn: '薪水因地区而异。' },
      { word: 'promotion', phonetic: '/prəˈməʊʃn/', pos: 'n.', meaning: '晋升', example: 'Hard work leads to promotion.', exampleCn: '努力工作是晋升的途径。' },
      { word: 'redundancy', phonetic: '/rɪˈdʌndənsi/', pos: 'n.', meaning: '裁员；冗余', example: 'Redundancy worries workers.', exampleCn: '裁员让工人担忧。' },
      { word: 'entrepreneur', phonetic: '/ˌɒntrəprəˈnɜː(r)/', pos: 'n.', meaning: '企业家', example: 'An entrepreneur starts businesses.', exampleCn: '企业家创办企业。' },
      { word: 'qualify', phonetic: '/ˈkwɒlɪfaɪ/', pos: 'v.', meaning: '使合格；胜任', example: 'She qualified as a doctor.', exampleCn: '她取得了医生资格。' },
      { word: 'workload', phonetic: '/ˈwɜːkləʊd/', pos: 'n.', meaning: '工作量', example: 'A heavy workload causes stress.', exampleCn: '繁重的工作量导致压力。' }
    ]
  },
  {
    topic: '文化与传统', icon: '🏮',
    words: [
      { word: 'heritage', phonetic: '/ˈherɪtɪdʒ/', pos: 'n.', meaning: '遗产；传统', example: 'We must protect cultural heritage.', exampleCn: '我们必须保护文化遗产。' },
      { word: 'tradition', phonetic: '/trəˈdɪʃn/', pos: 'n.', meaning: '传统', example: 'Festivals reflect local traditions.', exampleCn: '节日反映地方传统。' },
      { word: 'multicultural', phonetic: '/ˌmʌltiˈkʌltʃərəl/', pos: 'adj.', meaning: '多元文化的', example: 'Cities are increasingly multicultural.', exampleCn: '城市日益多元化。' },
      { word: 'identity', phonetic: '/aɪˈdentəti/', pos: 'n.', meaning: '身份；认同', example: 'Language shapes national identity.', exampleCn: '语言塑造国家认同。' },
      { word: 'indigenous', phonetic: '/ɪnˈdɪdʒənəs/', pos: 'adj.', meaning: '本土的；土著的', example: 'Indigenous cultures need respect.', exampleCn: '本土文化需要被尊重。' },
      { word: 'customs', phonetic: '/ˈkʌstəmz/', pos: 'n.', meaning: '习俗', example: 'Local customs differ widely.', exampleCn: '地方习俗差异很大。' },
      { word: 'assimilation', phonetic: '/əˌsɪməˈleɪʃn/', pos: 'n.', meaning: '同化', example: 'Assimilation can erase uniqueness.', exampleCn: '同化可能抹去独特性。' },
      { word: 'celebrate', phonetic: '/ˈselɪbreɪt/', pos: 'v.', meaning: '庆祝', example: 'People celebrate the festival.', exampleCn: '人们庆祝这个节日。' }
    ]
  },
  {
    topic: '城市与交通', icon: '🚇',
    words: [
      { word: 'congestion', phonetic: '/kənˈdʒestʃən/', pos: 'n.', meaning: '拥堵', example: 'Traffic congestion wastes time.', exampleCn: '交通拥堵浪费时间。' },
      { word: 'commute', phonetic: '/kəˈmjuːt/', pos: 'v.', meaning: '通勤', example: 'Many commute long distances.', exampleCn: '许多人长距离通勤。' },
      { word: 'pedestrian', phonetic: '/pəˈdestriən/', pos: 'n.', meaning: '行人', example: 'Pedestrian zones improve safety.', exampleCn: '步行区提升了安全性。' },
      { word: 'metropolis', phonetic: '/məˈtrɒpəlɪs/', pos: 'n.', meaning: '大都市', example: 'A metropolis offers many jobs.', exampleCn: '大都市提供许多工作。' },
      { word: 'suburb', phonetic: '/ˈsʌbɜːb/', pos: 'n.', meaning: '郊区', example: 'Families often live in suburbs.', exampleCn: '家庭通常住在郊区。' },
      { word: 'accommodation', phonetic: '/əˌkɒməˈdeɪʃn/', pos: 'n.', meaning: '住宿；住所', example: 'Student accommodation is costly.', exampleCn: '学生住宿费用高昂。' },
      { word: 'residential', phonetic: '/ˌrezɪˈdenʃl/', pos: 'adj.', meaning: '住宅的', example: 'This is a residential area.', exampleCn: '这是一片住宅区。' },
      { word: 'transport', phonetic: '/trænˈspɔːt/', pos: 'n.', meaning: '交通；运输', example: 'Public transport reduces cars.', exampleCn: '公共交通减少了私家车。' }
    ]
  },
  {
    topic: '犯罪与法律', icon: '⚖️',
    words: [
      { word: 'offender', phonetic: '/əˈfendə(r)/', pos: 'n.', meaning: '违法者；罪犯', example: 'The offender received a warning.', exampleCn: '违法者受到了警告。' },
      { word: 'penalty', phonetic: '/ˈpenəlti/', pos: 'n.', meaning: '惩罚；处罚', example: 'The penalty is too lenient.', exampleCn: '处罚过于宽大。' },
      { word: 'rehabilitation', phonetic: '/ˌriːəˌbɪlɪˈteɪʃn/', pos: 'n.', meaning: '改造；康复', example: 'Rehabilitation helps offenders reform.', exampleCn: '改造帮助罪犯改过。' },
      { word: 'violate', phonetic: '/ˈvaɪəleɪt/', pos: 'v.', meaning: '违反；侵犯', example: 'He violated the law.', exampleCn: '他违反了法律。' },
      { word: 'juvenile', phonetic: '/ˈdʒuːvənaɪl/', pos: 'adj.', meaning: '青少年的', example: 'Juvenile crime needs care.', exampleCn: '青少年犯罪需要关怀。' },
      { word: 'prosecute', phonetic: '/ˈprɒsɪkjuːt/', pos: 'v.', meaning: '起诉', example: 'The state will prosecute him.', exampleCn: '国家将对他提起诉讼。' },
      { word: 'deter', phonetic: '/dɪˈtɜː(r)/', pos: 'v.', meaning: '威慑；阻止', example: 'Harsh laws deter crime.', exampleCn: '严厉的法律威慑犯罪。' },
      { word: 'incarceration', phonetic: '/ɪnˌkɑːsəˈreɪʃn/', pos: 'n.', meaning: '监禁', example: 'Incarceration is costly.', exampleCn: '监禁代价高昂。' }
    ]
  }
];

// ==================== 2. 雅思口语（Part 1 / 2 / 3） ====================
const IELTS_SPEAKING = {
  part1: [
    { topic: '家乡', q: 'Where is your hometown? Do you like living there?',
      sample: 'I come from a small coastal city in the south. I really enjoy living there because the pace of life is relaxing and the people are friendly.',
      tips: '用 2-3 句回答即可；可提到位置 + 喜欢/不喜欢的 1 个原因，避免只说 yes/no。' },
    { topic: '爱好', q: 'What do you usually do in your free time?',
      sample: 'In my spare time I like reading novels and jogging in the park. It helps me relax after a busy week.',
      tips: '给出具体活动 + 它带给你的感受/好处，让回答更自然。' },
    { topic: '食物', q: 'What is your favourite type of food?',
      sample: 'I am keen on spicy Sichuan cuisine. The rich flavours always make me feel energetic.',
      tips: '说出食物种类 + 为什么喜欢（味道/文化/回忆）。' },
    { topic: '工作/学习', q: 'Do you work or are you a student?',
      sample: 'I am currently a university student majoring in economics. I find the subject both challenging and rewarding.',
      tips: '简短说明身份 + 对该领域的 1 句评价。' },
    { topic: '天气', q: 'What is the weather usually like in your country?',
      sample: 'My country has four distinct seasons. Winters can be quite cold, while summers are hot and humid.',
      tips: '描述季节特点，可对比不同季节。' },
    { topic: '音乐', q: 'Do you like music? What kind?',
      sample: 'Yes, I listen to music every day. I prefer light jazz because it helps me concentrate.',
      tips: '明确喜好 + 类型 + 场景/作用。' },
    { topic: '旅行', q: 'Do you like travelling to new places?',
      sample: 'Absolutely. Exploring new cities broadens my horizons and gives me fresh perspectives.',
      tips: '用副词（absolutely/definitely）增强语气；补充旅行的价值。' },
    { topic: '科技', q: 'How often do you use social media?',
      sample: 'I check social media a few times a day, mainly to keep in touch with friends and follow the news.',
      tips: '给出频率 + 用途，避免泛泛而谈。' }
  ],
  part2: [
    { topic: '人物', q: 'Describe a person who has helped you a lot.',
      sample: 'I would like to talk about my high-school teacher, Ms. Li. She not only tutored me in maths but also encouraged me when I felt down. Her patience and kindness made a lasting impact on me.',
      tips: '按"是谁→做了什么→为什么重要"展开；用具体事例支撑，控制在近 2 分钟。' },
    { topic: '地点', q: 'Describe a place you would like to visit.',
      sample: 'I have always wanted to visit Kyoto in Japan. It is famous for its ancient temples and beautiful gardens. I believe the peaceful atmosphere would be a perfect escape from city life.',
      tips: '说明地点 + 原因（风景/文化/个人期待），用到感官描写词。' },
    { topic: '物品', q: 'Describe an app you use frequently.',
      sample: 'The app I use most is a language-learning tool. It offers short daily lessons and tracks my progress. It has become part of my routine and greatly improved my vocabulary.',
      tips: '讲清是什么 + 功能 + 它如何影响你的生活。' },
    { topic: '事件', q: 'Describe a memorable event in your life.',
      sample: 'A truly memorable event was my graduation ceremony. Seeing my family in the audience made me realise how much their support meant to me.',
      tips: '叙述事件经过 + 你的感受/意义，情绪词能让回答更生动。' },
    { topic: '技能', q: 'Describe a skill you want to learn.',
      sample: 'I hope to learn how to play the piano. Music has always attracted me, and I think it would be a wonderful way to express myself.',
      tips: '说出技能 + 动机 + 你预期的好处。' },
    { topic: '书籍', q: 'Describe a book that influenced you.',
      sample: 'The book that influenced me most is "Sapiens". It changed the way I see human history and made me think deeply about our future.',
      tips: '书名 + 核心观点 + 对你的具体影响。' }
  ],
  part3: [
    { topic: '文化', q: 'Why is it important to preserve local traditions?',
      sample: 'Preserving traditions helps people keep a sense of identity and strengthens social bonds. Without them, local cultures may disappear under globalisation.',
      tips: '从"身份认同/社会凝聚/文化多样性"角度展开，使用因果连接词。' },
    { topic: '科技', q: 'How has technology changed communication?',
      sample: 'Technology makes communication instant and borderless, yet some argue it reduces face-to-face interaction and deepens isolation.',
      tips: '用对比结构（好处 vs 隐忧），展现批判性思维。' },
    { topic: '交通', q: 'Should governments invest more in public transport?',
      sample: 'Yes. Better public transport eases congestion, cuts emissions and benefits all citizens, especially those without cars.',
      tips: '明确立场 + 2-3 个分论点，每个配简短解释。' },
    { topic: '教育', q: 'What makes a good teacher?',
      sample: 'A good teacher is both knowledgeable and patient. More importantly, they inspire students and adapt to different learning needs.',
      tips: '用 "not only... but also..." 提升句式多样性。' }
  ]
};

// ==================== 3. 雅思写作（Task 1 / Task 2） ====================
const IELTS_WRITING = {
  task1: {
    title: 'Task 1 · 图表题（学术类）',
    intro: '用约 150 词描述图表/流程/地图的主要特征与趋势。不发表个人观点。',
    structure: [
      '引言段（Introduction）：改写题目，说明图表类型与主题。',
      '总览段（Overview）：概括最显著的两三个特征（最高/最低/总体趋势），不列数据。',
      '细节段 1：按逻辑分组描述数据（如时间/类别），用具体数字支撑。',
      '细节段 2：补充对比或剩余关键信息，必要时与概述呼应。'
    ],
    verbs: ['increase 上升', 'rise 上涨', 'climb 攀升', 'decline 下降', 'fall 跌落', 'drop 降低', 'fluctuate 波动', 'plateau 趋于平稳', 'peak 达到峰值', 'remain stable 保持稳定'],
    adverbs: ['sharply 急剧地', 'steeply 陡然', 'significantly 显著地', 'gradually 逐渐', 'steadily 稳步', 'slightly 略微', 'dramatically 剧烈'],
    frames: [
      'The chart illustrates / shows / compares ...',
      'Overall, it is clear that ...',
      'A noticeable trend is that ...',
      'X increased from A to B over the period.',
      'By contrast, Y experienced a downward trend.',
      'The proportion of ... was the highest, at ...%'
    ]
  },
  task2: {
    title: 'Task 2 · 议论文（约 250 词）',
    intro: '就一个观点/问题发表看法，要求立场清晰、论证充分、结构完整。',
    types: [
      'Opinion（同意/不同意）：明确立场。',
      'Discussion（讨论双方）：客观呈现两方后再给结论。',
      'Advantages & Disadvantages（利弊）：各写一段，结尾权衡。',
      'Problem & Solution（问题/解决）：描述问题 + 提出对策。'
    ],
    structure: [
      '引言段：背景 + 改写题目 + 明确立场/概述。',
      '主体段 1：第一个论点 + 解释 + 例子。',
      '主体段 2：第二个论点（或反方） + 解释 + 例子。',
      '结论段：重申立场，升华（不要提出新观点）。'
    ],
    starters: [
      'It is widely believed that ...',
      'From my perspective, ...',
      'There are several reasons for this.',
      'A good illustration is ...',
      'On the one hand ... On the other hand ...',
      'In conclusion, I firmly believe that ...'
    ],
    links: ['Furthermore 此外', 'Moreover 而且', 'Nevertheless 然而', 'Therefore 因此', 'As a result 结果', 'In contrast 相反', 'For instance 例如', 'Consequently  Consequently Consequently']
  }
};

// 高分短语库（写作/口语通用）
const IELTS_PHRASES = [
  'a double-edged sword （某事）有利有弊',
  'play a pivotal role in ... 在……中起关键作用',
  'a growing body of evidence suggests ... 越来越多的证据表明',
  'take ... with a grain of salt 对……持保留态度',
  'strike a balance between A and B 在 A 与 B 间取得平衡',
  'pose a threat to ... 对……构成威胁',
  'yield tangible benefits 带来实实在在的好处',
  'from a holistic perspective 从整体角度看',
  'exert a profound impact on ... 对……产生深远影响',
  'be indicative of ... 表明/预示着……'
];

// ==================== 4. 评分标准 ====================
const IELTS_BANDS = {
  // 听读（学术类）原始正确数 → 分数（共 40 题）
  listeningReading: [
    { raw: '39-40', band: 9 }, { raw: '37-38', band: 8.5 }, { raw: '35-36', band: 8 },
    { raw: '32-34', band: 7.5 }, { raw: '30-31', band: 7 }, { raw: '26-29', band: 6.5 },
    { raw: '23-25', band: 6 }, { raw: '18-22', band: 5.5 }, { raw: '16-17', band: 5 },
    { raw: '13-15', band: 4.5 }
  ],
  // 口语/写作 各分数描述
  speaking: [
    { band: 9, desc: '表达流利自然，用词精准，语法几乎无误，衔接自如。' },
    { band: 8, desc: '流利，偶有重复；词汇丰富，少数错误不影响理解。' },
    { band: 7, desc: '表达较连贯，词汇基本够用，语法有少量错误。' },
    { band: 6, desc: '能维持表达，但停顿较多，词汇和语法有限。' },
    { band: 5, desc: '表达简短，常需停顿，仅能应付熟悉话题。' }
  ],
  writing: [
    { band: 9, desc: 'TR 充分 / CC 流畅 / LR 精准丰富 / GRA 几乎无错。' },
    { band: 8, desc: '论证充分，衔接好，用词准确，偶有 minor 错误。' },
    { band: 7, desc: '立场清晰，结构合理，词汇语法够用，少量错误。' },
    { band: 6, desc: '有立场但展开不足，衔接一般，错误较明显。' },
    { band: 5, desc: '偏题或论证薄弱，词汇语法错误较多。' }
  ],
  writingCriteria: [
    { code: 'TR', name: 'Task Response 任务回应', note: '是否切题、立场清晰、论证充分。' },
    { code: 'CC', name: 'Coherence & Cohesion 连贯衔接', note: '段落逻辑、连接词、指代清晰。' },
    { code: 'LR', name: 'Lexical Resource 词汇资源', note: '用词丰富度、准确性、搭配。' },
    { code: 'GRA', name: 'Grammatical Range & Accuracy 语法', note: '句式多样、语法准确。' }
  ]
};
