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
      { word: 'compulsory', phonetic: '/kəmˈpʌlsəri/', pos: 'adj.', meaning: '必修的；强制的', example: 'Education is compulsory for children aged six to fifteen.', exampleCn: '6至15岁儿童接受教育是强制性的。' },
      { word: 'tuition', phonetic: '/tjuˈɪʃn/', pos: 'n.', meaning: '学费；讲授', example: 'Rising tuition fees worry many students.', exampleCn: '不断上涨的学费让许多学生担忧。' },
      { word: 'dropout', phonetic: '/ˈdrɒpaʊt/', pos: 'n.', meaning: '辍学者', example: 'The dropout rate fell after the reform.', exampleCn: '改革后辍学率下降了。' },
      { word: 'pedagogy', phonetic: '/ˈpedəɡɒdʒi/', pos: 'n.', meaning: '教学法', example: 'Modern pedagogy emphasizes active learning.', exampleCn: '现代教学法强调主动学习。' },
      { word: 'assessment', phonetic: '/əˈsesmənt/', pos: 'n.', meaning: '评估；考核', example: 'Continuous assessment reduces exam pressure.', exampleCn: '持续性评估减轻了考试压力。' },
      { word: 'scholarship', phonetic: '/ˈskɒləʃɪp/', pos: 'n.', meaning: '奖学金', example: 'She won a scholarship to study abroad.', exampleCn: '她获得了出国留学的奖学金。' },
      { word: 'enrollment', phonetic: '/ɪnˈrəʊlmənt/', pos: 'n.', meaning: '注册；入学人数', example: 'Enrollment in the program increased this year.', exampleCn: '今年该项目的注册人数增加了。' },
      { word: 'faculty', phonetic: '/ˈfæklti/', pos: 'n.', meaning: '教职员工；院系', example: 'The faculty supported the new policy.', exampleCn: '全体教职员工支持新政策。' },
      { word: 'seminar', phonetic: '/ˈsemɪnɑː(r)/', pos: 'n.', meaning: '研讨课', example: 'We discussed the topic in a small seminar.', exampleCn: '我们在一节小班研讨课上讨论了该话题。' },
      { word: 'vocational', phonetic: '/vəʊˈkeɪʃənl/', pos: 'adj.', meaning: '职业的；技术的', example: 'Vocational training improves employability.', exampleCn: '职业培训提升了就业能力。' },
      { word: 'discipline', phonetic: '/ˈdɪsəplɪn/', pos: 'n.', meaning: '学科；纪律', example: 'Physics is a demanding discipline.', exampleCn: '物理学是一门要求很高的学科。' },
      { word: 'fluent', phonetic: '/ˈfluːənt/', pos: 'adj.', meaning: '流利的', example: 'He is fluent in three languages.', exampleCn: '他能流利使用三种语言。' },
    ]
  },
  {
    topic: '环境', icon: '🌱',
    words: [
      { word: 'sustainable', phonetic: '/səˈsteɪnəbl/', pos: 'adj.', meaning: '可持续的', example: 'We need sustainable development.', exampleCn: '我们需要可持续发展。' },
      { word: 'emissions', phonetic: '/iˈmɪʃnz/', pos: 'n.', meaning: '排放（物）', example: 'Carbon emissions must be cut sharply.', exampleCn: '必须大幅削减碳排放。' },
      { word: 'conserve', phonetic: '/kənˈsɜːv/', pos: 'v.', meaning: '保护；节约', example: 'We should conserve natural resources.', exampleCn: '我们应保护自然资源。' },
      { word: 'ecosystem', phonetic: '/ˈiːkəʊsɪstəm/', pos: 'n.', meaning: '生态系统', example: 'Pollution damages the local ecosystem.', exampleCn: '污染破坏了当地生态系统。' },
      { word: 'renewable', phonetic: '/rɪˈnjuːəbl/', pos: 'adj.', meaning: '可再生的', example: 'Renewable energy includes solar and wind.', exampleCn: '可再生能源包括太阳能和风能。' },
      { word: 'depletion', phonetic: '/dɪˈpliːʃn/', pos: 'n.', meaning: '耗尽；枯竭', example: 'Resource depletion is a global threat.', exampleCn: '资源枯竭是全球性威胁。' },
      { word: 'pollution', phonetic: '/pəˈluːʃn/', pos: 'n.', meaning: '污染', example: 'Air pollution harms public health.', exampleCn: '空气污染危害公共健康。' },
      { word: 'degrade', phonetic: '/dɪˈɡreɪd/', pos: 'v.', meaning: '退化；降解', example: 'Plastic degrades very slowly.', exampleCn: '塑料降解非常缓慢。' },
      { word: 'recycle', phonetic: '/riːˈsaɪkl/', pos: 'v.', meaning: '回收', example: 'Cities encourage citizens to recycle waste.', exampleCn: '城市鼓励市民回收废弃物。' },
      { word: 'biodiversity', phonetic: '/ˌbaɪəʊdaɪˈvɜːsəti/', pos: 'n.', meaning: '生物多样性', example: 'Biodiversity is vital for the planet.', exampleCn: '生物多样性对地球至关重要。' },
      { word: 'climate', phonetic: '/ˈklaɪmət/', pos: 'n.', meaning: '气候', example: 'Climate change affects every country.', exampleCn: '气候变化影响每个国家。' },
      { word: 'habitat', phonetic: '/ˈhæbɪtæt/', pos: 'n.', meaning: '栖息地', example: 'Deforestation destroys animal habitats.', exampleCn: '森林砍伐破坏了动物栖息地。' },
      { word: 'carbon', phonetic: '/ˈkɑːbən/', pos: 'n.', meaning: '碳', example: 'A carbon tax may reduce emissions.', exampleCn: '碳税或许能减少排放。' },
      { word: 'landfill', phonetic: '/ˈlændfɪl/', pos: 'n.', meaning: '垃圾填埋场', example: 'Too much waste ends up in landfills.', exampleCn: '过多垃圾最终进入填埋场。' },
      { word: 'conservation', phonetic: '/ˌkɒnsəˈveɪʃn/', pos: 'n.', meaning: '保护；保存', example: 'Wildlife conservation needs funding.', exampleCn: '野生动物保护需要资金。' },
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
      { word: 'cyber', phonetic: '/ˈsaɪbə(r)/', pos: 'adj.', meaning: '网络的；网络的', example: 'Cyber security is a top priority.', exampleCn: '网络安全是首要任务。' },
      { word: 'algorithm', phonetic: '/ˈælɡərɪðəm/', pos: 'n.', meaning: '算法', example: 'The algorithm recommends relevant content.', exampleCn: '该算法推荐相关内容。' },
      { word: 'network', phonetic: '/ˈnetwɜːk/', pos: 'n.', meaning: '网络', example: 'A fast network improves productivity.', exampleCn: '高速网络提升了效率。' },
      { word: 'device', phonetic: '/dɪˈvaɪs/', pos: 'n.', meaning: '设备', example: 'Smart devices are everywhere now.', exampleCn: '智能设备如今无处不在。' },
      { word: 'software', phonetic: '/ˈsɒftweə(r)/', pos: 'n.', meaning: '软件', example: 'The software simplifies daily tasks.', exampleCn: '这款软件简化了日常任务。' },
      { word: 'hardware', phonetic: '/ˈhɑːdweə(r)/', pos: 'n.', meaning: '硬件', example: 'The hardware needs an upgrade.', exampleCn: '这台硬件需要升级。' },
      { word: 'virtual', phonetic: '/ˈvɜːtʃuəl/', pos: 'adj.', meaning: '虚拟的', example: 'Virtual meetings save travel time.', exampleCn: '虚拟会议节省了通勤时间。' },
      { word: 'data', phonetic: '/ˈdeɪtə/', pos: 'n.', meaning: '数据', example: 'Big data shapes business decisions.', exampleCn: '大数据影响商业决策。' },
    ]
  },
  {
    topic: '健康', icon: '🏥',
    words: [
      { word: 'epidemic', phonetic: '/ˌepɪˈdemɪk/', pos: 'n.', meaning: '流行病', example: 'The epidemic spread quickly.', exampleCn: '这场流行病迅速蔓延。' },
      { word: 'obesity', phonetic: '/əʊˈbiːsəti/', pos: 'n.', meaning: '肥胖（症）', example: 'Childhood obesity is rising.', exampleCn: '儿童肥胖率在上升。' },
      { word: 'sedentary', phonetic: '/ˈsedntri/', pos: 'adj.', meaning: '久坐的', example: 'A sedentary lifestyle is unhealthy.', exampleCn: '久坐的生活方式不健康。' },
      { word: 'nutritious', phonetic: '/njuˈtrɪʃəs/', pos: 'adj.', meaning: '有营养的', example: 'Eat a nutritious diet daily.', exampleCn: '每天摄入有营养的饮食。' },
      { word: 'preventative', phonetic: '/prɪˈventətɪv/', pos: 'adj.', meaning: '预防性的', example: 'Preventative care saves lives.', exampleCn: '预防性照护能挽救生命。' },
      { word: 'therapy', phonetic: '/ˈθerəpi/', pos: 'n.', meaning: '治疗；疗法', example: 'Physical therapy helped recovery.', exampleCn: '物理疗法帮助了康复。' },
      { word: 'mortality', phonetic: '/mɔːˈtæləti/', pos: 'n.', meaning: '死亡率', example: 'Mortality fell with better care.', exampleCn: '随着照护改善，死亡率下降。' },
      { word: 'hygiene', phonetic: '/ˈhaɪdʒiːn/', pos: 'n.', meaning: '卫生', example: 'Good hygiene prevents disease.', exampleCn: '良好卫生能预防疾病。' },
      { word: 'chronic', phonetic: '/ˈkrɒnɪk/', pos: 'adj.', meaning: '慢性的', example: 'Chronic illness needs long care.', exampleCn: '慢性病需要长期照护。' },
      { word: 'mental', phonetic: '/ˈmentl/', pos: 'adj.', meaning: '心理的；精神的', example: 'Mental health matters as much as physical.', exampleCn: '心理健康与身体健康同样重要。' },
      { word: 'diagnose', phonetic: '/ˈdaɪəɡnəʊz/', pos: 'v.', meaning: '诊断', example: 'Doctors diagnosed the condition early.', exampleCn: '医生及早诊断了病情。' },
      { word: 'symptom', phonetic: '/ˈsɪmptəm/', pos: 'n.', meaning: '症状', example: 'A cough is a common symptom.', exampleCn: '咳嗽是常见症状。' },
      { word: 'surgery', phonetic: '/ˈsɜːdʒəri/', pos: 'n.', meaning: '外科手术', example: 'The patient recovered after surgery.', exampleCn: '病人术后康复了。' },
      { word: 'vaccine', phonetic: '/ˈvæksiːn/', pos: 'n.', meaning: '疫苗', example: 'The vaccine reduced infection rates.', exampleCn: '疫苗降低了感染率。' },
      { word: 'syndrome', phonetic: '/ˈsɪndrəʊm/', pos: 'n.', meaning: '综合征', example: 'The syndrome has clear signs.', exampleCn: '该综合征有清晰的症状。' },
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
      { word: 'demographic', phonetic: '/ˌdeməˈɡræfɪk/', pos: 'adj.', meaning: '人口的', example: 'Demographic change affects pensions.', exampleCn: '人口结构变化影响养老金。' },
      { word: 'governance', phonetic: '/ˈɡʌvənəns/', pos: 'n.', meaning: '治理', example: 'Good governance builds trust.', exampleCn: '良好治理建立信任。' },
      { word: 'parliament', phonetic: '/ˈpɑːləmənt/', pos: 'n.', meaning: '议会', example: 'Parliament passed the new law.', exampleCn: '议会通过了新法律。' },
      { word: 'subsidy', phonetic: '/ˈsʌbsədi/', pos: 'n.', meaning: '补贴', example: 'Farmers received a subsidy.', exampleCn: '农民获得了补贴。' },
      { word: 'budget', phonetic: '/ˈbʌdʒɪt/', pos: 'n.', meaning: '预算', example: 'The budget was approved last week.', exampleCn: '预算上周获批。' },
      { word: 'equality', phonetic: '/iˈkwɒləti/', pos: 'n.', meaning: '平等', example: 'Equality is a basic right.', exampleCn: '平等是一项基本权利。' },
      { word: 'civil', phonetic: '/ˈsɪvl/', pos: 'adj.', meaning: '公民的；民事的', example: 'Civil rights must be protected.', exampleCn: '公民权利必须被保护。' },
      { word: 'electorate', phonetic: '/ɪˈlektərət/', pos: 'n.', meaning: '选民', example: 'The electorate voted for change.', exampleCn: '选民投票要求变革。' },
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
      { word: 'influence', phonetic: '/ˈɪnfluəns/', pos: 'n./v.', meaning: '影响', example: 'Media influences public views.', exampleCn: '媒体影响公众看法。' },
      { word: 'journalist', phonetic: '/ˈdʒɜːnəlɪst/', pos: 'n.', meaning: '记者', example: 'A journalist reported the event.', exampleCn: '一名记者报道了该事件。' },
      { word: 'propaganda', phonetic: '/ˌprɒpəˈɡændə/', pos: 'n.', meaning: '宣传', example: 'Propaganda can mislead the public.', exampleCn: '宣传可能误导公众。' },
      { word: 'audience', phonetic: '/ˈɔːdiəns/', pos: 'n.', meaning: '受众；观众', example: 'The audience enjoyed the show.', exampleCn: '观众很喜欢这档节目。' },
      { word: 'headline', phonetic: '/ˈhedlaɪn/', pos: 'n.', meaning: '标题', example: 'The headline caught my attention.', exampleCn: '这个标题吸引了我的注意。' },
      { word: 'credibility', phonetic: '/ˌkredəˈbɪləti/', pos: 'n.', meaning: '可信度', example: 'The source lost its credibility.', exampleCn: '该信源失去了可信度。' },
      { word: 'viral', phonetic: '/ˈvaɪrəl/', pos: 'adj.', meaning: '病毒式传播的', example: 'The clip went viral online.', exampleCn: '这段视频在网上疯传。' },
      { word: 'endorse', phonetic: '/ɪnˈdɔːs/', pos: 'v.', meaning: '代言；认可', example: 'Celebrities endorse the brand.', exampleCn: '名人代言该品牌。' },
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
      { word: 'workload', phonetic: '/ˈwɜːkləʊd/', pos: 'n.', meaning: '工作量', example: 'A heavy workload causes stress.', exampleCn: '繁重的工作量导致压力。' },
      { word: 'colleague', phonetic: '/ˈkɒliːɡ/', pos: 'n.', meaning: '同事', example: 'My colleague helped with the task.', exampleCn: '我的同事协助完成了任务。' },
      { word: 'interview', phonetic: '/ˈɪntəvjuː/', pos: 'n.', meaning: '面试；访谈', example: 'He prepared well for the interview.', exampleCn: '他为面试做了充分准备。' },
      { word: 'intern', phonetic: '/ˈɪntɜːn/', pos: 'n.', meaning: '实习生', example: 'The intern joined the team.', exampleCn: '实习生加入了团队。' },
      { word: 'freelance', phonetic: '/ˈfriːlɑːns/', pos: 'adj.', meaning: '自由职业的', example: 'She works as a freelance writer.', exampleCn: '她是一名自由撰稿人。' },
      { word: 'pension', phonetic: '/ˈpenʃn/', pos: 'n.', meaning: '养老金', example: 'Workers contribute to a pension.', exampleCn: '劳动者缴纳养老金。' },
      { word: 'hierarchy', phonetic: '/ˈhaɪərɑːki/', pos: 'n.', meaning: '等级制度', example: 'The firm has a flat hierarchy.', exampleCn: '这家公司层级扁平。' },
      { word: 'resign', phonetic: '/rɪˈzaɪn/', pos: 'v.', meaning: '辞职', example: 'He resigned for a better role.', exampleCn: '他为更好的职位辞职。' },
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
      { word: 'celebrate', phonetic: '/ˈselɪbreɪt/', pos: 'v.', meaning: '庆祝', example: 'People celebrate the festival.', exampleCn: '人们庆祝这个节日。' },
      { word: 'folklore', phonetic: '/ˈfəʊklɔː(r)/', pos: 'n.', meaning: '民间传说', example: 'Folklore passes down old tales.', exampleCn: '民间传说流传着古老故事。' },
      { word: 'ritual', phonetic: '/ˈrɪtʃuəl/', pos: 'n.', meaning: '仪式', example: 'The ritual marks the new year.', exampleCn: '该仪式标志着新年的到来。' },
      { word: 'dialect', phonetic: '/ˈdaɪəlekt/', pos: 'n.', meaning: '方言', example: 'The region has its own dialect.', exampleCn: '该地区有自己的方言。' },
      { word: 'commemorate', phonetic: '/kəˈmeməreɪt/', pos: 'v.', meaning: '纪念', example: 'We commemorate the heroes.', exampleCn: '我们纪念那些英雄。' },
      { word: 'ethnicity', phonetic: '/eθˈnɪsəti/', pos: 'n.', meaning: '种族；民族', example: 'Ethnicity shapes one view.', exampleCn: '民族背景塑造人的观念。' },
      { word: 'diversity', phonetic: '/daɪˈvɜːsəti/', pos: 'n.', meaning: '多样性', example: 'Cultural diversity enriches society.', exampleCn: '文化多样性丰富社会。' },
      { word: 'norms', phonetic: '/nɔːmz/', pos: 'n.', meaning: '规范；准则', example: 'Social norms guide behavior.', exampleCn: '社会规范引导行为。' },
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
      { word: 'transport', phonetic: '/trænˈspɔːt/', pos: 'n.', meaning: '交通；运输', example: 'Public transport reduces cars.', exampleCn: '公共交通减少了私家车。' },
      { word: 'highway', phonetic: '/ˈhaɪweɪ/', pos: 'n.', meaning: '高速公路', example: 'The new highway eased traffic.', exampleCn: '新高速公路缓解了交通。' },
      { word: 'bicycle', phonetic: '/ˈbaɪsɪkl/', pos: 'n.', meaning: '自行车', example: 'Cycling cuts emissions.', exampleCn: '骑行能减少排放。' },
      { word: 'housing', phonetic: '/ˈhaʊzɪŋ/', pos: 'n.', meaning: '住房', example: 'Housing prices keep rising.', exampleCn: '房价持续上涨。' },
      { word: 'urban', phonetic: '/ˈɜːbən/', pos: 'adj.', meaning: '城市的', example: 'Urban life is fast paced.', exampleCn: '城市生活节奏快。' },
      { word: 'rural', phonetic: '/ˈrʊərəl/', pos: 'adj.', meaning: '农村的', example: 'Rural areas lack services.', exampleCn: '农村地区服务匮乏。' },
      { word: 'transit', phonetic: '/ˈtrænzɪt/', pos: 'n.', meaning: '公交系统；运输', example: 'Mass transit serves millions.', exampleCn: '公共交通系统服务数百万人。' },
      { word: 'density', phonetic: '/ˈdensəti/', pos: 'n.', meaning: '密度', example: 'Population density is high here.', exampleCn: '这里人口密度很高。' },
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
      { word: 'incarceration', phonetic: '/ɪnˌkɑːsəˈreɪʃn/', pos: 'n.', meaning: '监禁', example: 'Incarceration is costly.', exampleCn: '监禁代价高昂。' },
      { word: 'verdict', phonetic: '/ˈvɜːdɪkt/', pos: 'n.', meaning: '裁决；裁定', example: 'The jury reached a verdict.', exampleCn: '陪审团作出了裁决。' },
      { word: 'lawsuit', phonetic: '/ˈlɔːsuːt/', pos: 'n.', meaning: '诉讼', example: 'The lawsuit was settled.', exampleCn: '这起诉讼已和解。' },
      { word: 'witness', phonetic: '/ˈwɪtnəs/', pos: 'n.', meaning: '证人', example: 'A witness saw the event.', exampleCn: '一名证人目击了事件。' },
      { word: 'defendant', phonetic: '/dɪˈfendənt/', pos: 'n.', meaning: '被告', example: 'The defendant pleaded guilty.', exampleCn: '被告认罪了。' },
      { word: 'parole', phonetic: '/pəˈrəʊl/', pos: 'n.', meaning: '假释', example: 'He was released on parole.', exampleCn: '他获假释出狱。' },
      { word: 'sanction', phonetic: '/ˈsæŋkʃn/', pos: 'n.', meaning: '制裁；处罚', example: 'The nation faced trade sanctions.', exampleCn: '该国面临贸易制裁。' },
      { word: 'fraud', phonetic: '/frɔːd/', pos: 'n.', meaning: '欺诈', example: 'Online fraud is rising.', exampleCn: '网络欺诈在增加。' },
    ]
  },
  {
    topic: '经济与商业', icon: '💰',
    words: [
      { word: 'economy', phonetic: '/ɪˈkɒnəmi/', pos: 'n.', meaning: '经济', example: 'The economy is recovering.', exampleCn: '经济正在复苏。' },
      { word: 'market', phonetic: '/ˈmɑːkɪt/', pos: 'n.', meaning: '市场', example: 'The market reacted to the news.', exampleCn: '市场对该消息作出反应。' },
      { word: 'inflation', phonetic: '/ɪnˈfleɪʃn/', pos: 'n.', meaning: '通货膨胀', example: 'Inflation erodes purchasing power.', exampleCn: '通胀侵蚀购买力。' },
      { word: 'invest', phonetic: '/ɪnˈvest/', pos: 'v.', meaning: '投资', example: 'Firms invest in new tech.', exampleCn: '企业投资新技术。' },
      { word: 'revenue', phonetic: '/ˈrevənjuː/', pos: 'n.', meaning: '收入；营收', example: 'The company grew its revenue.', exampleCn: '公司增加了营收。' },
      { word: 'profit', phonetic: '/ˈprɒfɪt/', pos: 'n.', meaning: '利润', example: 'Higher sales mean more profit.', exampleCn: '更高的销量意味着更多利润。' },
      { word: 'consumer', phonetic: '/kənˈsjuːmə(r)/', pos: 'n.', meaning: '消费者', example: 'Consumer demand drives supply.', exampleCn: '消费者需求驱动供给。' },
      { word: 'demand', phonetic: '/dɪˈmɑːnd/', pos: 'n.', meaning: '需求', example: 'Demand exceeded supply.', exampleCn: '需求超过了供给。' },
      { word: 'supply', phonetic: '/səˈplaɪ/', pos: 'n.', meaning: '供给', example: 'The supply chain was disrupted.', exampleCn: '供应链受到了扰乱。' },
      { word: 'trade', phonetic: '/treɪd/', pos: 'n.', meaning: '贸易', example: 'International trade creates jobs.', exampleCn: '国际贸易创造就业。' },
      { word: 'tariff', phonetic: '/ˈtærɪf/', pos: 'n.', meaning: '关税', example: 'The tariff raised import costs.', exampleCn: '关税提高了进口成本。' },
      { word: 'monopoly', phonetic: '/məˈnɒpəli/', pos: 'n.', meaning: '垄断', example: 'A monopoly hurts consumers.', exampleCn: '垄断损害消费者。' },
      { word: 'competition', phonetic: '/ˌkɒmpəˈtɪʃn/', pos: 'n.', meaning: '竞争', example: 'Competition lowers prices.', exampleCn: '竞争降低价格。' },
      { word: 'currency', phonetic: '/ˈkʌrənsi/', pos: 'n.', meaning: '货币', example: 'The currency lost value.', exampleCn: '该货币贬值了。' },
      { word: 'bankruptcy', phonetic: '/ˈbæŋkrʌptsi/', pos: 'n.', meaning: '破产', example: 'The firm avoided bankruptcy.', exampleCn: '该公司避免了破产。' },
    ]
  },
  {
    topic: '家庭与关系', icon: '👪',
    words: [
      { word: 'household', phonetic: '/ˈhaʊshəʊld/', pos: 'n.', meaning: '家庭；住户', example: 'The household has three members.', exampleCn: '这个家庭有三位成员。' },
      { word: 'sibling', phonetic: '/ˈsɪblɪŋ/', pos: 'n.', meaning: '兄弟姐妹', example: 'She has one sibling.', exampleCn: '她有一个兄弟姐妹。' },
      { word: 'offspring', phonetic: '/ˈɒfsprɪŋ/', pos: 'n.', meaning: '后代；子女', example: 'Parents care for their offspring.', exampleCn: '父母照料自己的子女。' },
      { word: 'nurture', phonetic: '/ˈnɜːtʃə(r)/', pos: 'v.', meaning: '养育；培养', example: 'Parents nurture their children.', exampleCn: '父母养育孩子。' },
      { word: 'elderly', phonetic: '/ˈeldəli/', pos: 'adj.', meaning: '年长的', example: 'The elderly need support.', exampleCn: '老年人需要支持。' },
      { word: 'spouse', phonetic: '/spaʊs/', pos: 'n.', meaning: '配偶', example: 'His spouse works abroad.', exampleCn: '他的配偶在国外工作。' },
      { word: 'relative', phonetic: '/ˈrelətɪv/', pos: 'n.', meaning: '亲戚', example: 'We visited our relatives.', exampleCn: '我们拜访了亲戚。' },
      { word: 'divorce', phonetic: '/dɪˈvɔːs/', pos: 'n./v.', meaning: '离婚', example: 'The divorce rate is rising.', exampleCn: '离婚率在上升。' },
      { word: 'upbringing', phonetic: '/ˈʌpbrɪŋɪŋ/', pos: 'n.', meaning: '教养；养育', example: 'Her upbringing shaped her values.', exampleCn: '她的成长环境塑造了价值观。' },
      { word: 'kin', phonetic: '/kɪn/', pos: 'n.', meaning: '亲属', example: 'He helped his kin.', exampleCn: '他帮助了自己的亲属。' },
      { word: 'bond', phonetic: '/bɒnd/', pos: 'n.', meaning: '纽带；联结', example: 'Family bonds are strong.', exampleCn: '家庭纽带很牢固。' },
      { word: 'ancestor', phonetic: '/ˈænsestə(r)/', pos: 'n.', meaning: '祖先', example: 'We honour our ancestors.', exampleCn: '我们敬奉祖先。' },
      { word: 'generation', phonetic: '/ˌdʒenəˈreɪʃn/', pos: 'n.', meaning: '一代（人）', example: 'The older generation differs.', exampleCn: '老一辈人的观念不同。' },
      { word: 'caretaker', phonetic: '/ˈkeəteɪkə(r)/', pos: 'n.', meaning: '照料者', example: 'The caretaker assists daily.', exampleCn: '照料者每天提供帮助。' },
      { word: 'commitment', phonetic: '/kəˈmɪtmənt/', pos: 'n.', meaning: '承诺；投入', example: 'Marriage is a long commitment.', exampleCn: '婚姻是一份长久的承诺。' },
    ]
  },
  {
    topic: '心理与认知', icon: '🧠',
    words: [
      { word: 'motivation', phonetic: '/ˌməʊtɪˈveɪʃn/', pos: 'n.', meaning: '动机', example: 'Motivation drives achievement.', exampleCn: '动机推动成就。' },
      { word: 'perception', phonetic: '/pəˈsepʃn/', pos: 'n.', meaning: '感知；看法', example: 'Perception varies by person.', exampleCn: '感知因人而异。' },
      { word: 'cognition', phonetic: '/kɒɡˈnɪʃn/', pos: 'n.', meaning: '认知', example: 'Cognition declines with age.', exampleCn: '认知随年龄下降。' },
      { word: 'behaviour', phonetic: '/bɪˈheɪvjə(r)/', pos: 'n.', meaning: '行为', example: 'His behaviour improved.', exampleCn: '他的行为改善了。' },
      { word: 'emotion', phonetic: '/ɪˈməʊʃn/', pos: 'n.', meaning: '情绪；情感', example: 'Emotion affects decisions.', exampleCn: '情绪影响决策。' },
      { word: 'stress', phonetic: '/stres/', pos: 'n.', meaning: '压力', example: 'Stress harms the body.', exampleCn: '压力损害身体。' },
      { word: 'anxiety', phonetic: '/æŋˈzaɪəti/', pos: 'n.', meaning: '焦虑', example: 'Anxiety is common today.', exampleCn: '如今焦虑很常见。' },
      { word: 'resilience', phonetic: '/rɪˈzɪliəns/', pos: 'n.', meaning: '韧性；复原力', example: 'Resilience helps in hardship.', exampleCn: '韧性助人度过难关。' },
      { word: 'trait', phonetic: '/treɪt/', pos: 'n.', meaning: '特质；特征', example: 'Honesty is a good trait.', exampleCn: '诚实是优良特质。' },
      { word: 'instinct', phonetic: '/ˈɪnstɪŋkt/', pos: 'n.', meaning: '本能', example: 'Survival is a basic instinct.', exampleCn: '生存是基本本能。' },
      { word: 'conscious', phonetic: '/ˈkɒnʃəs/', pos: 'adj.', meaning: '有意识的', example: 'He was conscious during the test.', exampleCn: '测试期间他保持清醒。' },
      { word: 'memory', phonetic: '/ˈmeməri/', pos: 'n.', meaning: '记忆', example: 'Memory fades over time.', exampleCn: '记忆随时间消退。' },
      { word: 'attention', phonetic: '/əˈtenʃn/', pos: 'n.', meaning: '注意力', example: 'Attention is easily distracted.', exampleCn: '注意力容易分散。' },
      { word: 'habit', phonetic: '/ˈhæbɪt/', pos: 'n.', meaning: '习惯', example: 'Good habits build success.', exampleCn: '好习惯成就成功。' },
      { word: 'adapt', phonetic: '/əˈdæpt/', pos: 'v.', meaning: '适应', example: 'We adapt to new settings.', exampleCn: '我们适应新环境。' },
    ]
  },
  {
    topic: '通用学术描述', icon: '🔤',
    words: [
      { word: 'significant', phonetic: '/sɪɡˈnɪfɪkənt/', pos: 'adj.', meaning: '显著的', example: 'The change was significant.', exampleCn: '这一变化是显著的。' },
      { word: 'crucial', phonetic: '/ˈkruːʃl/', pos: 'adj.', meaning: '关键的', example: 'Education is crucial for growth.', exampleCn: '教育对发展至关重要。' },
      { word: 'illustrate', phonetic: '/ˈɪləstreɪt/', pos: 'v.', meaning: '说明；阐明', example: 'The chart illustrates the trend.', exampleCn: '该图表说明了这一趋势。' },
      { word: 'demonstrate', phonetic: '/ˈdemənstreɪt/', pos: 'v.', meaning: '证明；展示', example: 'The study demonstrates a link.', exampleCn: '该研究证明了一种关联。' },
      { word: 'reveal', phonetic: '/rɪˈviːl/', pos: 'v.', meaning: '揭示；显示', example: 'Data reveal a clear pattern.', exampleCn: '数据揭示出清晰模式。' },
      { word: 'indicate', phonetic: '/ˈɪndɪkeɪt/', pos: 'v.', meaning: '表明', example: 'Results indicate progress.', exampleCn: '结果表明有进展。' },
      { word: 'emphasize', phonetic: '/ˈemfəsaɪz/', pos: 'v.', meaning: '强调', example: 'The report emphasizes safety.', exampleCn: '报告强调了安全。' },
      { word: 'constitute', phonetic: '/ˈkɒnstɪtjuːt/', pos: 'v.', meaning: '构成', example: 'These form a majority.', exampleCn: '这些构成了多数。' },
      { word: 'undermine', phonetic: '/ˌʌndəˈmaɪn/', pos: 'v.', meaning: '削弱；损害', example: 'The policy may undermine trust.', exampleCn: '该政策可能削弱信任。' },
      { word: 'enhance', phonetic: '/ɪnˈhɑːns/', pos: 'v.', meaning: '提升；增强', example: 'Exercise enhances mood.', exampleCn: '运动改善情绪。' },
      { word: 'reflect', phonetic: '/rɪˈflekt/', pos: 'v.', meaning: '反映', example: 'Prices reflect demand.', exampleCn: '价格反映需求。' },
      { word: 'maintain', phonetic: '/meɪnˈteɪn/', pos: 'v.', meaning: '维持；保持', example: 'We must maintain quality.', exampleCn: '我们必须保持质量。' },
      { word: 'establish', phonetic: '/ɪˈstæblɪʃ/', pos: 'v.', meaning: '建立；确立', example: 'The law established a fund.', exampleCn: '该法律设立了一项基金。' },
      { word: 'emerge', phonetic: '/ɪˈmɜːdʒ/', pos: 'v.', meaning: '出现；浮现', example: 'A new trend emerged.', exampleCn: '一种新趋势出现了。' },
      { word: 'assess', phonetic: '/əˈses/', pos: 'v.', meaning: '评估', example: 'Experts assess the risk.', exampleCn: '专家评估了风险。' },
    ]
  },
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
// ==================== 雅思分级词库（CEFR A1 → C2，最低级到最高级） ====================
// 每级对应大致雅思分数段：A1≈4.0，A2≈4.5–5.0，B1≈5.5–6.0，B2≈6.5–7.0，C1≈7.5–8.0，C2≈8.5–9.0
const IELTS_LEVELS = [
  {
    level: 'A1', name: '入门', band: '雅思 4.0',
    desc: '最基础的生存词汇，能理解并使用极简单的日常表达。',
    words: [
      { word: 'family', phonetic: '/ˈfæməli/', pos: 'n.', meaning: '家庭', example: 'My family lives in the city.', exampleCn: '我家住在城市里。' },
      { word: 'home', phonetic: '/həʊm/', pos: 'n.', meaning: '家', example: 'I feel happy at home.', exampleCn: '我在家感到快乐。' },
      { word: 'school', phonetic: '/skuːl/', pos: 'n.', meaning: '学校', example: 'Children go to school every day.', exampleCn: '孩子们每天上学。' },
      { word: 'teacher', phonetic: '/ˈtiːtʃə(r)/', pos: 'n.', meaning: '老师', example: 'The teacher explains the lesson clearly.', exampleCn: '老师把课讲得很清楚。' },
      { word: 'student', phonetic: '/ˈstjuːdnt/', pos: 'n.', meaning: '学生', example: 'She is a hardworking student.', exampleCn: '她是一名勤奋的学生。' },
      { word: 'learn', phonetic: '/lɜːn/', pos: 'v.', meaning: '学习', example: 'We learn English at school.', exampleCn: '我们在学校学英语。' },
      { word: 'study', phonetic: '/ˈstʌdi/', pos: 'v.', meaning: '学习；研究', example: 'He studies science at university.', exampleCn: '他在大学学理科。' },
      { word: 'work', phonetic: '/wɜːk/', pos: 'n./v.', meaning: '工作', example: 'My father goes to work by bus.', exampleCn: '我父亲坐公交上班。' },
      { word: 'job', phonetic: '/dʒɒb/', pos: 'n.', meaning: '工作', example: 'She found a new job in a hospital.', exampleCn: '她在医院找到了新工作。' },
      { word: 'friend', phonetic: '/frend/', pos: 'n.', meaning: '朋友', example: 'A good friend helps you in hard times.', exampleCn: '好朋友在你困难时帮忙。' },
      { word: 'food', phonetic: '/fuːd/', pos: 'n.', meaning: '食物', example: 'Healthy food keeps us strong.', exampleCn: '健康的食物让我们强壮。' },
      { word: 'water', phonetic: '/ˈwɔːtə(r)/', pos: 'n.', meaning: '水', example: 'We should drink clean water.', exampleCn: '我们应喝干净的水。' },
      { word: 'city', phonetic: '/ˈsɪti/', pos: 'n.', meaning: '城市', example: 'The city is busy and noisy.', exampleCn: '这座城市繁忙又嘈杂。' },
      { word: 'country', phonetic: '/ˈkʌntri/', pos: 'n.', meaning: '国家；乡村', example: 'My country has beautiful mountains.', exampleCn: '我的国家有美丽的山。' },
      { word: 'people', phonetic: '/ˈpiːpl/', pos: 'n.', meaning: '人们', example: 'People need clean air to live.', exampleCn: '人们需要干净的空气。' },
      { word: 'money', phonetic: '/ˈmʌni/', pos: 'n.', meaning: '钱', example: 'We need money to buy food.', exampleCn: '我们需要钱买食物。' },
      { word: 'time', phonetic: '/taɪm/', pos: 'n.', meaning: '时间', example: 'I do not have much time today.', exampleCn: '今天我没多少时间。' },
      { word: 'help', phonetic: '/help/', pos: 'v./n.', meaning: '帮助', example: 'Can you help me with my homework?', exampleCn: '你能帮我做作业吗？' },
      { word: 'child', phonetic: '/tʃaɪld/', pos: 'n.', meaning: '孩子', example: 'The child is playing outside.', exampleCn: '那孩子在户外玩耍。' },
      { word: 'health', phonetic: '/helθ/', pos: 'n.', meaning: '健康', example: 'Exercise is good for your health.', exampleCn: '运动有益健康。' }
    ]
  },
  {
    level: 'A2', name: '基础', band: '雅思 4.5–5.0',
    desc: '能使用简单的描述与比较结构，谈论熟悉的话题。',
    words: [
      { word: 'environment', phonetic: '/ɪnˈvaɪrənmənt/', pos: 'n.', meaning: '环境', example: 'We must protect the environment.', exampleCn: '我们必须保护环境。' },
      { word: 'education', phonetic: '/ˌedʒuˈkeɪʃn/', pos: 'n.', meaning: '教育', example: 'Education helps people get better jobs.', exampleCn: '教育帮助人们获得更好的工作。' },
      { word: 'government', phonetic: '/ˈɡʌvənmənt/', pos: 'n.', meaning: '政府', example: 'The government should help poor people.', exampleCn: '政府应帮助穷人。' },
      { word: 'internet', phonetic: '/ˈɪntənet/', pos: 'n.', meaning: '互联网', example: 'Many students use the internet for learning.', exampleCn: '许多学生用互联网学习。' },
      { word: 'transport', phonetic: '/ˈtrænspɔːt/', pos: 'n.', meaning: '交通', example: 'Public transport is cheaper than taxis.', exampleCn: '公共交通比出租车便宜。' },
      { word: 'pollution', phonetic: '/pəˈluːʃn/', pos: 'n.', meaning: '污染', example: 'Pollution is a serious problem.', exampleCn: '污染是个严重问题。' },
      { word: 'climate', phonetic: '/ˈklaɪmət/', pos: 'n.', meaning: '气候', example: 'Climate change affects our world.', exampleCn: '气候变化影响我们的世界。' },
      { word: 'online', phonetic: '/ˌɒnˈlaɪn/', pos: 'adj.', meaning: '在线的', example: 'Online classes are helpful.', exampleCn: '在线课程很有帮助。' },
      { word: 'improve', phonetic: '/ɪmˈpruːv/', pos: 'v.', meaning: '改善', example: 'We need to improve our schools.', exampleCn: '我们需要改善学校。' },
      { word: 'increase', phonetic: '/ɪnˈkriːs/', pos: 'v.', meaning: '增加', example: 'Prices increase every year.', exampleCn: '物价每年上涨。' },
      { word: 'decrease', phonetic: '/dɪˈkriːs/', pos: 'v.', meaning: '减少', example: 'We should decrease pollution.', exampleCn: '我们应减少污染。' },
      { word: 'cause', phonetic: '/kɔːz/', pos: 'v.', meaning: '引起', example: 'Smoking causes health problems.', exampleCn: '吸烟导致健康问题。' },
      { word: 'effect', phonetic: '/ɪˈfekt/', pos: 'n.', meaning: '影响；效果', example: 'Pollution has bad effects.', exampleCn: '污染有坏影响。' },
      { word: 'modern', phonetic: '/ˈmɒdn/', pos: 'adj.', meaning: '现代的', example: 'Modern life is fast and busy.', exampleCn: '现代生活节奏快而忙碌。' },
      { word: 'traditional', phonetic: '/trəˈdɪʃənl/', pos: 'adj.', meaning: '传统的', example: 'Traditional food is often healthier.', exampleCn: '传统食物往往更健康。' },
      { word: 'crime', phonetic: '/kraɪm/', pos: 'n.', meaning: '犯罪', example: 'Crime rates are rising in big cities.', exampleCn: '大城市犯罪率在上升。' },
      { word: 'safety', phonetic: '/ˈseɪfti/', pos: 'n.', meaning: '安全', example: 'People want safety in their neighbourhood.', exampleCn: '人们希望社区安全。' },
      { word: 'healthcare', phonetic: '/ˈhelθkeə(r)/', pos: 'n.', meaning: '医疗', example: 'Healthcare should be available to all.', exampleCn: '医疗应人人可得。' },
      { word: 'economy', phonetic: '/ɪˈkɒnəmi/', pos: 'n.', meaning: '经济', example: 'The economy is growing slowly.', exampleCn: '经济缓慢增长。' },
      { word: 'tourism', phonetic: '/ˈtʊərɪzəm/', pos: 'n.', meaning: '旅游业', example: 'Tourism creates many jobs.', exampleCn: '旅游业创造许多就业。' }
    ]
  },
  {
    level: 'B1', name: '中级', band: '雅思 5.5–6.0',
    desc: '能展开论点、比较与描述，开始使用学术表达。',
    words: [
      { word: 'advantage', phonetic: '/ədˈvɑːntɪdʒ/', pos: 'n.', meaning: '优势', example: 'One advantage of online study is flexibility.', exampleCn: '在线学习的一个优势是灵活。' },
      { word: 'disadvantage', phonetic: '/ˌdɪsədˈvɑːntɪdʒ/', pos: 'n.', meaning: '劣势', example: 'A disadvantage of city life is noise.', exampleCn: '城市生活的一个劣势是噪声。' },
      { word: 'solution', phonetic: '/səˈluːʃn/', pos: 'n.', meaning: '解决方案', example: 'A possible solution is to build more schools.', exampleCn: '一个可行的方案是建更多学校。' },
      { word: 'influence', phonetic: '/ˈɪnfluəns/', pos: 'n./v.', meaning: '影响', example: 'Media influences young people.', exampleCn: '媒体影响年轻人。' },
      { word: 'responsibility', phonetic: '/rɪˌspɒnsəˈbɪləti/', pos: 'n.', meaning: '责任', example: 'It is the government responsibility to act.', exampleCn: '采取行动是政府的责任。' },
      { word: 'necessary', phonetic: '/ˈnesəsəri/', pos: 'adj.', meaning: '必要的', example: 'It is necessary to act now.', exampleCn: '现在必须行动。' },
      { word: 'benefit', phonetic: '/ˈbenɪfɪt/', pos: 'n.', meaning: '好处', example: 'A benefit of studying abroad is new culture.', exampleCn: '留学的好处是接触新文化。' },
      { word: 'challenge', phonetic: '/ˈtʃælɪndʒ/', pos: 'n.', meaning: '挑战', example: 'Climate change is a global challenge.', exampleCn: '气候变化是全球挑战。' },
      { word: 'develop', phonetic: '/dɪˈveləp/', pos: 'v.', meaning: '发展', example: 'Students need to develop skills.', exampleCn: '学生需要发展技能。' },
      { word: 'opportunity', phonetic: '/ˌɒpəˈtjuːnəti/', pos: 'n.', meaning: '机会', example: 'Education gives more opportunities.', exampleCn: '教育带来更多机会。' },
      { word: 'harmful', phonetic: '/ˈhɑːmfl/', pos: 'adj.', meaning: '有害的', example: 'Smoking is harmful to health.', exampleCn: '吸烟有害健康。' },
      { word: 'helpful', phonetic: '/ˈhelpfl/', pos: 'adj.', meaning: '有帮助的', example: 'Exercise is helpful for the mind.', exampleCn: '运动有益心智。' },
      { word: 'effective', phonetic: '/ɪˈfektɪv/', pos: 'adj.', meaning: '有效的', example: 'Online learning is an effective method.', exampleCn: '在线学习是有效的方法。' },
      { word: 'access', phonetic: '/ˈækses/', pos: 'n.', meaning: '获取；途径', example: 'All students need access to the internet.', exampleCn: '所有学生都需要能上网。' },
      { word: 'quality', phonetic: '/ˈkwɒləti/', pos: 'n.', meaning: '质量', example: 'We must improve the quality of education.', exampleCn: '我们必须提升教育质量。' },
      { word: 'pressure', phonetic: '/ˈpreʃə(r)/', pos: 'n.', meaning: '压力', example: 'Students face exam pressure.', exampleCn: '学生面临考试压力。' },
      { word: 'employment', phonetic: '/ɪmˈplɔɪmənt/', pos: 'n.', meaning: '就业', example: 'Education increases employment chances.', exampleCn: '教育增加就业几率。' },
      { word: 'consumer', phonetic: '/kənˈsjuːmə(r)/', pos: 'n.', meaning: '消费者', example: 'Consumer habits are changing.', exampleCn: '消费习惯正在改变。' },
      { word: 'lifestyle', phonetic: '/ˈlaɪfstaɪl/', pos: 'n.', meaning: '生活方式', example: 'A healthy lifestyle prevents disease.', exampleCn: '健康的生活方式预防疾病。' },
      { word: 'population', phonetic: '/ˌpɒpjuˈleɪʃn/', pos: 'n.', meaning: '人口', example: 'The population is growing fast.', exampleCn: '人口快速增长。' }
    ]
  },
  {
    level: 'B2', name: '中高级', band: '雅思 6.5–7.0',
    desc: '掌握较复杂的学术词汇，能就抽象话题展开论述。',
    words: [
      { word: 'infrastructure', phonetic: '/ˈɪnfrəstrʌktʃə(r)/', pos: 'n.', meaning: '基础设施', example: 'Urban areas need better infrastructure.', exampleCn: '城市需要更好的基础设施。' },
      { word: 'sustainability', phonetic: '/səˌsteɪnəˈbɪləti/', pos: 'n.', meaning: '可持续性', example: 'Sustainability matters for the future.', exampleCn: '可持续性关乎未来。' },
      { word: 'legislation', phonetic: '/ˌledʒɪsˈleɪʃn/', pos: 'n.', meaning: '立法', example: 'New legislation controls emissions.', exampleCn: '新立法管控排放。' },
      { word: 'implement', phonetic: '/ˈɪmplɪment/', pos: 'v.', meaning: '实施', example: 'We should implement new policies.', exampleCn: '我们应实施新政策。' },
      { word: 'regulate', phonetic: '/ˈreɡjuleɪt/', pos: 'v.', meaning: '监管', example: 'We must regulate social media use.', exampleCn: '我们必须监管社交媒体使用。' },
      { word: 'innovation', phonetic: '/ˌɪnəˈveɪʃn/', pos: 'n.', meaning: '创新', example: 'Innovation drives economic growth.', exampleCn: '创新推动经济增长。' },
      { word: 'awareness', phonetic: '/əˈweənəs/', pos: 'n.', meaning: '意识', example: 'Public awareness of recycling is rising.', exampleCn: '公众回收意识在提高。' },
      { word: 'equitable', phonetic: '/ˈekwɪtəbl/', pos: 'adj.', meaning: '公平的', example: 'Healthcare should be equitable.', exampleCn: '医疗应公平。' },
      { word: 'prioritise', phonetic: '/praɪˈɒrətaɪz/', pos: 'v.', meaning: '优先考虑', example: 'We must prioritise education.', exampleCn: '我们必须优先教育。' },
      { word: 'urbanisation', phonetic: '/ˌɜːbənaɪˈzeɪʃn/', pos: 'n.', meaning: '城市化', example: 'Urbanisation leads to housing issues.', exampleCn: '城市化导致住房问题。' },
      { word: 'automation', phonetic: '/ˌɔːtəˈmeɪʃn/', pos: 'n.', meaning: '自动化', example: 'Automation reduces manual work.', exampleCn: '自动化减少人工。' },
      { word: 'inequality', phonetic: '/ˌɪnɪˈkwɒləti/', pos: 'n.', meaning: '不平等', example: 'Economic inequality is a concern.', exampleCn: '经济不平等令人担忧。' },
      { word: 'globalisation', phonetic: '/ˌɡləʊbəlaɪˈzeɪʃn/', pos: 'n.', meaning: '全球化', example: 'Globalisation affects job markets.', exampleCn: '全球化影响就业市场。' },
      { word: 'incentive', phonetic: '/ɪnˈsentɪv/', pos: 'n.', meaning: '激励', example: 'Tax incentives boost clean energy.', exampleCn: '税收激励促进清洁能源。' },
      { word: 'allocate', phonetic: '/ˈæləkeɪt/', pos: 'v.', meaning: '分配', example: 'Funds should be allocated to health.', exampleCn: '资金应分配给卫生。' },
      { word: 'viable', phonetic: '/ˈvaɪəbl/', pos: 'adj.', meaning: '可行的', example: 'A viable solution is needed.', exampleCn: '需要一个可行的方案。' },
      { word: 'justify', phonetic: '/ˈdʒʌstɪfaɪ/', pos: 'v.', meaning: '证明……合理', example: 'It is hard to justify the cost.', exampleCn: '很难证明这笔花费合理。' },
      { word: 'consequence', phonetic: '/ˈkɒnsɪkwəns/', pos: 'n.', meaning: '后果', example: 'One consequence of pollution is poor health.', exampleCn: '污染的一个后果是健康恶化。' },
      { word: 'emphasise', phonetic: '/ˈemfəsaɪz/', pos: 'v.', meaning: '强调', example: 'We must emphasise education.', exampleCn: '我们必须强调教育。' },
      { word: 'correlation', phonetic: '/ˌkɒrəˈleɪʃn/', pos: 'n.', meaning: '相关性', example: 'There is a correlation between education and jobs.', exampleCn: '教育与就业之间有相关性。' }
    ]
  },
  {
    level: 'C1', name: '高级', band: '雅思 7.5–8.0',
    desc: '表达精准、用词正式，能驾驭学术写作与复杂句式。',
    words: [
      { word: 'accelerate', phonetic: '/əkˈseləreɪt/', pos: 'v.', meaning: '加速', example: 'Technology accelerates social change.', exampleCn: '技术加速社会变革。' },
      { word: 'ambiguous', phonetic: '/æmˈbɪɡjuəs/', pos: 'adj.', meaning: '含糊的', example: 'The instructions were ambiguous.', exampleCn: '说明含糊不清。' },
      { word: 'coherent', phonetic: '/kəʊˈhɪərənt/', pos: 'adj.', meaning: '连贯的', example: 'She gave a coherent argument.', exampleCn: '她给出了连贯的论证。' },
      { word: 'compensate', phonetic: '/ˈkɒmpenseɪt/', pos: 'v.', meaning: '补偿', example: 'Nothing can compensate for lost time.', exampleCn: '什么也无法补偿失去的时间。' },
      { word: 'controversial', phonetic: '/ˌkɒntrəˈvɜːʃl/', pos: 'adj.', meaning: '有争议的', example: 'The new plan is controversial.', exampleCn: '新计划有争议。' },
      { word: 'diminish', phonetic: '/dɪˈmɪnɪʃ/', pos: 'v.', meaning: '减少；削弱', example: 'His influence began to diminish.', exampleCn: '他的影响力开始减弱。' },
      { word: 'elaborate', phonetic: '/ɪˈlæbərət/', pos: 'adj./v.', meaning: '详尽的；阐述', example: 'Please elaborate on your point.', exampleCn: '请详细阐述你的观点。' },
      { word: 'fluctuate', phonetic: '/ˈflʌktʃueɪt/', pos: 'v.', meaning: '波动', example: 'Prices fluctuate with demand.', exampleCn: '价格随需求波动。' },
      { word: 'inherent', phonetic: '/ɪnˈhɪərənt/', pos: 'adj.', meaning: '固有的', example: 'Risk is inherent in investment.', exampleCn: '风险是投资固有的。' },
      { word: 'integral', phonetic: '/ˈɪntɪɡrəl/', pos: 'adj.', meaning: '不可或缺的', example: 'Trust is integral to teamwork.', exampleCn: '信任对团队合作不可或缺。' },
      { word: 'manipulate', phonetic: '/məˈnɪpjuleɪt/', pos: 'v.', meaning: '操纵', example: 'He tried to manipulate the data.', exampleCn: '他试图操纵数据。' },
      { word: 'negligible', phonetic: '/ˈneɡlɪdʒəbl/', pos: 'adj.', meaning: '可忽略的', example: 'The environmental effect was negligible.', exampleCn: '环境影响微乎其微。' },
      { word: 'predominant', phonetic: '/prɪˈdɒmɪnənt/', pos: 'adj.', meaning: '主导的', example: 'The predominant view is optimistic.', exampleCn: '主流观点是乐观的。' },
      { word: 'profound', phonetic: '/prəˈfaʊnd/', pos: 'adj.', meaning: '深远的', example: 'The book had a profound impact.', exampleCn: '这本书影响深远。' },
      { word: 'rigorous', phonetic: '/ˈrɪɡərəs/', pos: 'adj.', meaning: '严格的', example: 'The study used rigorous methods.', exampleCn: '该研究用了严谨的方法。' },
      { word: 'simultaneous', phonetic: '/ˌsɪmlˈteɪniəs/', pos: 'adj.', meaning: '同时的', example: 'The events were simultaneous.', exampleCn: '这些事件同时发生。' },
      { word: 'submit', phonetic: '/səbˈmɪt/', pos: 'v.', meaning: '提交；屈服', example: 'Please submit your essay by Friday.', exampleCn: '请于周五前提交论文。' },
      { word: 'theoretical', phonetic: '/ˌθɪəˈretɪkl/', pos: 'adj.', meaning: '理论的', example: 'This is a theoretical model.', exampleCn: '这是一个理论模型。' },
      { word: 'undergo', phonetic: '/ˌʌndəˈɡəʊ/', pos: 'v.', meaning: '经历', example: 'The city underwent major changes.', exampleCn: '这座城市经历了巨变。' },
      { word: 'validate', phonetic: '/ˈvælɪdeɪt/', pos: 'v.', meaning: '验证', example: 'The results validate the theory.', exampleCn: '结果验证了该理论。' }
    ]
  },
  {
    level: 'C2', name: '精通', band: '雅思 8.5–9.0',
    desc: '接近母语者的地道表达，学术写作与口语的顶级词汇。',
    words: [
      { word: 'abstruse', phonetic: '/əbˈstruːs/', pos: 'adj.', meaning: '深奥的', example: 'His lecture was abstruse and hard to follow.', exampleCn: '他的讲座深奥难懂。' },
      { word: 'bolster', phonetic: '/ˈbəʊlstə(r)/', pos: 'v.', meaning: '支持；加强', example: 'New evidence bolstered her claim.', exampleCn: '新证据加强了她的论点。' },
      { word: 'circumspect', phonetic: '/ˈsɜːkəmspekt/', pos: 'adj.', meaning: '谨慎的', example: 'She was circumspect about the deal.', exampleCn: '她对这笔交易很谨慎。' },
      { word: 'eschew', phonetic: '/ɪsˈtʃuː/', pos: 'v.', meaning: '回避；避免', example: 'He eschewed processed food.', exampleCn: '他避开加工食品。' },
      { word: 'obdurate', phonetic: '/ˈɒbdjərət/', pos: 'adj.', meaning: '固执的', example: 'He remained obdurate despite the pleas.', exampleCn: '尽管恳求，他依然固执。' },
      { word: 'penchant', phonetic: '/ˈpɒ̃ʃɒ̃/', pos: 'n.', meaning: '偏好', example: 'She has a penchant for classical music.', exampleCn: '她对古典音乐有偏好。' },
      { word: 'alacrity', phonetic: '/əˈlækrəti/', pos: 'n.', meaning: '欣然；敏捷', example: 'She accepted the invitation with alacrity.', exampleCn: '她欣然接受了邀请。' },
      { word: 'assiduous', phonetic: '/əˈsɪdjuəs/', pos: 'adj.', meaning: '勤勉的', example: 'He was assiduous in his research.', exampleCn: '他做研究很勤勉。' },
      { word: 'capitulate', phonetic: '/kəˈpɪtʃuleɪt/', pos: 'v.', meaning: '屈服', example: 'They finally capitulated after long talks.', exampleCn: '长时间谈判后他们最终屈服。' },
      { word: 'convivial', phonetic: '/kənˈvɪviəl/', pos: 'adj.', meaning: '欢乐的', example: 'The party had a convivial atmosphere.', exampleCn: '聚会气氛欢乐。' },
      { word: 'obfuscate', phonetic: '/ˈɒbfʌskeɪt/', pos: 'v.', meaning: '混淆；使模糊', example: 'The statement obfuscated the facts.', exampleCn: '该声明混淆了事实。' },
      { word: 'recalcitrant', phonetic: '/rɪˈkælsɪtrənt/', pos: 'adj.', meaning: '倔强的', example: 'The recalcitrant student refused to obey.', exampleCn: '那名倔强的学生拒绝服从。' },
      { word: 'munificent', phonetic: '/mjuːˈnɪfɪsnt/', pos: 'adj.', meaning: '慷慨的', example: 'A munificent donation was made to the school.', exampleCn: '一笔慷慨的捐款捐给了学校。' },
      { word: 'capricious', phonetic: '/kəˈprɪʃəs/', pos: 'adj.', meaning: '反复无常的', example: 'The weather this spring is capricious.', exampleCn: '今年春天的天气反复无常。' },
      { word: 'ebullient', phonetic: '/ɪˈbʌliənt/', pos: 'adj.', meaning: '热情洋溢的', example: 'Her ebullient mood was contagious.', exampleCn: '她热情洋溢的情绪很有感染力。' },
      { word: 'ephemeral', phonetic: '/ɪˈfemərəl/', pos: 'adj.', meaning: '短暂的', example: 'Fame can be ephemeral.', exampleCn: '名声可能转瞬即逝。' },
      { word: 'esoteric', phonetic: '/ˌesəˈterɪk/', pos: 'adj.', meaning: '深奥难懂的', example: 'The topic is too esoteric for beginners.', exampleCn: '这个话题对初学者太深奥。' },
      { word: 'anomaly', phonetic: '/əˈnɒməli/', pos: 'n.', meaning: '异常', example: 'The result was a statistical anomaly.', exampleCn: '这个结果是个统计异常。' },
      { word: 'austere', phonetic: '/ɔːˈstɪə(r)/', pos: 'adj.', meaning: '朴素的；严厉的', example: 'The room was clean but austere.', exampleCn: '房间干净但很朴素。' },
      { word: 'cogent', phonetic: '/ˈkəʊdʒənt/', pos: 'adj.', meaning: '有说服力的', example: 'She made a cogent argument for change.', exampleCn: '她就变革提出了有说服力的论点。' }
    ]
  }
];
