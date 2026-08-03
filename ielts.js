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
  "level": "A1",
  "name": "入门",
  "band": "雅思 ≈4.0",
  "desc": "按词频由高到低（最常用→最生僻）排列的第 1 段，涵盖最基础、最高频的雅思核心词。",
  "words": [
   {
    "word": "sensible",
    "phonetic": "'sɛnsəbl",
    "pos": "adj.",
    "meaning": "明智的；明显的；意识到的；通晓事理的",
    "example": "She seems very sensible.",
    "exampleCn": "她好像很明智。"
   },
   {
    "word": "sign",
    "phonetic": "saɪn",
    "pos": "n.",
    "meaning": "迹象；符号；记号；手势；签署；签名；签署；示意",
    "example": "A paw print in the dust was a sign that a tiger was close.",
    "exampleCn": "沙土里的一个爪印表明附近有老虎。"
   },
   {
    "word": "as",
    "phonetic": "æz,əz",
    "pos": "conj.",
    "meaning": "因为；随着；虽然；依照；当…时；如同；当作；以…的身份；同样地；和…一样的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "explicit",
    "phonetic": "ɪk'splɪsɪt",
    "pos": "adj.",
    "meaning": "明确的；清楚的；直率的；详述的",
    "example": "The contrast could not have been made more explicit.",
    "exampleCn": "这个对比再清楚不过了。"
   },
   {
    "word": "wreck",
    "phonetic": "rɛk",
    "pos": "n.",
    "meaning": "破坏；[水运]失事；残骸；失去健康的人；破坏；[水运]使失事；拆毁",
    "example": "He was still alive when they pulled him from the wreck.",
    "exampleCn": "他们把他从失事的车辆中拖出来时，他还活着。"
   },
   {
    "word": "ravage",
    "phonetic": "'rævɪdʒ",
    "pos": "vt",
    "meaning": "毁坏；破坏；掠夺；蹂躏，破坏；毁坏；掠夺",
    "example": "a country ravaged by civil war",
    "exampleCn": "遭受内战重创的国家"
   },
   {
    "word": "wreathe",
    "phonetic": "rið",
    "pos": "vt",
    "meaning": "用花环装饰；将…做成花环；包围；覆盖；缭绕；成圈状；扭曲；环绕盘旋",
    "example": "The ship was wreathed in smoke.",
    "exampleCn": "那艘船笼罩在浓烟中。"
   },
   {
    "word": "impede",
    "phonetic": "ɪm'pid",
    "pos": "vt",
    "meaning": "阻碍；妨碍；阻止",
    "example": "Storms at sea impeded our progress.",
    "exampleCn": "海上风暴阻碍了我们的航程。"
   },
   {
    "word": "thesis",
    "phonetic": "'θisɪs",
    "pos": "n.",
    "meaning": "论文；论点",
    "example": "Cynthia’s still working on her thesis.",
    "exampleCn": "辛西娅还在写论文。"
   },
   {
    "word": "precedent",
    "phonetic": "'prɛsɪdənt",
    "pos": "adj.",
    "meaning": "在前的；在先的",
    "example": "a legal precedent",
    "exampleCn": "判例"
   },
   {
    "word": "lofty",
    "phonetic": "'lɔfti",
    "pos": "adj.",
    "meaning": "高的；崇高的；高级的；高傲的",
    "example": "He stayed at the Four Seasons Hotel, from whose lofty heights he could see across New York.",
    "exampleCn": "他住在四季酒店，从酒店高处可以看到纽约的全景。"
   },
   {
    "word": "fridge",
    "phonetic": "frɪdʒ",
    "pos": "n.",
    "meaning": "电冰箱",
    "example": "Then all three of you sign the contract and post in on the fridge.",
    "exampleCn": "然后你们三个人要都在协议上签名，并把它贴在冰箱上。"
   },
   {
    "word": "immune",
    "phonetic": "ɪ'mjʊn",
    "pos": "adj.",
    "meaning": "[免疫]免疫的；免于……的，免除的",
    "example": "Once we’ve had the disease, we’re immune for life.",
    "exampleCn": "我们一旦得过这种病，就获得了终身免疫力。"
   },
   {
    "word": "scratch",
    "phonetic": "skrætʃ",
    "pos": "n.",
    "meaning": "擦伤；抓痕；刮擦声；乱写；打草稿用的；凑合的；碰巧的；抓；刮；挖出；乱涂；抓；搔；发刮擦声；勉强糊口；退出比赛",
    "example": "John yawned and scratched his leg.",
    "exampleCn": "约翰打了个呵欠，挠了挠腿。"
   },
   {
    "word": "circulate",
    "phonetic": "'sɝkjəlet",
    "pos": "vi",
    "meaning": "传播，流传；循环；流通；使循环；使流通；使传播",
    "example": "Swimming helps to get the blood circulating through the muscles.",
    "exampleCn": "游泳有助于肌肉的血液循环。"
   },
   {
    "word": "nitrogen",
    "phonetic": "'naɪtrədʒən",
    "pos": "n.",
    "meaning": "[化学]氮",
    "example": "Well, we know nitrogen has what?",
    "exampleCn": "对于氮气我们知道什么？"
   },
   {
    "word": "alone",
    "phonetic": "ə'lon",
    "pos": "adj.",
    "meaning": "独自的；单独的；孤独的；独自地；单独地",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "sieve",
    "phonetic": "sɪv",
    "pos": "n.",
    "meaning": "[粮食][矿业]筛子；滤网；不能保守秘密的人；[粮食][数]筛；滤；[粮食][数]筛；滤",
    "example": "Press the raspberries through a fine sieve to form a puree.",
    "exampleCn": "用一把细筛子把黑莓压榨成浓汁。"
   },
   {
    "word": "spiral",
    "phonetic": "'spaɪrəl",
    "pos": "n.",
    "meaning": "[机]螺旋；旋涡；螺旋形之物；螺旋形的；盘旋的",
    "example": "...a spiral staircase.",
    "exampleCn": "…一段旋梯。"
   },
   {
    "word": "mercenary",
    "phonetic": "'mɝsənɛri",
    "pos": "adj.",
    "meaning": "雇佣的；唯利是图的；雇佣兵；唯利是图者",
    "example": "She did it for purely mercenary reasons.",
    "exampleCn": "她这么做纯粹是为了钱。"
   },
   {
    "word": "mechanism",
    "phonetic": "'mɛkənɪzəm",
    "pos": "n.",
    "meaning": "机制；原理，途径；进程；机械装置；技巧",
    "example": "the brake mechanism",
    "exampleCn": "刹车装置"
   },
   {
    "word": "integrate",
    "phonetic": "'ɪntɪɡret",
    "pos": "vi",
    "meaning": "求积分；取消隔离；成为一体；整合的；完全的；一体化；集成体",
    "example": "He didn't integrate successfully into the Italian way of life.",
    "exampleCn": "他没有成功融入到意大利的生活方式中去。"
   },
   {
    "word": "earnest",
    "phonetic": "'ɜːnɪst",
    "pos": "adj.",
    "meaning": "认真的，热心的；重要的；认真；[贸易]定金；诚挚",
    "example": "a rather earnest young man",
    "exampleCn": "相当认真的一个年轻人"
   },
   {
    "word": "adolescence",
    "phonetic": ",ædə'lɛsns",
    "pos": "n.",
    "meaning": "[生理]青春期",
    "example": "Some young people suddenly become self-conscious and tongue-tied in early adolescence.",
    "exampleCn": "一些年青人在青春期早期突然变得害羞结舌。"
   },
   {
    "word": "grave",
    "phonetic": "ɡrev",
    "pos": "adj.",
    "meaning": "重大的；严肃的；黯淡的；墓穴，坟墓；死亡；雕刻；铭记",
    "example": "Matthew’s life is in grave danger .",
    "exampleCn": "马修的生命危在旦夕。"
   },
   {
    "word": "intrigue",
    "phonetic": "'ɪn'triɡ",
    "pos": "n.",
    "meaning": "阴谋；诡计；复杂的事；私通；私通；密谋",
    "example": "Other people’s houses always intrigued her.",
    "exampleCn": "别人的房子总令她好奇。"
   },
   {
    "word": "claim",
    "phonetic": "klem",
    "pos": "vt",
    "meaning": "要求；声称；需要；认领；要求；声称；[贸易]索赔；断言；值得",
    "example": "The Maldives pressed its claim to hold the summit.",
    "exampleCn": "马尔代夫一再要求主办这场峰会。"
   },
   {
    "word": "opt",
    "phonetic": "ɑpt",
    "pos": "vi",
    "meaning": "选择",
    "example": "Depending on your circumstances you can opt for one method or the other.",
    "exampleCn": "根据自己的情况，你可以选择这种或那种方法。"
   },
   {
    "word": "stipulate",
    "phonetic": "'stɪpjulet",
    "pos": "vi",
    "meaning": "规定；保证；规定；保证",
    "example": "Laws stipulate the maximum interest rate that banks can charge.",
    "exampleCn": "法律对银行可以收取的最高利率作了规定。"
   },
   {
    "word": "eradicate",
    "phonetic": "ɪ'rædɪket",
    "pos": "vt",
    "meaning": "根除，根绝；消灭",
    "example": "an attempt to eradicate inflation",
    "exampleCn": "为消除通货膨胀所作的努力"
   },
   {
    "word": "delirium",
    "phonetic": "dɪ'lɪrɪəm",
    "pos": "n.",
    "meaning": "精神错乱；发狂，狂热；说谵语状态",
    "example": "Before she died she had fits of delirium.",
    "exampleCn": "去世前她一阵阵地胡言乱语。"
   },
   {
    "word": "pole",
    "phonetic": "pol",
    "pos": "n.",
    "meaning": "[建]杆；极点；电极",
    "example": "the distance from pole to equator",
    "exampleCn": "地极到赤道的距离"
   },
   {
    "word": "herd",
    "phonetic": "hɝd",
    "pos": "n.",
    "meaning": "兽群，畜群；放牧人；放牧；使成群",
    "example": "You have to be an individual; it’s no use running with the herd.",
    "exampleCn": "你必须特立独行，随大溜没有用处。"
   },
   {
    "word": "stitch",
    "phonetic": "stɪtʃ",
    "pos": "n.",
    "meaning": "针脚，[服装]线迹；一针；缝，缝合；缝，缝合",
    "example": "He had to have ten stitches in his head.",
    "exampleCn": "他头上不得不缝了十针。"
   },
   {
    "word": "slag",
    "phonetic": "slæɡ",
    "pos": "n.",
    "meaning": "炉渣；[冶][环境]矿渣；熔渣",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "consolidate",
    "phonetic": "kən'sɑlɪdet",
    "pos": "vt",
    "meaning": "巩固，使固定；联合；巩固，加强",
    "example": "The company has consolidated its position as the country’s leading gas supplier.",
    "exampleCn": "这家公司巩固了作为该国主要煤气供应商的地位。"
   },
   {
    "word": "civic",
    "phonetic": "'sɪvɪk",
    "pos": "adj.",
    "meaning": "市的；公民的，市民的",
    "example": "Jackson spent the day meeting with local religious and civic leaders.",
    "exampleCn": "杰克逊那天与当地的宗教领袖和市领导会面。"
   },
   {
    "word": "clash",
    "phonetic": "klæʃ",
    "pos": "n.",
    "meaning": "冲突，不协调；碰撞声，铿锵声；冲突，抵触；砰地相碰撞，发出铿锵声",
    "example": "Troops clashed near the border.",
    "exampleCn": "军队在边境附近发生了冲突。"
   },
   {
    "word": "distract",
    "phonetic": "dɪ'strækt",
    "pos": "vt",
    "meaning": "转移；分心",
    "example": "Try not to distract the other students.",
    "exampleCn": "尽量不要让其他学生分心。"
   },
   {
    "word": "strap",
    "phonetic": "stræp",
    "pos": "vt",
    "meaning": "用带捆绑；用皮条抽打；约束；带；[机]皮带；磨刀皮带；鞭打",
    "example": "a bra strap",
    "exampleCn": "胸罩肩带"
   },
   {
    "word": "format",
    "phonetic": "'fɔrmæt",
    "pos": "n.",
    "meaning": "格式，版式；形式，方式",
    "example": "The courses were run to a consistent format.",
    "exampleCn": "这些课程的编排是有连续性的。"
   },
   {
    "word": "company",
    "phonetic": "'kʌmpəni",
    "pos": "n.",
    "meaning": "[贸易]公司；陪伴，同伴；连队；交往；陪伴",
    "example": "Which company do you work for?",
    "exampleCn": "你在哪家公司上班？"
   },
   {
    "word": "trench",
    "phonetic": "trɛntʃ",
    "pos": "n.",
    "meaning": "沟，沟渠；战壕；堑壕；挖战壕；侵害",
    "example": "Workers dug a trench for gas lines.",
    "exampleCn": "工人们挖了一条沟来铺设煤气管道。"
   },
   {
    "word": "vain",
    "phonetic": "ven",
    "pos": "adj.",
    "meaning": "徒劳的；虚荣的；空虚的",
    "example": "Men can be just as vain as women.",
    "exampleCn": "男人有时会和女人一样虚荣。"
   },
   {
    "word": "exempt",
    "phonetic": "ɪg'zɛmpt",
    "pos": "vt",
    "meaning": "免除；豁免",
    "example": "So we have the current argument over how much of the derivative market will be exempt from regulation.",
    "exampleCn": "所以我们就看到了当前有关衍生产品市场到底有多大份额可以得到规则的豁免的辩论。"
   },
   {
    "word": "mask",
    "phonetic": "mæsk",
    "pos": "n.",
    "meaning": "面具；口罩；掩饰；掩饰；戴面具；化装；掩饰；戴面具；使模糊",
    "example": "a surgical face mask",
    "exampleCn": "外科手术口罩"
   },
   {
    "word": "dwell",
    "phonetic": "dwɛl",
    "pos": "vi",
    "meaning": "居住；存在于；细想某事",
    "example": "They dwelt in the forest.",
    "exampleCn": "他们住在森林里。"
   },
   {
    "word": "misgiving",
    "phonetic": ",mis'ɡiviŋ",
    "pos": "n.",
    "meaning": "担忧；疑虑；不安；担忧；使…疑虑；害怕（misgive的ing形式）",
    "example": "Opponents of nuclear energy have deep misgivings about its safety.",
    "exampleCn": "反核能人士非常担心核能的安全性。"
   },
   {
    "word": "vex",
    "phonetic": "vɛks",
    "pos": "vt",
    "meaning": "使烦恼；使困惑；使恼怒；烦恼",
    "example": "It vexed me to think of others gossiping behind my back.",
    "exampleCn": "想到别人在我背后说闲话让我很恼火。"
   },
   {
    "word": "fare",
    "phonetic": "fɛr",
    "pos": "vi",
    "meaning": "经营；进展；遭遇；过活；票价；费用；旅客；食物",
    "example": "He could barely afford the fare.",
    "exampleCn": "他几乎付不起车费。"
   },
   {
    "word": "external",
    "phonetic": "ɪk'stɝnl",
    "pos": "adj.",
    "meaning": "[药][动]外部的；表面的；外用的；外国的；外面的；外部；外观；外面",
    "example": "the external appearance of the building",
    "exampleCn": "大楼的外观"
   },
   {
    "word": "sue",
    "phonetic": "su",
    "pos": "vt",
    "meaning": "控告；请求；控告；提出请求",
    "example": "If the builders don’t fulfil their side of the contract, we’ll sue.",
    "exampleCn": "如果建筑商不履行合同，我们就要提出起诉。"
   },
   {
    "word": "haphazard",
    "phonetic": "'hæphæzəd",
    "pos": "adj.",
    "meaning": "偶然的；随便的；无计划的；偶然；偶然事件；偶然地；随意地",
    "example": "It was strings of words borrowed from the different languages around them and put together in sort of haphazard ways.",
    "exampleCn": "它只不过是从身边的不同语言当中,借用了一些单词串,以随意的方式将它们放在一起"
   },
   {
    "word": "allot",
    "phonetic": "ə'lɑt",
    "pos": "vt",
    "meaning": "分配；拨给；分派",
    "example": "The seats are allotted to the candidates who have won the most votes.",
    "exampleCn": "这些席位被分配给了赢得了最多选票的候选人。"
   },
   {
    "word": "psychiatry",
    "phonetic": "saɪ'kaɪətri",
    "pos": "n.",
    "meaning": "精神病学",
    "example": "In it, he argued that psychiatry was a branch of medical science and should be investigated by observation and experimentation like the other natural sciences.",
    "exampleCn": "在书中，他主张精神病学是医学的一个分支，应当像其他自然科学一样以观察和实验为研究手段。"
   },
   {
    "word": "out",
    "phonetic": "aʊt",
    "pos": "adv.",
    "meaning": "出现；在外；出局；出声地；不流行地；外面的；出局的；下台的；出局；向；离去；出来；暴露；使熄灭；驱逐",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "posture",
    "phonetic": "'pɑstʃɚ",
    "pos": "n.",
    "meaning": "姿势；态度；情形；摆姿势",
    "example": "her upright posture",
    "exampleCn": "她笔挺的姿势"
   },
   {
    "word": "recycle",
    "phonetic": ",ri'saɪkl",
    "pos": "n.",
    "meaning": "再生；再循环；重复利用",
    "example": "We take all our bottles to be recycled.",
    "exampleCn": "我们把我们所有的瓶子都回收利用。"
   },
   {
    "word": "expose",
    "phonetic": "ɪk'spoz；ek-",
    "pos": "vt",
    "meaning": "揭露，揭发；使曝光；显示",
    "example": "The film exposes the utter horror of war.",
    "exampleCn": "这部电影揭示了战争的极端恐怖。"
   },
   {
    "word": "perception",
    "phonetic": "pɚ'sɛpʃən",
    "pos": "n.",
    "meaning": "知觉；[生理]感觉；看法；洞察力；获取",
    "example": "And when they do, what do you think their perception will be?",
    "exampleCn": "当他们这样做时，你觉得他们的知觉是怎样的？"
   },
   {
    "word": "paranoia",
    "phonetic": ",pærə'nɔɪə",
    "pos": "n.",
    "meaning": "[心理]偏执狂，[内科]妄想狂",
    "example": "They capitalize on panic and paranoia.",
    "exampleCn": "他们利用恐慌和偏执狂。"
   },
   {
    "word": "alongside",
    "phonetic": "ə'lɔŋ'saɪd",
    "pos": "adv.",
    "meaning": "在旁边",
    "example": "We use the whiteboards alongside one of the walls, where you just write down your name if you have a question.",
    "exampleCn": "用其中一面墙壁旁边的白色书写板，如果有问题，你只要在那里写下你的名字。"
   },
   {
    "word": "canteen",
    "phonetic": "kænˈtiːn",
    "pos": "n.",
    "meaning": "食堂，小卖部；水壶",
    "example": "Rennie had eaten his supper in the canteen.",
    "exampleCn": "伦尼已在食堂吃过晚饭。"
   },
   {
    "word": "supreme",
    "phonetic": "suˈprim",
    "pos": "adj.",
    "meaning": "最高的；至高的；最重要的；至高；霸权",
    "example": "the Supreme Allied Commander in Europe",
    "exampleCn": "欧洲盟军最高指挥官"
   },
   {
    "word": "reasonable",
    "phonetic": "'riznəbl",
    "pos": "adj.",
    "meaning": "合理的，公道的；通情达理的",
    "example": "a reasonable request",
    "exampleCn": "合情合理的要求"
   },
   {
    "word": "naught",
    "phonetic": "nɔt",
    "pos": "n.",
    "meaning": "[数]零；无价值；无价值的；无用的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "unfold",
    "phonetic": "ʌn'fold",
    "pos": "vt",
    "meaning": "打开；呈现；展开；显露",
    "example": "He unfolded the map.",
    "exampleCn": "他展开地图。"
   },
   {
    "word": "cushion",
    "phonetic": "'kʊʃən",
    "pos": "n.",
    "meaning": "[轻]垫子；起缓解作用之物；（猪等的）臀肉；银行储蓄",
    "example": "a velvet cushion",
    "exampleCn": "天鹅绒垫子"
   },
   {
    "word": "mimic",
    "phonetic": "'mɪmɪk",
    "pos": "vt",
    "meaning": "模仿，摹拟；效颦者，模仿者；仿制品；小丑；模仿的，模拟的；假装的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "vicinity",
    "phonetic": "və'sɪnəti",
    "pos": "n.",
    "meaning": "邻近，附近",
    "example": "The stolen car was found in the vicinity of the station.",
    "exampleCn": "被盗汽车在车站附近被发现。"
   },
   {
    "word": "toss",
    "phonetic": "tɔs",
    "pos": "n.",
    "meaning": "投掷；摇荡；投掷的距离；掷币赌胜负；投掷；使…不安；突然抬起；使…上下摇动；与…掷币打赌；辗转；被乱扔；颠簸；掷钱币决定某事",
    "example": "Toss the carrots in some butter before serving.",
    "exampleCn": "上桌前把胡萝卜放在黄油里搅拌一下。"
   },
   {
    "word": "refine",
    "phonetic": "rɪ'faɪn",
    "pos": "vt",
    "meaning": "精炼，提纯；改善；使…文雅",
    "example": "oil refining",
    "exampleCn": "石油的提炼"
   },
   {
    "word": "shred",
    "phonetic": "ʃrɛd",
    "pos": "n.",
    "meaning": "碎片；少量剩余；最少量；破布；撕碎",
    "example": "Cut the cabbage into fine long shreds.",
    "exampleCn": "把这棵卷心菜切成细长条。"
   },
   {
    "word": "disperse",
    "phonetic": "dɪ'spɝs",
    "pos": "vt",
    "meaning": "分散；使散开；传播；分散；分散的",
    "example": "Police used tear gas to disperse the crowd.",
    "exampleCn": "警察用催泪瓦斯驱散人群。"
   },
   {
    "word": "edition",
    "phonetic": "ɪ'dɪʃən",
    "pos": "n.",
    "meaning": "[图情]版本",
    "example": "a paperback edition",
    "exampleCn": "平装本"
   },
   {
    "word": "fetter",
    "phonetic": "'fɛtɚ",
    "pos": "vt",
    "meaning": "束缚；加脚镣；束缚；羁绊；脚镣",
    "example": "fettered by family responsibilities",
    "exampleCn": "受家庭责任的束缚"
   },
   {
    "word": "renaissance",
    "phonetic": "'rɛnəsɑns",
    "pos": "n.",
    "meaning": "复兴；新生；复活",
    "example": "...the Renaissance masterpieces in London's galleries.",
    "exampleCn": "…伦敦美术馆里文艺复兴时期的杰作。"
   },
   {
    "word": "proceeding",
    "phonetic": "prə'sidɪŋ",
    "pos": "n.",
    "meaning": "进行；程序；诉讼；事项；开始；继续做；行进（proceed的ing形式）",
    "example": "John is taking legal proceedings against his ex-partner.",
    "exampleCn": "约翰在对他的前合伙人提起法律诉讼。"
   },
   {
    "word": "abridge",
    "phonetic": "ə'brɪdʒ",
    "pos": "vt",
    "meaning": "删节；缩短；节略",
    "example": "Article 33 A book publisher may alter or abridge a work with the permission of the copyright owner.",
    "exampleCn": "第三十三条图书出版者经作者许可，可以对作品修改、删节。"
   },
   {
    "word": "dome",
    "phonetic": "dom",
    "pos": "n.",
    "meaning": "[建]圆屋顶",
    "example": "...the dome of the Capitol.",
    "exampleCn": "…国会大厦的穹顶。"
   },
   {
    "word": "reckon",
    "phonetic": "'rɛkən",
    "pos": "vt",
    "meaning": "测算，估计；认为；计算；估计；计算；猜想，料想",
    "example": "The expression ‘full moon’ means the fourteenth day of the moon reckoned from its first appearance.",
    "exampleCn": "所谓“满月”是指从新月初现算起的第14天。"
   },
   {
    "word": "rarely",
    "phonetic": "'rɛrli",
    "pos": "adv.",
    "meaning": "非常地，难得",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "rural",
    "phonetic": "'rʊrəl",
    "pos": "adj.",
    "meaning": "农村的，乡下的；田园的，有乡村风味的",
    "example": "a rural setting",
    "exampleCn": "乡村环境"
   },
   {
    "word": "imitation",
    "phonetic": ",ɪmɪ'teʃən",
    "pos": "n.",
    "meaning": "模仿，仿造；仿制品；人造的，仿制的",
    "example": "The remake of ‘Casablanca’ was a pale imitation (= something that is much less good than the thing it imitates ) of the original movie.",
    "exampleCn": "重拍的《卡萨布兰卡》远不如原版。"
   },
   {
    "word": "steward",
    "phonetic": "'stuɚd",
    "pos": "n.",
    "meaning": "管家；乘务员；膳务员；工会管事；管理",
    "example": "race stewards",
    "exampleCn": "比赛组织者"
   },
   {
    "word": "abound",
    "phonetic": "ə'baʊnd",
    "pos": "vi",
    "meaning": "富于；充满",
    "example": "Rumors of such coordination abound, but as with many rumors, they have no basis in fact.",
    "exampleCn": "关于这类协调的谣传很多；但如同许多其他谣传一样，它们没有事实根据。"
   },
   {
    "word": "colonial",
    "phonetic": "kə'lonɪəl",
    "pos": "adj.",
    "meaning": "殖民地的，关于殖民的；殖民地居民",
    "example": "the struggle against colonial rule",
    "exampleCn": "反抗殖民统治的斗争"
   },
   {
    "word": "immense",
    "phonetic": "ɪ'mɛns",
    "pos": "adj.",
    "meaning": "巨大的，广大的；无边无际的；非常好的",
    "example": "People who travel by rail still read an immense amount.",
    "exampleCn": "人们坐火车旅行时仍然会读很多书。"
   },
   {
    "word": "placard",
    "phonetic": "'plækɑrd",
    "pos": "n.",
    "meaning": "海报，标语牌；招贴；张贴，悬挂；公布；张贴公告于",
    "example": "a huge placard saying ‘Welcome to Derbyville’",
    "exampleCn": "印有“欢迎来到德比维尔”的巨幅标语牌"
   },
   {
    "word": "client",
    "phonetic": "'klaɪənt",
    "pos": "n.",
    "meaning": "[计][经]客户；顾客；[审计]委托人",
    "example": "a meeting with an important client",
    "exampleCn": "与一位重要客户的会面"
   },
   {
    "word": "flavour",
    "phonetic": "'fleivə",
    "pos": "n.",
    "meaning": "香味；滋味",
    "example": "Which flavour do you want - chocolate or vanilla?",
    "exampleCn": "你要哪种味道的，巧克力还是香草？"
   },
   {
    "word": "exchange",
    "phonetic": "ɪks'tʃendʒ",
    "pos": "n.",
    "meaning": "[通信][计]交换；交流；交易所；[金融]兑换；[通信][计]交换；交易；[金融]兑换；[通信][计]交换；交易；[金融]兑换",
    "example": "Four of my cassettes for your Madonna CD is a fair exchange.",
    "exampleCn": "我用四盒磁带换你的麦当娜激光唱片很公平。"
   },
   {
    "word": "pamphlet",
    "phonetic": "ˈpæmflɪt",
    "pos": "n.",
    "meaning": "小册子",
    "example": "a political pamphlet",
    "exampleCn": "政治宣传册"
   },
   {
    "word": "module",
    "phonetic": "'mɑdʒul",
    "pos": "n.",
    "meaning": "[计]模块；[电子]组件；模数",
    "example": "a module in mathematics",
    "exampleCn": "数学课的一个单元"
   },
   {
    "word": "gentle",
    "phonetic": "'dʒɛntl",
    "pos": "adj.",
    "meaning": "温和的；文雅的；使温和，使驯服；蛆，饵",
    "example": "Arthur was a very gentle, caring person.",
    "exampleCn": "阿瑟是一个非常温柔体贴的人。"
   },
   {
    "word": "annoy",
    "phonetic": "ə'nɔɪ",
    "pos": "vt",
    "meaning": "骚扰；惹恼；打搅；惹恼；令人讨厌；打搅；烦恼（等于annoyance）",
    "example": "What annoyed him most was that he had received no apology.",
    "exampleCn": "最令他生气的是没人向他道歉。"
   },
   {
    "word": "luminous",
    "phonetic": "'lʊmənəs",
    "pos": "adj.",
    "meaning": "[光]发光的；明亮的；清楚的",
    "example": "luminous paint",
    "exampleCn": "发光涂料"
   },
   {
    "word": "exclaim",
    "phonetic": "ɪk'sklem",
    "pos": "vi",
    "meaning": "呼喊，惊叫；大声叫嚷",
    "example": "‘No!’ she exclaimed in shock.",
    "exampleCn": "“不！”她惊呼道。"
   },
   {
    "word": "pertinent",
    "phonetic": "'pɝtnənt",
    "pos": "adj.",
    "meaning": "相关的，相干的；中肯的；切题的",
    "example": "He asked me a lot of very pertinent questions .",
    "exampleCn": "他问了我许多直接相关的问题。"
   },
   {
    "word": "certify",
    "phonetic": "'sɝtə'fai",
    "pos": "v.",
    "meaning": "证明；保证",
    "example": "The accounts were certified by an auditor.",
    "exampleCn": "这些账目经审计员核实过。"
   },
   {
    "word": "revenue",
    "phonetic": "'rɛvənu",
    "pos": "n.",
    "meaning": "税收，国家的收入；[会计]收益",
    "example": "advertising revenue",
    "exampleCn": "广告收入"
   },
   {
    "word": "insurance",
    "phonetic": "ɪn'ʃʊrəns",
    "pos": "n.",
    "meaning": "[保险]保险；保险费；保险契约；赔偿金",
    "example": "Your father took out insurance to cover the mortgage.",
    "exampleCn": "你父亲购买了抵押借款保险。"
   },
   {
    "word": "authority",
    "phonetic": "ə'θɔrəti",
    "pos": "n.",
    "meaning": "权威；[法]权力；当局",
    "example": "an agreement between the US and Colombian authorities",
    "exampleCn": "美国和哥伦比亚当局的一份协议"
   },
   {
    "word": "endorse",
    "phonetic": "ɪn'dɔrs",
    "pos": "vt",
    "meaning": "背书；认可；签署；赞同；在背面签名",
    "example": "I can endorse their opinion wholeheartedly.",
    "exampleCn": "我可以全心全意地支持他们的观点。"
   },
   {
    "word": "wrap",
    "phonetic": "ræp",
    "pos": "vt",
    "meaning": "包；缠绕；隐藏；掩护；包起来；缠绕；穿外衣；外套；围巾",
    "example": "I’ve still got a few Christmas presents to wrap up.",
    "exampleCn": "我还有一些圣诞礼物要包起来。"
   },
   {
    "word": "lenient",
    "phonetic": "'linɪənt",
    "pos": "adj.",
    "meaning": "宽大的；仁慈的",
    "example": "the lenient sentences handed down by some judges",
    "exampleCn": "一些法官作出的宽大判决"
   },
   {
    "word": "pompous",
    "phonetic": "'pɑmpəs",
    "pos": "adj.",
    "meaning": "自大的；浮夸的；华而不实的；爱炫耀的",
    "example": "He seems rather pompous.",
    "exampleCn": "他看上去相当自负。"
   },
   {
    "word": "decorate",
    "phonetic": "'dɛkəret",
    "pos": "vt",
    "meaning": "装饰；布置；授勋给；装饰；布置",
    "example": "Children’s pictures decorated the walls of the classroom.",
    "exampleCn": "教室的墙上装点着儿童画。"
   },
   {
    "word": "infinite",
    "phonetic": "'ɪnfɪnət",
    "pos": "adj.",
    "meaning": "无限的，[数]无穷的；无数的；极大的；无限；[数]无穷大；无限的东西（如空间，时间）",
    "example": "The universe is infinite.",
    "exampleCn": "宇宙是无限的。"
   },
   {
    "word": "perplex",
    "phonetic": "pɚ'plɛks",
    "pos": "vt",
    "meaning": "使困惑，使为难；使复杂化",
    "example": "Shea’s symptoms perplexed the doctors.",
    "exampleCn": "谢伊的症状令医生们困惑。"
   },
   {
    "word": "snatch",
    "phonetic": "snætʃ",
    "pos": "n.",
    "meaning": "抢夺；抓举；小量；夺得；抽空做；及时救助；抢走；很快接受",
    "example": "Mick snatched the cards from Archie's hand.",
    "exampleCn": "米克一把夺过阿彻手里的牌。"
   },
   {
    "word": "sweep",
    "phonetic": "swip",
    "pos": "vt",
    "meaning": "扫除；猛拉；掸去；扫，打扫；席卷；扫视；袭击；打扫，扫除；范围；全胜",
    "example": "The kitchen needs a good sweep.",
    "exampleCn": "厨房需要好好扫一扫了。"
   },
   {
    "word": "odor",
    "phonetic": "'oʊdə",
    "pos": "n.",
    "meaning": "气味；名声",
    "example": "The researchers demonstrate that it is possible to generate odor in a compact device that can fit on the back of a TV with potentially thousands of odors.",
    "exampleCn": "研究员表示，将一个可以散发上千种气味的小型设备安装在电视背后，从而实现电视(根据情景)生成气味是可能的。"
   },
   {
    "word": "rip",
    "phonetic": "rɪp",
    "pos": "vt",
    "meaning": "撕；锯；裂开，被撕裂；裂口，裂缝",
    "example": "Her clothes had all been ripped.",
    "exampleCn": "她的衣服都被撕破了。"
   },
   {
    "word": "livestock",
    "phonetic": "'laɪvstɑk",
    "pos": "n.",
    "meaning": "牲畜；[畜牧]家畜",
    "example": "The heavy rains and flooding killed scores of livestock.",
    "exampleCn": "大雨和洪水淹死了许多家畜。"
   },
   {
    "word": "unlikely",
    "phonetic": "ʌn'laɪkli",
    "pos": "adv.",
    "meaning": "未必",
    "example": "Donna might be able to come tomorrow, but it’s very unlikely.",
    "exampleCn": "唐娜明天也许能来，不过这可能性很小。"
   },
   {
    "word": "signature",
    "phonetic": "'sɪgnətʃɚ",
    "pos": "n.",
    "meaning": "署名；签名；信号",
    "example": "Her signature is totally illegible (= cannot be read ) .",
    "exampleCn": "她的签字完全无法辨认。"
   },
   {
    "word": "grieve",
    "phonetic": "griv",
    "pos": "vt",
    "meaning": "使悲伤，使苦恼；悲痛，哀悼",
    "example": "People need time to grieve after the death of a loved one.",
    "exampleCn": "人们在所爱之人去世后会有一段悲伤期。"
   },
   {
    "word": "dizzy",
    "phonetic": "'dɪzi",
    "pos": "adj.",
    "meaning": "晕眩的；使人头晕的；昏乱的；心不在焉的；愚蠢的；使头晕眼花；使混乱；使茫然",
    "example": "The heat and the champagne made him feel dizzy .",
    "exampleCn": "高温和香槟酒使他感到眩晕。"
   },
   {
    "word": "ancestor",
    "phonetic": "'ænsɛstɚ",
    "pos": "n.",
    "meaning": "始祖，[生物]祖先；被继承人",
    "example": "My ancestors were French.",
    "exampleCn": "我的祖先是法国人。"
   },
   {
    "word": "vanish",
    "phonetic": "'vænɪʃ",
    "pos": "vi",
    "meaning": "[数]消失；突然不见；成为零；使不见，[数]使消失",
    "example": "My keys were here a minute ago but now they’ve vanished.",
    "exampleCn": "我的钥匙刚刚还在这里，现在却不翼而飞了。"
   },
   {
    "word": "gallery",
    "phonetic": "'gæləri",
    "pos": "n.",
    "meaning": "画廊；走廊；旁听席；地道",
    "example": "an exhibition of African art at the Hayward Gallery",
    "exampleCn": "海沃德美术馆的非洲艺术展览"
   },
   {
    "word": "manual",
    "phonetic": "'mænjuəl",
    "pos": "adj.",
    "meaning": "手工的；体力的；手册，指南",
    "example": "People in manual occupations have a lower life expectancy.",
    "exampleCn": "干体力活的人预期寿命较短。"
   },
   {
    "word": "whereas",
    "phonetic": "'wɛr'æz",
    "pos": "conj.",
    "meaning": "然而；鉴于；反之",
    "example": "He had never done anything for them, whereas they had done everything for him.",
    "exampleCn": "他从未为他们做过任何事，反之他们却为他做了所有事。"
   },
   {
    "word": "glare",
    "phonetic": "ɡlɛr",
    "pos": "n.",
    "meaning": "刺眼；[光]耀眼的光；受公众注目",
    "example": "She gave him a hostile glare.",
    "exampleCn": "她狠狠地瞪了他一眼。"
   },
   {
    "word": "fret",
    "phonetic": "frɛt",
    "pos": "vt",
    "meaning": "使烦恼；焦急；使磨损；烦恼；焦急；磨损；烦躁；焦急；磨损",
    "example": "Don’t fret – everything will be all right.",
    "exampleCn": "别担心——一切都会好的。"
   },
   {
    "word": "admission",
    "phonetic": "əd'mɪʃən",
    "pos": "n.",
    "meaning": "承认；入场费；进入许可；坦白；录用",
    "example": "Reese, by his own admission , lacks the necessary experience.",
    "exampleCn": "里斯自己也承认缺乏必要的经验。"
   },
   {
    "word": "criminal",
    "phonetic": "'krɪmɪnl",
    "pos": "n.",
    "meaning": "罪犯；刑事的；犯罪的；罪恶的",
    "example": "Police have described the man as a violent and dangerous criminal.",
    "exampleCn": "警方形容那名男子是个凶暴而危险的罪犯。"
   },
   {
    "word": "drastic",
    "phonetic": "'dræstɪk",
    "pos": "adj.",
    "meaning": "激烈的；猛烈的",
    "example": "drastic cuts in government spending",
    "exampleCn": "政府开支的急剧削减"
   },
   {
    "word": "lucid",
    "phonetic": "'lusɪd",
    "pos": "adj.",
    "meaning": "明晰的；透明的；易懂的；头脑清楚的",
    "example": "You must write in a clear and lucid style.",
    "exampleCn": "你的写作风格一定要清楚易懂。"
   },
   {
    "word": "simultaneous",
    "phonetic": ",saɪml'tenɪəs",
    "pos": "adj.",
    "meaning": "同时的；联立的；同时发生的",
    "example": "They grabbed each other’s hands in simultaneous panic.",
    "exampleCn": "他们俩同时惊慌起来，相互抓住对方的手。"
   },
   {
    "word": "static",
    "phonetic": "'stætɪk",
    "pos": "adj.",
    "meaning": "静态的；[电磁]静电的；静力的",
    "example": "Economists predict that house prices will remain static for a long period.",
    "exampleCn": "经济学家预测，房价将长期保持稳定。"
   },
   {
    "word": "redundant",
    "phonetic": "rɪ'dʌndənt",
    "pos": "adj.",
    "meaning": "[计]多余的，过剩的；被解雇的，失业的；冗长的，累赘的",
    "example": "the removal of redundant information",
    "exampleCn": "多余信息的删除"
   },
   {
    "word": "be",
    "phonetic": "bi",
    "pos": "prep.",
    "meaning": "在，存在；是",
    "example": "Don’t disturb me while I’m working.",
    "exampleCn": "我工作的时候不要打扰我。"
   },
   {
    "word": "elite",
    "phonetic": "ɪˈliːt",
    "pos": "n.",
    "meaning": "精英；精华；中坚分子",
    "example": "...a government comprised mainly of the elite.",
    "exampleCn": "…主要由精英组成的政府。"
   },
   {
    "word": "economic",
    "phonetic": "ˌikəˈnɑmɪk, ˌɛkəˈ-nɑmɪk",
    "pos": "adj.",
    "meaning": "经济的；经济学的，便宜的",
    "example": "Economic growth is slow.",
    "exampleCn": "经济增长缓慢。"
   },
   {
    "word": "destine",
    "phonetic": "'dɛstɪn",
    "pos": "vt",
    "meaning": "注定；命定；预定",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "janitor",
    "phonetic": "'dʒænɪtɚ",
    "pos": "n.",
    "meaning": "看门人；守卫；门警；幽门",
    "example": "Ed Roberts had been a school janitor for a long time.",
    "exampleCn": "埃德·罗伯茨做学校的看门人已很久了。"
   },
   {
    "word": "thermometer",
    "phonetic": "θɚ'mɑmɪtɚ",
    "pos": "n.",
    "meaning": "[仪]温度计；[医]体温计",
    "example": "The thermometer registered over 100˚C.",
    "exampleCn": "温度计显示高于100摄氏度。"
   },
   {
    "word": "advertise",
    "phonetic": "'ædvɚtaɪz",
    "pos": "vt",
    "meaning": "通知；为…做广告；使突出",
    "example": "They no longer advertise alcohol or cigarettes at sporting events.",
    "exampleCn": "他们不再在体育赛事上做烟酒广告了。"
   },
   {
    "word": "commence",
    "phonetic": "kə'mɛns",
    "pos": "vt",
    "meaning": "开始；着手",
    "example": "Work will commence on the new building immediately.",
    "exampleCn": "新大楼即将破土动工。"
   },
   {
    "word": "project",
    "phonetic": "prəˈdʒɛkt; prɑdʒɛkt",
    "pos": "vi",
    "meaning": "设计；计划；表达；投射；设计；计划；发射；放映；工程；计划；事业",
    "example": "The project aims to provide an analysis of children’s emotions.",
    "exampleCn": "该计划旨在对儿童情绪作出分析。"
   },
   {
    "word": "retail",
    "phonetic": "'ritel",
    "pos": "n.",
    "meaning": "零售",
    "example": "a retail price of £8.99",
    "exampleCn": "8.99英镑的零售价"
   },
   {
    "word": "rear",
    "phonetic": "rɪr",
    "pos": "vt",
    "meaning": "培养；树立；栽种；暴跳；高耸；向后；在后面；[军]后方的；后面的；背面的；后面；屁股；后方部队",
    "example": "He settled back in the rear of the taxi.",
    "exampleCn": "他在出租车后座，往后靠着坐好了。"
   },
   {
    "word": "vital",
    "phonetic": "'vaɪtl",
    "pos": "adj.",
    "meaning": "至关重要的；生死攸关的；有活力的",
    "example": "The work she does is absolutely vital.",
    "exampleCn": "她所做的工作至关重要。"
   },
   {
    "word": "mission",
    "phonetic": "'mɪʃən",
    "pos": "n.",
    "meaning": "使命，任务；代表团；布道；派遣；向……传教",
    "example": "He was sent on over 200 missions before being killed in action.",
    "exampleCn": "在阵亡之前他奉命执行过200多次军事任务。"
   },
   {
    "word": "paralyse",
    "phonetic": "'pærəlaiz",
    "pos": "v.",
    "meaning": "使麻痹，使瘫痪",
    "example": "Her legs were partly paralysed in the crash.",
    "exampleCn": "在撞车事故中她的双腿部分瘫痪。"
   },
   {
    "word": "massive",
    "phonetic": "'mæsɪv",
    "pos": "adj.",
    "meaning": "大量的；巨大的，厚重的；魁伟的",
    "example": "The bell is massive, weighing over 40 tons.",
    "exampleCn": "那口钟非常大，有40多吨重。"
   },
   {
    "word": "glacier",
    "phonetic": "'ɡleʃɚ",
    "pos": "n.",
    "meaning": "冰河，[地理][水文]冰川",
    "example": "The glacier calved a large iceberg.",
    "exampleCn": "冰川崩解而产生一个大冰山。"
   },
   {
    "word": "oxide",
    "phonetic": "'ɑksaɪd",
    "pos": "n.",
    "meaning": "[化学]氧化物",
    "example": "iron oxide",
    "exampleCn": "氧化铁"
   },
   {
    "word": "occur",
    "phonetic": "ə'kɝ",
    "pos": "vi",
    "meaning": "发生；出现；存在",
    "example": "A third of accidental deaths occur in the home.",
    "exampleCn": "有三分之一的意外死亡发生在家里。"
   },
   {
    "word": "carry",
    "phonetic": "'kæri",
    "pos": "vt",
    "meaning": "拿，扛；携带；支持；搬运；[交]运载；[计]进位；射程",
    "example": "The ship was carrying drugs.",
    "exampleCn": "这艘船上载有毒品。"
   },
   {
    "word": "loan",
    "phonetic": "lon",
    "pos": "n.",
    "meaning": "[金融]贷款；借款；借；借给",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "overlook",
    "phonetic": ",ovɚ'lʊk",
    "pos": "vt",
    "meaning": "忽略；俯瞰；远眺；检查；高耸于…之上；忽视；眺望",
    "example": "It is easy to overlook a small detail like that.",
    "exampleCn": "那样的小细节很容易被忽略。"
   },
   {
    "word": "periscope",
    "phonetic": "'pɛrɪskop",
    "pos": "n.",
    "meaning": "[光][军][船]潜望镜",
    "example": "Submarines are most vulnerable to detection when the submarine commander uses a periscope to assess the situation on the surface.",
    "exampleCn": "当潜艇指挥官使用潜望镜对海面态势进行评估的时候最容易被探测到也最容易被攻击。"
   },
   {
    "word": "typical",
    "phonetic": "'tɪpɪkl",
    "pos": "adj.",
    "meaning": "[数]典型的；特有的；象征性的",
    "example": "typical British weather",
    "exampleCn": "典型的英国天气"
   },
   {
    "word": "priority",
    "phonetic": "praɪ'ɔrəti",
    "pos": "n.",
    "meaning": "[通信][计]优先；优先权；[数]优先次序；优先考虑的事",
    "example": "Members receive priority bookings and reduced ticket prices to all concerts.",
    "exampleCn": "会员可优先预订所有音乐会的门票，并享受优惠票价。"
   },
   {
    "word": "weave",
    "phonetic": "wiv",
    "pos": "vt",
    "meaning": "[纺]编织；编排；使迂回前进；织物；[纺]织法；编织式样",
    "example": "hand-woven scarves",
    "exampleCn": "手织围巾"
   },
   {
    "word": "overt",
    "phonetic": "o'vɝt",
    "pos": "adj.",
    "meaning": "明显的；公然的；蓄意的",
    "example": "an overt attempt to silence their political opponents",
    "exampleCn": "他们想压制政敌言论的明显企图"
   },
   {
    "word": "flank",
    "phonetic": "flæŋk",
    "pos": "n.",
    "meaning": "侧面；[军]侧翼；侧腹",
    "example": "We were attacked on our left flank.",
    "exampleCn": "我们的左翼受到攻击。"
   },
   {
    "word": "overcome",
    "phonetic": ",ovɚ'kʌm",
    "pos": "vt",
    "meaning": "克服；胜过；克服；得胜",
    "example": "He struggled to overcome his shyness.",
    "exampleCn": "他努力克服自己的羞怯。"
   },
   {
    "word": "alter",
    "phonetic": "'ɔltɚ",
    "pos": "vt",
    "meaning": "改变，更改；改变；修改",
    "example": "Her face hadn’t altered much over the years.",
    "exampleCn": "过了这么多年，她的容貌并没有多大改变。"
   },
   {
    "word": "interval",
    "phonetic": "'ɪntɚvl",
    "pos": "n.",
    "meaning": "间隔；间距；幕间休息",
    "example": "He left the room, returning after a short interval with a message.",
    "exampleCn": "他离开房间，过了一会儿就带回来一条消息。"
   },
   {
    "word": "sheer",
    "phonetic": "ʃɪr",
    "pos": "adj.",
    "meaning": "绝对的；透明的；峻峭的；完全；陡峭地；偏航；使偏航；使急转向；偏航；[纺]透明薄织物",
    "example": "There was a sheer drop just outside my window.",
    "exampleCn": "就在我的窗外有一个陡坡。"
   },
   {
    "word": "slight",
    "phonetic": "slaɪt",
    "pos": "adj.",
    "meaning": "轻微的，少量的；脆弱的；细长的；不重要的；轻视，忽略；怠慢；怠慢；轻蔑",
    "example": "a slight improvement",
    "exampleCn": "些许的改进"
   },
   {
    "word": "simulate",
    "phonetic": "'sɪmjulet",
    "pos": "vt",
    "meaning": "模仿；假装；冒充；模仿的；假装的",
    "example": "a machine that simulates conditions in space",
    "exampleCn": "一台模拟太空环境的机器"
   },
   {
    "word": "convenience",
    "phonetic": "kən'vinɪəns",
    "pos": "n.",
    "meaning": "便利；厕所；便利的事物",
    "example": "Ready meals sell well because of their convenience.",
    "exampleCn": "即食餐因为方便销路好。"
   },
   {
    "word": "electronic",
    "phonetic": "ɪˌlekˈtrɑːnɪk",
    "pos": "adj.",
    "meaning": "电子的，用电子操纵的",
    "example": "electronic games",
    "exampleCn": "电子游戏"
   },
   {
    "word": "verbal",
    "phonetic": "'vɝbl",
    "pos": "adj.",
    "meaning": "口头的；言语的；动词的；照字面的",
    "example": "verbal skills",
    "exampleCn": "语言技能"
   },
   {
    "word": "mildew",
    "phonetic": "'mɪldu",
    "pos": "n.",
    "meaning": "霉；[植保]霉病；使发霉；发霉；生霉",
    "example": "The room smelled of mildew.",
    "exampleCn": "该房间有股霉味。"
   },
   {
    "word": "disposition",
    "phonetic": "'dɪspə'zɪʃən",
    "pos": "n.",
    "meaning": "处置；[心理]性情；[军]部署；倾向",
    "example": "the disposition of assets on death",
    "exampleCn": "身后财产的处置"
   },
   {
    "word": "marvel",
    "phonetic": "'mɑrvl",
    "pos": "n.",
    "meaning": "奇迹",
    "example": "The whale, like the dolphin, has become a symbol of the marvels of creation.",
    "exampleCn": "鲸，和海豚一样，已经成为造物杰作的象征。"
   },
   {
    "word": "freight",
    "phonetic": "fret",
    "pos": "vt",
    "meaning": "运送；装货；使充满；货运；[交]运费；[水运]船货",
    "example": "freight services",
    "exampleCn": "货运公司"
   },
   {
    "word": "tease",
    "phonetic": "tiz",
    "pos": "vt",
    "meaning": "取笑；戏弄；梳理；欺负；强求；使起毛；戏弄；爱纠缠的小孩；挑逗者；卖弄风骚的女孩；取笑",
    "example": "Don’t get upset. I was only teasing .",
    "exampleCn": "别生气，我只是在逗你玩。"
   },
   {
    "word": "intermittent",
    "phonetic": ",ɪntɚ'mɪtənt",
    "pos": "adj.",
    "meaning": "间歇的，断断续续的",
    "example": "The weather forecast is for sun, with intermittent showers.",
    "exampleCn": "天气预报为晴，有阵雨。"
   },
   {
    "word": "tame",
    "phonetic": "teɪm",
    "pos": "adj.",
    "meaning": "驯服的；平淡的；乏味的；顺从的；驯养；使变得平淡；制服",
    "example": "If you have a tame doctor, he might give you a sick note.",
    "exampleCn": "要是你的医生好说话，他可能会给你开个病假条。"
   },
   {
    "word": "sluggish",
    "phonetic": "'slʌɡɪʃ",
    "pos": "adj.",
    "meaning": "萧条的；迟钝的；行动迟缓的；懒惰的",
    "example": "Alex woke late, feeling tired and sluggish.",
    "exampleCn": "亚历克斯醒得很晚，感到很倦怠。"
   },
   {
    "word": "fulfil",
    "phonetic": "ful'fil",
    "pos": "vt",
    "meaning": "履行；完成；实践；满足",
    "example": "There is little doubt that the scheme fulfils a need for our community.",
    "exampleCn": "毫无疑问，这计划会满足我们社区的需求。"
   },
   {
    "word": "compass",
    "phonetic": "'kʌmpəs",
    "pos": "n.",
    "meaning": "指南针，[航][水运]罗盘；圆规；包围",
    "example": "a map and compass",
    "exampleCn": "地图和指南针"
   },
   {
    "word": "paternity",
    "phonetic": "pə'tɝnəti",
    "pos": "n.",
    "meaning": "父权；父系；父系后裔",
    "example": "The paternity of the child is in dispute.",
    "exampleCn": "这个孩子的生父是谁尚有疑问。"
   },
   {
    "word": "ferocious",
    "phonetic": "fə'roʃəs",
    "pos": "adj.",
    "meaning": "残忍的；惊人的",
    "example": "a ferocious, hungry lion",
    "exampleCn": "一头凶猛的饿狮"
   },
   {
    "word": "intense",
    "phonetic": "ɪn'tɛns",
    "pos": "adj.",
    "meaning": "强烈的；紧张的；非常的；热情的",
    "example": "Young people today are under intense pressure to succeed.",
    "exampleCn": "如今的年轻人面临要出人头地的巨大压力。"
   },
   {
    "word": "humidity",
    "phonetic": "hju'mɪdəti",
    "pos": "n.",
    "meaning": "[气象]湿度；湿气",
    "example": "The room is kept at 72 degrees and 50% relative humidity.",
    "exampleCn": "房间的温度保持在72度，相对湿度50%。"
   },
   {
    "word": "elaborate",
    "phonetic": "ɪ'læbəret",
    "pos": "adj.",
    "meaning": "精心制作的；详尽的；煞费苦心的；精心制作；详细阐述；从简单成分合成（复杂有机物）；详细描述；变复杂",
    "example": "pure silks embroidered with elaborate patterns",
    "exampleCn": "绣有精美图案的真丝衣服"
   },
   {
    "word": "underlying",
    "phonetic": ",ʌndɚ'laɪɪŋ",
    "pos": "adj.",
    "meaning": "潜在的；根本的；在下面的；优先的",
    "example": "To stop a problem you have to understand its underlying causes.",
    "exampleCn": "要解决问题，你得了解其潜在原因。"
   },
   {
    "word": "endow",
    "phonetic": "ɪn'daʊ",
    "pos": "vt",
    "meaning": "赋予；捐赠；天生具有",
    "example": "The ambassador has endowed a $1 million public-service fellowships programme.",
    "exampleCn": "大使资助了一个100万美元的公共服务奖学金项目。"
   },
   {
    "word": "anticipate",
    "phonetic": "æn'tɪsə'pet",
    "pos": "vt",
    "meaning": "预期，期望；占先，抢先；提前使用",
    "example": "Sales are better than anticipated.",
    "exampleCn": "销量比预期要好。"
   },
   {
    "word": "offshore",
    "phonetic": ",ɔf'ʃɔr",
    "pos": "adj.",
    "meaning": "离岸的；[海洋]近海的；吹向海面的；[海洋]向海面，向海",
    "example": "The building can accommodate all of the offshore workers and protect them from hurricane damage.",
    "exampleCn": "这个建筑能容纳所有的海上工人并且保护他们不受飓风的伤害。"
   },
   {
    "word": "detriment",
    "phonetic": "'dɛtrɪmənt",
    "pos": "n.",
    "meaning": "损害；伤害；损害物",
    "example": "Work hard to succeed but not to the detriment of others.",
    "exampleCn": "在不损害他人利益的前提下为成功艰苦奋斗。"
   },
   {
    "word": "nourishment",
    "phonetic": "'nɝɪʃmənt",
    "pos": "n.",
    "meaning": "食物；营养品；滋养品",
    "example": "His favorite fruits and vegetables as well as 55 lb. of bamboo will be on board for nourishment.",
    "exampleCn": "除了它最喜爱的水果和蔬菜以外还有55磅的竹子将会作为它在飞机上的食物。"
   },
   {
    "word": "lick",
    "phonetic": "lɪk",
    "pos": "vt",
    "meaning": "舔；卷过；鞭打；舔；打；少许",
    "example": "The dog jumped up and licked her face.",
    "exampleCn": "那只狗跳起来舔她的脸。"
   },
   {
    "word": "marsh",
    "phonetic": "mɑrʃ",
    "pos": "n.",
    "meaning": "沼泽；[地理]湿地；[地理]沼泽的；生长在沼泽地的",
    "example": "He led them away from a marsh.",
    "exampleCn": "他把他们带离沼泽。"
   },
   {
    "word": "perspire",
    "phonetic": "pɚ'spaɪɚ",
    "pos": "vi",
    "meaning": "流汗；分泌；渗出",
    "example": "Willie was perspiring heavily .",
    "exampleCn": "威利大汗淋漓。"
   },
   {
    "word": "gauge",
    "phonetic": "gedʒ",
    "pos": "n.",
    "meaning": "计量器；标准尺寸；容量规格；测量；估计；给…定规格",
    "example": "a 12-gauge shotgun",
    "exampleCn": "12号口径的猎枪"
   },
   {
    "word": "explode",
    "phonetic": "ɪk'splod",
    "pos": "vi",
    "meaning": "爆炸，爆发；激增；使爆炸；爆炸；推翻",
    "example": "The device was thrown at an army patrol but failed to explode.",
    "exampleCn": "炸弹投向了陆军巡逻队，但没有爆炸。"
   },
   {
    "word": "fringe",
    "phonetic": "frɪndʒ",
    "pos": "n.",
    "meaning": "边缘；穗；刘海；边缘的；附加的",
    "example": "a tall girl with straight brown hair and a fringe",
    "exampleCn": "一头棕色直发、留着刘海的高个子女孩"
   },
   {
    "word": "fascinating",
    "phonetic": "'fæsɪnetɪŋ",
    "pos": "adj.",
    "meaning": "迷人的；吸引人的；使人神魂颠倒的；使…着迷；使…陶醉（fascinate的ing形式）",
    "example": "a fascinating book",
    "exampleCn": "一本引人入胜的书"
   },
   {
    "word": "uneasy",
    "phonetic": "ʌn'izi",
    "pos": "adj.",
    "meaning": "不舒服的；心神不安的；不稳定的",
    "example": "She eventually fell into an uneasy sleep.",
    "exampleCn": "她终于睡着了，但睡得并不踏实。"
   },
   {
    "word": "expedition",
    "phonetic": ",ɛkspə'dɪʃən",
    "pos": "n.",
    "meaning": "远征；探险队；迅速",
    "example": "an expedition to the North Pole",
    "exampleCn": "北极探险"
   },
   {
    "word": "organism",
    "phonetic": "'ɔrɡənɪzəm",
    "pos": "n.",
    "meaning": "有机体；[生物]生物体；微生物",
    "example": "All living organisms have to adapt to changes in environmental conditions.",
    "exampleCn": "一切生物都要适应环境条件的变化。"
   },
   {
    "word": "swallow",
    "phonetic": "'swɑlo",
    "pos": "vt",
    "meaning": "忍受；吞没；吞下；咽下",
    "example": "He swallowed the last of his coffee and asked for the bill.",
    "exampleCn": "他喝完最后一口咖啡，要求结账。"
   },
   {
    "word": "spare",
    "phonetic": "spɛr",
    "pos": "vt",
    "meaning": "节约，吝惜；饶恕；分出，分让；饶恕，宽恕；节约；多余的；瘦的；少量的；剩余；备用零件",
    "example": "Have you got any spare boxes?",
    "exampleCn": "你有没有多余的盒子？"
   },
   {
    "word": "means",
    "phonetic": "minz",
    "pos": "n.",
    "meaning": "手段；方法；财产（mean的复数）；意思是；打算（mean的第三人称单数）",
    "example": "The only means of communication was sign language.",
    "exampleCn": "唯一的交流方法是手语。"
   },
   {
    "word": "proportion",
    "phonetic": "prə'pɔrʃən",
    "pos": "n.",
    "meaning": "[数]比例；部分；面积；均衡；使成比例；使均衡；分摊",
    "example": "The proportion of women in the profession had risen to 17.3%.",
    "exampleCn": "从事那个职业的女性比例已经增长到17.3%。"
   },
   {
    "word": "microfilm",
    "phonetic": "'maɪkrofɪlm",
    "pos": "n.",
    "meaning": "微缩胶片",
    "example": "It was to harbor drawers brimming with reference books, microfilm and bibliographic cards.",
    "exampleCn": "操作台的抽屉里塞满了参考书、缩微胶片和各种书目卡片。"
   },
   {
    "word": "obscene",
    "phonetic": "əb'sin",
    "pos": "adj.",
    "meaning": "淫秽的；猥亵的；可憎的",
    "example": "Bradford made an obscene gesture.",
    "exampleCn": "布拉德福德做了个下流手势。"
   },
   {
    "word": "meek",
    "phonetic": "mik",
    "pos": "adj.",
    "meaning": "温顺的；谦恭的；驯服的",
    "example": "He was always so meek and mild .",
    "exampleCn": "他总是那么温顺。"
   },
   {
    "word": "herb",
    "phonetic": "ɝb",
    "pos": "n.",
    "meaning": "香草，[植]药草",
    "example": "Sprinkle the dish with chopped fresh herbs.",
    "exampleCn": "在菜肴上撒些切碎的新鲜香草。"
   },
   {
    "word": "mansion",
    "phonetic": "'mænʃən",
    "pos": "n.",
    "meaning": "大厦；宅邸",
    "example": "a beautiful country mansion",
    "exampleCn": "漂亮的乡村宅第"
   },
   {
    "word": "minute",
    "phonetic": "'mɪnɪt",
    "pos": "n.",
    "meaning": "[计量][数]分，分钟；片刻，一会儿；备忘录，笔记；会议记录；微小的，详细的",
    "example": "It takes me ten minutes to walk to work.",
    "exampleCn": "我步行上班要用十分钟。"
   },
   {
    "word": "outcry",
    "phonetic": "'aʊtkraɪ",
    "pos": "n.",
    "meaning": "强烈抗议；大声疾呼；尖叫；倒彩",
    "example": "The closure of the local hospital has caused a huge public outcry.",
    "exampleCn": "当地医院的关闭激起了大规模的公众抗议。"
   },
   {
    "word": "preface",
    "phonetic": "ˈpref.ɪs",
    "pos": "n.",
    "meaning": "前言；引语；为…加序言；以…开始",
    "example": "...the preface to Kelman's novel.",
    "exampleCn": "…凯尔曼小说的前言。"
   },
   {
    "word": "sediment",
    "phonetic": "sɛdəmənt",
    "pos": "n.",
    "meaning": "[地质]沉积；[化学]沉淀物",
    "example": "a thick layer of sediment",
    "exampleCn": "一层厚厚的沉积物"
   },
   {
    "word": "resign",
    "phonetic": "rɪ'zaɪn",
    "pos": "vt",
    "meaning": "辞职；放弃；委托；使听从；辞职",
    "example": "A hospital administrator has resigned over claims he lied to get the job.",
    "exampleCn": "一位医院主管因为有人声称他的职位是骗来的而辞职了。"
   },
   {
    "word": "torch",
    "phonetic": "tɔrtʃ",
    "pos": "n.",
    "meaning": "火把，火炬；手电筒；启发之物",
    "example": "We shone our torches around the cavern.",
    "exampleCn": "我们用手电筒照着山洞。"
   },
   {
    "word": "deteriorate",
    "phonetic": "dɪ'tɪrɪəret",
    "pos": "vi",
    "meaning": "恶化，变坏；恶化",
    "example": "Ethel’s health has deteriorated.",
    "exampleCn": "埃塞尔的健康状况恶化了。"
   },
   {
    "word": "degenerate",
    "phonetic": "dɪ'dʒɛnəret",
    "pos": "vt",
    "meaning": "[数][生物]使退化；恶化；[数][生物]退化；堕落；[数][生物]退化的；堕落的；堕落的人",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "characterize",
    "phonetic": "'kærəktə'raɪz",
    "pos": "v.",
    "meaning": "表示的特征",
    "example": "Bright colours characterize his paintings.",
    "exampleCn": "明亮的色彩是他绘画作品的特点。"
   },
   {
    "word": "parade",
    "phonetic": "pə'red",
    "pos": "n.",
    "meaning": "游行；阅兵；炫耀；行进；阅兵场；游行；炫耀；列队行进；游行；炫耀；列队行进",
    "example": "Young athletes will get a chance to parade their skills.",
    "exampleCn": "年轻运动员将有机会一展身手。"
   },
   {
    "word": "let",
    "phonetic": "lɛt",
    "pos": "vt",
    "meaning": "允许，让；出租；假设；妨碍；出租；被承包；障碍；出租屋",
    "example": "I can’t come out tonight – my dad won’t let me.",
    "exampleCn": "今天晚上我不能出来，我爸爸不允许。"
   },
   {
    "word": "swing",
    "phonetic": "swɪŋ",
    "pos": "n.",
    "meaning": "摇摆；摆动；秋千；音律；涨落；摇摆；转向；悬挂；大摇大摆地行走；使旋转；挥舞；悬挂；旋转的；悬挂的；强节奏爵士音乐的",
    "example": "Let your arms swing as you walk.",
    "exampleCn": "边走边摆动双臂。"
   },
   {
    "word": "incongruous",
    "phonetic": "ɪn'kɑŋɡruəs",
    "pos": "adj.",
    "meaning": "不协调的；不一致的；不和谐的",
    "example": "The new theatre looks utterly incongruous in its setting.",
    "exampleCn": "这座新剧院和周围的环境格格不入。"
   },
   {
    "word": "inventory",
    "phonetic": "'ɪnvəntɔri",
    "pos": "n.",
    "meaning": "[贸易]存货，存货清单；详细目录；[会计]财产清册",
    "example": "...one inventory of twelve sails for each yacht.",
    "exampleCn": "…为每艘游艇配备12张帆的存货。"
   },
   {
    "word": "choir",
    "phonetic": "'kwaɪɚ",
    "pos": "n.",
    "meaning": "唱诗班；合唱队；舞蹈队；合唱；合唱",
    "example": "He joined a church choir at the age of eight.",
    "exampleCn": "他八岁时加入了一个教堂唱诗班。"
   },
   {
    "word": "hatch",
    "phonetic": "hætʃ",
    "pos": "n.",
    "meaning": "孵化；[船][航]舱口；[动]孵；策划；孵化",
    "example": "The eggs take three days to hatch.",
    "exampleCn": "这些蛋要三天时间才能孵化。"
   },
   {
    "word": "demonstrate",
    "phonetic": "'dɛmən'stret",
    "pos": "vt",
    "meaning": "证明；展示；论证",
    "example": "The study demonstrates the link between poverty and malnutrition.",
    "exampleCn": "这项研究证明了贫困与营养不良之间的联系。"
   },
   {
    "word": "conversion",
    "phonetic": "kən'vɝʒn",
    "pos": "n.",
    "meaning": "转换；变换；[金融]兑换；改变信仰",
    "example": "...the conversion of disused rail lines into cycle routes.",
    "exampleCn": "…把废弃的铁路改变成自行车道。"
   },
   {
    "word": "dearth",
    "phonetic": "də:θ",
    "pos": "n.",
    "meaning": "缺乏；饥馑；粮食不足",
    "example": "Construction had slowed because of a dearth of labourers.",
    "exampleCn": "建筑进程缓慢是因为劳动力不足。"
   },
   {
    "word": "profane",
    "phonetic": "prə'fen",
    "pos": "adj.",
    "meaning": "亵渎的；世俗的；异教的；亵渎；玷污",
    "example": "profane language",
    "exampleCn": "亵渎的语言"
   },
   {
    "word": "cluster",
    "phonetic": "'klʌstɚ",
    "pos": "n.",
    "meaning": "群；[植]簇；丛；串；群聚；丛生；使聚集；聚集在某人的周围",
    "example": "a diamond cluster ring",
    "exampleCn": "群镶钻戒"
   },
   {
    "word": "revolt",
    "phonetic": "rɪ'volt",
    "pos": "vi",
    "meaning": "反抗；反叛；反感，厌恶；使反感；使恶心；反抗；叛乱；反感",
    "example": "The prime minister is now facing a revolt by members of his own party.",
    "exampleCn": "首相现在面临着党内倒戈。"
   },
   {
    "word": "secular",
    "phonetic": "'sɛkjəlɚ",
    "pos": "adj.",
    "meaning": "世俗的；长期的；现世的；不朽的；牧师",
    "example": "secular education",
    "exampleCn": "世俗教育"
   },
   {
    "word": "agenda",
    "phonetic": "ə'dʒɛndə",
    "pos": "n.",
    "meaning": "议事日程",
    "example": "The Republicans have stuck to their conservative agenda.",
    "exampleCn": "共和党人坚持自己的保守议题。"
   },
   {
    "word": "loop",
    "phonetic": "lup",
    "pos": "vi",
    "meaning": "打环；[航]翻筋斗；环；圈；弯曲部分；[航]翻筋斗",
    "example": "Mrs. Morrell reached for a loop of garden hose.",
    "exampleCn": "莫雷尔夫人伸手去拿一圈橡胶软管。"
   },
   {
    "word": "conscientious",
    "phonetic": "'kɑnʃɪ'ɛnʃəs",
    "pos": "adj.",
    "meaning": "认真的；尽责的；本着良心的；小心谨慎的",
    "example": "A conscientious teacher may feel inclined to take work home.",
    "exampleCn": "一个认真负责的教师可能会想着把工作带回家去做。"
   },
   {
    "word": "revenge",
    "phonetic": "rɪ'vɛndʒ",
    "pos": "n.",
    "meaning": "报复；复仇；报复；替…报仇；洗雪；报仇；雪耻",
    "example": "The poor murdered girl must be revenged.",
    "exampleCn": "一定要为被害的可怜女孩报仇。"
   },
   {
    "word": "friction",
    "phonetic": "'frɪkʃən",
    "pos": "n.",
    "meaning": "[力]摩擦，摩擦力",
    "example": "Putting oil on both surfaces reduces friction.",
    "exampleCn": "两面都上油可减小摩擦力。"
   },
   {
    "word": "diversion",
    "phonetic": "dəˈvɝʒən; dəˈvɝʃən; daɪˈvɝʒən; daɪˈvɝʃən",
    "pos": "n.",
    "meaning": "转移；消遣；分散注意力",
    "example": "A slight diversion in the road is causing major headaches for businesses along El Camino Real.",
    "exampleCn": "马路上的一小段绕行道让国王大道沿街的商家十分头疼。"
   },
   {
    "word": "check",
    "phonetic": "tʃɛk",
    "pos": "vt",
    "meaning": "检查；制止；寄存；[金融]支票；阻止；阻止物",
    "example": "Check the tiles carefully before you buy them.",
    "exampleCn": "购买之前要把瓷砖仔细检查一下。"
   },
   {
    "word": "proceed",
    "phonetic": "pro'sid",
    "pos": "vi",
    "meaning": "开始；继续进行；发生；行进",
    "example": "Before proceeding further, we must define our terms.",
    "exampleCn": "我们必须先定义术语，然后再往下展开。"
   },
   {
    "word": "chase",
    "phonetic": "tʃeɪs",
    "pos": "vt",
    "meaning": "追逐；追捕；试图赢得；雕镂；追逐；追赶；奔跑；追逐；追赶；追击",
    "example": "The dogs saw him running and chased him.",
    "exampleCn": "那些狗看到他在跑就追他。"
   },
   {
    "word": "plea",
    "phonetic": "pli",
    "pos": "n.",
    "meaning": "恳求，请求；辩解，辩护；借口，托辞",
    "example": "Caldwell made a plea for donations.",
    "exampleCn": "考德威尔恳求捐款。"
   },
   {
    "word": "mobilize",
    "phonetic": "'mobəlaɪz",
    "pos": "vt",
    "meaning": "动员，调动；集合，组织；使…流通；使…松动",
    "example": "an attempt to mobilize popular opinion",
    "exampleCn": "鼓动公众舆论的尝试"
   },
   {
    "word": "yearn",
    "phonetic": "jɝn",
    "pos": "vi",
    "meaning": "渴望，向往；思念，想念；怀念；同情，怜悯",
    "example": "He yearned for freedom.",
    "exampleCn": "他曾渴望自由。"
   },
   {
    "word": "personnel",
    "phonetic": ",pɝsə'nɛl",
    "pos": "n.",
    "meaning": "人事部门；全体人员",
    "example": "All personnel are to receive security badges.",
    "exampleCn": "所有人员都将拿到安保徽章。"
   },
   {
    "word": "vice",
    "phonetic": "vaɪs",
    "pos": "n.",
    "meaning": "恶习；缺点；[机]老虎钳；卖淫；代替；钳住；副的；代替的",
    "example": "the fight against vice on the streets",
    "exampleCn": "打击街头犯罪"
   },
   {
    "word": "paddle",
    "phonetic": "'pædl",
    "pos": "n.",
    "meaning": "划桨；明轮翼；拌；搅；用桨划；划桨；戏水；涉水",
    "example": "Each man had a paddle for an hour and then a rest.",
    "exampleCn": "每人划一小时桨， 然后休息一下。"
   },
   {
    "word": "clutch",
    "phonetic": "klʌtʃ",
    "pos": "n.",
    "meaning": "[机]离合器；控制；手；紧急关头；抓住；紧握",
    "example": "He clutched at a pillar for support.",
    "exampleCn": "他猛地抓住一根柱子作支撑。"
   },
   {
    "word": "pedestrian",
    "phonetic": "pə'dɛstrɪən",
    "pos": "adj.",
    "meaning": "徒步的；缺乏想像力的；行人；步行者",
    "example": "Ingrid was a walker, even in Los Angeles, where a pedestrian is a rare sight.",
    "exampleCn": "英格丽德是个步行者，即使在行人少见的洛杉矶也是如此。"
   },
   {
    "word": "graphic",
    "phonetic": "'græfɪk",
    "pos": "adj.",
    "meaning": "形象的；图表的；绘画似的",
    "example": "...fine and graphic arts.",
    "exampleCn": "…美术与制图艺术。"
   },
   {
    "word": "mercantile",
    "phonetic": "'mɝkəntɪl",
    "pos": "adj.",
    "meaning": "商业的；商人的；重商主义的；商品",
    "example": "mercantile law",
    "exampleCn": "商法"
   },
   {
    "word": "console",
    "phonetic": "'kɑnsol",
    "pos": "n.",
    "meaning": "[计]控制台；[电]操纵台；安慰；慰藉",
    "example": "No one could console her when Peter died.",
    "exampleCn": "彼得去世时没人能够安慰她。"
   },
   {
    "word": "tremendous",
    "phonetic": "trə'mɛndəs",
    "pos": "adj.",
    "meaning": "极大的，巨大的；惊人的",
    "example": "Suddenly, there was a tremendous bang, and the whole station shook.",
    "exampleCn": "突然一声巨响，整个车站都晃动了。"
   },
   {
    "word": "decrease",
    "phonetic": "dɪ'kris",
    "pos": "n.",
    "meaning": "减少，减小；减少量；减少，减小；减少，减小",
    "example": "The number of people who have the disease has decreased significantly in recent years.",
    "exampleCn": "近年来，这种病的患者人数明显下降。"
   },
   {
    "word": "performance",
    "phonetic": "pɚ'fɔrməns",
    "pos": "n.",
    "meaning": "性能；绩效；表演；执行",
    "example": "This evening’s performance will begin at 8.00 pm.",
    "exampleCn": "今晚的演出8点开始。"
   },
   {
    "word": "attempt",
    "phonetic": "ə'tɛmpt",
    "pos": "n.",
    "meaning": "企图，试图；攻击；企图，试图；尝试",
    "example": "He made no attempt to hide his anger.",
    "exampleCn": "他毫不掩饰自己的愤怒。"
   },
   {
    "word": "naked",
    "phonetic": "'nekɪd",
    "pos": "adj.",
    "meaning": "[生物]裸体的；无装饰的；无证据的；直率的",
    "example": "The children ran naked through the yard.",
    "exampleCn": "孩子们光着身子跑过院子。"
   },
   {
    "word": "female",
    "phonetic": "'fimel",
    "pos": "adj.",
    "meaning": "女性的；[生物]雌性的；柔弱的，柔和的；女人；[植][动]雌性动物",
    "example": "Hay fever affects males more than females.",
    "exampleCn": "男性感染花粉热多于女性。"
   },
   {
    "word": "raid",
    "phonetic": "red",
    "pos": "n.",
    "meaning": "[军]袭击；突袭；搜捕；抢劫；[军]袭击，突袭",
    "example": "a bombing raid",
    "exampleCn": "轰炸"
   },
   {
    "word": "miserable",
    "phonetic": "'mɪzrəbl",
    "pos": "adj.",
    "meaning": "悲惨的；痛苦的；卑鄙的",
    "example": "They endured hours of backbreaking work in miserable conditions.",
    "exampleCn": "他们在恶劣条件下忍受长时间的繁重劳动。"
   },
   {
    "word": "innocent",
    "phonetic": "'ɪnəsnt",
    "pos": "adj.",
    "meaning": "[法]无辜的；无罪的；无知的；天真的人；笨蛋",
    "example": "Nobody would believe that I was innocent.",
    "exampleCn": "没人肯相信我是清白的。"
   },
   {
    "word": "stack",
    "phonetic": "stæk",
    "pos": "n.",
    "meaning": "堆；堆叠；堆积，堆叠",
    "example": "stacks of dirty dishes",
    "exampleCn": "一摞摞脏盘子"
   },
   {
    "word": "humble",
    "phonetic": "'hʌmbl",
    "pos": "adj.",
    "meaning": "谦卑的，恭顺的，简陋的；使卑下，贬抑",
    "example": "a modest and humble man",
    "exampleCn": "一个谦卑的男人"
   },
   {
    "word": "shamble",
    "phonetic": "'ʃæmbl",
    "pos": "vi",
    "meaning": "蹒跚地走；摇晃不稳；摇摇晃晃地走；蹒跚；摇晃的脚步",
    "example": "Zombies shamble up the rows of the grid toward your house, and if they get past your defenses, well, you know.",
    "exampleCn": "僵尸们在网格的每一行向你的房子蹒跚而行，如果他们越过了你的防线，那么，你知道的。"
   },
   {
    "word": "ribbon",
    "phonetic": "'rɪbən",
    "pos": "n.",
    "meaning": "带；缎带；（勋章等的）绶带；带状物；勋表",
    "example": "little girls with ribbons in their hair",
    "exampleCn": "头发上系着丝带的小姑娘们"
   },
   {
    "word": "tyrannical",
    "phonetic": "tɪ'rænɪkl",
    "pos": "adj.",
    "meaning": "残暴的；暴君的；专横的",
    "example": "a tyrannical parent",
    "exampleCn": "一位专横的家长"
   },
   {
    "word": "aerial",
    "phonetic": "'ɛrɪəl",
    "pos": "adj.",
    "meaning": "[昆][生物][航]空中的，航空的；空气的；空想的；[电讯]天线",
    "example": "Weeks of aerial bombardment had destroyed factories and motorways.",
    "exampleCn": "数周的空袭已经摧毁了各工厂和公路。"
   },
   {
    "word": "astronomy",
    "phonetic": "ə'strɑnəmi",
    "pos": "n.",
    "meaning": "[天]天文学",
    "example": "Do you know anything about astronomy?",
    "exampleCn": "你懂天文学吗?"
   },
   {
    "word": "segment",
    "phonetic": "'sɛɡmənt",
    "pos": "vi",
    "meaning": "分割；[计]段；部分；分割",
    "example": "Decorate with orange segments.",
    "exampleCn": "用几瓣橙子作点缀。"
   },
   {
    "word": "downtown",
    "phonetic": "'daʊn'taʊn",
    "pos": "adj.",
    "meaning": "市中心的；市中心区",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "defraud",
    "phonetic": "dɪ'frɔd",
    "pos": "vt",
    "meaning": "[法]欺骗",
    "example": "He faces charges of theft and conspiracy to defraud (= a secret plan to cheat someone, made by two or more people ) .",
    "exampleCn": "他面临偷窃和合谋诈骗的指控。"
   },
   {
    "word": "improvise",
    "phonetic": "'ɪmprəvaɪz",
    "pos": "vi",
    "meaning": "即兴创作；即兴表演；临时凑合",
    "example": "I forgot to bring my notes, so I had to improvise.",
    "exampleCn": "我忘了带笔记，只好临时发挥。"
   },
   {
    "word": "oppress",
    "phonetic": "ə'prɛs",
    "pos": "vt",
    "meaning": "压迫，压抑；使……烦恼；使……感到沉重",
    "example": "native tribes oppressed by the authorities",
    "exampleCn": "受到当局压迫的土著部落"
   },
   {
    "word": "flabby",
    "phonetic": "'flæbi",
    "pos": "adj.",
    "meaning": "松弛的；软弱的；没气力的；优柔寡断的",
    "example": "intellectually flabby arguments",
    "exampleCn": "说不通的论据"
   },
   {
    "word": "essay",
    "phonetic": "'ɛse",
    "pos": "n.",
    "meaning": "散文；试图；随笔；尝试；对…做试验",
    "example": "We asked Jason to write an essay about his hometown.",
    "exampleCn": "我们让杰森写一篇关于他家乡的短文。"
   },
   {
    "word": "racket",
    "phonetic": "'rækɪt",
    "pos": "n.",
    "meaning": "球拍；吵闹，喧闹",
    "example": "The old machine used to make an awful racket .",
    "exampleCn": "这台旧机器以前噪音大得吓人。"
   },
   {
    "word": "flaw",
    "phonetic": "flɔ",
    "pos": "n.",
    "meaning": "瑕疵，裂纹；缺点；一阵狂风；使无效；使破裂，使有缺陷",
    "example": "A design flaw (= a mistake or weakness in the way something was made ) caused the engine to explode.",
    "exampleCn": "一个设计缺陷导致了引擎爆炸。"
   },
   {
    "word": "nominate",
    "phonetic": "'nɑmɪnet",
    "pos": "vt",
    "meaning": "推荐；提名；任命；指定",
    "example": "This week one of them will be nominated by the Democratic Party for the presidency of the United States.",
    "exampleCn": "本周他们中的一人将被民主党提名为美国总统职位的候选人。"
   },
   {
    "word": "syllabus",
    "phonetic": "'sɪləbəs",
    "pos": "n.",
    "meaning": "教学大纲，摘要；课程表",
    "example": "The course syllabus consisted mainly of novels by African-American authors, male and female.",
    "exampleCn": "该课程的教学大纲主要包括了非裔美国男女作家的小说。"
   },
   {
    "word": "stiff",
    "phonetic": "stɪf",
    "pos": "adj.",
    "meaning": "呆板的；坚硬的；严厉的；拘谨的；拘谨的；僵硬地；彻底地；死尸；令人讨厌者；[金融]流通票据；劳动者",
    "example": "a shirt with a stiff collar",
    "exampleCn": "领子挺括的衬衫"
   },
   {
    "word": "toxic",
    "phonetic": "'tɑksɪk",
    "pos": "adj.",
    "meaning": "[内科][毒物]有毒的；中毒的",
    "example": "fumes from a toxic waste dump",
    "exampleCn": "有毒废料堆产生的毒气"
   },
   {
    "word": "rampant",
    "phonetic": "'ræmpənt",
    "pos": "adj.",
    "meaning": "猖獗的；蔓延的；狂暴的；奔放的",
    "example": "Pickpocketing is rampant in the downtown area.",
    "exampleCn": "闹市区扒窃活动猖獗。"
   },
   {
    "word": "propulsion",
    "phonetic": "",
    "pos": "n.",
    "meaning": "推进，推进力",
    "example": "But magnetic propulsion has some drawbacks.",
    "exampleCn": "但是磁力推进有一些缺陷。"
   },
   {
    "word": "telling",
    "phonetic": "'tɛlɪŋ",
    "pos": "adj.",
    "meaning": "有效的；生动的；显著的；命令；叙述；吐露真情；告诉；讲述（tell的ing形式）；命令",
    "example": "a telling argument",
    "exampleCn": "有说服力的论点"
   },
   {
    "word": "throughout",
    "phonetic": "θrʊ'aʊt",
    "pos": "adv.",
    "meaning": "自始至终，到处；全部；贯穿，遍及",
    "example": "a large organization with offices throughout the world",
    "exampleCn": "在世界各地都设有办事处的一家大型机构"
   },
   {
    "word": "highlight",
    "phonetic": "'haɪlaɪt",
    "pos": "vt",
    "meaning": "突出；强调；使显著；加亮；最精彩的部分；最重要的事情；[电子]加亮区",
    "example": "...a match that is likely to prove one of the highlights of the tournament.",
    "exampleCn": "…可能是本届锦标赛最精彩的赛事之一。"
   },
   {
    "word": "devise",
    "phonetic": "dɪ'vaɪz",
    "pos": "vt",
    "meaning": "设计；想出；发明；图谋；遗赠给；遗赠",
    "example": "She devised a method for quicker communications between offices.",
    "exampleCn": "她想出一种加快办公室之间通信联络的方法。"
   },
   {
    "word": "wield",
    "phonetic": "wild",
    "pos": "vt",
    "meaning": "使用；行使；挥舞",
    "example": "The Church wields immense power in Ireland.",
    "exampleCn": "在爱尔兰，教会操纵着大权。"
   },
   {
    "word": "enormous",
    "phonetic": "ɪ'nɔrməs",
    "pos": "adj.",
    "meaning": "庞大的，巨大的；凶暴的，极恶的",
    "example": "an enormous bunch of flowers",
    "exampleCn": "巨大的花束"
   },
   {
    "word": "fade",
    "phonetic": "fed",
    "pos": "vi",
    "meaning": "褪色；凋谢；逐渐消失；使褪色；平淡的；乏味的",
    "example": "Hopes of a peace settlement are beginning to fade.",
    "exampleCn": "达成和平协议的希望日渐渺茫。"
   },
   {
    "word": "exhilarate",
    "phonetic": "ɪɡ'zɪləret",
    "pos": "vt",
    "meaning": "使高兴，使振奋；使愉快",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "slum",
    "phonetic": "slʌm",
    "pos": "n.",
    "meaning": "[经]贫民窟；陋巷；脏乱的地方",
    "example": "a slum area",
    "exampleCn": "贫民区"
   },
   {
    "word": "peer",
    "phonetic": "pɪr",
    "pos": "vi",
    "meaning": "凝视，盯着看；窥视；贵族；同等的人",
    "example": "American children did less well in math than their peers in Japan.",
    "exampleCn": "美国儿童的数学成绩不如日本的同龄儿童。"
   },
   {
    "word": "slogan",
    "phonetic": "'slogən",
    "pos": "n.",
    "meaning": "标语；呐喊声",
    "example": "an advertising slogan",
    "exampleCn": "一句广告口号"
   },
   {
    "word": "transaction",
    "phonetic": "træn'zækʃən",
    "pos": "n.",
    "meaning": "[贸易]交易；[计]事务；办理；会报，[图情]学报",
    "example": "The bank charges a fixed rate for each transaction.",
    "exampleCn": "银行对每一笔业务收取固定费用。"
   },
   {
    "word": "incorporate",
    "phonetic": "ɪn'kɔːpəreɪt",
    "pos": "vt",
    "meaning": "包含，吸收；体现；把……合并；合并；混合；组成公司；合并的；一体化的；组成公司的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "discard",
    "phonetic": "dɪsˈkɑːrd",
    "pos": "vt",
    "meaning": "抛弃；放弃；丢弃；放弃；抛弃；被丢弃的东西或人",
    "example": "Read the manufacturer's guidelines before discarding the box.",
    "exampleCn": "先阅读制造商的说明书再把盒子丢掉。"
   },
   {
    "word": "grope",
    "phonetic": "ɡrop",
    "pos": "vi",
    "meaning": "摸索；探索；摸索；摸索；触摸",
    "example": "With his left hand he groped for the knob, turned it, and pulled the door open.",
    "exampleCn": "他用左手摸索到门把手，转动把手，把门拉开。"
   },
   {
    "word": "triple",
    "phonetic": "'trɪpl",
    "pos": "adj.",
    "meaning": "[数]三倍的；三方的；[数]三倍数；三个一组；增至三倍；使成三倍",
    "example": "a triple murder investigation",
    "exampleCn": "对一宗三重谋杀案的调查"
   },
   {
    "word": "variety",
    "phonetic": "və'raɪəti",
    "pos": "n.",
    "meaning": "多样；种类；杂耍",
    "example": "The girls come from a variety of different backgrounds.",
    "exampleCn": "这些女孩出身背景各不相同。"
   },
   {
    "word": "detrimental",
    "phonetic": ",dɛtrɪ'mɛntl",
    "pos": "adj.",
    "meaning": "不利的；有害的",
    "example": "the detrimental effect of pollution on the environment",
    "exampleCn": "污染对环境的不利影响"
   },
   {
    "word": "hitherto",
    "phonetic": ",hɪðɚ'tu",
    "pos": "adv.",
    "meaning": "迄今；至今",
    "example": "a species of fish hitherto unknown in the West",
    "exampleCn": "迄今在西方还不为人知的一种鱼"
   },
   {
    "word": "indispensable",
    "phonetic": "'ɪndɪ'spɛnsəbl",
    "pos": "adj.",
    "meaning": "不可缺少的；绝对必要的；责无旁贷的",
    "example": "Mobile phones have become an indispensable part of our lives.",
    "exampleCn": "移动电话已经成为我们生活中的必需品。"
   },
   {
    "word": "porcelain",
    "phonetic": "ˈpɔrsələn",
    "pos": "n.",
    "meaning": "[陶瓷]瓷；瓷器；瓷制的；精美的",
    "example": "a porcelain vase",
    "exampleCn": "瓷花瓶"
   },
   {
    "word": "mania",
    "phonetic": "'menɪə",
    "pos": "n.",
    "meaning": "狂热；狂躁；热衷",
    "example": "The mania for dinosaurs began in the late 1800s.",
    "exampleCn": "恐龙热兴起于19世纪晚期。"
   },
   {
    "word": "neurosis",
    "phonetic": "nʊ'rosɪs",
    "pos": "n.",
    "meaning": "神经官能病，精神性神经病",
    "example": "He was anxious to the point of neurosis.",
    "exampleCn": "他的忧虑达到了神经机能病症状的程度。"
   },
   {
    "word": "dot",
    "phonetic": "dɑt",
    "pos": "n.",
    "meaning": "[数]点，圆点；嫁妆",
    "example": "a pattern of dots",
    "exampleCn": "圆点图案"
   },
   {
    "word": "utterly",
    "phonetic": "'ʌtɚli",
    "pos": "adv.",
    "meaning": "完全地；绝对地；全然地；彻底地，十足地",
    "example": "You look utterly miserable.",
    "exampleCn": "你看起来很痛苦。"
   },
   {
    "word": "evaporate",
    "phonetic": "ɪ'væpəret",
    "pos": "vt",
    "meaning": "使……蒸发；使……脱水；使……消失；蒸发，挥发；消失，失踪",
    "example": "Most of the water had evaporated.",
    "exampleCn": "大部分的水都蒸发了。"
   },
   {
    "word": "quest",
    "phonetic": "kwɛst",
    "pos": "n.",
    "meaning": "追求；寻找；追求；寻找；探索",
    "example": "They journeyed to the distant Molucca islands in quest of spices.",
    "exampleCn": "他们远赴摩鹿加群岛寻找香料。"
   },
   {
    "word": "coarse",
    "phonetic": "kɔrs",
    "pos": "adj.",
    "meaning": "粗糙的；粗俗的；下等的",
    "example": "a jacket of coarse wool",
    "exampleCn": "粗羊毛夹克衫"
   },
   {
    "word": "resume",
    "phonetic": "rɪˈzjuːm; ˈrɛzjʊmeɪ",
    "pos": "n.",
    "meaning": "[管理]履历；个人简历；摘要；重新开始；重新获得",
    "example": "She hopes to resume work after the baby is born.",
    "exampleCn": "她想生完孩子后继续工作。"
   },
   {
    "word": "integrity",
    "phonetic": "ɪn'tɛɡrəti",
    "pos": "n.",
    "meaning": "[数]完整；正直；诚实；廉正",
    "example": "I have always regarded him as a man of integrity.",
    "exampleCn": "我一直把他当作一个正直诚实的人。"
   },
   {
    "word": "contention",
    "phonetic": "kən'tɛnʃən",
    "pos": "n.",
    "meaning": "争论，争辩；争夺；论点",
    "example": "His case has become a source of contention between civil liberties activists and the government.",
    "exampleCn": "他的案子已变成了公民自由活动家们和政府之间的争论缘由。"
   },
   {
    "word": "universal",
    "phonetic": "'jʊnə'vɝsl",
    "pos": "adj.",
    "meaning": "普遍的；通用的；[天]宇宙的；全世界的；全体的；一般概念；普通性",
    "example": "free universal healthcare",
    "exampleCn": "免费的全民保健制度"
   },
   {
    "word": "opponent",
    "phonetic": "ə'ponənt",
    "pos": "n.",
    "meaning": "对手；反对者；敌手；对立的；敌对的",
    "example": "Graf’s opponent in today’s final will be Sukova.",
    "exampleCn": "格拉芙今天的决赛对手将是苏科娃。"
   },
   {
    "word": "solar",
    "phonetic": "'solɚ",
    "pos": "adj.",
    "meaning": "太阳的；日光的；利用太阳光的；与太阳相关的；日光浴室",
    "example": "a solar eclipse",
    "exampleCn": "日食"
   },
   {
    "word": "consist",
    "phonetic": "kən'sɪst",
    "pos": "vi",
    "meaning": "组成；在于；符合",
    "example": "My diet consisted almost exclusively of chocolate-covered cookies and glasses of milk.",
    "exampleCn": "我的饮食几乎只包含裹上巧克力的曲奇饼和一杯杯牛奶。"
   },
   {
    "word": "reptile",
    "phonetic": "'rɛptaɪl",
    "pos": "adj.",
    "meaning": "爬虫类的；卑鄙的；[脊椎]爬行动物；卑鄙的人",
    "example": "Bird evolved from reptiles, so the first bird must have come out of an egg--laid by a reptile.",
    "exampleCn": "禽类是由爬虫类进化而来，所以，第一只禽鸟肯定是从爬虫类孵化的蛋里出来的。"
   },
   {
    "word": "headstrong",
    "phonetic": "'hɛdstrɔŋ",
    "pos": "adj.",
    "meaning": "任性的；顽固的；刚愎的",
    "example": "He's young, very headstrong, but he's a good man underneath.",
    "exampleCn": "他年轻、任性，但骨子里是个好人。"
   },
   {
    "word": "complicated",
    "phonetic": "'kɑmplɪketɪd",
    "pos": "adj.",
    "meaning": "难懂的，复杂的",
    "example": "a complicated pattern",
    "exampleCn": "复杂的图案"
   },
   {
    "word": "deprive",
    "phonetic": "dɪ'praɪv",
    "pos": "vt",
    "meaning": "使丧失，剥夺",
    "example": "They've been deprived of the fuel necessary to heat their homes.",
    "exampleCn": "他们无法得到住房取暖必需的燃料。"
   },
   {
    "word": "helicopter",
    "phonetic": "'hɛlɪkɑptɚ",
    "pos": "n.",
    "meaning": "[航]直升飞机",
    "example": "You can helicopter to the island.",
    "exampleCn": "你可以乘坐直升机去那个岛。"
   },
   {
    "word": "grief",
    "phonetic": "ɡrif",
    "pos": "n.",
    "meaning": "悲痛；忧伤；不幸",
    "example": "Every change in our lives brings with it griefs.",
    "exampleCn": "我们生活当中的每一个变化都有让人伤心的一面。"
   },
   {
    "word": "commission",
    "phonetic": "kə'mɪʃən",
    "pos": "n.",
    "meaning": "委员会；[会计]佣金；犯；委任；委任状；委任；使服役；委托制作",
    "example": "The Government set up a commission to investigate allegations of police violence.",
    "exampleCn": "政府成立了一个委员会调查对警察施暴行为的指控。"
   },
   {
    "word": "rehabilitate",
    "phonetic": ",riə'bɪlə,tet",
    "pos": "vt",
    "meaning": "使康复；使恢复名誉；使恢复原状；复兴；复权；恢复正常生活",
    "example": "a special unit for rehabilitating stroke patients",
    "exampleCn": "协助中风患者康复的特殊病房"
   },
   {
    "word": "sheet",
    "phonetic": "ʃit",
    "pos": "n.",
    "meaning": "薄片，纸张；[材]薄板；床单；覆盖；盖上被单；使成大片；片状的",
    "example": "I’ll go and find you some clean sheets and blankets.",
    "exampleCn": "我去给你们找些干净的床单和毯子。"
   },
   {
    "word": "port",
    "phonetic": "pɔrt",
    "pos": "n.",
    "meaning": "[水运]港口，口岸；（计算机的）[电子][计]端口；[航][船]左舷；舱门",
    "example": "Britain’s largest port",
    "exampleCn": "英国最大的港口城市"
   },
   {
    "word": "outline",
    "phonetic": "'aʊtlaɪn",
    "pos": "n.",
    "meaning": "轮廓；大纲；概要；略图；概述；略述；描画…轮廓",
    "example": "a research proposal outline",
    "exampleCn": "研究计划梗概"
   },
   {
    "word": "eject",
    "phonetic": "ɪ'dʒɛkt",
    "pos": "vt",
    "meaning": "喷射；驱逐，逐出",
    "example": "Officials used guard dogs to eject the protesters.",
    "exampleCn": "官员们用护卫犬驱走抗议者。"
   },
   {
    "word": "opportunity",
    "phonetic": "ˌɑpɚˈtunɪti, -ˈtju-",
    "pos": "n.",
    "meaning": "时机，机会",
    "example": "There are fewer opportunities for new graduates this year.",
    "exampleCn": "今年新毕业的大学生就业机会较少。"
   },
   {
    "word": "savage",
    "phonetic": "'sævɪdʒ",
    "pos": "adj.",
    "meaning": "野蛮的；残酷的；狂怒的；荒凉的；未开化的；粗鲁的人；残暴成性的人",
    "example": "a savage dog",
    "exampleCn": "一条凶猛的狗"
   },
   {
    "word": "approximate",
    "phonetic": "ə'prɑksɪmət",
    "pos": "vi",
    "meaning": "接近于；[数]近似于；[数]近似的；大概的",
    "example": "What is the approximate number of students in each class?",
    "exampleCn": "每个班大致有多少学生？"
   },
   {
    "word": "gesture",
    "phonetic": "'dʒɛstʃɚ",
    "pos": "n.",
    "meaning": "姿态；手势",
    "example": "Luke made an obscene gesture with his finger.",
    "exampleCn": "卢克用手指做了一个下流的手势。"
   },
   {
    "word": "cape",
    "phonetic": "kep",
    "pos": "n.",
    "meaning": "[地理]海角，岬；披肩",
    "example": "Cape Cod",
    "exampleCn": "科德角"
   },
   {
    "word": "commute",
    "phonetic": "kə'mjʊt",
    "pos": "vt",
    "meaning": "减刑；[数]交换；用……交换；使……变成",
    "example": "Baldry’s 20-year prison sentence was commuted to three years.",
    "exampleCn": "鲍德里二十年的刑期被减至三年。"
   },
   {
    "word": "hazardous",
    "phonetic": "'hæzɚdəs",
    "pos": "adj.",
    "meaning": "有危险的；冒险的；碰运气的",
    "example": "the disposal of hazardous waste",
    "exampleCn": "有害废弃物的处理"
   },
   {
    "word": "curve",
    "phonetic": "kɝv",
    "pos": "n.",
    "meaning": "[数]曲线；弯曲；曲线球；曲线图表；弯；使弯曲；弯曲的；曲线形的",
    "example": "The curve illustrates costs per capita.",
    "exampleCn": "这条曲线显示人均费用。"
   },
   {
    "word": "catalogue",
    "phonetic": "'kætəlɔɡ",
    "pos": "n.",
    "meaning": "[图情][计]目录；（美）大学情况一览",
    "example": "a mail order catalog",
    "exampleCn": "邮购商品目录"
   },
   {
    "word": "abrasion",
    "phonetic": "ə'breʒən",
    "pos": "n.",
    "meaning": "[口腔]磨损；[机]磨耗；[皮肤]擦伤",
    "example": "She was treated for cuts and abrasions.",
    "exampleCn": "她因划伤和擦伤而接受治疗。"
   },
   {
    "word": "agitation",
    "phonetic": ",ædʒɪ'teʃən",
    "pos": "n.",
    "meaning": "激动；搅动；煽动；烦乱",
    "example": "She was in a state of considerable agitation.",
    "exampleCn": "她处于相当焦虑的状态。"
   },
   {
    "word": "accountable",
    "phonetic": "ə'kaʊntəbl",
    "pos": "adj.",
    "meaning": "有责任的；有解释义务的；可解释的",
    "example": "But I also believe that everyone who comments here should be accountable: in other words that the rest of us should be able to see who they are.",
    "exampleCn": "但我同样认为，在这里发表评论的每一个人都应当受到问责：换而言之，在其发言时，我们其他人应当能够知道他们是谁。"
   },
   {
    "word": "custom",
    "phonetic": "'kʌstəm",
    "pos": "n.",
    "meaning": "习惯；风俗；海关；定制的，定做的",
    "example": "He awoke early, as was his custom.",
    "exampleCn": "他很早醒来，这是他的习惯。"
   },
   {
    "word": "sporadic",
    "phonetic": "spə'rædɪk",
    "pos": "adj.",
    "meaning": "零星的；分散的；不定时发生的",
    "example": "There has been sporadic violence downtown.",
    "exampleCn": "市中心时有暴力事件发生。"
   },
   {
    "word": "towel",
    "phonetic": "'taʊəl",
    "pos": "n.",
    "meaning": "[纺]毛巾，手巾；[纸]纸巾",
    "example": "Have you got a clean towel I could use?",
    "exampleCn": "你有没有干净毛巾给我用？"
   },
   {
    "word": "knob",
    "phonetic": "nɑb",
    "pos": "n.",
    "meaning": "把手；瘤；球形突出物；鼓起",
    "example": "He thought the door was locked, but he turned the knob and the door opened.",
    "exampleCn": "他本以为门是锁住的，但是转了一下把手门就开了。"
   },
   {
    "word": "invariably",
    "phonetic": "ɪn'vɛrɪəbli",
    "pos": "adv.",
    "meaning": "总是；不变地；一定地",
    "example": "It invariably rains when I go there.",
    "exampleCn": "我每次去那儿都下雨。"
   },
   {
    "word": "plumb",
    "phonetic": "plʌm",
    "pos": "vt",
    "meaning": "[数]使垂直；探测，探索；[数]垂直；[测]铅锤；恰恰，正；[数]垂直地；[数]垂直的",
    "example": "Psychologists try to plumb the deepest mysteries of the human psyche.",
    "exampleCn": "心理学家试图探究人类心理最深层的奥秘。"
   },
   {
    "word": "triumph",
    "phonetic": "'traɪʌmf",
    "pos": "n.",
    "meaning": "胜利，凯旋；欢欣；获得胜利，成功",
    "example": "Winning the championship is a great personal triumph .",
    "exampleCn": "赢得冠军是伟大的个人成就。"
   },
   {
    "word": "forum",
    "phonetic": "'fɔrəm",
    "pos": "n.",
    "meaning": "论坛，讨论会；法庭；公开讨论的广场",
    "example": "Members of the council agreed that was an important forum for discussion.",
    "exampleCn": "理事会成员们一致认为那是一个用于讨论的重要论坛。"
   },
   {
    "word": "decompose",
    "phonetic": ",dikəm'poz",
    "pos": "vi",
    "meaning": "分解；使腐烂；分解；腐烂",
    "example": "a partially decomposed body",
    "exampleCn": "部分腐烂的尸体"
   },
   {
    "word": "confident",
    "phonetic": "'kɑnfɪdənt",
    "pos": "adj.",
    "meaning": "自信的；确信的",
    "example": "Despite her disability, Philippa is very confident.",
    "exampleCn": "菲莉帕虽然有残疾，却很自信。"
   },
   {
    "word": "liberal",
    "phonetic": "'lɪbərəl",
    "pos": "adj.",
    "meaning": "自由主义的；慷慨的；不拘泥的；宽大的；自由主义者",
    "example": "a liberal supply of drinks",
    "exampleCn": "饮料的充足供应"
   },
   {
    "word": "sway",
    "phonetic": "swe",
    "pos": "vt",
    "meaning": "影响；统治；使摇动；影响；摇摆；影响；摇摆；统治",
    "example": "The trees swayed gently in the breeze.",
    "exampleCn": "树木在和风中轻轻摇曳。"
   },
   {
    "word": "perplexity",
    "phonetic": "pɚ'plɛksəti",
    "pos": "n.",
    "meaning": "困惑；混乱",
    "example": "moral perplexities",
    "exampleCn": "道德难题"
   },
   {
    "word": "prospective",
    "phonetic": "prə'spɛktɪv",
    "pos": "adj.",
    "meaning": "未来的；预期的；预期；展望",
    "example": "The story should act as a warning to other prospective buyers.",
    "exampleCn": "这篇报道应该可以对其他可能的购买者起到警告作用。"
   },
   {
    "word": "straightforward",
    "phonetic": ",stret'fɔrwɚd",
    "pos": "adj.",
    "meaning": "简单的；坦率的；明确的；径直的；直截了当地；坦率地",
    "example": "This area of law is far from straightforward (= complicated ) .",
    "exampleCn": "法律的这个领域很复杂。"
   },
   {
    "word": "marble",
    "phonetic": "'mɑrbl",
    "pos": "n.",
    "meaning": "[岩]大理石；大理石制品；弹珠；[岩]大理石的；冷酷无情的",
    "example": "The columns were of white marble.",
    "exampleCn": "柱子是白色的大理石。"
   },
   {
    "word": "registrar",
    "phonetic": ",rɛdʒɪ'strɑr",
    "pos": "n.",
    "meaning": "登记员；注册主任；专科住院医师",
    "example": "The groom knew immediately that something was wrong when the registrar at Derry's Guildhall unexpectedly claimed that there was unfinished paperwork just before the ceremony began.",
    "exampleCn": "当时，在婚礼仪式开始之前，市政厅的登记员意外地宣布还有一些文件没有完成，新郎立即意识到出现了一些误会。"
   },
   {
    "word": "prototype",
    "phonetic": "'protə'taɪp",
    "pos": "n.",
    "meaning": "[生物]原型；标准，模范",
    "example": "But how do you come up with the architecture for this evolutionary prototype?",
    "exampleCn": "但是你将如何为这个进化的原型提出系统的架构呢？"
   },
   {
    "word": "oust",
    "phonetic": "aʊst",
    "pos": "vt",
    "meaning": "驱逐；剥夺；取代",
    "example": "The leaders have been ousted from power by nationalists.",
    "exampleCn": "那些领导人已被民族主义者赶下了台。"
   },
   {
    "word": "trespass",
    "phonetic": "'trɛspəs",
    "pos": "vi",
    "meaning": "侵入；犯罪；打扰；冒犯；罪过；非法侵入；过失；擅自进入",
    "example": "Stephen Leckar has 30 minutes to represent Jones, and he tries to advance a second argument in this case: The very act of installing the GPS device on a private vehicle constitutes a trespass.",
    "exampleCn": "琼斯的律师斯蒂文·莱卡有30分钟时间替琼斯辩护，他又提出了一个新论点：警方在琼斯私人汽车上装跟踪器的做法本身构成“非法入侵”。"
   },
   {
    "word": "enzyme",
    "phonetic": "'ɛnzaɪm",
    "pos": "n.",
    "meaning": "[生化]酶",
    "example": "It is believed that it inhibits an enzyme that promotes cell proliferation in tumours.",
    "exampleCn": "据信它能抑制一种能在肿瘤中促进细胞增殖的酶的生成。"
   },
   {
    "word": "smuggle",
    "phonetic": "'smʌgl",
    "pos": "v.",
    "meaning": "走私，私运",
    "example": "My message is \"If you try to smuggle drugs you are stupid.\"",
    "exampleCn": "我的讯息是，“你若企图走私毒品，那是犯傻。”"
   },
   {
    "word": "petition",
    "phonetic": "pə'tɪʃən",
    "pos": "n.",
    "meaning": "请愿；[法][专利]请愿书；祈求；诉状；请愿；[专利]请求；请愿；[专利]请求；恳求",
    "example": "Local residents have drawn up a petition to protest the hospital closure.",
    "exampleCn": "当地居民已草拟了一份请愿书，抗议关闭医院。"
   },
   {
    "word": "tract",
    "phonetic": "trækt",
    "pos": "n.",
    "meaning": "束；大片土地，地带；小册子",
    "example": "Fossils can only tell us so much about the shape of the vocal tract because much of it is soft tissue.",
    "exampleCn": "因为发音系统大部分是软组织，无缘变成化石，现存的化石也只能告诉我们一点呼吸道的形状。"
   },
   {
    "word": "falter",
    "phonetic": "'fɔltɚ",
    "pos": "vi",
    "meaning": "支吾；蹒跚地走；踌躇；支吾；颤抖",
    "example": "Laurie’s voice faltered as she tried to thank him.",
    "exampleCn": "劳丽想谢谢他，却说得结结巴巴的。"
   },
   {
    "word": "marine",
    "phonetic": "mə'rin",
    "pos": "adj.",
    "meaning": "船舶的；[海洋]海生的；海产的；航海的，海运的；海运业；舰队；水兵；（海军）士兵或军官",
    "example": "the enormous variety of marine life",
    "exampleCn": "海洋生物繁多的种类"
   },
   {
    "word": "fraction",
    "phonetic": "'frækʃən",
    "pos": "n.",
    "meaning": "[数]分数；部分；小部分；稍微",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "multitude",
    "phonetic": "ˈmʌltɪˌtud, -ˌtjud",
    "pos": "n.",
    "meaning": "群众；多数",
    "example": "I had never seen such a multitude of stars before.",
    "exampleCn": "我以前从未见过这么多的星星。"
   },
   {
    "word": "plunder",
    "phonetic": "'plʌndɚ",
    "pos": "n.",
    "meaning": "抢夺；战利品；掠夺品；掠夺；抢劫；侵吞；掠夺；盗窃",
    "example": "The rich provinces of Asia Minor were plundered by the invaders.",
    "exampleCn": "小亚细亚的富饶地区遭到侵略者的劫掠。"
   },
   {
    "word": "activate",
    "phonetic": "'æktə'vet",
    "pos": "vt",
    "meaning": "刺激；使活动；使活泼；使产生放射性",
    "example": "Cooking fumes may activate the alarm.",
    "exampleCn": "烹调时的油烟可能会触发警报器。"
   },
   {
    "word": "treatise",
    "phonetic": "'tritɪs",
    "pos": "n.",
    "meaning": "论述；论文；专著",
    "example": "...Locke's Treatise on Civil Government.",
    "exampleCn": "...洛克的《政府论》。"
   },
   {
    "word": "contemplate",
    "phonetic": "'kɑntəmplet",
    "pos": "vt",
    "meaning": "沉思；注视；思忖；预期；冥思苦想；深思熟虑",
    "example": "He had even contemplated suicide.",
    "exampleCn": "他甚至想过自杀。"
   },
   {
    "word": "fibre",
    "phonetic": "'faibə",
    "pos": "n.",
    "meaning": "[材]纤维；纤维制品",
    "example": "Fruit and vegetables are high in fibre content .",
    "exampleCn": "水果和蔬菜的纤维素含量很高。"
   },
   {
    "word": "reel",
    "phonetic": "ril",
    "pos": "vi",
    "meaning": "卷；眩晕；蹒跚地走；退缩；卷；使旋转；蹒跚；眩晕；旋转",
    "example": "the final reel",
    "exampleCn": "影片结尾部分"
   },
   {
    "word": "misfortune",
    "phonetic": "'mɪs'fɔrtʃən",
    "pos": "n.",
    "meaning": "不幸；灾祸，灾难",
    "example": "It seems the banks always profit from farmers’ misfortunes.",
    "exampleCn": "银行似乎总是从农民的不幸中获益。"
   },
   {
    "word": "delicious",
    "phonetic": "dɪ'lɪʃəs",
    "pos": "adj.",
    "meaning": "[食品]美味的；可口的",
    "example": "‘The meal was absolutely delicious,’ she said politely.",
    "exampleCn": "“这顿饭味道好极了。” 她礼貌地说道。"
   },
   {
    "word": "certainty",
    "phonetic": "'sɝtnti",
    "pos": "n.",
    "meaning": "必然；确实；确实的事情",
    "example": "The result is impossible to predict with any degree of certainty .",
    "exampleCn": "这一结果完全无法确切预测。"
   },
   {
    "word": "expedient",
    "phonetic": "ɪk'spidɪənt",
    "pos": "adj.",
    "meaning": "权宜的；方便的；有利的；权宜之计；应急手段",
    "example": "This solution is politically expedient but may well cause long-term problems.",
    "exampleCn": "这种解决方法是政治上的权宜之计，但会引起长远的问题。"
   },
   {
    "word": "throat",
    "phonetic": "θrot",
    "pos": "n.",
    "meaning": "喉咙；嗓子，嗓音；窄路",
    "example": "The singer complained of a sore throat after Wednesday’s show.",
    "exampleCn": "星期三演出后，这位歌手说喉咙痛。"
   },
   {
    "word": "disdain",
    "phonetic": "dɪs'den",
    "pos": "n.",
    "meaning": "蔑视",
    "example": "a look of complete disdain",
    "exampleCn": "极为鄙视的样子"
   },
   {
    "word": "inferior",
    "phonetic": "ɪn'fɪrɪɚ",
    "pos": "adj.",
    "meaning": "差的；自卑的；[植]下级的，下等的；下级；次品",
    "example": "It was a gentleman's duty always to be civil, even to his inferiors.",
    "exampleCn": "一个绅士的责任是一直保持彬彬有礼，即使是对比自己地位低的人。"
   },
   {
    "word": "magnanimous",
    "phonetic": "mæɡ'nænɪməs",
    "pos": "adj.",
    "meaning": "宽宏大量的；有雅量的；宽大的",
    "example": "a magnanimous gesture",
    "exampleCn": "宽宏大量的姿态"
   },
   {
    "word": "abortion",
    "phonetic": "ə'bɔrʃən",
    "pos": "n.",
    "meaning": "[妇产]流产，小产；流产的胎儿",
    "example": "She decided to have an abortion .",
    "exampleCn": "她决定做人工流产。"
   },
   {
    "word": "commentary",
    "phonetic": "'kɑməntɛri",
    "pos": "n.",
    "meaning": "评论；注释；评注；说明",
    "example": "political commentary",
    "exampleCn": "政论"
   },
   {
    "word": "plankton",
    "phonetic": "'plæŋktən",
    "pos": "n.",
    "meaning": "浮游生物",
    "example": "...its usual diet of plankton and other small organisms.",
    "exampleCn": "...它通常赖以为食的浮游生物和其他微生物。"
   },
   {
    "word": "succession",
    "phonetic": "sək'sɛʃən",
    "pos": "n.",
    "meaning": "连续；继位；继承权；轮栽",
    "example": "She won the championship four times in succession.",
    "exampleCn": "她连续四次夺得冠军。"
   },
   {
    "word": "compile",
    "phonetic": "kəm'paɪl",
    "pos": "vt",
    "meaning": "编译；编制；编辑；[图情]汇编",
    "example": "The document was compiled by the Department of Health.",
    "exampleCn": "这份文件是由卫生部汇编的。"
   },
   {
    "word": "dimension",
    "phonetic": "dɪ'mɛnʃ(ə)n; daɪ-",
    "pos": "n.",
    "meaning": "[数]维；尺寸；次元；容积",
    "example": "a rectangle with the dimensions 5cm × 2cm",
    "exampleCn": "长五厘米、宽两厘米的长方形"
   },
   {
    "word": "traction",
    "phonetic": "'trækʃən",
    "pos": "n.",
    "meaning": "[车辆][机][外科]牵引；牵引力",
    "example": "This process gives your vehicle the best chance of holding traction on the steep hill, because both the gearbox and the brakes are locking you in place.",
    "exampleCn": "以上一系列操作会让你的车子尽可能在陡坡上保持住牵引力，因为此时变速箱和制动器都起到了锁定车辆的作用。"
   },
   {
    "word": "reverent",
    "phonetic": "'rɛvərənt",
    "pos": "adj.",
    "meaning": "虔诚的；恭敬的；尊敬的",
    "example": "a hushed reverent voice",
    "exampleCn": "毕恭毕敬的低语声"
   },
   {
    "word": "stubborn",
    "phonetic": "'stʌbɚn",
    "pos": "adj.",
    "meaning": "顽固的；顽强的；难处理的",
    "example": "Why are you so stubborn?",
    "exampleCn": "你怎么这么固执？"
   },
   {
    "word": "cemetery",
    "phonetic": "",
    "pos": "n.",
    "meaning": "公墓，墓地",
    "example": "Her father was laid in a cemetery.",
    "exampleCn": "她父亲安葬在一处公墓。"
   },
   {
    "word": "classic",
    "phonetic": "'klæsɪk",
    "pos": "adj.",
    "meaning": "经典的；古典的，传统的；最优秀的；名著；经典著作；大艺术家",
    "example": "Roy scored a classic goal in the 90th minute.",
    "exampleCn": "罗伊在第90分钟时踢进了漂亮的一球。"
   },
   {
    "word": "melancholy",
    "phonetic": "'mɛlənkɑli",
    "pos": "adj.",
    "meaning": "忧郁的；使人悲伤的；忧郁；悲哀；愁思",
    "example": "He sank into deep melancholy.",
    "exampleCn": "他陷入深深的忧郁之中。"
   },
   {
    "word": "ultimately",
    "phonetic": "'ʌltɪmətli",
    "pos": "adv.",
    "meaning": "最后；根本；基本上",
    "example": "Ultimately, the decision rests with the child’s parents.",
    "exampleCn": "最终，决定权在这孩子的父母手中。"
   },
   {
    "word": "laborious",
    "phonetic": "lə'bɔrɪəs",
    "pos": "adj.",
    "meaning": "勤劳的；艰苦的；费劲的",
    "example": "the laborious business of drying the crops",
    "exampleCn": "把收获的庄稼晒干这一艰苦的工作"
   },
   {
    "word": "notion",
    "phonetic": "'noʃən",
    "pos": "n.",
    "meaning": "概念；见解；打算",
    "example": "She had no notion what he meant.",
    "exampleCn": "她根本不明白他是什么意思。"
   },
   {
    "word": "ensemble",
    "phonetic": "ɑn'sɑmbl",
    "pos": "n.",
    "meaning": "全体；总效果；全套服装；全套家具；合奏组；同时",
    "example": "...an ensemble of young musicians.",
    "exampleCn": "…一个由年轻音乐家组成的乐团。"
   },
   {
    "word": "adapt",
    "phonetic": "ə'dæpt",
    "pos": "vt",
    "meaning": "使适应；改编；适应",
    "example": "The ability to adapt is a definite asset in this job.",
    "exampleCn": "适应能力是做这份工作的绝对有利条件。"
   },
   {
    "word": "maltreat",
    "phonetic": ",mæl'trit",
    "pos": "vt",
    "meaning": "虐待；滥用；粗暴对待",
    "example": "The hostages said they were hungry but had not been maltreated.",
    "exampleCn": "人质说他们挨了饿，但没有受到虐待。"
   },
   {
    "word": "fidelity",
    "phonetic": "fɪ'dɛləti",
    "pos": "n.",
    "meaning": "[电子][电讯]保真度；忠诚；精确；尽责",
    "example": "the importance of marital fidelity",
    "exampleCn": "对婚姻忠贞的重要性"
   },
   {
    "word": "nap",
    "phonetic": "næp",
    "pos": "n.",
    "meaning": "小睡，打盹儿；细毛；孤注一掷；小睡；疏忽",
    "example": "an afternoon nap",
    "exampleCn": "午睡"
   },
   {
    "word": "foam",
    "phonetic": "fom",
    "pos": "n.",
    "meaning": "泡沫；水沫；灭火泡沫；起泡沫；吐白沫；起着泡沫流动",
    "example": "a foam mattress",
    "exampleCn": "海绵橡胶床垫"
   },
   {
    "word": "sculpture",
    "phonetic": "'skʌlptʃɚ",
    "pos": "n.",
    "meaning": "[建]雕塑；[轻]雕刻；刻蚀；[建]雕塑；[轻]雕刻；刻蚀",
    "example": "...stone sculptures of figures and animals.",
    "exampleCn": "…人物及动物石雕。"
   },
   {
    "word": "charm",
    "phonetic": "tʃɑrm",
    "pos": "n.",
    "meaning": "魅力，吸引力；魔力；使陶醉；行魔法",
    "example": "Joe’s boyish charm",
    "exampleCn": "乔身上的稚趣"
   },
   {
    "word": "accuse",
    "phonetic": "ə'kjuz",
    "pos": "vt",
    "meaning": "控告，指控；谴责；归咎于；指责；控告",
    "example": "The professor stands accused of (=  has been accused of  ) stealing his student’s ideas and publishing them.",
    "exampleCn": "那位教授被指控剽窃学生的观点拿去发表。"
   },
   {
    "word": "ratio",
    "phonetic": "'reʃɪo",
    "pos": "n.",
    "meaning": "比率，[数]比例",
    "example": "The ratio between the two sides is one to four.",
    "exampleCn": "双方人数对比是一对四。"
   },
   {
    "word": "cement",
    "phonetic": "sə'mɛnt",
    "pos": "vt",
    "meaning": "巩固，加强；用水泥涂；接合；[建]水泥；[胶粘]接合剂",
    "example": "a bag of cement",
    "exampleCn": "一袋水泥"
   },
   {
    "word": "cure",
    "phonetic": "kjʊr",
    "pos": "vt",
    "meaning": "[临床]治疗；治愈；[化学]使硫化；加工处理；治病；痊愈；[临床]受治疗；[化学]被硫化；被加工处理；治疗；治愈；[临床]疗法",
    "example": "Many types of cancer can now be cured.",
    "exampleCn": "现在许多癌症都可以治好。"
   },
   {
    "word": "upbringing",
    "phonetic": "'ʌpbrɪŋɪŋ",
    "pos": "n.",
    "meaning": "教养；养育；抚育",
    "example": "Mike had had a strict upbringing.",
    "exampleCn": "迈克从小家教很严。"
   },
   {
    "word": "agreement",
    "phonetic": "ə'grimənt",
    "pos": "n.",
    "meaning": "[法]协议；同意，一致",
    "example": "Please read the agreement and sign it.",
    "exampleCn": "请阅读协议书并签字。"
   },
   {
    "word": "unify",
    "phonetic": "'junɪfaɪ",
    "pos": "vt",
    "meaning": "统一；使相同，使一致",
    "example": "Strong support for the war has unified the nation.",
    "exampleCn": "对战争的坚决支持使这个国家团结了起来。"
   },
   {
    "word": "maintenance",
    "phonetic": "'mentənəns",
    "pos": "n.",
    "meaning": "维护，维修；保持；[经]生活费用",
    "example": "the cost of repairs and maintenance",
    "exampleCn": "维修保养费"
   },
   {
    "word": "mischief",
    "phonetic": "'mɪstʃɪf",
    "pos": "n.",
    "meaning": "恶作剧；伤害；顽皮；不和",
    "example": "If you try to lift that box, you’ll do yourself a mischief.",
    "exampleCn": "你要是想搬那个箱子，会伤着自己的。"
   },
   {
    "word": "centenary",
    "phonetic": "sɛn'tɛnəri",
    "pos": "a&n",
    "meaning": "百年的；百年纪念",
    "example": "Some say he was alluding to the centenary of the Fabian Society, founded in 1884.",
    "exampleCn": "有些人说他是暗示1884年成立的费边社成立一百年。"
   },
   {
    "word": "twilight",
    "phonetic": "'twaɪlaɪt",
    "pos": "n.",
    "meaning": "黎明，黄昏；薄暮；衰退期；朦胧状态；昏暗的，微明的；暮年的",
    "example": "They returned at twilight.",
    "exampleCn": "他们在黄昏时返回。"
   },
   {
    "word": "accommodation",
    "phonetic": "ə,kɑmə'deʃən",
    "pos": "n.",
    "meaning": "住处，膳宿；[分子生物]调节；和解；预订铺位",
    "example": "The price for the holiday includes flights and accommodation.",
    "exampleCn": "度假的价格包括机票和住宿。"
   },
   {
    "word": "intimate",
    "phonetic": "ˈɪntəmɪt",
    "pos": "adj.",
    "meaning": "亲密的；私人的；精通的；有性关系的；知己；至交；暗示；通知；宣布",
    "example": "an intimate friend of Picasso’s",
    "exampleCn": "毕加索的一个密友"
   },
   {
    "word": "inject",
    "phonetic": "ɪn'dʒɛkt",
    "pos": "vt",
    "meaning": "注入；注射",
    "example": "His son was injected with strong drugs.",
    "exampleCn": "他的儿子被注射了强效的药。"
   },
   {
    "word": "heir",
    "phonetic": "ɛr",
    "pos": "n.",
    "meaning": "[法]继承人；后嗣；嗣子",
    "example": "Jonson was his political heir as leader of the party.",
    "exampleCn": "琼森是他的政治接班人，他将担任该党派的领袖。"
   },
   {
    "word": "postgraduate",
    "phonetic": "post'ɡrædjet",
    "pos": "n.",
    "meaning": "研究生，研究所学生",
    "example": "postgraduate degrees",
    "exampleCn": "研究生学位"
   },
   {
    "word": "engrave",
    "phonetic": "ɪn'ɡrev",
    "pos": "vt",
    "meaning": "雕刻；铭记",
    "example": "Your wedding ring can be engraved with a personal inscription at no extra cost.",
    "exampleCn": "你的结婚戒指可以刻上个人题字不另收费。"
   },
   {
    "word": "festival",
    "phonetic": "ˈfɛstəvəl",
    "pos": "n.",
    "meaning": "节日；庆祝，纪念活动；欢乐；节日的，喜庆的；快乐的",
    "example": "Christmas is one of the main festivals in the Christian Calendar.",
    "exampleCn": "圣诞节是基督教历的重大节日之一。"
   },
   {
    "word": "mishap",
    "phonetic": "'mɪshæp",
    "pos": "n.",
    "meaning": "灾祸；不幸事故；晦气",
    "example": "I had a slight mishap with one of the glasses.",
    "exampleCn": "我犯了一个小小的错误，把其中的一个玻璃杯打破了。"
   },
   {
    "word": "characteristic",
    "phonetic": ",kærəktə'rɪstɪk",
    "pos": "adj.",
    "meaning": "典型的；特有的；表示特性的；特征；特性；特色",
    "example": "Genes determine the characteristics of every living thing.",
    "exampleCn": "基因决定每个生物的特征。"
   },
   {
    "word": "on",
    "phonetic": "ɑn",
    "pos": "adv.",
    "meaning": "向前地；作用中，行动中；继续着；向，朝……；关于；在……之上；在……时候",
    "example": "I wanted to punch him on the nose.",
    "exampleCn": "我真想一拳打到他鼻子上。"
   },
   {
    "word": "numerate",
    "phonetic": "'njʊmə,ret",
    "pos": "vt",
    "meaning": "[数]数，列举；读（数）",
    "example": "Where children respect a parent and know that he or she demands good behavior in school, even mediocre or loutish teachers can pull off the trick④of producing modestly literate and numerate children.",
    "exampleCn": "如果孩子尊重父母，并且知道父母要求自己好好上学，即便是平庸的或是很笨的老师也能够成功地教出一般水平的能读会算的小学生。"
   },
   {
    "word": "ridge",
    "phonetic": "rɪdʒ",
    "pos": "n.",
    "meaning": "[地理]山脊；山脉；[建]屋脊",
    "example": "We made our way carefully along the ridge.",
    "exampleCn": "我们沿着山脊小心前行。"
   },
   {
    "word": "threshold",
    "phonetic": "'θrɛʃhold",
    "pos": "n.",
    "meaning": "入口；[建]门槛；开始；极限；临界值",
    "example": "She opened the door and stepped across the threshold.",
    "exampleCn": "她打开门，跨过门槛。"
   },
   {
    "word": "profit",
    "phonetic": "'prɑfɪt",
    "pos": "n.",
    "meaning": "[会计]利润；利益；获利；有益；有益于",
    "example": "The shop’s daily profit is usually around $500.",
    "exampleCn": "这家商店每天的利润一般在500美元左右。"
   },
   {
    "word": "premise",
    "phonetic": "ˈpremɪs",
    "pos": "vt",
    "meaning": "引出，预先提出；作为…的前提；前提；上述各项；房屋连地基",
    "example": "Schools may earn extra money by renting out their premises.",
    "exampleCn": "学校通过出租房屋场地可以获取额外收入。"
   },
   {
    "word": "seam",
    "phonetic": "sim",
    "pos": "n.",
    "meaning": "缝；接缝；缝合；接合；使留下伤痕；裂开；产生裂缝",
    "example": "She was repairing Billy’s trousers, where the seam had come undone.",
    "exampleCn": "她在补比利裤子的开线处。"
   },
   {
    "word": "paraphrase",
    "phonetic": "ˈpærəfreɪz",
    "pos": "vt",
    "meaning": "改述；释义；意译",
    "example": "To paraphrase Finkelstein, mathematics is a language, like English.",
    "exampleCn": "芬克尔斯坦的意思是，数学是一门语言，就像英语一样。"
   },
   {
    "word": "underestimate",
    "phonetic": "/ˌʌndərˈestɪmeɪt/",
    "pos": "vt",
    "meaning": "低估；看轻；低估",
    "example": "None of us should ever underestimate the degree of difficulty women face in career advancement.",
    "exampleCn": "我们谁都不应低估妇女在职业发展中所面临的困难程度。"
   },
   {
    "word": "automobile",
    "phonetic": ",ɔtəmə'bil",
    "pos": "n.",
    "meaning": "[车辆]汽车",
    "example": "the automobile industry",
    "exampleCn": "汽车工业"
   },
   {
    "word": "square",
    "phonetic": "skwɛr",
    "pos": "adj.",
    "meaning": "平方的；[数]正方形的；直角的；正直的；使成方形；与…一致；一致；[数]成方形；平方；广场；[数]正方形",
    "example": "a large square room",
    "exampleCn": "一个正方形的大房间"
   },
   {
    "word": "manuscript",
    "phonetic": "'mænjuskrɪpt",
    "pos": "n.",
    "meaning": "[图情]手稿；原稿；[图情]手写的",
    "example": "Unfortunately, parts of the original manuscript have been lost.",
    "exampleCn": "遗憾的是，部分原始手稿丢失了。"
   },
   {
    "word": "gravity",
    "phonetic": "'ɡrævəti",
    "pos": "n.",
    "meaning": "[力]重力，地心引力；严重性；庄严",
    "example": "the force of gravity",
    "exampleCn": "重力"
   },
   {
    "word": "condition",
    "phonetic": "kən'dɪʃən",
    "pos": "n.",
    "meaning": "[数]条件；情况；环境；身分；使适应；使健康；决定；以…为条件",
    "example": "Conditions in the prison were atrocious.",
    "exampleCn": "这座监狱的条件糟透了。"
   },
   {
    "word": "specialize",
    "phonetic": "'spɛʃəlaɪz",
    "pos": "vi",
    "meaning": "专门从事；详细说明；特化；使专门化；使适应特殊情况；详细说明",
    "example": "\"You must specialize, \" he says.",
    "exampleCn": "“你必须做到专门化。” 他说。"
   },
   {
    "word": "undermine",
    "phonetic": "'ʌndɚ'maɪn",
    "pos": "vt",
    "meaning": "破坏，渐渐破坏；挖掘地基",
    "example": "economic policies that threaten to undermine the health care system",
    "exampleCn": "可能会损害医疗保健制度的经济政策"
   },
   {
    "word": "motif",
    "phonetic": "mo'tif",
    "pos": "n.",
    "meaning": "主题；动机；主旨；图形；意念",
    "example": "The theme of creation is a recurrent motif in Celtic mythology.",
    "exampleCn": "天地万物的创造是凯尔特神话中反复出现的主题。"
   },
   {
    "word": "fatuous",
    "phonetic": "'fætʃuəs",
    "pos": "adj.",
    "meaning": "愚笨的；昏庸的；发呆的；自满的",
    "example": "fatuous questions",
    "exampleCn": "愚昧的问题"
   },
   {
    "word": "underwrite",
    "phonetic": ",ʌndɚ'raɪt",
    "pos": "v.",
    "meaning": "给保险；同意赔款(海上保险)",
    "example": "The government has agreed to underwrite the project with a grant of £5 million.",
    "exampleCn": "政府同意拨款 500 万英镑资助该项目。"
   },
   {
    "word": "dairy",
    "phonetic": "'dɛri",
    "pos": "n.",
    "meaning": "奶制品；乳牛；制酪场；[食品]乳品店；牛奶及乳品业；[食品]乳品的；牛奶的；牛奶制的；产乳的",
    "example": "In my childhood, local dairies bought milk from local farmers.",
    "exampleCn": "在我小时候，本地的乳品公司向当地农场主收购牛奶。"
   },
   {
    "word": "conquest",
    "phonetic": "'kɑŋkwɛst",
    "pos": "n.",
    "meaning": "征服，战胜；战利品",
    "example": "the Norman Conquest (= the conquest of England by the Normans )",
    "exampleCn": "诺曼征服"
   },
   {
    "word": "drown",
    "phonetic": "draʊn",
    "pos": "vt",
    "meaning": "淹没；把…淹死",
    "example": "Many people drowned when the boat overturned.",
    "exampleCn": "船翻后许多人淹死了。"
   },
   {
    "word": "pseudonym",
    "phonetic": "'sudənɪm",
    "pos": "n.",
    "meaning": "笔名；[法]假名",
    "example": "Both plays were published under the pseudonym of Philip Dayre.",
    "exampleCn": "两个剧本都是以菲利普·戴尔的笔名发表的。"
   },
   {
    "word": "coordinate",
    "phonetic": "ko'ɔrdɪnet",
    "pos": "adj.",
    "meaning": "并列的；[物化]同等的；调整；整合；协调",
    "example": "The agencies are working together to co-ordinate policy on food safety.",
    "exampleCn": "这些机构在共同合作为食品安全政策做协调工作。"
   },
   {
    "word": "designate",
    "phonetic": "'dɛzɪɡnet",
    "pos": "vt",
    "meaning": "指定；指派；标出；把…定名为；指定的；选定的",
    "example": "Buildings are designated by red squares on the map.",
    "exampleCn": "在地图上建筑物用红色方块标明。"
   },
   {
    "word": "athlete",
    "phonetic": "'æθlit",
    "pos": "n.",
    "meaning": "运动员，体育家；身强力壮的人",
    "example": "a professional athlete",
    "exampleCn": "一位专业运动员"
   },
   {
    "word": "underline",
    "phonetic": "'ʌndəlaɪn",
    "pos": "vt",
    "meaning": "强调；在…下面划线；预告",
    "example": "This tragic incident underlines the need for immediate action.",
    "exampleCn": "这一悲剧事件突显了立即采取行动的必要性。"
   },
   {
    "word": "loath",
    "phonetic": "loθ",
    "pos": "adj.",
    "meaning": "勉强的；不情愿的（等于loth）",
    "example": "Sarah was loath to tell her mother what had happened.",
    "exampleCn": "萨拉不愿意告诉母亲所发生的事。"
   },
   {
    "word": "meddle",
    "phonetic": "'mɛdl",
    "pos": "vi",
    "meaning": "管闲事，干预他人之事",
    "example": "He accused the US of meddling in China’s internal affairs .",
    "exampleCn": "他指责美国干涉中国内政。"
   },
   {
    "word": "myth",
    "phonetic": "mɪθ",
    "pos": "n.",
    "meaning": "神话；虚构的人，虚构的事",
    "example": "a book of Greek myths",
    "exampleCn": "一本关于希腊神话的图书"
   },
   {
    "word": "coil",
    "phonetic": "kɔɪl",
    "pos": "vt",
    "meaning": "盘绕，把…卷成圈；[电]线圈；卷；成圈状",
    "example": "the coil in a light bulb",
    "exampleCn": "灯丝"
   },
   {
    "word": "enthusiasm",
    "phonetic": "ɪn'θuzɪæzəm",
    "pos": "n.",
    "meaning": "热心，热忱，热情",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "guild",
    "phonetic": "ɡɪld",
    "pos": "n.",
    "meaning": "协会，[经]行会；[劳经]同业公会",
    "example": "the Women’s Guild",
    "exampleCn": "妇女协会"
   },
   {
    "word": "excerpt",
    "phonetic": "'ɛksɝpt",
    "pos": "n.",
    "meaning": "摘录，引用；引用，摘录；摘录，引用",
    "example": "...an excerpt from Tchaikovsky's Nutcracker.",
    "exampleCn": "…柴可夫斯基的《胡桃夹子》选段。"
   },
   {
    "word": "jolt",
    "phonetic": "dʒolt",
    "pos": "vt",
    "meaning": "使颠簸；使震惊；使摇动；摇晃；颠簸而行；颠簸；摇晃；震惊；严重挫折",
    "example": "We jolted along rough wet roads through an endless banana plantation.",
    "exampleCn": "我们沿崎岖潮湿的公路颠簸着驶过无边无际的香蕉种植园。"
   },
   {
    "word": "nobility",
    "phonetic": "no'bɪləti",
    "pos": "n.",
    "meaning": "贵族；高贵；高尚",
    "example": "the nobility of his intentions",
    "exampleCn": "他崇高的志向"
   },
   {
    "word": "novelty",
    "phonetic": "'nɑvlti",
    "pos": "n.",
    "meaning": "新奇；新奇的事物；新颖小巧而廉价的物品",
    "example": "Many toys have no attraction beyond their novelty value.",
    "exampleCn": "许多玩具除了有些新奇感之外，别无吸引力。"
   },
   {
    "word": "garment",
    "phonetic": "'gɑrmənt",
    "pos": "n.",
    "meaning": "衣服，服装；外表，外观；给…穿衣服",
    "example": "She pulled the garment on and zipped it up.",
    "exampleCn": "她穿上衣服并拉好拉链。"
   },
   {
    "word": "obedient",
    "phonetic": "oˈbidiənt",
    "pos": "adj.",
    "meaning": "顺从的，服从的；孝顺的",
    "example": "an obedient child",
    "exampleCn": "听话的孩子"
   },
   {
    "word": "drill",
    "phonetic": "drɪl",
    "pos": "n.",
    "meaning": "训练；[矿业]钻孔机；钻子；[农机]播种机；钻孔；训练；钻孔；训练；[农机]条播",
    "example": "an electric drill",
    "exampleCn": "电钻"
   },
   {
    "word": "dodge",
    "phonetic": "dɑdʒ",
    "pos": "n.",
    "meaning": "躲闪；托词；躲避，避开；躲避，避开",
    "example": "He ran across the courtyard, dodging a storm of bullets.",
    "exampleCn": "他跑过院子，躲避雨点般的子弹。"
   },
   {
    "word": "gymnasium",
    "phonetic": "dʒɪm'nezɪəm",
    "pos": "n.",
    "meaning": "体育馆；健身房",
    "example": "The next day, the arsonist was arrested at a gymnasium.",
    "exampleCn": "第二天，纵火犯在一家体育馆被逮捕了。"
   },
   {
    "word": "part",
    "phonetic": "pɑrt",
    "pos": "n.",
    "meaning": "部分；角色；零件；分离；分配；分开；断裂；分手；部分地；部分的",
    "example": "For part of the day, you will be outside doing practical work.",
    "exampleCn": "你们每天将有一部分时间在户外实际操作。"
   },
   {
    "word": "deflate",
    "phonetic": "dɪ'flet",
    "pos": "vt",
    "meaning": "放气；使缩小；紧缩通货；打击；使泄气；缩小；物价下降",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "clasp",
    "phonetic": "klæsp",
    "pos": "n.",
    "meaning": "扣子，钩子；握手；紧抱；扣紧；紧紧缠绕；扣住",
    "example": "the firm clasp of her hand",
    "exampleCn": "她有力的握手"
   },
   {
    "word": "drench",
    "phonetic": "drɛntʃ",
    "pos": "vt",
    "meaning": "使湿透；给（牲畜）灌药；滂沱大雨；浸液",
    "example": "In the early morning they had got drenched in the grass.",
    "exampleCn": "一大清早他们在草丛里弄得浑身湿透。"
   },
   {
    "word": "ecology",
    "phonetic": "ɪ'kɑlədʒi",
    "pos": "n.",
    "meaning": "[生态]生态学；社会生态学",
    "example": "the natural ecology of the Earth",
    "exampleCn": "地球的自然生态"
   },
   {
    "word": "guardian",
    "phonetic": "'ɡɑrdɪən",
    "pos": "n.",
    "meaning": "[法]监护人，保护人；守护者；守护的",
    "example": "Destiny's legal guardian was her grandmother.",
    "exampleCn": "德斯蒂妮的法定监护人是她的祖母。"
   },
   {
    "word": "pit",
    "phonetic": "pɪt",
    "pos": "n.",
    "meaning": "[矿业]矿井；深坑；陷阱；（物体或人体表面上的）凹陷；（英国剧场的）正厅后排；正厅后排的观众；使竞争；窖藏；使凹下；去…之核；使留疤痕；凹陷；起凹点",
    "example": "an inspection pit",
    "exampleCn": "汽车检修坑"
   },
   {
    "word": "conflict",
    "phonetic": "'kɑnflɪkt",
    "pos": "n.",
    "meaning": "冲突，矛盾；斗争；争执；冲突，抵触；争执；战斗",
    "example": "efforts to resolve the conflict",
    "exampleCn": "解决武装冲突的努力"
   },
   {
    "word": "sympathetic",
    "phonetic": ",sɪmpə'θɛtɪk",
    "pos": "adj.",
    "meaning": "同情的；交感神经的；共鸣的；赞同的；和谐的；合意的；交感神经；容易感受的人",
    "example": "a sympathetic friend",
    "exampleCn": "一个有同情心的朋友"
   },
   {
    "word": "objective",
    "phonetic": "əb'dʒɛktɪv",
    "pos": "adj.",
    "meaning": "[医]客观的；目标的；[语]宾格的；目的；目标；[光]物镜；[语]宾格",
    "example": "Scientists need to be objective when doing research.",
    "exampleCn": "科学家做研究时要客观。"
   },
   {
    "word": "electrical",
    "phonetic": "ɪ'lɛktrɪkl",
    "pos": "adj.",
    "meaning": "电的，电气科学的",
    "example": "The fire was caused by an electrical fault.",
    "exampleCn": "大火是电力故障引起的。"
   },
   {
    "word": "turbulent",
    "phonetic": "'tɝbjələnt",
    "pos": "adj.",
    "meaning": "骚乱的，混乱的；狂暴的；吵闹的",
    "example": "the turbulent times of the French Revolution",
    "exampleCn": "法国大革命的动荡时期"
   },
   {
    "word": "invade",
    "phonetic": "ɪn'ved",
    "pos": "vt",
    "meaning": "侵略；侵袭；侵扰；涌入；侵略；侵入；侵袭；侵犯",
    "example": "The Romans invaded Britain 2,000 years ago.",
    "exampleCn": "2,000年前古罗马人入侵了英国。"
   },
   {
    "word": "permanent",
    "phonetic": "'pɝmənənt",
    "pos": "adj.",
    "meaning": "永久的，永恒的；不变的",
    "example": "He gave up a permanent job in order to freelance.",
    "exampleCn": "他放弃了固定工作，为的是当一名自由职业者。"
   },
   {
    "word": "fundamental",
    "phonetic": ",fʌndə'mɛntl",
    "pos": "adj.",
    "meaning": "基本的，根本的；基本原理；基本原则",
    "example": "We have to tackle the fundamental cause of the problem.",
    "exampleCn": "我们必须解决问题的根本原因。"
   },
   {
    "word": "receipt",
    "phonetic": "rɪ'sit",
    "pos": "n.",
    "meaning": "收到；收据；收入；收到",
    "example": "Keep your receipt in case you want to bring it back.",
    "exampleCn": "保留收据以备退货之需。"
   },
   {
    "word": "profuse",
    "phonetic": "prə'fjus",
    "pos": "adj.",
    "meaning": "丰富的；很多的；慷慨的；浪费的",
    "example": "He made profuse apologies .",
    "exampleCn": "他不住地道歉。"
   },
   {
    "word": "extort",
    "phonetic": "ɪk'stɔrt",
    "pos": "vt",
    "meaning": "敲诈；侵占；强求；牵强地引出",
    "example": "Corrupt government officials were extorting money from him.",
    "exampleCn": "腐败的政府官员那时正向他勒索钱财。"
   },
   {
    "word": "spacious",
    "phonetic": "'speʃəs",
    "pos": "adj.",
    "meaning": "宽敞的，广阔的；无边无际的",
    "example": "a spacious living area",
    "exampleCn": "宽敞的居住空间"
   },
   {
    "word": "velocity",
    "phonetic": "vəˈlɑsəti",
    "pos": "n.",
    "meaning": "[力]速率；迅速；周转率",
    "example": "the velocity of light",
    "exampleCn": "光速"
   },
   {
    "word": "checkup",
    "phonetic": "'tʃekʌp",
    "pos": "n.",
    "meaning": "审查，检查；健康检查",
    "example": "It’s important to have regular checkups .",
    "exampleCn": "定期做体检是很重要的。"
   },
   {
    "word": "landscape",
    "phonetic": "'lænd'skep",
    "pos": "n.",
    "meaning": "风景，景色；山水画",
    "example": "the beauty of the New England landscape",
    "exampleCn": "新英格兰风光之美"
   },
   {
    "word": "convene",
    "phonetic": "kən'vin",
    "pos": "vt",
    "meaning": "召集，集合；传唤；聚集，集合",
    "example": "a report by experts convened by the National Institutes of Health",
    "exampleCn": "由全国健康协会召集的专家提出的一份报告"
   },
   {
    "word": "cork",
    "phonetic": "kɔrk",
    "pos": "n.",
    "meaning": "[木]软木塞，软木制品；软木；抑制，堵住；用软木塞塞住",
    "example": "a cork bulletin board",
    "exampleCn": "软木公告板"
   },
   {
    "word": "increment",
    "phonetic": "'ɪŋkrəmənt",
    "pos": "n.",
    "meaning": "[数]增量；增加；增额；盈余",
    "example": "Any time you want to add another test, just add another row to your datapool and increment the counter value in the loop.",
    "exampleCn": "在您想要增加另一个测试时，只要向您的数据池中增加另一行，并在循环中增加计数器的值。"
   },
   {
    "word": "host",
    "phonetic": "host",
    "pos": "n.",
    "meaning": "[计]主机；主人；主持人；许多；主持；当主人招待；群集；做主人",
    "example": "Our host greeted us at the door.",
    "exampleCn": "主人在门口迎接我们。"
   },
   {
    "word": "suspense",
    "phonetic": "sə'spɛns",
    "pos": "n.",
    "meaning": "悬念；悬疑；焦虑；悬而不决",
    "example": "The suspense over the two remaining hostages ended last night when the police discovered the bullet ridden bodies.",
    "exampleCn": "有关剩下两名人质的悬念在昨晚警方发现布满弹孔的尸体后结束了。"
   },
   {
    "word": "infringe",
    "phonetic": "ɪn'frɪndʒ",
    "pos": "vt",
    "meaning": "侵犯；违反；破坏；侵犯；侵害",
    "example": "A backup copy of a computer program does not infringe copyright.",
    "exampleCn": "计算机程序的备份不侵犯版权。"
   },
   {
    "word": "discern",
    "phonetic": "dɪ'sɝn",
    "pos": "vt",
    "meaning": "识别；领悟，认识；看清楚，辨别",
    "example": "We could just discern a town in the distance.",
    "exampleCn": "我们依稀看到远处有一座城镇。"
   },
   {
    "word": "shimmer",
    "phonetic": "'ʃɪmɚ",
    "pos": "n.",
    "meaning": "微光；闪光；闪烁；发闪烁的微光；使闪烁",
    "example": "The lake shimmered in the moonlight.",
    "exampleCn": "月色下，湖面波光粼粼。"
   },
   {
    "word": "medal",
    "phonetic": "'mɛdl",
    "pos": "n.",
    "meaning": "勋章，[劳经]奖章；纪念章",
    "example": "She won a gold medal at the last Olympics.",
    "exampleCn": "她在上届奥运会上赢得一枚金牌。"
   },
   {
    "word": "negation",
    "phonetic": "nɪ'ɡeʃən",
    "pos": "n.",
    "meaning": "[数]否定，否认；拒绝",
    "example": "Much of what passes for Christianity is a negation of Christ’s teachings.",
    "exampleCn": "许多被认为是基督教的东西，和基督的教诲是相悖的。"
   },
   {
    "word": "venture",
    "phonetic": "'vɛntʃɚ",
    "pos": "vt",
    "meaning": "敢于；冒险；投机；企业；风险；冒险",
    "example": "...a Russian-American joint venture.",
    "exampleCn": "…一个俄美合资的风险项目。"
   },
   {
    "word": "fantastic",
    "phonetic": "fæn'tæstɪk",
    "pos": "adj.",
    "meaning": "奇异的；空想的；极好的；不可思议的；古怪的人",
    "example": "You look fantastic!",
    "exampleCn": "你看上去棒极了！"
   },
   {
    "word": "line",
    "phonetic": "laɪn",
    "pos": "n.",
    "meaning": "路线，航线；排；绳；排队；站成一排",
    "example": "Draw a straight line across the top of the page.",
    "exampleCn": "在这一页的上方画一条直线。"
   },
   {
    "word": "suspend",
    "phonetic": "sə'spɛnd",
    "pos": "vt",
    "meaning": "使暂停；延缓，推迟；使悬浮",
    "example": "Sales of the drug will be suspended until more tests are completed.",
    "exampleCn": "这种药品在完成进一步检验之前将暂停销售。"
   },
   {
    "word": "faint",
    "phonetic": "fent",
    "pos": "adj.",
    "meaning": "模糊的；头晕的；[医]虚弱的；衰弱的；昏倒；变得微弱；变得没气力；[中医]昏厥，昏倒",
    "example": "She gave a faint smile.",
    "exampleCn": "她淡淡一笑。"
   },
   {
    "word": "due",
    "phonetic": "du",
    "pos": "adj.",
    "meaning": "到期的；预期的；应付的；应得的；正（置于方位词前）",
    "example": "Any money due you will be sent by cheque through the post.",
    "exampleCn": "应该支付给你的款项将会以支票邮寄给你。"
   },
   {
    "word": "reticent",
    "phonetic": "'rɛtɪsnt",
    "pos": "adj.",
    "meaning": "沉默的；有保留的；谨慎的",
    "example": "She is so reticent about her achievements.",
    "exampleCn": "她对于自己的成就如此缄默。"
   },
   {
    "word": "deduce",
    "phonetic": "dɪ'dʊs",
    "pos": "vt",
    "meaning": "推论，推断；[数][计]演绎出",
    "example": "Alison cleverly deduced that I was the author of the letter.",
    "exampleCn": "艾莉森聪明地推断出我是这封信的作者。"
   },
   {
    "word": "renovation",
    "phonetic": ",rɛnə'veʃən",
    "pos": "n.",
    "meaning": "革新；修理；恢复活力",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "recite",
    "phonetic": "rɪ'saɪt",
    "pos": "vt",
    "meaning": "背诵；叙述；列举；背诵；叙述",
    "example": "She recited a poem that she had learnt at school.",
    "exampleCn": "她背诵了一首学校里学的诗。"
   },
   {
    "word": "dubious",
    "phonetic": "'dubɪəs",
    "pos": "adj.",
    "meaning": "可疑的；暧昧的；无把握的；半信半疑的",
    "example": "My parents were a bit dubious about it all at first but we soon convinced them.",
    "exampleCn": "起初我父母亲对此尚心存疑虑，但很快我们便说服了他们。"
   },
   {
    "word": "invalid",
    "phonetic": "ˈɪnvəlɪd；ɪnˈvælɪd",
    "pos": "adj.",
    "meaning": "无效的；有病的；残废的；病人；[医]残废者",
    "example": "Without the right date stamped on it, your ticket will be invalid.",
    "exampleCn": "票上若没有加盖正确日期就是废票。"
   },
   {
    "word": "exuberant",
    "phonetic": "iɡ'zju:bərənt",
    "pos": "adj.",
    "meaning": "繁茂的；生气勃勃的，充溢的",
    "example": "So the exuberant young girl with dark hair and blue eyes decided to become a screen actress.",
    "exampleCn": "因此，这个充满活力的年轻黑发碧眼女孩决定成为一名荧屏演员。"
   },
   {
    "word": "autonomy",
    "phonetic": "ɔ'tɑnəmi",
    "pos": "n.",
    "meaning": "自治，自治权",
    "example": "campaigners who want greater autonomy for Corsica",
    "exampleCn": "希望科西嘉有更多自治权的活动家"
   },
   {
    "word": "damp",
    "phonetic": "dæmp",
    "pos": "vt",
    "meaning": "[气象][物]使潮湿；使阻尼；使沮丧，抑制；减幅，阻尼；[气象][物]变潮湿；[气象][物]潮湿，湿气；[气象][物]潮湿的",
    "example": "Damp had stained the walls.",
    "exampleCn": "墙上留下了潮湿的痕迹。"
   },
   {
    "word": "aspire",
    "phonetic": "ə'spaɪr",
    "pos": "vi",
    "meaning": "渴望；立志；追求",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "transmission",
    "phonetic": "træns'mɪʃən",
    "pos": "n.",
    "meaning": "传动装置，[机]变速器；传递；[计][通信]传送；播送",
    "example": "worldwide data transmission",
    "exampleCn": "全球数据传输"
   },
   {
    "word": "toast",
    "phonetic": "tost",
    "pos": "n.",
    "meaning": "干杯；烤面包；吐司；烤；敬酒；使暖和；烘，烤",
    "example": "I had a piece of toast for breakfast.",
    "exampleCn": "我早饭吃了一片吐司。"
   },
   {
    "word": "circus",
    "phonetic": "'sɝkəs",
    "pos": "n.",
    "meaning": "马戏；马戏团",
    "example": "Piccadilly Circus",
    "exampleCn": "皮卡迪利广场"
   },
   {
    "word": "qualification",
    "phonetic": ",kwɑlɪfɪ'keʃən",
    "pos": "n.",
    "meaning": "资格；条件；限制；赋予资格",
    "example": "He left school without any qualifications.",
    "exampleCn": "他离校时没有拿到任何文凭。"
   },
   {
    "word": "lounge",
    "phonetic": "laʊndʒ",
    "pos": "n.",
    "meaning": "[建]休息室；闲逛；躺椅；（英）酒吧间；闲逛；懒洋洋地躺卧；闲混；虚度光阴",
    "example": "Nathan was lounging on the grass bank outside the cottage.",
    "exampleCn": "内森正懒洋洋地躺在小屋外的草堤上。"
   },
   {
    "word": "dip",
    "phonetic": "dɪp",
    "pos": "vt",
    "meaning": "浸，泡，蘸；舀取；把伸入；浸；下降，下沉；倾斜；舀，掏；下沉，下降；倾斜；浸渍，蘸湿",
    "example": "Are you coming in for a dip?",
    "exampleCn": "你游一会儿吗？"
   },
   {
    "word": "tenacious",
    "phonetic": "tə'neʃəs",
    "pos": "adj.",
    "meaning": "顽强的；坚韧的；固执的；紧握的；黏着力强的",
    "example": "a tenacious negotiator",
    "exampleCn": "锲而不舍的谈判者"
   },
   {
    "word": "rub",
    "phonetic": "rʌb",
    "pos": "vt",
    "meaning": "擦；摩擦；惹怒；擦；摩擦；擦破；摩擦；障碍；磨损处",
    "example": "You’ll have to rub harder if you want to get it clean.",
    "exampleCn": "如果你想把它弄干净，就得更使劲地擦。"
   },
   {
    "word": "chasm",
    "phonetic": "'kæzəm",
    "pos": "n.",
    "meaning": "峡谷；裂口；分歧；深坑",
    "example": "a rope bridge across the chasm",
    "exampleCn": "峡谷上的索桥"
   },
   {
    "word": "mind",
    "phonetic": "maɪnd",
    "pos": "n.",
    "meaning": "理智，精神；意见；[心理]智力；记忆力；介意；专心于；照料；介意；注意",
    "example": "It is impossible to understand the complex nature of the human mind .",
    "exampleCn": "要想了解人类思维复杂的特性是不可能的。"
   },
   {
    "word": "justify",
    "phonetic": "'dʒʌstə'fai",
    "pos": "v.",
    "meaning": "证明是正当的或有理的，为辩护",
    "example": "Ministers must appear before Parliament and justify their actions.",
    "exampleCn": "大臣们必须就自己的行为向议会作出解释。"
   },
   {
    "word": "transfer",
    "phonetic": "træns'fɝ",
    "pos": "n.",
    "meaning": "转让；[计]转移；传递；过户；转让；[计]转移；转学；换车；转让；[计]使转移；传递；调任",
    "example": "Ideas that work well in one school often don’t transfer well to another.",
    "exampleCn": "在一所学校行得通的理念套用在另一所学校上往往行不通。"
   },
   {
    "word": "physique",
    "phonetic": "fɪ'zik",
    "pos": "n.",
    "meaning": "体格，体形",
    "example": "She didn’t have the physique to be a dancer.",
    "exampleCn": "她没有当舞蹈演员的体形。"
   },
   {
    "word": "technician",
    "phonetic": "tɛk'nɪʃən",
    "pos": "n.",
    "meaning": "[劳经]技师，技术员；技巧纯熟的人",
    "example": "a laboratory technician",
    "exampleCn": "实验室技术人员"
   },
   {
    "word": "protein",
    "phonetic": "'protin",
    "pos": "n.",
    "meaning": "[生化]蛋白质；朊；[生化]蛋白质的",
    "example": "Where do you get your protein?",
    "exampleCn": "你从哪里获得蛋白质？"
   },
   {
    "word": "ambiguous",
    "phonetic": "æm'bɪɡjuəs",
    "pos": "adj.",
    "meaning": "模糊不清的；[数]引起歧义的",
    "example": "The language in the Minister’s statement is highly ambiguous.",
    "exampleCn": "部长的声明措辞很含糊。"
   },
   {
    "word": "fascinate",
    "phonetic": "'fæsə'net",
    "pos": "vt",
    "meaning": "使着迷，使神魂颠倒；入迷",
    "example": "The idea of travelling through time fascinates me.",
    "exampleCn": "穿越时光的想法深深吸引着我。"
   },
   {
    "word": "gradual",
    "phonetic": "'ɡrædʒuəl",
    "pos": "adj.",
    "meaning": "逐渐的；平缓的",
    "example": "There has been a gradual change in climate.",
    "exampleCn": "气候渐渐发生了变化。"
   },
   {
    "word": "recruit",
    "phonetic": "rɪ'krut",
    "pos": "n.",
    "meaning": "招聘；新兵；新成员；补充；聘用；征募；使…恢复健康；复原；征募新兵；得到补充；恢复健康",
    "example": "We’re having difficulty recruiting enough qualified staff.",
    "exampleCn": "我们难以招聘到足够的合格职员。"
   },
   {
    "word": "convey",
    "phonetic": "kən've",
    "pos": "vt",
    "meaning": "传达；运输；让与",
    "example": "All this information can be conveyed in a simple diagram.",
    "exampleCn": "所有这些信息可以通过一张简单的图表来表示。"
   },
   {
    "word": "obligation",
    "phonetic": ",ɑblɪ'ɡeʃən",
    "pos": "n.",
    "meaning": "[法]义务；职责；债务",
    "example": "Employers have an obligation to treat all employees equally.",
    "exampleCn": "雇主有责任对所有员工一视同仁。"
   },
   {
    "word": "testimony",
    "phonetic": "'tɛstə'moni",
    "pos": "n.",
    "meaning": "[法]证词，证言；证据",
    "example": "Barker’s testimony is crucial to the prosecution’s case.",
    "exampleCn": "巴克的证词对控方的指控起到了关键作用。"
   },
   {
    "word": "fragment",
    "phonetic": "'fræɡmənt",
    "pos": "n.",
    "meaning": "碎片；片断或不完整部分",
    "example": "glass fragments",
    "exampleCn": "玻璃碎片"
   },
   {
    "word": "moderate",
    "phonetic": "ˈmɑdərɪt; (for v.,) ˈmɑdərˌeɪt",
    "pos": "adj.",
    "meaning": "稳健的，温和的；适度的，中等的；有节制的；变缓和，变弱；节制；减轻",
    "example": "Even moderate amounts of alcohol can be dangerous.",
    "exampleCn": "喝酒即使不多也会有危险。"
   },
   {
    "word": "endeavor",
    "phonetic": "ɪn'dɛvɚ",
    "pos": "n.",
    "meaning": "努力；尽力（等于endeavour）；努力；尽力（等于endeavour）；努力；尽力（等于endeavour）",
    "example": "She improved visibly from day to day, until Martin wondered if he was doing right, for he knew that all her compliance and endeavor was for his sake.",
    "exampleCn": "她一天比一天进步了，直到马丁怀疑起自己的做法是否得体。 因为他明白她的这一切迁就和努力都是为了他。"
   },
   {
    "word": "sort",
    "phonetic": "sɔrt",
    "pos": "n.",
    "meaning": "种类；方式；品质；[计]分类；协调；交往；将…分类；将…排序；挑选出某物",
    "example": "Most of the victims developed psychological problems of one sort or another (= of various different types ) .",
    "exampleCn": "大多数受害者都出现了这样那样的心理问题。"
   },
   {
    "word": "conceal",
    "phonetic": "kən'sil",
    "pos": "vt",
    "meaning": "隐藏；隐瞒",
    "example": "The shadows concealed her as she crept up to the house.",
    "exampleCn": "她借着阴影蹑手蹑脚地走向房子。"
   },
   {
    "word": "mandate",
    "phonetic": "'mændet",
    "pos": "n.",
    "meaning": "授权；[法]命令，指令；委托管理；受命进行的工作；授权；托管",
    "example": "Matters debated in meetings do not become a mandate automatically.",
    "exampleCn": "会议上讨论的事宜并不能自动成为一项指令。"
   },
   {
    "word": "crumple",
    "phonetic": "'krʌmpl",
    "pos": "vt",
    "meaning": "弄皱；使一蹶不振；起皱；倒坍；一蹶不振；皱纹；褶皱",
    "example": "She crumpled the paper in her hand.",
    "exampleCn": "她把手中的纸揉成了一团。"
   },
   {
    "word": "arch",
    "phonetic": "ɑrtʃ",
    "pos": "n.",
    "meaning": "弓形，拱形；拱门；主要的；拱起；成为弓形",
    "example": "When she passed under the arch leading out of the park, Mira whooped with delight.",
    "exampleCn": "从通向公园外的拱门下走过时，米拉高兴地喊叫起来。"
   },
   {
    "word": "supervise",
    "phonetic": "'sʊpɚ'vaɪz",
    "pos": "vt",
    "meaning": "监督，管理；指导；监督，管理；指导",
    "example": "Griffiths closely supervised the research.",
    "exampleCn": "格里菲思密切指导该项研究。"
   },
   {
    "word": "territory",
    "phonetic": "'tɛrətɔri",
    "pos": "n.",
    "meaning": "领土，领域；范围；地域；[地理]版图",
    "example": "Hong Kong is a Chinese territory.",
    "exampleCn": "香港是中国的领土。"
   },
   {
    "word": "swift",
    "phonetic": "swɪft",
    "pos": "adj.",
    "meaning": "快的；迅速的；敏捷的；立刻的；迅速地",
    "example": "My letter received a swift reply.",
    "exampleCn": "我的信很快就得到了回复。"
   },
   {
    "word": "robust",
    "phonetic": "ro'bʌst",
    "pos": "adj.",
    "meaning": "强健的；健康的；[生物]粗野的；粗鲁的",
    "example": "a robust man of six feet four",
    "exampleCn": "一个身高六英尺四英寸的壮汉"
   },
   {
    "word": "unravel",
    "phonetic": "ʌn'rævl",
    "pos": "vt",
    "meaning": "解开；阐明；解决；拆散；解决；散开",
    "example": "Detectives are still trying to unravel the mystery surrounding his death.",
    "exampleCn": "侦探们仍在试图解开他的死亡之谜。"
   },
   {
    "word": "responsive",
    "phonetic": "rɪ'spɑnsɪv",
    "pos": "adj.",
    "meaning": "响应的；应答的；回答的",
    "example": "With an election coming soon, your representative should be very responsive to your request.",
    "exampleCn": "大选在即，你们的代表应该对你们的要求作出迅速积极的反应。"
   },
   {
    "word": "weld",
    "phonetic": "wɛld",
    "pos": "vt",
    "meaning": "[机]焊接；使结合；使成整体；[机]焊接；焊接点",
    "example": "The new handle will have to be welded on.",
    "exampleCn": "新的把手得焊上去。"
   },
   {
    "word": "accumulate",
    "phonetic": "ə'kjumjəlet",
    "pos": "vi",
    "meaning": "累积；积聚；积攒",
    "example": "What is the moral of this fable? If you want to accumulate enduring wealth, do not lend to grasshoppers.",
    "exampleCn": "这则故事的寓意是什么？如果你希望积累长久的财富，就不要借钱给蚱蜢。"
   },
   {
    "word": "oval",
    "phonetic": "'ovl",
    "pos": "adj.",
    "meaning": "椭圆的；[数]卵形的；椭圆形；[数]卵形",
    "example": "Using 2 spoons, form the cheese into small balls or ovals.",
    "exampleCn": "用两把勺把干酪挤成小圆球状或椭圆球状。"
   },
   {
    "word": "gratitude",
    "phonetic": "'ɡrætɪtud",
    "pos": "adj.",
    "meaning": "感激，感恩",
    "example": "I cherish for you the liveliest feeling of affection and gratitude.",
    "exampleCn": "我对你怀有最强烈的爱和感激之情。"
   },
   {
    "word": "circumference",
    "phonetic": "sɚ'kʌmfərəns",
    "pos": "n.",
    "meaning": "[数]圆周；周长；胸围",
    "example": "...a scientist calculating the Earth's circumference.",
    "exampleCn": "…一位正在计算地球周长的科学家。"
   },
   {
    "word": "congestion",
    "phonetic": "kən'dʒɛstʃən",
    "pos": "n.",
    "meaning": "拥挤；拥塞；[病理]充血",
    "example": "The problems of traffic congestion will not disappear in a hurry.",
    "exampleCn": "交通堵塞问题不会很快消失。"
   },
   {
    "word": "sociology",
    "phonetic": ",sosɪ'ɑlədʒi",
    "pos": "n.",
    "meaning": "社会学；群体生态学",
    "example": "Out with every theory of human behavior, from linguistics to sociology.",
    "exampleCn": "从语言学、社会学的人类行为原理里解脱吧。"
   },
   {
    "word": "pinnacle",
    "phonetic": "'pɪnəkl",
    "pos": "n.",
    "meaning": "高峰；小尖塔；尖峰；极点",
    "example": "the pinnacle of academic achievement",
    "exampleCn": "学术成就的顶峰"
   },
   {
    "word": "prevalent",
    "phonetic": "'prɛvələnt",
    "pos": "adj.",
    "meaning": "流行的；普遍的，广传的",
    "example": "the prevalent belief in astrology",
    "exampleCn": "对占星术的普遍相信"
   },
   {
    "word": "hereditary",
    "phonetic": "hə'rɛdə'tɛri",
    "pos": "adj.",
    "meaning": "[遗]遗传的；世袭的；世代相传的",
    "example": "a hereditary peer",
    "exampleCn": "世袭贵族"
   },
   {
    "word": "speciality",
    "phonetic": ",spɛʃɪ'æləti",
    "pos": "n.",
    "meaning": "专业，专长；特性",
    "example": "...seafood, paella, and other specialities.",
    "exampleCn": "…海鲜、西班牙肉菜饭及其他特色食品。"
   },
   {
    "word": "stock",
    "phonetic": "stɑk",
    "pos": "n.",
    "meaning": "[金融]股份，股票；[贸易]库存；血统；树干；[贸易]存货的，常备的；平凡的；进货；备有；装把手于…；囤积；办货；出新芽",
    "example": "We have a huge stock of quality carpets on sale.",
    "exampleCn": "我们备有大量优质地毯出售。"
   },
   {
    "word": "propose",
    "phonetic": "prə'poz",
    "pos": "vt",
    "meaning": "建议；打算，计划；求婚；建议；求婚；打算",
    "example": "the changes currently proposed by the local planning authorities",
    "exampleCn": "目前由地方规划局提议的改革"
   },
   {
    "word": "epoch",
    "phonetic": "'ɛpək",
    "pos": "n.",
    "meaning": "[地质]世；新纪元；新时代；时间上的一点",
    "example": "the Victorian epoch",
    "exampleCn": "维多利亚时代"
   },
   {
    "word": "mirage",
    "phonetic": "mə'rɑʒ",
    "pos": "n.",
    "meaning": "[气象]海市蜃楼；幻想，妄想",
    "example": "Perhaps we are just chasing a mirage.",
    "exampleCn": "也许我们只是在追逐一个梦。"
   },
   {
    "word": "supplementary",
    "phonetic": ",sʌplɪ'mɛntri",
    "pos": "adj.",
    "meaning": "补充的；追加的；补充者；增补物",
    "example": "supplementary information",
    "exampleCn": "补充信息"
   },
   {
    "word": "chart",
    "phonetic": "tʃɑrt",
    "pos": "n.",
    "meaning": "图表；海图；图纸",
    "example": "a chart showing last year’s sales",
    "exampleCn": "显示去年销售情况的一份图表"
   },
   {
    "word": "unemployment",
    "phonetic": ",ʌnɪm'plɔɪmənt",
    "pos": "n.",
    "meaning": "[劳经]失业；失业率；失业人数",
    "example": "a town where there is high unemployment",
    "exampleCn": "高失业率城镇"
   }
  ]
 },
 {
  "level": "A2",
  "name": "基础",
  "band": "雅思 ≈4.5–5.0",
  "desc": "按词频排列的第 2 段，掌握后即可应付日常与校园常见话题。",
  "words": [
   {
    "word": "fallacy",
    "phonetic": "'fæləsi",
    "pos": "n.",
    "meaning": "谬论，谬误",
    "example": "It’s a common fallacy that a neutered dog will become fat and lazy.",
    "exampleCn": "说阉割过的狗会变得又胖又懒，这是普遍的谬见。"
   },
   {
    "word": "incline",
    "phonetic": "ɪn'klaɪn",
    "pos": "vi",
    "meaning": "倾斜；倾向；易于；使倾斜；使倾向于；倾斜；斜面；斜坡",
    "example": "The telescope is inclined at an angle of 43 degrees.",
    "exampleCn": "这架望远镜以43度角倾斜。"
   },
   {
    "word": "prohibit",
    "phonetic": "prə'hɪbɪt",
    "pos": "vt",
    "meaning": "阻止，禁止",
    "example": "Smoking is strictly prohibited inside the factory.",
    "exampleCn": "厂区严禁吸烟。"
   },
   {
    "word": "zoology",
    "phonetic": "zəu'ɔlədʒi, zu:-",
    "pos": "n.",
    "meaning": "[动]动物学；动物区系",
    "example": "The scholarship money she won helped her attend Cornell University, where she majored in zoology.",
    "exampleCn": "她赢得的奖学金帮助她上康奈尔大学，在那里他主修动物学。"
   },
   {
    "word": "elicit",
    "phonetic": "ɪ'lɪsɪt",
    "pos": "vt",
    "meaning": "抽出，引出；引起",
    "example": "When her knock elicited no response, she opened the door and peeped in.",
    "exampleCn": "敲门没有回应，她便推开门往里张望。"
   },
   {
    "word": "numerical",
    "phonetic": "nʊ'mɛrɪkl",
    "pos": "adj.",
    "meaning": "[数]数值的；数字的；用数字表示的（等于numeric）",
    "example": "a numerical code",
    "exampleCn": "数字密码"
   },
   {
    "word": "solvent",
    "phonetic": "'sɑlvənt",
    "pos": "adj.",
    "meaning": "有偿付能力的；[化学]有溶解力的；[化学]溶剂；解决方法",
    "example": "They're going to have to show that the company is now solvent.",
    "exampleCn": "他们将不得不证明公司现在是具备偿债能力的。"
   },
   {
    "word": "correspondence",
    "phonetic": ",kɔrə'spɑndəns",
    "pos": "n.",
    "meaning": "通信；一致；相当",
    "example": "The magazine is unable to enter into any correspondence on medical matters.",
    "exampleCn": "本杂志无法答复有关医学方面的来信。"
   },
   {
    "word": "epidemic",
    "phonetic": ",ɛpɪ'dɛmɪk",
    "pos": "adj.",
    "meaning": "[医]流行的；传染性的；传染病；流行病；风尚等的流行",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "disrupt",
    "phonetic": "dɪs'rʌpt",
    "pos": "vt",
    "meaning": "破坏；使瓦解；使分裂；使中断；使陷于混乱；分裂的，中断的；分散的",
    "example": "Traffic was disrupted by a hoax bomb.",
    "exampleCn": "有人虚报有炸弹，造成了交通混乱。"
   },
   {
    "word": "humiliate",
    "phonetic": "hju'mɪlɪet",
    "pos": "vt",
    "meaning": "羞辱；使…丢脸；耻辱",
    "example": "Her boss humiliated her in front of all her colleagues.",
    "exampleCn": "她的老板在所有同事面前羞辱了她。"
   },
   {
    "word": "medium",
    "phonetic": "'midɪəm",
    "pos": "adj.",
    "meaning": "中间的，中等的；半生熟的；方法；媒体；媒介；中间物",
    "example": "Advertising is a powerful medium.",
    "exampleCn": "广告是具有强大影响力的传播媒介。"
   },
   {
    "word": "ripple",
    "phonetic": "'rɪpl",
    "pos": "n.",
    "meaning": "波纹；涟漪；[物]涟波",
    "example": "ripples on the surface of the pond",
    "exampleCn": "池面上的涟漪"
   },
   {
    "word": "curse",
    "phonetic": "kɝs",
    "pos": "n.",
    "meaning": "诅咒；咒骂；诅咒；咒骂；诅咒；咒骂",
    "example": "He muttered a curse under his breath.",
    "exampleCn": "他低声骂了一句。"
   },
   {
    "word": "scandal",
    "phonetic": "'skændl",
    "pos": "n.",
    "meaning": "丑闻；流言蜚语；诽谤；公愤",
    "example": "He loved gossip and scandal.",
    "exampleCn": "他喜欢闲话和流言蜚语。"
   },
   {
    "word": "counsel",
    "phonetic": "'kaʊnsl",
    "pos": "n.",
    "meaning": "法律顾问；忠告；商议；讨论；决策；建议；劝告",
    "example": "He had always been able to count on her wise counsel.",
    "exampleCn": "他总是能够指望她明智的忠告。"
   },
   {
    "word": "stagger",
    "phonetic": "'stægɚ",
    "pos": "vt",
    "meaning": "蹒跚；使交错；使犹豫；蹒跚；犹豫；蹒跚；交错安排；交错的；错开的",
    "example": "He managed to stagger home.",
    "exampleCn": "他好不容易才蹒跚着走回家。"
   },
   {
    "word": "capsule",
    "phonetic": "ˈkæpsul",
    "pos": "n.",
    "meaning": "[药]胶囊；[植]蒴果；太空舱；小容器；压缩的；概要的；压缩；简述",
    "example": "a space capsule orbiting the Earth",
    "exampleCn": "沿地球轨道飞行的太空舱"
   },
   {
    "word": "imperative",
    "phonetic": "ɪm'pɛrətɪv",
    "pos": "adj.",
    "meaning": "必要的，势在必行的；命令的；紧急的；需要；命令；祈使语气；规则",
    "example": "It is imperative that politicians should be good communicators.",
    "exampleCn": "政治家应该是很好的沟通者，这很重要。"
   },
   {
    "word": "recipe",
    "phonetic": "'rɛsəpi",
    "pos": "n.",
    "meaning": "食谱；[临床]处方；秘诀",
    "example": "a recipe book",
    "exampleCn": "一本烹饪书"
   },
   {
    "word": "drift",
    "phonetic": "drɪft",
    "pos": "n.",
    "meaning": "漂流，[电子]漂移；趋势；漂流物；漂流，[电子]漂移；漂泊",
    "example": "Smoke drifted up from the jungle ahead of us.",
    "exampleCn": "我们前方的丛林里有烟升起。"
   },
   {
    "word": "hum",
    "phonetic": "hʌm",
    "pos": "n.",
    "meaning": "嗡嗡声；哼声；杂声；哼；嗯",
    "example": "Machines hummed on the factory floor.",
    "exampleCn": "机器在车间里嗡嗡作响。"
   },
   {
    "word": "generic",
    "phonetic": "dʒə'nɛrɪk",
    "pos": "adj.",
    "meaning": "类的；一般的；属的；非商标的",
    "example": "Parmesan is a generic term used to describe a family of hard Italian cheeses.",
    "exampleCn": "巴尔马干酪是一个用来描述一类坚硬的意大利奶酪的通用名称。"
   },
   {
    "word": "referendum",
    "phonetic": ",rɛfə'rɛndəm",
    "pos": "n.",
    "meaning": "公民投票、复决权",
    "example": "The city council agreed to hold a referendum on the issue in November.",
    "exampleCn": "市政会同意在11月就此问题进行全民投票。"
   },
   {
    "word": "fluid",
    "phonetic": "'fluɪd",
    "pos": "adj.",
    "meaning": "流动的；流畅的；不固定的；[流]流体；[物]液体",
    "example": "He is not allowed solid food yet, only fluids.",
    "exampleCn": "他还不能吃固体食物，只能进流食。"
   },
   {
    "word": "authentic",
    "phonetic": "ɔ'θɛntɪk",
    "pos": "adj.",
    "meaning": "真正的，真实的；可信的",
    "example": "an authentic work by Picasso",
    "exampleCn": "毕加索的真迹"
   },
   {
    "word": "swamp",
    "phonetic": "swɑmp",
    "pos": "n.",
    "meaning": "[地理]沼泽；湿地；使陷于沼泽；使沉没；使陷入困境；下沉；陷入沼泽；陷入困境；不知所措（过去式swamped，过去分词swamped，现在分词swamping，第三人称单数swamps，名词swampiness，形容词swampy）",
    "example": "I spent one whole night by a swamp behind the road listening to frogs.",
    "exampleCn": "我整个晚上都在这条路后面的一个沼泽地旁听蛙鸣。"
   },
   {
    "word": "shrug",
    "phonetic": "ʃrʌɡ",
    "pos": "vt",
    "meaning": "耸肩，耸肩表示",
    "example": "I just shrugged my shoulders and ignored him.",
    "exampleCn": "我只是耸耸肩，没有理睬他。"
   },
   {
    "word": "flush",
    "phonetic": "flʌʃ",
    "pos": "n.",
    "meaning": "激动，洋溢；面红；萌芽；旺盛；奔流；使齐平；发红，使发亮；用水冲洗；使激动；发红，脸红；奔涌；被冲洗；大量的；齐平的；丰足的，洋溢的；挥霍的",
    "example": "She felt a sudden flush of anger.",
    "exampleCn": "她突然感到一阵愤怒。"
   },
   {
    "word": "repatriate",
    "phonetic": ",ri'petrɪet",
    "pos": "v.",
    "meaning": "遣返；返回",
    "example": "After the war, prisoners were repatriated.",
    "exampleCn": "战后，战俘被遣返。"
   },
   {
    "word": "parachute",
    "phonetic": "'pærə'ʃʊt",
    "pos": "n.",
    "meaning": "[航]降落伞；跳伞",
    "example": "a parachute jump",
    "exampleCn": "跳伞"
   },
   {
    "word": "dam",
    "phonetic": "dæm",
    "pos": "v.",
    "meaning": "控制；筑坝；[水利]水坝；障碍",
    "example": "Once she allowed her anger to show, it could not be dammed up again.",
    "exampleCn": "她一旦发起脾气来就不可收拾。"
   },
   {
    "word": "warden",
    "phonetic": "'wɔrdn",
    "pos": "n.",
    "meaning": "区长；看守人；典狱官；学监",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "pursuit",
    "phonetic": "pɚ'sut",
    "pos": "n.",
    "meaning": "追赶，追求；职业，工作",
    "example": "The quarterback sprinted toward the end zone with Jansen in hot pursuit (= following closely behind ) .",
    "exampleCn": "那名四分卫快速冲向底线区，詹森穷追不舍。"
   },
   {
    "word": "catch",
    "phonetic": "kætʃ",
    "pos": "vt",
    "meaning": "赶上；抓住；感染；了解；赶上；抓住；捕捉；捕获物；窗钩",
    "example": "He was caught red-handed (= as he was doing something wrong ) taking money from the cash register.",
    "exampleCn": "他从现金出纳机偷钱时被当场抓住。"
   },
   {
    "word": "plot",
    "phonetic": "plɑt",
    "pos": "n.",
    "meaning": "情节；图；阴谋；密谋；[测]绘图；划分；标绘；密谋；策划；绘制",
    "example": "The plot was a little confusing.",
    "exampleCn": "情节有些费解。"
   },
   {
    "word": "reverse",
    "phonetic": "rɪ'vɝs",
    "pos": "n.",
    "meaning": "相反；背面；倒退；失败；颠倒；倒转；反面的；颠倒的；倒退；逆叫",
    "example": "I owe you nothing. If anything, the reverse is true (= you owe me ) .",
    "exampleCn": "我不欠你什么。 如果说欠的话，是你欠我才对。"
   },
   {
    "word": "purity",
    "phonetic": "'pjʊrəti",
    "pos": "n.",
    "meaning": "[化学]纯度；纯洁；纯净；纯粹",
    "example": "the purity of tap water",
    "exampleCn": "自来水的纯净度"
   },
   {
    "word": "statistics",
    "phonetic": "stə'tɪstɪks",
    "pos": "n.",
    "meaning": "[统计]统计；统计学；统计资料",
    "example": "statistics for earnings by different age groups",
    "exampleCn": ""
   },
   {
    "word": "tenable",
    "phonetic": "'tenəb(ə)l",
    "pos": "adj.",
    "meaning": "（主张等）站得住脚的；可维持的",
    "example": "an idea which is no longer tenable",
    "exampleCn": "不再成立的观点"
   },
   {
    "word": "tangible",
    "phonetic": "'tændʒəbl",
    "pos": "adj.",
    "meaning": "有形的；切实的；可触摸的；有形资产",
    "example": "The scheme must have tangible benefits for the unemployed.",
    "exampleCn": "这个计划一定要对失业者有实实在在的好处。"
   },
   {
    "word": "dismiss",
    "phonetic": "dɪs'mɪs",
    "pos": "vt",
    "meaning": "解散；解雇；开除；让...离开；解散",
    "example": "The government has dismissed criticisms that the country’s health policy is a mess.",
    "exampleCn": "有人认为国家医疗政策一塌糊涂，政府对这种批评持否认态度。"
   },
   {
    "word": "invoice",
    "phonetic": "'ɪnvɔɪs",
    "pos": "n.",
    "meaning": "[会计]发票；货物；发货单",
    "example": "The agency invoices the client who then pays the full amount to the agency.",
    "exampleCn": "那个代销处给客户开具发票，然后客户向代销处支付全部的款项。"
   },
   {
    "word": "nutrition",
    "phonetic": "nu'trɪʃən",
    "pos": "n.",
    "meaning": "[生物]营养，营养学；营养品",
    "example": "Nutrition and exercise are essential to fitness and health.",
    "exampleCn": "营养和运动是保持健康所必不可少的。"
   },
   {
    "word": "gaunt",
    "phonetic": "ɡɔ:nt",
    "pos": "adj.",
    "meaning": "憔悴的；荒凉的；枯瘦的",
    "example": "the old man’s gaunt face",
    "exampleCn": "老人那瘦削的脸庞"
   },
   {
    "word": "defendant",
    "phonetic": "dɪ'fɛndənt",
    "pos": "adj.",
    "meaning": "辩护的；为自己辩护的；[法]被告",
    "example": "We find the defendant not guilty.",
    "exampleCn": "我们裁定被告无罪。"
   },
   {
    "word": "fluctuate",
    "phonetic": "'flʌktʃʊ'et",
    "pos": "vi",
    "meaning": "波动；涨落；动摇；使波动；使动摇",
    "example": "Insect populations fluctuate wildly from year to year.",
    "exampleCn": "昆虫的数量每年变化很大。"
   },
   {
    "word": "enhance",
    "phonetic": "ɪn'hæns",
    "pos": "vt",
    "meaning": "提高；加强；增加",
    "example": "Good lighting will enhance any room.",
    "exampleCn": "良好的照明能给房间增色不少。"
   },
   {
    "word": "terrific",
    "phonetic": "tə'rɪfɪk",
    "pos": "adj.",
    "meaning": "极好的；极其的，非常的；可怕的",
    "example": "That’s a terrific idea!",
    "exampleCn": "这个主意真棒！"
   },
   {
    "word": "display",
    "phonetic": "dɪ'sple",
    "pos": "n.",
    "meaning": "[电子]显示；炫耀；[电子]显示；表现；陈列",
    "example": "a dazzling display (= very good display ) of flowers",
    "exampleCn": "令人目眩神迷的花卉展"
   },
   {
    "word": "symphony",
    "phonetic": "'sɪmfəni",
    "pos": "n.",
    "meaning": "交响乐；谐声，和声",
    "example": "Bruckner’s Fifth Symphony",
    "exampleCn": "布鲁克纳的《第五交响曲》"
   },
   {
    "word": "tonic",
    "phonetic": "'tɑnɪk",
    "pos": "n.",
    "meaning": "[药]补药；主调音或基音；滋补的；声调的；使精神振作的",
    "example": "A lot of people need a tonic at the end of the winter.",
    "exampleCn": "很多人冬末需要进补。"
   },
   {
    "word": "tissue",
    "phonetic": "'tɪʃu",
    "pos": "n.",
    "meaning": "纸巾；[纺]薄纱；一套",
    "example": "a box of tissues",
    "exampleCn": "一盒面巾纸"
   },
   {
    "word": "tuition",
    "phonetic": "tʊ'ɪʃən",
    "pos": "n.",
    "meaning": "学费；讲授",
    "example": "I had to have extra tuition in maths.",
    "exampleCn": "我不得不上数学补习课。"
   },
   {
    "word": "journal",
    "phonetic": "'dʒɝnl",
    "pos": "n.",
    "meaning": "日报，[图情]杂志；日记；分类账",
    "example": "the British Medical Journal",
    "exampleCn": "《英国医学杂志》"
   },
   {
    "word": "kernel",
    "phonetic": "'kɝnl",
    "pos": "n.",
    "meaning": "核心，要点；[计]内核；[植]仁；[粮食]麦粒，谷粒；精髓",
    "example": "The kernel of that message was that peace must not be a source of advantage or disadvantage for anyone.",
    "exampleCn": "那一信息的核心是和平绝不应该成为对任何人有利或不利的根源。"
   },
   {
    "word": "thumb",
    "phonetic": "θʌm",
    "pos": "vt",
    "meaning": "翻阅；以拇指拨弄；作搭车手势；笨拙地摆弄",
    "example": "a baby sucking its thumb",
    "exampleCn": "吮着大拇指的婴儿"
   },
   {
    "word": "prospectus",
    "phonetic": "prə'spɛktəs",
    "pos": "n.",
    "meaning": "内容说明书；样张；创办计划书",
    "example": "...a prospectus for a new issue of stock.",
    "exampleCn": "…新发行股票的招股说明书。"
   },
   {
    "word": "diagnose",
    "phonetic": ",daɪəɡ'nos",
    "pos": "vt",
    "meaning": "诊断；断定；诊断；判断",
    "example": "How did they diagnose you?",
    "exampleCn": "他们怎么给你的诊断的？"
   },
   {
    "word": "extra",
    "phonetic": "'ɛkstrə",
    "pos": "adv.",
    "meaning": "特别地，非常；另外；临时演员；号外；额外的事物；上等产品；额外的，[经]另外收费的；特大的",
    "example": "There are no hidden extras.",
    "exampleCn": "没有任何隐蔽的额外费用。"
   },
   {
    "word": "dwindle",
    "phonetic": "'dwɪndl",
    "pos": "vi",
    "meaning": "减少；变小；使缩小，使减少",
    "example": "The elephant population is dwindling.",
    "exampleCn": "大象的数量在减少。"
   },
   {
    "word": "patch",
    "phonetic": "pætʃ",
    "pos": "n.",
    "meaning": "眼罩；斑点；碎片；小块土地；修补；解决；掩饰",
    "example": "Look out for icy patches on the road.",
    "exampleCn": "小心路上结冰的地方。"
   },
   {
    "word": "sketch",
    "phonetic": "skɛtʃ",
    "pos": "n.",
    "meaning": "素描；略图；梗概",
    "example": "So if we just sketch that.",
    "exampleCn": "那么如果我们把那画个草图。"
   },
   {
    "word": "mean",
    "phonetic": "min",
    "pos": "adj.",
    "meaning": "[数]平均的；卑鄙的；低劣的；意味；想要；意欲；[数]平均值",
    "example": "He’s too mean to buy a present for his wife.",
    "exampleCn": "他很吝啬，给他妻子买件礼物都不肯。"
   },
   {
    "word": "trace",
    "phonetic": "tres",
    "pos": "vi",
    "meaning": "[审计]追溯；沿路走；追踪，查探；描绘；回溯；[法]痕迹，踪迹；[气象]微量；[仪]迹线；缰绳",
    "example": "There was no trace of anyone having entered the room since then.",
    "exampleCn": "没有任何迹象表明在那以后有人进过这房间。"
   },
   {
    "word": "defence",
    "phonetic": "di'fens",
    "pos": "n.",
    "meaning": "[军]防御；防卫；答辩；防卫设备",
    "example": "The land was flat, giving no scope for defence.",
    "exampleCn": "土地非常平坦，无法做防卫之用。"
   },
   {
    "word": "expulsion",
    "phonetic": "ɪk'spʌlʃən",
    "pos": "n.",
    "meaning": "驱逐；开除",
    "example": "The headmaster threatened the boys with expulsion.",
    "exampleCn": "校长警告这几名男生说要开除他们。"
   },
   {
    "word": "potential",
    "phonetic": "pə'tɛnʃl",
    "pos": "n.",
    "meaning": "潜能；可能性；[电]电势；潜在的；可能的；势的",
    "example": "The company has identified 60 potential customers.",
    "exampleCn": "该公司已确定了60位潜在的客户。"
   },
   {
    "word": "passport",
    "phonetic": "'pæspɔrt",
    "pos": "n.",
    "meaning": "[法]护照，通行证；手段",
    "example": "I have an Irish passport.",
    "exampleCn": "我持爱尔兰护照。"
   },
   {
    "word": "craft",
    "phonetic": "kræft",
    "pos": "n.",
    "meaning": "工艺；手艺；太空船",
    "example": "traditional rural crafts",
    "exampleCn": "传统的乡村手工艺"
   },
   {
    "word": "gleam",
    "phonetic": "ɡlim",
    "pos": "n.",
    "meaning": "微光；闪光；瞬息的一现；闪烁；隐约地闪现；使闪烁；使发微光",
    "example": "His teeth gleamed under his moustache.",
    "exampleCn": "他的八字须下面，牙齿晶莹发亮。"
   },
   {
    "word": "overflow",
    "phonetic": ",ovɚ'flo",
    "pos": "vi",
    "meaning": "[计]溢出；泛滥；充溢；充满，洋溢；泛滥；超值；溢值；[计]使溢出；使泛滥；使充溢",
    "example": "The drains flooded and water overflowed down the main street.",
    "exampleCn": "下水道被淹，水溢到了大街上。"
   },
   {
    "word": "solemn",
    "phonetic": "'sɑləm",
    "pos": "adj.",
    "meaning": "庄严的，严肃的；隆重的，郑重的",
    "example": "a solemn expression",
    "exampleCn": "严肃的表情"
   },
   {
    "word": "vegetation",
    "phonetic": "'vɛdʒə'teʃən",
    "pos": "n.",
    "meaning": "植被；植物，[植]草木；呆板单调的生活",
    "example": "Lefkas has an abundance of lush green vegetation.",
    "exampleCn": "莱夫卡斯有葱郁茂盛的植被。"
   },
   {
    "word": "pliable",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "易弯的，柔韧的；易受影响的",
    "example": "a shoe made of soft pliable leather",
    "exampleCn": "柔韧的皮革做成的鞋子"
   },
   {
    "word": "apprehension",
    "phonetic": ",æprɪ'hɛnʃən",
    "pos": "n.",
    "meaning": "理解；恐惧；[法]逮捕；忧惧",
    "example": "a feeling of apprehension",
    "exampleCn": "担忧的心情"
   },
   {
    "word": "rave",
    "phonetic": "rev",
    "pos": "n.",
    "meaning": "咆哮；胡言乱语；热烈赞美；咆哮；胡言乱语；狂骂；咆哮；语无伦次地说",
    "example": "He was still ranting and raving the next morning.",
    "exampleCn": "第二天上午他仍在大叫大嚷。"
   },
   {
    "word": "locomotive",
    "phonetic": ",lokə'motɪv",
    "pos": "adj.",
    "meaning": "[铁路]火车头的；运动的；移动的；机车；[铁路]火车头",
    "example": "an increase in locomotive power",
    "exampleCn": "运动力的增加"
   },
   {
    "word": "entrepreneur",
    "phonetic": "ˌɑntrəprəˈnɝ​",
    "pos": "n.",
    "meaning": "企业家；承包人；主办者",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "doubtful",
    "phonetic": "'daʊtfəl",
    "pos": "adj.",
    "meaning": "可疑的；令人生疑的；疑心的；不能确定的",
    "example": "‘Everything’s going to be all right, you’ll see.’ Jenny looked doubtful .",
    "exampleCn": "“一切都会顺顺当当的，你等着看好了。” 珍妮看起来不大相信的样子。"
   },
   {
    "word": "morbid",
    "phonetic": "'mɔrbɪd",
    "pos": "adj.",
    "meaning": "病态的；由病引起的；恐怖的；病变部位的",
    "example": "The trip was made all the worse by Frankie’s morbid fear of flying.",
    "exampleCn": "弗朗基对坐飞机有种病态的恐惧，使得旅途变得更加糟糕。"
   },
   {
    "word": "violent",
    "phonetic": "'vaɪələnt",
    "pos": "adj.",
    "meaning": "暴力的；猛烈的",
    "example": "the increase in violent crime",
    "exampleCn": "暴力犯罪的增多"
   },
   {
    "word": "exemplify",
    "phonetic": "ɪɡ'zɛmplɪfaɪ",
    "pos": "vt",
    "meaning": "例证；例示",
    "example": "Problems are exemplified in the report.",
    "exampleCn": "问题都在报告中作了举例说明。"
   },
   {
    "word": "cease",
    "phonetic": "sis",
    "pos": "vi",
    "meaning": "停止；终了；停止；结束；停止",
    "example": "The things people will do for charity never cease to amaze me (= I am always surprised by them ) .",
    "exampleCn": "人们的慈善义举总是让我感到惊讶。"
   },
   {
    "word": "rotate",
    "phonetic": "'rotet",
    "pos": "vi",
    "meaning": "旋转；循环；使旋转；使转动；使轮流",
    "example": "The Earth rotates on its axis once every 24 hours.",
    "exampleCn": "地球每24小时绕地轴自转一周。"
   },
   {
    "word": "solution",
    "phonetic": "sə'luʃən",
    "pos": "n.",
    "meaning": "解决方案；溶液；[化学]溶解；解答",
    "example": "The best solution would be for them to separate.",
    "exampleCn": "最好的解决方法是他们分开。"
   },
   {
    "word": "identify",
    "phonetic": "aɪ'dɛntɪfaɪ",
    "pos": "vt",
    "meaning": "确定；[计]识别；使参与；把…看成一样；确定；认同；一致",
    "example": "He was too far away to be able to identify faces.",
    "exampleCn": "他离得太远，没法看面孔认出谁是谁。"
   },
   {
    "word": "paramount",
    "phonetic": "'pærəmaʊnt",
    "pos": "adj.",
    "meaning": "最重要的，主要的；至高无上的；最高统治者",
    "example": "During a war the interests of the state are paramount, and those of the individual come last.",
    "exampleCn": "战争时期国家利益是首要的，个人利益置于最后。"
   },
   {
    "word": "combine",
    "phonetic": "kəm'baɪn",
    "pos": "vt",
    "meaning": "使化合；使联合，使结合；联合，结合；化合；[农机]联合收割机；联合企业",
    "example": "Diets are most effective when combined with exercise.",
    "exampleCn": "节食和锻炼相结合是最有效的。"
   },
   {
    "word": "avalanche",
    "phonetic": "'ævəlæntʃ",
    "pos": "n.",
    "meaning": "[水文][地理]雪崩；崩塌",
    "example": "Two skiers were killed in the avalanche.",
    "exampleCn": "两名滑雪者在雪崩中丧生。"
   },
   {
    "word": "apparatus",
    "phonetic": "ˌæpəˈrætəs",
    "pos": "n.",
    "meaning": "装置，[机]设备；[仪]仪器；器官",
    "example": "Astronauts have special breathing apparatus.",
    "exampleCn": "航天员有专门的呼吸装装备。"
   },
   {
    "word": "ditch",
    "phonetic": "dɪtʃ",
    "pos": "vt",
    "meaning": "在…上掘沟；把…开入沟里；丢弃；开沟；掘沟；沟渠；壕沟",
    "example": "Both vehicles ended up in a ditch.",
    "exampleCn": "两辆车都掉进了沟里。"
   },
   {
    "word": "range",
    "phonetic": "rendʒ",
    "pos": "n.",
    "meaning": "范围；幅度；排；[地理]山脉；平行，列为一行；延伸；漫游；射程达到；漫游；放牧；使并列；归类于；来回走动",
    "example": "In the dining room, team photographs were ranged along the wall.",
    "exampleCn": "餐厅里，球队的照片排列在墙上。"
   },
   {
    "word": "colossal",
    "phonetic": "kə'lɑsl",
    "pos": "adj.",
    "meaning": "巨大的；异常的，非常的",
    "example": "a colossal statue of the King",
    "exampleCn": "国王的巨大雕像"
   },
   {
    "word": "slim",
    "phonetic": "slɪm",
    "pos": "adj.",
    "meaning": "苗条的；修长的；无价值的；减轻体重；变细",
    "example": "a slim young woman",
    "exampleCn": "身材苗条的年轻女子"
   },
   {
    "word": "pavement",
    "phonetic": "'pevmənt",
    "pos": "n.",
    "meaning": "人行道",
    "example": "A small group of journalists waited on the pavement outside her house.",
    "exampleCn": "有一小群记者守候在她家外面的人行道上。"
   },
   {
    "word": "random",
    "phonetic": "'rændəm",
    "pos": "adj.",
    "meaning": "[数]随机的；任意的；[建]胡乱的；随意；胡乱地",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "disturb",
    "phonetic": "dɪ'stɝb",
    "pos": "vt",
    "meaning": "打扰；妨碍；使不安；弄乱；使恼怒；打扰；妨碍",
    "example": "Sorry to disturb you, but I have an urgent message.",
    "exampleCn": "对不起打扰一下，我有个紧急消息。"
   },
   {
    "word": "terrify",
    "phonetic": "ˈtɛrəˌfaɪ",
    "pos": "vt",
    "meaning": "恐吓；使恐怖；使害怕",
    "example": "Her husband’s violence terrified her.",
    "exampleCn": "丈夫的暴力行为让她感到害怕。"
   },
   {
    "word": "keep",
    "phonetic": "kip",
    "pos": "vt",
    "meaning": "保持；经营；遵守；饲养；保持；继续不断；保持；生计；生活费",
    "example": "You can keep it. I don’t need it any more.",
    "exampleCn": "你留着吧，我不需要了。"
   },
   {
    "word": "physician",
    "phonetic": "fɪ'zɪʃən",
    "pos": "n.",
    "meaning": "[医]医师；[内科]内科医师",
    "example": "...your family physician.",
    "exampleCn": "…你的家庭医生。"
   },
   {
    "word": "precious",
    "phonetic": "'prɛʃəs",
    "pos": "adj.",
    "meaning": "宝贵的；珍贵的；矫揉造作的",
    "example": "planes delivering precious supplies of medicine and food",
    "exampleCn": "运送药品、食品等宝贵物资的飞机"
   },
   {
    "word": "insane",
    "phonetic": "ɪn'sen",
    "pos": "adj.",
    "meaning": "疯狂的；精神病的；极愚蠢的",
    "example": "That’s an insane risk.",
    "exampleCn": "那是疯狂的冒险之举。"
   },
   {
    "word": "code",
    "phonetic": "",
    "pos": "n.",
    "meaning": "规则；代号；密码；把译成密码",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "entitle",
    "phonetic": "ɪn'taɪtl",
    "pos": "v.",
    "meaning": "给(书)题名；给予权利",
    "example": "...a performance entitled \"United States.\"",
    "exampleCn": "…一场名为“合众国”的演出。"
   },
   {
    "word": "alternative",
    "phonetic": "ɔl'tɝnətɪv",
    "pos": "adj.",
    "meaning": "供选择的；选择性的；交替的",
    "example": "An alternative route is along the Via Unione.",
    "exampleCn": "另一条路线是沿着联合路走。"
   },
   {
    "word": "criterion",
    "phonetic": "kraɪˈtɪriən",
    "pos": "n.",
    "meaning": "（批评判断的）[标准]标准；准则；规范；准据",
    "example": "the criteria we use to select candidates",
    "exampleCn": "我们挑选候选人的标准"
   },
   {
    "word": "ward",
    "phonetic": "wɔrd",
    "pos": "n.",
    "meaning": "[医]病房；保卫；监视；避开；保卫；守护",
    "example": "the other patients in the ward",
    "exampleCn": "病房里的其他病人"
   },
   {
    "word": "assess",
    "phonetic": "ə'sɛs",
    "pos": "vt",
    "meaning": "评定；估价；对…征税",
    "example": "The test was to assess aptitude rather than academic achievement.",
    "exampleCn": "该测试将评估能力而不是学业成绩。"
   },
   {
    "word": "flesh",
    "phonetic": "flɛʃ",
    "pos": "n.",
    "meaning": "[食品][组织]肉；肉体；长胖",
    "example": "a freshwater fish with firm white flesh",
    "exampleCn": "一种肉色雪白、肉质紧实的淡水鱼"
   },
   {
    "word": "stuntman",
    "phonetic": "",
    "pos": "n.",
    "meaning": "特技人，特技替身演员；表演者",
    "example": "Both Jacky Chan and Jet Li don't like to use stuntman in their films.",
    "exampleCn": "成龙和李连杰在电影中都不爱用替身演员。"
   },
   {
    "word": "via",
    "phonetic": "ˈvaɪə, ˈviə",
    "pos": "prep.",
    "meaning": "取道，通过；经由",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "framework",
    "phonetic": "'fremwɝk",
    "pos": "n.",
    "meaning": "框架，骨架；结构，[建]构架",
    "example": "We have to act within the existing legal framework.",
    "exampleCn": "我们必须在现行的法律框架下行事。"
   },
   {
    "word": "pose",
    "phonetic": "poz",
    "pos": "v.",
    "meaning": "造成，形成；摆姿势；装模作样；提出…讨论；姿势，姿态；装模作样；摆姿势；佯装；矫揉造作",
    "example": "In her book she poses the question ‘How much do we need to be happy?’",
    "exampleCn": "她在书里提出了这样一个问题﹕“我们要拥有多少才能快乐？”"
   },
   {
    "word": "competitive",
    "phonetic": "kəm'pɛtətɪv",
    "pos": "adj.",
    "meaning": "竞争的；比赛的；求胜心切的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "confine",
    "phonetic": "kən'faɪn",
    "pos": "n.",
    "meaning": "界限，边界；限制；禁闭",
    "example": "Vaughan is confined to a wheelchair .",
    "exampleCn": "沃恩离不开轮椅。"
   },
   {
    "word": "natal",
    "phonetic": "'netl",
    "pos": "adj.",
    "meaning": "出生的；诞生的；分娩的；出生地的",
    "example": "Green turtles return to their natal island to breed.",
    "exampleCn": "绿毛龟回到它们出生的岛上繁殖。"
   },
   {
    "word": "flame",
    "phonetic": "flem",
    "pos": "n.",
    "meaning": "[化工]火焰；热情；光辉；焚烧；泛红",
    "example": "Flames poured out of the windows of the building.",
    "exampleCn": "火焰从大楼窗口冒出来。"
   },
   {
    "word": "surmount",
    "phonetic": "sɚ'maʊnt",
    "pos": "vt",
    "meaning": "克服，越过；战胜",
    "example": "He has had to surmount immense physical disabilities.",
    "exampleCn": "他不得不克服严重的身体残疾。"
   },
   {
    "word": "comparable",
    "phonetic": "'kɑmpərəbl",
    "pos": "adj.",
    "meaning": "可比较的",
    "example": "A car of comparable size would cost far more abroad.",
    "exampleCn": "同样大小的汽车在国外要贵得多。"
   },
   {
    "word": "transparent",
    "phonetic": "træns'pærənt",
    "pos": "adj.",
    "meaning": "透明的；显然的；坦率的；易懂的",
    "example": "a transparent plastic container",
    "exampleCn": "透明的塑料容器"
   },
   {
    "word": "lens",
    "phonetic": "lɛnz",
    "pos": "n.",
    "meaning": "[摄]镜头；[光]透镜；[解剖]晶状体",
    "example": "a standard 50mm lens",
    "exampleCn": "50毫米标准镜头"
   },
   {
    "word": "crush",
    "phonetic": "krʌʃ",
    "pos": "vt",
    "meaning": "压碎；弄皱，变形；使…挤入；挤；被压碎；粉碎；迷恋；压榨；拥挤的人群",
    "example": "His leg was crushed in the accident.",
    "exampleCn": "他的腿在事故中被压断。"
   },
   {
    "word": "condemn",
    "phonetic": "kən'dɛm",
    "pos": "vt",
    "meaning": "谴责；判刑，定罪；声讨",
    "example": "Politicians were quick to condemn the bombing.",
    "exampleCn": "政治家们立即对爆炸事件进行了谴责。"
   },
   {
    "word": "precedence",
    "phonetic": "prɪ'sidəns",
    "pos": "n.",
    "meaning": "[计]优先；居先",
    "example": "Guests were seated in order of precedence .",
    "exampleCn": "宾客们按席次就座。"
   },
   {
    "word": "organ",
    "phonetic": "'ɔrɡən",
    "pos": "n.",
    "meaning": "[生物]器官；机构；风琴；管风琴；嗓音",
    "example": "...damage to the muscles and internal organs.",
    "exampleCn": "…对肌肉和内脏的损伤。"
   },
   {
    "word": "staple",
    "phonetic": "'stepl",
    "pos": "n.",
    "meaning": "[贸易]主要产品；[轻]订书钉；主题；主要的，大宗生产的；常用的；纺织纤维的；把…分级；钉住",
    "example": "staples like flour and rice",
    "exampleCn": "面粉和大米等主食"
   },
   {
    "word": "differentiate",
    "phonetic": ",dɪfə'rɛnʃɪet",
    "pos": "vi",
    "meaning": "区分，区别；区分，区别",
    "example": "What differentiates these two periods of history?",
    "exampleCn": "这两个历史时期的差别在哪里？"
   },
   {
    "word": "engage",
    "phonetic": "ɪn'ɡedʒ",
    "pos": "vt",
    "meaning": "吸引，占用；使参加；雇佣；使订婚；预定；从事；答应，保证；交战；啮合",
    "example": "She engaged the clutch and the car moved.",
    "exampleCn": "她踩下离合器，汽车便开动了。"
   },
   {
    "word": "truant",
    "phonetic": "'tru:ənt",
    "pos": "n.",
    "meaning": "旷课者；懒惰的人；旷课的；偷懒的；逃学；偷懒，逃避责任",
    "example": "persistent truants",
    "exampleCn": "老是逃学的学生"
   },
   {
    "word": "embassy",
    "phonetic": "'ɛmbəsi",
    "pos": "n.",
    "meaning": "大使馆；大使馆全体人员",
    "example": "the American Embassy in Paris",
    "exampleCn": "美国驻巴黎大使馆"
   },
   {
    "word": "alienate",
    "phonetic": "'eiljəneit",
    "pos": "vt",
    "meaning": "使疏远，离间；让与",
    "example": "The latest tax proposals will alienate many voters.",
    "exampleCn": "最新的纳税提案将失去远许多选民的支持。"
   },
   {
    "word": "obligatory",
    "phonetic": "ə'blɪɡətɔri",
    "pos": "adj.",
    "meaning": "[法]义务的；必须的；义不容辞的",
    "example": "She offered him the obligatory cup of tea.",
    "exampleCn": "她照例给他端来一杯茶。"
   },
   {
    "word": "predominant",
    "phonetic": "prɪ'dɑmənənt",
    "pos": "adj.",
    "meaning": "主要的；卓越的；[计]支配的；有力的；有影响的",
    "example": "the predominant group in society",
    "exampleCn": "社会中的主导群体"
   },
   {
    "word": "indifferent",
    "phonetic": "ɪn'dɪfrənt",
    "pos": "adj.",
    "meaning": "漠不关心的；无关紧要的；中性的，中立的",
    "example": "an indifferent cook",
    "exampleCn": "手艺平平的厨师"
   },
   {
    "word": "delete",
    "phonetic": "dɪ'lit",
    "pos": "vt",
    "meaning": "[计]删除",
    "example": "His name was deleted from the list.",
    "exampleCn": "他的名字从名单上删掉了。"
   },
   {
    "word": "cart",
    "phonetic": "kɑrt",
    "pos": "n.",
    "meaning": "马车；用车运送，携带",
    "example": "Cars are prohibited, so transportation is by electric cart or by horse and buggy.",
    "exampleCn": "由于汽车被禁止使用，交通依赖于电车或轻便马车。"
   },
   {
    "word": "translucent",
    "phonetic": "træns'lusnt",
    "pos": "adj.",
    "meaning": "[光]透明的；半透明的",
    "example": "Blue veins showed through her translucent skin.",
    "exampleCn": "她半透明的皮肤下青筋显现。"
   },
   {
    "word": "posterity",
    "phonetic": "pɑ'stɛrəti",
    "pos": "n.",
    "meaning": "子孙，后裔；后代",
    "example": "A photographer recorded the scene on video for posterity.",
    "exampleCn": "一位摄影师为子孙后代摄下了这个场面。"
   },
   {
    "word": "curriculum",
    "phonetic": "kə'rɪkjələm",
    "pos": "n.",
    "meaning": "学校的课程",
    "example": "Languages are an essential part of the school curriculum.",
    "exampleCn": "语言是学校课程中必不可少的部分。"
   },
   {
    "word": "forgive",
    "phonetic": "fɚ'ɡɪv",
    "pos": "vt",
    "meaning": "原谅；免除（债务、义务等）",
    "example": "He didn’t look the sort of man to forgive and forget (= forgive someone and no longer think about it ) .",
    "exampleCn": "他看上去不是那种不记仇的人。"
   },
   {
    "word": "component",
    "phonetic": "kəm'ponənt",
    "pos": "adj.",
    "meaning": "[天]组成的，构成的；成分；组件；[电子]元件",
    "example": "companies that make electronic components for computer products",
    "exampleCn": "为计算机产品生产电子零件的公司"
   },
   {
    "word": "granular",
    "phonetic": "'grænjəlɚ",
    "pos": "adj.",
    "meaning": "颗粒的；粒状的",
    "example": "...a granular fertilizer.",
    "exampleCn": "...一种粒状化肥。"
   },
   {
    "word": "scrutiny",
    "phonetic": "'skrutəni",
    "pos": "n.",
    "meaning": "详细审查；监视；细看；选票复查",
    "example": "Their activities have come under police scrutiny .",
    "exampleCn": "他们的活动受到警方的严密监视。"
   },
   {
    "word": "wary",
    "phonetic": "'wɛri",
    "pos": "adj.",
    "meaning": "谨慎的；机警的；惟恐的；考虑周到的",
    "example": "Keep a wary eye on the weather before you set sail.",
    "exampleCn": "出航前要密切注意天气。"
   },
   {
    "word": "relevant",
    "phonetic": "'rɛləvənt",
    "pos": "adj.",
    "meaning": "有关的；中肯的；有重大作用的",
    "example": "Relevant documents were presented in court.",
    "exampleCn": "法庭上出示了相关的文件。"
   },
   {
    "word": "spiritual",
    "phonetic": "'spɪrɪtʃʊəl",
    "pos": "n.",
    "meaning": "圣歌（尤指美国南部黑人的）；精神的，心灵的",
    "example": "Painting helps fill a spiritual need for beauty.",
    "exampleCn": "绘画可以满足对美的精神需求。"
   },
   {
    "word": "hectic",
    "phonetic": "'hɛktɪk",
    "pos": "n.",
    "meaning": "脸红；患肺结核；兴奋的，狂热的；脸上发红；肺病的",
    "example": "I’ve had a pretty hectic day.",
    "exampleCn": "我忙乱了一整天。"
   },
   {
    "word": "phenomenal",
    "phonetic": "fɪ'nɒmɪn(ə)l",
    "pos": "adj.",
    "meaning": "现象的；显著的；异常的；能知觉的",
    "example": "the phenomenal success of computer games in recent years",
    "exampleCn": "近年来电脑游戏的惊人成功"
   },
   {
    "word": "guarantee",
    "phonetic": ",ɡærən'ti",
    "pos": "n.",
    "meaning": "[金融]保证；[法]担保；保证人；保证书；[经]抵押品；[金融]保证；[法]担保",
    "example": "The bank will only lend me money if my parents guarantee the loan.",
    "exampleCn": "只有我父母作担保，银行才会给我贷款。"
   },
   {
    "word": "lame",
    "phonetic": "lem",
    "pos": "adj.",
    "meaning": "跛足的；僵痛的；不完全的；无说服力的；变跛；使跛；使成残废",
    "example": "a lame attempt to deflect criticism",
    "exampleCn": "转移批评的一个无力的尝试"
   },
   {
    "word": "nuance",
    "phonetic": "'nju:ɑ:ns, nju:'ɑ:ns",
    "pos": "n.",
    "meaning": "(意义、意见、颜色)细微差别",
    "example": "He was aware of every nuance in her voice.",
    "exampleCn": "他听得出她声音中的每一个细微变化。"
   },
   {
    "word": "destination",
    "phonetic": ",dɛstɪ'neʃən",
    "pos": "n.",
    "meaning": "[计]目的地，终点",
    "example": "Ellis Island has become one of America's most popular tourist destinations.",
    "exampleCn": "埃利斯岛已经成为美国最受欢迎的游览地之一。"
   },
   {
    "word": "irrespective",
    "phonetic": ",ɪrɪ'spɛktɪv",
    "pos": "adj.",
    "meaning": "无关的；不考虑的；不顾的",
    "example": "The modularity system can then match you with what you need irrespective of which module provides it.",
    "exampleCn": "模块化系统可以很好地匹配您的需求，而不需要考虑是哪个模块提供的。"
   },
   {
    "word": "drudgery",
    "phonetic": "'drʌdʒəri",
    "pos": "n.",
    "meaning": "苦工，苦差事",
    "example": "We cannot hope for cheap food, but we can improve skills, boost productivity, reduce drudgery and enhance people's quality of life.",
    "exampleCn": "我们不能把希望放在廉价食品上，但是我们可以改善技能，促进生产力，减少单调的苦工，并提高人们的生活质量。"
   },
   {
    "word": "saline",
    "phonetic": "'selin",
    "pos": "adj.",
    "meaning": "盐的；含盐分的；[地理][水文]盐湖；碱盐泻药",
    "example": "saline solution",
    "exampleCn": "盐溶液"
   },
   {
    "word": "descent",
    "phonetic": "dɪ'sɛnt",
    "pos": "n.",
    "meaning": "[航]下降；[遗]血统；袭击",
    "example": "Passengers must fasten their seat belts prior to descent.",
    "exampleCn": "乘客在飞机降落之前必须系好安全带。"
   },
   {
    "word": "cognitive",
    "phonetic": "'kɑɡnətɪv",
    "pos": "adj.",
    "meaning": "认知的，认识的",
    "example": "cognitive psychology",
    "exampleCn": "认知心理学"
   },
   {
    "word": "submerge",
    "phonetic": "səb'mɝdʒ",
    "pos": "vt",
    "meaning": "淹没；把…浸入；沉浸；淹没；潜入水中；湮没",
    "example": "Hippos are unable to submerge in the few remaining water holes.",
    "exampleCn": "河马无法淹没在仅存的几个水坑里。"
   },
   {
    "word": "concoct",
    "phonetic": "kən'kɑkt",
    "pos": "vt",
    "meaning": "捏造；混合而制；调合；图谋",
    "example": "John concocted an elaborate excuse for being late.",
    "exampleCn": "约翰为迟到编了一个巧妙的借口。"
   },
   {
    "word": "anxiety",
    "phonetic": "æŋ'zaɪəti",
    "pos": "n.",
    "meaning": "[心理]焦虑；渴望；挂念；令人焦虑的事",
    "example": "Her voice was full of anxiety.",
    "exampleCn": "她的声音饱含焦虑。"
   },
   {
    "word": "ungainly",
    "phonetic": "ʌn'ɡenli",
    "pos": "adj.",
    "meaning": "笨拙的；不雅的；笨拙地；不雅地",
    "example": "a tall ungainly teenager",
    "exampleCn": "一个动作笨拙的高个子少年"
   },
   {
    "word": "impetus",
    "phonetic": "'ɪmpɪtəs",
    "pos": "n.",
    "meaning": "动力；促进；冲力",
    "example": "The discovery gave fresh impetus to the research.",
    "exampleCn": "这个发现为研究带来新动力。"
   },
   {
    "word": "asylum",
    "phonetic": "ə'saɪləm",
    "pos": "n.",
    "meaning": "庇护；收容所，救济院",
    "example": "He applied for asylum in 1987 after fleeing the police back home.",
    "exampleCn": "他于1987年逃脱本国的警察之后申请了避难许可。"
   },
   {
    "word": "conjunction",
    "phonetic": "kən'dʒʌŋkʃən",
    "pos": "n.",
    "meaning": "结合；[语]连接词；同时发生",
    "example": "The two clauses are joined by a conjunction.",
    "exampleCn": "这两个分句由一个连词连在一起。"
   },
   {
    "word": "one",
    "phonetic": "wʌn",
    "pos": "adj.",
    "meaning": "一的；唯一的；一",
    "example": "I don’t have any ones.",
    "exampleCn": "我没有一美元的纸币。"
   },
   {
    "word": "visualize",
    "phonetic": "'vɪʒuəlaɪz",
    "pos": "vt",
    "meaning": "形象，形象化；想像，设想",
    "example": "I tried to visualize the house while he was describing it.",
    "exampleCn": "我一边听他描述，一边想象那房子的样子。"
   },
   {
    "word": "ephemeral",
    "phonetic": "ə'fɛmərəl",
    "pos": "adj.",
    "meaning": "短暂的；朝生暮死的",
    "example": "Fashion is by nature ephemeral.",
    "exampleCn": "从本质上说，时尚不过是一时的潮流。"
   },
   {
    "word": "pants",
    "phonetic": "pænts",
    "pos": "n.",
    "meaning": "裤子；短裤",
    "example": "She was wearing dark blue pants and a white sweater.",
    "exampleCn": "她穿着深蓝色长裤和白色毛衣。"
   },
   {
    "word": "thermostat",
    "phonetic": "'θɝməstæt",
    "pos": "n.",
    "meaning": "[自]恒温器；自动调温器",
    "example": "Turn off your thermostat when you’re not home.",
    "exampleCn": "当你不在家的时候关掉恒温器。"
   },
   {
    "word": "stimulate",
    "phonetic": "'stɪmjə'let",
    "pos": "vt",
    "meaning": "刺激；鼓舞，激励",
    "example": "Her interest in art was stimulated by her father.",
    "exampleCn": "她对艺术的兴趣是她父亲激发的。"
   },
   {
    "word": "manufacture",
    "phonetic": "'mænjə'fæktʃɚ",
    "pos": "n.",
    "meaning": "制造；产品；制造业；制造；加工；捏造",
    "example": "the company that manufactured the drug",
    "exampleCn": "生产这种药的公司"
   },
   {
    "word": "defiance",
    "phonetic": "dɪ'faɪəns",
    "pos": "n.",
    "meaning": "蔑视；挑战；反抗",
    "example": "...his courageous defiance of the government.",
    "exampleCn": "…他对政府的大胆蔑视。"
   },
   {
    "word": "moreover",
    "phonetic": "mɔr'ovɚ",
    "pos": "adv.",
    "meaning": "而且；此外",
    "example": "The rent is reasonable and, moreover, the location is perfect.",
    "exampleCn": "租金合理，而且位置也非常好。"
   },
   {
    "word": "veto",
    "phonetic": "'vito",
    "pos": "n.",
    "meaning": "否决权；否决；禁止；否决；禁止",
    "example": "The Senate had a sufficient majority to override the presidential veto (= not accept his refusal ).",
    "exampleCn": "参议院有足够的多数票可以推翻总统的否决。"
   },
   {
    "word": "combat",
    "phonetic": "'kɑmbæt",
    "pos": "vt",
    "meaning": "反对；与…战斗；战斗；搏斗；战斗；争论；战斗的；为…斗争的",
    "example": "We flew over 200 combat missions in the war.",
    "exampleCn": "我们在战争中执行过两百多次战斗飞行任务。"
   },
   {
    "word": "symptom",
    "phonetic": "'sɪmptəm",
    "pos": "n.",
    "meaning": "[临床]症状；征兆",
    "example": "One of the most common symptoms of schizophrenia is hearing imaginary voices.",
    "exampleCn": "精神分裂症最常见的症状之一是幻听。"
   },
   {
    "word": "casual",
    "phonetic": "'kæʒʊəl",
    "pos": "adj.",
    "meaning": "随便的；非正式的；临时的；偶然的；便装；临时工人；待命士兵",
    "example": "Jean felt more comfortable in casual clothes .",
    "exampleCn": "琼穿上便服感到更舒服。"
   },
   {
    "word": "concerted",
    "phonetic": "kən'sɝtɪd",
    "pos": "adj.",
    "meaning": "协调的；协定的；商议定的",
    "example": "Libraries have made a concerted effort to attract young people.",
    "exampleCn": "各图书馆同心协力吸引年轻人。"
   },
   {
    "word": "subsidiary",
    "phonetic": "səb'sɪdɪɛri",
    "pos": "adj.",
    "meaning": "附属的；辅助的；子公司；辅助者",
    "example": "a subsidiary hypothesis",
    "exampleCn": "一个附带假设"
   },
   {
    "word": "insolent",
    "phonetic": "'ɪnsələnt",
    "pos": "adj.",
    "meaning": "无礼的；傲慢的；粗野的；无耻的",
    "example": "an insolent tone of voice",
    "exampleCn": "傲慢的语气"
   },
   {
    "word": "permit",
    "phonetic": "pɚ'mɪt",
    "pos": "vi",
    "meaning": "许可；允许；许可；允许；许可证，执照",
    "example": "Smoking is only permitted in the public lounge.",
    "exampleCn": "只允许在公共休息室里抽烟。"
   },
   {
    "word": "dreary",
    "phonetic": "'drɪri",
    "pos": "adj.",
    "meaning": "沉闷的，枯燥的",
    "example": "the same dreary routine",
    "exampleCn": "一成不变的、乏味的日常事务"
   },
   {
    "word": "merit",
    "phonetic": "'mɛrɪt",
    "pos": "n.",
    "meaning": "优点，价值；功绩；功过；值得",
    "example": "The merit of the report is its realistic assessment of the changes required.",
    "exampleCn": "这份报告的优点就是它对所要求的变动进行了实事求是的评估。"
   },
   {
    "word": "torrent",
    "phonetic": "'tɔrənt",
    "pos": "n.",
    "meaning": "奔流；倾注；迸发；连续不断",
    "example": "After five days of heavy rain the Telle river was a raging torrent (= a very violent torrent ) .",
    "exampleCn": "下了五天的大雨之后，泰勒河急流汹涌。"
   },
   {
    "word": "flatter",
    "phonetic": "'flætɚ",
    "pos": "vt",
    "meaning": "奉承；谄媚；使高兴",
    "example": "That dress really flatters your figure.",
    "exampleCn": "那件连衣裙很显你的身材。"
   },
   {
    "word": "layoff",
    "phonetic": "'le,ɔf",
    "pos": "n.",
    "meaning": "临时解雇，停工",
    "example": "It will close more than 200 stores nationwide resulting in the layoffs of an estimated 2,000 employees.",
    "exampleCn": "在全国范围内将关闭二百多家商店，造成约两千人失业。"
   },
   {
    "word": "evaluate",
    "phonetic": "ɪ'væljʊ'et",
    "pos": "vt",
    "meaning": "评价；估价；求…的值；评价；估价",
    "example": "You should be able to evaluate your own work.",
    "exampleCn": "你应该能够评估自己的工作。"
   },
   {
    "word": "vent",
    "phonetic": "vɛnt",
    "pos": "n.",
    "meaning": "（感情的）发泄；出口；[机][矿业]通风孔；发泄感情；放出…；给…开孔；放出；（通过排泄等）减轻压力",
    "example": "Children give vent to their anger in various ways.",
    "exampleCn": "儿童用各种方法发泄怒气。"
   },
   {
    "word": "compact",
    "phonetic": "'kɑmpækt",
    "pos": "n.",
    "meaning": "合同，契约；小粉盒；[数]紧凑的，紧密的；简洁的",
    "example": "The bushes grew in a compact mass.",
    "exampleCn": "灌木长成茂密的一片。"
   },
   {
    "word": "productivity",
    "phonetic": ",prodʌk'tɪvəti",
    "pos": "n.",
    "meaning": "生产力；[经]生产率；生产能力",
    "example": "high productivity levels in manufacturing",
    "exampleCn": "制造业中的高生产率"
   },
   {
    "word": "unconditional",
    "phonetic": ",ʌnkən'dɪʃənl",
    "pos": "adj.",
    "meaning": "[数]无条件的；绝对的；无限制的",
    "example": "the unconditional release of all political prisoners",
    "exampleCn": "所有政治犯的无条件释放"
   },
   {
    "word": "lurk",
    "phonetic": "lɝk",
    "pos": "vi",
    "meaning": "潜伏；潜藏；埋伏；潜伏；埋伏",
    "example": "a dark formless danger, lurking in the shadows",
    "exampleCn": "一种潜藏在阴影里的无形危险"
   },
   {
    "word": "stress",
    "phonetic": "strɛs",
    "pos": "n.",
    "meaning": "压力；强调；紧张；重要性；重读；强调；使紧张；加压力于；用重音读",
    "example": "Your headaches are due to stress.",
    "exampleCn": "你的头痛是压力造成的。"
   },
   {
    "word": "zest",
    "phonetic": "zɛst",
    "pos": "n.",
    "meaning": "风味；热心；强烈的兴趣；给…调味",
    "example": "The danger of being caught added a certain zest to the affair.",
    "exampleCn": "被捉奸的危险为这件风流韵事增添了一些刺激性。"
   },
   {
    "word": "rival",
    "phonetic": "'raɪvl",
    "pos": "n.",
    "meaning": "对手；[劳经]竞争者；与…竞争；比得上某人；[劳经]竞争；[劳经]竞争的",
    "example": "This gives the company a competitive advantage over its rivals.",
    "exampleCn": "这使该公司与其对手相比具有一项竞争优势。"
   },
   {
    "word": "fragrance",
    "phonetic": "'fregrəns",
    "pos": "n.",
    "meaning": "香味，芬芳",
    "example": "...a shrubby plant with a strong characteristic fragrance.",
    "exampleCn": "…一种有独特浓郁香味的灌木。"
   },
   {
    "word": "comply",
    "phonetic": "kəm'plaɪ",
    "pos": "vi",
    "meaning": "遵守；顺从，遵从；答应",
    "example": "The newspaper was asked by federal agents for assistance and agreed to comply.",
    "exampleCn": "联邦探员要求这家报社给予协助，报社同意配合。"
   },
   {
    "word": "trustworthy",
    "phonetic": "'trʌstwɝði",
    "pos": "adj.",
    "meaning": "可靠的；可信赖的",
    "example": "He is a trustworthy and level-headed leader.",
    "exampleCn": "他是个可信赖的、头脑冷静的领导。"
   },
   {
    "word": "stain",
    "phonetic": "sten",
    "pos": "vt",
    "meaning": "沾污；败坏；给…着色；污点；瑕疵；[试剂][生物]着色剂",
    "example": "Be careful you don’t stain the carpet.",
    "exampleCn": "当心别把地毯弄脏了。"
   },
   {
    "word": "patent",
    "phonetic": "'pætnt",
    "pos": "adj.",
    "meaning": "[专利]专利的；新奇的；显然的；[专利]专利权；执照；专利品",
    "example": "a patent lock",
    "exampleCn": "专利锁"
   },
   {
    "word": "harassment",
    "phonetic": "hə'ræsmənt",
    "pos": "n.",
    "meaning": "骚扰；烦恼",
    "example": "African-Americans have been complaining about police harassment for years.",
    "exampleCn": "美国黑人多年来一直抱怨受到警察的骚扰。"
   },
   {
    "word": "dwarf",
    "phonetic": "dwɔrf",
    "pos": "n.",
    "meaning": "侏儒，[内科]矮子；[生物]矮小的",
    "example": "Snow White and the Seven Dwarfs",
    "exampleCn": "《白雪公主和七个小矮人》"
   },
   {
    "word": "appraisal",
    "phonetic": "ə'prezl",
    "pos": "n.",
    "meaning": "评价；[经管]估价（尤指估价财产，以便征税）；[数]估计",
    "example": "What is needed in such cases is a calm appraisal of the situation.",
    "exampleCn": "在此类情况下需要的是对形势的冷静估计。"
   },
   {
    "word": "painstaking",
    "phonetic": "'penztekɪŋ",
    "pos": "adj.",
    "meaning": "艰苦的；勤勉的；小心的；辛苦；勤勉",
    "example": "The work had been done with painstaking attention to detail.",
    "exampleCn": "这项工作被一丝不苟地完成了。"
   },
   {
    "word": "frail",
    "phonetic": "frel",
    "pos": "adj.",
    "meaning": "脆弱的；虚弱的；灯心草篓；少妇；少女",
    "example": "{\"COLLOINEXA\":[\"frail elderly people\"]}",
    "exampleCn": "年老体衰者"
   },
   {
    "word": "competence",
    "phonetic": "'kɑmpɪtəns",
    "pos": "n.",
    "meaning": "能力，[胚]胜任；权限；作证能力；足以过舒适生活的收入",
    "example": "Typing is considered by most employers to be a basic competence.",
    "exampleCn": "大多数雇主认为打字是一项基本技能。"
   },
   {
    "word": "airing",
    "phonetic": "'ɛrɪŋ",
    "pos": "n.",
    "meaning": "通风；晾干；（开车）兜风；风干；烘热（air的ing形式）",
    "example": "give them an airing.",
    "exampleCn": "把室内盆栽植物搬出去透透气。"
   },
   {
    "word": "deny",
    "phonetic": "dɪ'nai",
    "pos": "vt",
    "meaning": "否定，否认；拒绝给予；拒绝…的要求；否认；拒绝",
    "example": "The government denied the existence of poverty among 16- and 17-year-olds.",
    "exampleCn": "政府否认十六七岁的青少年当中存在贫困问题。"
   },
   {
    "word": "residence",
    "phonetic": "'rɛzɪdəns",
    "pos": "n.",
    "meaning": "住宅，住处；居住",
    "example": "the ambassador’s official residence",
    "exampleCn": "大使官邸"
   },
   {
    "word": "achieve",
    "phonetic": "ə'tʃiv",
    "pos": "vt",
    "meaning": "达到；完成；达到目的；如愿以偿",
    "example": "Frances achieved very good exam results.",
    "exampleCn": "弗朗西丝考试取得了优异成绩。"
   },
   {
    "word": "intellect",
    "phonetic": "'ɪntəlɛkt",
    "pos": "n.",
    "meaning": "智力，理解力；知识分子；思维逻辑领悟力；智力高的人",
    "example": "Do the emotions develop in parallel with the intellect?",
    "exampleCn": "情感与智力同步发展吗？"
   },
   {
    "word": "commonplace",
    "phonetic": "'kɑmən'ples",
    "pos": "n.",
    "meaning": "老生常谈；司空见惯的事；普通的东西；平凡的；陈腐的",
    "example": "Car thefts are commonplace in this part of town.",
    "exampleCn": "镇上的这个地段盗车案屡见不鲜。"
   },
   {
    "word": "drowse",
    "phonetic": "draʊz",
    "pos": "vi",
    "meaning": "打瞌睡；发呆；瞌睡；假寐",
    "example": "I was drowsing in front of the television when you called.",
    "exampleCn": "我正坐在电视机前打瞌睡，恰好你打电话来。"
   },
   {
    "word": "aquatic",
    "phonetic": "ə'kwætɪk",
    "pos": "adj.",
    "meaning": "[生物][化学][水产]水生的；水栖的；在水中或水面进行的",
    "example": "an aquatic plant",
    "exampleCn": "水生植物"
   },
   {
    "word": "cheer",
    "phonetic": "tʃɪr",
    "pos": "vt",
    "meaning": "欢呼；使高兴；为…加油；欢呼；愉快；心情；令人愉快的事；欢呼；感到高兴",
    "example": "A great cheer went up from the crowd.",
    "exampleCn": "人群中爆发出巨大的欢呼声。"
   },
   {
    "word": "charity",
    "phonetic": "'tʃærəti",
    "pos": "n.",
    "meaning": "慈善；施舍；慈善团体；宽容；施舍物",
    "example": "Several charities sent aid to the flood victims.",
    "exampleCn": "有几家慈善机构已向洪灾灾民送去了救援物资。"
   },
   {
    "word": "lock",
    "phonetic": "lɑk",
    "pos": "vt",
    "meaning": "[五金]锁，锁上；隐藏；[五金]锁；锁住；卡住；[五金]锁；[水利]水闸；刹车",
    "example": "The wheels suddenly locked.",
    "exampleCn": "轮子突然卡住不动了。"
   },
   {
    "word": "posthumous",
    "phonetic": "'pɑstʃəməs",
    "pos": "adj.",
    "meaning": "遗腹的；父亡后出生的；死后的；身后的",
    "example": "a posthumous collection of his articles",
    "exampleCn": "他身后出版的文集"
   },
   {
    "word": "puncture",
    "phonetic": "'pʌŋktʃɚ",
    "pos": "vt",
    "meaning": "刺穿；揭穿；削弱",
    "example": "She was cycling home when she had a puncture .",
    "exampleCn": "她骑车回家途中轮胎被扎破了。"
   },
   {
    "word": "aupair",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "国外来的(姑娘)帮助料理家务换取住宿的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "corporate",
    "phonetic": "ˈkɔːrpərət",
    "pos": "adj.",
    "meaning": "[法]法人的；共同的，全体的；社团的",
    "example": "corporate responsibility",
    "exampleCn": "共同的责任"
   },
   {
    "word": "proclaim",
    "phonetic": "prə'klem",
    "pos": "vt",
    "meaning": "宣告，公布；声明；表明；赞扬",
    "example": "The President proclaimed the republic’s independence.",
    "exampleCn": "总统宣布共和国独立。"
   },
   {
    "word": "fame",
    "phonetic": "fem",
    "pos": "n.",
    "meaning": "名声，名望；传闻，传说",
    "example": "He claims he is not really interested in fame.",
    "exampleCn": "他称自己对出名真的没有兴趣。"
   },
   {
    "word": "trifle",
    "phonetic": "'traɪfl",
    "pos": "n.",
    "meaning": "琐事；蛋糕；少量；开玩笑；闲混；嘲弄；浪费；虚度",
    "example": "There’s no point in arguing over trifles.",
    "exampleCn": "为琐事争吵毫无意义。"
   },
   {
    "word": "pervade",
    "phonetic": "pɚ'ved",
    "pos": "vt",
    "meaning": "遍及；弥漫",
    "example": "A spirit of hopelessness pervaded the country.",
    "exampleCn": "一种无望的情绪笼罩着该国。"
   },
   {
    "word": "scar",
    "phonetic": "skɑr",
    "pos": "vt",
    "meaning": "伤害；给留下伤痕；结疤；痊愈；创伤；伤痕",
    "example": "He had a long, curved scar on his right cheek.",
    "exampleCn": "他的右脸上有一道弯弯的长疤。"
   },
   {
    "word": "unconscious",
    "phonetic": "ʌn'kɑnʃəs",
    "pos": "adj.",
    "meaning": "[心理]无意识的；失去知觉的；[医]不省人事的；未发觉的",
    "example": "She was found alive but unconscious.",
    "exampleCn": "她被找到时还活着，但已不省人事。"
   },
   {
    "word": "investigate",
    "phonetic": "ɪn'vɛstɪɡet",
    "pos": "v.",
    "meaning": "调查；研究",
    "example": "The state police are investigating the incident.",
    "exampleCn": "州警察正调查此事。"
   },
   {
    "word": "oasis",
    "phonetic": "o'esɪs",
    "pos": "n.",
    "meaning": "[地理]绿洲；舒适的地方；令人宽慰的事物",
    "example": "The immaculately tended gardens are an oasis in the midst of Cairo's urban sprawl.",
    "exampleCn": "那些打理得非常整洁的花园是杂乱扩张的开罗市区中的一片绿洲。"
   },
   {
    "word": "hard",
    "phonetic": "hɑrd",
    "pos": "adj.",
    "meaning": "努力的；硬的；困难的；辛苦的；[医]确实的；严厉的；猛烈的；冷酷无情的；努力地；困难地；辛苦地；接近地；猛烈地；牢固地",
    "example": "a hard wooden chair",
    "exampleCn": "一把硬木椅"
   },
   {
    "word": "orthodox",
    "phonetic": "'ɔrθədɑks",
    "pos": "adj.",
    "meaning": "正统的；传统的；惯常的",
    "example": "orthodox medical treatments",
    "exampleCn": "传统疗法"
   },
   {
    "word": "salvage",
    "phonetic": "'sælvɪdʒ",
    "pos": "n.",
    "meaning": "打捞；[水运][安全]海上救助；抢救财货；救难的奖金",
    "example": "a massive salvage operation",
    "exampleCn": "大规模的抢救行动"
   },
   {
    "word": "confusion",
    "phonetic": "kən'fjʊʒən",
    "pos": "n.",
    "meaning": "混淆，混乱；困惑",
    "example": "To avoid confusion, the teams wore different colours.",
    "exampleCn": "为了避免混淆，各队穿着不同颜色的服装。"
   },
   {
    "word": "exceptional",
    "phonetic": "ɪk'sɛpʃənl",
    "pos": "adj.",
    "meaning": "异常的，例外的",
    "example": "an exceptional student",
    "exampleCn": "出类拔萃的学生"
   },
   {
    "word": "drought",
    "phonetic": "draʊt",
    "pos": "n.",
    "meaning": "[气候]干旱；缺乏",
    "example": "...a country where drought and famines have killed up to two million people during the last eighteen years.",
    "exampleCn": "…过去18年来干旱和饥荒致死达两百万人的一个国家。"
   },
   {
    "word": "null",
    "phonetic": "nʌl",
    "pos": "adj.",
    "meaning": "无效的，无价值的；等于零的；零，[数]空",
    "example": "The contract was declared null and void.",
    "exampleCn": "该合同被宣布无效。"
   },
   {
    "word": "fetch",
    "phonetic": "fɛtʃ",
    "pos": "vt",
    "meaning": "取来；接来；到达；吸引；拿；取物；卖得；取得；诡计",
    "example": "Sylvia fetched a towel from the bathroom.",
    "exampleCn": "西尔维娅从浴室拿来一条毛巾。"
   },
   {
    "word": "harness",
    "phonetic": "'hɑrnɪs",
    "pos": "vt",
    "meaning": "治理；套；驾驭；披上甲胄；马具；甲胄；挽具状带子；降落伞背带",
    "example": "We can harness the power of the wind to generate electricity.",
    "exampleCn": "我们可以利用风力发电。"
   },
   {
    "word": "trivial",
    "phonetic": "'trɪvɪəl",
    "pos": "adj.",
    "meaning": "不重要的，琐碎的；琐细的",
    "example": "a trivial sum",
    "exampleCn": "一笔极小的金额"
   },
   {
    "word": "ease",
    "phonetic": "iz",
    "pos": "vt",
    "meaning": "减轻，缓和；使安心；轻松，舒适；安逸，悠闲；减轻，缓和；放松；灵活地移动",
    "example": "They won with ease.",
    "exampleCn": "他们轻松获胜。"
   },
   {
    "word": "furnish",
    "phonetic": "'fɝnɪʃ",
    "pos": "vt",
    "meaning": "提供；供应；装备",
    "example": "Having bought the house, they couldn’t afford to furnish it.",
    "exampleCn": "买下房子后，他们没有钱买家具了。"
   },
   {
    "word": "paraphernalia",
    "phonetic": "'pærəfə'nelɪə",
    "pos": "n.",
    "meaning": "随身用具；全部有关的事物；设备",
    "example": "...a large courtyard full of builders' paraphernalia.",
    "exampleCn": "…一个充满建筑装备的大院子"
   },
   {
    "word": "extent",
    "phonetic": "ɪk'stɛnt",
    "pos": "n.",
    "meaning": "程度；范围；[计量]长度",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "instrumental",
    "phonetic": ",ɪnstrə'mɛntl",
    "pos": "adj.",
    "meaning": "乐器的；有帮助的；仪器的，器械的",
    "example": "He was instrumental in developing links with European organizations.",
    "exampleCn": "他在建立与欧洲各组织之间的联系中起了重要作用。"
   },
   {
    "word": "exorbitant",
    "phonetic": "ɪɡ'zɔrbɪtənt",
    "pos": "adj.",
    "meaning": "（要价等）过高的；（性格等）过分的；不在法律范围之内的",
    "example": "Exorbitant housing prices have created an acute shortage of affordable housing for the poor.",
    "exampleCn": "过高的房价使穷人负担得起的房源严重短缺。"
   },
   {
    "word": "combustible",
    "phonetic": "kəm'bʌstəbl",
    "pos": "adj.",
    "meaning": "[化工]易燃的；易激动的；燃烧性的；[化工]可燃物；易燃物",
    "example": "The ability of coal to release a combustible gas has long been known.",
    "exampleCn": "煤能够释放易燃气体这一点早已为人所知。"
   },
   {
    "word": "address",
    "phonetic": "ə'drɛs",
    "pos": "vt",
    "meaning": "演说；从事；忙于；写姓名地址；向…致辞；[计]地址；演讲；致辞；说话的技巧",
    "example": "What’s your new address?",
    "exampleCn": "你的新地址是什么？"
   },
   {
    "word": "junk",
    "phonetic": "dʒʌŋk",
    "pos": "n.",
    "meaning": "垃圾，废物；[船]舢板",
    "example": "Consumers will not have to junk their old cassettes to use the new format.",
    "exampleCn": "消费者们将不必为了使用新制式而丢掉他们的老盒式磁带。"
   },
   {
    "word": "reputation",
    "phonetic": ",rɛpju'teʃən",
    "pos": "n.",
    "meaning": "名声，名誉；声望",
    "example": "Alice Munro has a reputation for being a very depressing writer.",
    "exampleCn": "艾丽斯•门罗有文风抑郁的名声。"
   },
   {
    "word": "obstruct",
    "phonetic": "əb'strʌkt",
    "pos": "vt",
    "meaning": "妨碍；阻塞；遮断；阻塞；设障碍",
    "example": "A small aircraft was obstructing the runway.",
    "exampleCn": "一架小型飞机堵住了跑道。"
   },
   {
    "word": "enclosure",
    "phonetic": "ɪn'kloʒɚ",
    "pos": "n.",
    "meaning": "附件；[建]围墙；围场",
    "example": "the enclosure of arable land for pasture",
    "exampleCn": "将耕地圈起来用作牧场"
   },
   {
    "word": "telecommunication",
    "phonetic": ",tɛlɪkə,mjʊnə'keʃən",
    "pos": "n.",
    "meaning": "电讯；[通信]远程通信；无线电通讯",
    "example": "If large media and telecommunication companies decide to close their offerings to the web, I am convinced the web will route around it.",
    "exampleCn": "如果大型媒体和电信公司决定停止向万维网提供内容，我很确信万维网会绕过这一点。"
   },
   {
    "word": "custodian",
    "phonetic": "kʌ'stodɪən",
    "pos": "n.",
    "meaning": "[经管]管理人；监护人；保管人",
    "example": "a custodian at the stadium",
    "exampleCn": "体育场看门人"
   },
   {
    "word": "meditate",
    "phonetic": "'mɛdɪtet",
    "pos": "vt",
    "meaning": "考虑；计划；企图；冥想；沉思",
    "example": "On the day her son began school, she meditated on the uncertainties of his future.",
    "exampleCn": "在她儿子入学那天，她深思了有关他未来的种种不确定因素。"
   },
   {
    "word": "oblige",
    "phonetic": "ə'blaɪdʒ",
    "pos": "vt",
    "meaning": "迫使；强制；赐，施恩惠；责成",
    "example": "It’s always a good idea to oblige important clients.",
    "exampleCn": "能满足重要客户的请求总是好的。"
   },
   {
    "word": "versus",
    "phonetic": "'vɝsəs",
    "pos": "prep.",
    "meaning": "对；与...相对；对抗",
    "example": "the New York Knicks versus the LA Lakers",
    "exampleCn": "纽约尼克斯队对洛杉矶湖人队"
   },
   {
    "word": "timidity",
    "phonetic": "tɪ'mɪdəti",
    "pos": "n.",
    "meaning": "胆怯，胆小；羞怯",
    "example": "They mocked at my timidity.",
    "exampleCn": "他们耻笑我胆小。"
   },
   {
    "word": "volatile",
    "phonetic": "'vɑlətl",
    "pos": "adj.",
    "meaning": "[化学]挥发性的；不稳定的；爆炸性的；反覆无常的",
    "example": "an increasingly volatile political situation",
    "exampleCn": "日益动荡的政治局势"
   },
   {
    "word": "indignant",
    "phonetic": "ɪn'dɪɡnənt",
    "pos": "adj.",
    "meaning": "愤愤不平的；义愤的",
    "example": "an indignant reply",
    "exampleCn": "愤慨的回复"
   },
   {
    "word": "seal",
    "phonetic": "sil",
    "pos": "n.",
    "meaning": "[机]密封；印章；[皮革][脊椎]海豹；封条；标志；[机]密封；盖章",
    "example": "The window was sealed shut.",
    "exampleCn": "这扇窗户被封了起来。"
   },
   {
    "word": "sovereign",
    "phonetic": "sɑvrɪn",
    "pos": "adj.",
    "meaning": "至高无上的；有主权的；拥有最高统治权的；不折不扣的；极好的；君主；独立国；最高统治者",
    "example": "Lithuania and Armenia signed a treaty in Vilnius recognizing each other as independent sovereign states.",
    "exampleCn": "立陶宛和亚美尼亚在维尔纽斯签订了一份互相承认各自为独立主权国家的协定。"
   },
   {
    "word": "cute",
    "phonetic": "kjʊt",
    "pos": "adj.",
    "meaning": "可爱的；漂亮的；聪明的，伶俐的",
    "example": "a cute little puppy",
    "exampleCn": "一只逗人爱的小狗"
   },
   {
    "word": "navigation",
    "phonetic": "'nævə'geʃən",
    "pos": "n.",
    "meaning": "[航]航行；[水运]航海",
    "example": "compasses and other instruments of navigation",
    "exampleCn": "罗盘及其他导航仪器"
   },
   {
    "word": "shock",
    "phonetic": "ʃɑk",
    "pos": "n.",
    "meaning": "[临床]休克；震惊；震动；打击；禾束堆；[临床]使休克；使震惊；使震动；使受电击；把…堆成禾束堆；浓密的；蓬乱的",
    "example": "She was shaking with shock and humiliation.",
    "exampleCn": "她又是震惊，又是羞辱，身体直发抖。"
   },
   {
    "word": "account",
    "phonetic": "ə'kaʊnt",
    "pos": "n.",
    "meaning": "[会计]帐户；解释；帐目，帐单；理由；解释；导致；报帐；认为；把…视为",
    "example": "My salary is paid into my bank account.",
    "exampleCn": "我的工资直接存入我的银行账户。"
   },
   {
    "word": "main",
    "phonetic": "meɪn",
    "pos": "n.",
    "meaning": "主要部分，要点；体力；[材]总管道；主要的，最重要的；全力的",
    "example": "The report found that many of Yorkshire’s water mains needed replacing.",
    "exampleCn": "报告中说约克郡的很多自来水总管道需要更换。"
   },
   {
    "word": "repertoire",
    "phonetic": "'rɛpɚ'twɑr",
    "pos": "n.",
    "meaning": "全部剧目，全部节目",
    "example": "the behavioural repertoire of infants",
    "exampleCn": "婴幼儿的行为能力"
   },
   {
    "word": "void",
    "phonetic": "vɔɪd",
    "pos": "adj.",
    "meaning": "空的；无效的；无人的；空虚；空间；空隙；使无效；排放",
    "example": "Her eyes were void of all expression.",
    "exampleCn": "她的眼神一片茫然。"
   },
   {
    "word": "regarding",
    "phonetic": "rɪ'ɡɑrdɪŋ",
    "pos": "prep.",
    "meaning": "关于，至于",
    "example": "Regarding your recent inquiry, I have enclosed a copy of our new brochure.",
    "exampleCn": "关于你最近的咨询，我随信附上一本我们最新的手册。"
   },
   {
    "word": "contract",
    "phonetic": "'kɑntrækt",
    "pos": "vi",
    "meaning": "收缩；感染；订约；感染；订约；使缩短；[经]合同；婚约",
    "example": "Employees who refuse to relocate are in breach of contract (= have done something not allowed by their contracts ) .",
    "exampleCn": "员工拒绝调动岗位是违反合约的。"
   },
   {
    "word": "resolve",
    "phonetic": "rɪ'zɑlv",
    "pos": "vt",
    "meaning": "决定；溶解；使…分解；决心要做…；解决；决心；分解；坚决；决定要做的事",
    "example": "Barnet was desperate for money to resolve his financial problems.",
    "exampleCn": "巴尼特急需钱来解决他的经济问题。"
   },
   {
    "word": "virtuous",
    "phonetic": "'vɝtʃuəs",
    "pos": "adj.",
    "meaning": "善良的；有道德的；贞洁的；正直的；有效力的",
    "example": "a virtuous man",
    "exampleCn": "品行端正的男子"
   },
   {
    "word": "incredible",
    "phonetic": "ɪn'krɛdəbl",
    "pos": "adj.",
    "meaning": "难以置信的，惊人的",
    "example": "It’s incredible that he survived the fall.",
    "exampleCn": "他跌下去竟然能够生还，真不可思议。"
   },
   {
    "word": "compensate",
    "phonetic": "'kɑmpɛnset",
    "pos": "vi",
    "meaning": "补偿，赔偿；抵消；补偿，赔偿；付报酬",
    "example": "Because my left eye is so weak, my right eye has to work harder to compensate.",
    "exampleCn": "因为我左眼视力差，右眼就要辛苦点来弥补一下。"
   },
   {
    "word": "hysterical",
    "phonetic": "hɪ'stɛrɪkl",
    "pos": "adj.",
    "meaning": "歇斯底里的；异常兴奋的",
    "example": "Janet became hysterical and began screaming.",
    "exampleCn": "珍妮特歇斯底里起来，开始尖叫。"
   },
   {
    "word": "hug",
    "phonetic": "hʌɡ",
    "pos": "vt",
    "meaning": "拥抱；紧抱；抱有，坚持；拥抱；紧抱在一起；挤在一起；拥抱；紧抱；固执",
    "example": "We stood there crying and hugging each other.",
    "exampleCn": "我们站在那里哭着互相拥抱。"
   },
   {
    "word": "inhabit",
    "phonetic": "ɪn'hæbɪt",
    "pos": "vt",
    "meaning": "栖息；居住于；占据；（古）居住；栖息",
    "example": "The woods are inhabited by many wild animals.",
    "exampleCn": "很多野生动物栖居在这片森林里。"
   },
   {
    "word": "tweezers",
    "phonetic": "'twizɚz",
    "pos": "n.",
    "meaning": "镊子",
    "example": "She was plucking her eyebrows with a pair of tweezers .",
    "exampleCn": "她正拿着一把小镊子在拔眉毛。"
   },
   {
    "word": "oversee",
    "phonetic": "'ovɚ'si",
    "pos": "vt",
    "meaning": "监督；审查；俯瞰；偷看到，无意中看到",
    "example": "A team leader was appointed to oversee the project.",
    "exampleCn": "任命了一位组长来监管该工程。"
   },
   {
    "word": "lateral",
    "phonetic": "'lætərəl",
    "pos": "adj.",
    "meaning": "[解剖]侧面的，横向的；侧部；[语]边音",
    "example": "The wall is weak and requires lateral support.",
    "exampleCn": "墙体不坚固，需要从侧面加以支撑。"
   },
   {
    "word": "scroll",
    "phonetic": "skrol",
    "pos": "n.",
    "meaning": "卷轴，画卷；名册；卷形物",
    "example": "Ancient scrolls were found in caves by the Dead Sea.",
    "exampleCn": "在死海边的洞穴里发现了古代的卷轴。"
   },
   {
    "word": "outset",
    "phonetic": "'aʊtsɛt",
    "pos": "n.",
    "meaning": "开始；开端",
    "example": "It was clear from the outset that there were going to be problems.",
    "exampleCn": "从一开始就很清楚会有问题出现的。"
   },
   {
    "word": "locker",
    "phonetic": "'lɑkɚ",
    "pos": "n.",
    "meaning": "柜，箱；上锁的人；有锁的橱柜；锁扣装置；有锁的存物柜",
    "example": "a meat locker",
    "exampleCn": "肉类冷藏间"
   },
   {
    "word": "imperial",
    "phonetic": "ɪm'pɪrɪəl",
    "pos": "adj.",
    "meaning": "[纸]帝国的；皇帝的；至高无上的；威严的",
    "example": "Britain’s imperial expansion in the 19th century",
    "exampleCn": "19世纪英帝国的扩张"
   },
   {
    "word": "upkeep",
    "phonetic": "'ʌpkip",
    "pos": "n.",
    "meaning": "维持；维修费；[经]保养",
    "example": "Poorer people find it hard to pay for their pet’s upkeep.",
    "exampleCn": "经济不宽裕的人难以负担养宠物的开销。"
   },
   {
    "word": "voluntary",
    "phonetic": "'vɑləntɛri",
    "pos": "adj.",
    "meaning": "自愿的；志愿的；自发的；故意的",
    "example": "Workers are being encouraged to take voluntary redundancy.",
    "exampleCn": "工人被鼓励主动离职。"
   },
   {
    "word": "relentless",
    "phonetic": "rɪ'lɛntləs",
    "pos": "adj.",
    "meaning": "无情的；残酷的；不间断的",
    "example": "her relentless determination to succeed",
    "exampleCn": "她要成功的坚定决心"
   },
   {
    "word": "glide",
    "phonetic": "ɡlaɪd",
    "pos": "n.",
    "meaning": "滑翔；滑行；滑移；滑音；滑翔；滑行；悄悄地走；消逝",
    "example": "Waiters glide between tightly packed tables bearing trays of pasta.",
    "exampleCn": "侍者们托着一盘盘的意大利面食在拥挤的餐桌间自如穿行。"
   },
   {
    "word": "splendid",
    "phonetic": "'splɛndɪd",
    "pos": "adj.",
    "meaning": "辉煌的；灿烂的；极好的；杰出的",
    "example": "All the rooms have splendid views.",
    "exampleCn": "所有的房间都能看到漂亮的景致。"
   },
   {
    "word": "freak",
    "phonetic": "friːk",
    "pos": "n.",
    "meaning": "怪人，怪事；畸形人；反复无常；奇异的，反常的",
    "example": "These glasses make me look like a freak.",
    "exampleCn": "我戴这副眼镜看上去像个怪人。"
   },
   {
    "word": "dynamic",
    "phonetic": "daɪ'næmɪk",
    "pos": "adj.",
    "meaning": "[力]动态的；动力的；动力学的；有活力的；动态；[力]动力",
    "example": "dynamic and ambitious people",
    "exampleCn": "精力充沛且雄心勃勃的人"
   },
   {
    "word": "cardinal",
    "phonetic": "'kɑrdɪnl",
    "pos": "adj.",
    "meaning": "主要的，基本的；深红色的；红衣主教；枢机主教；鲜红色",
    "example": "Having clean hands is one of the cardinal rules when preparing food.",
    "exampleCn": "双手洁净是准备食物时的一项最基本要求。"
   },
   {
    "word": "lace",
    "phonetic": "les",
    "pos": "n.",
    "meaning": "[纺]花边；鞋带；饰带；少量烈酒",
    "example": "a handkerchief trimmed with lace",
    "exampleCn": "饰有蕾丝花边的手绢"
   },
   {
    "word": "derelict",
    "phonetic": "'dɛrəlɪkt",
    "pos": "adj.",
    "meaning": "玩忽职守的；无主的；被抛弃了的；遗弃物；玩忽职守者；被遗弃的人",
    "example": "Her body was found dumped in a derelict warehouse less than a mile from her home.",
    "exampleCn": "她的尸体被发现丢在离她家不到一英里的一座废弃的仓库里。"
   },
   {
    "word": "viable",
    "phonetic": "",
    "pos": "adj.",
    "meaning": "可行的；能养活的；能生育的",
    "example": "viable seeds",
    "exampleCn": "可存活的种子"
   },
   {
    "word": "fusion",
    "phonetic": "'fjʊʒən",
    "pos": "n.",
    "meaning": "融合；[物]熔化；熔接；融合物",
    "example": "His previous fusions of jazz, pop and African melodies have proved highly successful.",
    "exampleCn": "他先前对爵士乐、流行乐和非洲音乐旋律的融合已经证明是非常成功的。"
   },
   {
    "word": "recede",
    "phonetic": "rɪ'sid",
    "pos": "vi",
    "meaning": "后退；减弱；归还",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "prophecy",
    "phonetic": "'prɑfəsi",
    "pos": "n.",
    "meaning": "预言；预言书；预言能力",
    "example": "She had the gift of prophecy.",
    "exampleCn": "她有预言的天赋。"
   },
   {
    "word": "ego",
    "phonetic": "'iɡo",
    "pos": "n.",
    "meaning": "[心理]自我；自负；自我意识",
    "example": "That promotion really boosted her ego (= made her feel better about herself ).",
    "exampleCn": "那次晋升确实增强了她的自信心。"
   },
   {
    "word": "muscular",
    "phonetic": "'mʌskjəlɚ",
    "pos": "adj.",
    "meaning": "肌肉的；肌肉发达的；强健的",
    "example": "She was fast and strong, with a slender, muscular body.",
    "exampleCn": "她动作敏捷，身体强壮，身材苗条，肌肉结实。"
   },
   {
    "word": "exterior",
    "phonetic": "ɪk'stɪrɪɚ",
    "pos": "adj.",
    "meaning": "外部的；表面的；外在的；外部；表面；外型；外貌",
    "example": "The dome is tiled on the exterior.",
    "exampleCn": "穹顶表面铺了瓦片。"
   },
   {
    "word": "accommodate",
    "phonetic": "ə'kɑmədet",
    "pos": "vt",
    "meaning": "容纳；使适应；供应；调解；适应；调解",
    "example": "The island was used to accommodate child refugees.",
    "exampleCn": "该岛用于收容儿童难民。"
   },
   {
    "word": "violate",
    "phonetic": "'vaɪəlet",
    "pos": "vt",
    "meaning": "违反；侵犯，妨碍；亵渎",
    "example": "34 protesters were arrested for violating criminal law.",
    "exampleCn": "34名抗议者因违反刑法而被逮捕。"
   },
   {
    "word": "jealous",
    "phonetic": "'dʒɛləs",
    "pos": "adj.",
    "meaning": "妒忌的；猜疑的；唯恐失去的；戒备的",
    "example": "She got insanely jealous and there was a terrible fight.",
    "exampleCn": "她变得过分地猜忌，接着是一场激烈的打斗。"
   },
   {
    "word": "initiate",
    "phonetic": "ɪ'nɪʃɪet",
    "pos": "vt",
    "meaning": "开始，创始；发起；使初步了解；开始；新加入者，接受初步知识者",
    "example": "They have decided to initiate legal proceedings against the newspaper.",
    "exampleCn": "他们决定向该报提起法律诉讼。"
   },
   {
    "word": "concrete",
    "phonetic": "'kɑŋkrit",
    "pos": "adj.",
    "meaning": "[建]混凝土的；实在的，具体的；有形的；凝结；具体物；凝结物",
    "example": "The posts have to be set in concrete.",
    "exampleCn": "这些柱子必须固定在混凝土中。"
   },
   {
    "word": "unrest",
    "phonetic": "ʌn'rɛst",
    "pos": "n.",
    "meaning": "不安；动荡的局面；不安的状态",
    "example": "There is growing unrest throughout the country.",
    "exampleCn": "全国各地日益动荡不安。"
   },
   {
    "word": "apply",
    "phonetic": "ə'plaɪ",
    "pos": "vt",
    "meaning": "申请；涂，敷；应用；申请；涂，敷；适用；请求",
    "example": "We need to apply for planning permission to build a garage.",
    "exampleCn": "我们建车库需要申请规划许可。"
   },
   {
    "word": "havoc",
    "phonetic": "'hævək",
    "pos": "n.",
    "meaning": "大破坏；浩劫；蹂躏；损毁",
    "example": "policies that would wreak havoc on the country’s economy",
    "exampleCn": "会危害该国经济的政策"
   },
   {
    "word": "poster",
    "phonetic": "'postɚ",
    "pos": "n.",
    "meaning": "海报，广告；[印刷]招贴",
    "example": "A team of volunteers were putting up posters .",
    "exampleCn": "一队志愿者正在张贴海报。"
   },
   {
    "word": "entangle",
    "phonetic": "ɪn'tæŋɡl",
    "pos": "vt",
    "meaning": "使纠缠；卷入；使混乱",
    "example": "The blade of the oar had entangled itself with the strap of her bag.",
    "exampleCn": "桨叶和她包的带子紧紧缠在了一起。"
   },
   {
    "word": "purge",
    "phonetic": "pɝdʒ",
    "pos": "vi",
    "meaning": "净化；通便；净化；[机]清洗；通便；净化；泻药",
    "example": "Anorexics may overeat before purging themselves or vomiting.",
    "exampleCn": "厌食症患者会在暴饮暴食之后服用泻药或者把吃下去的东西呕吐出来。"
   },
   {
    "word": "sponsor",
    "phonetic": "'spɑnsɚ",
    "pos": "n.",
    "meaning": "赞助者；主办者；保证人；赞助；发起",
    "example": "Dozens of companies, including Hewlett-Packard, are sponsoring the event.",
    "exampleCn": "包括惠普在内的许多公司都在赞助这项赛事。"
   },
   {
    "word": "title",
    "phonetic": "'taɪtl",
    "pos": "n.",
    "meaning": "冠军；[计][图情]标题；头衔；权利；字幕；加标题于；赋予头衔；把…称为；冠军的；[计][图情]标题的；头衔的",
    "example": "\"Patience and Sarah\" was first published in 1969 under the title \"A Place for Us.\"",
    "exampleCn": "《耐心与萨拉》于1969年以《我们的地方》为书名首次出版。"
   },
   {
    "word": "steamer",
    "phonetic": "'stimɚ",
    "pos": "n.",
    "meaning": "轮船；蒸汽机；蒸笼",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "scorn",
    "phonetic": "skɔrn",
    "pos": "n.",
    "meaning": "轻蔑；嘲笑；藐视的对象；轻蔑；藐视；不屑做；表示轻蔑；表示鄙视",
    "example": "Researchers greeted the proposal with scorn.",
    "exampleCn": "研究者们对这个提议报以轻蔑的态度。"
   },
   {
    "word": "inertia",
    "phonetic": "ɪ'nɝʃə",
    "pos": "n.",
    "meaning": "[力]惯性；[化学]惰性，迟钝；不活动",
    "example": "political inertia",
    "exampleCn": "政治上的保守"
   },
   {
    "word": "audition",
    "phonetic": "ɔ'dɪʃən",
    "pos": "n.",
    "meaning": "听力，[生理]听觉；试听",
    "example": "...an audition for a Broadway musical.",
    "exampleCn": "…一部百老汇歌舞剧的试演。"
   },
   {
    "word": "meadow",
    "phonetic": "'mɛdo",
    "pos": "n.",
    "meaning": "[畜牧]草地；牧场",
    "example": "The meadow has been ploughed up.",
    "exampleCn": "那片草地已用犁翻过。"
   },
   {
    "word": "pamper",
    "phonetic": "'pæmpɚ",
    "pos": "vt",
    "meaning": "纵容；使…过量；给…吃得过多",
    "example": "She spent her childhood as the pampered daughter of a wealthy family.",
    "exampleCn": "她出身于一个富裕家庭，从小娇生惯养。"
   },
   {
    "word": "memorandum",
    "phonetic": ",mɛmə'rændəm",
    "pos": "n.",
    "meaning": "备忘录；便笺",
    "example": "...a memorandum from the Department of Defense on its role.",
    "exampleCn": "…一份来自国防部的有关其角色的备忘录。"
   },
   {
    "word": "reluctant",
    "phonetic": "rɪ'lʌktənt",
    "pos": "adj.",
    "meaning": "不情愿的；勉强的；顽抗的",
    "example": "She gave a reluctant smile.",
    "exampleCn": "她勉强笑了笑。"
   },
   {
    "word": "ragged",
    "phonetic": "'ræɡɪd",
    "pos": "adj.",
    "meaning": "衣衫褴褛的；粗糙的；参差不齐的；锯齿状的；刺耳的；不规则的",
    "example": "Crowds of ragged children played among the rocks.",
    "exampleCn": "一群群破衣烂衫的孩子在岩石间玩耍。"
   },
   {
    "word": "tentacle",
    "phonetic": "'tɛntəkl",
    "pos": "n.",
    "meaning": "触手，触须，[动]触角",
    "example": "Free speech is being gradually eroded year after year by new tentacles of government control.",
    "exampleCn": "言论自由正被政府控制的新触角逐渐侵蚀。"
   },
   {
    "word": "territorial",
    "phonetic": ",tɛrə'tɔrɪəl",
    "pos": "adj.",
    "meaning": "领土的；区域的；土地的；地方的",
    "example": "a territorial dispute",
    "exampleCn": "领土争端"
   },
   {
    "word": "album",
    "phonetic": "'ælbəm",
    "pos": "n.",
    "meaning": "集邮册；相片册",
    "example": "a photograph album",
    "exampleCn": "相册"
   },
   {
    "word": "restore",
    "phonetic": "rɪ'stɔr",
    "pos": "vt",
    "meaning": "恢复；修复；归还；恢复；还原",
    "example": "She was hoping that the Mediterranean climate would restore her to full health.",
    "exampleCn": "她希望地中海的气候能使她的身体完全复原。"
   },
   {
    "word": "creep",
    "phonetic": "krip",
    "pos": "vi",
    "meaning": "爬行；蔓延；慢慢地移动；起鸡皮疙瘩；爬行；毛骨悚然的感觉；谄媚者",
    "example": "He crept back up the stairs, trying to avoid the ones that creaked.",
    "exampleCn": "他蹑手蹑脚地回楼上，尽量避开那些嘎吱作响的梯级。"
   },
   {
    "word": "make",
    "phonetic": "mek",
    "pos": "vt",
    "meaning": "使得；进行；布置，准备，整理；制造；认为；获得；形成；安排；引起；构成；开始；前进；增大；被制造；制造；构造；[心理]性情",
    "example": "I’m going to show you how to make a box for your tools.",
    "exampleCn": "我来教你怎么做一个箱子存放工具。"
   },
   {
    "word": "attach",
    "phonetic": "ə'tætʃ",
    "pos": "vt",
    "meaning": "使依附；贴上；系上；使依恋；附加；附属；伴随",
    "example": "It’s easy to become attached to the children you work with.",
    "exampleCn": "你很容易就会喜欢上工作中接触到的孩子。"
   },
   {
    "word": "galaxy",
    "phonetic": "'ɡæləksi",
    "pos": "n.",
    "meaning": "银河；[天]星系；银河系；一群显赫的人",
    "example": "Astronomers have discovered a distant galaxy.",
    "exampleCn": "天文学家们发现了一个遥远的星系。"
   },
   {
    "word": "encounter",
    "phonetic": "ɪn'kaʊntɚ",
    "pos": "vt",
    "meaning": "遭遇，邂逅；遇到；遭遇，偶然碰见；遭遇；偶然相遇",
    "example": "The doctor had encountered several similar cases in the past.",
    "exampleCn": "那位医生过去曾碰到过好几个类似病例。"
   },
   {
    "word": "suitcase",
    "phonetic": "'sutkes",
    "pos": "n.",
    "meaning": "[轻]手提箱；衣箱",
    "example": "It did not take Andrew long to pack a suitcase.",
    "exampleCn": "安德鲁没有用多长时间就整理好了手提箱。"
   },
   {
    "word": "stall",
    "phonetic": "stɔl",
    "pos": "n.",
    "meaning": "[贸易]货摊；畜栏；托辞；停止，停转；拖延；拖延；使停转；使陷于泥中",
    "example": "a market stall",
    "exampleCn": "市场摊位"
   },
   {
    "word": "staff",
    "phonetic": "stæf",
    "pos": "n.",
    "meaning": "职员；参谋；棒；支撑",
    "example": "10 staff were allocated to the task.",
    "exampleCn": "10名员工被分派做这项任务。"
   },
   {
    "word": "curtail",
    "phonetic": "kɚ'tel",
    "pos": "vt",
    "meaning": "缩减；剪短；剥夺…特权等",
    "example": "The new law will curtail police powers.",
    "exampleCn": "这条新法规将削弱警方的权力。"
   },
   {
    "word": "wail",
    "phonetic": "wel",
    "pos": "vi",
    "meaning": "哀号；悲叹；哀号；悲叹；恸哭声",
    "example": "‘But what shall I do?’ Bernard wailed.",
    "exampleCn": "“但我该怎么办呢？”伯纳德哭喊道。"
   },
   {
    "word": "thereby",
    "phonetic": ",ðɛr'baɪ",
    "pos": "adv.",
    "meaning": "从而，因此；在那附近；在那方面",
    "example": "This gives you the opportunity to pray for and bless the other thereby blessing yourself.",
    "exampleCn": "它其实是给了你一个机会，去为他人祈祷和祝福，从而赐福给你自己。"
   },
   {
    "word": "mediocre",
    "phonetic": ",midɪ'okɚ",
    "pos": "adj.",
    "meaning": "普通的；平凡的；中等的",
    "example": "I thought the book was pretty mediocre.",
    "exampleCn": "我认为这本书非常一般。"
   },
   {
    "word": "valley",
    "phonetic": "'væli",
    "pos": "n.",
    "meaning": "[地理]山谷；流域；溪谷",
    "example": "the San Fernando Valley",
    "exampleCn": "圣费尔南多山谷"
   },
   {
    "word": "tolerance",
    "phonetic": "'tɑlərəns",
    "pos": "n.",
    "meaning": "[机]公差；宽容；容忍；公差",
    "example": "...his tolerance and understanding of diverse human nature.",
    "exampleCn": "…他对各种人性的宽容和理解。"
   },
   {
    "word": "renowned",
    "phonetic": "ri'naund",
    "pos": "adj.",
    "meaning": "著名的；有声望的",
    "example": "The area is renowned for its Romanesque churches.",
    "exampleCn": "这个地区以其罗马式教堂闻名。"
   },
   {
    "word": "conspiracy",
    "phonetic": "kən'spɪrəsi",
    "pos": "n.",
    "meaning": "阴谋；共谋；阴谋集团",
    "example": "There were many conspiracy theories (= beliefs that something is the result of a conspiracy ) surrounding Princess Diana’s death.",
    "exampleCn": "围绕戴安娜王妃之死有许多阴谋论。"
   },
   {
    "word": "protocol",
    "phonetic": "'protə'kɔl",
    "pos": "n.",
    "meaning": "协议；草案；礼仪；拟定；拟定",
    "example": "a breach of diplomatic protocol",
    "exampleCn": "违反外交礼节"
   },
   {
    "word": "picnic",
    "phonetic": "'pɪknɪk",
    "pos": "n.",
    "meaning": "野餐",
    "example": "We decided to have a picnic down by the lake.",
    "exampleCn": "我们决定在湖边野餐。"
   },
   {
    "word": "dazzle",
    "phonetic": "'dæzl",
    "pos": "n.",
    "meaning": "耀眼的光；灿烂；眼花缭乱；炫耀",
    "example": "a deer dazzled by the headlights",
    "exampleCn": "被车头灯光照得目眩的鹿"
   },
   {
    "word": "malnutrition",
    "phonetic": "'mælnʊ'trɪʃən",
    "pos": "n.",
    "meaning": "营养失调，[医]营养不良",
    "example": "refugees suffering from malnutrition",
    "exampleCn": "营养不良的难民"
   },
   {
    "word": "plight",
    "phonetic": "plaɪt",
    "pos": "n.",
    "meaning": "困境；境况；誓约；保证；约定",
    "example": "the country’s economic plight",
    "exampleCn": "该国的经济困境"
   },
   {
    "word": "afflict",
    "phonetic": "ə'flɪkt",
    "pos": "vt",
    "meaning": "折磨；使痛苦；使苦恼",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "detergent",
    "phonetic": "dɪ'tɝdʒənt",
    "pos": "n.",
    "meaning": "清洁剂；[化工]去垢剂",
    "example": "...a brand of detergent.",
    "exampleCn": "…一种品牌的清洁剂。"
   },
   {
    "word": "engross",
    "phonetic": "ɪn'ɡros",
    "pos": "vt",
    "meaning": "使全神贯注；用大字体书写；正式写成（决议等）；独占；吸引",
    "example": "The scene was stunning, and for a time engrossed all our attention.",
    "exampleCn": "景色非常美丽，一时间把我们都完全吸引住了。"
   },
   {
    "word": "score",
    "phonetic": "skɔ",
    "pos": "n.",
    "meaning": "分数；二十；配乐；[木]刻痕；获得；评价；划线，刻划；把…记下；得分；记分；[木]刻痕",
    "example": "a musical score",
    "exampleCn": "乐谱"
   },
   {
    "word": "awkward",
    "phonetic": "'ɔkwɚd",
    "pos": "adj.",
    "meaning": "尴尬的；笨拙的；棘手的；不合适的",
    "example": "I hoped he would stop asking awkward questions .",
    "exampleCn": "我希望他不要再问令人难堪的问题。"
   },
   {
    "word": "preserve",
    "phonetic": "prɪ'zɝv",
    "pos": "vt",
    "meaning": "保存；保护；维持；腌；禁猎；保护区；禁猎地；加工成的食品",
    "example": "We must encourage the planting of new trees and preserve our existing woodlands.",
    "exampleCn": "我们必须鼓励栽种新树木，同时也要保护现有的林地。"
   },
   {
    "word": "fruition",
    "phonetic": "fru'ɪʃən",
    "pos": "n.",
    "meaning": "完成，成就；结果实",
    "example": "Some of the current FSA investigations are expected to reach fruition in the next six months, one person said.",
    "exampleCn": "一人说，目前正在进行的部分金融服务管理局调查有望在未来六个月完成。"
   },
   {
    "word": "cane",
    "phonetic": "ken",
    "pos": "n.",
    "meaning": "手杖；藤条；细长的茎",
    "example": "Children knew that if they misbehaved they would get the cane .",
    "exampleCn": "孩子们知道，如果调皮捣蛋的话就会挨藤条。"
   },
   {
    "word": "inhibit",
    "phonetic": "ɪn'hɪbɪt",
    "pos": "vt",
    "meaning": "抑制；禁止",
    "example": "An unhappy family life may inhibit children’s learning.",
    "exampleCn": "不幸福的家庭生活可能会阻碍儿童的学习。"
   },
   {
    "word": "pilot",
    "phonetic": "'paɪlət",
    "pos": "n.",
    "meaning": "[航]飞行员；[水运]领航员；[航]驾驶；[水运]领航；试用",
    "example": "an airline pilot",
    "exampleCn": "航空公司飞行员"
   },
   {
    "word": "logic",
    "phonetic": "'lɑdʒɪk",
    "pos": "n.",
    "meaning": "逻辑，逻辑学，条理性",
    "example": "There isa certain logicin their choice of architect.",
    "exampleCn": "他们对建筑师的选择是有一定道理的。"
   },
   {
    "word": "singular",
    "phonetic": "'sɪŋɡjəlɚ",
    "pos": "adj.",
    "meaning": "单数的；单一的；非凡的；[数]异常的",
    "example": "He showed a singular lack of tact in the way he handled the situation.",
    "exampleCn": "他处理这局面的方式显得极不得体。"
   },
   {
    "word": "hell",
    "phonetic": "hɛl",
    "pos": "n.",
    "meaning": "地狱；究竟（作加强语气词）；训斥；黑暗势力；过放荡生活；飞驰；该死；见鬼（表示惊奇、烦恼、厌恶、恼怒、失望等）",
    "example": "War is hell.",
    "exampleCn": "战争是人间地狱。"
   },
   {
    "word": "practical",
    "phonetic": "'præktɪkl",
    "pos": "adj.",
    "meaning": "实际的；实用性的",
    "example": "Candidates should have training and practical experience in basic electronics.",
    "exampleCn": "应征者应该具备基础电子学方面的培训和实践经验。"
   },
   {
    "word": "shuttle",
    "phonetic": "'ʃʌtl",
    "pos": "n.",
    "meaning": "[航]航天飞机；穿梭；[纺]梭子；穿梭班机、公共汽车等",
    "example": "He took the Washington - New York shuttle.",
    "exampleCn": "他乘坐华盛顿－纽约的往返班机。"
   },
   {
    "word": "offset",
    "phonetic": ",ɔf'sɛt",
    "pos": "n.",
    "meaning": "抵消，补偿；平版印刷；支管；抵消；弥补；用平版印刷术印刷",
    "example": "“By investing in it, we can count it as an offset,” she said.",
    "exampleCn": "她说：“通过对其投资，我们可以把它视为一项补偿。”"
   },
   {
    "word": "destiny",
    "phonetic": "'dɛstəni",
    "pos": "n.",
    "meaning": "命运，定数，天命",
    "example": "She always had a strong sense of destiny .",
    "exampleCn": "她向来很相信天意。"
   },
   {
    "word": "disorder",
    "phonetic": "dɪs'ɔrdɚ",
    "pos": "n.",
    "meaning": "混乱；骚乱；[医]使失调；[电子]扰乱",
    "example": "severe eating disorders such as bulimia and anorexia",
    "exampleCn": "像贪食症和厌食症这类严重的进食障碍"
   },
   {
    "word": "denial",
    "phonetic": "dɪ'naɪəl",
    "pos": "n.",
    "meaning": "否认；拒绝；节制；背弃",
    "example": "It seems clear that despite official denials, differences of opinion lay behind the ambassador's decision to quit.",
    "exampleCn": "很清楚，尽管官方否认，人们对大使决定辞职还是有不同看法。"
   },
   {
    "word": "spin",
    "phonetic": "spɪn",
    "pos": "vi",
    "meaning": "[物]旋转；纺纱；吐丝；晕眩；[物]使旋转；纺纱；编造；结网；[物]旋转；疾驰",
    "example": "She spun a story about a trip to Athens to meet one of the authors.",
    "exampleCn": "她编了一个故事，说是去雅典见了其中的一位作者。"
   },
   {
    "word": "onset",
    "phonetic": "'ɑnsɛt",
    "pos": "n.",
    "meaning": "开始，着手；发作；攻击，进攻",
    "example": "the onset of winter",
    "exampleCn": "冬天的来临"
   },
   {
    "word": "native",
    "phonetic": "'netɪv",
    "pos": "adj.",
    "meaning": "本国的；[生物]土著的；天然的；与生俱来的；天赋的；本地人；土产；当地居民",
    "example": "her native wit",
    "exampleCn": "她天生的机智风趣"
   },
   {
    "word": "overwrought",
    "phonetic": ",ovɚ'rɔt",
    "pos": "adj.",
    "meaning": "过分劳累的，过度兴奋的",
    "example": "Clara was tired and overwrought after all the problems of the last few days.",
    "exampleCn": "经历了过去几天的重重困难之后，克拉拉既疲惫又紧张。"
   },
   {
    "word": "roast",
    "phonetic": "rost",
    "pos": "vt",
    "meaning": "烤，焙；烘，烘烤；暴露于某种热力下以得温暖；烤；烘；烘烤的；烤过的；烤肉；烘烤",
    "example": "Are you going to roast the chicken?",
    "exampleCn": "这鸡你是准备烤的吗？"
   },
   {
    "word": "survey",
    "phonetic": "ˈsɝˌve; (for v.) sɝˈve",
    "pos": "n.",
    "meaning": "调查；测量；审视；纵览；调查；[测][油气]勘测；俯瞰",
    "example": "a survey of modern English literature",
    "exampleCn": "现代英国文学概论"
   },
   {
    "word": "profile",
    "phonetic": "'profaɪl",
    "pos": "n.",
    "meaning": "侧面；轮廓；外形；[建][地质]剖面",
    "example": "Dani has a lovely profile.",
    "exampleCn": "达尼的侧面轮廓很好看。"
   },
   {
    "word": "offspring",
    "phonetic": "'ɔfsprɪŋ",
    "pos": "n.",
    "meaning": "[生物]后代，子孙；产物",
    "example": "a lion and its offspring",
    "exampleCn": "一头狮子和它的幼崽"
   },
   {
    "word": "practicable",
    "phonetic": "'præktɪkəbl",
    "pos": "adj.",
    "meaning": "可用的；行得通的；可实行的",
    "example": "The only practicable course of action is to sell the company.",
    "exampleCn": "唯一可行的做法是把公司卖掉。"
   },
   {
    "word": "discharge",
    "phonetic": "dɪs'tʃɑrdʒ",
    "pos": "vt",
    "meaning": "[劳经]解雇；卸下；放出；免除；[环境]排放；卸货；[流]流出；[环境]排放；卸货；[劳经]解雇",
    "example": "Hospitals now tend to discharge patients earlier than in the past.",
    "exampleCn": "与过去相比，现在医院更趋向于让病人早些出院。"
   },
   {
    "word": "chorus",
    "phonetic": "'kɔrəs",
    "pos": "n.",
    "meaning": "合唱队；齐声；歌舞队；合唱；异口同声地说；合唱；异口同声地说话",
    "example": "I sing with the university chorus.",
    "exampleCn": "我在大学合唱队里唱歌。"
   },
   {
    "word": "statute",
    "phonetic": "'stætʃut",
    "pos": "n.",
    "meaning": "[法]法规；法令；条例",
    "example": "Protection for the consumer is laid down by statute (= established by law ) .",
    "exampleCn": "保障消费者权益已有法律明文规定。"
   },
   {
    "word": "latitude",
    "phonetic": "'lætɪtud",
    "pos": "n.",
    "meaning": "[地理]纬度；界限；活动范围",
    "example": "The birds breed in northern latitudes.",
    "exampleCn": "这些鸟在北纬地区繁殖。"
   },
   {
    "word": "rot",
    "phonetic": "rɑt",
    "pos": "n.",
    "meaning": "[植保]腐烂；腐败；腐坏；[植保]腐烂；腐败；堕落；[植保]使腐烂；[木]使腐朽；使堕落；（表示厌恶、蔑视、烦恼等）胡说；糟了",
    "example": "Candy will rot your teeth.",
    "exampleCn": "吃糖会腐蚀牙齿。"
   },
   {
    "word": "phase",
    "phonetic": "fez",
    "pos": "n.",
    "meaning": "[物]相；阶段；[天]位相",
    "example": "a new drug that is in the experimental phase",
    "exampleCn": "处于试验阶段的一种新药"
   },
   {
    "word": "ruffle",
    "phonetic": "'rʌfl",
    "pos": "vt",
    "meaning": "弄皱；触怒；扰乱；迅速翻动；起皱；烦恼；连续地轻敲；皱褶；生气；混乱；连续轻敲声",
    "example": "He ruffled her hair affectionately.",
    "exampleCn": "他亲昵地拨弄她的头发。"
   },
   {
    "word": "diverse",
    "phonetic": "daɪ'vɝs",
    "pos": "adj.",
    "meaning": "不同的；多种多样的；变化多的",
    "example": "subjects as diverse as pop music and archaeology",
    "exampleCn": "像流行音乐和考古学这样各不相同的学科"
   },
   {
    "word": "wicked",
    "phonetic": "'wɪkɪd",
    "pos": "adj.",
    "meaning": "邪恶的；恶劣的；不道德的；顽皮的",
    "example": "the wicked stepmother in ‘Hansel and Gretel’",
    "exampleCn": "《糖果屋》中那个恶毒的继母"
   },
   {
    "word": "omit",
    "phonetic": "ə'mɪt",
    "pos": "vt",
    "meaning": "[数]省略；遗漏；删除；疏忽",
    "example": "Please don’t omit any details, no matter how trivial they may seem.",
    "exampleCn": "请不要忽略任何细节，不管它多细小。"
   },
   {
    "word": "diploma",
    "phonetic": "dɪ'plomə",
    "pos": "n.",
    "meaning": "毕业证书，学位证书；公文，文书；奖状",
    "example": "I’m hoping to get my teaching diploma this year.",
    "exampleCn": "我希望今年能拿到教师证书。"
   },
   {
    "word": "crack",
    "phonetic": "kræk",
    "pos": "vt",
    "meaning": "使破裂；打开；变声；破裂；爆裂；[高分子]裂缝；声变；噼啪声；最好的；高明的",
    "example": "She opened the door a crack and peeped into the room.",
    "exampleCn": "她把门打开一条缝，往房间里偷看。"
   },
   {
    "word": "remittance",
    "phonetic": "rɪ'mɪtns",
    "pos": "n.",
    "meaning": "汇款(海外)，汇款额",
    "example": "Please enclose your remittance, making checks payable to Valley Technology Services.",
    "exampleCn": "请随信附上您的汇款，支票收款方为瓦利科技服务公司。"
   },
   {
    "word": "vibrate",
    "phonetic": "vaɪ'breɪt",
    "pos": "vi",
    "meaning": "振动；颤动；摇摆；踌躇；使振动；使颤动",
    "example": "The floor was vibrating to the beat of the music.",
    "exampleCn": "地板随着音乐的节奏在颤动。"
   },
   {
    "word": "controversy",
    "phonetic": "ˈkɑːntrəvɜːrsi",
    "pos": "n.",
    "meaning": "争论；论战；辩论",
    "example": "a political controversy",
    "exampleCn": "政治争议"
   },
   {
    "word": "microbe",
    "phonetic": "'maɪkrob",
    "pos": "n.",
    "meaning": "细菌，[微]微生物",
    "example": "...a type of bacteria that include the microbes responsible for tuberculosis and leprosy.",
    "exampleCn": "…包括引起结核病和麻风病的微生物在内的一类细菌。"
   },
   {
    "word": "frustrate",
    "phonetic": "'frʌstret",
    "pos": "vt",
    "meaning": "挫败；阻挠；使感到灰心；失败；受挫；挫败的；无益的",
    "example": "Their attempts to speak to him were frustrated by the guards.",
    "exampleCn": "他们想跟他说话，但被警卫拦住了。"
   },
   {
    "word": "omen",
    "phonetic": "'omən",
    "pos": "n.",
    "meaning": "预兆；征兆；预示；有…的前兆；预告",
    "example": "The car won’t start. Do you think it’s an omen?",
    "exampleCn": "汽车发动不起来。你觉得这是某种预兆吗？"
   },
   {
    "word": "fraught",
    "phonetic": "frɔt",
    "pos": "adj.",
    "meaning": "担心的，忧虑的；充满…的",
    "example": "The earliest operations employing this technique were fraught with dangers.",
    "exampleCn": "最早采用这一技术的手术充满了危险。"
   },
   {
    "word": "disclose",
    "phonetic": "dɪs'kloz",
    "pos": "vt",
    "meaning": "公开；揭露",
    "example": "Some companies have already voluntarily disclosed similar information .",
    "exampleCn": "一些公司已经主动透露了类似的信息。"
   },
   {
    "word": "superb",
    "phonetic": "/suːˈpɜːrb/",
    "pos": "adj.",
    "meaning": "极好的；华丽的；宏伟的",
    "example": "The food was superb.",
    "exampleCn": "食物好吃极了。"
   },
   {
    "word": "talented",
    "phonetic": "'tæləntɪd",
    "pos": "adj.",
    "meaning": "有才能的，有才干的",
    "example": "a talented actor",
    "exampleCn": "一名很有天赋的演员"
   },
   {
    "word": "hydrogen",
    "phonetic": "'haɪdrədʒən",
    "pos": "n.",
    "meaning": "氢气",
    "example": "Water contains hydrogen and oxygen.",
    "exampleCn": "水含有氢和氧。"
   },
   {
    "word": "stagnant",
    "phonetic": "'stægnənt",
    "pos": "adj.",
    "meaning": "停滞的；不景气的；污浊的；迟钝的",
    "example": "a stagnant pond",
    "exampleCn": "死水塘"
   },
   {
    "word": "obstacle",
    "phonetic": "'ɑbstəkl",
    "pos": "n.",
    "meaning": "障碍，干扰；妨害物",
    "example": "The tax puts obstacles in the way of companies trying to develop trade overseas.",
    "exampleCn": "这项税收为想在海外发展贸易的公司设置了障碍。"
   },
   {
    "word": "pour",
    "phonetic": "pɔr",
    "pos": "n.",
    "meaning": "倾泻；流出；骤雨；灌，注；倒；倾泻；倾吐；倾泻；涌流；斟茶",
    "example": "She poured coffee for everyone.",
    "exampleCn": "她为每个人都倒了咖啡。"
   },
   {
    "word": "respiration",
    "phonetic": ",rɛspə'reʃən",
    "pos": "n.",
    "meaning": "[生理]呼吸；呼吸作用",
    "example": "His respiration grew fainter throughout the day.",
    "exampleCn": "一天当中，他的呼吸越来越微弱。"
   },
   {
    "word": "aware",
    "phonetic": "ə'wɛr",
    "pos": "adj.",
    "meaning": "意识到的；知道的；有…方面知识的；懂世故的",
    "example": "Mr Braley has been made aware of the need for absolute secrecy.",
    "exampleCn": "布雷利先生被告知需要绝对保密。"
   },
   {
    "word": "sectional",
    "phonetic": "'sɛkʃənl",
    "pos": "adj.",
    "meaning": "部分的，节的；可组合的",
    "example": "community groups seeking to protect sectional interests",
    "exampleCn": "致力保护群体利益的社区组织"
   },
   {
    "word": "crisis",
    "phonetic": "'kraɪsɪs",
    "pos": "n.",
    "meaning": "危机；危险期；决定性时刻",
    "example": "The country now faces an economic crisis .",
    "exampleCn": "该国目前正面临一场经济危机。"
   },
   {
    "word": "procure",
    "phonetic": "prə'kjʊr",
    "pos": "vt",
    "meaning": "获得，取得；导致；取得",
    "example": "It remained very difficult to procure food, fuel, and other daily necessities.",
    "exampleCn": "当时仍然很难获得食品、燃料和其他日用必需品。"
   },
   {
    "word": "trigger",
    "phonetic": "'trɪɡɚ",
    "pos": "vt",
    "meaning": "[物化]引发，引起；[电子]触发；[军]扳机；[电子]触发器；制滑机",
    "example": "A man pointed a gun at them and pulled the trigger.",
    "exampleCn": "一个男人用枪指着他们，扣动了扳机。"
   },
   {
    "word": "discrete",
    "phonetic": "dɪ'skrit",
    "pos": "adj.",
    "meaning": "离散的，[数]不连续的",
    "example": "The change happens in a series of discrete steps.",
    "exampleCn": "这个变化在一系列分离的步骤中发生。"
   },
   {
    "word": "stabilize",
    "phonetic": "'stebəlaɪz",
    "pos": "v.",
    "meaning": "使稳定，使坚固，使安定",
    "example": "The patient’s condition has now stabilized.",
    "exampleCn": "病人的情况现已稳定下来了。"
   },
   {
    "word": "nursery",
    "phonetic": "'nɝsəri",
    "pos": "n.",
    "meaning": "[林]苗圃；托儿所；温床",
    "example": "He has painted murals in his children's nursery.",
    "exampleCn": "他在他家的育儿室画上了壁画。"
   },
   {
    "word": "apt",
    "phonetic": "æpt",
    "pos": "adj.",
    "meaning": "恰当的；有…倾向的；灵敏的",
    "example": "‘Love at first sight’ is a very apt description of how he felt when he saw her.",
    "exampleCn": "用“一见钟情”来形容他见到她时的感觉再恰当不过。"
   },
   {
    "word": "whip",
    "phonetic": "wɪp",
    "pos": "vt",
    "meaning": "抽打；煽动；搅打（蛋，奶油）；彻底击败；[畜牧]鞭子；抽打；车夫；[机]搅拌器；抽打；急走；拍击",
    "example": "The coachman cracked his whip and the carriage lurched forward.",
    "exampleCn": "马车夫甩了一记响鞭，马车猛然向前冲去。"
   },
   {
    "word": "protest",
    "phonetic": "ˈproʊtest",
    "pos": "vi",
    "meaning": "抗议；断言；抗议；断言；抗议",
    "example": "‘I don’t see why I should take the blame for this!’ she protested.",
    "exampleCn": "“我不明白为什么我要对此承担责任！”她抗议道。"
   },
   {
    "word": "thigh",
    "phonetic": "θaɪ",
    "pos": "n.",
    "meaning": "[解剖]大腿，股",
    "example": "chicken thighs",
    "exampleCn": "鸡腿"
   },
   {
    "word": "trickle",
    "phonetic": "'trɪkl",
    "pos": "vi",
    "meaning": "滴；细细地流；慢慢地移动；滴，淌；细流",
    "example": "The water in the stream had been reduced to a trickle.",
    "exampleCn": "小溪里的水已只剩下一股细流。"
   },
   {
    "word": "reward",
    "phonetic": "rɪ'wɔrd",
    "pos": "n.",
    "meaning": "[劳经]报酬；报答；酬谢；[劳经]奖励；奖赏",
    "example": "The school has a system of rewards and punishments to encourage good behaviour.",
    "exampleCn": "学校有奖惩制度以鼓励良好行为。"
   },
   {
    "word": "outlaw",
    "phonetic": "'aʊtlɔ",
    "pos": "n.",
    "meaning": "歹徒；罪犯；亡命之徒；被剥夺法律保护者",
    "example": "The bill would have outlawed several types of guns.",
    "exampleCn": "这项法案将全面禁用几种枪支。"
   },
   {
    "word": "chisel",
    "phonetic": "'tʃɪzl",
    "pos": "vt",
    "meaning": "雕，刻；[木]凿；欺骗；雕，刻；[木]凿；欺骗；[木]凿子",
    "example": "He set out to chisel a dog out of sandstone.",
    "exampleCn": "他开始用凿子将砂岩雕刻成一只狗。"
   },
   {
    "word": "ideal",
    "phonetic": "aɪ'diəl",
    "pos": "adj.",
    "meaning": "[数]理想的；完美的；想象的；不切实际的；[数]理想；典范",
    "example": "Walt Disney stayed true to his ideals.",
    "exampleCn": "沃尔特·迪斯尼坚持他的理想。"
   },
   {
    "word": "rivet",
    "phonetic": "'rɪvɪt",
    "pos": "n.",
    "meaning": "[机]铆钉；铆接；固定；（把目光、注意力等）集中于",
    "example": "The West Ham crest features two crossed rivet hammers and the club has been known has the Hammers ever since",
    "exampleCn": "球队的队徽上有两个交叉的铆钉锤，这也让人们把球队和铁锤联系在一起。"
   },
   {
    "word": "equitable",
    "phonetic": "'ekwitəbl",
    "pos": "adj.",
    "meaning": "公平的，公正的；平衡法的",
    "example": "an equitable distribution of food supplies",
    "exampleCn": "所供应食品的合理分配"
   },
   {
    "word": "thesaurus",
    "phonetic": "θɪ'sɔrəs",
    "pos": "n.",
    "meaning": "宝库；辞典；知识宝库；分类词汇汇编",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "penetrate",
    "phonetic": "'pɛnətret",
    "pos": "vt",
    "meaning": "渗透；穿透；洞察；渗透；刺入；看透",
    "example": "bullets that penetrate thick armour plating",
    "exampleCn": "穿过厚装甲的子弹"
   },
   {
    "word": "dilate",
    "phonetic": "daɪˈlet",
    "pos": "vi",
    "meaning": "扩大；膨胀；详述；使扩大；使膨胀",
    "example": "dilated pupils",
    "exampleCn": "扩大的瞳孔"
   },
   {
    "word": "participate",
    "phonetic": "pɑr'tɪsə'pet",
    "pos": "vi",
    "meaning": "参与，参加；分享；分享；分担",
    "example": "Some members refused to participate.",
    "exampleCn": "有些会员拒绝参加。"
   },
   {
    "word": "provision",
    "phonetic": "prə'vɪʒn",
    "pos": "n.",
    "meaning": "规定；条款；准备；[经]供应品",
    "example": "The agreement includes a provision for each side to check the other side’s weapons.",
    "exampleCn": "协议有项规定，允许双方互查武器。"
   },
   {
    "word": "emphasize",
    "phonetic": "'ɛmfəsaɪz",
    "pos": "vt",
    "meaning": "强调，着重",
    "example": "The report emphasizes the importance of improving safety standards.",
    "exampleCn": "报告强调了改进安全标准的重要性。"
   },
   {
    "word": "plank",
    "phonetic": "plæŋk",
    "pos": "n.",
    "meaning": "[木]厚木板；支架；政纲条款",
    "example": "a long plank of wood",
    "exampleCn": "一长条厚木板"
   },
   {
    "word": "rig",
    "phonetic": "rɪɡ",
    "pos": "n.",
    "meaning": "装备；钻探设备；服装；[船]帆装；操纵；装配；装扮；装上索具",
    "example": "The ship was fully rigged and ready to sail.",
    "exampleCn": "船已装备就绪，等待起航。"
   },
   {
    "word": "pedal",
    "phonetic": "'pɛdl",
    "pos": "vi",
    "meaning": "踩踏板；骑车；踏板；脚蹬子；骑（自行车）；踩……的踏板",
    "example": "She put her foot down on the accelerator pedal.",
    "exampleCn": "她踩下了油门踏板。"
   },
   {
    "word": "inert",
    "phonetic": "ɪ'nɝt",
    "pos": "adj.",
    "meaning": "[化学]惰性的；呆滞的；迟缓的；无效的",
    "example": "inert gases",
    "exampleCn": "惰性气体"
   },
   {
    "word": "tactic",
    "phonetic": "'tæktɪk",
    "pos": "n.",
    "meaning": "策略，战略",
    "example": "You have probably heard of this tactic before.",
    "exampleCn": "你以前也可能听说过这个策略。"
   },
   {
    "word": "plague",
    "phonetic": "pleɡ",
    "pos": "n.",
    "meaning": "[医]瘟疫；灾祸；麻烦；讨厌的人；折磨；使苦恼；使得灾祸",
    "example": "drops in population levels due to plagues and famines",
    "exampleCn": "瘟疫和饥荒造成的人口水平下降"
   },
   {
    "word": "deserve",
    "phonetic": "dɪ'zɝv",
    "pos": "vi",
    "meaning": "应受，应得；应受，应得",
    "example": "What have I done to deserve this?",
    "exampleCn": "我做了什么事，要得到这样的报应？"
   },
   {
    "word": "communication",
    "phonetic": "kə,mjunɪ'keʃən",
    "pos": "n.",
    "meaning": "通讯，[通信]通信；交流",
    "example": "Good communication is vital in a large organization.",
    "exampleCn": "在大机构里良好的沟通是极为重要的。"
   },
   {
    "word": "clinic",
    "phonetic": "'klɪnɪk",
    "pos": "n.",
    "meaning": "[临床]临床；诊所",
    "example": "an appointment at an outpatient clinic",
    "exampleCn": "门诊预约"
   },
   {
    "word": "nickel",
    "phonetic": "'nɪkl",
    "pos": "n.",
    "meaning": "[化学]镍；镍币；五分镍币",
    "example": "...a large glass jar filled with pennies, nickels, dimes, and quarters.",
    "exampleCn": "…一个装满1分、5分、10分和25分硬币的大玻璃罐。"
   },
   {
    "word": "orderly",
    "phonetic": "'ɔrdɚli",
    "pos": "adj.",
    "meaning": "有秩序的；整齐的；值班的；勤务兵；传令兵；护理员；顺序地；依次地",
    "example": "She needs to organize her ideas in a more orderly way.",
    "exampleCn": "她需要把自己的想法组织得更有条理些。"
   },
   {
    "word": "faith",
    "phonetic": "feθ",
    "pos": "n.",
    "meaning": "信仰；信念；信任；忠实",
    "example": "People have lost faith in the government.",
    "exampleCn": "人们已失去了对政府的信心。"
   },
   {
    "word": "upset",
    "phonetic": "ʌp'sɛt",
    "pos": "vt",
    "meaning": "使心烦；颠覆；扰乱；翻倒；心烦的；混乱的；弄翻的；混乱；翻倒",
    "example": "The chemicals upset the balance of the environment.",
    "exampleCn": "这些化学品破坏了环境的平衡。"
   },
   {
    "word": "sabotage",
    "phonetic": ",sæbə'tɑʒ",
    "pos": "vt",
    "meaning": "妨害；对…采取破坏行动；破坏；破坏活动；怠工",
    "example": "The terrorists were planning acts of sabotage to destabilize the country.",
    "exampleCn": "恐怖分子在策划破坏国家安定的行动。"
   },
   {
    "word": "slice",
    "phonetic": "slaɪs",
    "pos": "n.",
    "meaning": "薄片；部分；菜刀，火铲；切下；把…分成部分；将…切成薄片；切开；割破",
    "example": "pizza slices",
    "exampleCn": "比萨块"
   },
   {
    "word": "fantasy",
    "phonetic": "'fæntəsi",
    "pos": "n.",
    "meaning": "[心理]幻想；白日梦；幻觉；虚幻的；空想；想像；耽于幻想；奏幻想曲（等于phantasy）",
    "example": "I used to have fantasies about living in Paris with an artist.",
    "exampleCn": "我过去常幻想着在巴黎与一位艺术家同住。"
   },
   {
    "word": "expire",
    "phonetic": "ɪk'spaɪɚ",
    "pos": "vi",
    "meaning": "期满；终止；死亡；呼气；呼出（空气）",
    "example": "My passport expires next week.",
    "exampleCn": "我的护照下周就到期了。"
   },
   {
    "word": "manacle",
    "phonetic": "'mænəkl",
    "pos": "n.",
    "meaning": "束缚；手铐；束缚；给…上手铐",
    "example": "His hands were manacled behind his back.",
    "exampleCn": "他的双手被铐在了身后。"
   },
   {
    "word": "discipline",
    "phonetic": "'dɪsəplɪn",
    "pos": "n.",
    "meaning": "学科；[管理]纪律；训练；惩罚；训练，训导；惩戒",
    "example": "The book gives parents advice on discipline.",
    "exampleCn": "这本书指导父母如何管教孩子。"
   },
   {
    "word": "foul",
    "phonetic": "faʊl",
    "pos": "adj.",
    "meaning": "犯规的；邪恶的；污秽的；淤塞的；犯规；弄脏；淤塞；缠住，妨害；犯规；腐烂；缠结；犯规；缠绕；违反规则地，不正当地",
    "example": "He woke up with a foul taste in his mouth.",
    "exampleCn": "他醒过来，嘴里一股臭味。"
   },
   {
    "word": "sacred",
    "phonetic": "'sekrɪd",
    "pos": "adj.",
    "meaning": "神的；神圣的；宗教的；庄严的",
    "example": "a sacred vow",
    "exampleCn": "神圣的誓言"
   },
   {
    "word": "suspect",
    "phonetic": "sʌspɛkt; (for v.) səˈspɛkt",
    "pos": "n.",
    "meaning": "[法]嫌疑犯；可疑的；不可信的；怀疑；猜想；怀疑；猜想",
    "example": "She strongly suspected he was lying to her.",
    "exampleCn": "她非常怀疑他在对她撒谎。"
   },
   {
    "word": "face",
    "phonetic": "fes",
    "pos": "n.",
    "meaning": "脸；表面；面子；面容；外观；威信；向；朝；面对；面向；承认；抹盖",
    "example": "She had a beautiful face.",
    "exampleCn": "她面容秀美。"
   },
   {
    "word": "narrative",
    "phonetic": "'nærətɪv",
    "pos": "n.",
    "meaning": "叙述；故事；讲述；叙事的，叙述的；叙事体的",
    "example": "At several points in the narrative the two stories cross.",
    "exampleCn": "叙述中两条故事线多次交织在一起。"
   },
   {
    "word": "oblong",
    "phonetic": "'ɑblɔŋ",
    "pos": "adj.",
    "meaning": "椭圆形的；[数]长方形的；椭圆形；[数]长方形",
    "example": "...an oblong table.",
    "exampleCn": "...一张长方形桌子。"
   },
   {
    "word": "sacrifice",
    "phonetic": "'sækrɪfaɪs",
    "pos": "n.",
    "meaning": "牺牲；祭品；供奉；牺牲；献祭；亏本出售；献祭；奉献",
    "example": "The minister stressed the need for economic sacrifice.",
    "exampleCn": "部长强调了在经济上作出牺牲的必要性。"
   },
   {
    "word": "pacify",
    "phonetic": "'pæsə'fai",
    "pos": "vt",
    "meaning": "使平静；安慰；平定",
    "example": "‘You’re right,’ Rita said, in order to pacify him.",
    "exampleCn": "“你是对的。”丽塔安抚他道。"
   },
   {
    "word": "cocaine",
    "phonetic": "ko'ken",
    "pos": "n.",
    "meaning": "[药]可卡因",
    "example": "The police report said she was doing cocaine.",
    "exampleCn": "警方报告说她正在吸可卡因。"
   },
   {
    "word": "interpret",
    "phonetic": "ɪn'tɝprɪt",
    "pos": "vt",
    "meaning": "说明；口译；解释；翻译",
    "example": "They spoke good Spanish, and promised to interpret for me.",
    "exampleCn": "他们西班牙语说得很好，答应替我翻译。"
   },
   {
    "word": "conducive",
    "phonetic": "kən'dusɪv",
    "pos": "adj.",
    "meaning": "有益的；有助于…的",
    "example": "an environment conducive to learning",
    "exampleCn": "有助于学习的环境"
   },
   {
    "word": "tremble",
    "phonetic": "'trɛmbl",
    "pos": "vi",
    "meaning": "发抖；战栗；焦虑；摇晃；颤抖；战栗；摇晃",
    "example": "His lip started to tremble and then he started to cry.",
    "exampleCn": "他的嘴唇开始颤抖，接着就哭了起来。"
   },
   {
    "word": "rack",
    "phonetic": "ræk",
    "pos": "n.",
    "meaning": "[机]齿条；[交]行李架；拷问台；变形；随风飘；小步跑；折磨；榨取",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "carton",
    "phonetic": "'kɑrtn",
    "pos": "n.",
    "meaning": "纸板箱；靶心白点",
    "example": "a milk carton",
    "exampleCn": "牛奶盒"
   },
   {
    "word": "perish",
    "phonetic": "'pɛrɪʃ",
    "pos": "vt",
    "meaning": "使麻木；毁坏；死亡；毁灭；腐烂；枯萎",
    "example": "Hundreds perished when the ship went down.",
    "exampleCn": "轮船沉没，数百人罹难。"
   },
   {
    "word": "scatter",
    "phonetic": "'skætɚ",
    "pos": "vi",
    "meaning": "分散，散开；[军]散射；[军]使散射；使散开，使分散；使散播，使撒播；分散；散播，撒播",
    "example": "The sound of gunfire made the crowd scatter in all directions.",
    "exampleCn": "枪声使人群四散奔逃。"
   },
   {
    "word": "tension",
    "phonetic": "'tɛnʃən",
    "pos": "n.",
    "meaning": "张力，拉力；紧张，不安；电压；使紧张；使拉紧",
    "example": "The tension was becoming unbearable, and I wanted to scream.",
    "exampleCn": "这种紧张变得难以忍受，我真想大声尖叫。"
   },
   {
    "word": "exclude",
    "phonetic": "ɪk'sklʊd",
    "pos": "vt",
    "meaning": "排除；排斥；拒绝接纳；逐出",
    "example": "a special diet that excludes dairy products",
    "exampleCn": "不包含奶制品的特别食谱"
   },
   {
    "word": "flake",
    "phonetic": "flek",
    "pos": "vi",
    "meaning": "剥落；成片状剥落；小薄片；火花",
    "example": "chocolate flakes",
    "exampleCn": "巧克力薄片"
   },
   {
    "word": "linger",
    "phonetic": "'lɪŋɡɚ",
    "pos": "vi",
    "meaning": "徘徊；苟延残喘；磨蹭；消磨；缓慢度过",
    "example": "I spent a week at Kandersteg and could happily have lingered on.",
    "exampleCn": "我在坎德施泰格逗留了一个星期，本来还可以开开心心地多待几天。"
   },
   {
    "word": "plug",
    "phonetic": "plʌɡ",
    "pos": "n.",
    "meaning": "[电]插头；[核]塞子；栓；塞住；用插头将与电源接通；插入；塞住；[电]接插头",
    "example": "the bath plug",
    "exampleCn": "浴缸塞子"
   },
   {
    "word": "truce",
    "phonetic": "tru:s",
    "pos": "n.",
    "meaning": "停战；休战；休战协定",
    "example": "They agreed to call a truce .",
    "exampleCn": "他们同意宣布休战。"
   },
   {
    "word": "issue",
    "phonetic": "'ɪʃu",
    "pos": "n.",
    "meaning": "问题；流出；期号；[会计]发行物；[会计]发行，发布；发给；放出，排出；[会计]发行；流出；造成…结果；传下",
    "example": "Abortion is a highly controversial issue.",
    "exampleCn": "堕胎是个很有争议的话题。"
   },
   {
    "word": "schedule",
    "phonetic": "'skɛdʒul; (canadian) ˈʃɛdʒʊl; ˈʃɛdjʊl",
    "pos": "vt",
    "meaning": "安排，[计划]计划；编制目录；将……列入计划表；[交]时间表；[计划]计划表；一览表",
    "example": "How can he fit everything into his busy schedule ?",
    "exampleCn": "他是怎么把所有的事情都排进自己忙碌的时间表的？"
   },
   {
    "word": "yard",
    "phonetic": "jɑrd",
    "pos": "n.",
    "meaning": "院子；[计量]码（英制中丈量长度单位，1码=3英尺）；[建]庭院；帆桁",
    "example": "a hundred yards away",
    "exampleCn": "100码外"
   },
   {
    "word": "navigable",
    "phonetic": "'nævɪɡəbl",
    "pos": "adj.",
    "meaning": "[水运][航]可航行的；可驾驶的；适于航行的",
    "example": "...the navigable portion of the Nile.",
    "exampleCn": "...尼罗河的适航河段。"
   },
   {
    "word": "vehement",
    "phonetic": "viəmənt",
    "pos": "adj.",
    "meaning": "激烈的，猛烈的；热烈的",
    "example": "She suddenly became very vehement and agitated, jumping around and shouting.",
    "exampleCn": "她突然变得十分激动和不安，四处暴跳并大喊大叫。"
   },
   {
    "word": "eliminate",
    "phonetic": "ɪ'lɪmɪnet",
    "pos": "vt",
    "meaning": "消除；排除",
    "example": "a ruthless dictator who eliminated all his rivals",
    "exampleCn": "铲除所有异己的残酷独裁者"
   },
   {
    "word": "prejudice",
    "phonetic": "'prɛdʒədɪs",
    "pos": "n.",
    "meaning": "偏见；侵害；损害；使有偏见",
    "example": "Women still face prejudice in the workplace.",
    "exampleCn": "女性在职场中仍然面临歧视。"
   },
   {
    "word": "dual",
    "phonetic": "'dʊəl",
    "pos": "adj.",
    "meaning": "双的；双重的",
    "example": "a dual system of education",
    "exampleCn": "二元[双元]教育体系"
   },
   {
    "word": "essential",
    "phonetic": "ɪ'sɛnʃl",
    "pos": "adj.",
    "meaning": "基本的；必要的；本质的；精华的；本质；要素；要点；必需品",
    "example": "She packed a few essentials.",
    "exampleCn": "她把几件生活必需品装进箱子。"
   },
   {
    "word": "promote",
    "phonetic": "prə'mot",
    "pos": "vt",
    "meaning": "促进；提升；推销；发扬",
    "example": "You don't have to sacrifice environmental protection to promote economic growth.",
    "exampleCn": "你们没有必要牺牲环保来促进经济增长。"
   },
   {
    "word": "appreciate",
    "phonetic": "ə'priʃɪet",
    "pos": "vt",
    "meaning": "欣赏；感激；领会；鉴别；增值；涨价",
    "example": "Thanks ever so much for your help, I really appreciate it.",
    "exampleCn": "多谢你的帮助，我真的很感激。"
   },
   {
    "word": "motto",
    "phonetic": "'mɑto",
    "pos": "n.",
    "meaning": "座右铭，格言；箴言",
    "example": "‘Be prepared’ is the motto of the Boy Scouts.",
    "exampleCn": "“时刻准备着”是童子军的格言。"
   },
   {
    "word": "toddle",
    "phonetic": "'tɑdl",
    "pos": "vi",
    "meaning": "蹒跚学步；东倒西歪地走；散步",
    "example": "...once your baby starts toddling.",
    "exampleCn": "...一旦你的小孩开始蹒跚学步。"
   },
   {
    "word": "feud",
    "phonetic": "fjʊd",
    "pos": "n.",
    "meaning": "不和；争执；封地",
    "example": "Insults only served to inflame the feud.",
    "exampleCn": "侮辱只是起到了加剧长期不和的作用。"
   },
   {
    "word": "census",
    "phonetic": "'sɛnsəs",
    "pos": "n.",
    "meaning": "人口普查，人口调查",
    "example": "a traffic census",
    "exampleCn": "交通状况调查"
   },
   {
    "word": "archaic",
    "phonetic": "ɑr'keɪk",
    "pos": "adj.",
    "meaning": "[语][生物]古代的；陈旧的；古体的；古色古香的",
    "example": "archaic words",
    "exampleCn": "古词"
   },
   {
    "word": "dissolve",
    "phonetic": "dɪ'zɑlv",
    "pos": "vt",
    "meaning": "使溶解；使分解；使液化；溶解；解散；消失",
    "example": "Stir until the sugar dissolves.",
    "exampleCn": "一直搅拌到糖溶解掉。"
   },
   {
    "word": "carrier",
    "phonetic": "'kærɪɚ",
    "pos": "n.",
    "meaning": "[化学]载体；运送者；[遗][医]带菌者；货架",
    "example": "an international carrier",
    "exampleCn": "跨国运输公司"
   },
   {
    "word": "cue",
    "phonetic": "kju",
    "pos": "n.",
    "meaning": "提示，暗示；线索",
    "example": "She stood nervously in the wings waiting for her cue.",
    "exampleCn": "她紧张地站在台侧等待出场的提示。"
   },
   {
    "word": "impromptu",
    "phonetic": "ɪm'prɑmptu",
    "pos": "adv.",
    "meaning": "即席地；即席的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "amaze",
    "phonetic": "ə'mez",
    "pos": "vt",
    "meaning": "使吃惊",
    "example": "Dave amazed his friends by suddenly getting married.",
    "exampleCn": "戴夫突然结婚，令朋友们非常吃惊。"
   },
   {
    "word": "weary",
    "phonetic": "'wɪri",
    "pos": "adj.",
    "meaning": "疲倦的；厌烦的；令人厌烦的；疲倦；厌烦；使疲倦；使厌烦",
    "example": "She found Rachel in the kitchen, looking old and weary.",
    "exampleCn": "她发现雷切尔在厨房里，看上去苍老而疲惫。"
   },
   {
    "word": "assurance",
    "phonetic": "ə'ʃʊrəns",
    "pos": "n.",
    "meaning": "保证；保险；确信；断言",
    "example": "the calm assurance with which she handled the horse",
    "exampleCn": "她对付马儿时的从容镇定"
   },
   {
    "word": "automation",
    "phonetic": ",ɔtə'meʃən",
    "pos": "n.",
    "meaning": "自动化；[自]自动操作",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "undertake",
    "phonetic": ",ʌndɚ'tek",
    "pos": "vt",
    "meaning": "承担，保证；从事；同意；试图",
    "example": "He undertook to pay the money back in six months.",
    "exampleCn": "他保证在六个月之内还钱。"
   },
   {
    "word": "pessimism",
    "phonetic": "'pɛsɪmɪzəm",
    "pos": "n.",
    "meaning": "悲观，悲观情绪；厌世主义",
    "example": "...universal pessimism about the economy.",
    "exampleCn": "…对经济形势普遍的悲观看法。"
   },
   {
    "word": "proxy",
    "phonetic": "'prɑksi",
    "pos": "n.",
    "meaning": "[法][贸易]代理人；[经]委托书；代用品",
    "example": "You can vote by proxy.",
    "exampleCn": "你可以请人代你投票。"
   },
   {
    "word": "heal",
    "phonetic": "hil",
    "pos": "vt",
    "meaning": "治愈，痊愈；和解；痊愈",
    "example": "a preacher who claims that he can heal the sick",
    "exampleCn": "自称可以治病的传道士"
   },
   {
    "word": "stale",
    "phonetic": "stel",
    "pos": "adj.",
    "meaning": "陈腐的；不新鲜的；变陈旧；撒尿；变得不新鲜；尿",
    "example": "French bread goes stale (= becomes stale ) very quickly.",
    "exampleCn": "法式面包极易变味。"
   },
   {
    "word": "destructive",
    "phonetic": "dɪ'strʌktɪv",
    "pos": "adj.",
    "meaning": "破坏的；毁灭性的；有害的，消极的",
    "example": "the destructive power of modern weapons",
    "exampleCn": "现代武器的破坏力"
   },
   {
    "word": "pounce",
    "phonetic": "paʊns",
    "pos": "vi",
    "meaning": "突袭，猛扑；猛扑，爪",
    "example": "The cat was hiding in the bushes, ready to pounce.",
    "exampleCn": "猫躲在灌木丛中，准备扑上去。"
   },
   {
    "word": "deliver",
    "phonetic": "dɪ'lɪvɚ",
    "pos": "vt",
    "meaning": "交付；发表；递送；释放；给予（打击）；给…接生；实现；传送；履行；投递",
    "example": "The king delivered a televised speech to the nation on November 5.",
    "exampleCn": "国王在11月5日向全国发表了电视讲话。"
   },
   {
    "word": "defy",
    "phonetic": "'difaɪ",
    "pos": "vt",
    "meaning": "藐视；公然反抗；挑衅；使落空；挑战；对抗",
    "example": "This was the first (and last) time that I dared to defy my mother.",
    "exampleCn": "这是我第一次（也是最后一次）胆敢违抗我母亲。"
   },
   {
    "word": "delegate",
    "phonetic": "ˈdɛləgɪt; (for v.,) ˈdɛləˌgeɪt",
    "pos": "n.",
    "meaning": "代表",
    "example": "A good manager knows when to delegate.",
    "exampleCn": "一个好的经理知道何时该放权。"
   },
   {
    "word": "evade",
    "phonetic": "ɪ'ved",
    "pos": "vt",
    "meaning": "逃避；规避；逃脱；逃避；规避；逃脱",
    "example": "I could tell that he was trying to evade the issue.",
    "exampleCn": "我看得出他在极力回避这个问题。"
   },
   {
    "word": "hilarious",
    "phonetic": "hɪ'lɛrɪəs",
    "pos": "adj.",
    "meaning": "欢闹的；非常滑稽的；喜不自禁的",
    "example": "a hilarious story",
    "exampleCn": "极有趣的故事"
   },
   {
    "word": "septic",
    "phonetic": "'sɛptɪk",
    "pos": "adj.",
    "meaning": "败血症的；[医]脓毒性的；腐败的；腐烂物",
    "example": "Put some anti-septic cream on it.",
    "exampleCn": "涂上一些防止败血症的药膏。"
   },
   {
    "word": "pave",
    "phonetic": "pev",
    "pos": "vt",
    "meaning": "铺设；安排；作铺设之用",
    "example": "a paved courtyard",
    "exampleCn": "地面铺砌过的院子"
   },
   {
    "word": "roar",
    "phonetic": "rɔr",
    "pos": "n.",
    "meaning": "咆哮；吼；轰鸣；咆哮；吼叫；喧闹；咆哮；呼喊；使……轰鸣",
    "example": "We heard a lion roar.",
    "exampleCn": "我们听到狮子在吼叫。"
   },
   {
    "word": "literature",
    "phonetic": "lɪtərəˌtʃʊr",
    "pos": "n.",
    "meaning": "[语]文学；[图情]文献；文艺；著作",
    "example": "He has read many of the major works of literature.",
    "exampleCn": "他读过许多重要的文学作品。"
   },
   {
    "word": "historic",
    "phonetic": "hɪ'stɔrɪk",
    "pos": "adj.",
    "meaning": "有历史意义的",
    "example": "a historic meeting of world leaders",
    "exampleCn": "具有历史意义的世界领导人会议"
   },
   {
    "word": "tune",
    "phonetic": "tun",
    "pos": "n.",
    "meaning": "曲调；和谐；心情；调整；使一致；为…调音；[电子][通信]调谐；协调",
    "example": "That’s a nice tune.",
    "exampleCn": "那曲调很美。"
   },
   {
    "word": "aggressive",
    "phonetic": "ə'ɡrɛsɪv",
    "pos": "adj.",
    "meaning": "侵略性的；好斗的；有进取心的；有闯劲的",
    "example": "A successful businessman has to be aggressive.",
    "exampleCn": "成功的实业家必须得有股冲劲。"
   },
   {
    "word": "identification",
    "phonetic": "aɪˌdentɪfɪ'keʃn",
    "pos": "n.",
    "meaning": "鉴定，[计]识别；认同；身份证明",
    "example": "Do you have any identification?",
    "exampleCn": "你有什么身份证明文件吗？"
   },
   {
    "word": "fuss",
    "phonetic": "fʌs",
    "pos": "vi",
    "meaning": "小题大作；忙乱；焦燥；焦急；无事自扰；大惊小怪，大惊小怪的人；小题大作；忙乱；使烦恼，使烦忧",
    "example": "James said he’d better be getting back or there’d be a fuss .",
    "exampleCn": "詹姆斯说他最好回来，否则就会有人小题大做了。"
   },
   {
    "word": "geometry",
    "phonetic": "dʒɪ'ɑmətri",
    "pos": "n.",
    "meaning": "几何学",
    "example": "...the very ordered way in which mathematics and geometry describe nature.",
    "exampleCn": "…数学和几何学描述自然的条理性。"
   },
   {
    "word": "transit",
    "phonetic": "'træzɪt",
    "pos": "n.",
    "meaning": "运输；经过；运送；经过",
    "example": "baggage that is lost or damaged in transit",
    "exampleCn": "在运输过程中丢失或损坏的行李"
   },
   {
    "word": "potent",
    "phonetic": "'potnt",
    "pos": "adj.",
    "meaning": "有效的；强有力的，有权势的；有说服力的",
    "example": "potent drugs",
    "exampleCn": "强效药物"
   },
   {
    "word": "transition",
    "phonetic": "træn'zɪʃən",
    "pos": "n.",
    "meaning": "过渡；转变；[分子生物]转换；变调",
    "example": "Making the transition from youth to adulthood can be very painful.",
    "exampleCn": "从青少年过渡到成年有时是一个非常痛苦的过程。"
   },
   {
    "word": "commotion",
    "phonetic": "kə'moʃən",
    "pos": "n.",
    "meaning": "骚动；暴乱",
    "example": "They heard a commotion downstairs.",
    "exampleCn": "他们听见楼下一阵骚动。"
   },
   {
    "word": "tropic",
    "phonetic": "'trɑpɪk",
    "pos": "n.",
    "meaning": "[地理]热带；[天]回归线；[地理]热带的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "assert",
    "phonetic": "ə'sɝt",
    "pos": "vt",
    "meaning": "维护，坚持；断言；主张；声称",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "malleable",
    "phonetic": "'mælɪəbl",
    "pos": "adj.",
    "meaning": "[材]可锻的；可塑的；有延展性的；易适应的",
    "example": "malleable steel",
    "exampleCn": "展性钢"
   },
   {
    "word": "resolution",
    "phonetic": ",rɛzə'luʃən",
    "pos": "n.",
    "meaning": "[物][电子][光]分辨率；决议；解决；决心",
    "example": "a resolution calling for a ban on dumping nuclear waste",
    "exampleCn": "要求禁止倾倒核废物的决议"
   },
   {
    "word": "fleet",
    "phonetic": "flit",
    "pos": "adj.",
    "meaning": "快速的，敏捷的；[军]舰队；港湾；小河；飞逝；疾驰；掠过；消磨",
    "example": "the US seventh fleet",
    "exampleCn": "美国第七舰队"
   },
   {
    "word": "summary",
    "phonetic": "'sʌməri",
    "pos": "adj.",
    "meaning": "简易的；扼要的；概要，[图情]摘要",
    "example": "A brief summary is given on a separate sheet.",
    "exampleCn": "摘要另写一页。"
   },
   {
    "word": "irony",
    "phonetic": "'aɪrəni",
    "pos": "n.",
    "meaning": "讽刺；反语；具有讽刺意味的事；铁的；似铁的",
    "example": "Life is full of little ironies.",
    "exampleCn": "生活中充满了小小的讽刺。"
   },
   {
    "word": "perspective",
    "phonetic": "pɚ'spɛktɪv",
    "pos": "n.",
    "meaning": "观点；远景；[数]透视图；[数]透视的",
    "example": "the artist’s use of perspective",
    "exampleCn": "那位画家对透视法的运用"
   },
   {
    "word": "polar",
    "phonetic": "'polɚ",
    "pos": "adj.",
    "meaning": "[数]极地的；两极的；正好相反的",
    "example": "As our climate warms up, the polar ice caps will begin to melt.",
    "exampleCn": "随着地球气候逐渐变暖，极地的冰冠将开始融化。"
   },
   {
    "word": "attendant",
    "phonetic": "ə'tɛndənt",
    "pos": "adj.",
    "meaning": "伴随的；侍候的；服务员，侍者；随员，陪从",
    "example": "a car park attendant",
    "exampleCn": "停车场的服务员"
   },
   {
    "word": "handicap",
    "phonetic": "'hændɪ'kæp",
    "pos": "n.",
    "meaning": "障碍；不利条件，不利的因素；妨碍，阻碍；使不利",
    "example": "The charity is handicapped by lack of funds.",
    "exampleCn": "这个慈善机构因为缺乏资金难以开展工作。"
   },
   {
    "word": "eligible",
    "phonetic": "'ɛlɪdʒəbl",
    "pos": "adj.",
    "meaning": "合格的，合适的；符合条件的；有资格当选的；合格者；适任者；有资格者",
    "example": "Stephen was regarded as an eligible bachelor.",
    "exampleCn": "斯蒂芬被认为是一个钻石王老五。"
   },
   {
    "word": "crooked",
    "phonetic": "'krʊkɪd",
    "pos": "adj.",
    "meaning": "弯曲的；歪的；不正当的",
    "example": "Your tie’s crooked.",
    "exampleCn": "你的领带歪了。"
   },
   {
    "word": "diplomatic",
    "phonetic": ",dɪplə'mætɪk",
    "pos": "adj.",
    "meaning": "外交的；外交上的；老练的",
    "example": "Diplomatic efforts to end the fighting began on October 25.",
    "exampleCn": "停战的外交努力于10月25日开始。"
   },
   {
    "word": "plough",
    "phonetic": "plaʊ",
    "pos": "vt",
    "meaning": "[农机]犁；耕；用犁耕田；开路；[农机]犁；耕地（等于plow）",
    "example": "In those days the land was plowed by oxen.",
    "exampleCn": "在那个年代是用公牛来犁地的。"
   },
   {
    "word": "riot",
    "phonetic": "'raɪət",
    "pos": "n.",
    "meaning": "暴乱；放纵；蔓延；骚乱；放荡；浪费，挥霍",
    "example": "urban riots",
    "exampleCn": "城市骚乱"
   },
   {
    "word": "absorb",
    "phonetic": "æbˈsɔrb; æbˈzɔrb; əbˈsɔrb",
    "pos": "vt",
    "meaning": "吸收；吸引；承受；理解；使…全神贯注",
    "example": "Plants absorb nutrients from the soil.",
    "exampleCn": "植物从土壤中吸收养分。"
   },
   {
    "word": "parody",
    "phonetic": "'pærədi",
    "pos": "n.",
    "meaning": "模仿，拙劣的模仿",
    "example": "Her performance contains a strong element of self-parody (= when someone makes fun of their own style ) .",
    "exampleCn": "她的表演包含了强烈的自嘲元素。"
   },
   {
    "word": "gear",
    "phonetic": "ɡɪr",
    "pos": "n.",
    "meaning": "[机]齿轮；装置，工具；传动装置；适合；搭上齿轮；开始工作；开动；搭上齿轮；使……适合；使……准备好",
    "example": "The typical career pattern was geared to men whose wives didn’t work.",
    "exampleCn": "这种典型的职业模式是为妻子不工作的男性设计的。"
   },
   {
    "word": "errand",
    "phonetic": "'ɛrənd",
    "pos": "n.",
    "meaning": "使命；差事；差使",
    "example": "Everybody rushing about on some incomprehensible errand someone forced him to do at pain of death.",
    "exampleCn": "大家都忍受着死亡的痛苦被迫地抢着做一些令人难以理解的差事。"
   },
   {
    "word": "microcosm",
    "phonetic": "'maɪkrokɑzəm",
    "pos": "n.",
    "meaning": "[物]微观世界；小宇宙；作为宇宙缩影的人类；缩图（等于microcosmos）",
    "example": "Kitchell says the city was a microcosm of all American culture during the '60s.",
    "exampleCn": "基切尔说这个城市曾经是60年代所有美国文化的一个缩影。"
   },
   {
    "word": "inapt",
    "phonetic": "ɪn'æpt",
    "pos": "adj.",
    "meaning": "不适当的；不熟练的，笨拙的",
    "example": "a very inapt comment",
    "exampleCn": "很不恰当的评论"
   },
   {
    "word": "decent",
    "phonetic": "'disnt",
    "pos": "adj.",
    "meaning": "正派的；得体的；相当好的",
    "example": "a decent burial",
    "exampleCn": "得体的葬礼"
   },
   {
    "word": "coeducation",
    "phonetic": ",koɛdʒə'keʃən",
    "pos": "n.",
    "meaning": "男女同校",
    "example": "It is true that a majority of faculty members voted in favor of coeducation, arguing that it would encourage more students to apply to Grove.",
    "exampleCn": "确实有大部分员工投票赞成男女同校，认为这会使更多的学生申请Grove。"
   },
   {
    "word": "utility",
    "phonetic": "ju'tɪləti",
    "pos": "n.",
    "meaning": "实用；效用；公共设施；功用；实用的；通用的；有多种用途的",
    "example": "Does your rent include utilities?",
    "exampleCn": "你的房租包括公用事业费吗？"
   },
   {
    "word": "sterling",
    "phonetic": "'stɝlɪŋ",
    "pos": "adj.",
    "meaning": "纯正的；英币的；纯银制的；[金融]英国货币；标准纯银",
    "example": "Ella has done some sterling work.",
    "exampleCn": "埃拉做了一些出色的工作。"
   },
   {
    "word": "ominous",
    "phonetic": "'ɑmɪnəs",
    "pos": "adj.",
    "meaning": "预兆的；不吉利的",
    "example": "‘How long will she be ill?’ he asked. There was an ominous silence.",
    "exampleCn": "“她的病多久会好？”他问。大家的沉默让人感觉不妙。"
   },
   {
    "word": "erect",
    "phonetic": "ɪ'rɛkt",
    "pos": "vt",
    "meaning": "使竖立；建造；安装；竖立的；笔直的；因性刺激而勃起的；直立；勃起",
    "example": "an imposing town hall, erected in 1892",
    "exampleCn": "一座气势宏伟的市政厅，建于1892年"
   },
   {
    "word": "immigrant",
    "phonetic": "'ɪmɪɡrənt",
    "pos": "adj.",
    "meaning": "移民的；迁入的；移民，侨民",
    "example": "an illegal immigrant",
    "exampleCn": "非法移民"
   },
   {
    "word": "periphery",
    "phonetic": "pə'rɪfəri",
    "pos": "n.",
    "meaning": "外围，[地理]边缘；圆周；圆柱体表面",
    "example": "extremists on the periphery of the animal rights movement",
    "exampleCn": "处于动物权利运动边缘的极端分子"
   },
   {
    "word": "execute",
    "phonetic": "'ɛksɪkjut",
    "pos": "vt",
    "meaning": "实行；执行；处死",
    "example": "13 people were summarily executed (= killed without any trial or legal process ) by the guerrillas.",
    "exampleCn": "有13人被游击队员就地处决。"
   },
   {
    "word": "arbitrary",
    "phonetic": "ˈɑːrbətreri",
    "pos": "adj.",
    "meaning": "[数]任意的；武断的；专制的",
    "example": "an arbitrary decision",
    "exampleCn": "武断的决定"
   },
   {
    "word": "good",
    "phonetic": "ɡʊd",
    "pos": "adj.",
    "meaning": "好的；优良的；愉快的；虔诚的；好处；善行；慷慨的行为；好",
    "example": "Stay away from Jerry – he’s no good.",
    "exampleCn": "离杰里远点——他不是什么好东西。"
   },
   {
    "word": "interact",
    "phonetic": ",ɪntɚ'ækt",
    "pos": "n.",
    "meaning": "幕间剧；幕间休息",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "spectacular",
    "phonetic": "spɛk'tækjəlɚ",
    "pos": "adj.",
    "meaning": "壮观的，惊人的；公开展示的",
    "example": "a mountainous area with spectacular scenery",
    "exampleCn": "景色壮丽的山区"
   },
   {
    "word": "layman",
    "phonetic": "'lemən",
    "pos": "n.",
    "meaning": "外行；门外汉；俗人；一般信徒",
    "example": "To the layman (= laymen in general ) all these plants look pretty similar.",
    "exampleCn": "对外行的人来说，这些植物看起来都很相似。"
   },
   {
    "word": "rust",
    "phonetic": "rʌst",
    "pos": "n.",
    "meaning": "[材][化工]锈；生锈；[植保]锈病；使生锈；腐蚀；生锈；成铁锈色；变迟钝",
    "example": "There were large patches of rust on the car.",
    "exampleCn": "车上有大片锈斑。"
   },
   {
    "word": "elderly",
    "phonetic": "'ɛldɚli",
    "pos": "adj.",
    "meaning": "上了年纪的；过了中年的；稍老的",
    "example": "a retirement village for the elderly",
    "exampleCn": "供老人退休后居住的村子"
   },
   {
    "word": "prolong",
    "phonetic": "prəˈlɑːŋ",
    "pos": "vt",
    "meaning": "延长；拖延",
    "example": "I was trying to think of some way to prolong the conversation.",
    "exampleCn": "我在想方设法拖长这次谈话。"
   },
   {
    "word": "whereby",
    "phonetic": "wɛr'bai",
    "pos": "adv.",
    "meaning": "凭什么，靠那个，借以",
    "example": "a proposal whereby EU citizens would be allowed to reside anywhere in the EU",
    "exampleCn": "允许欧盟公民在欧盟任何地方居住的一项提议"
   },
   {
    "word": "jog",
    "phonetic": "dʒɑɡ",
    "pos": "vt",
    "meaning": "慢跑；轻推；蹒跚行进；使颠簸；慢跑；轻推；蹒跚行进；颠簸着移动；慢跑；轻推，轻撞",
    "example": "I go jogging every morning.",
    "exampleCn": "我每天早晨都去慢跑。"
   },
   {
    "word": "persist",
    "phonetic": "pɚ'sɪst",
    "pos": "vi",
    "meaning": "存留，坚持；持续，固执；坚持说，反复说",
    "example": "‘I don’t think it’s right,’ John persisted.",
    "exampleCn": "“我认为那不对。”约翰坚持说道。"
   },
   {
    "word": "settle",
    "phonetic": "'sɛtl",
    "pos": "vi",
    "meaning": "解决；定居；沉淀；下陷；解决；安排；使…定居",
    "example": "We hope the factions will be able to settle their differences (= agree to stop arguing ) by peaceful means.",
    "exampleCn": "我们希望各派系能以和平方式解决分歧。"
   },
   {
    "word": "hawk",
    "phonetic": "hɔk",
    "pos": "vt",
    "meaning": "兜售，沿街叫卖；捕捉；咳出；清嗓；咳嗽；像鹰一般地袭击；[鸟]鹰；鹰派成员；掠夺他人的人",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "heritage",
    "phonetic": "'hɛrɪtɪdʒ",
    "pos": "n.",
    "meaning": "遗产；传统；继承物；继承权",
    "example": "the importance of preserving the national heritage",
    "exampleCn": "保护民族遗产的重要性"
   },
   {
    "word": "pad",
    "phonetic": "pæd",
    "pos": "n.",
    "meaning": "[机]衬垫；便笺簿；填补；印色盒；步行；放轻脚步走；填补；走",
    "example": "Keep a telephone pad and a pen to hand.",
    "exampleCn": "手边准备一本电话记事簿和一支笔。"
   },
   {
    "word": "ongoing",
    "phonetic": "'ɑnɡoɪŋ",
    "pos": "adj.",
    "meaning": "不间断的，进行的；前进的；前进；行为，举止",
    "example": "their ongoing search for a new director",
    "exampleCn": "他们仍在寻找一个新主任"
   },
   {
    "word": "souvenir",
    "phonetic": ",suvə'nɪr",
    "pos": "n.",
    "meaning": "纪念品；礼物",
    "example": "a souvenir shop",
    "exampleCn": "纪念品商店"
   },
   {
    "word": "pastime",
    "phonetic": "'pæstaɪm",
    "pos": "n.",
    "meaning": "娱乐，消遣",
    "example": "Reading was her favourite pastime.",
    "exampleCn": "阅读是她最喜爱的消遣方式。"
   },
   {
    "word": "foster",
    "phonetic": "'fɔstɚ",
    "pos": "vt",
    "meaning": "培养；养育，抚育；抱（希望等）",
    "example": "The couple wanted to adopt a black child they had been fostering.",
    "exampleCn": "那对夫妇想收养他们代养的一个黑人小孩。"
   },
   {
    "word": "exaggerate",
    "phonetic": "ɪɡ'zædʒəret",
    "pos": "vt",
    "meaning": "使扩大；使增大；夸大；夸张",
    "example": "I couldn’t sleep for three days – I’m not exaggerating.",
    "exampleCn": "我三天没睡觉了——一点不夸张。"
   }
  ]
 },
 {
  "level": "B1",
  "name": "进阶",
  "band": "雅思 ≈5.5–6.0",
  "desc": "按词频排列的第 3 段，对应雅思 5.5–6.0 的中等词汇量。",
  "words": [
   {
    "word": "gracious",
    "phonetic": "'ɡreʃəs",
    "pos": "adj.",
    "meaning": "亲切的；高尚的；和蔼的；雅致的；天哪；哎呀",
    "example": "Sibyl was the most gracious, helpful, and generous person to work with.",
    "exampleCn": "西比尔非常和蔼，乐于助人，而且为人慷慨，和她共事最愉快。"
   },
   {
    "word": "familiar",
    "phonetic": "fə'mɪljɚ",
    "pos": "adj.",
    "meaning": "熟悉的；常见的；亲近的；常客；密友",
    "example": "a familiar tune",
    "exampleCn": "熟悉的曲调"
   },
   {
    "word": "physiological",
    "phonetic": ",fɪzɪə'lɑdʒɪkl",
    "pos": "adj.",
    "meaning": "生理学的",
    "example": "If so, this would add to a growing list of physiological and biological markers of sexual orientation.",
    "exampleCn": "如果是这样，这可能会给生理和生物学上的性取向标记增加一长串名单。"
   },
   {
    "word": "warehouse",
    "phonetic": "'wɛrhaʊs",
    "pos": "n.",
    "meaning": "[建][经]仓库；[贸易]货栈；大商店",
    "example": "I stored up the old furniture in the warehouse.",
    "exampleCn": "我把旧家具存放在了仓库里。"
   },
   {
    "word": "solitary",
    "phonetic": "'sɑlətɛri",
    "pos": "adj.",
    "meaning": "[动]孤独的；独居的；[动]独居者；隐士",
    "example": "the solitary goal of the match",
    "exampleCn": "这场比赛的唯一入球"
   },
   {
    "word": "complication",
    "phonetic": ",kɑmplɪ'keʃən",
    "pos": "n.",
    "meaning": "并发症；复杂；复杂化；混乱",
    "example": "The fact that the plane was late added a further complication to our journey.",
    "exampleCn": "飞机误点给我们的旅行带来了更大的麻烦。"
   },
   {
    "word": "redeem",
    "phonetic": "rɪ'dim",
    "pos": "vt",
    "meaning": "赎回；挽回；兑换；履行；补偿；恢复",
    "example": "Olivier’s performance redeemed an otherwise second-rate play.",
    "exampleCn": "奥利维尔的表演补救了一出本是二流水平的戏。"
   },
   {
    "word": "turnover",
    "phonetic": "'tɝn'ovɚ",
    "pos": "n.",
    "meaning": "[贸易]营业额；流通量；翻覆；半圆卷饼；翻过来的；可翻转的",
    "example": "The company had a turnover of $3.8 million.",
    "exampleCn": "那个公司拥有380万美元的营业额。"
   },
   {
    "word": "sanction",
    "phonetic": "'sæŋkʃən",
    "pos": "n.",
    "meaning": "制裁，处罚；认可；支持；制裁，处罚；批准；鼓励",
    "example": "a resolution to impose sanctions (= start using sanctions ) on DPRK",
    "exampleCn": "对朝鲜实施制裁的决议"
   },
   {
    "word": "motivate",
    "phonetic": "'motə'vet",
    "pos": "vt",
    "meaning": "刺激；使有动机；激发…的积极性",
    "example": "A good teacher has to be able to motivate her students.",
    "exampleCn": "好教师必须能够激发学生的积极性。"
   },
   {
    "word": "thorn",
    "phonetic": "θɔrn",
    "pos": "n.",
    "meaning": "[植]刺；荆棘",
    "example": "a long, low hedge of thorns",
    "exampleCn": "一长排矮矮的荆棘树篱"
   },
   {
    "word": "involve",
    "phonetic": "ɪn'vɑlv",
    "pos": "vt",
    "meaning": "包含；牵涉；使陷于；潜心于",
    "example": "What will the job involve?",
    "exampleCn": "这份工作包括什么？"
   },
   {
    "word": "architect",
    "phonetic": "'ɑrkɪtɛkt",
    "pos": "n.",
    "meaning": "建筑师；设计师",
    "example": "James Madison was the principal architect of the constitution.",
    "exampleCn": "詹姆斯·麦迪逊是该宪法的主设计师。"
   },
   {
    "word": "particle",
    "phonetic": "'pɑrtɪkl",
    "pos": "n.",
    "meaning": "颗粒；[物]质点；极小量；小品词",
    "example": "dust particles",
    "exampleCn": "尘埃"
   },
   {
    "word": "accord",
    "phonetic": "ə'kɔrd",
    "pos": "n.",
    "meaning": "符合；一致；协议；自愿；使一致；给予；符合；一致",
    "example": "There was a silence as the women turned with one accord to stare at Doreen.",
    "exampleCn": "那些女人一齐转身盯着多琳看，全场鸦雀无声。"
   },
   {
    "word": "pay",
    "phonetic": "pe",
    "pos": "vt",
    "meaning": "支付，付；偿还，补偿；[会计]付款；偿还；[劳经]工资，薪水；[会计]付款",
    "example": "Staff have been working without pay for the last month.",
    "exampleCn": "上个月员工们干活没拿到工资。"
   },
   {
    "word": "pharmaceutical",
    "phonetic": ",fɑrmə'sutɪkl",
    "pos": "n.",
    "meaning": "药物",
    "example": "the pharmaceutical industry",
    "exampleCn": "制药业"
   },
   {
    "word": "insult",
    "phonetic": "ɪn'sʌlt",
    "pos": "vt",
    "meaning": "侮辱；辱骂；损害；侮辱；凌辱；无礼",
    "example": "Nobody insults my family and gets away with it!",
    "exampleCn": "谁也别想侮辱了我的家人之后就这么算了！"
   },
   {
    "word": "tug",
    "phonetic": "tʌɡ",
    "pos": "n.",
    "meaning": "拖船；拖曳；苦干；用力拉；竞争；努力做；用力拉；较量；用拖船拖",
    "example": "The woman gently tugged his arm.",
    "exampleCn": "那女人轻轻拽了拽他的胳膊。"
   },
   {
    "word": "constituent",
    "phonetic": "kən'stɪtʃuənt",
    "pos": "n.",
    "meaning": "成分；选民；委托人；构成的；选举的",
    "example": "the EU and its constituent members",
    "exampleCn": "欧盟及其成员国"
   },
   {
    "word": "piecemeal",
    "phonetic": "'pismil",
    "pos": "adj.",
    "meaning": "零碎的；逐渐的；片；块；粉碎",
    "example": "If you have tests, perhaps you could adopt more of the other practices in a piecemeal fashion, but why would you want to?",
    "exampleCn": "如果您有了一些测试，您或许能够进一步零零碎碎地采用更多其它的测试，但您为什么要这样做呢？"
   },
   {
    "word": "decimal",
    "phonetic": "'dɛsɪml",
    "pos": "adj.",
    "meaning": "小数的；[数]十进位的；[数]小数",
    "example": "changing to a decimal system",
    "exampleCn": "改为十进制"
   },
   {
    "word": "starch",
    "phonetic": "stɑrtʃ",
    "pos": "n.",
    "meaning": "[有化]淀粉；刻板，生硬",
    "example": "He eats a lot of starch.",
    "exampleCn": "他吃大量含淀粉的食物。"
   },
   {
    "word": "invincible",
    "phonetic": "ɪn'vɪnsəbl",
    "pos": "adj.",
    "meaning": "无敌的；不能征服的",
    "example": "The might of the army is \"invincible,\" according to state media but the refugees are rather cynical about the ill equipped force.",
    "exampleCn": "朝鲜官方媒体称朝鲜的军事力量是“无敌的”，可是朝鲜难民却对装备落后的军队表示出不屑。"
   },
   {
    "word": "anchor",
    "phonetic": "'æŋkɚ",
    "pos": "n.",
    "meaning": "[船]锚；抛锚停泊；靠山；新闻节目主播；抛锚；[机]使固定；主持节目",
    "example": "We dropped anchor a few yards offshore.",
    "exampleCn": "我们在离岸几码远的地方抛锚停航。"
   },
   {
    "word": "avail",
    "phonetic": "ə'vel",
    "pos": "vi",
    "meaning": "有用，有利；有利，有用；效用，利益",
    "example": "Guests should feel at liberty to avail themselves of your facilities.",
    "exampleCn": "客人们应可以随意使用你们的设施。"
   },
   {
    "word": "isolate",
    "phonetic": "aɪslˌet",
    "pos": "vt",
    "meaning": "[生物]使隔离；使孤立；使绝缘；[生物]隔离；孤立；[生物]隔离的；孤立的",
    "example": "The town was isolated by the floods.",
    "exampleCn": "洪水使该镇与外界隔绝。"
   },
   {
    "word": "limp",
    "phonetic": "lɪmp",
    "pos": "adj.",
    "meaning": "柔软的，无力的；软弱的；跛行，一拐一拐地走；缓慢费力地前进；跛行",
    "example": "a limp handshake",
    "exampleCn": "无力的握手"
   },
   {
    "word": "represent",
    "phonetic": ",rɛprɪ'zɛnt",
    "pos": "vt",
    "meaning": "代表；表现；描绘；回忆；再赠送；代表；提出异议",
    "example": "Mr Kobayashi was chosen to represent the company at the conference.",
    "exampleCn": "小林先生被选中代表公司出席会议。"
   },
   {
    "word": "dissipate",
    "phonetic": "'dɪsɪpet",
    "pos": "vt",
    "meaning": "浪费；使…消散；驱散；放荡",
    "example": "As he thought it over, his anger gradually dissipated.",
    "exampleCn": "他想明白后，怒气就渐渐消了。"
   },
   {
    "word": "intersection",
    "phonetic": ",ɪntɚ'sɛkʃən",
    "pos": "n.",
    "meaning": "交叉；[交]十字路口；交集；交叉点",
    "example": "We crossed at a busy intersection.",
    "exampleCn": "我们穿过了一个繁忙的道路交叉口。"
   },
   {
    "word": "complement",
    "phonetic": "ˈkɑːmplɪment",
    "pos": "vt",
    "meaning": "补足，补助",
    "example": "The green wallpaper is the perfect complement to the old pine of the dresser.",
    "exampleCn": "绿色墙纸是旧松木梳妆台的完美衬托。"
   },
   {
    "word": "vacuum",
    "phonetic": "'vækjʊəm",
    "pos": "n.",
    "meaning": "[真空]真空；空间；真空吸尘器",
    "example": "His presence should fill the power vacuum that has been developing over the past few days.",
    "exampleCn": "他的出现应该能填补过去几天中形成的权力空缺。"
   },
   {
    "word": "personal",
    "phonetic": "'pɝsənl",
    "pos": "adj.",
    "meaning": "个人的；身体的；亲自的",
    "example": "My personal view is that we shouldn’t offer him the job.",
    "exampleCn": "我个人认为我们不该给他这份工作。"
   },
   {
    "word": "sulphur",
    "phonetic": "'sʌlfə",
    "pos": "n.",
    "meaning": "[化学]硫磺；硫磺色；使硫化；用硫磺处理",
    "example": "Burning sulphur creates poisonous fumes.",
    "exampleCn": "燃烧的硫磺会产生有毒烟雾。"
   },
   {
    "word": "stride",
    "phonetic": "straɪd",
    "pos": "n.",
    "meaning": "大步；步幅；进展；跨过；大踏步走过；跨坐在…；跨；跨过；大步行走",
    "example": "Paco reached the door in only three strides.",
    "exampleCn": "帕科三大步就走到了门口。"
   },
   {
    "word": "linen",
    "phonetic": "'lɪnɪn",
    "pos": "n.",
    "meaning": "亚麻布，亚麻线；[纺]亚麻制品；亚麻的；[纺]亚麻布制的",
    "example": "a linen jacket",
    "exampleCn": "亚麻布夹克"
   },
   {
    "word": "grip",
    "phonetic": "ɡrɪp",
    "pos": "n.",
    "meaning": "紧握；柄；手提包；支配；紧握；夹紧；抓住",
    "example": "Hold the microphone in a firm grip and keep it still.",
    "exampleCn": "紧紧握住麦克风不要让它动。"
   },
   {
    "word": "sake",
    "phonetic": "[sek]",
    "pos": "n.",
    "meaning": "目的；利益；理由；日本米酒",
    "example": "He moved to the seaside for the sake of his health.",
    "exampleCn": "他为了健康而迁居海滨。"
   },
   {
    "word": "piety",
    "phonetic": "'paɪəti",
    "pos": "n.",
    "meaning": "虔诚；孝敬；虔诚的行为或语言",
    "example": "an act of Christian piety",
    "exampleCn": "表达基督徒虔诚的行为"
   },
   {
    "word": "concern",
    "phonetic": "kən'sɝn",
    "pos": "vt",
    "meaning": "涉及，关系到；使担心；关系；关心；关心的事",
    "example": "He was moved by her obvious concern.",
    "exampleCn": "她明显的关心使他感动。"
   },
   {
    "word": "intuition",
    "phonetic": ",ɪntu'ɪʃən",
    "pos": "n.",
    "meaning": "[心理]直觉；直觉力；直觉的知识",
    "example": "feminine intuition",
    "exampleCn": "女性的直觉"
   },
   {
    "word": "troupe",
    "phonetic": "trʊp",
    "pos": "n.",
    "meaning": "剧团；一班；一团；巡回演出",
    "example": "...troupes of travelling actors.",
    "exampleCn": "…巡回演出的演员剧团。"
   },
   {
    "word": "panel",
    "phonetic": "'pænl",
    "pos": "n.",
    "meaning": "仪表板；[建]嵌板；座谈小组，全体陪审员",
    "example": "He assembled a panel of scholars to advise him.",
    "exampleCn": "他集结了一个学者小组为他出谋划策。"
   },
   {
    "word": "ascent",
    "phonetic": "ə'sɛnt",
    "pos": "n.",
    "meaning": "上升；[公路]上坡路；登高",
    "example": "the first ascent of Qomolangma",
    "exampleCn": "首次攀登珠穆朗玛峰"
   },
   {
    "word": "anthem",
    "phonetic": "'ænθəm",
    "pos": "n.",
    "meaning": "赞美诗；圣歌",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "traverse",
    "phonetic": "trə'vɝs",
    "pos": "n.",
    "meaning": "穿过；横贯；横木；穿过；反对；详细研究；在…来回移动；横越；[机]旋转；来回移动；横贯的",
    "example": "two minutes to traverse the park",
    "exampleCn": "两分钟横穿公园"
   },
   {
    "word": "qualify",
    "phonetic": "ˈkwɑləˌfaɪ",
    "pos": "vt",
    "meaning": "限制；使具有资格；证明…合格；取得资格，有资格",
    "example": "Free school lunches are given to children who qualify.",
    "exampleCn": "符合条件的儿童可获得免费的学生午餐。"
   },
   {
    "word": "manifold",
    "phonetic": "'mænɪfold",
    "pos": "vt",
    "meaning": "复写，复印；增多；使……多样化；多方面的，有许多部分的；各式各样的",
    "example": "The reasons for this situation are manifold.",
    "exampleCn": "出现这种情况原因是多方面的。"
   },
   {
    "word": "oriental",
    "phonetic": ",orɪ'ɛntəl",
    "pos": "adj.",
    "meaning": "东方的；东方人的；东方人",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "fracture",
    "phonetic": "'fræktʃɚ",
    "pos": "n.",
    "meaning": "破裂，[力]断裂；[外科]骨折；破裂；折断；使破裂",
    "example": "At least one-third of all women over ninety have sustained a hip fracture.",
    "exampleCn": "90岁以上的妇女中至少有1/3遭受过髋骨骨折。"
   },
   {
    "word": "snap",
    "phonetic": "snæp",
    "pos": "vt",
    "meaning": "突然折断，拉断；猛咬；啪地关上；咬；厉声说；咯嗒一声关上；猛咬；劈啪声；突然折断；突然的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "capture",
    "phonetic": "'kæptʃɚ",
    "pos": "vt",
    "meaning": "[物]俘获；夺得；捕获；战利品，俘虏",
    "example": "Government troops have succeeded in capturing the rebel leader.",
    "exampleCn": "政府军已经成功抓获叛乱分子的头目。"
   },
   {
    "word": "kidney",
    "phonetic": "'kɪdni",
    "pos": "n.",
    "meaning": "[解剖]肾脏；腰子；个性",
    "example": "a kidney transplant",
    "exampleCn": "肾脏移植"
   },
   {
    "word": "disaster",
    "phonetic": "dɪ'zæstɚ",
    "pos": "n.",
    "meaning": "灾难，灾祸；不幸",
    "example": "One hundred and twenty people died in China’s worst air disaster .",
    "exampleCn": "有120人在中国这起最惨烈的空难事故中丧生。"
   },
   {
    "word": "customary",
    "phonetic": "'kʌstə'mɛri",
    "pos": "adj.",
    "meaning": "习惯的；通常的",
    "example": "Barbara answered with her customary enthusiasm.",
    "exampleCn": "芭芭拉以惯有的热情作了回答。"
   },
   {
    "word": "tentative",
    "phonetic": "'tɛntətɪv",
    "pos": "adj.",
    "meaning": "[试验]试验性的，暂定的；踌躇的；假设，试验",
    "example": "I passed on my tentative conclusions to the police.",
    "exampleCn": "我把我的初步结论递交给了警方。"
   },
   {
    "word": "figure",
    "phonetic": "'fɪɡjɚ",
    "pos": "n.",
    "meaning": "[数]数字；人物；图形；价格；（人的）体形；画像；计算；出现；扮演角色；计算；认为；描绘；象征",
    "example": "a natural ability with figures",
    "exampleCn": "算术天赋"
   },
   {
    "word": "undergo",
    "phonetic": ",ʌndɚ'ɡo",
    "pos": "vt",
    "meaning": "经历，经受；忍受",
    "example": "The country has undergone massive changes recently.",
    "exampleCn": "这个国家最近经历了巨大的变化。"
   },
   {
    "word": "sprawl",
    "phonetic": "sprɔl",
    "pos": "vi",
    "meaning": "蔓延；伸开手足躺；无计划地扩展；懒散地伸开；使蔓生；蔓生；伸开手足躺卧姿势",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "trek",
    "phonetic": "trɛk",
    "pos": "n.",
    "meaning": "艰苦跋涉；（牛）拉（货车）；搬运；艰苦跋涉",
    "example": "...trekking through the jungles.",
    "exampleCn": "…徒步穿越丛林。"
   },
   {
    "word": "equation",
    "phonetic": "ɪ'kweʒn",
    "pos": "n.",
    "meaning": "[数]方程式，等式；相等；[化学]反应式",
    "example": "In the equation 2x + 1 = 7, what is x?",
    "exampleCn": "在方程式2x+1=7中，x的值为多少？"
   },
   {
    "word": "mould",
    "phonetic": "məuld",
    "pos": "vi",
    "meaning": "发霉；浇铸；用泥土覆盖；模具；霉",
    "example": "Another method, used especially for figures, was to pour the clay into a mould.",
    "exampleCn": "另一个方法是把黏土倒入模具中，尤其用于铸造人像。"
   },
   {
    "word": "depict",
    "phonetic": "dɪ'pɪkt",
    "pos": "vt",
    "meaning": "描述；描画",
    "example": "a book depicting life in pre-revolutionary Russia",
    "exampleCn": "描写革命前俄国人生活的一本书"
   },
   {
    "word": "grease",
    "phonetic": "gris",
    "pos": "vt",
    "meaning": "涂脂于；贿赂；油脂；贿赂",
    "example": "His hair is thick with grease.",
    "exampleCn": "他的头发油腻腻的。"
   },
   {
    "word": "insolvent",
    "phonetic": "ɪn'sɑlvənt",
    "pos": "n.",
    "meaning": "[经]破产者；无力偿还者；[经]破产的；无力偿还的",
    "example": "The company was later declared insolvent (= officially said to be insolvent ).",
    "exampleCn": "公司随后被宣布破产。"
   },
   {
    "word": "misery",
    "phonetic": "'mɪzəri",
    "pos": "n.",
    "meaning": "痛苦，悲惨；不幸；苦恼；穷困",
    "example": "She looked away so that Tom wouldn’t see her misery.",
    "exampleCn": "她扭过头去，不让汤姆看到自己的痛苦。"
   },
   {
    "word": "zeal",
    "phonetic": "zil",
    "pos": "n.",
    "meaning": "热情；热心；热诚",
    "example": "...his zeal for teaching.",
    "exampleCn": "…他对教学的热衷。"
   },
   {
    "word": "erupt",
    "phonetic": "ɪ'rʌpt",
    "pos": "vi",
    "meaning": "爆发；喷出；发疹；长牙；爆发；喷出",
    "example": "Violence erupted after police shot a student during the demonstration.",
    "exampleCn": "警察向示威人群中的一名学生开枪，暴乱随之发生。"
   },
   {
    "word": "compliance",
    "phonetic": "kəm'plaɪəns",
    "pos": "n.",
    "meaning": "顺从，服从；承诺",
    "example": "Inspectors were sent to visit nuclear sites and verify compliance with the treaty.",
    "exampleCn": "监察员被派去参观核址并核实条约的遵守情况。"
   },
   {
    "word": "apparent",
    "phonetic": "ə'pærənt",
    "pos": "adj.",
    "meaning": "显然的；表面上的",
    "example": "The difference in quality was immediately apparent .",
    "exampleCn": "质量的差异显而易见。"
   },
   {
    "word": "ore",
    "phonetic": "ɔr",
    "pos": "n.",
    "meaning": "[矿物]矿；矿石",
    "example": "iron ore",
    "exampleCn": "铁矿石"
   },
   {
    "word": "temper",
    "phonetic": "'tɛmpɚ",
    "pos": "n.",
    "meaning": "脾气；（钢等）[机]回火；性情；倾向；[机]使回火；锻炼；调和；使缓和；[机]回火；调和",
    "example": "That temper of hers will get her into trouble one of these days.",
    "exampleCn": "她那种脾气早晚会让她惹麻烦的。"
   },
   {
    "word": "atlas",
    "phonetic": "",
    "pos": "n.",
    "meaning": "地图册；图表集",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "fuse",
    "phonetic": "fjuz",
    "pos": "vi",
    "meaning": "融合；熔化，熔融；使融合；使熔化，使熔融；[电]保险丝；[军][矿业]导火线，雷管",
    "example": "two 13 amp fuses",
    "exampleCn": "两根13安培的保险丝"
   },
   {
    "word": "antecedent",
    "phonetic": "'æntə'sidnt",
    "pos": "n.",
    "meaning": "前情；先行词；祖先；先行的；前驱的；先前的",
    "example": "historical antecedents",
    "exampleCn": "历史先例"
   },
   {
    "word": "inflict",
    "phonetic": "ɪn'flɪkt",
    "pos": "vt",
    "meaning": "造成；使遭受（损伤、痛苦等）；给予（打击等）",
    "example": "Detectives warned that the men could inflict serious injury.",
    "exampleCn": "警探提醒说这些人可能会造成严重伤害。"
   },
   {
    "word": "glossary",
    "phonetic": "'ɡlɑsəri",
    "pos": "n.",
    "meaning": "词汇表；术语汇编",
    "example": "A glossary of terms is included for the reader's convenience.",
    "exampleCn": "为了方便读者，还收录了术语汇编。"
   },
   {
    "word": "declare",
    "phonetic": "dɪ'klɛr",
    "pos": "vt",
    "meaning": "宣布，声明；断言，宣称；声明，宣布",
    "example": "A state of emergency has been declared.",
    "exampleCn": "已宣布进入紧急状态。"
   },
   {
    "word": "generate",
    "phonetic": "'dʒɛnəret",
    "pos": "vt",
    "meaning": "使形成；发生；[生物]生殖",
    "example": "a useful technique for generating new ideas",
    "exampleCn": "能产生新创意的有用技术"
   },
   {
    "word": "regeneration",
    "phonetic": "ridʒɛnə'reʃən",
    "pos": "n.",
    "meaning": "[生物][化学][物]再生，重生；重建",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "jagged",
    "phonetic": "'dʒæɡɪd",
    "pos": "adj.",
    "meaning": "[生物]锯齿状的；参差不齐的",
    "example": "the broken bottle’s jagged edge",
    "exampleCn": "碎瓶子的锯齿状边缘"
   },
   {
    "word": "impressive",
    "phonetic": "ɪm'prɛsɪv",
    "pos": "adj.",
    "meaning": "感人的；令人钦佩的；给人以深刻印象的",
    "example": "The figures certainly look impressive.",
    "exampleCn": "这些数字看上去确实很可观。"
   },
   {
    "word": "parallel",
    "phonetic": "'pærəlɛl",
    "pos": "n.",
    "meaning": "[天][数]平行线；对比；[天][数]平行的；类似的，相同的",
    "example": "Lines AB and CD are parallel. AB",
    "exampleCn": "线与CD线平行。"
   },
   {
    "word": "patio",
    "phonetic": "'pætɪo",
    "pos": "n.",
    "meaning": "露台；天井",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "overdue",
    "phonetic": "'ovɚ'dʊ",
    "pos": "adj.",
    "meaning": "过期的；迟到的；未兑的",
    "example": "an overdue gas bill",
    "exampleCn": "逾期未付的煤气账单"
   },
   {
    "word": "amount",
    "phonetic": "ə'maʊnt",
    "pos": "vi",
    "meaning": "[会计]总计，合计；相当于；[数]共计；产生…结果；数量；总额，[数]总数",
    "example": "Please pay the full amount (=  of money  ) by the end of the month.",
    "exampleCn": "请在月底前全额付清。"
   },
   {
    "word": "cast",
    "phonetic": "kæst",
    "pos": "vt",
    "meaning": "投，抛；计算；[印刷]浇铸；投射（光、影、视线等）；投掷，抛；[机]铸件，[古生]铸型；演员阵容；脱落物；投，抛垂钓鱼钩；计算，把几个数字加起来",
    "example": "the shade cast by low-hanging branches",
    "exampleCn": "低垂的树枝投下的阴影"
   },
   {
    "word": "lodging",
    "phonetic": "'lɑdʒɪŋ",
    "pos": "n.",
    "meaning": "寄宿；寄宿处；出租的房间、住房",
    "example": "It’s £90 a week for board and lodging (= meals and a room ).",
    "exampleCn": "食宿费每周90英镑。"
   },
   {
    "word": "dingy",
    "phonetic": "'dɪndʒi",
    "pos": "adj.",
    "meaning": "昏暗的；肮脏的",
    "example": "a dingy room",
    "exampleCn": "阴暗邋遢的房间"
   },
   {
    "word": "temperament",
    "phonetic": "'tɛmprəmənt",
    "pos": "n.",
    "meaning": "气质，性情，[心理]性格；急躁",
    "example": "His impulsive temperament regularly got him into difficulties.",
    "exampleCn": "他容易冲动的性格经常使他陷入困境。"
   },
   {
    "word": "shabby",
    "phonetic": "ˈʃæbi",
    "pos": "adj.",
    "meaning": "破旧的；卑鄙的；吝啬的；低劣的",
    "example": "Hugh’s jacket was old and shabby.",
    "exampleCn": "休的夹克衫又旧又破。"
   },
   {
    "word": "foremost",
    "phonetic": "'fɔr'most",
    "pos": "adj.",
    "meaning": "最重要的；最先的；首先；居于首位地",
    "example": "The foremost of these is other people.",
    "exampleCn": "这其中最重要的就是身边的人。"
   },
   {
    "word": "merge",
    "phonetic": "mɝdʒ",
    "pos": "vt",
    "meaning": "合并；使合并；吞没；合并；融合",
    "example": "The company plans to merge its subsidiaries in the US.",
    "exampleCn": "该公司计划合并其在美国的几家子公司。"
   },
   {
    "word": "attorney",
    "phonetic": "ə'tɝni",
    "pos": "n.",
    "meaning": "律师；[法]代理人",
    "example": "...a prosecuting attorney.",
    "exampleCn": "…一位公诉律师。"
   },
   {
    "word": "militant",
    "phonetic": "'mɪlɪtənt",
    "pos": "adj.",
    "meaning": "好战的；富有战斗性的人；好斗者",
    "example": "militant political activists",
    "exampleCn": "激进的政治活动家"
   },
   {
    "word": "wrinkle",
    "phonetic": "'rɪŋkl",
    "pos": "n.",
    "meaning": "皱纹；起皱；使起皱纹",
    "example": "Her face was a mass of wrinkles.",
    "exampleCn": "她的脸上布满皱纹。"
   },
   {
    "word": "maintain",
    "phonetic": "men'ten",
    "pos": "vt",
    "meaning": "维持；继续；维修；主张；供养",
    "example": "Careers Officers maintain contact with young people when they have left school.",
    "exampleCn": "年轻人离开学校以后，职业指导员和他们保持联系。"
   },
   {
    "word": "editorial",
    "phonetic": ",ɛdɪ'tɔrɪəl",
    "pos": "adj.",
    "meaning": "编辑的；社论的",
    "example": "In an editorial, The New York Times suggests the victory could turn nasty.",
    "exampleCn": "在一篇社论中，《纽约时报》认为该胜利会转成恶梦。"
   },
   {
    "word": "kin",
    "phonetic": "kɪn",
    "pos": "n.",
    "meaning": "亲戚；家族；同族；同类的；有亲属关系的；性质类似的",
    "example": "We’ll have to notify the next of kin of his death.",
    "exampleCn": "我们得把他去世的消息通知他的直系亲属。"
   },
   {
    "word": "contend",
    "phonetic": "kən'tɛnd",
    "pos": "vi",
    "meaning": "竞争；奋斗；斗争；争论；主张；为...斗争",
    "example": "Inevitably, fights break out between the members of contending groups.",
    "exampleCn": "争权夺利的几个团体之间不可避免地发生了打斗。"
   },
   {
    "word": "partition",
    "phonetic": "pɑr'tɪʃən",
    "pos": "n.",
    "meaning": "[计]划分，分开；[数]分割；[建]隔墙；隔离物；[数]分割；分隔；区分",
    "example": "...fighting which followed the partition of India.",
    "exampleCn": "…印度分裂后的争斗。"
   },
   {
    "word": "outbreak",
    "phonetic": "'aʊtbrek",
    "pos": "n.",
    "meaning": "（战争的）爆发；（疾病的）发作；爆发",
    "example": "a cholera outbreak",
    "exampleCn": "霍乱的爆发"
   },
   {
    "word": "authoritative",
    "phonetic": "ə'θɔrətetɪv",
    "pos": "adj.",
    "meaning": "有权威的；命令式的；当局的",
    "example": "the most authoritative work on English surnames",
    "exampleCn": "有关英语姓氏的最权威著作"
   },
   {
    "word": "slippery",
    "phonetic": "'slɪpəri",
    "pos": "adj.",
    "meaning": "滑的；狡猾的；不稳定的",
    "example": "In places, the path can be wet and slippery.",
    "exampleCn": "路上有些地方可能又湿又滑。"
   },
   {
    "word": "goal",
    "phonetic": "ɡol",
    "pos": "n.",
    "meaning": "目标；球门，得分数；终点",
    "example": "Your goal as a parent is to help your child become an independent adult.",
    "exampleCn": "身为父母，你的目标就是要培养孩子成为独立的成年人。"
   },
   {
    "word": "outstrip",
    "phonetic": ",aʊt'strɪp",
    "pos": "vt",
    "meaning": "超过；胜过；比…跑得快",
    "example": "We outstripped all our competitors in sales last year.",
    "exampleCn": "去年我们的销售额超过了所有竞争对手。"
   },
   {
    "word": "preceding",
    "phonetic": "'prisidɪŋ",
    "pos": "adj.",
    "meaning": "在前的；前述的",
    "example": "As we saw in the preceding chapter, groups can be powerful agents of socialization.",
    "exampleCn": "如我们在前一章所见，团组可以是社会化的有力动因。"
   },
   {
    "word": "transform",
    "phonetic": "træns'fɔrm",
    "pos": "vt",
    "meaning": "改变，使…变形；转换；[数][电]变换，改变；转化",
    "example": "Increased population has transformed the landscape.",
    "exampleCn": "人口的增加使景观发生了变化。"
   },
   {
    "word": "skim",
    "phonetic": "skɪm",
    "pos": "vt",
    "meaning": "略读；撇去…的浮物；从…表面飞掠而过；去除；（为逃税而）隐瞒（部分收入）；浏览；掠过；脱脂的；撇去浮沫的；表层的",
    "example": "Julie skimmed the sports page.",
    "exampleCn": "朱莉浏览了体育版。"
   },
   {
    "word": "insure",
    "phonetic": "ɪn'ʃʊr",
    "pos": "vt",
    "meaning": "确保，保证；给…保险；确保；投保",
    "example": "Have you insured the contents of your home?",
    "exampleCn": "你给家庭财产投保了吗？"
   },
   {
    "word": "debris",
    "phonetic": "də'bri",
    "pos": "n.",
    "meaning": "碎片，残骸",
    "example": "She was hit by flying debris from the blast.",
    "exampleCn": "她被爆炸产生的飞散碎片击中。"
   },
   {
    "word": "hemisphere",
    "phonetic": "'hɛmɪsfɪr",
    "pos": "n.",
    "meaning": "[天]半球",
    "example": "the Northern hemisphere",
    "exampleCn": "北半球"
   },
   {
    "word": "dominant",
    "phonetic": "'dɑmɪnənt",
    "pos": "adj.",
    "meaning": "显性的；[生物]占优势的；[数]支配的，统治的",
    "example": "...a change which would maintain his party's dominant position in Scotland.",
    "exampleCn": "…巩固他的政党在苏格兰支配地位的一场变革。"
   },
   {
    "word": "antonym",
    "phonetic": "'æntənɪm",
    "pos": "n.",
    "meaning": "[语]反义词",
    "example": "a dictionary of synonyms and antonyms",
    "exampleCn": "同义词和反义词词典"
   },
   {
    "word": "emerge",
    "phonetic": "ɪ'mɝdʒ",
    "pos": "vi",
    "meaning": "浮现；摆脱；暴露",
    "example": "The flowers emerge in the spring.",
    "exampleCn": "花儿在春天开放。"
   },
   {
    "word": "squeeze",
    "phonetic": "skwiz",
    "pos": "vt",
    "meaning": "挤；紧握；勒索；压榨；紧握；拥挤；佣金",
    "example": "She smiled as he squeezed her hand.",
    "exampleCn": "他捏了捏她的手，她笑了。"
   },
   {
    "word": "nicety",
    "phonetic": "'naɪsəti",
    "pos": "n.",
    "meaning": "精密；美好；细节；拘泥细节",
    "example": "social niceties",
    "exampleCn": "社交上的细节"
   },
   {
    "word": "role",
    "phonetic": "rol",
    "pos": "n.",
    "meaning": "角色；任务",
    "example": "She has just landed the lead role in their latest production.",
    "exampleCn": "她刚在他们最新的作品中取得了主角。"
   },
   {
    "word": "remind",
    "phonetic": "rɪ'maɪnd",
    "pos": "vt",
    "meaning": "提醒；使想起",
    "example": "Yes, I’ll be there. Thanks for reminding me.",
    "exampleCn": "是的，我会去那里的。 谢谢提醒。"
   },
   {
    "word": "torture",
    "phonetic": "'tɔrtʃɚ",
    "pos": "vt",
    "meaning": "折磨；拷问；歪曲；折磨；拷问；歪曲",
    "example": "He died after five days of excruciating torture.",
    "exampleCn": "遭受了五天的严刑拷打之后，他死了。"
   },
   {
    "word": "condense",
    "phonetic": "kən'dɛns",
    "pos": "vi",
    "meaning": "浓缩；凝结；使浓缩；使压缩",
    "example": "the mist which condensed on every cold surface",
    "exampleCn": "每个冰冷的表面上凝结的水汽"
   },
   {
    "word": "exclusively",
    "phonetic": "ɪk'sklʊsɪvli",
    "pos": "adv.",
    "meaning": "唯一地；专有地；排外地",
    "example": "...an exclusively male domain.",
    "exampleCn": "…一个由男性独占的领域。"
   },
   {
    "word": "integral",
    "phonetic": "'ɪntɪɡrəl",
    "pos": "adj.",
    "meaning": "[数]积分的；完整的，整体的；[数]积分；部分；完整",
    "example": "Vegetables are an integral part of our diet.",
    "exampleCn": "蔬菜是我们膳食中不可缺少的一部分。"
   },
   {
    "word": "token",
    "phonetic": "'tokən",
    "pos": "n.",
    "meaning": "表征；代币；记号；象征的；表意的；作为对某事的保证的；象征；代表",
    "example": "After normalization of attributes, you can count on every token in an attribute being separated from its neighbors by whitespace.",
    "exampleCn": "在属性规范化后，可以依靠的属性中的每个记号是通过空白来与其邻居区分开来。"
   },
   {
    "word": "shift",
    "phonetic": "ʃɪft",
    "pos": "n.",
    "meaning": "移动；变化；手段；轮班；移动；转变；[遗]转换；转移；改变；替换",
    "example": "He stopped, shifting his cane to his left hand.",
    "exampleCn": "他停下来，把手杖移到左手。"
   },
   {
    "word": "taxation",
    "phonetic": "tæk'seʃən",
    "pos": "n.",
    "meaning": "课税，征税；[税收]税款",
    "example": "the government’s economic and taxation policy",
    "exampleCn": "政府的经济和税收政策"
   },
   {
    "word": "tow",
    "phonetic": "to",
    "pos": "n.",
    "meaning": "拖；[纺]麻的粗纤维；拖曳所用之绳；拖；牵引；曳",
    "example": "The ship had to be towed into the harbor.",
    "exampleCn": "那艘轮船不得不被拖进港口。"
   },
   {
    "word": "reliable",
    "phonetic": "rɪ'laɪəbl",
    "pos": "adj.",
    "meaning": "可靠的；可信赖的；可靠的人",
    "example": "a birth control method that is cheap and reliable",
    "exampleCn": "既便宜又可靠的避孕方法"
   },
   {
    "word": "deft",
    "phonetic": "deft",
    "pos": "adj.",
    "meaning": "灵巧的；机敏的；敏捷熟练的",
    "example": "He sketched her with quick, deft strokes.",
    "exampleCn": "他给她画素描，下笔又快又熟练。"
   },
   {
    "word": "potion",
    "phonetic": "'poʃən",
    "pos": "n.",
    "meaning": "一剂；一服；饮剂",
    "example": "...a magic potion that will make Siegfried forget Brunnhilde and fall in love with Gutrune.",
    "exampleCn": "…一种会使齐格弗里德忘掉布伦希德尔德而爱上古特鲁内娜的魔剂。"
   },
   {
    "word": "disarray",
    "phonetic": ",disə'rei",
    "pos": "n.",
    "meaning": "无秩序；杂乱；衣冠不整；使混乱；弄乱；使脱去衣服",
    "example": "The nation is in disarray following rioting led by the military.",
    "exampleCn": "该国发生由军队发动的暴乱后，陷入一片混乱。"
   },
   {
    "word": "overall",
    "phonetic": ",ovə'rɔl",
    "pos": "adj.",
    "meaning": "全部的；全体的；一切在内的；全部地；总的说来；工装裤；罩衫",
    "example": "The overall cost of the exhibition was £400,000.",
    "exampleCn": "展览会的全部费用是40万英镑。"
   },
   {
    "word": "resource",
    "phonetic": "'risɔrs",
    "pos": "n.",
    "meaning": "[计][环境]资源，财力；办法；智谋",
    "example": "Canada’s vast mineral resources",
    "exampleCn": "加拿大丰富的矿产资源"
   },
   {
    "word": "species",
    "phonetic": "'spiʃiz",
    "pos": "n.",
    "meaning": "[生物]物种；种类",
    "example": "Seven species of birds of prey have been observed.",
    "exampleCn": "已有七种猛禽被观察到。"
   },
   {
    "word": "platform",
    "phonetic": "'plæt'fɔrm",
    "pos": "n.",
    "meaning": "[计][矿业]平台；月台，[铁路]站台；坛；[家具]讲台",
    "example": "The Edinburgh train will depart from platform six.",
    "exampleCn": "开往爱丁堡的火车将从六号站台发车。"
   },
   {
    "word": "elastic",
    "phonetic": "ɪ'læstɪk",
    "pos": "adj.",
    "meaning": "[力]有弹性的；灵活的；易伸缩的；松紧带；橡皮圈",
    "example": "the horny elastic pad in a horse’s hoof",
    "exampleCn": "马蹄上粗硬而有弹性的肉掌"
   },
   {
    "word": "tenancy",
    "phonetic": "'tɛnənsi",
    "pos": "n.",
    "meaning": "租期；租用",
    "example": "a six-month tenancy",
    "exampleCn": "六个月的租赁期"
   },
   {
    "word": "minimal",
    "phonetic": "'mɪnɪməl",
    "pos": "adj.",
    "meaning": "最低的；最小限度的",
    "example": "The storm caused only minimal damage.",
    "exampleCn": "暴风雨只造成了轻微破坏。"
   },
   {
    "word": "inevitable",
    "phonetic": "ɪn'ɛvɪtəbl",
    "pos": "adj.",
    "meaning": "必然的，不可避免的",
    "example": "A further escalation of the crisis now seems inevitable.",
    "exampleCn": "危机的进一步升级现在看来已不可避免。"
   },
   {
    "word": "contradict",
    "phonetic": "'kɑntrə'dɪkt",
    "pos": "vt",
    "meaning": "反驳；否定；与…矛盾；与…抵触；反驳；否认；发生矛盾",
    "example": "Deborah opened her mouth to contradict, but closed it again.",
    "exampleCn": "黛博拉张口想要反驳，但又把嘴闭上了。"
   },
   {
    "word": "subsidy",
    "phonetic": "'sʌbsədi",
    "pos": "n.",
    "meaning": "[财政]补贴；[劳经]津贴；[会计][经]补助金",
    "example": "European farmers are planning a massive demonstration against farm subsidy cuts.",
    "exampleCn": "欧洲的农场主们正在策划一场反对削减农场补贴的大游行。"
   },
   {
    "word": "flare",
    "phonetic": "flɛr",
    "pos": "vt",
    "meaning": "使闪耀；使张开；用发光信号发出；使外倾；闪耀，闪光；燃烧；突然发怒；闪光，闪耀；耀斑；爆发；照明弹",
    "example": "The fire flared up again.",
    "exampleCn": "火又忽地旺了起来。"
   },
   {
    "word": "digest",
    "phonetic": "daɪ'dʒɛst",
    "pos": "vt",
    "meaning": "消化；吸收；融会贯通；文摘；摘要",
    "example": "Most babies can digest a wide range of food easily.",
    "exampleCn": "大多数婴儿能轻易地消化很多种食物。"
   },
   {
    "word": "din",
    "phonetic": "dɪn",
    "pos": "vt",
    "meaning": "喧闹，絮絮不休地说；喧闹，絮絮不休地说；喧嚣",
    "example": "They tried to make themselves heard over the din of the crowd.",
    "exampleCn": "他们竭力让自己的声音盖过人群的喧闹声。"
   },
   {
    "word": "shoal",
    "phonetic": "ʃol",
    "pos": "n.",
    "meaning": "[地理]浅滩；鱼群；潜在危险；变浅；使变浅；驶入；浅的",
    "example": "Among them swam shoals of fish.",
    "exampleCn": "在他们之中游动着一群群鱼儿。"
   },
   {
    "word": "hasty",
    "phonetic": "'hesti",
    "pos": "adj.",
    "meaning": "轻率的；匆忙的；草率的；性怠的",
    "example": "He soon regretted his hasty decision.",
    "exampleCn": "他很快就对自己仓促作出的决定感到后悔了。"
   },
   {
    "word": "insulate",
    "phonetic": "ˈɪnsəˌleɪt ; ˈɪnsjʊˌleɪt",
    "pos": "vt",
    "meaning": "隔离，使孤立；使绝缘，使隔热",
    "example": "an insulated attic",
    "exampleCn": "隔热[隔音]的阁楼"
   },
   {
    "word": "colony",
    "phonetic": "'kɑləni",
    "pos": "n.",
    "meaning": "殖民地；移民队",
    "example": "Algeria was formerly a French colony.",
    "exampleCn": "阿尔及利亚以前是法国的殖民地。"
   },
   {
    "word": "repent",
    "phonetic": "rɪ'pɛnt",
    "pos": "vi",
    "meaning": "后悔；忏悔；后悔；对…感到后悔；[植]匍匐生根的；[动]爬行的",
    "example": "Those who refuse to repent, he said, will be punished.",
    "exampleCn": "他说，那些不肯悔悟的人将受到惩罚。"
   },
   {
    "word": "illusion",
    "phonetic": "ɪ'luʒn",
    "pos": "n.",
    "meaning": "幻觉，[心理]错觉；错误的观念或信仰",
    "example": "She was under no illusion that he loved her.",
    "exampleCn": "她不再幻想他爱她了。"
   },
   {
    "word": "enrolment",
    "phonetic": "ɪn'rolmənt",
    "pos": "n.",
    "meaning": "登记，注册；入学",
    "example": "Enrolment will take place in September.",
    "exampleCn": "注册将于9月进行。"
   },
   {
    "word": "chaos",
    "phonetic": "'keɑs",
    "pos": "n.",
    "meaning": "[物]混沌，混乱",
    "example": "The country was plunged into economic chaos.",
    "exampleCn": "这个国家陷入了经济大混乱。"
   },
   {
    "word": "pine",
    "phonetic": "paɪn",
    "pos": "vi",
    "meaning": "渴望，痛苦；憔悴；[林]松树；凤梨，菠萝；为…悲哀；哀悼",
    "example": "an ancient pine forest",
    "exampleCn": "一片古老的松树林"
   },
   {
    "word": "transfuse",
    "phonetic": "trænz'fjʊz",
    "pos": "vt",
    "meaning": "输血；灌输；注入",
    "example": "There are no rules about when to transfuse and who to do it to.",
    "exampleCn": "从来没有相关规定，在什么时候什么人应该被输血。"
   },
   {
    "word": "comic",
    "phonetic": "'kɑmɪk",
    "pos": "adj.",
    "meaning": "喜剧的；滑稽的；有趣的；连环漫画；喜剧演员；滑稽人物",
    "example": "a comic novel",
    "exampleCn": "滑稽小说"
   },
   {
    "word": "infectious",
    "phonetic": "ɪn'fɛkʃəs",
    "pos": "adj.",
    "meaning": "[内科]传染的；传染性的；易传染的",
    "example": "infectious diseases",
    "exampleCn": "传染性疾病"
   },
   {
    "word": "liable",
    "phonetic": "'laɪəbl",
    "pos": "adj.",
    "meaning": "有责任的，有义务的；应受罚的；有…倾向的；易…的",
    "example": "The car is liable to overheat on long trips.",
    "exampleCn": "这辆汽车跑长途容易过热。"
   },
   {
    "word": "composite",
    "phonetic": "kɑm'pɑzɪt",
    "pos": "n.",
    "meaning": "复合材料；合成物；菊科；[数][植]复合的；合成的；菊科的；使合成；使混合",
    "example": "The author builds up a useful compo-site picture of contemporary consumer culture.",
    "exampleCn": "作者勾勒出了一幅实用的当代消费文化全景图。"
   },
   {
    "word": "moustache",
    "phonetic": "mə'stɑʃ",
    "pos": "n.",
    "meaning": "小胡子；髭；触须",
    "example": "He’s shaved off his moustache.",
    "exampleCn": "他剃去了小胡子。"
   },
   {
    "word": "acquaint",
    "phonetic": "ə'kwent",
    "pos": "vt",
    "meaning": "使熟悉；使认识",
    "example": "I need to acquaint myself with the new regulations.",
    "exampleCn": "我得熟悉一下新的规章制度。"
   },
   {
    "word": "adjoin",
    "phonetic": "ə'dʒɔɪn",
    "pos": "vi",
    "meaning": "毗连，邻接；毗连，邻接",
    "example": "A vacant plot of land adjoins his house.",
    "exampleCn": "有一块空地紧挨着他家。"
   },
   {
    "word": "sphere",
    "phonetic": "sfɪr",
    "pos": "n.",
    "meaning": "范围；[数]球体；包围；放入球内；使…成球形",
    "example": "Because the earth spins, it is not a perfect sphere.",
    "exampleCn": "因为地球旋转，所以它不是个完完全全的球体。"
   },
   {
    "word": "anecdote",
    "phonetic": "'ænɪkdot",
    "pos": "n.",
    "meaning": "轶事；奇闻；秘史",
    "example": "The book is full of amusing anecdotes about his life in Japan.",
    "exampleCn": "这本书里全是他在日本生活的趣闻轶事。"
   },
   {
    "word": "compartment",
    "phonetic": "kəm'pɑrtmənt",
    "pos": "vt",
    "meaning": "分隔；划分",
    "example": "The bag is divided into separate compartments .",
    "exampleCn": "这个包有一些独立的隔层。"
   },
   {
    "word": "durable",
    "phonetic": "'dʊrəbl",
    "pos": "adj.",
    "meaning": "耐用的，持久的；耐用品",
    "example": "Wood is a durable material.",
    "exampleCn": "木头是耐用材料。"
   },
   {
    "word": "growl",
    "phonetic": "ɡraʊl",
    "pos": "vt",
    "meaning": "咆哮；（雷电，炮等）[地物]轰鸣；咆哮声；吠声；不平",
    "example": "Their noise modulated to a concerted menacing growl punctuated by sharp yaps.",
    "exampleCn": "它们的喧闹声逐渐变为整齐划一的、带有威胁性的吼叫，还夹杂着刺耳的狂吠。"
   },
   {
    "word": "submit",
    "phonetic": "səb'mɪt",
    "pos": "vt",
    "meaning": "使服从；主张；呈递；[计]提交；服从",
    "example": "In desperation, Mrs. Jones submitted to an operation on her right knee to relieve the pain.",
    "exampleCn": "绝望中，琼斯夫人不得已接受了一次她右膝的手术以减轻疼痛。"
   },
   {
    "word": "arrogant",
    "phonetic": "'ærəɡənt",
    "pos": "adj.",
    "meaning": "自大的，傲慢的",
    "example": "He was unbearably arrogant.",
    "exampleCn": "他的傲慢让人无法忍受。"
   },
   {
    "word": "persecute",
    "phonetic": "'pɝsɪkjut",
    "pos": "vt",
    "meaning": "迫害；困扰；同…捣乱",
    "example": "The Puritans left England to escape being persecuted.",
    "exampleCn": "清教徒离开了英国以躲避迫害。"
   },
   {
    "word": "slot",
    "phonetic": "slɑt",
    "pos": "n.",
    "meaning": "位置；狭槽；水沟；硬币投币口；跟踪；开槽于",
    "example": "Alan dropped another quarter into the slot on the pay phone.",
    "exampleCn": "艾伦往付费电话的投币口里又塞了一枚 25 分的硬币。"
   },
   {
    "word": "access",
    "phonetic": "'æksɛs",
    "pos": "vt",
    "meaning": "使用；[计]存取；接近；进入；使用权；[电]通路",
    "example": "Access is by means of a small door on the right.",
    "exampleCn": "入口是右边的一扇小门。"
   },
   {
    "word": "terrestrial",
    "phonetic": "tə'rɛstrɪəl",
    "pos": "adj.",
    "meaning": "[天]地球的；[生物]陆地的，陆生的；人间的",
    "example": "...terrestrial life forms.",
    "exampleCn": "…地球上的生命形态。"
   },
   {
    "word": "crater",
    "phonetic": "'kretɚ",
    "pos": "n.",
    "meaning": "[地质]火山口；弹坑；在…上形成坑；取消；毁坏",
    "example": "craters on the moon’s surface",
    "exampleCn": "月球表面的坑"
   },
   {
    "word": "charge",
    "phonetic": "tʃɑrdʒ",
    "pos": "n.",
    "meaning": "[会计]费用；电荷；掌管；[法]控告；命令；[电]负载；[电]使充电；使承担；指责；装载；对…索费；向…冲去；[电]充电；[法]控告；索价；向前冲；记在账上",
    "example": "Even local nurseries charge $150 a week.",
    "exampleCn": "即便当地的托儿所每周也要收$150的费用。"
   },
   {
    "word": "nurture",
    "phonetic": "'nɝtʃɚ",
    "pos": "vt",
    "meaning": "养育；鼓励；培植；养育；教养；营养物",
    "example": "plants nurtured in the greenhouse",
    "exampleCn": "在温室里培育的植物"
   },
   {
    "word": "splash",
    "phonetic": "splæʃ",
    "pos": "vt",
    "meaning": "溅，泼；用...使液体飞溅；飞溅的水；污点；卖弄",
    "example": "A lot of people were in the water, swimming or simply splashing about.",
    "exampleCn": "很多人在水里游泳或者只是戏水。"
   },
   {
    "word": "modest",
    "phonetic": "'mɑdɪst",
    "pos": "adj.",
    "meaning": "谦虚的，谦逊的；适度的；端庄的；羞怯的",
    "example": "They had spent the night at a modest hotel.",
    "exampleCn": "他们在一家普通的旅馆过夜。"
   },
   {
    "word": "inspiration",
    "phonetic": "ˌɪnspəˈreʃən",
    "pos": "n.",
    "meaning": "灵感；鼓舞；[生理]吸气；妙计",
    "example": "The Malvern Hills have provided inspiration for many artists and musicians over the decades.",
    "exampleCn": "几十年来，莫尔文丘陵为很多艺术家和音乐家提供了灵感。"
   },
   {
    "word": "doubtless",
    "phonetic": "'daʊtləs",
    "pos": "adv.",
    "meaning": "无疑地；确定地；大概，多半；无疑的；确定的",
    "example": "Doubtless there would be lots of rumours.",
    "exampleCn": "无疑会谣言四起。"
   },
   {
    "word": "version",
    "phonetic": "'vɝʒn",
    "pos": "n.",
    "meaning": "[计]版本；[图情]译文；倒转术",
    "example": "Could Donna’s version of what happened that night be correct?",
    "exampleCn": "唐娜对那晚发生的事情的描述是否正确呢？"
   },
   {
    "word": "slack",
    "phonetic": "slæk",
    "pos": "adj.",
    "meaning": "松弛的；疏忽的；不流畅的；松懈；减弱；煤末；峡谷；放松；使缓慢；马虎地；缓慢地",
    "example": "Keep the rope slack until I tell you to pull it.",
    "exampleCn": "让绳子松着，直到我叫你拉紧。"
   },
   {
    "word": "correlate",
    "phonetic": "'kɔrəlet",
    "pos": "n.",
    "meaning": "相关物；相关联的人；关联的",
    "example": "Attempts to correlate specific language functions with particular parts of the brain have not advanced very far.",
    "exampleCn": "试图把特定的语言功能和大脑特定区域相联系的努力还没有取得很大进展。"
   },
   {
    "word": "subside",
    "phonetic": "səb'saɪd",
    "pos": "vi",
    "meaning": "平息；减弱；沉淀；坐下",
    "example": "After the heavy rains, part of the road subsided.",
    "exampleCn": "大雨过后，部分路面塌陷了。"
   },
   {
    "word": "donation",
    "phonetic": "do'neʃən",
    "pos": "n.",
    "meaning": "捐款，[经]捐赠物；捐赠",
    "example": "There have been generous donations from EU funds.",
    "exampleCn": "欧盟基金给予了慷慨的捐款。"
   },
   {
    "word": "feel",
    "phonetic": "fiːl",
    "pos": "vt",
    "meaning": "感觉；认为；触摸；试探；觉得；摸索；感觉；触摸",
    "example": "It’s nice fabric - it feels like velvet.",
    "exampleCn": "面料不错——摸上去像丝绒。"
   },
   {
    "word": "piracy",
    "phonetic": "'paɪrəsi",
    "pos": "n.",
    "meaning": "海盗行为；剽窃；著作权侵害；非法翻印",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "oscillate",
    "phonetic": "'ɑsɪlet",
    "pos": "vt",
    "meaning": "使振荡；使振动；使动摇；振荡；摆动；犹豫",
    "example": "The stock market is oscillating wildly at the moment.",
    "exampleCn": "股票市场现在正急剧波动。"
   },
   {
    "word": "norm",
    "phonetic": "nɔrm",
    "pos": "n.",
    "meaning": "规范，基准；[经管]定额，分配之工作量",
    "example": "Joyce’s style of writing was a striking departure from the literary norm.",
    "exampleCn": "乔伊斯的写作风格与传统的文学风格大相径庭。"
   },
   {
    "word": "trample",
    "phonetic": "'træmpl",
    "pos": "vt",
    "meaning": "践踏；蔑视，伤害；践踏；蔑视，伤害；脚步沉重地走；蹂躏；践踏声",
    "example": "Their in-terests and rights had been trampled underfoot .",
    "exampleCn": "他们的利益和权利都被踩在了脚下。"
   },
   {
    "word": "compliment",
    "phonetic": "ˈkɑːmplɪmənt",
    "pos": "n.",
    "meaning": "恭维；称赞；问候；致意；道贺；恭维；称赞",
    "example": "With the compliments of J. Smith & Son. J.",
    "exampleCn": "史密斯父子公司敬赠。"
   },
   {
    "word": "genuine",
    "phonetic": "'dʒɛnjʊɪn",
    "pos": "adj.",
    "meaning": "真实的，真正的；诚恳的",
    "example": "‘Did he really?’ Her surprise seemed genuine.",
    "exampleCn": "“他真的这样？”她好像是真的惊讶。"
   },
   {
    "word": "fancy",
    "phonetic": "'fænsi",
    "pos": "n.",
    "meaning": "幻想；想像力；爱好；想象的；奇特的；昂贵的；精选的；想象；喜爱；设想；自负；幻想；想象",
    "example": "Harry took me to a fancy restaurant for our anniversary.",
    "exampleCn": "哈里带我去了一家豪华餐厅，庆祝我们的结婚纪念日。"
   },
   {
    "word": "augment",
    "phonetic": "ɔɡ'mɛnt",
    "pos": "vi",
    "meaning": "增加；增大；增加；增大；增加；增大",
    "example": "Any surplus was sold to augment their income.",
    "exampleCn": "所有多余的东西被售卖一空来增加他们的收入。"
   },
   {
    "word": "smart",
    "phonetic": "smɑrt",
    "pos": "n.",
    "meaning": "痛苦；刺痛；聪明的；漂亮的；厉害的；巧妙的；敏捷的；潇洒的；剧烈的；刺痛；懊恼",
    "example": "The smart kids get good grades and go off to college.",
    "exampleCn": "聪明的孩子成绩好，可以去上大学。"
   },
   {
    "word": "gaudy",
    "phonetic": "'gɔdi",
    "pos": "adj.",
    "meaning": "华而不实的；俗丽的",
    "example": "gaudy jewelry",
    "exampleCn": "俗丽的珠宝"
   },
   {
    "word": "generalize",
    "phonetic": "'dʒɛnrəlaɪz",
    "pos": "vt",
    "meaning": "概括；推广；使...一般化；形成概念",
    "example": "Critics love to generalize, to formulate trends into which all new work must be fitted, however contradictory.",
    "exampleCn": "评论家喜欢概括，归纳出所有新作品都必须符合的趋势，不管它们是如何地不符。"
   },
   {
    "word": "carpenter",
    "phonetic": "ˈkɑːrpəntər",
    "pos": "n.",
    "meaning": "木匠，木工；制作",
    "example": "He is a carpenter by profession.",
    "exampleCn": "他以木工为业。"
   },
   {
    "word": "sincere",
    "phonetic": "sɪn'sɪr",
    "pos": "adj.",
    "meaning": "真诚的；诚挚的；真实的",
    "example": "Please accept my sincere apologies .",
    "exampleCn": "请接受我真诚的道歉。"
   },
   {
    "word": "glimmer",
    "phonetic": "'ɡlɪmɚ",
    "pos": "n.",
    "meaning": "微光；闪光；少许；闪烁；发微光",
    "example": "a weak glimmering light",
    "exampleCn": "微弱的闪光"
   },
   {
    "word": "muster",
    "phonetic": "'mʌstɚ",
    "pos": "vt",
    "meaning": "召集；对…进行点名；使振作；集合；检阅；点名册；集合人员；召集；聚集",
    "example": "In April 1185, he began to muster an army .",
    "exampleCn": "1185年4月，他开始召集军队。"
   },
   {
    "word": "gene",
    "phonetic": "dʒin",
    "pos": "n.",
    "meaning": "[遗]基因，遗传因子",
    "example": "human genes",
    "exampleCn": "人类基因"
   },
   {
    "word": "devastating",
    "phonetic": "'devəsteitiŋ",
    "pos": "adj.",
    "meaning": "毁灭性的；全然的；摧毁（devastate的ing形式）；毁坏",
    "example": "It will be a devastating blow for the town if the factory closes.",
    "exampleCn": "如果工厂关闭，对该镇来说将是沉重的打击。"
   },
   {
    "word": "decree",
    "phonetic": "dɪ'kri",
    "pos": "n.",
    "meaning": "[法]法令；判决；命令；颁布；注定；判决；注定；发布命令",
    "example": "The Emperor issued the decree repealing martial law.",
    "exampleCn": "皇帝下诏令取消了军事管制。"
   },
   {
    "word": "reservoir",
    "phonetic": "'rɛzɚ,vɔr",
    "pos": "n.",
    "meaning": "[水利]水库；蓄水池",
    "example": "All these earthquakes happened when the water level in Zipingpu reservoir was low.",
    "exampleCn": "所有这些地震都发生在紫坪铺水库水位很低的时候。"
   },
   {
    "word": "jeopardize",
    "phonetic": "'dʒɛpɚdaɪz",
    "pos": "vt",
    "meaning": "危害；使陷危地；使受危困",
    "example": "He has jeopardized his future career.",
    "exampleCn": "他损害了他的前程。"
   },
   {
    "word": "sterilize",
    "phonetic": "'stɛrəlaɪz",
    "pos": "vt",
    "meaning": "消毒，杀菌；使成不毛；使绝育；使不起作用",
    "example": "Sterilize the bottles with boiling water.",
    "exampleCn": "用沸水把这些瓶子消毒。"
   },
   {
    "word": "deadlock",
    "phonetic": "'dɛdlɑk",
    "pos": "n.",
    "meaning": "僵局，停顿；[计]死锁；停顿；停顿；相持不下",
    "example": "The talks have reached a complete deadlock .",
    "exampleCn": "会谈完全陷入僵局。"
   },
   {
    "word": "chant",
    "phonetic": "tʃænt",
    "pos": "n.",
    "meaning": "圣歌；赞美诗；唱；诵扬；唱歌；反覆地唱歌",
    "example": "...a Gregorian chant.",
    "exampleCn": "…一首格列高利圣歌。"
   },
   {
    "word": "rupture",
    "phonetic": "'rʌptʃɚ",
    "pos": "n.",
    "meaning": "破裂；决裂；疝气；破裂；发疝气；使破裂；断绝；发生疝",
    "example": "The pipe will rupture at its weakest point.",
    "exampleCn": "管道最薄弱的地方会破裂的。"
   },
   {
    "word": "ritual",
    "phonetic": "'rɪtʃuəl",
    "pos": "n.",
    "meaning": "仪式；惯例；礼制；仪式的；例行的；礼节性的",
    "example": "ancient pagan rituals",
    "exampleCn": "古老的异教仪式"
   },
   {
    "word": "gaol",
    "phonetic": "dʒeɪl",
    "pos": "vt",
    "meaning": "监禁；监狱",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "leaflet",
    "phonetic": "'liflət",
    "pos": "n.",
    "meaning": "[植]小叶；传单",
    "example": "Campaigners handed out leaflets on passive smoking.",
    "exampleCn": "发起人分发了关于被动吸烟的传单。"
   },
   {
    "word": "subsequent",
    "phonetic": "'sʌbsɪkwənt",
    "pos": "adj.",
    "meaning": "[地质]后来的，随后的",
    "example": "These skills were passed on to subsequent generations.",
    "exampleCn": "这些技能代代相传。"
   },
   {
    "word": "aviation",
    "phonetic": ",evɪ'eʃən",
    "pos": "n.",
    "meaning": "[航]航空；飞行术；飞机制造业",
    "example": "...the aviation industry.",
    "exampleCn": "…航空工业。"
   },
   {
    "word": "fraud",
    "phonetic": "frɔd",
    "pos": "n.",
    "meaning": "欺骗；骗子；诡计",
    "example": "{\"COLLOINEXA\":[\"electoral fraud\"]}",
    "exampleCn": "选举欺诈"
   },
   {
    "word": "initial",
    "phonetic": "ɪ'nɪʃəl",
    "pos": "adj.",
    "meaning": "[数]最初的；字首的",
    "example": "an initial investment of £5,000",
    "exampleCn": "5,000英镑的初始投资"
   },
   {
    "word": "erase",
    "phonetic": "ɪ'res",
    "pos": "vt",
    "meaning": "抹去；擦除",
    "example": "Some of the names had been accidentally erased.",
    "exampleCn": "有几个名字无意中被擦掉了。"
   },
   {
    "word": "readily",
    "phonetic": "'rɛdɪli",
    "pos": "adv.",
    "meaning": "容易地；乐意地；无困难地",
    "example": "Boats are readily available to visitors.",
    "exampleCn": "游客可以很方便地租到船只。"
   },
   {
    "word": "limb",
    "phonetic": "lɪm",
    "pos": "n.",
    "meaning": "肢，臂；分支；枝干",
    "example": "She would be able to stretch out her cramped limbs and rest for a few hours.",
    "exampleCn": "她将可以伸开蜷缩的四肢，休息几个小时。"
   },
   {
    "word": "mint",
    "phonetic": "mɪnt",
    "pos": "n.",
    "meaning": "[植]薄荷；[金融]造币厂，巨款；铸造，铸币",
    "example": "new potatoes sprinkled with chopped mint",
    "exampleCn": "撒上薄荷屑的嫩马铃薯"
   },
   {
    "word": "pitch",
    "phonetic": "pɪtʃ",
    "pos": "vi",
    "meaning": "倾斜；投掷；搭帐篷；坠落；投；掷；定位于；用沥青涂；扎营；向前倾跌；沥青；音高；程度；[松脂]树脂；倾斜；投掷",
    "example": "He ran the length of the pitch and scored.",
    "exampleCn": "他跑过全场，得分了。"
   },
   {
    "word": "counter",
    "phonetic": "'kaʊntɚ",
    "pos": "n.",
    "meaning": "[数][电子][核][计量]计数器，计算器；[贸易]柜台；计算者；相反地；反击；反对；相反的",
    "example": "He wondered if the girl behind the counter recognised him.",
    "exampleCn": "他在想柜台后面的那个女孩是否认出了他。"
   },
   {
    "word": "dedicate",
    "phonetic": "'dɛdɪket",
    "pos": "vt",
    "meaning": "致力；献身；题献",
    "example": "She dedicated her first album to Woody Allen, who she says understands her obsession.",
    "exampleCn": "她把她的第一张唱片献给伍迪·艾伦，她说艾伦理解她的痴迷。"
   },
   {
    "word": "vindicate",
    "phonetic": "'vɪndɪket",
    "pos": "vt",
    "meaning": "维护；证明…无辜；证明…正确",
    "example": "The decision to advertise has been vindicated by the fact that sales have grown.",
    "exampleCn": "销售增长的事实证明做广告宣传的决定是正确的。"
   },
   {
    "word": "current",
    "phonetic": "kɝ​ənt",
    "pos": "adj.",
    "meaning": "现在的；流通的，通用的；最近的；草写的；（水，气，电）[流]流；趋势；涌流",
    "example": "the current President",
    "exampleCn": "现任总统"
   },
   {
    "word": "flaunt",
    "phonetic": "flɔnt",
    "pos": "vt",
    "meaning": "炫耀；飘扬；飘扬；夸耀；炫耀；飘扬；招展",
    "example": "The rich flaunted their wealth while the poor starved on the streets.",
    "exampleCn": "富人摆阔，穷人却在大街上饿肚子。"
   },
   {
    "word": "parliament",
    "phonetic": "'pɑrləmənt",
    "pos": "n.",
    "meaning": "议会，国会",
    "example": "They demanded a free parliament and press.",
    "exampleCn": "他们要求议会自由和新闻自由。"
   },
   {
    "word": "specification",
    "phonetic": "'spɛsəfə'keʃən",
    "pos": "n.",
    "meaning": "规格；说明书；详述",
    "example": "The bolts met all the engineering specifications .",
    "exampleCn": "这些螺栓符合所有的工程设计规格。"
   },
   {
    "word": "anniversary",
    "phonetic": ",ænɪ'vɝsəri",
    "pos": "n.",
    "meaning": "周年纪念",
    "example": "Jack and Kim celebrated their twentieth wedding anniversary in January.",
    "exampleCn": "1月，杰克和金庆祝了他们的结婚20周年纪念日。"
   },
   {
    "word": "homestay",
    "phonetic": "'homste",
    "pos": "n.",
    "meaning": "在当地居民家居住",
    "example": "You could live in a homestay.",
    "exampleCn": "也可以住在当地人家中。"
   },
   {
    "word": "scan",
    "phonetic": "skæn",
    "pos": "vt",
    "meaning": "扫描；浏览；细看；详细调查；标出格律；扫描；浏览；审视；细看",
    "example": "He scanned the horizon, but there was no sign of the ship.",
    "exampleCn": "他朝地平线处仔细眺望，但是找不到那艘船的踪影。"
   },
   {
    "word": "grace",
    "phonetic": "ɡres",
    "pos": "n.",
    "meaning": "优雅；恩惠；魅力；慈悲",
    "example": "Lena moved with the grace of a dancer.",
    "exampleCn": "莉娜走路姿势有着舞者般的优美。"
   },
   {
    "word": "cite",
    "phonetic": "saɪt",
    "pos": "vt",
    "meaning": "引用；传讯；想起；表彰",
    "example": "The passage cited above is from a Robert Frost poem.",
    "exampleCn": "以上的引文出自罗伯特•弗罗斯特的一首诗。"
   },
   {
    "word": "tranquility",
    "phonetic": "",
    "pos": "n.",
    "meaning": "宁静；平静",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "severe",
    "phonetic": "sɪ'vɪr",
    "pos": "adj.",
    "meaning": "严峻的；严厉的；剧烈的；苛刻的",
    "example": "His injuries were quite severe.",
    "exampleCn": "他的伤势很严重。"
   },
   {
    "word": "excess",
    "phonetic": "'ɛk'sɛs",
    "pos": "n.",
    "meaning": "超过，超额；过度，过量；无节制；额外的，过量的；附加的",
    "example": "The car reached speeds in excess of 100 miles per hour.",
    "exampleCn": "这辆汽车的时速超过了100英里。"
   },
   {
    "word": "considerate",
    "phonetic": "kənˈsɪdərɪt",
    "pos": "adj.",
    "meaning": "体贴的；体谅的；考虑周到的",
    "example": "I think he's the most charming, most considerate man I've ever known.",
    "exampleCn": "我觉得他是我所认识的最有魅力、最体贴的男士。"
   },
   {
    "word": "distort",
    "phonetic": "dɪ'stɔrt",
    "pos": "vt",
    "meaning": "扭曲；使失真；曲解；扭曲；变形",
    "example": "His account was badly distorted by the press.",
    "exampleCn": "他的话被报界严重歪曲。"
   },
   {
    "word": "corpse",
    "phonetic": "kɔrps",
    "pos": "n.",
    "meaning": "尸体",
    "example": "The corpse was found by children playing in the woods.",
    "exampleCn": "这具尸体是在林子里玩耍的孩子发现的。"
   },
   {
    "word": "entity",
    "phonetic": "'ɛntəti",
    "pos": "n.",
    "meaning": "实体；存在；本质",
    "example": "The mind exists as a separate entity.",
    "exampleCn": "思想作为一个独立的实体存在。"
   },
   {
    "word": "wander",
    "phonetic": "'wɑndɚ",
    "pos": "vi",
    "meaning": "徘徊；漫步；迷路；离题；游荡，漫游",
    "example": "Don’t let any of the kids wander off.",
    "exampleCn": "不要让任何一个小孩走开去。"
   },
   {
    "word": "acute",
    "phonetic": "ə'kjut",
    "pos": "adj.",
    "meaning": "严重的，[医][植]急性的；[数][生物]敏锐的；激烈的；尖声的",
    "example": "acute arthritis",
    "exampleCn": "急性关节炎"
   },
   {
    "word": "delectable",
    "phonetic": "dɪ'lɛktəbl",
    "pos": "adj.",
    "meaning": "美味的；令人愉快的",
    "example": "Delectable smells rose from the kitchen.",
    "exampleCn": "厨房里传来诱人的香味。"
   },
   {
    "word": "context",
    "phonetic": "'kɑntɛkst",
    "pos": "n.",
    "meaning": "环境；[计]上下文；来龙去脉",
    "example": "The meaning of ‘mad’ depends on its context. mad",
    "exampleCn": "一词的意义要视上下文而定。"
   },
   {
    "word": "dominate",
    "phonetic": "'dɑmɪnet",
    "pos": "vt",
    "meaning": "控制；支配；占优势；在…中占主要地位；占优势；处于支配地位",
    "example": "The industry is dominated by five multinational companies.",
    "exampleCn": "这个行业受五家跨国公司控制。"
   },
   {
    "word": "flyover",
    "phonetic": "'flaɪovɚ",
    "pos": "n.",
    "meaning": "天桥；立交桥；立交马路",
    "example": "On the flyover near Balintawak station, I peer down at a chessboard of tin roofs.",
    "exampleCn": "在巴林塔瓦克火车站附近的一处立交桥上，我看见桥下如棋盘般的铁皮屋顶。"
   },
   {
    "word": "quaint",
    "phonetic": "kwent",
    "pos": "adj.",
    "meaning": "古雅的；奇怪的；离奇有趣的；做得很精巧的",
    "example": "a quaint little village in Yorkshire",
    "exampleCn": "约克郡一个古色古香的小村庄"
   },
   {
    "word": "dispose",
    "phonetic": "dɪ'spoz",
    "pos": "vt",
    "meaning": "处理；处置；安排；处理；安排；（能够）决定；处置；性情",
    "example": "Chinese vases are disposed around the gallery.",
    "exampleCn": "中国花瓶摆放在展馆四周。"
   },
   {
    "word": "regulate",
    "phonetic": "'rɛɡjulet",
    "pos": "vt",
    "meaning": "调节，规定；控制；校准；有系统的管理",
    "example": "strict rules regulating the use of chemicals in food",
    "exampleCn": "限制化学品在食物中使用的严格规定"
   },
   {
    "word": "antibiotic",
    "phonetic": ",æntɪbaɪ'ɑtɪk; ˌæntaɪ-",
    "pos": "adj.",
    "meaning": "[药][微]抗生的；抗菌的；[药]抗生素，[微]抗菌素",
    "example": "Your doctor may prescribe antibiotics.",
    "exampleCn": "你的大夫可能会开抗生素。"
   },
   {
    "word": "influence",
    "phonetic": "'ɪnfluəns",
    "pos": "n.",
    "meaning": "影响；势力；感化；有影响的人或事；影响；改变",
    "example": "As a scientist, his influence was immense.",
    "exampleCn": "身为一名科学家，他的影响力极大。"
   },
   {
    "word": "vein",
    "phonetic": "ven",
    "pos": "n.",
    "meaning": "血管；[植]叶脉；[地质]岩脉；[木]纹理；[昆]翅脉；性情",
    "example": "the pulmonary vein",
    "exampleCn": "肺静脉"
   },
   {
    "word": "obsession",
    "phonetic": "əb'sɛʃ(ə)n",
    "pos": "n.",
    "meaning": "痴迷；困扰；[内科][心理]强迫观念",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "capital",
    "phonetic": "'kæpɪtl",
    "pos": "n.",
    "meaning": "首都，省会；[会计]资金；大写字母；资本家；首都的；重要的；大写的",
    "example": "Washington D.C., the capital of the United States",
    "exampleCn": "美国首都华盛顿特区"
   },
   {
    "word": "swerve",
    "phonetic": "swɝv",
    "pos": "vi",
    "meaning": "转弯；突然转向；背离；转向；偏离的程度",
    "example": "Drivers coming in the opposite direction swerved to avoid the bodies.",
    "exampleCn": "从反方向过来的司机们突然转向以避开这些尸体。"
   },
   {
    "word": "remnant",
    "phonetic": "'rɛmnənt",
    "pos": "n.",
    "meaning": "剩余；剩余的",
    "example": "Beneath the present church were remnants of Roman flooring.",
    "exampleCn": "在目前的这座教堂下面还有残余的古罗马地板。"
   },
   {
    "word": "tilt",
    "phonetic": "tɪlt",
    "pos": "vi",
    "meaning": "[航][气象]倾斜；翘起；以言词或文字抨击；[航][气象]使倾斜；使翘起；[航][气象]倾斜",
    "example": "My mother tilted her head and smiled.",
    "exampleCn": "我妈妈歪着头笑了。"
   },
   {
    "word": "pass",
    "phonetic": "pæs",
    "pos": "n.",
    "meaning": "经过；及格；途径；护照；经过；传递；变化；终止；通过；经过；传递",
    "example": "The crowd parted to let the truck pass.",
    "exampleCn": "人群分开让卡车通过。"
   },
   {
    "word": "opaque",
    "phonetic": "o'pek",
    "pos": "adj.",
    "meaning": "[物]不透明的；不传热的；迟钝的；[物]使不透明；使不反光",
    "example": "a shower with an opaque glass door",
    "exampleCn": "装有不透明玻璃门的淋浴间"
   },
   {
    "word": "prestige",
    "phonetic": "prɛ'stidʒ",
    "pos": "n.",
    "meaning": "威望，声望；声誉",
    "example": "The king wanted to enhance his prestige through war.",
    "exampleCn": "国王想通过战争来提高自己的威信。"
   },
   {
    "word": "precipice",
    "phonetic": "'prɛsəpɪs",
    "pos": "n.",
    "meaning": "悬崖；绝壁；险境",
    "example": "A loose rock tumbled over the precipice.",
    "exampleCn": "一块松动的岩石从悬崖上滚落下来。"
   },
   {
    "word": "outskirts",
    "phonetic": "'aʊt'skɝts",
    "pos": "n.",
    "meaning": "市郊，郊区",
    "example": "Hours later we reached the outskirts of New York.",
    "exampleCn": "数小时后我们到达了纽约市的外围地带。"
   },
   {
    "word": "refusal",
    "phonetic": "rɪ'fjuzl",
    "pos": "n.",
    "meaning": "拒绝；[贸易][金融]优先取舍权；推却；取舍权",
    "example": "Her country suffered through her refusal to accept change.",
    "exampleCn": "她的国家因为她拒绝接受变革而受了害。"
   },
   {
    "word": "patrol",
    "phonetic": "pə'trol",
    "pos": "vt&vi",
    "meaning": "巡逻，巡查",
    "example": "Armed guards patrolled the grounds.",
    "exampleCn": "武装卫兵巡逻场地。"
   },
   {
    "word": "ambassador",
    "phonetic": "æm'bæsədɚ",
    "pos": "n.",
    "meaning": "大使；代表；使节",
    "example": "...the German ambassador to Poland.",
    "exampleCn": "…德国驻波兰大使。"
   },
   {
    "word": "shower",
    "phonetic": "'ʃaʊɚ",
    "pos": "n.",
    "meaning": "淋浴；（倾泻般出现的）一阵，一大批；[气象]阵雨；淋浴；[气象]下阵雨",
    "example": "Why does the phone always ring when I’m in the shower?",
    "exampleCn": "为什么电话铃总是在我洗澡的时候响？"
   },
   {
    "word": "dilapidated",
    "phonetic": "di'læpideitid",
    "pos": "adj.",
    "meaning": "荒废的，要塌似的；破坏的",
    "example": "...an old dilapidated barn.",
    "exampleCn": "…一座破旧的谷仓。"
   },
   {
    "word": "description",
    "phonetic": "dɪ'skrɪpʃən",
    "pos": "n.",
    "meaning": "描述，描写；类型；说明书",
    "example": "The booklet gives a brief description of each place.",
    "exampleCn": "这本小册子对每一个地方都作了简短的介绍。"
   },
   {
    "word": "ignorance",
    "phonetic": "'ɪɡnərəns",
    "pos": "n.",
    "meaning": "无知，愚昧；不知，不懂",
    "example": "Excuse my ignorance, but how does it actually work?",
    "exampleCn": "请原谅我的无知，它究竟是如何运作的？"
   },
   {
    "word": "corps",
    "phonetic": "kɔrz",
    "pos": "n.",
    "meaning": "军团；兵种；兵队；（德国大学的）学生联合会",
    "example": "the medical corps",
    "exampleCn": "医疗部队"
   },
   {
    "word": "amphibian",
    "phonetic": "æm'fɪbɪən",
    "pos": "n.",
    "meaning": "[脊椎]两栖动物；[车辆]水陆两用飞机；具有双重性格的人",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "patriotism",
    "phonetic": "'petrɪətɪzəm",
    "pos": "n.",
    "meaning": "爱国主义，民族主义",
    "example": "He was a country boy who had joined the army out of a sense of patriotism and adventure.",
    "exampleCn": "他是个乡下小伙子，出于爱国心和冒险精神参了军。"
   },
   {
    "word": "periodical",
    "phonetic": ",pɪrɪ'ɑdɪkl",
    "pos": "adj.",
    "meaning": "[数]周期的；定期的；期刊；杂志",
    "example": "She made periodical visits to her dentist.",
    "exampleCn": "她定期去看牙医。"
   },
   {
    "word": "energetic",
    "phonetic": ",ɛnɚ'dʒɛtɪk",
    "pos": "adj.",
    "meaning": "精力充沛的；积极的；有力的",
    "example": "an energetic man",
    "exampleCn": "精力旺盛的男子"
   },
   {
    "word": "promising",
    "phonetic": "'prɑmɪsɪŋ",
    "pos": "adj.",
    "meaning": "有希望的，有前途的；许诺，答应（promise的现在分词形式）",
    "example": "a promising career in law",
    "exampleCn": "很有前途的法律职业"
   },
   {
    "word": "rim",
    "phonetic": "rɪm",
    "pos": "n.",
    "meaning": "边，边缘；轮辋；圆圈",
    "example": "She looked at him over the rim of her glass.",
    "exampleCn": "她沿玻璃杯口看着他。"
   },
   {
    "word": "put",
    "phonetic": "pʊt",
    "pos": "vt",
    "meaning": "放；表达；移动；安置；赋予；出发；击；航行；发芽；掷；笨蛋；投击；怪人",
    "example": "He put the coffee on the table.",
    "exampleCn": "他把咖啡放在桌上。"
   },
   {
    "word": "artery",
    "phonetic": "'ɑrtəri",
    "pos": "n.",
    "meaning": "[解剖]动脉；[公路]干道；主流",
    "example": "...Connecticut Ave., one of the main arteries of Washington.",
    "exampleCn": "…康涅狄格大道，华盛顿的主干道之一。"
   },
   {
    "word": "resort",
    "phonetic": "rɪ'zɔrt",
    "pos": "n.",
    "meaning": "凭借，手段；度假胜地；常去之地；求助，诉诸；常去；采取某手段或方法",
    "example": "His punishing work schedule had made him resort to drugs.",
    "exampleCn": "他那累人的工作日程已经使他不得不求助于毒品了。"
   },
   {
    "word": "petal",
    "phonetic": "'pɛtl",
    "pos": "n.",
    "meaning": "花瓣",
    "example": "rose petals",
    "exampleCn": "玫瑰花瓣"
   },
   {
    "word": "deficiency",
    "phonetic": "dɪ'fɪʃənsi",
    "pos": "n.",
    "meaning": "缺陷，缺点；缺乏；不足的数额",
    "example": "They did blood tests on him for signs of vitamin deficiency.",
    "exampleCn": "他们给他做了血检看是否有缺乏维生素的迹象。"
   },
   {
    "word": "locality",
    "phonetic": "lo'kæləti",
    "pos": "n.",
    "meaning": "所在；位置；地点",
    "example": "weather reports from several different localities",
    "exampleCn": "来自几个不同地区的天气报告"
   },
   {
    "word": "handsome",
    "phonetic": "'hænsəm",
    "pos": "adj.",
    "meaning": "（男子）英俊的；可观的；大方的，慷慨的；健美而端庄的",
    "example": "a row of handsome Georgian houses",
    "exampleCn": "一排宏伟的乔治王朝时期的房子"
   },
   {
    "word": "myriad",
    "phonetic": "'miriəd",
    "pos": "adj.",
    "meaning": "无数的；种种的；无数，极大数量；无数的人或物",
    "example": "We’re still studying a myriad of options.",
    "exampleCn": "我们仍在研究各种备选方案。"
   },
   {
    "word": "percussion",
    "phonetic": "pɚ'kʌʃən",
    "pos": "n.",
    "meaning": "[临床]叩诊；振动；碰撞；敲打乐器；打击乐器组",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "routine",
    "phonetic": "rʊ'tin",
    "pos": "n.",
    "meaning": "[计]程序；日常工作；例行公事；日常的；例行的",
    "example": "John’s departure had upset their daily routine .",
    "exampleCn": "约翰的离去打乱了他们的日常生活。"
   },
   {
    "word": "strip",
    "phonetic": "strɪp",
    "pos": "vt",
    "meaning": "剥夺；剥去；脱去衣服；带；条状；脱衣舞",
    "example": "Strip the beds and wash the sheets.",
    "exampleCn": "把床单撤下来清洗。"
   },
   {
    "word": "amidst",
    "phonetic": "ə'mɪdst",
    "pos": "prep.",
    "meaning": "在…当中",
    "example": "During some trials, an audible tone was played through the headphones, either amidst white noise or on its own, and afterwards the participants were asked if they had noticed it.",
    "exampleCn": "在一些测试中，耳机里会播放一些可被听见的声音，该声音或混杂于白噪音中，或单独播放，之后，参与者将被问及是否注意到这些声音。"
   },
   {
    "word": "minister",
    "phonetic": "'mɪnɪstɚ",
    "pos": "n.",
    "meaning": "部长；大臣；牧师",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "funeral",
    "phonetic": "'fjunərəl",
    "pos": "n.",
    "meaning": "葬礼；麻烦事；丧葬的，出殡的",
    "example": "The funeral will be held at St. Martin’s Church.",
    "exampleCn": "葬礼将在圣马丁教堂举行。"
   },
   {
    "word": "corrode",
    "phonetic": "kə'rod",
    "pos": "vt",
    "meaning": "侵蚀；损害；受腐蚀；起腐蚀作用",
    "example": "Acidic water will corrode the pipes.",
    "exampleCn": "酸性水会腐蚀管子。"
   },
   {
    "word": "incidence",
    "phonetic": "'ɪnsɪdəns",
    "pos": "n.",
    "meaning": "发生率；影响；[光]入射；影响范围",
    "example": "The incidence of breast cancer increases with age.",
    "exampleCn": "乳腺癌的发病率随着年龄的增长而上升。"
   },
   {
    "word": "scheme",
    "phonetic": "skim",
    "pos": "n.",
    "meaning": "计划；组合；体制；诡计；计划；策划",
    "example": "a get-rich-quick scheme",
    "exampleCn": "快速致富的手段"
   },
   {
    "word": "rail",
    "phonetic": "rel",
    "pos": "n.",
    "meaning": "[铁路]铁轨；[建]扶手；横杆；围栏；抱怨；责骂",
    "example": "Several passengers were leaning against the ship’s rail.",
    "exampleCn": "几名乘客斜靠在轮船的栏杆上。"
   },
   {
    "word": "ponderous",
    "phonetic": "'pɑndərəs",
    "pos": "adj.",
    "meaning": "笨重的；沉闷的；呆板的",
    "example": "He had a dense, ponderous style.",
    "exampleCn": "他的风格是词藻堆砌、冗长沉闷。"
   },
   {
    "word": "degrade",
    "phonetic": "dɪ'ɡred",
    "pos": "vt",
    "meaning": "贬低；使……丢脸；使……降级；使……降解；降级，降低；退化",
    "example": "a movie that degrades women",
    "exampleCn": "贬损女性的影片"
   },
   {
    "word": "confirm",
    "phonetic": "kən'fɝm",
    "pos": "vt",
    "meaning": "确认；确定；证实；批准；使巩固",
    "example": "X-rays have confirmed that he has not broken any bones.",
    "exampleCn": "X光片已经证实他没有骨折。"
   },
   {
    "word": "scalpel",
    "phonetic": "skæl'pɛl",
    "pos": "n.",
    "meaning": "[医]解剖刀；外科手术刀",
    "example": "I pointed with my scalpel to the chest cavity, where nothing but a black lump of coal squatted in the lipstick-red center.",
    "exampleCn": "我用解剖刀指着她的胸腔，那里只有一团黑乎乎的煤块，伏在唇膏般红色的胸腔中部。"
   },
   {
    "word": "complexion",
    "phonetic": "kəm'plɛkʃən",
    "pos": "n.",
    "meaning": "肤色；面色；情况；局面",
    "example": "Drinking water is good for the complexion.",
    "exampleCn": "喝水让气色变好。"
   },
   {
    "word": "outcast",
    "phonetic": "'aʊtkæst",
    "pos": "n.",
    "meaning": "流浪的人；被驱逐的人；被遗弃的；无家可归的；被逐出的",
    "example": "Smokers often feel as though they are being treated as social outcasts.",
    "exampleCn": "吸烟者常常觉得自己遭到社会排斥。"
   },
   {
    "word": "prior",
    "phonetic": "'praɪɚ",
    "pos": "adj.",
    "meaning": "[数]优先的；在先的，在前的；在前，居先",
    "example": "You do not need any prior knowledge of the subject.",
    "exampleCn": "你无需事先具备该方面的知识。"
   },
   {
    "word": "pimple",
    "phonetic": "'pɪmpl",
    "pos": "n.",
    "meaning": "疙瘩；[医]丘疹；面疱",
    "example": "Belushi imitates a giant pimple by squeezing his cheeks and spewing chewed food out of his mouth.",
    "exampleCn": "我们在等候某个毕业生领文凭的同时，可以欣赏像《动物屋》这样与学校有关的经典电影的片断：约翰-贝鲁西模仿一个脸上长满丘疹的巨人，双手挤着脸，从嘴里喷出嚼过的东西。"
   },
   {
    "word": "theft",
    "phonetic": "θɛft",
    "pos": "n.",
    "meaning": "[法]盗窃；偷；赃物",
    "example": "Car theft is on the increase.",
    "exampleCn": "汽车盗窃案在上升。"
   },
   {
    "word": "compose",
    "phonetic": "kəm'poz",
    "pos": "vt",
    "meaning": "构成；写作；使平静；排…的版；组成；作曲；排字",
    "example": "Barrington has composed the music for a new production of ‘A Midsummer Night’s Dream’.",
    "exampleCn": "巴林顿为新版的《仲夏夜之梦》谱了曲。"
   },
   {
    "word": "infect",
    "phonetic": "ɪn'fɛkt",
    "pos": "vt",
    "meaning": "[医]感染，传染",
    "example": "People with the virus may feel perfectly well, but they can still infect others.",
    "exampleCn": "带有这种病毒的人可能毫无症状，却仍可能传染他人。"
   },
   {
    "word": "symmetry",
    "phonetic": "'sɪmətri",
    "pos": "n.",
    "meaning": "对称（性）；整齐，匀称",
    "example": "...the incredible beauty and symmetry of a snowflake.",
    "exampleCn": "…雪花令人难以置信的美丽和对称。"
   },
   {
    "word": "significant",
    "phonetic": "sɪɡ'nɪfɪkənt",
    "pos": "adj.",
    "meaning": "重大的；有效的；有意义的；值得注意的；意味深长的；象征；有意义的事物",
    "example": "His most significant political achievement was the abolition of the death penalty.",
    "exampleCn": "他政治上最重大的成就是废除了死刑。"
   },
   {
    "word": "currency",
    "phonetic": "ˈkɜrənsi",
    "pos": "n.",
    "meaning": "[金融]货币；通货",
    "example": "The bank can supply you with foreign currency .",
    "exampleCn": "这家银行能为你提供外币。"
   },
   {
    "word": "prelude",
    "phonetic": "'prɛljud",
    "pos": "n.",
    "meaning": "前奏；序幕；前奏曲；作为序曲；奏序曲",
    "example": "Living together as a prelude to marriage is now considered acceptable in many countries.",
    "exampleCn": "婚前同居如今在许多国家都已被接受。"
   },
   {
    "word": "typhoon",
    "phonetic": "taɪ'fʊn",
    "pos": "n.",
    "meaning": "台风，强热带风暴",
    "example": "The football match have to stand over next week for the typhoon storm.",
    "exampleCn": "由于台风风暴，这场足球赛延期到下个星期举行。"
   },
   {
    "word": "discriminate",
    "phonetic": "dɪ'skrɪmɪnet",
    "pos": "vt",
    "meaning": "歧视；区别；辨别；歧视；区别；辨别",
    "example": "He is incapable of discriminating between a good idea and a terrible one.",
    "exampleCn": "他没能力在一个好主意和一个坏主意之间进行区分。"
   },
   {
    "word": "drawback",
    "phonetic": "'drɔbæk",
    "pos": "n.",
    "meaning": "缺点，不利条件；退税",
    "example": "It’s a great city – the only drawback is the weather.",
    "exampleCn": "这是座很不错的城市，唯一的不足就是天气。"
   },
   {
    "word": "vacant",
    "phonetic": "'vekənt",
    "pos": "adj.",
    "meaning": "空虚的；空的；空缺的；空闲的；茫然的",
    "example": "Only a few apartments were still vacant.",
    "exampleCn": "只有几套公寓仍然空着。"
   },
   {
    "word": "track",
    "phonetic": "træk",
    "pos": "n.",
    "meaning": "[铁路]轨道；[古生]足迹，踪迹；小道；追踪；通过；循路而行；用纤拉；追踪；走；留下足迹",
    "example": "The only evidence of pandas was their tracks in the snow.",
    "exampleCn": "有熊猫活动的惟一证据就是它们在雪中的足迹。"
   },
   {
    "word": "culture",
    "phonetic": "'kʌltʃɚ",
    "pos": "n.",
    "meaning": "文化，文明；修养；[农学]栽培；[细胞][微]培养（等于cultivate）",
    "example": "We speak Danish at home so that the boys don’t lose touch with their language and culture.",
    "exampleCn": "我们在家说丹麦语，这样男孩子们就不会脱离他们的语言和文化。"
   },
   {
    "word": "excavate",
    "phonetic": "'ɛkskə'vet",
    "pos": "vt",
    "meaning": "挖掘；开凿",
    "example": "Schliemann excavated the ancient city of Troy.",
    "exampleCn": "谢里曼发掘出特洛伊古城。"
   },
   {
    "word": "fit",
    "phonetic": "fɪt",
    "pos": "vt",
    "meaning": "安装；使……适应；使……合身；与……相符；符合，配合；适合；合身；健康的；合适的；恰当的；准备好的；合身；发作；痉挛",
    "example": "You must be very fit if you do so much running.",
    "exampleCn": "如果你经常这样跑步，身体肯定很健康。"
   },
   {
    "word": "motion",
    "phonetic": "'moʃən",
    "pos": "n.",
    "meaning": "动作；移动；手势；请求；意向；运动；打手势；运动；向…打手势",
    "example": "Newton’s first law of motion",
    "exampleCn": "牛顿第一运动定律"
   },
   {
    "word": "expel",
    "phonetic": "ɪk'spɛl",
    "pos": "vt",
    "meaning": "驱逐；开除",
    "example": "More than five-thousand high school students have been expelled for cheating.",
    "exampleCn": "五千多名中学生因考试作弊而被开除。"
   },
   {
    "word": "allowance",
    "phonetic": "ə'laʊəns",
    "pos": "n.",
    "meaning": "[劳经]津贴，零用钱；允许；限额；定量供应",
    "example": "Sales staff get a generous mileage allowance or a company car.",
    "exampleCn": "销售人员有优厚的里程补贴或者公司提供的专用汽车。"
   },
   {
    "word": "coward",
    "phonetic": "'kaʊɚd",
    "pos": "n.",
    "meaning": "懦夫，懦弱的人；胆小的，懦怯的",
    "example": "Try it. Don’t be such a coward.",
    "exampleCn": "试一下，别那么胆小。"
   },
   {
    "word": "germ",
    "phonetic": "dʒɝm",
    "pos": "n.",
    "meaning": "[植]胚芽，萌芽；[微]细菌；萌芽",
    "example": "This was the germ of a book.",
    "exampleCn": "这是一本书的创作萌芽。"
   },
   {
    "word": "flash",
    "phonetic": "flæʃ",
    "pos": "vt",
    "meaning": "使闪光；反射；闪光，闪现；一瞬间；闪光，闪现；反射；闪光的，火速的",
    "example": "Lightning flashed overhead.",
    "exampleCn": "头顶上电光闪闪。"
   },
   {
    "word": "subtract",
    "phonetic": "səb'trækt",
    "pos": "vt",
    "meaning": "减去；扣掉",
    "example": "The pupil could add and subtract but hadn't learned to divide.",
    "exampleCn": "这名小学生能做加法和减法，但还没学会做除法。"
   },
   {
    "word": "glitter",
    "phonetic": "'ɡlɪtɚ",
    "pos": "vi",
    "meaning": "[光]闪光；闪烁；[光]闪光；灿烂",
    "example": "The river glittered in the sunlight.",
    "exampleCn": "阳光下河面波光粼粼。"
   },
   {
    "word": "predictable",
    "phonetic": "prɪ'dɪktəbl",
    "pos": "adj.",
    "meaning": "可预言的",
    "example": "The snow had a predictable effect on traffic.",
    "exampleCn": "这场雪对交通造成的影响可以预见。"
   },
   {
    "word": "undue",
    "phonetic": ",ʌn'du",
    "pos": "adj.",
    "meaning": "过度的，过分的；不适当的；[金融]未到期的",
    "example": "De Gaulle felt that America had undue influence in Europe.",
    "exampleCn": "戴高乐感到美国在欧洲影响力过大。"
   },
   {
    "word": "dart",
    "phonetic": "dɑrt",
    "pos": "n.",
    "meaning": "镖；飞镖；标枪；猛冲；突进；投掷；猛冲；投掷；投射",
    "example": "a poisoned dart",
    "exampleCn": "毒镖"
   },
   {
    "word": "coincide",
    "phonetic": ",koɪn'saɪd",
    "pos": "vi",
    "meaning": "一致，符合；同时发生",
    "example": "The interests of the US and those of the islanders may not coincide.",
    "exampleCn": "美国的利益和这些岛民的利益可能并不一致。"
   },
   {
    "word": "consecutive",
    "phonetic": "kən'sɛkjətɪv",
    "pos": "adj.",
    "meaning": "连贯的；连续不断的",
    "example": "It had rained for four consecutive days.",
    "exampleCn": "雨接连下了四天。"
   },
   {
    "word": "in",
    "phonetic": "ɪn",
    "pos": "prep.",
    "meaning": "按照（表示方式）；从事于；在…之内；在里面的；时髦的",
    "example": "a room furnished in the modern style",
    "exampleCn": "一间以现代风格装饰的房间"
   },
   {
    "word": "gamble",
    "phonetic": "'ɡæmbl",
    "pos": "vi",
    "meaning": "赌博；孤注一掷；投机；打赌；赌博；孤注一掷；冒险假设；赌博；冒险；打赌",
    "example": "Their religion forbids them to drink or gamble.",
    "exampleCn": "他们的宗教禁止饮酒和赌博。"
   },
   {
    "word": "committee",
    "phonetic": "kə'mɪti",
    "pos": "n.",
    "meaning": "委员会",
    "example": "a committee meeting",
    "exampleCn": "委员会会议"
   },
   {
    "word": "dumb",
    "phonetic": "dʌm",
    "pos": "adj.",
    "meaning": "哑的，无说话能力的；不说话的，无声音的",
    "example": "What a dumb question.",
    "exampleCn": "多么愚蠢的问题。"
   },
   {
    "word": "hygiene",
    "phonetic": "'haɪdʒin",
    "pos": "n.",
    "meaning": "卫生；卫生学；[医]保健法",
    "example": "the importance of personal hygiene",
    "exampleCn": "个人卫生的重要性"
   },
   {
    "word": "smother",
    "phonetic": "'smʌðɚ",
    "pos": "vt",
    "meaning": "使窒息；抑制；（用灰等）闷熄；忍住；窒息；被抑制；闷死；窒息状态；令人窒息的浓烟",
    "example": "A teenage mother was accused of smothering her 3-month-old daughter.",
    "exampleCn": "一个少女妈妈被指控闷死自己三个月大的女儿。"
   },
   {
    "word": "wilderness",
    "phonetic": "'wɪldɚnəs",
    "pos": "n.",
    "meaning": "荒地；大量，茫茫一片",
    "example": "...the icy Canadian wilderness.",
    "exampleCn": "…冰封的加拿大荒野。"
   },
   {
    "word": "signal",
    "phonetic": "'sɪgnl",
    "pos": "n.",
    "meaning": "信号；暗号；导火线；标志；用信号通知；显著的；作为信号的；发信号",
    "example": "At a prearranged signal the lights went out.",
    "exampleCn": "预定的信号一发出，灯就全灭了。"
   },
   {
    "word": "furnace",
    "phonetic": "'fɝnɪs",
    "pos": "n.",
    "meaning": "[炉窑]火炉，熔炉",
    "example": "We had better fire up the furnace.",
    "exampleCn": "我们最好把炉子生起来。"
   },
   {
    "word": "confess",
    "phonetic": "kən'fɛs",
    "pos": "vt",
    "meaning": "承认；坦白；忏悔；[法]供认；承认；坦白；忏悔；[法]供认",
    "example": "Occasionally people confess to crimes they haven’t committed just to get attention.",
    "exampleCn": "偶尔人们会承认自己并未犯过的罪行，那只是为了引人注意。"
   },
   {
    "word": "minority",
    "phonetic": "maɪ'nɔrəti",
    "pos": "n.",
    "meaning": "少数民族；少数派；未成年",
    "example": "Gaelic is still spoken in Ireland by a tiny minority.",
    "exampleCn": "爱尔兰仍有极少数人在说盖尔语。"
   },
   {
    "word": "nostalgia",
    "phonetic": "nə'stældʒə",
    "pos": "n.",
    "meaning": "乡愁；怀旧之情；怀乡病",
    "example": "He looked back on his university days with a certain amount of nostalgia.",
    "exampleCn": "他带着一点留恋，回忆起大学时光。"
   },
   {
    "word": "cautious",
    "phonetic": "'kɔʃəs",
    "pos": "adj.",
    "meaning": "谨慎的；十分小心的",
    "example": "a cautious driver",
    "exampleCn": "一位谨慎的司机"
   },
   {
    "word": "pillow",
    "phonetic": "'pɪlo",
    "pos": "n.",
    "meaning": "枕头",
    "example": "I’ll be asleep as soon as my head hits the pillow.",
    "exampleCn": "我头一碰到枕头就会睡着。"
   },
   {
    "word": "adjacent",
    "phonetic": "ə'dʒesnt",
    "pos": "adj.",
    "meaning": "邻近的，毗连的",
    "example": "We stayed in adjacent rooms.",
    "exampleCn": "我们住在毗连的房间里。"
   },
   {
    "word": "transcript",
    "phonetic": "'trænskrɪpt",
    "pos": "n.",
    "meaning": "成绩单；抄本，副本；文字记录",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "crevice",
    "phonetic": "'krɛvɪs",
    "pos": "n.",
    "meaning": "裂缝；裂隙",
    "example": "small creatures that hide in crevices in the rock",
    "exampleCn": "藏在岩石缝里的小生物"
   },
   {
    "word": "slander",
    "phonetic": "'slændɚ",
    "pos": "vt",
    "meaning": "诽谤；造谣中伤；诽谤；中伤",
    "example": "He is being sued for slander .",
    "exampleCn": "他被控犯有口头诽谤罪。"
   },
   {
    "word": "subdue",
    "phonetic": "səb'du",
    "pos": "vt",
    "meaning": "征服；抑制；减轻",
    "example": "Police managed to subdue the angry crowd.",
    "exampleCn": "警察设法控制住了愤怒的人群。"
   },
   {
    "word": "magnify",
    "phonetic": "'mæɡnɪfaɪ",
    "pos": "vt",
    "meaning": "放大；赞美；夸大；放大；有放大能力",
    "example": "At the Sheffield arena, the speakers were magnified ten times on a giant screen.",
    "exampleCn": "在谢菲尔德体育馆，演讲者在一个巨大的屏幕上被放大了十倍。"
   },
   {
    "word": "neutralize",
    "phonetic": "'nʊtrə'laɪz",
    "pos": "vt",
    "meaning": "抵销；使…中和；使…无效；使…中立",
    "example": "a medicine that neutralizes the acid in the stomach",
    "exampleCn": "能中和胃酸的药"
   },
   {
    "word": "stripe",
    "phonetic": "straɪp",
    "pos": "n.",
    "meaning": "[植保][植]条纹，斑纹；种类",
    "example": "a shirt with black and white stripes",
    "exampleCn": "黑白条纹衬衫"
   },
   {
    "word": "suite",
    "phonetic": "sut; swit",
    "pos": "n.",
    "meaning": "（一套）家具；套房；组曲；（一批）[劳经]随员，随从",
    "example": "a honeymoon suite",
    "exampleCn": "蜜月套房"
   },
   {
    "word": "nothing",
    "phonetic": "'nʌθɪŋ",
    "pos": "n.",
    "meaning": "无；零；不关紧要之事；毫不；决不",
    "example": "I owe him nothing.",
    "exampleCn": "我不欠他什么。"
   },
   {
    "word": "siege",
    "phonetic": "sidʒ",
    "pos": "n.",
    "meaning": "围攻；包围；围城；不断袭击；长期努力；围攻；包围",
    "example": "The siege lasted almost four months.",
    "exampleCn": "这次封锁历时近四个月。"
   },
   {
    "word": "consequence",
    "phonetic": "'kɑnsəkwɛns",
    "pos": "n.",
    "meaning": "结果；重要性；推论",
    "example": "I don’t suppose it is of any consequence now.",
    "exampleCn": "现在我觉得这事一点都无所谓了。"
   },
   {
    "word": "manure",
    "phonetic": "mə'nʊr",
    "pos": "vt",
    "meaning": "施肥于；耕种；[肥料]肥料；粪肥",
    "example": "...bags of manure.",
    "exampleCn": "…一袋袋的肥料。"
   },
   {
    "word": "mobile",
    "phonetic": "ˈmobəl; ˈmoˌbaɪl; ˈmoˌbil",
    "pos": "adj.",
    "meaning": "[生物]机动的；易变的，；非固定的",
    "example": "a more mobile workforce",
    "exampleCn": "具有更强流动性的劳动力"
   },
   {
    "word": "solidarity",
    "phonetic": ",sɑlɪ'dærəti",
    "pos": "n.",
    "meaning": "团结，团结一致",
    "example": "a gesture of solidarity",
    "exampleCn": "团结的表示"
   },
   {
    "word": "glue",
    "phonetic": "ɡlu",
    "pos": "vt",
    "meaning": "粘合；似胶般固着于",
    "example": "...a tube of glue.",
    "exampleCn": "…一管胶水。"
   },
   {
    "word": "misguided",
    "phonetic": ",mɪs'ɡaɪdɪd",
    "pos": "v.",
    "meaning": "使入歧途（misguide的过去分词）",
    "example": "His parents still clung to the misguided belief that his common sense would keep him out of serious trouble.",
    "exampleCn": "他的父母依然错误地认为他的常识能让他远离大的麻烦。"
   },
   {
    "word": "vigorous",
    "phonetic": "'vɪɡərəs",
    "pos": "adj.",
    "meaning": "有力的；精力充沛的",
    "example": "Your dog needs at least 20 minutes of vigorous exercise every day.",
    "exampleCn": "你的狗每天需要进行至少20分钟的剧烈运动。"
   },
   {
    "word": "cricket",
    "phonetic": "'krɪkɪt",
    "pos": "n.",
    "meaning": "板球，板球运动；[昆]蟋蟀",
    "example": "The boy traded his knife for a cricket bat.",
    "exampleCn": "那男孩用他的刀子换了一个板球棒。"
   },
   {
    "word": "novice",
    "phonetic": "'nɑvɪs",
    "pos": "n.",
    "meaning": "初学者，新手",
    "example": "The computer course is ideal for novices.",
    "exampleCn": "这门计算机课程非常适合初学者。"
   },
   {
    "word": "likelihood",
    "phonetic": "'laɪklɪhʊd",
    "pos": "n.",
    "meaning": "可能性，可能",
    "example": "If I refused, it would in all likelihood mean I’d lose my job.",
    "exampleCn": "如果我拒绝，那我十有八九会丢掉工作。"
   },
   {
    "word": "premium",
    "phonetic": "'primɪəm",
    "pos": "n.",
    "meaning": "[保险]保险费，额外费用；[劳经]奖金",
    "example": "insurance premiums",
    "exampleCn": "保险费"
   },
   {
    "word": "genial",
    "phonetic": "'dʒinɪəl",
    "pos": "adj.",
    "meaning": "亲切的，友好的；和蔼的；适宜的",
    "example": "a genial smile",
    "exampleCn": "亲切的微笑"
   },
   {
    "word": "ludicrous",
    "phonetic": "'ludɪkrəs",
    "pos": "adj.",
    "meaning": "滑稽的；荒唐的",
    "example": "It is ludicrous to suggest that I was driving under the influence of alcohol.",
    "exampleCn": "说我酒后驾车，这真是太荒唐了。"
   },
   {
    "word": "prestigious",
    "phonetic": "prɛ'stɪdʒəs",
    "pos": "adj.",
    "meaning": "有名望的；享有声望的",
    "example": "a prestigious literary award",
    "exampleCn": "享有盛名的文学奖"
   },
   {
    "word": "oblique",
    "phonetic": "ə'blik",
    "pos": "adj.",
    "meaning": "[数]斜的；不光明正大的；倾斜",
    "example": "an oblique glance",
    "exampleCn": "斜瞥"
   },
   {
    "word": "overhear",
    "phonetic": ",ovɚ'hɪr",
    "pos": "vt",
    "meaning": "无意中听到；偷听",
    "example": "I overheard part of their conversation.",
    "exampleCn": "我碰巧听到了他们谈话的部分内容。"
   },
   {
    "word": "anticipation",
    "phonetic": "æn,tɪsɪ'peʃən",
    "pos": "n.",
    "meaning": "希望；预感；先发制人；预支",
    "example": "She waited in eager anticipation for Robert to arrive.",
    "exampleCn": "她急切地期盼着罗伯特到来。"
   },
   {
    "word": "chaste",
    "phonetic": "tʃest",
    "pos": "adj.",
    "meaning": "纯洁的；贞洁的；有道德的；朴素的",
    "example": "She led a chaste decent life.",
    "exampleCn": "她过着贞洁正派的生活。"
   },
   {
    "word": "explore",
    "phonetic": "ɪk'splɔr",
    "pos": "vt",
    "meaning": "探索；探测；探险；探索；探测；探险",
    "example": "Venice is a wonderful city to explore.",
    "exampleCn": "威尼斯是一个美妙的城市，值得好好探究一番。"
   },
   {
    "word": "pungent",
    "phonetic": "'pʌndʒənt",
    "pos": "adj.",
    "meaning": "辛辣的；刺激性的；苦痛的；尖刻的",
    "example": "He expressed some fairly pungent criticisms.",
    "exampleCn": "他提出了一针见血的批评。"
   },
   {
    "word": "indulge",
    "phonetic": "ɪn'dʌldʒ",
    "pos": "vt",
    "meaning": "满足；纵容；使高兴；使沉迷于…；沉溺；满足；放任",
    "example": "His mother spoiled him, indulging his every whim.",
    "exampleCn": "他母亲对他纵容娇惯，百依百顺。"
   },
   {
    "word": "simplify",
    "phonetic": "'sɪmplɪfaɪ",
    "pos": "vt",
    "meaning": "简化；使单纯；使简易",
    "example": "an attempt to simplify the tax system",
    "exampleCn": "简化税制的尝试"
   },
   {
    "word": "vicious",
    "phonetic": "'vɪʃəs",
    "pos": "adj.",
    "meaning": "恶毒的；恶意的；堕落的；有错误的；品性不端的；剧烈的",
    "example": "Sarah can be quite vicious at times.",
    "exampleCn": "萨拉有时相当狠毒。"
   },
   {
    "word": "counterbalance",
    "phonetic": ",kaʊntɚ'bæləns",
    "pos": "n.",
    "meaning": "[机][力]平衡力；自动抵销；[机][力]使平衡；抵消",
    "example": "...organizations set up as a counterbalance to groups allied to the ANC.",
    "exampleCn": "...作为对与非洲人国民大会联盟团体制衡而成立的各种组织。"
   },
   {
    "word": "kit",
    "phonetic": "kɪt",
    "pos": "n.",
    "meaning": "工具箱；[机]成套工具；装备；装备",
    "example": "Sally keeps her make-up kit in her bag.",
    "exampleCn": "萨莉把化妆包放在手提包里。"
   },
   {
    "word": "shrub",
    "phonetic": "ʃrʌb",
    "pos": "n.",
    "meaning": "[林]灌木；灌木丛",
    "example": "...flowering shrubs.",
    "exampleCn": "…开花的灌木。"
   },
   {
    "word": "sceptical",
    "phonetic": "'skeptikəl",
    "pos": "adj.",
    "meaning": "怀疑的；怀疑论的；习惯怀疑的",
    "example": "‘You can trust me,’ he said. Jane looked sceptical.",
    "exampleCn": "“你可以相信我。”他说。而简看上去一脸怀疑。"
   },
   {
    "word": "comprise",
    "phonetic": "kəm'praɪz",
    "pos": "vt",
    "meaning": "包含；由…组成",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "pathetic",
    "phonetic": "pə'θɛtɪk",
    "pos": "adj.",
    "meaning": "可怜的，悲哀的；感伤的；乏味的",
    "example": "The child looked a pathetic sight.",
    "exampleCn": "那个孩子看上去很可怜。"
   },
   {
    "word": "mall",
    "phonetic": "mɔl",
    "pos": "n.",
    "meaning": "购物商场；[建]林荫路；铁圈球场",
    "example": "Let’s meet at the mall and go see a movie.",
    "exampleCn": "我们在购物中心碰头，然后去看电影吧。"
   },
   {
    "word": "manipulate",
    "phonetic": "mə'nɪpjulet",
    "pos": "vt",
    "meaning": "操纵；操作；巧妙地处理；篡改",
    "example": "He was one of those men who manipulated people.",
    "exampleCn": "他是那种要摆布别人的人。"
   },
   {
    "word": "rational",
    "phonetic": "'ræʃnəl",
    "pos": "adj.",
    "meaning": "合理的；理性的",
    "example": "Parents need to be fully informed so they can make a rational decision.",
    "exampleCn": "父母需要充分了解情况，这样才可以作出合理的决定。"
   },
   {
    "word": "vulnerable",
    "phonetic": "'vʌlnərəbl",
    "pos": "adj.",
    "meaning": "易受攻击的，易受…的攻击；易受伤害的；有弱点的",
    "example": "He took advantage of me when I was at my most vulnerable.",
    "exampleCn": "他在我最脆弱的时候利用了我。"
   },
   {
    "word": "heave",
    "phonetic": "hiv",
    "pos": "vt",
    "meaning": "举起；使起伏；投掷；恶心；发出（叹息等）；起伏；举起；喘息；呕吐；举起；起伏；投掷；一阵呕吐",
    "example": "Michael’s shoulders heaved with silent laughter.",
    "exampleCn": "迈克尔憋着不笑出声来，双肩直抖。"
   },
   {
    "word": "come",
    "phonetic": "kʌm",
    "pos": "vi",
    "meaning": "来；开始；出现；发生；变成；到达；做；假装；将满（…岁）；嗨！",
    "example": "Let me know when they come.",
    "exampleCn": "他们来了就告诉我。"
   },
   {
    "word": "justification",
    "phonetic": ",dʒʌstɪfɪ'keʃən",
    "pos": "n.",
    "meaning": "理由；辩护；认为有理，认为正当；释罪",
    "example": "Hoggart felt, with some justification, that his colleagues had let him down.",
    "exampleCn": "霍加特觉得同事令他失望，这是有理由的。"
   },
   {
    "word": "arc",
    "phonetic": "ɑrk",
    "pos": "n.",
    "meaning": "弧",
    "example": "the arc of a rainbow",
    "exampleCn": "彩虹的弧状"
   },
   {
    "word": "wrestle",
    "phonetic": "'rɛsl",
    "pos": "n.",
    "meaning": "摔跤；搏斗；斗争；摔跤；斗争；斟酌；与摔跤；与…搏斗；使劲搬动",
    "example": "Police officers wrestled him to the ground .",
    "exampleCn": "警察把他扑倒在地。"
   },
   {
    "word": "treaty",
    "phonetic": "'triti",
    "pos": "n.",
    "meaning": "[法]条约，协议；谈判",
    "example": "Both sides have agreed to sign the treaty .",
    "exampleCn": "双方都同意签署该条约。"
   },
   {
    "word": "mammal",
    "phonetic": "'mæml",
    "pos": "n.",
    "meaning": "[脊椎]哺乳动物",
    "example": "A whale is a kind of mammal.",
    "exampleCn": "鲸是一种哺乳动物。"
   },
   {
    "word": "advocate",
    "phonetic": "ˈædvəkeɪt；-et",
    "pos": "vt",
    "meaning": "提倡，主张，拥护；提倡者；支持者；律师",
    "example": "He was a strong advocate of free market policies and a multi-party system.",
    "exampleCn": "他是自由市场政策以及多党制的坚定倡导者。"
   },
   {
    "word": "fickle",
    "phonetic": "'fɪkl",
    "pos": "adj.",
    "meaning": "浮躁的；易变的；变幻无常的",
    "example": "an unpredictable and fickle lover",
    "exampleCn": "一个捉摸不透、三心二意的情人"
   },
   {
    "word": "salute",
    "phonetic": "sə'lut",
    "pos": "n.",
    "meaning": "致敬，欢迎；敬礼；行礼致敬，欢迎；致意，打招呼；行礼",
    "example": "As they left, the corporal gave them a respectful salute.",
    "exampleCn": "他们离开时，下士恭敬地向他们行礼。"
   },
   {
    "word": "clear",
    "phonetic": "klɪr",
    "pos": "adj.",
    "meaning": "清楚的；清澈的；[气象]晴朗的；无罪的；通过；[计]清除；使干净；跳过；清晰地；完全地；[计]清除；空隙",
    "example": "Snowplows have been out clearing the roads.",
    "exampleCn": "扫雪机已经出动，去清扫路面了。"
   },
   {
    "word": "otherwise",
    "phonetic": "'ʌðɚwaɪz",
    "pos": "adv.",
    "meaning": "否则；另外；在其他方面；另外的；其他方面的",
    "example": "people who smoke or otherwise abuse their bodies",
    "exampleCn": "吸烟或以其他方式糟蹋自己身体的人"
   },
   {
    "word": "arduous",
    "phonetic": "'ɑrdʒuəs",
    "pos": "adj.",
    "meaning": "努力的；费力的；险峻的",
    "example": "...a long, hot and arduous trip.",
    "exampleCn": "…一段漫长、灼热、艰难的旅程。"
   },
   {
    "word": "punctual",
    "phonetic": "'pʌŋtʃʊəl",
    "pos": "adj.",
    "meaning": "准时的，守时的；精确的",
    "example": "She’s always very punctual for appointments.",
    "exampleCn": "她一向准时赴约。"
   },
   {
    "word": "directory",
    "phonetic": "dəˈrɛktəri; (also) daɪˈrɛktəri",
    "pos": "n.",
    "meaning": "[计]目录；工商名录；姓名地址录；指导的；咨询的",
    "example": "I couldn’t find your number in the telephone directory.",
    "exampleCn": "我在电话簿上找不到你的电话号码。"
   },
   {
    "word": "vanquish",
    "phonetic": "'væŋkwɪʃ",
    "pos": "vt",
    "meaning": "征服；击败；克服；抑制（感情等）",
    "example": "A happy ending is only possible because the hero has first vanquished the dragons.",
    "exampleCn": "只有主人公先把那些恶龙制服，快乐的结局才有可能。"
   },
   {
    "word": "oblivious",
    "phonetic": "ə'blɪvɪəs",
    "pos": "adj.",
    "meaning": "遗忘的；健忘的；不注意的；不知道的",
    "example": "She lay motionless where she was, oblivious to pain.",
    "exampleCn": "她一动不动地躺在原地，感觉不到疼痛。"
   },
   {
    "word": "apprentice",
    "phonetic": "ə'prɛntɪs",
    "pos": "n.",
    "meaning": "学徒；[劳经]生手",
    "example": "The apprentice lingered his work.",
    "exampleCn": "这个徒弟磨洋工。"
   },
   {
    "word": "excursion",
    "phonetic": "ɪk'skɝʒn",
    "pos": "n.",
    "meaning": "偏移；远足；短程旅行；离题；游览圆",
    "example": "a shopping excursion",
    "exampleCn": "购物游"
   },
   {
    "word": "downpour",
    "phonetic": "'daʊnpɔr",
    "pos": "n.",
    "meaning": "倾盆大雨；注下",
    "example": "...sheltering from a sudden downpour of rain.",
    "exampleCn": "…躲避一场突如其来的瓢泼大雨。"
   },
   {
    "word": "mandatory",
    "phonetic": "'mændətɔri",
    "pos": "adj.",
    "meaning": "强制的；托管的；命令的；受托者（等于mandatary）",
    "example": "Murder carries a mandatory life sentence .",
    "exampleCn": "谋杀罪依照法律要判无期徒刑。"
   },
   {
    "word": "loom",
    "phonetic": "lum",
    "pos": "n.",
    "meaning": "[纺]织布机；若隐若现的景象",
    "example": "Vincent loomed over me, as pale and grey as a tombstone.",
    "exampleCn": "文森特赫然出现在我面前，脸色苍白阴沉得像块墓碑。"
   },
   {
    "word": "variant",
    "phonetic": "'vɛrɪənt",
    "pos": "adj.",
    "meaning": "不同的；多样的；[生物][计]变体；转化",
    "example": "Note that you must use the same variant of this option for all compiler runs related to the same project.",
    "exampleCn": "注意，对于所有运行的与同一个项目相关的编译器，必须使用这个选项的相同变体。"
   },
   {
    "word": "council",
    "phonetic": "'kaʊnsl",
    "pos": "n.",
    "meaning": "委员会；会议；理事会；地方议会；顾问班子",
    "example": "the council for civil liberties",
    "exampleCn": "公民自由委员会"
   },
   {
    "word": "meager",
    "phonetic": "'migɚ",
    "pos": "adj.",
    "meaning": "贫乏的；瘦的",
    "example": "His meager wage is not enough to support their five children.",
    "exampleCn": "靠他一个人的微薄工资不足以养活他们的五个孩子。"
   },
   {
    "word": "chord",
    "phonetic": "kɔrd",
    "pos": "n.",
    "meaning": "[数]弦；和弦",
    "example": "Many of the things she says will strike a chord with other young women.",
    "exampleCn": "她说的许多话都能引起其他年轻女子的共鸣。"
   },
   {
    "word": "tolerable",
    "phonetic": "'tɑlərəbl",
    "pos": "adj.",
    "meaning": "可以的；可容忍的",
    "example": "The apartment is really too small, but it’s tolerable for the time being.",
    "exampleCn": "这套公寓实在太小，不过暂时还能凑合。"
   },
   {
    "word": "fabric",
    "phonetic": "'fæbrɪk",
    "pos": "n.",
    "meaning": "[纺]织物；布；组织；构造；建筑物",
    "example": "our new range of fabrics and wallpapers",
    "exampleCn": "我们新的织物和墙纸系列"
   },
   {
    "word": "setting",
    "phonetic": "'sɛtɪŋ",
    "pos": "n.",
    "meaning": "环境；安装；布置；[天]沉落；放置；沉没；使…处于某位置（set的ing形式）",
    "example": "I’ve worked with children in various settings, mainly in secondary school.",
    "exampleCn": "我在许多地方教过孩子，主要是在中学。"
   },
   {
    "word": "inference",
    "phonetic": "'ɪnfərəns",
    "pos": "n.",
    "meaning": "推理；推论；[数]推断",
    "example": "There were two inferences to be drawn from her letter.",
    "exampleCn": "从她的来信可以得到两种推论。"
   },
   {
    "word": "summon",
    "phonetic": "'sʌmən",
    "pos": "vt",
    "meaning": "召唤；召集；鼓起；振作",
    "example": "Robert summoned the waiter for the bill.",
    "exampleCn": "罗伯特召唤服务员结账。"
   },
   {
    "word": "observe",
    "phonetic": "əb'zɝv",
    "pos": "vt",
    "meaning": "观察；遵守；说；注意到；评论；观察；说；注意到；评论",
    "example": "Scientists have observed a drop in ozone levels over the Antarctic.",
    "exampleCn": "科学家已经观察到南极洲上方的臭氧浓度有所下降。"
   },
   {
    "word": "exotic",
    "phonetic": "ɪɡ'zɑtɪk",
    "pos": "adj.",
    "meaning": "[物]异国的；[语]外来的；异国情调的",
    "example": "exotic birds",
    "exampleCn": "外国的奇异鸟类"
   },
   {
    "word": "superior",
    "phonetic": "səˈpɪriər",
    "pos": "adj.",
    "meaning": "上级的；优秀的，出众的；高傲的；上级，长官；优胜者，高手；长者",
    "example": "She had that superior tone of voice.",
    "exampleCn": "她带着那种傲慢的语气。"
   },
   {
    "word": "single",
    "phonetic": "'sɪŋɡl",
    "pos": "adj.",
    "meaning": "单一的；单身的；单程的；一个；单打；单程票",
    "example": "A single tree gave shade from the sun.",
    "exampleCn": "唯有一棵树遮阴。"
   },
   {
    "word": "spectacle",
    "phonetic": "'spɛktəkl",
    "pos": "n.",
    "meaning": "景象，奇观；眼镜；引人羡慕的人",
    "example": "a multimedia dance and opera spectacle",
    "exampleCn": "盛大的多媒体舞蹈戏剧表演"
   },
   {
    "word": "equilibrium",
    "phonetic": ",ikwɪ'lɪbrɪəm",
    "pos": "n.",
    "meaning": "均衡；平静；保持平衡的能力",
    "example": "The government is anxious not to upset the economic equilibrium.",
    "exampleCn": "政府急切希望不要打乱经济平衡。"
   },
   {
    "word": "soluble",
    "phonetic": "'sɑljəbl",
    "pos": "adj.",
    "meaning": "[化学]可溶的，可溶解的；可解决的",
    "example": "soluble aspirin",
    "exampleCn": "可溶性阿司匹林"
   },
   {
    "word": "gale",
    "phonetic": "ɡel",
    "pos": "n.",
    "meaning": "[气象]大风，狂风；（突发的）一阵",
    "example": "a severe gale",
    "exampleCn": "一阵狂风"
   },
   {
    "word": "crust",
    "phonetic": "krʌst",
    "pos": "n.",
    "meaning": "外壳；面包皮；坚硬外皮",
    "example": "sandwiches with the crusts cut off",
    "exampleCn": "切去边皮的三明治"
   },
   {
    "word": "junction",
    "phonetic": "'dʒʌŋkʃən",
    "pos": "n.",
    "meaning": "连接，接合；[公路]交叉点；接合点",
    "example": "the junction of Abbot Road and Mill Street",
    "exampleCn": "阿伯特路与米尔街的交叉口"
   },
   {
    "word": "heap",
    "phonetic": "hip",
    "pos": "n.",
    "meaning": "堆；许多；累积；堆；堆积",
    "example": "a rubbish heap",
    "exampleCn": "垃圾堆"
   },
   {
    "word": "mourn",
    "phonetic": "mɔrn",
    "pos": "v.",
    "meaning": "哀悼；忧伤；服丧",
    "example": "Hundreds of people gathered to mourn the slain president.",
    "exampleCn": "成百上千人聚集在一起悼念遇刺的总统。"
   },
   {
    "word": "hound",
    "phonetic": "haʊnd",
    "pos": "vt",
    "meaning": "追猎；烦扰；激励；猎犬；卑劣的人",
    "example": "A troubled hound was baying the moon.",
    "exampleCn": "一条受惊不安的猎狗正在对月狂吠。"
   },
   {
    "word": "mutation",
    "phonetic": "mju'teʃən",
    "pos": "n.",
    "meaning": "[遗]突变；变化；元音变化",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "mantle",
    "phonetic": "'mæntl",
    "pos": "n.",
    "meaning": "地幔；[服装]斗篷；覆盖物；覆盖；脸红；覆盖",
    "example": "We have the rare opportunity to seize the mantle of national leadership.",
    "exampleCn": "这次是我们担当国家领导职责的天赐良机。"
   },
   {
    "word": "superfluous",
    "phonetic": "sʊ'pɝflʊəs",
    "pos": "adj.",
    "meaning": "[数]多余的；不必要的；奢侈的",
    "example": "a modern building with no superfluous decoration",
    "exampleCn": "一栋没有多余装饰的现代建筑"
   },
   {
    "word": "set",
    "phonetic": "sɛt",
    "pos": "n.",
    "meaning": "一套；[数]集合；[机]装置；趋势；布景；放；树立；点燃；使凝结；点缀；结果；定型；凝固；规定的；固定的；固执的",
    "example": "This debate should be set in an international context .",
    "exampleCn": "这场辩论应该放在国际大背景下来看。"
   },
   {
    "word": "insert",
    "phonetic": "'ɪnsɝt",
    "pos": "vt",
    "meaning": "插入；[建]嵌入；[建]插入物",
    "example": "He took a small key from his pocket and slowly inserted it into the lock.",
    "exampleCn": "他从衣袋里掏出一把小钥匙，然后缓缓地将其插入锁孔里。"
   },
   {
    "word": "portray",
    "phonetic": "pɔr'tre",
    "pos": "vt",
    "meaning": "描绘；扮演",
    "example": "His most famous painting portrayed the death of Nelson.",
    "exampleCn": "他最著名的画作描绘的是纳尔逊之死。"
   },
   {
    "word": "studio",
    "phonetic": "'studɪo",
    "pos": "n.",
    "meaning": "工作室；[电视][广播]演播室；画室；电影制片厂",
    "example": "a TV studio",
    "exampleCn": "电视演播室"
   },
   {
    "word": "ashamed",
    "phonetic": "ə'ʃemd",
    "pos": "adj.",
    "meaning": "惭愧的，感到难为情的；耻于……的",
    "example": "Everyone cries sometimes – it’s nothing to be ashamed of.",
    "exampleCn": "每个人都会有哭的时候——没什么好难为情的。"
   },
   {
    "word": "arise",
    "phonetic": "ə'raɪz",
    "pos": "vi",
    "meaning": "出现；上升；起立",
    "example": "A crisis has arisen in the Foreign Office.",
    "exampleCn": "外交部出现了危机。"
   },
   {
    "word": "repel",
    "phonetic": "rɪ'pɛl",
    "pos": "vt",
    "meaning": "击退；抵制；使厌恶；使不愉快",
    "example": "The smell repelled him.",
    "exampleCn": "这气味让他反感。"
   },
   {
    "word": "flux",
    "phonetic": "flʌks",
    "pos": "n.",
    "meaning": "[流][机]流量；变迁；不稳定；流出；使熔融；用焊剂处理；熔化；流出",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "raw",
    "phonetic": "rɔ",
    "pos": "adj.",
    "meaning": "[食品]生的；未加工的；阴冷的；刺痛的；擦掉皮的；无经验的；（在艺术等方面）不成熟的；擦伤",
    "example": "raw meat",
    "exampleCn": "生肉"
   },
   {
    "word": "elapse",
    "phonetic": "ɪ'læps",
    "pos": "vi",
    "meaning": "消逝；时间过去；流逝；时间的过去",
    "example": "Several months elapsed before his case was brought to trial.",
    "exampleCn": "过了几个月他的案子才开审。"
   },
   {
    "word": "diffuse",
    "phonetic": "dɪ'fjus",
    "pos": "adj.",
    "meaning": "弥漫的；[植][物]散开的；[物]扩散；传播；漫射；传播；四散",
    "example": "Their ideas diffused quickly across Europe.",
    "exampleCn": "他们的观点很快在欧洲传播开来。"
   },
   {
    "word": "delicate",
    "phonetic": "ˈdɛlɪkɪt",
    "pos": "adj.",
    "meaning": "微妙的；精美的，雅致的；柔和的；易碎的；纤弱的；清淡可口的",
    "example": "Her wrists and ankles were slim and delicate.",
    "exampleCn": "她的手腕和脚踝长得纤巧优雅。"
   },
   {
    "word": "vow",
    "phonetic": "vaʊ",
    "pos": "n.",
    "meaning": "发誓；誓言；许愿；发誓；郑重宣告；发誓；郑重宣告",
    "example": "Jim made a vow that he would find his wife’s killer.",
    "exampleCn": "吉姆发誓要找到杀害他妻子的凶手。"
   },
   {
    "word": "gist",
    "phonetic": "dʒɪst",
    "pos": "n.",
    "meaning": "主旨，要点；依据",
    "example": "Don’t worry about all the details as long as you get the gist (= understand the main meaning ) of it.",
    "exampleCn": "不要去管各个细节，只要理解主要意思就行了。"
   },
   {
    "word": "specific",
    "phonetic": "spɪ'sɪfɪk",
    "pos": "adj.",
    "meaning": "特殊的，特定的；明确的；详细的；[药]具有特效的；特性；细节；特效药",
    "example": "games suitable for specific age groups",
    "exampleCn": "适合特定年龄组的游戏"
   },
   {
    "word": "candidate",
    "phonetic": "ˈkændɪˌdet, -dɪt",
    "pos": "n.",
    "meaning": "候选人，候补者；应试者",
    "example": "a presidential candidate",
    "exampleCn": "总统候选人"
   },
   {
    "word": "magistrate",
    "phonetic": "'mædʒɪs'tret",
    "pos": "n.",
    "meaning": "地方法官；文职官员；治安推事",
    "example": "She will face a local magistrate on Tuesday.",
    "exampleCn": "她将在星期二面见一位地方治安法官。"
   },
   {
    "word": "accessory",
    "phonetic": "ək'sɛsəri",
    "pos": "n.",
    "meaning": "配件；附件；[法]从犯；副的；同谋的；[昆]附属的",
    "example": "bathroom accessories such as mirrors and towel-rails",
    "exampleCn": "镜子和毛巾架等浴室配件"
   },
   {
    "word": "submarine",
    "phonetic": ",sʌbmə'rin",
    "pos": "n.",
    "meaning": "潜水艇；海底生物；[海洋]海底的；水下的",
    "example": "The captain dived his submarine deep to escape from the destroyers.",
    "exampleCn": "海军上校使他的潜艇深深下潜以逃避驱逐艇。"
   },
   {
    "word": "thermal",
    "phonetic": "'θɝml",
    "pos": "adj.",
    "meaning": "[热]热的，热量的",
    "example": "thermal energy",
    "exampleCn": "热能"
   },
   {
    "word": "indelible",
    "phonetic": "ɪn'dɛləbl",
    "pos": "adj.",
    "meaning": "难忘的；擦不掉的",
    "example": "Her words left an indelible impression on me for years to come.",
    "exampleCn": "她的话多年来我都难以忘怀。"
   },
   {
    "word": "protract",
    "phonetic": "pro'trækt",
    "pos": "vt",
    "meaning": "绘制；延长；伸展",
    "example": "Delay always breeds danger; and to protract a great design is often to ruin it.",
    "exampleCn": "推迟经常孕育危险；拖延一个伟大的工程常常意味着毁灭它。"
   },
   {
    "word": "quit",
    "phonetic": "kwɪt",
    "pos": "vt",
    "meaning": "离开；放弃；停止；使…解除；离开；[劳经]辞职；停止；离开；[计]退出",
    "example": "He quit his job after an argument with a colleague.",
    "exampleCn": "他和一个同事争吵后就辞职了。"
   },
   {
    "word": "ramble",
    "phonetic": "'ræmbl",
    "pos": "n.",
    "meaning": "漫步；漫游；随笔；漫步；漫游；闲逛；漫谈；蔓延",
    "example": "There’s plenty to discover as you ramble around this little island.",
    "exampleCn": "漫步这个小岛，你会有很多新发现。"
   },
   {
    "word": "lash",
    "phonetic": "læʃ",
    "pos": "vt",
    "meaning": "鞭打；冲击；摆动；扎捆；煽动；讽刺；鞭打；猛击；急速甩动；鞭打；睫毛；鞭子；责骂；讽刺",
    "example": "Oliver lashed the horses to go faster.",
    "exampleCn": "奥利弗快马加鞭。"
   },
   {
    "word": "pottery",
    "phonetic": "'pɑtəri",
    "pos": "n.",
    "meaning": "[陶瓷]陶器；陶器厂；陶器制造术",
    "example": "Native American pottery",
    "exampleCn": "美洲印第安人的陶器"
   },
   {
    "word": "prosecute",
    "phonetic": "'prɑsɪ'kjʊt",
    "pos": "vt",
    "meaning": "检举；贯彻；从事；依法进行；起诉；告发；作检察官",
    "example": "Shoplifters will be prosecuted.",
    "exampleCn": "在商店行窃者将被起诉。"
   },
   {
    "word": "aggravate",
    "phonetic": "'æɡrəvet",
    "pos": "vt",
    "meaning": "加重；使恶化；激怒",
    "example": "Their money problems were further aggravated by a rise in interest rates.",
    "exampleCn": "由于利率上调，他们的财务问题更加严重。"
   },
   {
    "word": "mediate",
    "phonetic": "'midɪet",
    "pos": "vi",
    "meaning": "调解；斡旋；居中；调停；传达；间接的；居间的",
    "example": "The former president has agreed to mediate the peace talks.",
    "exampleCn": "前总统同意就和谈进行斡旋。"
   },
   {
    "word": "conscience",
    "phonetic": "ˈkɑːnʃəns",
    "pos": "n.",
    "meaning": "良心，犯罪感",
    "example": "Well, at least I can face them all with a clear conscience (= the knowledge that you have done nothing wrong ) .",
    "exampleCn": "好吧，至少我可以问心无愧地面对他们所有人。"
   },
   {
    "word": "scenery",
    "phonetic": "'sinəri",
    "pos": "n.",
    "meaning": "风景；景色；舞台布景",
    "example": "The best part of the trip was the fantastic scenery.",
    "exampleCn": "此次旅行最精彩之处就是那美妙绝伦的风景。"
   },
   {
    "word": "chronic",
    "phonetic": "'krɑnɪk",
    "pos": "adj.",
    "meaning": "[医]慢性的；长期的；习惯性的",
    "example": "chronic arthritis",
    "exampleCn": "慢性关节炎"
   },
   {
    "word": "sustain",
    "phonetic": "sə'sten",
    "pos": "vt",
    "meaning": "维持；支撑，承担；忍受；供养；证实",
    "example": "She found it difficult to sustain the children’s interest.",
    "exampleCn": "她发现很难保持孩子们的兴趣。"
   },
   {
    "word": "stuff",
    "phonetic": "stʌf",
    "pos": "n.",
    "meaning": "东西；材料；填充物；素材资料；塞满；[机]填塞；让吃饱；吃得过多",
    "example": "I’ve got some sticky stuff on my shoe.",
    "exampleCn": "我鞋子上有什么黏糊糊的东西。"
   },
   {
    "word": "site",
    "phonetic": "saɪt",
    "pos": "n.",
    "meaning": "地点；[自]位置；场所；设置；为…选址",
    "example": "He said chemical weapons had never been sited in Germany.",
    "exampleCn": "他说从未在德国部署过化学武器。"
   },
   {
    "word": "veteran",
    "phonetic": "'vɛtərən",
    "pos": "n.",
    "meaning": "老兵；老手；富有经验的人；老兵的；经验丰富的",
    "example": "a Vietnam veteran",
    "exampleCn": "越战老兵"
   },
   {
    "word": "accompany",
    "phonetic": "ə'kʌmpəni",
    "pos": "vt",
    "meaning": "陪伴，伴随；伴奏",
    "example": "Children under 14 must be accompanied by an adult.",
    "exampleCn": "14岁以下儿童必须有成人陪同。"
   },
   {
    "word": "pace",
    "phonetic": "pes",
    "pos": "n.",
    "meaning": "一步；步速；步法",
    "example": "He quickened his pace , longing to be home.",
    "exampleCn": "他加快步伐，盼望着早点回到家中。"
   },
   {
    "word": "annual",
    "phonetic": "'ænjuəl",
    "pos": "adj.",
    "meaning": "年度的；[统计]每年的；年刊，[图情]年鉴；一年生植物",
    "example": "The school trip has become an annual event.",
    "exampleCn": "学校组织的旅行成了一年一度的活动。"
   },
   {
    "word": "cosmic",
    "phonetic": "'kɑzmɪk",
    "pos": "adj.",
    "meaning": "宇宙的（等于cosmical）",
    "example": "...the cosmic laws governing our world.",
    "exampleCn": "…主宰我们世界的宇宙法则。"
   },
   {
    "word": "majestic",
    "phonetic": "mə'dʒɛstɪk",
    "pos": "adj.",
    "meaning": "庄严的；宏伟的",
    "example": "This lovely village is surrounded by majestic mountain scenery.",
    "exampleCn": "这座美丽的村庄四周山色壮丽。"
   },
   {
    "word": "give",
    "phonetic": "ɡɪv",
    "pos": "vt",
    "meaning": "给；产生；让步；举办；授予；弹性；弯曲；伸展性；捐赠；面向；有弹性；气候转暖",
    "example": "Researchers were given a £10,000 grant to continue their work.",
    "exampleCn": "研究人员得到一万英镑的经费以继续他们的研究。"
   },
   {
    "word": "outspoken",
    "phonetic": "aʊt'spokən",
    "pos": "adj.",
    "meaning": "坦率的，直言不讳的",
    "example": "an outspoken critic of the education reforms",
    "exampleCn": "对教育改革直言不讳的批评者"
   },
   {
    "word": "storage",
    "phonetic": "'stɔrɪdʒ",
    "pos": "n.",
    "meaning": "[计]存储；[建][经]仓库；[贸易]贮藏所",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "unique",
    "phonetic": "jʊ'nik",
    "pos": "adj.",
    "meaning": "独特的，稀罕的；[数]唯一的，独一无二的",
    "example": "Each person’s fingerprints are unique.",
    "exampleCn": "每个人的指纹都是独一无二的。"
   },
   {
    "word": "screw",
    "phonetic": "skru",
    "pos": "vt",
    "meaning": "旋，拧；压榨；强迫；螺旋；[机]螺丝钉；吝啬鬼；转动，拧",
    "example": "Fix the frame in position and tighten the screws .",
    "exampleCn": "把框子固定在正确位置上，拧紧螺丝。"
   },
   {
    "word": "pore",
    "phonetic": "pɔr",
    "pos": "vi",
    "meaning": "细想；凝视；熟读；[陶瓷]气孔；小孔",
    "example": "The size of your pores is determined by the amount of oil they produce.",
    "exampleCn": "毛孔的大小取决于毛孔分泌油脂的多少。"
   },
   {
    "word": "slap",
    "phonetic": "slæp",
    "pos": "vt",
    "meaning": "拍击；侮辱；掌击；掴…的耳光；掴；侮辱；掌击；拍打声；掴；拍击；直接地；猛然地；恰好",
    "example": "Sarah slapped Aaron across the face.",
    "exampleCn": "萨拉在阿龙的脸上掴了一巴掌。"
   },
   {
    "word": "stick",
    "phonetic": "stɪk",
    "pos": "vt",
    "meaning": "刺，戳；伸出；粘贴；坚持；伸出；粘住；棍；手杖；呆头呆脑的人",
    "example": "They collected sticks to start the fire.",
    "exampleCn": "他们捡来树枝生火。"
   },
   {
    "word": "keen",
    "phonetic": "kin",
    "pos": "adj.",
    "meaning": "敏锐的，敏捷的；渴望的；强烈的；热心的；锐利的；痛哭，挽歌",
    "example": "a keen photographer",
    "exampleCn": "一个摄影迷"
   },
   {
    "word": "status",
    "phonetic": "ˈstætəs; ˈstetəs",
    "pos": "n.",
    "meaning": "地位；状态；情形；重要身分",
    "example": "These documents have no legal status in Britain.",
    "exampleCn": "这些文件在英国并无法律效力。"
   },
   {
    "word": "lubricate",
    "phonetic": "'lubrɪket",
    "pos": "v.",
    "meaning": "使润滑，使顺利",
    "example": "Lubricate all moving parts with grease.",
    "exampleCn": "给所有活动部件加润滑油。"
   },
   {
    "word": "overwhelm",
    "phonetic": ",ovɚ'wɛlm",
    "pos": "vt",
    "meaning": "压倒；淹没；受打击",
    "example": "But the various pros and cons should not blindly overwhelm one another.",
    "exampleCn": "但是，众多的利弊得失不应盲目的一个压倒另一个。"
   },
   {
    "word": "pains",
    "phonetic": "penz",
    "pos": "v.",
    "meaning": "使痛苦（pain的第三人称单数形式）",
    "example": "...grey eyes that seemed filled with pain.",
    "exampleCn": "…似乎充满了痛苦的灰色眼睛。"
   },
   {
    "word": "variable",
    "phonetic": "'vɛrɪəbl",
    "pos": "adj.",
    "meaning": "[生物][数][光]变量的；可变的；易变的，多变的；变异的，畸变的",
    "example": "Expect variable cloudiness and fog tomorrow.",
    "exampleCn": "预计明天多云有雾，天气多变。"
   },
   {
    "word": "handbook",
    "phonetic": "'hændbʊk",
    "pos": "n.",
    "meaning": "[图情]手册；指南",
    "example": "the Fiction Writer’s Handbook",
    "exampleCn": "《小说写作手册》"
   },
   {
    "word": "rigid",
    "phonetic": "'rɪdʒɪd",
    "pos": "adj.",
    "meaning": "严格的；僵硬的，死板的；坚硬的；精确的",
    "example": "rigid and authoritarian methods of education",
    "exampleCn": "死板、专断的教育方法"
   },
   {
    "word": "embrace",
    "phonetic": "ɪm'bres",
    "pos": "vt",
    "meaning": "拥抱；信奉，皈依；包含；拥抱；拥抱",
    "example": "Jack warmly embraced his son.",
    "exampleCn": "杰克热情拥抱他的儿子。"
   },
   {
    "word": "ivory",
    "phonetic": "'aɪvəri",
    "pos": "n.",
    "meaning": "[脊椎]象牙；乳白色；长牙；乳白色的；[轻]象牙制的",
    "example": "an ivory chess set",
    "exampleCn": "一副象牙国际象棋"
   },
   {
    "word": "radical",
    "phonetic": "'rædɪkl",
    "pos": "adj.",
    "meaning": "激进的；根本的；彻底的；基础；激进分子；[物化]原子团；[数]根数",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "identity",
    "phonetic": "aɪ'dɛntəti",
    "pos": "n.",
    "meaning": "身份；同一性，一致；特性；恒等式",
    "example": "The identity of the killer is still unknown.",
    "exampleCn": "凶手的身份仍未查明。"
   },
   {
    "word": "prevail",
    "phonetic": "pri'vel",
    "pos": "vi",
    "meaning": "盛行，流行；战胜，获胜",
    "example": "A similar situation prevails in Canada.",
    "exampleCn": "同样的情况在加拿大也普遍存在。"
   },
   {
    "word": "ferry",
    "phonetic": "'fɛri",
    "pos": "vt",
    "meaning": "（乘渡船）渡过；用渡船运送；空运",
    "example": "They had recrossed the River Gambia by ferry.",
    "exampleCn": "他们乘船又一次渡过了冈比亚河。"
   },
   {
    "word": "pinpoint",
    "phonetic": "'pɪnpɔɪnt",
    "pos": "vt",
    "meaning": "查明；精确地找到；准确描述；精确的；详尽的；针尖；精确位置；极小之物",
    "example": "They have to be able to pinpoint people in order to work, but satellite positioning does not work indoors.",
    "exampleCn": "因为这样的技术必须精确人的位置才可以工作，而目前卫星的定位系统还不能运行到室内。"
   },
   {
    "word": "refreshment",
    "phonetic": "ri'frɛʃmənt",
    "pos": "n.",
    "meaning": "点心；起提神作用的东西；精力恢复",
    "example": "Refreshments will be served after the meeting.",
    "exampleCn": "会后有茶点招待。"
   },
   {
    "word": "essence",
    "phonetic": "'ɛsns",
    "pos": "n.",
    "meaning": "本质，实质；精华；[化工]香精",
    "example": "In essence his message was very simple.",
    "exampleCn": "实质上他想表达的意思很简单。"
   },
   {
    "word": "hail",
    "phonetic": "hel",
    "pos": "n.",
    "meaning": "[气象]冰雹；致敬；招呼；一阵；万岁；欢迎",
    "example": "heavy showers of rain and hail",
    "exampleCn": "夹着冰雹的阵阵大雨"
   },
   {
    "word": "litter",
    "phonetic": "'lɪtɚ",
    "pos": "n.",
    "meaning": "垃圾；轿，担架；一窝（动物的幼崽）；凌乱；产仔；乱扔废弃物",
    "example": "People who drop litter can be fined in some cities.",
    "exampleCn": "在有些城市，乱扔垃圾的人会被罚款。"
   },
   {
    "word": "shiver",
    "phonetic": "'ʃɪvɚ",
    "pos": "n.",
    "meaning": "颤抖，战栗；碎片；颤抖；哆嗦；打碎；颤抖；打碎",
    "example": "Jake stood shivering in the cold air.",
    "exampleCn": "大冷天里，杰克站着冻得瑟瑟发抖。"
   },
   {
    "word": "portion",
    "phonetic": "'pɔrʃən",
    "pos": "n.",
    "meaning": "部分；一份；命运；分配；给…嫁妆",
    "example": "Do you have any children’s portions?",
    "exampleCn": "你们有儿童餐吗？"
   },
   {
    "word": "courtesy",
    "phonetic": "'kɝtəsi",
    "pos": "n.",
    "meaning": "礼貌；好意；恩惠；殷勤的；被承认的；出于礼节的",
    "example": "It’s a matter of common courtesy to acknowledge letters.",
    "exampleCn": "确认收到来信是起码的礼貌。"
   },
   {
    "word": "feast",
    "phonetic": "fist",
    "pos": "vt",
    "meaning": "享受；款待，宴请；筵席，宴会；节日；享受；参加宴会",
    "example": "Lunch was a feast of meat and vegetables, cheese, yoghurt and fruit, with unlimited wine.",
    "exampleCn": "午餐是一场盛宴，有肉、蔬菜、奶酪、酸奶和水果，以及不限量的葡萄酒。"
   },
   {
    "word": "propriety",
    "phonetic": "prə'praɪəti",
    "pos": "n.",
    "meaning": "适当；礼节；得体",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "surplus",
    "phonetic": "'sɝpləs",
    "pos": "n.",
    "meaning": "[数]剩余；[贸易]顺差；[会计]盈余；[电子][经]过剩；[数][电子]剩余的；[经]过剩的",
    "example": "Any surplus can be trimmed away.",
    "exampleCn": "多出来的部分可以修剪掉。"
   },
   {
    "word": "odyssey",
    "phonetic": "'ɑdəsi",
    "pos": "n.",
    "meaning": "长途冒险旅行；一连串的冒险",
    "example": "a spiritual odyssey",
    "exampleCn": "一次精神上的艰难历程"
   },
   {
    "word": "portfolio",
    "phonetic": "pɔrt'folɪo",
    "pos": "n.",
    "meaning": "[管理]公文包；文件夹；证券投资组合；部长职务",
    "example": "the foreign affairs portfolio",
    "exampleCn": "外交部长职责"
   },
   {
    "word": "superficial",
    "phonetic": ",supɚ'fɪʃl",
    "pos": "adj.",
    "meaning": "表面的；肤浅的；表面文章；外表；浅薄的人",
    "example": "They only have the most superficial understanding of prison life.",
    "exampleCn": "他们对监狱生活只有最粗浅的了解。"
   },
   {
    "word": "session",
    "phonetic": "'sɛʃən",
    "pos": "n.",
    "meaning": "会议；（法庭的）[法]开庭；（议会等的）开会；学期；讲习会",
    "example": "Board members met in closed session (= with nobody else present ) .",
    "exampleCn": "委员会成员举行了闭门会议。"
   },
   {
    "word": "obliging",
    "phonetic": "ə'blaɪdʒɪŋ",
    "pos": "adj.",
    "meaning": "乐于助人的；有礼貌的；体贴的；亲切的；迫使；约束（oblige的现在分词）",
    "example": "The shop assistant was very obliging.",
    "exampleCn": "店员非常热情。"
   },
   {
    "word": "shutter",
    "phonetic": "'ʃʌtɚ",
    "pos": "n.",
    "meaning": "[摄]快门；[建]百叶窗；关闭物；[机]遮板",
    "example": "There are a few things you should check before pressing the shutter release.",
    "exampleCn": "在按快门之前，有几件事情你应该检查。"
   },
   {
    "word": "petty",
    "phonetic": "'pɛti",
    "pos": "adj.",
    "meaning": "琐碎的；小气的；小规模的",
    "example": "petty squabbles",
    "exampleCn": "小口角"
   },
   {
    "word": "cripple",
    "phonetic": "'krɪpl",
    "pos": "vt",
    "meaning": "削弱；使跛；[医]使残废；[医]跛子；残废；跛的；[医]残废的",
    "example": "She has gone from being a healthy, fit, and sporty young woman to being a cripple.",
    "exampleCn": "她从一个健康、强壮、爱好体育运动的年轻姑娘变成了一个残疾人。"
   },
   {
    "word": "probation",
    "phonetic": "pro'beʃən",
    "pos": "n.",
    "meaning": "[劳经]试用；缓刑；查验",
    "example": "The judge sentenced Jennings to three years’ probation.",
    "exampleCn": "法官判詹宁斯三年缓刑。"
   },
   {
    "word": "pendulum",
    "phonetic": "'pɛndʒələm",
    "pos": "n.",
    "meaning": "钟摆",
    "example": "After several years of Republican government, the pendulum will undoubtedly swing back and voters will elect a Democrat.",
    "exampleCn": "由共和党执政数年后，选民无疑会掉过头来，选出一位民主党人。"
   },
   {
    "word": "exile",
    "phonetic": "'ɛksaɪl",
    "pos": "n.",
    "meaning": "流放，充军；放逐，被放逐者；流犯；放逐，流放；使背井离乡",
    "example": "political exiles",
    "exampleCn": "政治流亡者"
   },
   {
    "word": "convince",
    "phonetic": "kən'vɪns",
    "pos": "vt",
    "meaning": "说服；使确信，使信服",
    "example": "Her arguments didn’t convince everyone, but changes were made.",
    "exampleCn": "她的论点不能说服每个人，但还是引起了一些变化。"
   },
   {
    "word": "righteous",
    "phonetic": "'raɪtʃəs",
    "pos": "adj.",
    "meaning": "正义的；正直的；公正的",
    "example": "a righteous God",
    "exampleCn": "正义的上帝"
   },
   {
    "word": "champagne",
    "phonetic": "ʃæm'pen",
    "pos": "n.",
    "meaning": "[食品]香槟酒；香槟酒色",
    "example": "I drank a cup of champagne.",
    "exampleCn": "我喝了一杯香槟。"
   },
   {
    "word": "appetite",
    "phonetic": "'æpɪtaɪt",
    "pos": "n.",
    "meaning": "[生理]食欲；嗜好",
    "example": "Her husband always had a huge appetite.",
    "exampleCn": "她丈夫向来胃口极大。"
   },
   {
    "word": "sophisticated",
    "phonetic": "sə'fɪstɪketɪd",
    "pos": "adj.",
    "meaning": "复杂的；精致的；久经世故的；富有经验的；使变得世故；使迷惑；篡改（sophisticate的过去分词形式）",
    "example": "sophisticated software",
    "exampleCn": "很先进的软件"
   },
   {
    "word": "poke",
    "phonetic": "pok",
    "pos": "vi",
    "meaning": "刺，捅；戳；伸出；刺探；闲荡；刺，捅；戳；拨开；戳；刺；袋子；懒汉",
    "example": "Vanessa gave me a playful poke in the ribs.",
    "exampleCn": "瓦妮莎开玩笑地戳了一下我的肋骨。"
   },
   {
    "word": "elevator",
    "phonetic": "'ɛlɪvetɚ",
    "pos": "n.",
    "meaning": "电梯；[机]升降机；升降舵；起卸机",
    "example": "We’ll have to take the elevator.",
    "exampleCn": "我们只好坐电梯了。"
   },
   {
    "word": "touchy",
    "phonetic": "'tʌtʃi",
    "pos": "adj.",
    "meaning": "过敏的；易生气的；难以取悦的",
    "example": "She is very touchy about her past.",
    "exampleCn": "她对自己的过去非常敏感。"
   },
   {
    "word": "recommendation",
    "phonetic": ",rɛkəmɛn'deʃən",
    "pos": "n.",
    "meaning": "推荐；建议；推荐信",
    "example": "Try to get letters of recommendation from bosses and colleagues.",
    "exampleCn": "设法得到老板和同事的推荐信。"
   },
   {
    "word": "tap",
    "phonetic": "tæp",
    "pos": "vt",
    "meaning": "轻敲；轻打；装上嘴子；轻拍；轻击；轻叩；水龙头；轻打",
    "example": "(= water that comes out of a tap ) is usually heavily treated with chemicals.",
    "exampleCn": "自来水一般都用化学品严格处理过。"
   },
   {
    "word": "shed",
    "phonetic": "ʃɛd",
    "pos": "vt",
    "meaning": "流出；摆脱；散发；倾吐；流出；脱落；散布；小屋，棚；分水岭",
    "example": "a tool shed",
    "exampleCn": "工具棚"
   },
   {
    "word": "outweigh",
    "phonetic": "'aʊt'we",
    "pos": "vt",
    "meaning": "比…重（在重量上）；比…重要；比…有价值",
    "example": "The benefits of the scheme outweigh the disadvantages.",
    "exampleCn": "这项计划利大于弊。"
   },
   {
    "word": "reinforce",
    "phonetic": ",riɪn'fɔrs",
    "pos": "vt",
    "meaning": "加强，加固；强化；补充；加强；加固物；加固材料",
    "example": "The film reinforces the idea that women should be pretty and dumb.",
    "exampleCn": "这部影片强化了这个观点——女人要漂亮，而且要笨一些。"
   },
   {
    "word": "loaf",
    "phonetic": "lof",
    "pos": "n.",
    "meaning": "条，一条面包；块；游荡；游荡；游手好闲；虚度光阴；游荡；游手好闲；虚度光阴",
    "example": "a loaf of bread",
    "exampleCn": "一条面包"
   },
   {
    "word": "feat",
    "phonetic": "fit",
    "pos": "n.",
    "meaning": "功绩，壮举；技艺表演；合适的；灵巧的",
    "example": "A racing car is an extraordinary feat of engineering.",
    "exampleCn": "赛车是工程学的一项非凡业绩。"
   },
   {
    "word": "cumulative",
    "phonetic": "'kjumjəletɪv",
    "pos": "adj.",
    "meaning": "累积的",
    "example": "Learning is a cumulative process.",
    "exampleCn": "学习是个逐渐积累的过程。"
   },
   {
    "word": "nylon",
    "phonetic": "'naɪlɑn",
    "pos": "n.",
    "meaning": "尼龙，[纺]聚酰胺纤维；尼龙袜",
    "example": "nylon fabric",
    "exampleCn": "尼龙织物"
   },
   {
    "word": "madden",
    "phonetic": "'mædn",
    "pos": "vt",
    "meaning": "使疯狂；激怒；发狂",
    "example": "The unfortunate animal was maddened with pain.",
    "exampleCn": "那可怜的动物痛得发狂。"
   },
   {
    "word": "technique",
    "phonetic": "tɛk'nik",
    "pos": "n.",
    "meaning": "技巧，技术；手法",
    "example": "He’s a great player, with brilliant technique.",
    "exampleCn": "他是个伟大的球员，球技十分精湛。"
   },
   {
    "word": "guideline",
    "phonetic": "'ɡaɪdlaɪn",
    "pos": "n.",
    "meaning": "(常作pl)",
    "example": "This chapter gives you some guidelines to help you in your work.",
    "exampleCn": "本章将介绍一些指导性原则，为你的工作提供帮助。"
   },
   {
    "word": "hang",
    "phonetic": "hæŋ",
    "pos": "vt",
    "meaning": "悬挂，垂下；装饰；绞死；使悬而未决；悬着，垂下；被绞死；悬而不决；悬挂；暂停，中止",
    "example": "If he is found guilty, he will almost certainly hang.",
    "exampleCn": "如果被判有罪，他几乎肯定会被处以绞刑。"
   },
   {
    "word": "emotion",
    "phonetic": "ɪ'moʃən",
    "pos": "n.",
    "meaning": "[心理]情感；情绪",
    "example": "Her voice was full of emotion.",
    "exampleCn": "她的声音充满了激情。"
   },
   {
    "word": "tuck",
    "phonetic": "tʌk",
    "pos": "vt",
    "meaning": "卷起；挤进；用某物舒适地裹住；使有褶裥；收拢；大口吃；使隐藏；食物；船尾突出部；缝摺；抱膝式跳水；活力；鼓声；缝褶裥；缩拢；舒服地裹在里面；大口吃",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "magnitude",
    "phonetic": "'mæɡnɪtud",
    "pos": "n.",
    "meaning": "大小；量级；[地震]震级；重要；光度",
    "example": "an increase of this order of magnitude",
    "exampleCn": "如此大幅度的增长"
   },
   {
    "word": "cereal",
    "phonetic": "'sɪrɪəl",
    "pos": "n.",
    "meaning": "[作物]谷类，谷物；谷类食品；谷类植物；[作物]谷类的；谷类制成的",
    "example": "a bowl of breakfast cereal",
    "exampleCn": "一碗早餐麦片"
   },
   {
    "word": "jungle",
    "phonetic": "'dʒʌŋɡl",
    "pos": "n.",
    "meaning": "丛林，[林]密林；危险地带；丛林的；蛮荒的",
    "example": "the Amazon jungle",
    "exampleCn": "亚马孙丛林"
   },
   {
    "word": "misappropriate",
    "phonetic": ",mɪsə'proprɪet",
    "pos": "vt",
    "meaning": "侵占；盗用；滥用",
    "example": "He claimed the finance manager had misappropriated company funds.",
    "exampleCn": "他声称财务经理挪用了公司资金。"
   },
   {
    "word": "erosion",
    "phonetic": "ɪ'roʒən",
    "pos": "n.",
    "meaning": "侵蚀，[化学]腐蚀",
    "example": "the problem of soil erosion",
    "exampleCn": "水土流失的问题"
   },
   {
    "word": "hijack",
    "phonetic": "'haɪdʒæk",
    "pos": "vt",
    "meaning": "抢劫；揩油；劫持；威逼；敲诈",
    "example": "The airliner was hijacked by a group of terrorists.",
    "exampleCn": "该航班被一帮恐怖分子劫持。"
   },
   {
    "word": "meteoric",
    "phonetic": ",mitɪ'ɔrɪk",
    "pos": "adj.",
    "meaning": "大气的；流星的；疾速的",
    "example": "meteoric iron",
    "exampleCn": "陨铁"
   },
   {
    "word": "clearance",
    "phonetic": "'klɪrəns",
    "pos": "n.",
    "meaning": "清除；空隙",
    "example": "She’ll race if she gets medical clearance from her doctor.",
    "exampleCn": "如果取得了医生的许可，她就会参加比赛。"
   },
   {
    "word": "scrape",
    "phonetic": "skrep",
    "pos": "n.",
    "meaning": "刮掉；擦痕；困境；刮擦声；刮；擦伤；挖成；刮掉；刮出刺耳声",
    "example": "Scrape the carrots and slice them thinly.",
    "exampleCn": "把这些胡萝卜去皮切成薄片。"
   },
   {
    "word": "sicken",
    "phonetic": "'sɪkən",
    "pos": "vt",
    "meaning": "使患病；使恶心；使嫌恶；生病；变厌腻",
    "example": "The thought of such cruelty sickened her.",
    "exampleCn": "想到如此残忍的行为，她就很愤慨。"
   },
   {
    "word": "statue",
    "phonetic": "'stætʃu",
    "pos": "n.",
    "meaning": "[建]雕像，塑像",
    "example": "Churchill’s statue stands outside the parliament building.",
    "exampleCn": "丘吉尔的塑像矗立在议会大厦外。"
   },
   {
    "word": "occupy",
    "phonetic": "'ɑkjupaɪ",
    "pos": "vt",
    "meaning": "占据，占领；居住；使忙碌",
    "example": "He occupies the house without paying any rent.",
    "exampleCn": "他住在这幢房子里，没有付一分钱房租。"
   },
   {
    "word": "nil",
    "phonetic": "nɪl",
    "pos": "n.",
    "meaning": "无，[数]零",
    "example": "The new machine reduced labour costs to almost nil.",
    "exampleCn": "新机器把劳动成本几乎降到零。"
   },
   {
    "word": "culminate",
    "phonetic": "'kʌlmɪnet",
    "pos": "vi",
    "meaning": "到绝顶；达到高潮；达到顶点；使结束；使达到高潮",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "file",
    "phonetic": "faɪl",
    "pos": "n.",
    "meaning": "[计]文件；档案；文件夹；[机]锉刀；提出；锉；琢磨；把…归档；列队行进；用锉刀锉",
    "example": "She pulled a blue file from the shelf.",
    "exampleCn": "她从架子上拉出一个蓝色文件夹。"
   },
   {
    "word": "ghastly",
    "phonetic": "ˈɡæstli",
    "pos": "adj.",
    "meaning": "可怕的；惨白的；惊人的；极坏的",
    "example": "a ghastly accident",
    "exampleCn": "可怕的事故"
   },
   {
    "word": "ugly",
    "phonetic": "'ʌɡli",
    "pos": "adj.",
    "meaning": "丑陋的；邪恶的；令人厌恶的",
    "example": "a very ugly man",
    "exampleCn": "非常丑陋的男子"
   },
   {
    "word": "chip",
    "phonetic": "tʃɪp",
    "pos": "vt",
    "meaning": "削，凿；削成碎片；剥落；碎裂；[电子]芯片；筹码；碎片",
    "example": "the age of the silicon chip",
    "exampleCn": "芯片时代"
   },
   {
    "word": "occurrence",
    "phonetic": "ə'kʌrəns",
    "pos": "n.",
    "meaning": "发生；出现；事件；发现",
    "example": "Complaints seemed to be an everyday occurrence.",
    "exampleCn": "投诉似乎成了天天发生的事。"
   },
   {
    "word": "propel",
    "phonetic": "prə'pɛl",
    "pos": "vt",
    "meaning": "推进；驱使；激励；驱策",
    "example": "a boat propelled by a small motor",
    "exampleCn": "由小马达驱动的小船"
   },
   {
    "word": "once",
    "phonetic": "wʌns",
    "pos": "adv.",
    "meaning": "一次；曾经；一次，一回",
    "example": "Once I get him a job, he’ll be fine.",
    "exampleCn": "一旦我帮他找到了工作，他就会好的。"
   },
   {
    "word": "approach",
    "phonetic": "ə'protʃ",
    "pos": "n.",
    "meaning": "方法；途径；接近；接近；着手处理；靠近",
    "example": "As I approached the house, I noticed a light on upstairs.",
    "exampleCn": "我走近那幢房子的时候注意到楼上有灯光。"
   },
   {
    "word": "overture",
    "phonetic": "'ovətʃʊr",
    "pos": "n.",
    "meaning": "前奏曲；提案；序幕；提议；为……奏前奏曲",
    "example": "They began making overtures to the Irish government.",
    "exampleCn": "他们开始向爱尔兰政府表示友好。"
   },
   {
    "word": "wholesale",
    "phonetic": "'holsel",
    "pos": "adj.",
    "meaning": "[贸易]批发的；大规模的；[贸易]批发；大规模地；以批发方式",
    "example": "He does wholesale business, while his brother is engaged in retail business.",
    "exampleCn": "他经营批发生意， 他弟弟则经营零售生意。"
   },
   {
    "word": "stationery",
    "phonetic": "'steʃənɛri",
    "pos": "n.",
    "meaning": "[轻]文具；信纸",
    "example": "...envelopes and other office stationery.",
    "exampleCn": "…信封及其他办公文具。"
   },
   {
    "word": "liquor",
    "phonetic": "'lɪkɚ",
    "pos": "n.",
    "meaning": "酒，含酒精饮料；[化学]溶液；[物]液体；烈酒；喝酒，灌酒；使喝醉",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "legend",
    "phonetic": "'lɛdʒənd",
    "pos": "n.",
    "meaning": "传奇；说明；[测]图例；刻印文字",
    "example": "Local legend has it that (= says that ) the island was the original Garden of Eden.",
    "exampleCn": "当地传说这个岛就是伊甸园的原型。"
   }
  ]
 },
 {
  "level": "B2",
  "name": "提高",
  "band": "雅思 ≈6.0–6.5",
  "desc": "按词频排列的第 4 段，是冲 6.5 分必须拿下的核心词汇。",
  "words": [
   {
    "word": "contaminate",
    "phonetic": "kən'tæmɪnet",
    "pos": "vt",
    "meaning": "污染，弄脏",
    "example": "Drinking water supplies are believed to have been contaminated.",
    "exampleCn": "据信饮用水已受到污染。"
   },
   {
    "word": "loll",
    "phonetic": "lɑl",
    "pos": "v.",
    "meaning": "懒洋洋地倚靠,(头等)垂下n游手好闲的人\"",
    "example": "He was lolling on the sofa in the shadows near the fire.",
    "exampleCn": "他懒洋洋地躺在炉火边一个背光的沙发上。"
   },
   {
    "word": "inspire",
    "phonetic": "ɪn'spaɪɚ",
    "pos": "vt",
    "meaning": "激发；鼓舞；启示；产生；使生灵感",
    "example": "We need someone who can inspire the team.",
    "exampleCn": "我们需要一个能鼓舞团队士气的人。"
   },
   {
    "word": "constant",
    "phonetic": "'kɑnstənt",
    "pos": "adj.",
    "meaning": "不变的；恒定的；经常的；[数]常数；恒量",
    "example": "There was a constant stream of visitors to the house.",
    "exampleCn": "参观这幢房子的游客川流不息。"
   },
   {
    "word": "perimeter",
    "phonetic": "pə'rɪmɪtɚ",
    "pos": "n.",
    "meaning": "[数]周长；周界；[眼科]视野计",
    "example": "...the perimeter of the airport.",
    "exampleCn": "…机场周边。"
   },
   {
    "word": "neurotic",
    "phonetic": "nʊ'rɑtɪk",
    "pos": "adj.",
    "meaning": "神经过敏的；神经病的；神经病患者；神经过敏者",
    "example": "He seemed a neurotic, self-obsessed man.",
    "exampleCn": "他似乎是个神经过敏又自恋的人。"
   },
   {
    "word": "assemble",
    "phonetic": "ə'sɛmbl",
    "pos": "vt",
    "meaning": "集合，聚集；装配；收集；集合，聚集",
    "example": "A large crowd had assembled outside the American embassy.",
    "exampleCn": "一大群人聚集在美国大使馆外。"
   },
   {
    "word": "origin",
    "phonetic": "'ɔrɪdʒɪn",
    "pos": "n.",
    "meaning": "起源；[数]原点；出身；开端",
    "example": "The tradition has its origins in the Middle Ages.",
    "exampleCn": "这一传统源于中世纪。"
   },
   {
    "word": "hurl",
    "phonetic": "hɝl",
    "pos": "vt",
    "meaning": "丢下；用力投掷；愤慨地说出",
    "example": "Demonstrators were hurling bricks through the windows.",
    "exampleCn": "示威者在向窗里掷砖块。"
   },
   {
    "word": "coed",
    "phonetic": "'ko'ɛd",
    "pos": "n.",
    "meaning": "男女同校的学生",
    "example": "...two University of Florida coeds.",
    "exampleCn": "...两名佛罗里达大学的女生。"
   },
   {
    "word": "upright",
    "phonetic": "'ʌpraɪt",
    "pos": "adj.",
    "meaning": "正直的，诚实的；垂直的，直立的；笔直的；合乎正道的；垂直；竖立",
    "example": "Katie was still awake, sitting bolt upright(= sitting with her back very straight ) staring at the television.",
    "exampleCn": "凯蒂还醒着，坐得笔直，眼睛盯着电视。"
   },
   {
    "word": "volcano",
    "phonetic": "vɑl'keno",
    "pos": "n.",
    "meaning": "火山",
    "example": "Pompeii was destroyed when the volcano erupted in 79 AD.",
    "exampleCn": "庞贝城于公元79年在火山爆发中毁灭。"
   },
   {
    "word": "momentous",
    "phonetic": "mo'mɛntəs",
    "pos": "adj.",
    "meaning": "重要的；重大的",
    "example": "a momentous decision",
    "exampleCn": "重大决定"
   },
   {
    "word": "amid",
    "phonetic": "ə'mɪd",
    "pos": "prep.",
    "meaning": "在其中，在其间",
    "example": "The dollar has fallen in value amid rumors of weakness in the US economy.",
    "exampleCn": "在一片美国经济疲软的传言中，美元贬值了。"
   },
   {
    "word": "fierce",
    "phonetic": "fɪrs",
    "pos": "adj.",
    "meaning": "凶猛的；猛烈的；暴躁的",
    "example": "fierce fighting in the city",
    "exampleCn": "城里的激烈战斗"
   },
   {
    "word": "grill",
    "phonetic": "ɡrɪl",
    "pos": "vt",
    "meaning": "烧，烤；烤问；烧，烤；严加盘问；烤架，铁格子；烤肉",
    "example": "Pop it under the grill for five minutes.",
    "exampleCn": "把它放在烤架下烤五分钟。"
   },
   {
    "word": "primary",
    "phonetic": "'praɪmɛri",
    "pos": "adj.",
    "meaning": "主要的；[数]初级的；基本的；原色；最主要者",
    "example": "Our primary concern is to provide the refugees with food and health care.",
    "exampleCn": "我们的头等大事是向难民提供食品和医疗。"
   },
   {
    "word": "flexible",
    "phonetic": "'flɛksəbl",
    "pos": "adj.",
    "meaning": "灵活的；[力]柔韧的；易弯曲的",
    "example": "We can be flexible about your starting date.",
    "exampleCn": "你具体从哪天开始，我们可以灵活一点。"
   },
   {
    "word": "affiliate",
    "phonetic": "ə'fɪlɪet",
    "pos": "n.",
    "meaning": "联号；隶属的机构等；使附属；接纳；使紧密联系；参加，加入；发生联系",
    "example": "She affiliated herself with the Impressionist school of painting.",
    "exampleCn": "她加入了印象主义画派。"
   },
   {
    "word": "famine",
    "phonetic": "'fæmɪn",
    "pos": "n.",
    "meaning": "饥荒；饥饿，奇缺",
    "example": "the great potato famine in Ireland",
    "exampleCn": "爱尔兰严重的土豆荒"
   },
   {
    "word": "say",
    "phonetic": "se",
    "pos": "vt",
    "meaning": "讲；说明；例如；声称；假设；指明；讲；表示；念；假定；背诵",
    "example": "‘I’m so tired,’ she said.",
    "exampleCn": "“我太累了。”她说。"
   },
   {
    "word": "undoubtedly",
    "phonetic": "ʌn'daʊtɪdli",
    "pos": "adv.",
    "meaning": "确实地，无庸置疑地",
    "example": "This is undoubtedly important.",
    "exampleCn": "这无疑是重要的。"
   },
   {
    "word": "naval",
    "phonetic": "'nevl",
    "pos": "adj.",
    "meaning": "海军的，军舰的",
    "example": "a naval officer",
    "exampleCn": "海军军官"
   },
   {
    "word": "uneven",
    "phonetic": "ʌn'ivən",
    "pos": "adj.",
    "meaning": "不均匀的；不平坦的；[数]奇数的",
    "example": "She walked back carefully over the uneven ground.",
    "exampleCn": "她小心翼翼地从凹凸不平的地面上走回来。"
   },
   {
    "word": "perishable",
    "phonetic": "'pɛrɪʃəbl",
    "pos": "a&n",
    "meaning": "(尤指食物)易坏的,易腐烂的;易坏之物\"",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "grudge",
    "phonetic": "ɡrʌdʒ",
    "pos": "vt",
    "meaning": "怀恨；吝惜；妒忌；不情愿做；怨恨；恶意；妒忌",
    "example": "So I never grudge my love.",
    "exampleCn": "所以，我从不吝惜我的爱。"
   },
   {
    "word": "fabulous",
    "phonetic": "'fæbjələs",
    "pos": "adj.",
    "meaning": "难以置信的；传说的，寓言中的；极好的",
    "example": "Crystal clear waters, beautiful white sand beaches, swaying palm trees and fabulous dive sites – that’s why the Maldives, is known for being one of the best tropical holiday destinations in the world.",
    "exampleCn": "清澈透明的海水，美丽的白色沙滩，摇曳生姿的棕榈树，难以置信的的潜水胜地——这就是马尔代夫被誉为世界上最佳热带地区度假地之一的原因。"
   },
   {
    "word": "granary",
    "phonetic": "'grænəri",
    "pos": "n.",
    "meaning": "[粮食]谷仓，粮仓；盛产粮食的地区",
    "example": "The Mid-West is the granary of the U.S.",
    "exampleCn": "中西部是美国的粮仓。"
   },
   {
    "word": "psychology",
    "phonetic": "saɪ'kɑlədʒi",
    "pos": "n.",
    "meaning": "[心理]心理学；心理状态",
    "example": "I understood the psychology of this, but it still hurt.",
    "exampleCn": "我理解这种心理，但这仍然让我感到伤心。"
   },
   {
    "word": "slaughter",
    "phonetic": "'slɔtɚ",
    "pos": "vt",
    "meaning": "[畜牧]屠宰，屠杀；杀戮；使惨败；[畜牧]屠宰，屠杀；杀戮；消灭",
    "example": "Hundreds of innocent civilians had been slaughtered by government troops.",
    "exampleCn": "数百名无辜平民遭政府军屠杀。"
   },
   {
    "word": "ingredient",
    "phonetic": "ɪn'ɡridɪənt",
    "pos": "n.",
    "meaning": "原料；要素；组成部分",
    "example": "Combine all the ingredients in a large bowl.",
    "exampleCn": "把所有食材都放在一个大碗里。"
   },
   {
    "word": "refugee",
    "phonetic": "'rɛfjʊdʒi",
    "pos": "n.",
    "meaning": "难民，避难者；流亡者，逃亡者",
    "example": "Refugees were streaming across the border.",
    "exampleCn": "难民正涌过边境。"
   },
   {
    "word": "signify",
    "phonetic": "'sɪɡnɪfaɪ",
    "pos": "vt",
    "meaning": "表示；意味；预示；有重要性；要紧；冒充内行",
    "example": "Some tribes use special facial markings to signify status.",
    "exampleCn": "有些部落使用特殊的面部标记来表示地位。"
   },
   {
    "word": "convert",
    "phonetic": "kən'vɝt",
    "pos": "vi",
    "meaning": "转变，变换；皈依；改变信仰；皈依者；改变宗教信仰者",
    "example": "a 19th-century converted barn",
    "exampleCn": "由19世纪谷仓改建的房子"
   },
   {
    "word": "extract",
    "phonetic": "'ɛkstrækt",
    "pos": "vt",
    "meaning": "提取；取出；[图情]摘录；榨取；汁；[图情]摘录；[化学][药][化工]榨出物；选粹",
    "example": "You’ll have to have that tooth extracted.",
    "exampleCn": "你得把那颗牙拔掉。"
   },
   {
    "word": "invisible",
    "phonetic": "ɪn'vɪzəbl",
    "pos": "adj.",
    "meaning": "无形的，看不见的；无形的；不显眼的，暗藏的",
    "example": "The house was surrounded by trees, and invisible from the road.",
    "exampleCn": "这所房子树木环绕，从路上是看不见的。"
   },
   {
    "word": "contrive",
    "phonetic": "kən'traɪv",
    "pos": "vt",
    "meaning": "设计；发明；图谋；谋划；设法做到",
    "example": "In 1862, a technique was contrived to take a series of photographs showing stages of movement.",
    "exampleCn": "1862年时发明了一种技术，可以拍出一连串展示连续动作的照片。"
   },
   {
    "word": "descend",
    "phonetic": "dɪ'sɛnd",
    "pos": "vi",
    "meaning": "下降；下去；下来；遗传；屈尊",
    "example": "Our plane started to descend.",
    "exampleCn": "我们的飞机开始下降。"
   },
   {
    "word": "perturb",
    "phonetic": "pɚ'tɝb",
    "pos": "vt",
    "meaning": "扰乱；使…混乱；使…心绪不宁",
    "example": "What perturbs me is that magazine articles are so much shorter nowadays.",
    "exampleCn": "让我不安的是现在杂志文章都短多了。"
   },
   {
    "word": "instantaneous",
    "phonetic": ",ɪnstən'tenɪəs",
    "pos": "adj.",
    "meaning": "瞬间的；即时的；猝发的",
    "example": "So, the second method is almost always combined with the first, by checking the fields in instantaneous and then doing a batch validation before the form is submitted.",
    "exampleCn": "所以，第二种方法几乎总是和第一种方法结合在一起，先对域进行瞬时检查，然后在表单被提交之前执行批处理确认。"
   },
   {
    "word": "terrace",
    "phonetic": "ˈterəs",
    "pos": "n.",
    "meaning": "平台；[农]梯田；[建]阳台",
    "example": "...massive terraces of corn and millet carved into the mountainside like giant steps.",
    "exampleCn": "…山坡上开垦出来种玉米和小米的巨型台阶般的大块大块梯田。"
   },
   {
    "word": "permissible",
    "phonetic": "pɚ'mɪsəbl",
    "pos": "adj.",
    "meaning": "许可的，容许的",
    "example": "the maximum permissible level of radiation",
    "exampleCn": "允许的最大辐射水平"
   },
   {
    "word": "allegiance",
    "phonetic": "ə'lidʒəns",
    "pos": "n.",
    "meaning": "效忠，忠诚；忠贞",
    "example": "an oath of allegiance",
    "exampleCn": "效忠宣誓"
   },
   {
    "word": "plaster",
    "phonetic": "'plæstɚ",
    "pos": "n.",
    "meaning": "石膏；灰泥；膏药；减轻；粘贴；涂以灰泥；敷以膏药；使平服",
    "example": "The ceiling he had just plastered fell in and knocked him off his ladder.",
    "exampleCn": "他刚抹过灰泥的那块天花板脱落了，把他从梯子上砸了下来。"
   },
   {
    "word": "practically",
    "phonetic": "'præktɪkli",
    "pos": "adv.",
    "meaning": "实际地；几乎；事实上",
    "example": "I’ve read practically all of his books.",
    "exampleCn": "我差不多读过他所有的书。"
   },
   {
    "word": "infirmary",
    "phonetic": "ɪn'fɝməri",
    "pos": "n.",
    "meaning": "医务室；医院；养老院",
    "example": "All they need now are the keys to the infirmary.",
    "exampleCn": "现在所需要的就是医务室的门钥匙。"
   },
   {
    "word": "distil",
    "phonetic": "dis'til",
    "pos": "vi",
    "meaning": "蒸馏；提炼；渗出；蒸馏；提取…的精华；使渗出",
    "example": "The whisky had been distilled in 1926 and sat quietly maturing until 1987.",
    "exampleCn": "这瓶威士忌是1926年被蒸馏的，存放至1987年酿造成熟。"
   },
   {
    "word": "unanimous",
    "phonetic": "jʊ'nænəməs",
    "pos": "adj.",
    "meaning": "全体一致的；意见一致的；无异议的",
    "example": "It was decided by a unanimous vote that the school should close.",
    "exampleCn": "关闭学校是大家一致通过的决定。"
   },
   {
    "word": "scissors",
    "phonetic": "'sɪzɚz",
    "pos": "n.",
    "meaning": "[五金]剪刀；剪式跳法",
    "example": "a pair of scissors",
    "exampleCn": "一把剪刀"
   },
   {
    "word": "accelerate",
    "phonetic": "əkˈsɛləˌret",
    "pos": "vi",
    "meaning": "加速；促进；增加",
    "example": "measures to accelerate the rate of economic growth",
    "exampleCn": "加快经济增长速度的措施"
   },
   {
    "word": "disable",
    "phonetic": "dɪs'ebl",
    "pos": "vt",
    "meaning": "使失去能力；使残废；使无资格",
    "example": "Carter was permanently disabled in the war.",
    "exampleCn": "卡特在那场战争中成了终生残废。"
   },
   {
    "word": "lapse",
    "phonetic": "læps",
    "pos": "n.",
    "meaning": "失效；流逝；过失；失效；流逝；背离，失检；陷入",
    "example": "He forgot to offer Darren a drink, but Marie did not appear to notice the lapse.",
    "exampleCn": "他忘了给达伦倒饮料，玛丽好像也没有注意到这个疏忽。"
   },
   {
    "word": "antique",
    "phonetic": "æn'tik",
    "pos": "adj.",
    "meaning": "古老的，年代久远的；过时的，[古]古董的；古风的，古式的；[古]古董，古玩；古风，古希腊和古罗马艺术风格",
    "example": "The palace is full of priceless antiques.",
    "exampleCn": "宫殿里到处都是价值连城的古董。"
   },
   {
    "word": "crease",
    "phonetic": "kris",
    "pos": "n.",
    "meaning": "折痕；折缝；起皱；弄皱；使起折痕",
    "example": "She smoothed the creases from her skirt.",
    "exampleCn": "她捋平裙子上的皱褶。"
   },
   {
    "word": "evolution",
    "phonetic": "ˌɛvəˈluʃən; (occas.) ˌ ivəˈluʃən",
    "pos": "n.",
    "meaning": "演变；[进化]进化论；进展",
    "example": "the theory of evolution",
    "exampleCn": "进化论"
   },
   {
    "word": "sow",
    "phonetic": "so",
    "pos": "vt",
    "meaning": "播种；散布；使密布；播种",
    "example": "Sow the seeds in late March.",
    "exampleCn": "三月底播种。"
   },
   {
    "word": "prodigious",
    "phonetic": "prə'dɪdʒəs",
    "pos": "adj.",
    "meaning": "惊人的，异常的，奇妙的；巨大的",
    "example": "the artist’s prodigious output",
    "exampleCn": "那位艺术家惊人的高产"
   },
   {
    "word": "embark",
    "phonetic": "ɪm'bɑrk",
    "pos": "vi",
    "meaning": "从事，着手；上船或飞机；使从事；使上船",
    "example": "He's embarking on a new career as a writer.",
    "exampleCn": "他正开始一个当作家的新生涯。"
   },
   {
    "word": "questionnaire",
    "phonetic": "ˌkwɛstʃənˈɛr",
    "pos": "n.",
    "meaning": "问题单，调查表，征求意见表",
    "example": "Teachers will be asked to fill in a questionnaire.",
    "exampleCn": "教师们将被要求填写一份调查问卷。"
   },
   {
    "word": "voucher",
    "phonetic": "'vaʊtʃɚ",
    "pos": "n.",
    "meaning": "收据；[法]证人；保证人；证明者",
    "example": "As a basic business voucher in the economic exchange, invoice is a primitive evidence for financial accounting and an important proof for taxation check.",
    "exampleCn": "发票作为经济交往中基本的商事凭证，是财务会计核算的原始凭证和税务稽查的重要凭据。"
   },
   {
    "word": "puzzle",
    "phonetic": "'pʌzl",
    "pos": "vt",
    "meaning": "使…困惑；使…为难；苦思而得出；迷惑；冥思苦想；谜；难题；迷惑",
    "example": "The meaning of the poem has always been a puzzle.",
    "exampleCn": "那首诗的含义始终是个谜。"
   },
   {
    "word": "foil",
    "phonetic": "fɔɪl",
    "pos": "vt",
    "meaning": "衬托；阻止，挡开；挫败；贴箔于；[材]箔，金属薄片；衬托，烘托；[建]叶形片",
    "example": "The simple stone floor is the perfect foil for the brightly coloured furnishings.",
    "exampleCn": "朴素的石材地板完美地衬托出色彩鲜艳的家具。"
   },
   {
    "word": "grant",
    "phonetic": "ɡrænt",
    "pos": "vt",
    "meaning": "[法][专利]授予；允许；承认；同意；拨款；[法][专利]授予物",
    "example": "Britain could grant Spain’s request .",
    "exampleCn": "英国可能会同意西班牙的请求。"
   },
   {
    "word": "request",
    "phonetic": "rɪ'kwɛst",
    "pos": "n.",
    "meaning": "[计]请求；需要；要求，[计]请求",
    "example": "To request more information, please call our toll free number.",
    "exampleCn": "欲知详情，请拨打我们的免费电话。"
   },
   {
    "word": "subtle",
    "phonetic": "'sʌtl",
    "pos": "adj.",
    "meaning": "微妙的；精细的；敏感的；狡猾的；稀薄的",
    "example": "The pictures are similar, but there are subtle differences between them.",
    "exampleCn": "这些图片很相似，但它们之间有细微的差别。"
   },
   {
    "word": "sewer",
    "phonetic": "'suɚ",
    "pos": "n.",
    "meaning": "[建]下水道；阴沟；裁缝师",
    "example": "...the city's sewer system.",
    "exampleCn": "…该城市的下水道系统。"
   },
   {
    "word": "consumption",
    "phonetic": "kən'sʌmpʃən",
    "pos": "n.",
    "meaning": "[经]消费；消耗；肺痨",
    "example": "art intended for mass consumption",
    "exampleCn": "供大众消费的艺术品"
   },
   {
    "word": "hence",
    "phonetic": "hɛns",
    "pos": "adv.",
    "meaning": "因此；今后",
    "example": "The cost of transport is a major expense for an industry. Hence factory location is an important consideration.",
    "exampleCn": "运输成本是企业的一大支出，因此工厂选址是重要的考虑因素。"
   },
   {
    "word": "texture",
    "phonetic": "'tɛkstʃɚ",
    "pos": "n.",
    "meaning": "质地；纹理；结构；本质，实质",
    "example": "Matured over 18 months, this cheese has an open, crumbly texture with a strong flavour.",
    "exampleCn": "这种奶酪18个月后发酵成熟，气孔多，组织松脆，味道浓郁。"
   },
   {
    "word": "vary",
    "phonetic": "ˈveri",
    "pos": "vi",
    "meaning": "变化；变异；违反；改变；使多样化；变奏",
    "example": "Quentin’s mood seems to vary according to the weather.",
    "exampleCn": "昆廷的情绪似乎随天气而变化。"
   },
   {
    "word": "fleeting",
    "phonetic": "'flitɪŋ",
    "pos": "v.",
    "meaning": "迅速移动（fleet的ing形式）",
    "example": "Time is fleeting.; Time flies.",
    "exampleCn": "时光飞逝。"
   },
   {
    "word": "hostage",
    "phonetic": "'hɑstɪdʒ",
    "pos": "n.",
    "meaning": "人质；抵押品",
    "example": "The group are holding two tourists hostage (= keeping them as hostages ) .",
    "exampleCn": "这伙人挟持了两名游客作为人质。"
   },
   {
    "word": "pledge",
    "phonetic": "plɛdʒ",
    "pos": "n.",
    "meaning": "保证，誓言；[经]抵押；抵押品，典当物；保证，许诺；用……抵押；举杯祝……健康",
    "example": "He asked her to pledge the house as security for a loan.",
    "exampleCn": "他要她抵押房子作为贷款担保。"
   },
   {
    "word": "pry",
    "phonetic": "praɪ",
    "pos": "vt",
    "meaning": "撬动，撬开；刺探，探查；窥探；[机]杠杆",
    "example": "I don’t want to pry , but I need to ask you one or two questions.",
    "exampleCn": "我不想唐突，不过我需要问你一两个问题。"
   },
   {
    "word": "synthesis",
    "phonetic": "'sɪnθəsɪs",
    "pos": "n.",
    "meaning": "综合，[化学]合成；综合体",
    "example": "speech synthesis software",
    "exampleCn": "语音合成软件"
   },
   {
    "word": "distress",
    "phonetic": "dɪ'strɛs",
    "pos": "n.",
    "meaning": "危难，不幸；贫困；悲痛；使悲痛；使贫困",
    "example": "Luke’s behaviour caused his parents great distress.",
    "exampleCn": "卢克的行为使他的父母深感忧虑。"
   },
   {
    "word": "intimidate",
    "phonetic": "ɪn'tɪmɪdet",
    "pos": "vt",
    "meaning": "恐吓，威胁；胁迫",
    "example": "Attempts to intimidate her failed.",
    "exampleCn": "恐吓她的企图失败了。"
   },
   {
    "word": "oppose",
    "phonetic": "ə'poz",
    "pos": "vt",
    "meaning": "反对；对抗，抗争；反对",
    "example": "Congress is continuing to oppose the President’s health care budget.",
    "exampleCn": "国会继续反对总统的医疗保健预算。"
   },
   {
    "word": "orientate",
    "phonetic": "'orɪɛntet",
    "pos": "vi",
    "meaning": "向东；定向；给...定位；使适应",
    "example": "The reason for this was that he decided to orientate the map in the direction of the Pole Star since Polaris was the immovable guiding light in which the voyagers of that era placed their trust.",
    "exampleCn": "他之所以要这样做就是因为他决定以北极星的方向来确定地图的方位。 因为北极星是一盏不动的导航灯，那个时代的航海家们主要依靠北极星来导航。"
   },
   {
    "word": "ornament",
    "phonetic": "'ɔrnəmənt",
    "pos": "n.",
    "meaning": "[建][服装]装饰；装饰物；教堂用品；[建][服装]装饰，修饰",
    "example": "a shelf covered with books and ornaments",
    "exampleCn": "摆满书籍和装饰品的架子"
   },
   {
    "word": "teem",
    "phonetic": "tim",
    "pos": "vi",
    "meaning": "大量出现；充满；倒出",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "precipitate",
    "phonetic": "prɪ'sɪpɪtet",
    "pos": "n.",
    "meaning": "[化学]沉淀物；[化学]使沉淀；促成；猛抛；使陷入；[化学]沉淀；猛地落下；冷凝成为雨或雪等；突如其来的；猛地落下的；急促的",
    "example": "The riot was precipitated when four black men were arrested.",
    "exampleCn": "这场骚乱是因为四名黑人男子的被捕而突然引发的。"
   },
   {
    "word": "ordeal",
    "phonetic": "ɔr'dil",
    "pos": "n.",
    "meaning": "折磨；严酷的考验；痛苦的经验",
    "example": "They manned themselves for an ordeal.",
    "exampleCn": "他们振奋精神迎接考验。"
   },
   {
    "word": "placid",
    "phonetic": "'plæsɪd",
    "pos": "adj.",
    "meaning": "平静的；温和的；沉着的",
    "example": "a large, placid baby",
    "exampleCn": "一个胖胖的、安静的婴儿"
   },
   {
    "word": "conversely",
    "phonetic": "'kɑnvɝsli",
    "pos": "adv.",
    "meaning": "相反地",
    "example": "American consumers prefer white eggs; conversely, British buyers like brown eggs.",
    "exampleCn": "美国的消费者喜欢白色的鸡蛋，而英国的消费者却相反，他们喜欢棕色的鸡蛋。"
   },
   {
    "word": "worthwhile",
    "phonetic": "'wɝθ'waɪl",
    "pos": "adj.",
    "meaning": "值得(花时间、精力)的；合算的",
    "example": "He wanted to do a worthwhile job.",
    "exampleCn": "他想做有意义的工作。"
   },
   {
    "word": "realm",
    "phonetic": "rɛlm",
    "pos": "n.",
    "meaning": "领域，范围；王国",
    "example": "Defence of the realm is crucial.",
    "exampleCn": "王国的防御是至关重要的。"
   },
   {
    "word": "vocational",
    "phonetic": "vo'keʃənl",
    "pos": "adj.",
    "meaning": "职业的，行业的",
    "example": "vocational qualifications",
    "exampleCn": "职业资格"
   },
   {
    "word": "inaugurate",
    "phonetic": "ɪ'nɔɡjəret",
    "pos": "vt",
    "meaning": "创新；开辟；开创；举行开幕典礼；举行就职典礼",
    "example": "The Turner Prize was inaugurated in 1984.",
    "exampleCn": "特纳奖于1984年正式设立。"
   },
   {
    "word": "loyal",
    "phonetic": "'lɔɪəl",
    "pos": "adj.",
    "meaning": "忠诚的，忠心的；忠贞的",
    "example": "a loyal supporter of the team",
    "exampleCn": "球队的忠实支持者"
   },
   {
    "word": "crystal",
    "phonetic": "'krɪstl",
    "pos": "n.",
    "meaning": "[晶体]结晶，晶体；[矿物]水晶；水晶饰品；[矿物]水晶的；透明的，清澈的",
    "example": "a set of six crystal glasses",
    "exampleCn": "六件套水晶玻璃杯"
   },
   {
    "word": "embarrass",
    "phonetic": "ɪm'bærəs",
    "pos": "vt",
    "meaning": "使局促不安；使困窘；阻碍",
    "example": "He didn’t want to embarrass her by asking questions.",
    "exampleCn": "他不想提问让她尴尬。"
   },
   {
    "word": "howl",
    "phonetic": "haʊl",
    "pos": "vi",
    "meaning": "咆哮；怒吼；狂吠；嗥叫；怒号；嚎哭",
    "example": "The dogs howled all night.",
    "exampleCn": "那些狗整夜嘷叫。"
   },
   {
    "word": "release",
    "phonetic": "rɪ'lis",
    "pos": "vt",
    "meaning": "释放；发射；让与；允许发表；释放；发布；让与",
    "example": "Police arrested several men, who were later released.",
    "exampleCn": "警察逮捕了几个人，后来都释放了。"
   },
   {
    "word": "sanity",
    "phonetic": "'sænəti",
    "pos": "n.",
    "meaning": "明智；头脑清楚；精神健全；通情达理",
    "example": "I began to doubt his sanity.",
    "exampleCn": "我开始怀疑他是否神志正常。"
   },
   {
    "word": "visible",
    "phonetic": "'vɪzəbl",
    "pos": "adj.",
    "meaning": "明显的；看得见的；现有的；可得到的",
    "example": "The comet is visible to the naked eye (= can be seen without using special equipment ).",
    "exampleCn": "这颗彗星肉眼看得见。"
   },
   {
    "word": "transistor",
    "phonetic": "træn'zɪstɚ",
    "pos": "n.",
    "meaning": "[电子]晶体管（收音机）",
    "example": "Every transistor has at least three electrodes.",
    "exampleCn": "每个晶体管至少有三个电极。"
   },
   {
    "word": "pasture",
    "phonetic": "'pæstʃɚ",
    "pos": "n.",
    "meaning": "草地；[畜牧]牧场；牧草；[畜牧]放牧；吃草",
    "example": "large areas of rough upland pasture",
    "exampleCn": "大片起伏的山地牧场"
   },
   {
    "word": "sprint",
    "phonetic": "sprɪnt",
    "pos": "vi",
    "meaning": "冲刺，全速跑；冲刺；短跑",
    "example": "Sergeant Horne sprinted to the car.",
    "exampleCn": "霍恩中士冲向那辆汽车。"
   },
   {
    "word": "cradle",
    "phonetic": "'kredl",
    "pos": "n.",
    "meaning": "摇篮；发源地；发祥地；[建][医]支船架；抚育；把...搁在支架上；把...放在摇篮内",
    "example": "She rocked the cradle to quieten the child.",
    "exampleCn": "她摇动摇篮，让宝宝安静下来。"
   },
   {
    "word": "amateur",
    "phonetic": "ˈæmətər",
    "pos": "n.",
    "meaning": "爱好者；业余爱好者；外行；业余的；外行的",
    "example": "a gifted amateur",
    "exampleCn": "有天赋的业余爱好者"
   },
   {
    "word": "determination",
    "phonetic": "dɪˌtɜːrmɪˈneɪʃn",
    "pos": "n.",
    "meaning": "决心；果断",
    "example": "his dogged determination (= very strong determination ) to succeed",
    "exampleCn": "他想要成功的坚定决心"
   },
   {
    "word": "discreet",
    "phonetic": "dɪ'skrit",
    "pos": "adj.",
    "meaning": "谨慎的；小心的",
    "example": "He assured her that he would be discreet.",
    "exampleCn": "他向她保证会谨慎行事。"
   },
   {
    "word": "perverse",
    "phonetic": "pɚ'vɝs",
    "pos": "adj.",
    "meaning": "堕落的，不正当的；倔强的；违反常情的",
    "example": "He gets perverse satisfaction from embarrassing people.",
    "exampleCn": "他通过使人难堪获得变态的满足感。"
   },
   {
    "word": "perpendicular",
    "phonetic": "'pɝpən'dɪkjəlɚ",
    "pos": "adj.",
    "meaning": "[数]垂直的，正交的；直立的；陡峭的",
    "example": "a perpendicular line",
    "exampleCn": "垂直线"
   },
   {
    "word": "scoop",
    "phonetic": "skup",
    "pos": "vt",
    "meaning": "掘；舀取；抢先获得；搜集；勺；铲子；独家新闻；凹处",
    "example": "a journalist looking for a scoop",
    "exampleCn": "抢独家新闻的记者"
   },
   {
    "word": "refund",
    "phonetic": "ˈrifʌnd",
    "pos": "vi",
    "meaning": "退还；[金融]偿还，归还；退还；[金融]偿还；付还；退款；[金融]偿还，[会计]偿还额",
    "example": "I took the radio back, and they refunded my money .",
    "exampleCn": "我把收音机送回去，他们给我退了款。"
   },
   {
    "word": "productive",
    "phonetic": "prə'dʌktɪv",
    "pos": "adj.",
    "meaning": "能生产的；生产的，生产性的；多产的；富有成效的",
    "example": "the economy’s productive capacity",
    "exampleCn": "该经济体的生产能力"
   },
   {
    "word": "yawn",
    "phonetic": "jɔn",
    "pos": "n.",
    "meaning": "哈欠；裂口；[生理]打呵欠；裂开；张开；打著呵欠说",
    "example": "Alan stretched and yawned.",
    "exampleCn": "艾伦伸伸懒腰，打了个呵欠。"
   },
   {
    "word": "kidnap",
    "phonetic": "'kɪdnæp",
    "pos": "vt",
    "meaning": "绑架；诱拐；拐骗",
    "example": "Police appealed for wit­nesses after a woman was kidnapped at gunpoint.",
    "exampleCn": "一名妇女遭到持枪绑架，警方呼吁目击者挺身而出。"
   },
   {
    "word": "emit",
    "phonetic": "ɪ'mɪt",
    "pos": "vt",
    "meaning": "发出，放射；发行；发表",
    "example": "The kettle emitted a shrill whistle.",
    "exampleCn": "水壶发出了刺耳的鸣笛声。"
   },
   {
    "word": "accountant",
    "phonetic": "ə'kaʊntənt",
    "pos": "n.",
    "meaning": "会计员",
    "example": "The boss dropped an accountant from the payroll.",
    "exampleCn": "老板把一名会计师从在职人员名单中除了名。"
   },
   {
    "word": "glamour",
    "phonetic": "'ɡlæmə",
    "pos": "n.",
    "meaning": "魅力，魔力；迷人的美；迷惑，迷住",
    "example": "...the glamour of show biz.",
    "exampleCn": "…演艺业的诱惑力。"
   },
   {
    "word": "environment",
    "phonetic": "ɪn'vaɪrənmənt",
    "pos": "n.",
    "meaning": "[环境]环境，外界",
    "example": "Some of these chemicals are very damaging to the environment.",
    "exampleCn": "这些化学品中有些对环境非常有害。"
   },
   {
    "word": "stand",
    "phonetic": "stænd",
    "pos": "vi",
    "meaning": "站立；位于；停滞；使站立；忍受；抵抗；站立；立场；看台；停止",
    "example": "It looks like we’ll have to stand – there are no seats left.",
    "exampleCn": "看来我们只能站着——没有座位了。"
   },
   {
    "word": "likewise",
    "phonetic": "'laɪkwaɪz",
    "pos": "adv.",
    "meaning": "同样地；也",
    "example": "Nanny put on a shawl and told the girls to do likewise.",
    "exampleCn": "南妮披上披肩，并叫女孩们也这样做。"
   },
   {
    "word": "traitor",
    "phonetic": "'tretɚ",
    "pos": "n.",
    "meaning": "叛徒；卖国贼；背信弃义的人",
    "example": "...rumours that there were traitors among us who were sending messages to the enemy.",
    "exampleCn": "…谣言说我们中有正给敌人送信的叛徒。"
   },
   {
    "word": "grind",
    "phonetic": "ɡraɪnd",
    "pos": "vt",
    "meaning": "磨碎；磨快；磨碎；折磨；磨；苦工作",
    "example": "a stone for grinding knives and scissors",
    "exampleCn": "磨刀剪的石头"
   },
   {
    "word": "mock",
    "phonetic": "mɑk",
    "pos": "vt",
    "meaning": "嘲弄；模仿；使…失望；使…无效；嘲弄，嘲笑；嘲弄；仿制品；嘲笑对象；模拟的；假装的；伪造的；虚伪地",
    "example": "Opposition MPs mocked the government’s decision.",
    "exampleCn": "反对党议员讥笑政府的这一决策。"
   },
   {
    "word": "vacation",
    "phonetic": "vəˈkeɪʃn; veɪ-",
    "pos": "n.",
    "meaning": "假期；（房屋）搬出；休假，度假",
    "example": "We’re planning a vacation in Europe.",
    "exampleCn": "我们正计划去欧洲度假。"
   },
   {
    "word": "marrow",
    "phonetic": "'mæro",
    "pos": "n.",
    "meaning": "髓，[解剖]骨髓；精华；活力",
    "example": "a bone marrow transplant",
    "exampleCn": "骨髓移植"
   },
   {
    "word": "steadfast",
    "phonetic": "'stɛdfæst",
    "pos": "adj.",
    "meaning": "坚定的；不变的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "assumption",
    "phonetic": "ə'sʌmpʃən",
    "pos": "n.",
    "meaning": "假定；设想；担任；采取",
    "example": "You would be making an assumption that's not based on any fact that you could report.",
    "exampleCn": "你会做出不以你能报道的任何事实为依据的一种假设。"
   },
   {
    "word": "optimum",
    "phonetic": "'ɑptəməm",
    "pos": "adj.",
    "meaning": "最适宜的",
    "example": "optimum conditions for growth",
    "exampleCn": "最适宜生长的条件"
   },
   {
    "word": "discrepancy",
    "phonetic": "dɪs'krɛpənsi",
    "pos": "n.",
    "meaning": "不符；矛盾；相差",
    "example": "...the discrepancy between press and radio reports.",
    "exampleCn": "…报刊报道与广播报道之间的差异。"
   },
   {
    "word": "presence",
    "phonetic": "'prɛzns",
    "pos": "n.",
    "meaning": "[植]存在；出席；参加；风度；仪态",
    "example": "Your presence is requested at the club meeting on Friday.",
    "exampleCn": "敬请出席于周五举行的俱乐部会议。"
   },
   {
    "word": "terrain",
    "phonetic": "tə'reɪn",
    "pos": "n.",
    "meaning": "地形，地势；领域；[地理]地带",
    "example": "rocky terrain",
    "exampleCn": "多石的地形"
   },
   {
    "word": "dine",
    "phonetic": "daɪn",
    "pos": "vi",
    "meaning": "进餐，用餐；宴请",
    "example": "He was dining with friends at the Ritz.",
    "exampleCn": "他和朋友在里茨饭店一起进餐。"
   },
   {
    "word": "perfume",
    "phonetic": "pɚ'fjum",
    "pos": "n.",
    "meaning": "香水；香味",
    "example": "She was wearing the perfume that he’d bought her.",
    "exampleCn": "她擦了他买给她的香水。"
   },
   {
    "word": "echo",
    "phonetic": "'ɛko",
    "pos": "vt",
    "meaning": "反射；重复；回音；效仿",
    "example": "The sound of an engine echoed back from the thick forest.",
    "exampleCn": "从茂密的森林里传来引擎的回声。"
   },
   {
    "word": "cutting",
    "phonetic": "'kʌtɪŋ",
    "pos": "n.",
    "meaning": "[机]切断；剪辑；开凿；锋利的；严寒的；尖酸刻薄的；削减（cut的ing形式）；[林]采伐；切开",
    "example": "...notice boards crowded with newspaper cuttings.",
    "exampleCn": "…贴满了剪报的布告栏。"
   },
   {
    "word": "momentum",
    "phonetic": "mo'mɛntəm",
    "pos": "n.",
    "meaning": "势头；[物]动量；动力；冲力",
    "example": "incentives to maintain the momentum of European integration",
    "exampleCn": "保持欧洲一体化发展势头的激励措施"
   },
   {
    "word": "nowhere",
    "phonetic": "'no'wɛr",
    "pos": "adv.",
    "meaning": "无处；任何地方都不；毫无结果；无处；任何地方；无名之地；不存在的；毫无结果的；不知名的",
    "example": "Nowhere is drug abuse more of a problem than in the US.",
    "exampleCn": "没有什么地方的吸毒问题比美国更严重。"
   },
   {
    "word": "shepherd",
    "phonetic": "'ʃɛpɚd",
    "pos": "vt",
    "meaning": "牧羊；带领；指导；看管；牧羊人；牧师；指导者",
    "example": "In comparison, a German shepherd has a biting pressure of 750 pounds per square inch.",
    "exampleCn": "相比较，德国牧羊犬在咬牙时每平方英寸大约有750英镑的压力。"
   },
   {
    "word": "superintend",
    "phonetic": ",supərɪn'tɛnd",
    "pos": "vt",
    "meaning": "监督；管理；主管；指挥；监督；主管；指挥",
    "example": "Meese was to superintend the administration's entire domestic policy.",
    "exampleCn": "米斯要监管政府的所有国内政策。"
   },
   {
    "word": "mythology",
    "phonetic": "mɪ'θɑlədʒi",
    "pos": "n.",
    "meaning": "神话；神话学；神话集",
    "example": "characters from classical mythology",
    "exampleCn": "古典神话中的人物"
   },
   {
    "word": "delinquency",
    "phonetic": "dɪ'lɪŋkwənsi",
    "pos": "n.",
    "meaning": "行为不良，违法犯罪；[法]失职，怠工",
    "example": "the ever-rising statistics of delinquency and crime",
    "exampleCn": "青少年违法犯罪不断增加的统计数字"
   },
   {
    "word": "relief",
    "phonetic": "rɪ'lif",
    "pos": "n.",
    "meaning": "救济；减轻，解除；安慰",
    "example": "Marijuana can provide pain relief for some cancer patients.",
    "exampleCn": "大麻可以为一些癌症患者减轻疼痛。"
   },
   {
    "word": "dole",
    "phonetic": "dol",
    "pos": "n.",
    "meaning": "[劳经]失业救济金；赈济物；施舍品",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "suspension",
    "phonetic": "sə'spɛnʃən",
    "pos": "n.",
    "meaning": "[化工][化学][物化]悬浮；暂停；停职",
    "example": "He received a six-month suspension for unprofessional behaviour.",
    "exampleCn": "他因有违职业道德的行为被停职六个月。"
   },
   {
    "word": "laudable",
    "phonetic": "'lɔdəbl",
    "pos": "adj.",
    "meaning": "值得称赞的",
    "example": "a laudable attempt",
    "exampleCn": "值得称道的尝试"
   },
   {
    "word": "snack",
    "phonetic": "snæk",
    "pos": "n.",
    "meaning": "[贸易]小吃，快餐；一份，部分；吃快餐，吃点心",
    "example": "I grabbed a quick snack.",
    "exampleCn": "我赶紧吃了点零食。"
   },
   {
    "word": "demolish",
    "phonetic": "dɪ'mɑlɪʃ",
    "pos": "vt",
    "meaning": "拆除；破坏；毁坏；推翻；驳倒",
    "example": "The entire east wing of the building was demolished in the fire.",
    "exampleCn": "大楼的整个东翼都被大火烧毁了。"
   },
   {
    "word": "whistle",
    "phonetic": "'wɪsl",
    "pos": "n.",
    "meaning": "口哨；[铁路][船]汽笛；啸啸声",
    "example": "The lifeguard blew his whistle.",
    "exampleCn": "救生员吹响哨子。"
   },
   {
    "word": "monster",
    "phonetic": "'mɑnstɚ",
    "pos": "n.",
    "meaning": "怪物；巨人，巨兽；残忍的人；巨大的，庞大的",
    "example": "the remains of a prehistoric monster",
    "exampleCn": "史前怪兽的遗骸"
   },
   {
    "word": "doctrine",
    "phonetic": "'dɑktrɪn",
    "pos": "n.",
    "meaning": "主义；学说；教义；信条",
    "example": "traditional doctrines of divine power",
    "exampleCn": "神力的传统教义"
   },
   {
    "word": "trait",
    "phonetic": "tret",
    "pos": "n.",
    "meaning": "特性，特点；[心理]品质；少许",
    "example": "The study found that some alcoholics had clear personality traits showing up early in childhood.",
    "exampleCn": "这项研究发现一些酗酒者早在孩童时就表现出明显的个性特征。"
   },
   {
    "word": "rouse",
    "phonetic": "raʊz",
    "pos": "vt",
    "meaning": "唤醒；激起，使振奋；惊起；醒来；奋起；觉醒；奋起",
    "example": "His banging roused the neighbours.",
    "exampleCn": "他重重的关门声把邻居都吵醒了。"
   },
   {
    "word": "compatible",
    "phonetic": "kəm'pætəbl",
    "pos": "adj.",
    "meaning": "可兼容的，可和谐共存的",
    "example": "The new software is IBM compatible (= can be used with IBM computers ) .",
    "exampleCn": "这个新软件与IBM的计算机兼容。"
   },
   {
    "word": "deck",
    "phonetic": "dɛk",
    "pos": "n.",
    "meaning": "[船]甲板；行李仓；露天平台；装饰；[船]装甲板；打扮",
    "example": "Eddie returned to the flight deck (= the part of an aircraft where the pilot sits ) .",
    "exampleCn": "埃迪回到了驾驶舱。"
   },
   {
    "word": "gratuity",
    "phonetic": "ɡrə'tuəti",
    "pos": "n.",
    "meaning": "赏钱，小费；赠物；[劳经]退职金",
    "example": "The porter expects a gratuity.",
    "exampleCn": "那个搬运工想要小费。"
   },
   {
    "word": "historian",
    "phonetic": "hɪ'stɔrɪən",
    "pos": "n.",
    "meaning": "历史学家",
    "example": "I am a historian, and I teach in an American university.",
    "exampleCn": "我是一位历史学家，在美国一所大学任教。"
   },
   {
    "word": "desert",
    "phonetic": "(for v.) dɪˈzɝ​t; (for n.) 'dɛzɚt",
    "pos": "vt",
    "meaning": "遗弃；放弃；逃跑；遗弃；开小差；逃掉；[地理]沙漠；[农]荒原；应得的赏罚；[地理]沙漠的；荒凉的；不毛的",
    "example": "the Sahara Desert",
    "exampleCn": "撒哈拉沙漠"
   },
   {
    "word": "civilian",
    "phonetic": "sə'vɪlɪən",
    "pos": "adj.",
    "meaning": "民用的；百姓的，平民的；平民，百姓",
    "example": "Many innocent civilians were killed during the war.",
    "exampleCn": "许多无辜的平民在战争中丧生。"
   },
   {
    "word": "making",
    "phonetic": "'mekɪŋ",
    "pos": "n.",
    "meaning": "发展；制造；形成；制作（make的现在分词）",
    "example": "people involved in decision making at the highest level",
    "exampleCn": "最高层级决策参与者"
   },
   {
    "word": "rough",
    "phonetic": "rʌf",
    "pos": "adj.",
    "meaning": "[机]粗糙的；粗略的；粗野的；艰苦的；未经加工的；[机]使粗糙；粗暴对待；草拟；艰苦；高低不平的地面；未经加工的材料；粗糙的部分；[机]粗糙地；粗略地；粗暴地",
    "example": "Her hands were rough from hard work.",
    "exampleCn": "她的双手因为干重活而变得很粗糙。"
   },
   {
    "word": "desirable",
    "phonetic": "dɪ'zaɪərəbl",
    "pos": "adj.",
    "meaning": "令人满意的；值得要的",
    "example": "The ability to speak a foreign language is highly desirable .",
    "exampleCn": "能说一门外语是非常理想的。"
   },
   {
    "word": "profound",
    "phonetic": "prə'faʊnd",
    "pos": "adj.",
    "meaning": "深厚的；意义深远的；渊博的",
    "example": "a profound sense of guilt",
    "exampleCn": "强烈的内疚感"
   },
   {
    "word": "transport",
    "phonetic": "'trænspɔrt",
    "pos": "n.",
    "meaning": "[植]运输；[航]运输机；狂喜；流放犯；[植]运输；流放；使狂喜",
    "example": "commuters who travel on public transport",
    "exampleCn": "乘坐公共交通车辆上下班的人"
   },
   {
    "word": "provisional",
    "phonetic": "prə'vɪʒənl",
    "pos": "adj.",
    "meaning": "临时的，暂时的；暂定的",
    "example": "a provisional government",
    "exampleCn": "临时政府"
   },
   {
    "word": "fragile",
    "phonetic": "'frædʒəl",
    "pos": "adj.",
    "meaning": "脆的；易碎的",
    "example": "Be careful with that vase – it’s very fragile.",
    "exampleCn": "小心那只花瓶——很容易打碎的。"
   },
   {
    "word": "subscribe",
    "phonetic": "səb'skraɪb",
    "pos": "vi",
    "meaning": "订阅；捐款；[经]认购；赞成；签署；签署；赞成；捐助",
    "example": "My main reason for subscribing to New Scientist is to keep abreast of advances in science.",
    "exampleCn": "我订阅《新科学家》的主要原因是要跟上科学的进步。"
   },
   {
    "word": "queer",
    "phonetic": "kwɪr",
    "pos": "adj.",
    "meaning": "奇怪的；同性恋的；不舒服的；心智不平衡的；搞糟；使陷于不利地位；同性恋者；怪人；伪造的货币",
    "example": "She gave a queer laugh.",
    "exampleCn": "她古怪地笑了笑。"
   },
   {
    "word": "decipher",
    "phonetic": "dɪ'saɪfɚ",
    "pos": "v.",
    "meaning": "译解(密码等)",
    "example": "She studied the envelope, trying to decipher the handwriting.",
    "exampleCn": "她仔细地看信封，试图辨认上面的字迹。"
   },
   {
    "word": "imaginative",
    "phonetic": "ɪ'mædʒɪnətɪv",
    "pos": "adj.",
    "meaning": "虚构的；富于想像的；有创造力的",
    "example": "an imaginative use of computer technology",
    "exampleCn": "计算机技术的妙用"
   },
   {
    "word": "inclusive",
    "phonetic": "ɪn'klusɪv",
    "pos": "adj.",
    "meaning": "包括的，包含的",
    "example": "Not everyone shares his vision of an inclusive America.",
    "exampleCn": "不是所有人都同意他的观点，认为美国是个包容性很强的国家。"
   },
   {
    "word": "mushroom",
    "phonetic": "'mʌʃrʊm",
    "pos": "n.",
    "meaning": "蘑菇，伞菌；蘑菇形物体；暴发户；迅速增加；采蘑菇；迅速生长",
    "example": "mushroom soup",
    "exampleCn": "蘑菇汤"
   },
   {
    "word": "horrible",
    "phonetic": "ˈhɑːrəbl",
    "pos": "adj.",
    "meaning": "可怕的；极讨厌的",
    "example": "The weather has been really horrible all week.",
    "exampleCn": "整个星期天气都很糟。"
   },
   {
    "word": "sparkle",
    "phonetic": "'spɑrkl",
    "pos": "n.",
    "meaning": "闪耀；火花；活力；使闪耀；使发光；闪耀；发泡；活跃",
    "example": "The sea sparkled in the sun.",
    "exampleCn": "阳光下大海碧波闪耀。"
   },
   {
    "word": "temperate",
    "phonetic": "'tɛmpərət",
    "pos": "adj.",
    "meaning": "温和的；适度的；有节制的",
    "example": "The Nile Valley keeps a temperate climate throughout the year.",
    "exampleCn": "尼罗河流域全年气候温和。"
   },
   {
    "word": "prerogative",
    "phonetic": "pri'rɔɡətiv",
    "pos": "n.",
    "meaning": "特权；有特权的",
    "example": "Arriving late is a woman’s prerogative .",
    "exampleCn": "迟到是女人的特权。"
   },
   {
    "word": "subtitle",
    "phonetic": "'sʌb'taɪtl",
    "pos": "n.",
    "meaning": "[计][图情]副标题；说明或对白的字幕；在…上印字幕；给…加副标题",
    "example": "a French film with English subtitles",
    "exampleCn": "附有英语字幕的法国电影"
   },
   {
    "word": "torment",
    "phonetic": "'tɔrmɛnt",
    "pos": "vt",
    "meaning": "折磨，使痛苦；纠缠，作弄；痛苦，苦恼；痛苦的根源",
    "example": "The journey must have been a torment for them.",
    "exampleCn": "这次旅途对他们来说一定十分痛苦。"
   },
   {
    "word": "seemingly",
    "phonetic": "'simɪŋli",
    "pos": "adv.",
    "meaning": "好像；似乎",
    "example": "A seemingly endless line of trucks waits in vain to load up.",
    "exampleCn": "看上去没有尽头的一排卡车徒劳地等着装货。"
   },
   {
    "word": "tile",
    "phonetic": "taɪl",
    "pos": "n.",
    "meaning": "[建]瓷砖，瓦片",
    "example": "...a fine building, with a neat little porch and ornamental tiles on the roof.",
    "exampleCn": "…一幢精致建筑，有个整洁的小门廊，屋顶上盖着装饰瓦。"
   },
   {
    "word": "isle",
    "phonetic": "aɪl",
    "pos": "n.",
    "meaning": "岛",
    "example": "the British Isles",
    "exampleCn": "不列颠群岛"
   },
   {
    "word": "enquiry",
    "phonetic": "ɛnˈkwaɪri, ˈɛnkwəri",
    "pos": "n.",
    "meaning": "[计]询问，[贸易]询盘",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "scout",
    "phonetic": "skaʊt",
    "pos": "n.",
    "meaning": "搜索，[航][军]侦察；侦察员；侦察机；[航][军]侦察；跟踪，监视；发现；[航][军]侦察；巡视；嘲笑",
    "example": "He sent three scouts ahead to take a look at the bridge.",
    "exampleCn": "他派出三名侦察兵到前面侦察大桥的情况。"
   },
   {
    "word": "ransom",
    "phonetic": "'rænsəm",
    "pos": "vt",
    "meaning": "赎回，赎；勒索赎金；救赎；得赎金后释放；赎金；赎身，赎回",
    "example": "The kidnappers were demanding a ransom of $250,000.",
    "exampleCn": "绑匪索取25万美元的赎金。"
   },
   {
    "word": "venerate",
    "phonetic": "'vɛnəret",
    "pos": "vt",
    "meaning": "崇敬，尊敬",
    "example": "a symbol of Arab courage, to be venerated for generations",
    "exampleCn": "受到世代尊崇的阿拉伯人勇气的象征"
   },
   {
    "word": "outright",
    "phonetic": "'aʊtraɪt",
    "pos": "adv.",
    "meaning": "全部地；立刻地；率直地；一直向前；痛快地；完全的，彻底的；直率的；总共的",
    "example": "an outright refusal",
    "exampleCn": "断然拒绝"
   },
   {
    "word": "pageant",
    "phonetic": "'pædʒənt",
    "pos": "n.",
    "meaning": "盛会；游行；虚饰；露天表演",
    "example": "...a historical pageant of kings and queens.",
    "exampleCn": "…一场历史上的国王和王后们的盛大庆典。"
   },
   {
    "word": "graph",
    "phonetic": "ɡræf",
    "pos": "n.",
    "meaning": "图表；曲线图",
    "example": "Martin showed me a graph of their recent sales.",
    "exampleCn": "马丁给我看了他们最近销售情况的图表。"
   },
   {
    "word": "liner",
    "phonetic": "'laɪnɚ",
    "pos": "n.",
    "meaning": "[水运]班轮，[航]班机；[机][铁路]衬垫；画线者",
    "example": "...luxury ocean liners.",
    "exampleCn": "…豪华远洋客轮。"
   },
   {
    "word": "notary",
    "phonetic": "'notəri",
    "pos": "n.",
    "meaning": "[法]公证人",
    "example": "Want to be an assistant judge or notary.",
    "exampleCn": "想成为一名助理法官或公证人。"
   },
   {
    "word": "melody",
    "phonetic": "'mɛlədi",
    "pos": "n.",
    "meaning": "旋律；歌曲；美妙的音乐",
    "example": "They played some lovely melodies.",
    "exampleCn": "他们演奏了一些动听的曲子。"
   },
   {
    "word": "similar",
    "phonetic": "'sɪməlɚ",
    "pos": "adj.",
    "meaning": "相似的；类似物",
    "example": "We have similar tastes in music.",
    "exampleCn": "我们对音乐的品位相近。"
   },
   {
    "word": "contemporary",
    "phonetic": "kən'tɛmpərɛri",
    "pos": "n.",
    "meaning": "同时代的人；同时期的东西；当代的；同时代的；属于同一时期的",
    "example": "She writes a lot of contemporary music for people like Whitney Houston.",
    "exampleCn": "她为惠特尼·休斯敦等人创作大量当代音乐作品。"
   },
   {
    "word": "reckless",
    "phonetic": "'rɛkləs",
    "pos": "adj.",
    "meaning": "鲁莽的，不顾后果的；粗心大意的",
    "example": "He was accused of causing death by reckless driving .",
    "exampleCn": "他被控因鲁莽驾驶致人死亡。"
   },
   {
    "word": "goad",
    "phonetic": "ɡod",
    "pos": "n.",
    "meaning": "刺激；（赶牲口用的）刺棒；激励；刺激；激励；用刺棒驱赶；煽动",
    "example": "The offer of economic aid was a goad to political change.",
    "exampleCn": "提供经济援助是政治改革的推动力。"
   },
   {
    "word": "leak",
    "phonetic": "lik",
    "pos": "n.",
    "meaning": "泄漏；漏洞，裂缝；使渗漏，泄露；[电子]漏，渗；泄漏出去",
    "example": "There is a leak in the ceiling.",
    "exampleCn": "天花板上有条裂缝。"
   },
   {
    "word": "politic",
    "phonetic": "'pɑlətɪk",
    "pos": "adj.",
    "meaning": "精明的；有策略的；狡猾的；审慎的；拉选票",
    "example": "Many towns often found it politic to change their allegiance.",
    "exampleCn": "许多城镇经常发现改变拥戴对象不失为明智之举。"
   },
   {
    "word": "register",
    "phonetic": "'rɛdʒɪstɚ",
    "pos": "vt",
    "meaning": "登记；[专利]注册；记录；挂号邮寄；把…挂号；正式提出；登记；[专利]注册；挂号；登记；[专利]注册；记录；寄存器；登记簿",
    "example": "The tanker is registered in Rotterdam.",
    "exampleCn": "这艘油轮是在鹿特丹登记的。"
   },
   {
    "word": "lure",
    "phonetic": "lʊr",
    "pos": "n.",
    "meaning": "诱惑；饵；诱惑物；诱惑；引诱",
    "example": "He lured her to his home and shot her with his father's gun.",
    "exampleCn": "他把她诱骗到家里，然后用父亲的枪把她打死。"
   },
   {
    "word": "eventually",
    "phonetic": "ɪ'vɛntʃuəli",
    "pos": "adv.",
    "meaning": "最后，终于",
    "example": "He eventually escaped and made his way back to England.",
    "exampleCn": "他终于逃脱并返回英格兰。"
   },
   {
    "word": "negotiable",
    "phonetic": "nɪ'ɡoʃɪəbl",
    "pos": "adj.",
    "meaning": "可谈判的，可(通行)商议的；可兑换现金的",
    "example": "Part-time barman required. Hours and salary negotiable.",
    "exampleCn": "招聘兼职酒吧男服务员，工作时间及薪金面议。"
   },
   {
    "word": "resonant",
    "phonetic": "'rɛznənt",
    "pos": "adj.",
    "meaning": "洪亮的，共振的；[语]共鸣的",
    "example": "the violin’s smooth, resonant tone",
    "exampleCn": "小提琴圆润悠扬的音色"
   },
   {
    "word": "attribute",
    "phonetic": "ə'trɪbjut",
    "pos": "n.",
    "meaning": "属性；特质；归属；把…归于",
    "example": "Women tend to attribute their success to external causes such as luck.",
    "exampleCn": "女性往往把她们的成功归因于外因，如运气。"
   },
   {
    "word": "convict",
    "phonetic": "kən'vɪkt",
    "pos": "n.",
    "meaning": "罪犯",
    "example": "a convicted murderer",
    "exampleCn": "已定罪的谋杀犯"
   },
   {
    "word": "assure",
    "phonetic": "ə'ʃʊr",
    "pos": "vt",
    "meaning": "保证；担保；使确信；弄清楚",
    "example": "The document is genuine, I can assure you .",
    "exampleCn": "我能向你保证，这文件是真的。"
   },
   {
    "word": "sightseeing",
    "phonetic": "'saɪtsiɪŋ",
    "pos": "n.",
    "meaning": "观光；游览；观光的；游览的",
    "example": "She swam and sunbathed, went sightseeing and relaxed.",
    "exampleCn": "她游泳，晒日光浴，观光，放松。"
   },
   {
    "word": "latent",
    "phonetic": "'letnt",
    "pos": "adj.",
    "meaning": "潜在的；[无脊椎]潜伏的；隐藏的",
    "example": "latent aggression",
    "exampleCn": "潜在的侵略"
   },
   {
    "word": "varied",
    "phonetic": "'vɛrɪd",
    "pos": "adj.",
    "meaning": "多变的；各式各样的；杂色的；改变；使多样化（vary的过去式和过去分词形式）",
    "example": "a varied diet",
    "exampleCn": "丰富多样的饮食"
   },
   {
    "word": "override",
    "phonetic": ",ovɚ'raɪd",
    "pos": "vt",
    "meaning": "推翻；不顾；践踏；[会计]代理佣金",
    "example": "The EU commission exercised its power to override British policy.",
    "exampleCn": "欧盟委员会行使其权力来否决英国的政策。"
   },
   {
    "word": "raft",
    "phonetic": "ræft",
    "pos": "n.",
    "meaning": "筏；救生艇；（美）大量",
    "example": "...a river trip on bamboo rafts through dense rainforest.",
    "exampleCn": "…一次乘着竹筏穿过茂密雨林的河上旅行。"
   },
   {
    "word": "perceive",
    "phonetic": "pɚ'siv",
    "pos": "vt",
    "meaning": "察觉，感觉；理解；认知；感到，感知；认识到",
    "example": "That morning, he perceived a change in Franca’s mood.",
    "exampleCn": "那天早上，他注意到弗兰卡情绪的变化。"
   },
   {
    "word": "symposium",
    "phonetic": "sɪm'pozɪəm",
    "pos": "n.",
    "meaning": "讨论会，座谈会；专题论文集；酒宴，宴会",
    "example": "He had been taking part in an international symposium on population.",
    "exampleCn": "他那时在参加一个有关人口的国际研讨会。"
   },
   {
    "word": "appropriate",
    "phonetic": "əˈpropriɪt",
    "pos": "adj.",
    "meaning": "适当的；占用；拨出",
    "example": "The timing of the announcement was particularly appropriate .",
    "exampleCn": "通告发布的时机很合适。"
   },
   {
    "word": "interior",
    "phonetic": "ɪn'tɪrɪɚ",
    "pos": "n.",
    "meaning": "内部；本质；内部的；国内的；本质的",
    "example": "The interior walls are all painted white.",
    "exampleCn": "室内墙壁都粉刷成了白色。"
   },
   {
    "word": "scum",
    "phonetic": "skʌm",
    "pos": "n.",
    "meaning": "浮渣；泡沫；糟粕",
    "example": "a pond covered with green scum",
    "exampleCn": "漂满绿色浮沫的池塘"
   },
   {
    "word": "engagement",
    "phonetic": "ɪn'ɡedʒmənt",
    "pos": "n.",
    "meaning": "婚约；约会；交战；诺言",
    "example": "Their engagement was announced in the paper.",
    "exampleCn": "他们订婚的消息在报上公布了。"
   },
   {
    "word": "trap",
    "phonetic": "træp",
    "pos": "vt",
    "meaning": "诱捕；使…受限制；使…陷入困境；[计]陷阱；圈套；[建]存水弯",
    "example": "The only way to catch mice is to set a trap .",
    "exampleCn": "抓老鼠的唯一办法就是放置捕鼠器。"
   },
   {
    "word": "transcend",
    "phonetic": "træn'sɛnd",
    "pos": "vt",
    "meaning": "胜过，超越",
    "example": "The desire for peace transcended political differences.",
    "exampleCn": "对和平的渴望超越了政治分歧。"
   },
   {
    "word": "circumstance",
    "phonetic": "'sɝkəmstæns",
    "pos": "n.",
    "meaning": "环境，情况；事件；境遇",
    "example": "The Soviet Union had been forced by circumstances to sign a pact with Nazi Germany.",
    "exampleCn": "苏联为形势所迫同纳粹德国签订了一项条约。"
   },
   {
    "word": "authorize",
    "phonetic": "'ɔθəraɪz",
    "pos": "vt",
    "meaning": "批准，认可；授权给；委托代替",
    "example": "an authorized biography",
    "exampleCn": "授权传记"
   },
   {
    "word": "flask",
    "phonetic": "flæsk",
    "pos": "n.",
    "meaning": "[分化]烧瓶；长颈瓶，细颈瓶；酒瓶，携带瓶",
    "example": "He took out a metal flask from a canvas bag.",
    "exampleCn": "他从帆布袋里拿出了一个金属水瓶。"
   },
   {
    "word": "spontaneous",
    "phonetic": "spɑn'tenɪəs",
    "pos": "adj.",
    "meaning": "自发的；自然的；无意识的",
    "example": "The crowd gave a spontaneous cheer.",
    "exampleCn": "人群自发地欢呼起来。"
   },
   {
    "word": "penalty",
    "phonetic": "'pɛnəlti",
    "pos": "n.",
    "meaning": "[经]罚款，罚金；[法]处罚",
    "example": "No littering. Penalty $500.",
    "exampleCn": "禁止乱扔垃圾。 违者罚款500美元。"
   },
   {
    "word": "fortify",
    "phonetic": "'fɔrtɪfaɪ",
    "pos": "vt",
    "meaning": "加强；增强；（酒）的酒精含量；设防于",
    "example": "The town was heavily fortified.",
    "exampleCn": "该镇设有重防。"
   },
   {
    "word": "monsoon",
    "phonetic": ",mɑn'sun",
    "pos": "n.",
    "meaning": "[气候]季风；（印度等地的）雨季；季候风",
    "example": "...the end of the monsoon.",
    "exampleCn": "…雨季的结束。"
   },
   {
    "word": "retrospect",
    "phonetic": "'rɛtrəspɛkt",
    "pos": "n.",
    "meaning": "回顾，追溯；回顾，追溯；回想；回顾；追忆",
    "example": "In retrospect, I wonder if we should have done more.",
    "exampleCn": "回过头看，我在想我们是否应该做得更多些。"
   },
   {
    "word": "spit",
    "phonetic": "spɪt",
    "pos": "vi",
    "meaning": "吐痰；吐口水；发出劈啪声；吐，吐出；发出；发射；唾液",
    "example": "Billy stood up slowly, rubbed his jaw, and spat blood.",
    "exampleCn": "比利慢慢站起来，揉揉下巴，吐了口血。"
   },
   {
    "word": "negligence",
    "phonetic": "'nɛɡlɪdʒəns",
    "pos": "n.",
    "meaning": "疏忽；忽视；粗心大意",
    "example": "negligence in carrying out safety procedures",
    "exampleCn": "执行安全程序时的疏忽"
   },
   {
    "word": "pension",
    "phonetic": "'pɛnʃən",
    "pos": "n.",
    "meaning": "退休金，[劳经]抚恤金；津贴；膳宿费",
    "example": "At what age can you start drawing your pension ?",
    "exampleCn": "从多少岁可以开始领取养老金？"
   },
   {
    "word": "enlighten",
    "phonetic": "ɪn'laɪtn",
    "pos": "vt",
    "meaning": "启发，启蒙；教导，开导；照耀",
    "example": "A few dedicated doctors have fought for years to enlighten the profession.",
    "exampleCn": "少数富有献身精神的医生为启蒙这一行业而奋斗多年。"
   },
   {
    "word": "audience",
    "phonetic": "'ɔdɪəns",
    "pos": "n.",
    "meaning": "观众；听众；读者；接见",
    "example": "The audience began clapping and cheering.",
    "exampleCn": "观众开始鼓掌欢呼。"
   },
   {
    "word": "symbolize",
    "phonetic": "'sɪmbəlaɪz",
    "pos": "vt",
    "meaning": "象征；用符号表现",
    "example": "Crime often symbolizes a wider social problem.",
    "exampleCn": "犯罪问题往往反映出更广泛的社会问题。"
   },
   {
    "word": "hobby",
    "phonetic": "'hɑbi",
    "pos": "n.",
    "meaning": "嗜好；业余爱好",
    "example": "What are your hobbies?",
    "exampleCn": "你有些什么爱好？"
   },
   {
    "word": "petroleum",
    "phonetic": "pə'trolɪəm",
    "pos": "n.",
    "meaning": "[油气]石油",
    "example": "petroleum-based products",
    "exampleCn": "石油产品"
   },
   {
    "word": "classical",
    "phonetic": "'klæsɪkl",
    "pos": "adj.",
    "meaning": "古典的；经典的；传统的；第一流的；古典音乐",
    "example": "the classical theory of relativity",
    "exampleCn": "经典相对论"
   },
   {
    "word": "thrill",
    "phonetic": "θrɪl",
    "pos": "n.",
    "meaning": "激动；[医]震颤；紧张；使…颤动；使…紧张；使…感到兴奋或激动；颤抖；感到兴奋；感到紧张",
    "example": "Winning first place must have been quite a thrill.",
    "exampleCn": "赢得第一名肯定让人非常激动。"
   },
   {
    "word": "stadium",
    "phonetic": "'stedɪəm",
    "pos": "n.",
    "meaning": "体育场；露天大型运动场",
    "example": "the new Olympic Stadium",
    "exampleCn": "新的奥林匹克体育场"
   },
   {
    "word": "tyre",
    "phonetic": "'taɪɚ",
    "pos": "n.",
    "meaning": "[橡胶]轮胎；轮箍",
    "example": "I had a flat tyre (= all the air went out of it ) on the way home.",
    "exampleCn": "回家的路上我的轮胎瘪了。"
   },
   {
    "word": "review",
    "phonetic": "rɪ'vju",
    "pos": "n.",
    "meaning": "回顾；复习；评论；检讨；检阅；回顾；检查；复审；回顾；复习功课；写评论",
    "example": "The policy comes up for review (= will be reviewed ) in April.",
    "exampleCn": "这项政策将在4月份予以审议。"
   },
   {
    "word": "spoil",
    "phonetic": "spɔɪl",
    "pos": "vt",
    "meaning": "溺爱；糟蹋；掠夺；掠夺；变坏；腐败；次品；奖品",
    "example": "The whole park is spoiled by litter.",
    "exampleCn": "整个公园环境都给垃圾破坏了。"
   },
   {
    "word": "cucumber",
    "phonetic": "'kjʊ,kʌmbɚ",
    "pos": "n.",
    "meaning": "[园艺]黄瓜；胡瓜",
    "example": "The \"gurkophone\" is one of their classics, made from a hollowed cucumber, a pepper and a carrot.",
    "exampleCn": "黄瓜管\"是他们的经典乐器之一,那是用掏空的黄瓜、辣椒和胡萝卜做的。"
   },
   {
    "word": "assign",
    "phonetic": "ə'saɪn",
    "pos": "vt",
    "meaning": "分配；指派；[计][数]赋值",
    "example": "How much time have you assigned for the meeting?",
    "exampleCn": "你给这个会议定了多长时间？"
   },
   {
    "word": "twist",
    "phonetic": "twɪst",
    "pos": "vt",
    "meaning": "捻；拧；扭伤；编织；使苦恼；[力]扭曲；拧；扭伤；扭动；弯曲",
    "example": "She twisted her head sideways and looked toward the door.",
    "exampleCn": "她把头转向一边，朝门口看去。"
   },
   {
    "word": "privacy",
    "phonetic": "'praɪvəsi",
    "pos": "n.",
    "meaning": "隐私；秘密；隐居；隐居处",
    "example": "each individual’s right to privacy",
    "exampleCn": "每个人的隐私权"
   },
   {
    "word": "probe",
    "phonetic": "prob",
    "pos": "n.",
    "meaning": "[电子][医]探针；调查；调查；[航]探测；探查；用探针探测",
    "example": "Police probed claims that he had sold drugs.",
    "exampleCn": "警方就有人称他贩卖毒品一事进行了调查。"
   },
   {
    "word": "ambition",
    "phonetic": "æm'bɪʃən",
    "pos": "n.",
    "meaning": "野心，雄心；抱负，志向；追求；有…野心",
    "example": "He was young and full of ambition.",
    "exampleCn": "他年轻，而且雄心勃勃。"
   },
   {
    "word": "shanty",
    "phonetic": "'ʃænti",
    "pos": "n.",
    "meaning": "（美）棚屋；下等酒馆；海员号子",
    "example": "Workers were living in tents and shanties.",
    "exampleCn": "工人们住在帐篷和棚屋里。"
   },
   {
    "word": "devastate",
    "phonetic": "'dɛvəstet",
    "pos": "vt",
    "meaning": "毁灭；毁坏",
    "example": "The city centre was devastated by the bomb.",
    "exampleCn": "市中心被这枚炸弹摧毁了。"
   },
   {
    "word": "acknowledge",
    "phonetic": "ək'nɑlɪdʒ",
    "pos": "vt",
    "meaning": "承认；答谢；报偿；告知已收到",
    "example": "The family acknowledge the need for change.",
    "exampleCn": "全家人都承认需要改变一下。"
   },
   {
    "word": "trail",
    "phonetic": "trel",
    "pos": "vt",
    "meaning": "追踪；拖；蔓延；落后于；小径；痕迹；尾部；踪迹；飘出；[植]蔓生；垂下；[古生]拖曳",
    "example": "The trail led over Boulder Pass before descending to a lake.",
    "exampleCn": "小路越过博尔德山口，然后向下通往湖边。"
   },
   {
    "word": "infant",
    "phonetic": "'ɪnfənt",
    "pos": "n.",
    "meaning": "婴儿；幼儿；未成年人；婴儿的；幼稚的；初期的；未成年的",
    "example": "An infant’s skin is very sensitive.",
    "exampleCn": "幼儿的皮肤非常敏感。"
   },
   {
    "word": "appointment",
    "phonetic": "ə'pɔɪntmənt",
    "pos": "n.",
    "meaning": "[管理]任命；约定；任命的职位",
    "example": "All consultations are by appointment only .",
    "exampleCn": "就诊必须预约。"
   },
   {
    "word": "auction",
    "phonetic": "'ɔkʃən",
    "pos": "vt",
    "meaning": "[贸易]拍卖；竞卖；[贸易]拍卖",
    "example": "The painting is expected to fetch up to $400,000 at auction.",
    "exampleCn": "这幅画预计在拍卖会上能卖到40万美元。"
   },
   {
    "word": "constrict",
    "phonetic": "kən'strɪkt",
    "pos": "vt",
    "meaning": "压缩；束紧",
    "example": "Caffeine constricts the blood vessels in your body.",
    "exampleCn": "咖啡因会使体内的血管收缩。"
   },
   {
    "word": "commercial",
    "phonetic": "kə'mɝʃəl",
    "pos": "adj.",
    "meaning": "[贸易]商业的；营利的；靠广告收入的",
    "example": "Our top priorities must be profit and commercial growth.",
    "exampleCn": "我们必须把利润和贸易增长作为我们的第一要务。"
   },
   {
    "word": "equivocal",
    "phonetic": "ɪ'kwɪvəkl",
    "pos": "adj.",
    "meaning": "模棱两可的；可疑的",
    "example": "His answer was equivocal.",
    "exampleCn": "他的回答模棱两可。"
   },
   {
    "word": "anonymous",
    "phonetic": "ə'nɑnəməs",
    "pos": "adj.",
    "meaning": "匿名的，无名的；无个性特征的",
    "example": "the anonymous author of a collection of poems",
    "exampleCn": "一本诗集的佚名作者"
   },
   {
    "word": "duplicate",
    "phonetic": "'duplɪket",
    "pos": "vt",
    "meaning": "[印刷][专利]复制；使加倍；副本；[印刷][专利]复制品；[印刷][专利]复制的；二重的；[印刷][专利]复制；重复",
    "example": "A duplicate copy should be made for the county record office.",
    "exampleCn": "应该制作一个副本呈交县档案室。"
   },
   {
    "word": "farewell",
    "phonetic": ",fɛr'wɛl",
    "pos": "n.",
    "meaning": "告别，辞别；再见；再会；别了！（常含有永别或不容易再见面的意思）；再会！；告别的",
    "example": "Mourners gathered to bid farewell to the victims of the plane tragedy.",
    "exampleCn": "哀悼者来向空难受害者告别。"
   },
   {
    "word": "consumer",
    "phonetic": "kən'sumɚ",
    "pos": "n.",
    "meaning": "[经][生态]消费者；用户，顾客",
    "example": "Consumers will soon be paying higher airfares.",
    "exampleCn": "不久消费者就要支付更高的机票价了。"
   },
   {
    "word": "welfare",
    "phonetic": "'wɛl'fɛr",
    "pos": "n.",
    "meaning": "福利；幸福；福利事业；安宁",
    "example": "Our only concern is the children’s welfare.",
    "exampleCn": "我们唯一关心的是孩子们的幸福。"
   },
   {
    "word": "tributary",
    "phonetic": "'trɪbjə'tɛri",
    "pos": "adj.",
    "meaning": "纳贡的；附属的；辅助的；[地理][水文]支流；进贡国；附属国",
    "example": "...the Napo river, a tributary of the Amazon.",
    "exampleCn": "...纳波河，亚马孙河的一条支流。"
   },
   {
    "word": "measure",
    "phonetic": "'mɛʒɚ",
    "pos": "n.",
    "meaning": "测量；措施；程度；尺寸；测量；估量；权衡；测量；估量",
    "example": "She soon got the measure of her opponent.",
    "exampleCn": "她很快就掂出了对手的分量。"
   },
   {
    "word": "wording",
    "phonetic": "'wɝdɪŋ",
    "pos": "n.",
    "meaning": "[语]措辞；用语；语法；用词语表达；讲话（word的ing形式）",
    "example": "The two sides failed to agree on the wording of a final report.",
    "exampleCn": "双方未能就一份总结报告的措辞达成一致。"
   },
   {
    "word": "spray",
    "phonetic": "spreɪ",
    "pos": "n.",
    "meaning": "[药]喷雾；喷雾器；水沫；喷射；喷",
    "example": "The moon was casting a rainbow through the spray from the waterfall.",
    "exampleCn": "月亮在瀑布溅起的水雾中映出了一道彩虹。"
   },
   {
    "word": "fabricate",
    "phonetic": "'fæbrɪket",
    "pos": "vt",
    "meaning": "制造；伪造；装配",
    "example": "The police were accused of fabricating evidence.",
    "exampleCn": "警方被控捏造证据。"
   },
   {
    "word": "eke",
    "phonetic": "ik",
    "pos": "vt",
    "meaning": "补充；增加；放长",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "might",
    "phonetic": "maɪt",
    "pos": "n.",
    "meaning": "力量；威力；势力；可能；也许",
    "example": "two individuals who took on the might of the English legal system",
    "exampleCn": "挑战英国法律制度权威的两个人"
   },
   {
    "word": "uprising",
    "phonetic": "'ʌpraɪzɪŋ",
    "pos": "n.",
    "meaning": "起义；升起；升起的；起义（uprise的ing形式）；升起",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "nominee",
    "phonetic": ",nɑmɪ'ni",
    "pos": "n.",
    "meaning": "被任命者；被提名的人；代名人",
    "example": "the Democratic Party presidential nominee",
    "exampleCn": "民主党被提名的总统候选人"
   },
   {
    "word": "evict",
    "phonetic": "ɪ'vɪkt",
    "pos": "vt",
    "meaning": "驱逐；逐出",
    "example": "One cleric resigned over plans to evict the protesters forcibly, arguing that the Church should have been more supportive of their cause.",
    "exampleCn": "一位因为计划强行驱逐示威者而辞职的神职人员辩解说国教会应当给予他们更多的支持。"
   },
   {
    "word": "march",
    "phonetic": "mɑrtʃ",
    "pos": "n.",
    "meaning": "行军，进军；进行曲；示威游行；进军；走过",
    "example": "The general led his forces on a long march southwards.",
    "exampleCn": "将军率领他的军队朝南长途行军。"
   },
   {
    "word": "extravagant",
    "phonetic": "ɪk'strævəgənt",
    "pos": "adj.",
    "meaning": "奢侈的；浪费的；过度的；放纵的",
    "example": "Would it be too extravagant to buy both?",
    "exampleCn": "把两个都买下会不会太奢侈了？"
   },
   {
    "word": "recital",
    "phonetic": "rɪ'saɪtl",
    "pos": "n.",
    "meaning": "朗诵，吟诵；独奏会；背诵；独唱会",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "gush",
    "phonetic": "ɡʌʃ",
    "pos": "v.",
    "meaning": "涌出；迸出；涌出；迸发",
    "example": "Piping-hot water gushed out.",
    "exampleCn": "滚烫的水涌了出来。"
   },
   {
    "word": "cut",
    "phonetic": "kʌt",
    "pos": "vt",
    "meaning": "削减；[机]切割；缩短；刺痛；[机]切割；相交；切牌；停拍；不出席；削减；伤口；切口；（服装等的）式样；削球；缩减的；割下的；雕过的",
    "example": "Do you want me to cut the cake?",
    "exampleCn": "要我切蛋糕吗？"
   },
   {
    "word": "skip",
    "phonetic": "skɪp",
    "pos": "vi",
    "meaning": "跳跃；跳绳；遗漏；跳读；跳过；遗漏；跳跃；跳读",
    "example": "I decided to skip the first chapter.",
    "exampleCn": "我决定跳过第一章。"
   },
   {
    "word": "recession",
    "phonetic": "rɪ'sɛʃən",
    "pos": "n.",
    "meaning": "衰退；不景气；后退；凹处",
    "example": "the economic recession of the early 1980s",
    "exampleCn": "20世纪80年代初的经济衰退"
   },
   {
    "word": "spur",
    "phonetic": "spɝ",
    "pos": "n.",
    "meaning": "鼓舞，刺激；马刺；山坡；激励，鞭策；给…装踢马刺",
    "example": "The crowd’s reaction only acted as a spur.",
    "exampleCn": "人群的反应不过起了刺激作用。"
   },
   {
    "word": "attain",
    "phonetic": "ə'ten",
    "pos": "vt",
    "meaning": "达到，实现；获得；到达；达到；获得；到达；成就",
    "example": "More women are attaining positions of power.",
    "exampleCn": "越来越多的女性获得要职。"
   },
   {
    "word": "privilege",
    "phonetic": "ˈprɪvəlɪdʒ",
    "pos": "n.",
    "meaning": "[计]特权；优待；基本权利",
    "example": "He had no special privileges and was treated just like every other prisoner.",
    "exampleCn": "他不享受特权，待遇和任何其他犯人一样。"
   },
   {
    "word": "abrupt",
    "phonetic": "ə'brʌpt",
    "pos": "adj.",
    "meaning": "生硬的；突然的；唐突的；陡峭的",
    "example": "an abrupt change of plan",
    "exampleCn": "计划的突然改变"
   },
   {
    "word": "withhold",
    "phonetic": "wɪð'hold",
    "pos": "vt",
    "meaning": "保留，不给；隐瞒；抑制；忍住；克制",
    "example": "I withheld payment until they had completed the work.",
    "exampleCn": "我扣着钱，直到他们完工。"
   },
   {
    "word": "resemblance",
    "phonetic": "rɪ'zɛmbləns",
    "pos": "n.",
    "meaning": "相似；相似之处；相似物；肖像",
    "example": "There was a remarkable resemblance between him and Pete.",
    "exampleCn": "他和皮特有一个惊人的相似之处。"
   },
   {
    "word": "lethal",
    "phonetic": "'liθl",
    "pos": "adj.",
    "meaning": "[生物][医]致命的，致死的",
    "example": "a lethal dose of heroin",
    "exampleCn": "致命剂量的海洛因"
   },
   {
    "word": "exhort",
    "phonetic": "ɪɡ'zɔrt",
    "pos": "vt",
    "meaning": "忠告；劝诫；劝告",
    "example": "Kennedy exhorted his listeners to turn away from violence.",
    "exampleCn": "肯尼迪劝告他的听众要远离暴力。"
   },
   {
    "word": "detective",
    "phonetic": "dɪ'tɛktɪv",
    "pos": "n.",
    "meaning": "侦探",
    "example": "...Arthur Conan Doyle's classic detective novel.",
    "exampleCn": "…阿瑟·柯南·道尔的经典侦探小说。"
   },
   {
    "word": "synthetic",
    "phonetic": "sɪn'θɛtɪk",
    "pos": "adj.",
    "meaning": "综合的；合成的，人造的；合成物",
    "example": "synthetic chemicals",
    "exampleCn": "合成化学品"
   },
   {
    "word": "collaboration",
    "phonetic": "kə,læbə'reʃən",
    "pos": "n.",
    "meaning": "合作；勾结；通敌",
    "example": "The company is building the centre in collaboration with the Institute of Offshore Engineering.",
    "exampleCn": "该公司正与海洋工程学院合建这座中心。"
   },
   {
    "word": "henceforth",
    "phonetic": ",hɛns'fɔrθ",
    "pos": "adv.",
    "meaning": "今后；自此以后",
    "example": "multiple sclerosis (henceforth referred to as MS)",
    "exampleCn": "多发性硬化（以下称为MS）"
   },
   {
    "word": "dull",
    "phonetic": "dʌl",
    "pos": "adj.",
    "meaning": "钝的；迟钝的；无趣的；呆滞的；阴暗的；使迟钝；使阴暗；缓和；减少；变迟钝",
    "example": "Life is never dull when Elizabeth is here.",
    "exampleCn": "有伊丽莎白在这里生活绝不会无聊。"
   },
   {
    "word": "choke",
    "phonetic": "tʃok",
    "pos": "vt",
    "meaning": "呛；使窒息；阻塞；抑制；扑灭；窒息；阻塞；说不出话来；窒息；噎；[动力]阻气门",
    "example": "Weeds were choking the stream.",
    "exampleCn": "野草将溪流堵塞了。"
   },
   {
    "word": "legal",
    "phonetic": "'ligl",
    "pos": "adj.",
    "meaning": "[法]法律的；合法的；法定的",
    "example": "What the company has done is perfectly legal.",
    "exampleCn": "公司所做的这一切完全合法。"
   },
   {
    "word": "furious",
    "phonetic": "'fjʊrɪəs",
    "pos": "adj.",
    "meaning": "激烈的；狂怒的；热烈兴奋的；喧闹的",
    "example": "She was absolutely furious .",
    "exampleCn": "她怒不可遏。"
   },
   {
    "word": "pivot",
    "phonetic": "'pɪvət",
    "pos": "n.",
    "meaning": "[力]枢轴；中心点；旋转运动；在枢轴上转动；随…转移；[力]枢轴的；关键的",
    "example": "Forming the pivot of the exhibition is a large group of watercolours.",
    "exampleCn": "构成这个展览核心的是一大批水彩画。"
   },
   {
    "word": "timber",
    "phonetic": "'tɪmbɚ",
    "pos": "n.",
    "meaning": "[木]木材；木料",
    "example": "a bench made of timber",
    "exampleCn": "木制长椅"
   },
   {
    "word": "orbit",
    "phonetic": "'ɔrbɪt",
    "pos": "n.",
    "meaning": "[天][航]轨道；[昆]眼眶；势力范围；生活常规；盘旋；绕轨道运行",
    "example": "Mars and Earth have orbits which change with time.",
    "exampleCn": "火星和地球的轨道随着时间而发生改变。"
   },
   {
    "word": "pharmacy",
    "phonetic": "'fɑrməsi",
    "pos": "n.",
    "meaning": "药房；[药]配药学，药剂学；制药业；一批备用药品",
    "example": "an all-night pharmacy",
    "exampleCn": "通宵药店"
   },
   {
    "word": "subject",
    "phonetic": "ˈsʌbdʒekt",
    "pos": "n.",
    "meaning": "[图情]主题；科目；[语]主语；国民；服从的；易患…的；受制于…的",
    "example": "Paul has strong opinions on most subjects.",
    "exampleCn": "保罗在大多数问题上观点激烈。"
   },
   {
    "word": "fry",
    "phonetic": "fraɪ",
    "pos": "vt",
    "meaning": "油炸；油煎；油炸；油煎",
    "example": "Fry the potatoes, covered, for about 20 minutes.",
    "exampleCn": "盖上盖，将马铃薯煎20分钟左右。"
   },
   {
    "word": "diligent",
    "phonetic": "'dɪlɪdʒənt",
    "pos": "adj.",
    "meaning": "勤勉的；用功的，费尽心血的",
    "example": "a diligent student",
    "exampleCn": "勤勉的学生"
   },
   {
    "word": "quantitative",
    "phonetic": "'kwɑntətetɪv",
    "pos": "adj.",
    "meaning": "[计量]定量的；量的，数量的",
    "example": "...the advantages of quantitative and qualitative research.",
    "exampleCn": "…定量和定性研究的优点。"
   },
   {
    "word": "monetary",
    "phonetic": "'mʌnɪtɛri",
    "pos": "adj.",
    "meaning": "货币的；财政的",
    "example": "the government’s tight monetary policy",
    "exampleCn": "政府从紧的货币政策"
   },
   {
    "word": "deviate",
    "phonetic": "'divɪet",
    "pos": "vi",
    "meaning": "脱离；越轨；使偏离",
    "example": "They stopped you as soon as you deviated from the script.",
    "exampleCn": "你一偏离剧本，他们就会叫停。"
   },
   {
    "word": "clip",
    "phonetic": "klɪp",
    "pos": "vt",
    "meaning": "[园艺]修剪；夹牢；痛打；[园艺]修剪；[园艺]修剪；夹子；回形针",
    "example": "The hedges had just been clipped.",
    "exampleCn": "树篱刚修剪过。"
   },
   {
    "word": "maniac",
    "phonetic": "'menɪæk",
    "pos": "n.",
    "meaning": "疯子，躁狂者；发狂的；狂热的；癫狂的",
    "example": "He drove like a maniac to the hospital.",
    "exampleCn": "他像个疯子似的开车去医院。"
   },
   {
    "word": "optical",
    "phonetic": "'ɑptɪkl",
    "pos": "adj.",
    "meaning": "光学的；眼睛的，[生理]视觉的",
    "example": "microscopes and other optical instruments",
    "exampleCn": "显微镜和其他光学仪器"
   },
   {
    "word": "classify",
    "phonetic": "'klæsɪfaɪ",
    "pos": "vt",
    "meaning": "分类；分等",
    "example": "We’d classify Drabble’s novels under ‘Romance’.",
    "exampleCn": "我们把德拉布尔的小说归类为“言情小说”。"
   },
   {
    "word": "metaphor",
    "phonetic": "'mɛtəfɚ",
    "pos": "n.",
    "meaning": "暗喻，隐喻；比喻说法",
    "example": "She uses some wonderful images and metaphors in her writing.",
    "exampleCn": "她在作品中用了一些绝妙的比喻和暗喻。"
   },
   {
    "word": "slender",
    "phonetic": "'slɛndɚ",
    "pos": "adj.",
    "meaning": "细长的；苗条的；微薄的",
    "example": "She is slender and stylish.",
    "exampleCn": "她身材修长，穿着时髦。"
   },
   {
    "word": "desolate",
    "phonetic": "'dɛsələt",
    "pos": "adj.",
    "meaning": "荒凉的；无人烟的；使荒凉；使孤寂",
    "example": "a desolate landscape",
    "exampleCn": "荒凉的景色"
   },
   {
    "word": "wit",
    "phonetic": "wɪt",
    "pos": "n.",
    "meaning": "智慧；才智；智力",
    "example": "Alone and penniless, I was forced to live on my wits.",
    "exampleCn": "孤身一人又身无分文，我只得靠我的机智来过活。"
   },
   {
    "word": "hand",
    "phonetic": "hænd",
    "pos": "n.",
    "meaning": "[解剖]手，手艺；帮助；指针；插手；传递，交给；支持；搀扶",
    "example": "Steve gripped the steering wheel tightly with both hands.",
    "exampleCn": "史蒂夫双手紧握方向盘。"
   },
   {
    "word": "odd",
    "phonetic": "ɑd",
    "pos": "adj.",
    "meaning": "[数]奇数的；古怪的；剩余的；临时的；零散的；[数]奇数；怪人；奇特的事物",
    "example": "It was an odd thing to say.",
    "exampleCn": "这话说得很奇怪。"
   },
   {
    "word": "dispatch",
    "phonetic": "dɪ'spætʃ",
    "pos": "n.",
    "meaning": "派遣；急件；派遣；分派",
    "example": "Goods are normally dispatched within 24 hours.",
    "exampleCn": "货物一般在24小时内派送。"
   },
   {
    "word": "tangle",
    "phonetic": "'tæŋɡl",
    "pos": "n.",
    "meaning": "纠纷；混乱状态；使纠缠；处于混乱状态；缠结；乱作一团",
    "example": "My hair tangles easily.",
    "exampleCn": "我的头发很容易打结。"
   },
   {
    "word": "associate",
    "phonetic": "ə'soʃɪet",
    "pos": "vi",
    "meaning": "交往；结交；[管理]同事，伙伴；关联的事物；联想；使联合；使发生联系；副的；联合的",
    "example": "one of his business associates",
    "exampleCn": "他的一个生意伙伴"
   },
   {
    "word": "slip",
    "phonetic": "slɪp",
    "pos": "vi",
    "meaning": "[地质]滑动；滑倒；犯错；失足；减退；[地质]使滑动；滑过；摆脱；塞入；闪开；滑，滑倒；片，纸片；错误；下跌；事故；[地质]滑动的；有活结的；活络的",
    "example": "Wright slipped but managed to keep hold of the ball.",
    "exampleCn": "赖特滑了一下，但球还抓在手里。"
   },
   {
    "word": "retreat",
    "phonetic": "rɪ'trit",
    "pos": "n.",
    "meaning": "撤退；休息寓所；撤退；撤退；退避；向后倾",
    "example": "The rebels retreated to the mountains.",
    "exampleCn": "叛乱分子撤退到山区。"
   },
   {
    "word": "revelation",
    "phonetic": "'rɛvə'leʃən",
    "pos": "n.",
    "meaning": "启示；揭露；出乎意料的事；被揭露的真相",
    "example": "...following the revelation of his affair with a former secretary.",
    "exampleCn": "…在他和前任秘书的风流韵事被揭露之后。"
   },
   {
    "word": "defeat",
    "phonetic": "dɪ'fit",
    "pos": "vt",
    "meaning": "击败，战胜；挫败；使…失败；失败；战胜",
    "example": "She was a woman who hated to admit defeat.",
    "exampleCn": "她是个不愿认输的女人。"
   },
   {
    "word": "slab",
    "phonetic": "slæb",
    "pos": "n.",
    "meaning": "厚板，[木]平板；混凝土路面；厚片",
    "example": "a concrete slab",
    "exampleCn": "水泥板"
   },
   {
    "word": "lobby",
    "phonetic": "'lɑbi",
    "pos": "n.",
    "meaning": "大厅；休息室；会客室；游说议员的团体",
    "example": "a hotel lobby",
    "exampleCn": "宾馆大堂"
   },
   {
    "word": "administration",
    "phonetic": "əd,mɪnɪ'streʃən",
    "pos": "n.",
    "meaning": "[管理]管理；行政；实施；行政机构",
    "example": "We’re looking for someone with experience in administration.",
    "exampleCn": "我们正在寻找一个有管理经验的人。"
   },
   {
    "word": "efficient",
    "phonetic": "ɪ'fɪʃnt",
    "pos": "adj.",
    "meaning": "有效率的；有能力的；生效的",
    "example": "a very efficient secretary",
    "exampleCn": "效率高的秘书"
   },
   {
    "word": "throbbing",
    "phonetic": "'θrɔbiŋ",
    "pos": "adj.",
    "meaning": "悸动的；跳动的；跳动，激动；跳动，悸动（throb的ing形式）",
    "example": "I shall not be at peace,' moaned Catherine, recalled to a sense of physical weakness by the violent, unequal throbbing of her heart, which beat visibly and audibly under this excess of agitation.",
    "exampleCn": "“我不会得到安息的，”凯瑟琳哀哭着，感到她身体的衰弱，因为在这场过度的激动下，她的心猛烈地、不规则地跳动着，甚至跳得能觉察出来。"
   },
   {
    "word": "lawn",
    "phonetic": "lɔn",
    "pos": "n.",
    "meaning": "[建]草地；草坪",
    "example": "I spent all morning mowing the lawn (= cutting the grass ).",
    "exampleCn": "我整个上午都在修剪草坪。"
   },
   {
    "word": "superstition",
    "phonetic": ",supɚ'stɪʃən",
    "pos": "n.",
    "meaning": "迷信",
    "example": "the old superstition that walking under a ladder is unlucky",
    "exampleCn": "认为从梯子下面穿过不吉利的古老迷信"
   },
   {
    "word": "exceedingly",
    "phonetic": "ɪk'sidɪŋli",
    "pos": "adv.",
    "meaning": "非常；极其；极度地；极端",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "pillar",
    "phonetic": "'pɪlɚ",
    "pos": "n.",
    "meaning": "柱子，柱形物；栋梁；墩",
    "example": "Mr Fitzwilliam had been seen as a pillar of the community.",
    "exampleCn": "菲茨威廉先生已被视为社区的骨干。"
   },
   {
    "word": "spokesman",
    "phonetic": "'spoksmən",
    "pos": "n.",
    "meaning": "发言人；代言人",
    "example": "a White House spokesman",
    "exampleCn": "白宫发言人"
   },
   {
    "word": "avert",
    "phonetic": "ə'vɝt",
    "pos": "vt",
    "meaning": "避免，防止；转移",
    "example": "The tragedy could have been averted if the crew had followed safety procedures.",
    "exampleCn": "如果乘务人员按照安全规则操作，这场悲剧是可以避免的。"
   },
   {
    "word": "cash",
    "phonetic": "kæʃ",
    "pos": "n.",
    "meaning": "现款，[会计]现金",
    "example": "Cash was taken during a burglary of the apartment.",
    "exampleCn": "在一次公寓盗窃案中现金被盗。"
   },
   {
    "word": "grin",
    "phonetic": "ɡrɪn",
    "pos": "n&vi",
    "meaning": "露齿而笑，咧嘴一笑",
    "example": "He came into the room with a friendly grin on his face .",
    "exampleCn": "他走进房间，脸上带着亲切的微笑。"
   },
   {
    "word": "stroke",
    "phonetic": "strok",
    "pos": "n.",
    "meaning": "中风；冲程；笔画；打击；尝试；轻抚；抚摸；敲击；划尾桨；划掉；击球；作尾桨手；敲击键盘",
    "example": "She died following a massive stroke.",
    "exampleCn": "她重度中风后去世了。"
   },
   {
    "word": "applicant",
    "phonetic": "'æplɪkənt",
    "pos": "n.",
    "meaning": "[专利]申请人，申请者；请求者",
    "example": "We have had lots of applicants for these positions.",
    "exampleCn": "对这些职位我们已有了很多申请人。"
   },
   {
    "word": "pull",
    "phonetic": "pʊl",
    "pos": "vt",
    "meaning": "拉；拔；拖；拉，拖；拔；拉，拉绳；拉力，[交]牵引力；拖",
    "example": "Mom! Davey’s pulling my hair!",
    "exampleCn": "妈妈! 戴维拽我的头发！"
   },
   {
    "word": "secondary",
    "phonetic": "'sɛkəndɛri",
    "pos": "adj.",
    "meaning": "[数][地质]第二的；中等的；[电]次要的；中级的；副手；代理人",
    "example": "the novel’s secondary characters",
    "exampleCn": "这本小说中的次要人物"
   },
   {
    "word": "indicative",
    "phonetic": "ɪn'dɪkətɪv",
    "pos": "adj.",
    "meaning": "象征的；指示的；表示…的",
    "example": "His action is indicative of growing concern about the shortage of skilled labour.",
    "exampleCn": "他的行为显示对于熟练工人短缺现象的日益关注。"
   },
   {
    "word": "wither",
    "phonetic": "'wɪðɚ",
    "pos": "vt",
    "meaning": "使凋谢；使畏缩；使衰弱；枯萎；凋谢；衰弱",
    "example": "The flowers in Isabel's room had withered.",
    "exampleCn": "伊莎贝尔房间里的花朵已经枯萎了。"
   },
   {
    "word": "commuter",
    "phonetic": "kə'mjʊtɚ",
    "pos": "n.",
    "meaning": "乘公交车辆上下班者",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "distribute",
    "phonetic": "dɪ'strɪbjut",
    "pos": "vt",
    "meaning": "分配；散布；分开；把…分类",
    "example": "a man distributing leaflets to passers-by",
    "exampleCn": "一个向路人派发传单的男子"
   },
   {
    "word": "excrement",
    "phonetic": "'ɛkskrɪmənt",
    "pos": "n.",
    "meaning": "粪便，[生理]排泄物",
    "example": "The cage smelled of excrement.",
    "exampleCn": "这个笼子闻起来有粪便味。"
   },
   {
    "word": "intelligible",
    "phonetic": "ɪn'tɛlɪdʒəbl",
    "pos": "adj.",
    "meaning": "可理解的；明了的；仅能用智力了解的",
    "example": "His reply was barely intelligible.",
    "exampleCn": "他的回复几乎让人听不懂。"
   },
   {
    "word": "contempt",
    "phonetic": "kən'tɛmpt",
    "pos": "n.",
    "meaning": "轻视，蔑视；耻辱",
    "example": "The public is treated with contempt by broadcasters.",
    "exampleCn": "公众受到了节目主持人的轻蔑对待。"
   },
   {
    "word": "palm",
    "phonetic": "pɑm",
    "pos": "n.",
    "meaning": "手掌；[林]棕榈树；掌状物",
    "example": "He held the pebble in the palm of his hand .",
    "exampleCn": "他把那颗卵石握在手心里。"
   },
   {
    "word": "trauma",
    "phonetic": "'traʊmə",
    "pos": "n.",
    "meaning": "[外科]创伤（由心理创伤造成精神上的异常）；外伤",
    "example": "traumas such as death or divorce",
    "exampleCn": "死亡、离婚等的巨大痛苦"
   },
   {
    "word": "shelter",
    "phonetic": "'ʃɛltɚ",
    "pos": "n.",
    "meaning": "[法]庇护；避难所；遮盖物；保护；使掩蔽；躲避，避难",
    "example": "The men took shelter in a bombed-out farmhouse.",
    "exampleCn": "那些男人躲在一间被炸毁的农舍里。"
   },
   {
    "word": "disregard",
    "phonetic": ",dɪsrɪ'ɡɑrd",
    "pos": "vt",
    "meaning": "忽视；不理；漠视；不顾；忽视；不尊重",
    "example": "He ordered the jury to disregard the witness’s last statement.",
    "exampleCn": "他指示陪审团忽略证人的最后一句话。"
   },
   {
    "word": "perennial",
    "phonetic": "pə'rɛnɪəl",
    "pos": "adj.",
    "meaning": "[植]多年生的；常年的；四季不断的；常在的；反复的",
    "example": "...a low-growing perennial.",
    "exampleCn": "…一种长不高的多年生植物。"
   },
   {
    "word": "ownership",
    "phonetic": "'onɚʃɪp",
    "pos": "n.",
    "meaning": "[法]所有权；物主身份",
    "example": "The price of home ownership is increasing.",
    "exampleCn": "房价在不断上涨。"
   },
   {
    "word": "antagonism",
    "phonetic": "æn'tæɡənɪzəm",
    "pos": "n.",
    "meaning": "[生化]对抗，敌对；对立；敌意",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "provided",
    "phonetic": "prə'vaɪdɪd",
    "pos": "conj.",
    "meaning": "假如；倘若；提供；给予（provide的过去式）",
    "example": "He can come with us, provided he pays for his own meals.",
    "exampleCn": "只要他付自己的饭钱，就可以跟我们一起来。"
   },
   {
    "word": "evoke",
    "phonetic": "ɪ'vok",
    "pos": "vt",
    "meaning": "引起，唤起；博得",
    "example": "The photographs evoked strong memories of our holidays in France.",
    "exampleCn": "那些照片勾起了我们到法国度假的深刻回忆。"
   },
   {
    "word": "clarity",
    "phonetic": "'klærəti",
    "pos": "n.",
    "meaning": "清楚，明晰；[化学]透明",
    "example": "Letters may be edited for length and clarity.",
    "exampleCn": "信件可能要加以修改以求篇幅合适，意思明了。"
   },
   {
    "word": "revolve",
    "phonetic": "rɪ'vɔlv",
    "pos": "vi",
    "meaning": "[物]旋转；循环出现；反复考虑；使…旋转；使…循环；反复考虑；[物]旋转；循环；旋转舞台",
    "example": "The wheel began to revolve.",
    "exampleCn": "轮子开始旋转。"
   },
   {
    "word": "ambiguity",
    "phonetic": ",æmbɪ'ɡjuəti",
    "pos": "n.",
    "meaning": "含糊；不明确；暧昧；模棱两可的话",
    "example": "legal ambiguities",
    "exampleCn": "法律上含混不清的地方"
   },
   {
    "word": "charter",
    "phonetic": "'tʃɑrtɚ",
    "pos": "vt",
    "meaning": "特许；[车辆][航]包租；发给特许执照；宪章；执照；特许状",
    "example": "The town’s charter was granted in 1838.",
    "exampleCn": "该镇的特许状是1838年颁发的。"
   },
   {
    "word": "grid",
    "phonetic": "ɡrɪd",
    "pos": "n.",
    "meaning": "[电子]网格；[数]格子，栅格；输电网",
    "example": "Its streets were laid out in a grid pattern.",
    "exampleCn": "那里的街道是棋盘式的布局。"
   },
   {
    "word": "notation",
    "phonetic": "no'teʃən",
    "pos": "n.",
    "meaning": "[计][数]符号；乐谱；注释；记号法",
    "example": "Musical notation was conceived for the C major scale and each line and space represents a note in this scale.",
    "exampleCn": "乐谱为C大音阶而构思，在这个音阶中的每一个线和间都代表一个音符。"
   },
   {
    "word": "slit",
    "phonetic": "slɪt",
    "pos": "vt",
    "meaning": "撕裂；使有狭缝；裂缝；投币口",
    "example": "light shining through a slit in the door",
    "exampleCn": "透过门缝照进来的光线"
   },
   {
    "word": "hardware",
    "phonetic": "'hɑrdwɛr",
    "pos": "n.",
    "meaning": "计算机硬件；五金器具",
    "example": "...a shop from which an uncle had sold hardware and timber.",
    "exampleCn": "…一家叔叔曾经在那里卖五金器具和木材的店铺。"
   },
   {
    "word": "mercy",
    "phonetic": "'mɝsi",
    "pos": "n.",
    "meaning": "仁慈，宽容；怜悯；幸运；善行",
    "example": "He showed no mercy to his enemies.",
    "exampleCn": "他对敌人毫不仁慈。"
   },
   {
    "word": "diameter",
    "phonetic": "daɪ'æmɪtɚ",
    "pos": "n.",
    "meaning": "直径",
    "example": "...a tube less than a fifth of the diameter of a human hair.",
    "exampleCn": "…一根直径不到头发五分之一的微管。"
   },
   {
    "word": "empirical",
    "phonetic": "ɪm'pɪrɪkl",
    "pos": "adj.",
    "meaning": "经验主义的",
    "example": "{\"COLLOINEXA\":[\"empirical evidence\"]}",
    "exampleCn": "实验证据"
   },
   {
    "word": "standard",
    "phonetic": "'stændɚd",
    "pos": "n.",
    "meaning": "[标准]标准；水准；旗；度量衡标准；[标准]标准的；合规格的；公认为优秀的",
    "example": "Students have to reach a certain standard or they won’t pass.",
    "exampleCn": "学生必须达到某一标准，否则无法通过。"
   },
   {
    "word": "gown",
    "phonetic": "ɡaʊn",
    "pos": "n.",
    "meaning": "长袍，长外衣；礼服；睡袍；法衣",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "filter",
    "phonetic": "'fɪltɚ",
    "pos": "vi",
    "meaning": "滤过；渗入；慢慢传开；[电子][光]滤波器；[轻][核][化工]过滤器；筛选；滤光器；[轻][核][化工]过滤；渗透；用过滤法除去",
    "example": "filter cigarettes (= with a filter at the end )",
    "exampleCn": "过滤嘴香烟"
   },
   {
    "word": "fester",
    "phonetic": "'fɛstɚ",
    "pos": "vi",
    "meaning": "溃烂；化脓；溃烂；脓疮，脓疱",
    "example": "The dispute can be traced back to resentments which have festered for centuries.",
    "exampleCn": "这一争端可以追溯到积累了好几个世纪的仇怨。"
   },
   {
    "word": "doom",
    "phonetic": "dʊm",
    "pos": "n.",
    "meaning": "厄运；死亡；判决；世界末日；注定；判决；使失败",
    "example": "The plan was doomed from the start .",
    "exampleCn": "这个计划一开始就注定要失败。"
   },
   {
    "word": "dub",
    "phonetic": "dʌb",
    "pos": "vt",
    "meaning": "[电影]配音；轻点；打击；授予称号；笨蛋；鼓声",
    "example": "It was dubbed into Spanish for Mexican audiences.",
    "exampleCn": "它已为墨西哥观众配成西班牙语了。"
   },
   {
    "word": "matrimony",
    "phonetic": "'mætrɪmoni",
    "pos": "n.",
    "meaning": "结婚，婚礼；婚姻生活",
    "example": "They were joined together in holy matrimony .",
    "exampleCn": "他们通过神圣的婚姻结合在一起。"
   },
   {
    "word": "sanitary",
    "phonetic": "'sænə'tɛri",
    "pos": "adj.",
    "meaning": "卫生的，清洁的；公共厕所",
    "example": "Diseases were spread through poor sanitary conditions .",
    "exampleCn": "疾病因卫生条件很差而传播开来。"
   },
   {
    "word": "enrich",
    "phonetic": "ɪn'rɪtʃ",
    "pos": "vt",
    "meaning": "使充实；使肥沃；使富足",
    "example": "Add fertilizer to enrich the soil.",
    "exampleCn": "施上肥料使土壤肥沃。"
   },
   {
    "word": "frontier",
    "phonetic": "frʌn'tɪr",
    "pos": "n.",
    "meaning": "前沿；[数]边界；国境；[数]边界的；开拓的",
    "example": "a novel about a family’s struggle on the American frontier",
    "exampleCn": "描写一家人在美国边远地区奋斗的小说"
   },
   {
    "word": "equity",
    "phonetic": "'ɛkwəti",
    "pos": "n.",
    "meaning": "公平，公正；衡平法；普通股；抵押资产的净值",
    "example": "a society run on the principles of equity and justice",
    "exampleCn": "以公平、正义为原则的社会"
   },
   {
    "word": "generous",
    "phonetic": "'dʒɛnərəs",
    "pos": "adj.",
    "meaning": "慷慨的，大方的；宽宏大量的；有雅量的",
    "example": "a generous glass of wine",
    "exampleCn": "一大杯葡萄酒"
   },
   {
    "word": "juvenile",
    "phonetic": "'dʒʊvənaɪl",
    "pos": "adj.",
    "meaning": "青少年的；幼稚的；青少年；少年读物",
    "example": "juvenile crime",
    "exampleCn": "少年犯罪"
   },
   {
    "word": "fend",
    "phonetic": "fend",
    "pos": "vt",
    "meaning": "谋生；保护；挡开；供养；照料；供养；力争",
    "example": "She raised her arm up to fend branches from her eyes.",
    "exampleCn": "她抬起胳膊将树枝从她眼前挡开。"
   },
   {
    "word": "longitude",
    "phonetic": "'lɑndʒətud",
    "pos": "n.",
    "meaning": "[地理]经度；经线",
    "example": "The town lies at longitude 12˚ east.",
    "exampleCn": "这个镇位于东经12度。"
   },
   {
    "word": "sting",
    "phonetic": "stɪŋ",
    "pos": "n.",
    "meaning": "刺痛；讽刺，刺激；刺毛；刺；驱使；使…苦恼；使…疼痛；刺痛；被刺痛；感到剧痛",
    "example": "He was stung by a bee.",
    "exampleCn": "他被蜜蜂蜇了。"
   },
   {
    "word": "escalate",
    "phonetic": "'ɛskəlet",
    "pos": "v.",
    "meaning": "升级，逐渐发展",
    "example": "The fighting on the border is escalating.",
    "exampleCn": "边境地区的战事在不断升级。"
   },
   {
    "word": "poverty",
    "phonetic": "'pɑvɚti",
    "pos": "n.",
    "meaning": "贫困；困难；缺少；低劣",
    "example": "Millions of elderly people live in poverty .",
    "exampleCn": "数百万老年人生活在贫困之中。"
   },
   {
    "word": "cassette",
    "phonetic": "kə'sɛt",
    "pos": "n.",
    "meaning": "磁带盒；照相软片盒",
    "example": "His two albums released on cassette have sold 10 million copies.",
    "exampleCn": "他以磁带形式发行的两张专辑已售出1000万份。"
   },
   {
    "word": "date",
    "phonetic": "det",
    "pos": "n.",
    "meaning": "日期；约会；年代；枣椰子；过时；注明日期；始于（某一历史时期）",
    "example": "The date on the letter was 30th August 1962.",
    "exampleCn": "信上的日期是1962年8月30日。"
   },
   {
    "word": "hedge",
    "phonetic": "hɛdʒ",
    "pos": "n.",
    "meaning": "[建]树篱；障碍",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "hospitality",
    "phonetic": ",hɑspɪ'tæləti",
    "pos": "n.",
    "meaning": "好客；殷勤",
    "example": "Thanks for your hospitality over the past few weeks.",
    "exampleCn": "感谢你几周来的热情款待。"
   },
   {
    "word": "declaration",
    "phonetic": ",dɛklə'reʃən",
    "pos": "n.",
    "meaning": "（纳税品等的）[税收]申报；宣布；公告；[法]申诉书",
    "example": "a ceasefire declaration",
    "exampleCn": "停火声明"
   },
   {
    "word": "detest",
    "phonetic": "dɪ'tɛst",
    "pos": "vt",
    "meaning": "厌恶；憎恨",
    "example": "The two men detested each other.",
    "exampleCn": "两个男人互相厌恶。"
   },
   {
    "word": "incite",
    "phonetic": "ɪn'saɪt",
    "pos": "vt",
    "meaning": "煽动；激励；刺激",
    "example": "They were charged with inciting racial hatred.",
    "exampleCn": "他们被指控煽动种族仇恨。"
   },
   {
    "word": "innovation",
    "phonetic": ",ɪnə'veʃən",
    "pos": "n.",
    "meaning": "创新，革新；新方法",
    "example": "We must encourage innovation if the company is to remain competitive.",
    "exampleCn": "公司要想保持竞争力，就必须鼓励革新。"
   },
   {
    "word": "liability",
    "phonetic": "'laɪə'bɪləti",
    "pos": "n.",
    "meaning": "[法][经]责任；债务；倾向",
    "example": "The company had assets of $138 million and liabilities of $120.5 million.",
    "exampleCn": "该公司有1.38亿美元资产和1.205亿美元的负债。"
   },
   {
    "word": "strenuous",
    "phonetic": "'strɛnjuəs",
    "pos": "adj.",
    "meaning": "紧张的；费力的；奋发的；艰苦的；热烈的",
    "example": "a strenuous climb",
    "exampleCn": "艰难的攀登"
   },
   {
    "word": "principal",
    "phonetic": "'prɪnsəpl",
    "pos": "n.",
    "meaning": "校长；委托人，当事人；资本；主犯；首要的；最重要的",
    "example": "His principal reason for making the journey was to visit his family.",
    "exampleCn": "他那次旅程的首要目的是探访家人。"
   },
   {
    "word": "exhaust",
    "phonetic": "ɪɡ'zɔst",
    "pos": "vt",
    "meaning": "排出；耗尽；使精疲力尽；彻底探讨；排气；排气；废气；排气装置",
    "example": "exhaust fumes",
    "exampleCn": "排出的废气"
   },
   {
    "word": "drain",
    "phonetic": "dren",
    "pos": "vi",
    "meaning": "排水；流干；喝光，耗尽；使流出；排掉水；排水；下水道，[建]排水管；消耗",
    "example": "Huge imports were draining the country’s currency reserves.",
    "exampleCn": "大量的进口正在耗尽该国的货币储备。"
   },
   {
    "word": "export",
    "phonetic": "ˈekspɔːrt；ɪkˈ-",
    "pos": "n.",
    "meaning": "输出，[贸易]出口；出口商品；输出，[贸易]出口",
    "example": "Italian food has been exported all over the world.",
    "exampleCn": "意大利食品已传遍世界。"
   },
   {
    "word": "log",
    "phonetic": "lɔɡ",
    "pos": "vi",
    "meaning": "伐木；切；伐木；航行；记录；[水运][航]航行日志；园木",
    "example": "a roaring log fire",
    "exampleCn": "原木燃烧的熊熊大火"
   },
   {
    "word": "superstructure",
    "phonetic": "'supɚstrʌktʃɚ",
    "pos": "n.",
    "meaning": "上层建筑；统治阶层",
    "example": "the whole superstructure of capitalism",
    "exampleCn": "资本主义的整个上层建筑"
   },
   {
    "word": "taboo",
    "phonetic": "tə'bu",
    "pos": "n.",
    "meaning": "禁忌；禁止；禁忌的；忌讳的；禁忌；禁止",
    "example": "The topic of addiction remains something of a taboo in our family.",
    "exampleCn": "毒瘾在我们家依然是个有些忌讳的话题。"
   },
   {
    "word": "spatial",
    "phonetic": "'speʃl",
    "pos": "adj.",
    "meaning": "[数]空间的；存在于空间的；受空间条件限制的",
    "example": "...the spatial distribution of black employment and population in South Africa.",
    "exampleCn": "…南非黑人就业和人口的空间分布。"
   },
   {
    "word": "objection",
    "phonetic": "əb'dʒɛkʃən",
    "pos": "n.",
    "meaning": "异议，反对；缺陷，缺点；妨碍；拒绝的理由",
    "example": "Her objection was that he was too young.",
    "exampleCn": "她反对的理由是他太小。"
   },
   {
    "word": "tornado",
    "phonetic": "tɔr'nedo",
    "pos": "n.",
    "meaning": "[气象]龙卷风；旋风；暴风；大雷雨",
    "example": "The tornado rubbished the whole village.",
    "exampleCn": "龙卷风毁掉了整个村庄。"
   },
   {
    "word": "pin",
    "phonetic": "pɪn",
    "pos": "n.",
    "meaning": "大头针，针；栓；琐碎物；钉住；压住；将……用针别住",
    "example": "...necklaces, bracelets, and pins.",
    "exampleCn": "…项链、手镯和胸针。"
   },
   {
    "word": "style",
    "phonetic": "staɪl",
    "pos": "n.",
    "meaning": "风格；时尚；类型；字体；设计；称呼；使合潮流",
    "example": "an attempt to use Japanese management style in a European business",
    "exampleCn": "将日本的管理方式用于欧洲企业的尝试"
   },
   {
    "word": "ultimatum",
    "phonetic": ",ʌltɪ'metəm",
    "pos": "n.",
    "meaning": "最后通牒；最后结论；基本原理",
    "example": "The club gave him an ultimatum – either he apologized, or he would be expelled from the team.",
    "exampleCn": "俱乐部给他下了最后通牒——要么道歉，要么等着被开除出队。"
   },
   {
    "word": "presentation",
    "phonetic": ",prizɛn'teʃən",
    "pos": "n.",
    "meaning": "描述，陈述；介绍；赠送",
    "example": "We will begin a series of presentations to help the public fully understand our system.",
    "exampleCn": "我们将进行一系列的说明，帮助公众充分了解我们的制度。"
   },
   {
    "word": "neglect",
    "phonetic": "nɪ'glɛkt",
    "pos": "vt",
    "meaning": "疏忽，忽视；忽略；疏忽，忽视；怠慢",
    "example": "Many of these ideas have been neglected by modern historians.",
    "exampleCn": "这些观点有许多都被现代的历史学家忽略了。"
   },
   {
    "word": "carrot",
    "phonetic": "'kærət",
    "pos": "n.",
    "meaning": "[园艺]胡萝卜",
    "example": "grated carrots",
    "exampleCn": "磨碎的胡萝卜"
   },
   {
    "word": "linear",
    "phonetic": "'lɪnɪɚ",
    "pos": "adj.",
    "meaning": "[数]线的，线型的；直线的，线状的；长度的",
    "example": "a linear diagram",
    "exampleCn": "线形图"
   },
   {
    "word": "sweater",
    "phonetic": "'swɛtɚ",
    "pos": "n.",
    "meaning": "毛线衣，运动衫；大量出汗的人，发汗剂",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "precarious",
    "phonetic": "prɪ'kɛrərɪəs",
    "pos": "adj.",
    "meaning": "危险的；不确定的",
    "example": "Her health remained precarious, despite the treatment.",
    "exampleCn": "她尽管接受了治疗，但健康状况还是不稳定。"
   },
   {
    "word": "amends",
    "phonetic": "ə'mɛndz",
    "pos": "n.",
    "meaning": "赔偿；赔罪",
    "example": "to make amends",
    "exampleCn": ""
   },
   {
    "word": "approval",
    "phonetic": "əˈpruvl",
    "pos": "n.",
    "meaning": "批准；认可；赞成",
    "example": "The president has already given his approval to the plan.",
    "exampleCn": "总统已经批准了这个计划。"
   },
   {
    "word": "faculty",
    "phonetic": "'fæklti",
    "pos": "n.",
    "meaning": "科，系；能力；全体教员",
    "example": "the Engineering Faculty",
    "exampleCn": "工程学院"
   },
   {
    "word": "avoid",
    "phonetic": "ə'vɔɪd",
    "pos": "vt",
    "meaning": "避免；避开，躲避；消除",
    "example": "Road safety is taught to young children to avoid road accidents.",
    "exampleCn": "小孩子受到道路安全知识的教育，以避免交通事故。"
   },
   {
    "word": "chat",
    "phonetic": "tʃæt",
    "pos": "vi",
    "meaning": "聊天；闲谈；聊天；闲谈",
    "example": "She was enjoying their friendly little chat .",
    "exampleCn": "她很喜欢他们那种友好的闲聊。"
   },
   {
    "word": "surpass",
    "phonetic": "sə'pæs",
    "pos": "vt",
    "meaning": "超越；胜过，优于；非…所能办到或理解",
    "example": "He had surpassed all our expectations .",
    "exampleCn": "他超越了我们所有的预期。"
   },
   {
    "word": "appliance",
    "phonetic": "ə'plaɪəns",
    "pos": "n.",
    "meaning": "器具；器械；[机]装置",
    "example": "The device most often used to do this is a load balancer, which is an appliance that accepts requests from the outside world and hands them off to the next available application server.",
    "exampleCn": "进行这一操作最常用的设备是一个负载均衡器，这是一个从外部接收请求并将它们移交给下一个可用应用程序服务器的装置。"
   },
   {
    "word": "despise",
    "phonetic": "dɪ'spaɪz",
    "pos": "vt",
    "meaning": "轻视，鄙视",
    "example": "She despised her neighbours.",
    "exampleCn": "她看不起她的邻居。"
   },
   {
    "word": "plunge",
    "phonetic": "plʌndʒ",
    "pos": "n.",
    "meaning": "投入；跳进；投入；陷入；跳进；使陷入；使投入；使插入",
    "example": "...a plunge into cold water.",
    "exampleCn": "…向着冰冷的水中的纵身一跳。"
   },
   {
    "word": "disguise",
    "phonetic": "dɪs'ɡaɪz",
    "pos": "vt",
    "meaning": "掩饰；假装；隐瞒；伪装；假装；用作伪装的东西",
    "example": "He escaped across the border disguised as a priest.",
    "exampleCn": "他装扮成神父越境逃走了。"
   },
   {
    "word": "deflect",
    "phonetic": "dɪ'flɛkt",
    "pos": "vt",
    "meaning": "使转向；使偏斜；使弯曲；转向；偏斜",
    "example": "He deflected the blow with his forearm.",
    "exampleCn": "他用前臂挡开了打来的一拳。"
   },
   {
    "word": "optional",
    "phonetic": "'ɑpʃənl",
    "pos": "adj.",
    "meaning": "可选择的，随意的；选修科目",
    "example": "three optional courses",
    "exampleCn": "三门选修课"
   },
   {
    "word": "elementary",
    "phonetic": ",ɛlɪ'mɛntri",
    "pos": "adj.",
    "meaning": "基本的；初级的；[化学]元素的",
    "example": "the elementary principles of justice and democracy",
    "exampleCn": "正义和民主的基本信条"
   },
   {
    "word": "mar",
    "phonetic": "mɑr",
    "pos": "vt",
    "meaning": "损毁；损伤；糟蹋；玷污；污点；瑕疵",
    "example": "Their wedding was marred by the death of Jenny’s mother a week earlier.",
    "exampleCn": "一周之前珍妮母亲的过世使他们的婚礼蒙上了一层阴影。"
   },
   {
    "word": "compute",
    "phonetic": "kəm'pjʊt",
    "pos": "vt",
    "meaning": "[数]计算；估算；用计算机计算；[数]计算；估算；推断；[数]计算；估计；推断",
    "example": "Final results had not yet been computed.",
    "exampleCn": "最终的结果还未计算出来。"
   },
   {
    "word": "dramatic",
    "phonetic": "drə'mætɪk",
    "pos": "adj.",
    "meaning": "戏剧的；引人注目的；激动人心的",
    "example": "the amateur dramatic society",
    "exampleCn": "业余剧团"
   },
   {
    "word": "maim",
    "phonetic": "mem",
    "pos": "vt",
    "meaning": "使残废",
    "example": "Landmines still kill or maim about 300 people every month.",
    "exampleCn": "地雷每个月仍造成约300人死伤。"
   },
   {
    "word": "partial",
    "phonetic": "'pɑrʃəl",
    "pos": "adj.",
    "meaning": "局部的；偏爱的；不公平的",
    "example": "The exhibition was only a partial success.",
    "exampleCn": "那次展会只获得部分成功。"
   },
   {
    "word": "launch",
    "phonetic": "lɔntʃ",
    "pos": "vt",
    "meaning": "[航]发射（导弹、火箭等）；发起，发动；使…下水；开始；下水；起飞；[航]发射；发行，投放市场；下水；汽艇",
    "example": "The organization has launched a campaign to raise $150,000.",
    "exampleCn": "为了筹集15万美元，该组织发起了一场募捐活动。"
   },
   {
    "word": "hearing",
    "phonetic": "'hɪrɪŋ",
    "pos": "n.",
    "meaning": "[生理]听力；[法]审讯，听讯；听见（hear的ing形式）",
    "example": "a child with a hearing disability",
    "exampleCn": "有听力障碍的儿童"
   },
   {
    "word": "mighty",
    "phonetic": "'maɪti",
    "pos": "adj.",
    "meaning": "有力的；强有力的；有势力的；很；极；非常；有势力的人",
    "example": "the mighty Mississippi river",
    "exampleCn": "浩荡的密西西比河"
   },
   {
    "word": "striking",
    "phonetic": "'straɪkɪŋ",
    "pos": "adj.",
    "meaning": "显著的，突出的，惊人的；打击的；[劳经]罢工的；打（strike的ing形式）",
    "example": "a dark man with striking features",
    "exampleCn": "相貌出众、肤色黝黑的男子"
   },
   {
    "word": "counterpart",
    "phonetic": "'kaʊntɚpɑrt",
    "pos": "n.",
    "meaning": "副本；配对物；极相似的人或物",
    "example": "As soon as he heard what was afoot, he telephoned his German and Italian counterparts to protest.",
    "exampleCn": "他一听到在进行中的事，马上就给德国和意大利相应人员打电话抗议。"
   },
   {
    "word": "unilateral",
    "phonetic": "'jʊnɪ'lætərəl",
    "pos": "adj.",
    "meaning": "[数][植]单边的；[昆]单侧的；单方面的；单边音；（父母）单系的",
    "example": "a unilateral declaration of independence",
    "exampleCn": "单方面宣布独立"
   },
   {
    "word": "ruinous",
    "phonetic": "'ruɪnəs",
    "pos": "adj.",
    "meaning": "破坏性的，毁灭性的；零落的",
    "example": "a ruinous civil war",
    "exampleCn": "一场毁灭性的内战"
   },
   {
    "word": "jumble",
    "phonetic": "'dʒʌmbl",
    "pos": "n.",
    "meaning": "混乱；杂乱的一堆东西；混杂；搀杂；使混乱；搞乱",
    "example": "The photographs were all jumbled up.",
    "exampleCn": "照片乱七八糟地堆在一起。"
   },
   {
    "word": "instalment",
    "phonetic": "ɪn'stɔlm(ə)nt",
    "pos": "n.",
    "meaning": "分期付款；装设；就职",
    "example": "the second instalment of a loan",
    "exampleCn": "一项贷款的第二期还款"
   },
   {
    "word": "refreshing",
    "phonetic": "ri'frɛʃɪŋ",
    "pos": "adj.",
    "meaning": "提神的；使清爽的；使人重新振作的",
    "example": "It made a refreshing change to talk to someone new.",
    "exampleCn": "和刚认识的人谈话感觉很新鲜。"
   },
   {
    "word": "notch",
    "phonetic": "nɑtʃ",
    "pos": "n.",
    "meaning": "[木]刻痕，凹口；等级；峡谷；赢得；用刻痕计算；在…上刻凹痕",
    "example": "Cut a notch near one end of the stick.",
    "exampleCn": "在手杖的一端刻一个V形记号。"
   },
   {
    "word": "correspondent",
    "phonetic": ",kɔrə'spɑndənt",
    "pos": "n.",
    "meaning": "通讯记者；客户；通信者；代理商行",
    "example": "Our correspondent in South Africa sent this report.",
    "exampleCn": "我们的驻南非记者发来这份报道。"
   },
   {
    "word": "peril",
    "phonetic": "'pɛrəl",
    "pos": "n.",
    "meaning": "[安全]危险；冒险；危及；置…于险境",
    "example": "a voyage that was fraught with peril",
    "exampleCn": "历尽艰险的旅程"
   },
   {
    "word": "agency",
    "phonetic": "'edʒənsi",
    "pos": "n.",
    "meaning": "[贸易]代理，[经]中介；代理处，经销处",
    "example": "We had to hire maids through an agency.",
    "exampleCn": "我们得通过代理公司雇用女佣。"
   },
   {
    "word": "elated",
    "phonetic": "ɪ'letɪd",
    "pos": "adj.",
    "meaning": "兴高采烈的；得意洋洋的",
    "example": "He felt elated and mildly drunk.",
    "exampleCn": "他感到欢欣鼓舞，而且喝得有点醉了。"
   },
   {
    "word": "critical",
    "phonetic": "'krɪtɪkl",
    "pos": "adj.",
    "meaning": "鉴定的；[核]临界的；批评的，爱挑剔的；危险的；决定性的；评论的",
    "example": "He made some highly critical remarks.",
    "exampleCn": "他发表了一些严厉的批判性言论。"
   },
   {
    "word": "picturesque",
    "phonetic": ",pɪktʃə'rɛsk",
    "pos": "adj.",
    "meaning": "独特的；生动的；别致的；图画般的",
    "example": "a quiet fishing village with a picturesque harbour",
    "exampleCn": "拥有一座美丽港口的宁静渔村"
   },
   {
    "word": "tacit",
    "phonetic": "'tæsɪt",
    "pos": "adj.",
    "meaning": "缄默的；不言而喻的",
    "example": "a tacit agreement between the three big companies",
    "exampleCn": "三家大公司之间的默契"
   },
   {
    "word": "controversial",
    "phonetic": ",kɑntrə'vɝʃl",
    "pos": "adj.",
    "meaning": "有争议的；有争论的",
    "example": "the controversial issue of welfare reform",
    "exampleCn": "福利改革这一有争议的话题"
   },
   {
    "word": "mucous",
    "phonetic": "'mjʊkəs",
    "pos": "adj.",
    "meaning": "[生理]黏液的；分泌黏液的",
    "example": "We evolved to stay away from poo, from bodily fluids, from mucous, from foods that have gone off, from worms in the garden.",
    "exampleCn": "我们进化到如此阶段：避开屎，避开体液，避开粘液，不要碰变质的食物，不要动花园的虫子。"
   },
   {
    "word": "perpetual",
    "phonetic": "pɚ'pɛtʃuəl",
    "pos": "adj.",
    "meaning": "永久的；不断的；四季开花的；无期限的",
    "example": "the perpetual snows of the mountaintops",
    "exampleCn": "山顶的终年积雪"
   },
   {
    "word": "porous",
    "phonetic": "'pɔrəs",
    "pos": "adj.",
    "meaning": "多孔渗水的；能渗透的；[生物]有气孔的",
    "example": "porous material",
    "exampleCn": "渗透性材料"
   },
   {
    "word": "whirl",
    "phonetic": "wɝrl",
    "pos": "n.",
    "meaning": "旋转，回旋；昏乱；一连串的事；短暂的旅行；旋转，回旋；急走；头晕眼花；使旋转；卷走，飞快地带走",
    "example": "Not receiving an answer, she whirled around.",
    "exampleCn": "没有得到答复，她猛地转过身来。"
   },
   {
    "word": "swell",
    "phonetic": "swɛl",
    "pos": "vi",
    "meaning": "膨胀；肿胀；隆起；使膨胀；使隆起；肿胀；隆起；漂亮的；一流的",
    "example": "The wind swelled the sails.",
    "exampleCn": "风鼓起了船帆。"
   },
   {
    "word": "gross",
    "phonetic": "ɡros",
    "pos": "adj.",
    "meaning": "总共的；粗野的；恶劣的；显而易见的；总额，总数",
    "example": "a gross profit of $5 million",
    "exampleCn": "500万美元的毛利"
   },
   {
    "word": "defile",
    "phonetic": "dɪ'faɪl",
    "pos": "vt",
    "meaning": "污损，弄脏；染污；狭谷；隘路",
    "example": "Hallam’s tomb had been defiled and looted.",
    "exampleCn": "哈勒姆的坟墓遭到了亵渎和洗劫。"
   },
   {
    "word": "virtually",
    "phonetic": "ˈvɜrtʃuəli",
    "pos": "adv.",
    "meaning": "事实上，几乎；实质上",
    "example": "Virtually all the children come to school by bus.",
    "exampleCn": "几乎所有的孩子都乘公交车上学。"
   },
   {
    "word": "equivalent",
    "phonetic": "ɪ'kwɪvələnt",
    "pos": "adj.",
    "meaning": "[物价][化学][数]等价的，相等的；同意义的；[物价][化学]等价物，相等物",
    "example": "The word has no equivalent in English.",
    "exampleCn": "这个单词在英语中没有对应词。"
   },
   {
    "word": "forte",
    "phonetic": "'fɔrte",
    "pos": "n.",
    "meaning": "长处；特长；响亮地",
    "example": "Moscow-based Kaspersky Lab has long been a magnet for Russia's young computer geniuses, luring them away from their usual forte, hacking, to viral analysis.",
    "exampleCn": "总部位于莫斯科的卡巴斯基实验室许久以来就是吸引俄罗斯年轻计算机英才的一块磁石，诱使他们远离自己平常的黑客特长，转而从事病毒分析。"
   },
   {
    "word": "tamper",
    "phonetic": "'tæmpɚ",
    "pos": "vi",
    "meaning": "篡改；干预；损害；削弱；玩弄；贿赂；篡改",
    "example": "Don't tamper with my business.",
    "exampleCn": "别干预我的事。"
   },
   {
    "word": "prone",
    "phonetic": "pron",
    "pos": "adj.",
    "meaning": "[昆]俯卧的；有…倾向的，易于…的",
    "example": "His eyes shifted to the prone body on the floor.",
    "exampleCn": "他的视线移向了趴在地上的尸体。"
   },
   {
    "word": "estimate",
    "phonetic": "'ɛstə,met",
    "pos": "vi",
    "meaning": "估计，估价；估计，估价；判断，看法；估计，[数]估量；判断，评价",
    "example": "We just need an estimate of the number of people who will come.",
    "exampleCn": "我们只需估算一下有多少人会来。"
   },
   {
    "word": "uniform",
    "phonetic": "'junɪfɔrm",
    "pos": "adj.",
    "meaning": "统一的；一致的；相同的；均衡的；始终如一的；[服装]制服",
    "example": "Grade A eggs must be of uniform size.",
    "exampleCn": "A 级鸡蛋必须大小相同。"
   },
   {
    "word": "pupil",
    "phonetic": "pjupl",
    "pos": "n.",
    "meaning": "学生；[解剖]瞳孔；未成年人",
    "example": "The sick man's pupils were dilated.",
    "exampleCn": "病人的瞳孔放大了。"
   },
   {
    "word": "ambulance",
    "phonetic": "'æmbjələns",
    "pos": "n.",
    "meaning": "[车辆][医]救护车；战时流动医院",
    "example": "the ambulance service",
    "exampleCn": "救护车服务"
   },
   {
    "word": "shallow",
    "phonetic": "'ʃælo",
    "pos": "adj.",
    "meaning": "浅的；肤浅的；[地理]浅滩；使变浅；变浅",
    "example": "a shallow river",
    "exampleCn": "浅河"
   },
   {
    "word": "fume",
    "phonetic": "fjum",
    "pos": "vi",
    "meaning": "冒烟；发怒；烟；愤怒，烦恼",
    "example": "...car exhaust fumes.",
    "exampleCn": "…汽车尾气。"
   },
   {
    "word": "disc",
    "phonetic": "dɪsk",
    "pos": "n.",
    "meaning": "圆盘，[电子]唱片（等于disk）",
    "example": "three keys attached to a metal disc",
    "exampleCn": "穿在金属圆盘上的三把钥匙"
   },
   {
    "word": "emergency",
    "phonetic": "ɪ'mɝdʒənsi",
    "pos": "n.",
    "meaning": "紧急情况；突发事件；非常时刻；紧急的；备用的",
    "example": "Lifeguards are trained to deal with emergencies.",
    "exampleCn": "救生员接受过应对紧急情况的训练。"
   },
   {
    "word": "geology",
    "phonetic": "dʒɪ'ɑlədʒi",
    "pos": "n.",
    "meaning": "[地质]地质学；地质情况",
    "example": "He was visiting professor of geology at the University of Georgia.",
    "exampleCn": "他曾是佐治亚大学的地质学客座教授。"
   },
   {
    "word": "stem",
    "phonetic": "stɛm",
    "pos": "n.",
    "meaning": "干；[植]茎；船首；血统；阻止；除去…的茎；给…装柄；阻止；起源于某事物；逆行",
    "example": "long-stemmed wine glasses",
    "exampleCn": "高脚酒杯"
   },
   {
    "word": "prey",
    "phonetic": "pre",
    "pos": "vi",
    "meaning": "捕食；掠夺；折磨；捕食；牺牲者；被捕食的动物",
    "example": "a tiger stalking its prey",
    "exampleCn": "潜行跟踪猎物的老虎"
   },
   {
    "word": "frost",
    "phonetic": "frɔst",
    "pos": "vt",
    "meaning": "结霜于；冻坏；霜；[气象]冰冻，严寒；冷淡",
    "example": "the risk of frost damage to crops",
    "exampleCn": "庄稼遭受霜冻灾害的危险"
   },
   {
    "word": "gravel",
    "phonetic": "'ɡrævl",
    "pos": "n.",
    "meaning": "碎石；砂砾；用碎石铺；使船搁浅在沙滩上；使困惑",
    "example": "a gravel path",
    "exampleCn": "石子小道"
   },
   {
    "word": "dividend",
    "phonetic": "'dɪvɪdɛnd",
    "pos": "n.",
    "meaning": "股息；[数]被除数；奖金",
    "example": "The first quarter dividend has been increased by nearly 4 percent.",
    "exampleCn": "第一季度的股息增加了近4％。"
   },
   {
    "word": "pump",
    "phonetic": "pʌmp",
    "pos": "vt",
    "meaning": "打气；用抽水机抽…；[机]泵，抽水机；打气筒",
    "example": "...pumps that circulate the fuel around in the engine.",
    "exampleCn": "…使燃料在发动机内循环的压泵。"
   },
   {
    "word": "strain",
    "phonetic": "stren",
    "pos": "n.",
    "meaning": "张力；[力]拉紧；负担；[外科]扭伤；血缘；[力]拉紧；尽力；[力]拉紧；滥用；滤去；竭力",
    "example": "I couldn’t look after him any more; the strain was too much for me.",
    "exampleCn": "我不能再照看他了，压力太大。"
   },
   {
    "word": "nibble",
    "phonetic": "'nɪbl",
    "pos": "vi",
    "meaning": "细咬；一点一点地咬；吹毛求疵；细咬；一点一点地咬；吹毛求疵",
    "example": "He nibbled the biscuit cautiously.",
    "exampleCn": "他小心地啃着饼干。"
   },
   {
    "word": "ally",
    "phonetic": "'ælaɪ",
    "pos": "n.",
    "meaning": "同盟国；伙伴；同盟者；助手；使联盟；使联合；联合；结盟",
    "example": "a meeting of the European allies",
    "exampleCn": "欧洲盟国会议"
   },
   {
    "word": "facilitate",
    "phonetic": "fə'sɪlə'tet",
    "pos": "vt",
    "meaning": "促进；帮助；使容易",
    "example": "Modern inventions facilitate housework.",
    "exampleCn": "许多现代发明便利了家务劳动。"
   },
   {
    "word": "twig",
    "phonetic": "twɪɡ",
    "pos": "vi",
    "meaning": "理解；理解；小枝；嫩枝；末梢",
    "example": "There is the bird, sitting on a twig halfway up the tree.",
    "exampleCn": "鸟儿在那里，栖息在树中段的一根细枝上。"
   },
   {
    "word": "gape",
    "phonetic": "geɪp",
    "pos": "vi",
    "meaning": "裂开，张开；[生理]打呵欠；裂口，张嘴；[生理]呵欠",
    "example": "The front door was missing. A hole gaped in the roof.",
    "exampleCn": "前门没有了，屋顶裂开一个洞。"
   },
   {
    "word": "ample",
    "phonetic": "'æmpl",
    "pos": "adj.",
    "meaning": "丰富的；足够的；宽敞的",
    "example": "an ample bosom",
    "exampleCn": "丰满的胸部"
   },
   {
    "word": "contingency",
    "phonetic": "kən'tɪndʒənsi",
    "pos": "n.",
    "meaning": "偶然性；[安全]意外事故；可能性；[审计]意外开支",
    "example": "a contingency plan",
    "exampleCn": "应变计划"
   },
   {
    "word": "validity",
    "phonetic": "və'lɪdəti",
    "pos": "n.",
    "meaning": "[计][数]有效性；正确；正确性",
    "example": "So that satisfies the definition of validity.",
    "exampleCn": "所以这满足了有效性的定义。"
   },
   {
    "word": "monotonous",
    "phonetic": "mə'nɑtənəs",
    "pos": "adj.",
    "meaning": "[声]单调的，无抑扬顿挫的；无变化的",
    "example": "a monotonous diet",
    "exampleCn": "单调的饮食"
   },
   {
    "word": "peel",
    "phonetic": "pil",
    "pos": "v.",
    "meaning": "剥，剥落；削；[植]皮",
    "example": "Peel and dice the potatoes.",
    "exampleCn": "把马铃薯去皮并切成丁。"
   },
   {
    "word": "lay",
    "phonetic": "le",
    "pos": "vt",
    "meaning": "躺下；产卵；搁放；世俗的；外行的；位置；短诗；花纹方向；下蛋；打赌",
    "example": "He laid his hand on my shoulder.",
    "exampleCn": "他把一只手搭在我的肩上。"
   },
   {
    "word": "leap",
    "phonetic": "lip",
    "pos": "vi",
    "meaning": "跳，跳跃；飞跃；跳跃；跳跃，跳过；使跃过",
    "example": "He threw a stick into the river and the dog went after it in a flying leap.",
    "exampleCn": "他把一根枝条扔到河里，那条狗一个飞跃就追了过去。"
   },
   {
    "word": "necessitate",
    "phonetic": "nə'sɛsɪtet",
    "pos": "vt",
    "meaning": "使成为必需，需要；迫使",
    "example": "Lack of money necessitated a change of plan.",
    "exampleCn": "由于缺乏资金，只能改变计划。"
   },
   {
    "word": "conviction",
    "phonetic": "kən'vɪkʃən",
    "pos": "n.",
    "meaning": "定罪；确信；证明有罪",
    "example": "It was a reasonable explanation, but his voice lacked conviction .",
    "exampleCn": "这解释合情合理，只是他的语气不坚定。"
   },
   {
    "word": "dread",
    "phonetic": "drɛd",
    "pos": "n.",
    "meaning": "恐惧；可怕的人（或物）；惧怕；担心；惧怕；担心；可怕的",
    "example": "I’ve got an interview tomorrow and I’m dreading it.",
    "exampleCn": "明天我要去面试，我正担心呢。"
   },
   {
    "word": "script",
    "phonetic": "skrɪpt",
    "pos": "n.",
    "meaning": "脚本；[图情]手迹；书写用的字母",
    "example": "a diary entry written in neat black script",
    "exampleCn": "用工整的黑色字写下的一则日记"
   },
   {
    "word": "devote",
    "phonetic": "dɪ'vot",
    "pos": "vt",
    "meaning": "致力于；奉献",
    "example": "He decided to devote the rest of his life to scientific investigation.",
    "exampleCn": "他决定把余生奉献给科学研究。"
   },
   {
    "word": "supersonic",
    "phonetic": ",supɚ'sɑnɪk",
    "pos": "adj.",
    "meaning": "[流][力]超音速的；[声]超声波的；[流]超音速；[声]超声波",
    "example": "supersonic aircraft",
    "exampleCn": "超音速飞机"
   },
   {
    "word": "scale",
    "phonetic": "skel",
    "pos": "n.",
    "meaning": "规模；[测][数]比例；[动]鳞；[仪]刻度；天平；数值范围；衡量；攀登；剥落；[环境]生水垢；测量；攀登；刮鳞；依比例决定",
    "example": "A structural survey revealed the full scale of the damage.",
    "exampleCn": "结构检验揭示了实际受损程度。"
   },
   {
    "word": "alien",
    "phonetic": "ˈeliən,ˈeljən",
    "pos": "adj.",
    "meaning": "外国的；相异的，性质不同的；不相容的；外国人，外侨；外星人；让渡，转让",
    "example": "illegal aliens entering the country.",
    "exampleCn": "非法入境的外国人"
   },
   {
    "word": "axis",
    "phonetic": "'æksɪs",
    "pos": "n.",
    "meaning": "轴；轴线；轴心国",
    "example": "The Earth rotates on an axis between the north and south poles.",
    "exampleCn": "地球绕着南北两极之间的地轴自转。"
   },
   {
    "word": "fluent",
    "phonetic": "'fluənt",
    "pos": "adj.",
    "meaning": "流畅的，流利的；液态的；畅流的",
    "example": "He spoke in fluent Italian.",
    "exampleCn": "他用流利的意大利语讲话。"
   },
   {
    "word": "design",
    "phonetic": "dɪ'zaɪn",
    "pos": "vt",
    "meaning": "设计；计划；构思；设计；图案；设计",
    "example": "The new plane is in its final design stage.",
    "exampleCn": "这种新型飞机正处于最后的设计阶段。"
   },
   {
    "word": "mundane",
    "phonetic": "mʌn'den",
    "pos": "adj.",
    "meaning": "世俗的，平凡的；世界的，宇宙的",
    "example": "Initially, the work was pretty mundane.",
    "exampleCn": "刚开始，这工作非常乏味。"
   },
   {
    "word": "withdraw",
    "phonetic": "wɪð'drɔ",
    "pos": "vt",
    "meaning": "撤退；收回；撤消；拉开；撤退；离开",
    "example": "calls for Britain to withdraw from the European Union",
    "exampleCn": "要求英国退出欧盟的呼声"
   },
   {
    "word": "synchronize",
    "phonetic": "'sɪŋkrənaɪz",
    "pos": "vi",
    "meaning": "同步；同时发生",
    "example": "It was virtually impossible to synchronize our lives so as to take vacations and weekends together.",
    "exampleCn": "为了一起度假和过周末而要让我们的生活同步几乎是不可能的。"
   },
   {
    "word": "individual",
    "phonetic": ",ɪndɪ'vɪdʒuəl",
    "pos": "adj.",
    "meaning": "[经]个人的；个别的；独特的；[经]个人，[生物]个体",
    "example": "Each individual leaf on the tree is different.",
    "exampleCn": "树上每片叶子都不相同。"
   },
   {
    "word": "afford",
    "phonetic": "ə'fɔrd",
    "pos": "vt",
    "meaning": "给予，提供；买得起",
    "example": "The room affords a beautiful view over the city.",
    "exampleCn": "这房间可以俯瞰城市美景。"
   },
   {
    "word": "light",
    "phonetic": "laɪt",
    "pos": "n.",
    "meaning": "[光]光，光亮；[电]灯；轻的；光亮的；容易的；点着；变亮；著火；照亮；点燃；着火",
    "example": "We’ll keep on looking while it’s still light.",
    "exampleCn": "我们会趁天亮继续寻找。"
   },
   {
    "word": "perceptible",
    "phonetic": "pɚ'sɛptəbl",
    "pos": "adj.",
    "meaning": "可察觉的；可感知的；看得见的",
    "example": "a small but perceptible change",
    "exampleCn": "微小但可以察觉的变化"
   },
   {
    "word": "luxury",
    "phonetic": "'lʌɡʒəri",
    "pos": "n.",
    "meaning": "奢侈，奢华；奢侈品；享受；奢侈的",
    "example": "He was leading a life of luxury in Australia.",
    "exampleCn": "他在澳大利亚过着豪华舒适的生活。"
   },
   {
    "word": "derive",
    "phonetic": "dɪ'raɪv",
    "pos": "vi",
    "meaning": "起源",
    "example": "Mr. Ying is one of those happy people who derive pleasure from helping others.",
    "exampleCn": "英先生是那种助人为乐的快活人。"
   },
   {
    "word": "executive",
    "phonetic": "ɪɡ'zɛkjətɪv",
    "pos": "adj.",
    "meaning": "[计]行政的；经营的；执行的，经营管理的；经理；执行委员会；[计]执行者；经理主管人员",
    "example": "a commission with executive powers",
    "exampleCn": "有执行权的委员会"
   },
   {
    "word": "soar",
    "phonetic": "sɔr",
    "pos": "vi",
    "meaning": "高飞；高耸；往上飞舞；高飞；高涨",
    "example": "Her temperature soared.",
    "exampleCn": "她的体温骤然升高。"
   },
   {
    "word": "abundance",
    "phonetic": "ə'bʌndəns",
    "pos": "n.",
    "meaning": "充裕，[地化]丰富",
    "example": "This area of Mexico has an abundance of safe beaches and a pleasing climate.",
    "exampleCn": "墨西哥的这个地区有大量的安全沙滩与宜人的气候。"
   },
   {
    "word": "susceptible",
    "phonetic": "sə'sɛptəbl",
    "pos": "adj.",
    "meaning": "易受影响的；易感动的；容许…的",
    "example": "A lot of TV advertising is aimed at susceptible young children.",
    "exampleCn": "很多电视广告瞄准了易受影响的幼儿。"
   },
   {
    "word": "automatic",
    "phonetic": "'ɔtə'mætɪk",
    "pos": "adj.",
    "meaning": "[军][自]自动的；无意识的；必然的；自动机械；[军]自动手枪",
    "example": "an automatic weapon",
    "exampleCn": "自动武器"
   },
   {
    "word": "corrupt",
    "phonetic": "kə'rʌpt",
    "pos": "adj.",
    "meaning": "腐败的，贪污的；堕落的；使腐烂；使堕落，使恶化；堕落，腐化；腐烂",
    "example": "Corrupt judges have taken millions of dollars in bribes.",
    "exampleCn": "腐败的法官接受了几百万美元的贿赂。"
   },
   {
    "word": "multilateral",
    "phonetic": ",mʌltɪ'lætərəl",
    "pos": "adj.",
    "meaning": "[数]多边的；多国的，多国参加的",
    "example": "a multilateral arms treaty",
    "exampleCn": "多边军火协定"
   },
   {
    "word": "formulate",
    "phonetic": "'fɔrmjə'let",
    "pos": "vt",
    "meaning": "规划；用公式表示；明确地表达",
    "example": "We are studying the situation but have not formulated any response yet.",
    "exampleCn": "我们正在研究形势，但尚未考虑好如何回应。"
   },
   {
    "word": "facet",
    "phonetic": "'fæsɪt",
    "pos": "n.",
    "meaning": "面；方面；小平面",
    "example": "The issues are complex and multi-faceted.",
    "exampleCn": "这些问题很复杂，涉及诸多方面。"
   },
   {
    "word": "supersede",
    "phonetic": ",supɚ'sid",
    "pos": "vt",
    "meaning": "取代，代替；紧接着……而到来",
    "example": "Their map has since been superseded by photographic atlases.",
    "exampleCn": "他们的地图从此被摄影地图册取代。"
   },
   {
    "word": "hostile",
    "phonetic": "ˈhɑstəl",
    "pos": "adj.",
    "meaning": "敌对的，敌方的；怀敌意的；敌对",
    "example": "Southampton fans gave their former coach a hostile reception .",
    "exampleCn": "南安普敦队的球迷对球队的前任教练很不友善。"
   },
   {
    "word": "solo",
    "phonetic": "'solo",
    "pos": "adj.",
    "meaning": "独奏的；独唱的；单独的；单独地",
    "example": "a gorgeous piano solo",
    "exampleCn": "一首极其美妙的钢琴独奏曲"
   },
   {
    "word": "ruthless",
    "phonetic": "'rʊθləs",
    "pos": "adj.",
    "meaning": "无情的，残忍的",
    "example": "a ruthless dictator",
    "exampleCn": "无情的独裁者"
   },
   {
    "word": "click",
    "phonetic": "klɪk",
    "pos": "n.",
    "meaning": "单击；滴答声",
    "example": "The door clicked shut behind me.",
    "exampleCn": "门在我身后咔嗒一声关上了。"
   },
   {
    "word": "contest",
    "phonetic": "kən'tɛst",
    "pos": "vt",
    "meaning": "争辩；提出质疑；竞争；争辩；竞赛；争夺；争论",
    "example": "His wife is contesting a seat on the council.",
    "exampleCn": "他妻子在角逐市政会的一个席位。"
   },
   {
    "word": "agreeable",
    "phonetic": "ə'ɡriəbl",
    "pos": "adj.",
    "meaning": "令人愉快的；适合的；和蔼可亲的",
    "example": "We spent a most agreeable couple of hours.",
    "exampleCn": "我们非常愉快地度过了几个小时。"
   },
   {
    "word": "tube",
    "phonetic": "tub",
    "pos": "n.",
    "meaning": "[生物]管；电子管；隧道；电视机；乘地铁；不及格",
    "example": "a tube of toothpaste",
    "exampleCn": "一管牙膏"
   },
   {
    "word": "flourish",
    "phonetic": "ˈflɜːrɪʃ",
    "pos": "n.",
    "meaning": "兴旺；茂盛；挥舞；炫耀；华饰；夸耀；挥舞；繁荣，兴旺；茂盛；活跃；处于旺盛时期",
    "example": "The economy is booming and small businesses are flourishing.",
    "exampleCn": "经济繁荣，小企业蒸蒸日上。"
   },
   {
    "word": "detect",
    "phonetic": "dɪ'tɛkt",
    "pos": "vt",
    "meaning": "察觉；发现；探测",
    "example": "Many forms of cancer can be cured if detected early.",
    "exampleCn": "如果发现得早，许多种癌症都可以治愈。"
   },
   {
    "word": "tarnish",
    "phonetic": "'tɑrnɪʃ",
    "pos": "n.",
    "meaning": "晦暗，无光泽；污点；玷污；使……失去光泽；使……变灰暗",
    "example": "His regime was tarnished by human rights abuses.",
    "exampleCn": "他的政权因践踏人权而形象受损。"
   },
   {
    "word": "counterfeit",
    "phonetic": "'kaʊntɚ'fɪt",
    "pos": "vt",
    "meaning": "[法]伪造，仿造；假装，伪装；仿造；假装；赝品；冒牌货；[法]伪造品；假冒的，[法]伪造的；虚伪的",
    "example": "He admitted possessing and delivering counterfeit currency.",
    "exampleCn": "他承认持有和运送了假币。"
   },
   {
    "word": "chew",
    "phonetic": "tʃʊ",
    "pos": "n.",
    "meaning": "咀嚼；咀嚼物；嚼碎，咀嚼；细想，深思",
    "example": "This meat’s so tough I can hardly chew it!",
    "exampleCn": "这肉太老了，我几乎嚼不动！"
   },
   {
    "word": "devour",
    "phonetic": "dɪ'vaʊɚ",
    "pos": "vt",
    "meaning": "吞食；毁灭；凝视",
    "example": "The boys devoured their pancakes.",
    "exampleCn": "男孩子们狼吞虎咽地把薄煎饼吃了。"
   },
   {
    "word": "offend",
    "phonetic": "ə'fɛnd",
    "pos": "vt",
    "meaning": "冒犯；使…不愉快；违反；进攻；引起不舒服",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "item",
    "phonetic": "'aɪtəm",
    "pos": "n.",
    "meaning": "[法]条款，项目；一则",
    "example": "He opened the cardboard box and took out each item.",
    "exampleCn": "他打开纸板箱把里面的物品一一拿出来。"
   },
   {
    "word": "confidence",
    "phonetic": "'kɑnfɪdəns",
    "pos": "n.",
    "meaning": "信心；信任；秘密",
    "example": "I felt I was doing well and my confidence began to grow.",
    "exampleCn": "我觉得自己干得不错，自信心就开始增加了。"
   },
   {
    "word": "cosy",
    "phonetic": "ˈkozi",
    "pos": "adj.",
    "meaning": "舒适的；惬意的",
    "example": "The living room was warm and cosy .",
    "exampleCn": "客厅暖和又舒适。"
   },
   {
    "word": "suck",
    "phonetic": "sʌk",
    "pos": "vt",
    "meaning": "吸吮；吸取；吸吮；糟糕；巴结",
    "example": "They waited in silence and sucked their sweets.",
    "exampleCn": "他们静静地等着，吮着糖果。"
   },
   {
    "word": "employment",
    "phonetic": "ɪm'plɔɪmənt",
    "pos": "n.",
    "meaning": "使用；职业；[劳经]雇用",
    "example": "She was offered employment in the sales office.",
    "exampleCn": "她获聘在销售部工作。"
   },
   {
    "word": "amend",
    "phonetic": "ə'mɛnd",
    "pos": "vt",
    "meaning": "修改；改善，改进；改正，改善；改过自新",
    "example": "The law was amended to include women.",
    "exampleCn": "该法律经修改把女性也包括在内。"
   },
   {
    "word": "update",
    "phonetic": ",ʌp'det",
    "pos": "vt",
    "meaning": "更新；校正，修正；使现代化；更新；现代化",
    "example": "plans to update manufacturing procedures",
    "exampleCn": "更新生产流程的计划"
   },
   {
    "word": "vengeance",
    "phonetic": "'vɛndʒəns",
    "pos": "n.",
    "meaning": "复仇；报复；报仇",
    "example": "a desire for vengeance",
    "exampleCn": "复仇的愿望"
   },
   {
    "word": "factor",
    "phonetic": "'fæktɚ",
    "pos": "n.",
    "meaning": "因素；[经]要素；[物]因数；代理人",
    "example": "The rise in crime is mainly due to social and economic factors.",
    "exampleCn": "犯罪率上升主要由社会和经济因素造成。"
   },
   {
    "word": "abort",
    "phonetic": "ə'bɔrt",
    "pos": "vi",
    "meaning": "流产；堕胎；夭折；发育不全；使流产；使中止",
    "example": "The disease causes pregnant animals to abort.",
    "exampleCn": "这种疾病会导致怀孕的动物流产。"
   },
   {
    "word": "scapegoat",
    "phonetic": "'skepɡot",
    "pos": "n.",
    "meaning": "替罪羊，替人顶罪者；替身",
    "example": "I don't think I deserve to be made the scapegoat for a couple of bad results.",
    "exampleCn": "我认为我不该为出现的一些不良后果充当替罪羊。"
   },
   {
    "word": "imposing",
    "phonetic": "ɪm'pozɪŋ",
    "pos": "adj.",
    "meaning": "（建筑物等）壮观的；威风的；（仪表）堂堂的；给人深刻印象的",
    "example": "an imposing building",
    "exampleCn": "宏伟的建筑"
   },
   {
    "word": "toll",
    "phonetic": "tol",
    "pos": "vt",
    "meaning": "征收；敲钟；[税收]通行费；代价；钟声；鸣钟；征税",
    "example": "You can pay a toll to drive on Pike's Peak Highway or relax and take the Pike's Peak Cog Railway.",
    "exampleCn": "你可以付通行费开车上派克斯峰公路，或者放松一下，乘坐派克斯峰齿轨式火车。"
   },
   {
    "word": "irritate",
    "phonetic": "'ɪrɪtet",
    "pos": "vt",
    "meaning": "刺激，使兴奋；激怒",
    "example": "It really irritates me when he doesn’t help around the house.",
    "exampleCn": "家里的事情他一点都不帮忙，真让我恼火。"
   },
   {
    "word": "assassination",
    "phonetic": "əˌsæsəˈneɪʃn",
    "pos": "n.",
    "meaning": "暗杀，行刺",
    "example": "He narrowly escaped an assassination attempt (=  when someone tries but fails to kill someone else  ) .",
    "exampleCn": "他在一次暗杀行动中死里逃生。"
   },
   {
    "word": "subjective",
    "phonetic": "səb'dʒɛktɪv",
    "pos": "adj.",
    "meaning": "主观的；个人的；自觉的",
    "example": "As a critic, he is far too subjective.",
    "exampleCn": "作为评论家，他过于主观。"
   },
   {
    "word": "surgery",
    "phonetic": "'sɝdʒəri",
    "pos": "n.",
    "meaning": "[外科]外科；外科手术；手术室；诊疗室",
    "example": "Dr. Hanson is in surgery.",
    "exampleCn": "汉森医生在手术室。"
   },
   {
    "word": "yoke",
    "phonetic": "jok",
    "pos": "n.",
    "meaning": "轭；束缚；牛轭；结合；给…上轭；结合；匹配",
    "example": "People are still suffering under the yoke of slavery.",
    "exampleCn": "人们仍然生活在奴隶制的枷锁之下。"
   },
   {
    "word": "multiply",
    "phonetic": "'mʌltɪplaɪ",
    "pos": "vt",
    "meaning": "乘；使增加；使繁殖；使相乘；乘；繁殖；增加；多层的；多样的",
    "example": "The amount of information available has multiplied.",
    "exampleCn": "可获得的信息大大增加了。"
   },
   {
    "word": "overthrow",
    "phonetic": ",ovɚ'θro",
    "pos": "n.",
    "meaning": "推翻；倾覆；瓦解；推翻；打倒；倾覆",
    "example": "Rebels were already making plans to overthrow the government.",
    "exampleCn": "反叛者已在密谋颠覆政府。"
   },
   {
    "word": "soak",
    "phonetic": "sok",
    "pos": "vt",
    "meaning": "吸收，吸入；沉浸在（工作或学习中）；使……上下湿透；浸泡；渗透；浸；湿透；大雨",
    "example": "Soak the clothes in cold water.",
    "exampleCn": "把衣服浸泡在冷水里。"
   },
   {
    "word": "poise",
    "phonetic": "pɔɪz",
    "pos": "n.",
    "meaning": "平衡；姿势；镇静；使平衡；保持...姿势；平衡；准备好；悬着",
    "example": "Louisa seems to have much more poise and confidence.",
    "exampleCn": "路易莎似乎更加沉着自信了。"
   },
   {
    "word": "interim",
    "phonetic": "'ɪntərɪm",
    "pos": "adj.",
    "meaning": "临时的，暂时的；中间的；间歇的；过渡时期，中间时期；暂定",
    "example": "an interim report",
    "exampleCn": "中期报告"
   },
   {
    "word": "prompt",
    "phonetic": "prɑmpt",
    "pos": "adj.",
    "meaning": "敏捷的，迅速的；立刻的；[计]提示；促进；激起；（给演员）提白；[计]提示；付款期限；DOS命令：改变DOS系统提示符的风格；准时地",
    "example": "Prompt action must be taken.",
    "exampleCn": "必须立即采取行动。"
   },
   {
    "word": "applaud",
    "phonetic": "ə'plɔd",
    "pos": "vt",
    "meaning": "赞同；称赞；向…喝采；喝彩；鼓掌欢迎",
    "example": "The audience applauded loudly.",
    "exampleCn": "观众掌声雷动。"
   },
   {
    "word": "adequate",
    "phonetic": "ˈædɪkwət",
    "pos": "adj.",
    "meaning": "充足的；适当的；胜任的",
    "example": "Farmers have been slow to make adequate provision for their retirement.",
    "exampleCn": "农民们迟迟没有为退休做好适当安排。"
   },
   {
    "word": "amplify",
    "phonetic": "'æmplɪfaɪ",
    "pos": "vt",
    "meaning": "放大，扩大；增强；详述；详述",
    "example": "These stories only amplified her fears.",
    "exampleCn": "这些故事徒增了她的恐惧感。"
   },
   {
    "word": "cling",
    "phonetic": "klɪŋ",
    "pos": "vi",
    "meaning": "坚持，墨守；紧贴；附着",
    "example": "Instead, he appears determined to cling to power.",
    "exampleCn": "反而，他看来坚决要握紧权力不放。"
   },
   {
    "word": "jail",
    "phonetic": "dʒel",
    "pos": "n.",
    "meaning": "[法]监狱；监牢；拘留所；监禁；下狱",
    "example": "He’s been in jail for three months already.",
    "exampleCn": "他已经入狱三个月。"
   },
   {
    "word": "paradox",
    "phonetic": "'pærədɑks",
    "pos": "n.",
    "meaning": "似是而非的论点；看似悖谬实则正确的观点",
    "example": "The paradox is that fishermen would catch more fish if they fished less.",
    "exampleCn": "悖论就是: 如果渔夫减少捕鱼，反而会打到更多的鱼。"
   },
   {
    "word": "flock",
    "phonetic": "flɑk",
    "pos": "n.",
    "meaning": "群；棉束（等于floc）；聚集；成群而行",
    "example": "They kept a small flock of sheep.",
    "exampleCn": "他们养了一小群绵羊。"
   },
   {
    "word": "divert",
    "phonetic": "dɪˈvɚt",
    "pos": "vt",
    "meaning": "转移；使…欢娱；使…转向；转移",
    "example": "The high street is closed and traffic is being diverted .",
    "exampleCn": "大街封闭，车辆正改道而行。"
   },
   {
    "word": "filth",
    "phonetic": "fɪlθ",
    "pos": "n.",
    "meaning": "污秽；肮脏；猥亵；不洁",
    "example": "I don’t know how you can watch that filth!",
    "exampleCn": "我不知道你怎么会看那种淫秽的东西！"
   },
   {
    "word": "enquire",
    "phonetic": "ɪn'kwaɪr",
    "pos": "vi",
    "meaning": "询问；调查；问候（等于inquire）；询问；打听",
    "example": "I am writing to confirm /enquire/inform you…",
    "exampleCn": "我写信是要确认/询问/通知你…"
   },
   {
    "word": "haste",
    "phonetic": "hest",
    "pos": "n.",
    "meaning": "匆忙；急忙；轻率；匆忙；赶紧；赶快",
    "example": "I soon regretted my haste.",
    "exampleCn": "我很快就对自己的仓促感到后悔。"
   },
   {
    "word": "attractive",
    "phonetic": "ə'træktɪv",
    "pos": "adj.",
    "meaning": "吸引人的；有魅力的；引人注目的",
    "example": "an attractive young woman",
    "exampleCn": "妩媚动人的年轻女子"
   },
   {
    "word": "plantation",
    "phonetic": "plæn'teʃən",
    "pos": "n.",
    "meaning": "栽植；殖民；大农场",
    "example": "a rubber plantation",
    "exampleCn": "橡胶园"
   },
   {
    "word": "reclaim",
    "phonetic": "rɪ'klem",
    "pos": "vt",
    "meaning": "开拓；回收再利用；改造某人，使某人悔改；抗议，喊叫；改造，感化；再生胶",
    "example": "This land will be reclaimed for a new airport.",
    "exampleCn": "这块土地将被开发用来建新机场。"
   },
   {
    "word": "muddle",
    "phonetic": "'mʌdl",
    "pos": "vt",
    "meaning": "混合；使咬字不清晰；使微醉；糊涂；困惑；混浊状态",
    "example": "Someone’s muddled up all the papers on my desk.",
    "exampleCn": "有人把我桌上的文件全都弄乱了。"
   },
   {
    "word": "metallic",
    "phonetic": "mə'tælɪk",
    "pos": "adj.",
    "meaning": "金属的，含金属的",
    "example": "The key turned in the lock with a loud metallic click.",
    "exampleCn": "钥匙在锁里转动发出金属撞击的咔嗒声。"
   },
   {
    "word": "obvious",
    "phonetic": "'ɑbvɪəs",
    "pos": "adj.",
    "meaning": "明显的；显著的；平淡无奇的",
    "example": "The obvious way of reducing pollution is to use cars less.",
    "exampleCn": "减少污染显而易见的办法就是少用汽车。"
   },
   {
    "word": "sentiment",
    "phonetic": "'sɛntɪmənt",
    "pos": "n.",
    "meaning": "[心理]感情，情绪；情操；观点；多愁善感",
    "example": "Public sentiment rapidly turned anti-American.",
    "exampleCn": "公众的情绪迅速转向反美。"
   },
   {
    "word": "harass",
    "phonetic": "ˈhærəs, həˈræs",
    "pos": "vt",
    "meaning": "使困扰；使烦恼；反复袭击",
    "example": "A number of black youths have complained of being harassed by the police.",
    "exampleCn": "一些黑人青年投诉称受到警察骚扰。"
   }
  ]
 },
 {
  "level": "C1",
  "name": "流利",
  "band": "雅思 ≈7.0–7.5",
  "desc": "按词频排列的第 5 段，学术与书面表达高频词，冲 7+ 关键。",
  "words": [
   {
    "word": "constrain",
    "phonetic": "kən'stren",
    "pos": "vt",
    "meaning": "驱使；强迫；束缚",
    "example": "Poor soil has constrained the level of crop production.",
    "exampleCn": "贫瘠的土地限制了农作物的产量。"
   },
   {
    "word": "wretched",
    "phonetic": "'rɛtʃɪd",
    "pos": "adj.",
    "meaning": "可怜的；卑鄙的；令人苦恼或难受的",
    "example": "the poor, wretched girl",
    "exampleCn": "极其不幸的可怜姑娘"
   },
   {
    "word": "resent",
    "phonetic": "rɪ'zɛnt",
    "pos": "vt",
    "meaning": "怨恨；愤恨；厌恶",
    "example": "Paul resented the fact that Carol didn’t trust him.",
    "exampleCn": "保罗非常气愤，因为卡萝尔不信任他。"
   },
   {
    "word": "offence",
    "phonetic": "ə'fɛns",
    "pos": "n.",
    "meaning": "犯罪；违反；过错；攻击",
    "example": "His solicitor said he committed the offence because he was heavily in debt.",
    "exampleCn": "他的律师说他犯罪是因为欠下巨债。"
   },
   {
    "word": "go",
    "phonetic": "go",
    "pos": "vi",
    "meaning": "走；达到；运转；趋于；去；进行；尝试；忍受；出产；以…打赌",
    "example": "The governor went further by agreeing that all policy announcements should be made first in the House.",
    "exampleCn": "该州长进一步同意所有政策的宣布都应首先在议院进行。"
   },
   {
    "word": "precise",
    "phonetic": "prɪ'saɪs",
    "pos": "adj.",
    "meaning": "精确的；明确的；严格的",
    "example": "precise sales figures",
    "exampleCn": "准确的销售数据"
   },
   {
    "word": "overlap",
    "phonetic": "'ovəlæp",
    "pos": "n.",
    "meaning": "重叠；重复",
    "example": "When the bag is folded, the bottom overlaps one side.",
    "exampleCn": "把包折叠起来时，其底部与一边就重合了。"
   },
   {
    "word": "episode",
    "phonetic": "'ɛpɪsod",
    "pos": "n.",
    "meaning": "插曲；一段情节；插话；有趣的事件",
    "example": "Watch next week’s thrilling episode!",
    "exampleCn": "请收看下周精彩的一集！"
   },
   {
    "word": "malice",
    "phonetic": "'mælɪs",
    "pos": "n.",
    "meaning": "恶意；怨恨；预谋",
    "example": "James bore her no malice (= did not feel any malice towards her ) .",
    "exampleCn": "詹姆斯对她并无恶意。"
   },
   {
    "word": "palatable",
    "phonetic": "'pælətəbl",
    "pos": "adj.",
    "meaning": "美味的，可口的；愉快的",
    "example": "a very palatable wine",
    "exampleCn": "口感极佳的酒"
   },
   {
    "word": "carve",
    "phonetic": "kɑrv",
    "pos": "vt",
    "meaning": "雕刻；切开；开创；切开；做雕刻工作",
    "example": "carved wooden chairs",
    "exampleCn": "木雕椅子"
   },
   {
    "word": "mentality",
    "phonetic": "mɛn'tæləti",
    "pos": "n.",
    "meaning": "心态；[心理]智力；精神力；头脑作用",
    "example": "a get-rich-quick mentality",
    "exampleCn": "一夜暴富的心态"
   },
   {
    "word": "proposition",
    "phonetic": ",prɑpə'zɪʃən",
    "pos": "n.",
    "meaning": "[数]命题；提议；主题；议题",
    "example": "The proposition that democracies do not fight each other is based on a tiny historical sample.",
    "exampleCn": "民主国家间互不交战的观点是基于一个微不足道的历史实例。"
   },
   {
    "word": "steep",
    "phonetic": "stip",
    "pos": "adj.",
    "meaning": "陡峭的；不合理的；夸大的；急剧升降的；泡；浸；使…充满；峭壁；浸渍",
    "example": "The road became rocky and steep.",
    "exampleCn": "路变得崎岖陡峭起来。"
   },
   {
    "word": "hitchhike",
    "phonetic": "'hɪtʃ,haɪk",
    "pos": "vt",
    "meaning": "要求（搭便车）；搭便车；搭便车（旅行）",
    "example": "Neff hitchhiked to New York during his Christmas holiday.",
    "exampleCn": "内夫在圣诞节休假期间搭免费便车去了纽约。"
   },
   {
    "word": "tumour",
    "phonetic": "",
    "pos": "n.",
    "meaning": "[肿瘤]瘤；肿瘤；肿块",
    "example": "a brain tumour",
    "exampleCn": "脑瘤"
   },
   {
    "word": "alliance",
    "phonetic": "ə'laɪəns",
    "pos": "n.",
    "meaning": "联盟，联合；联姻",
    "example": "independent organizations and alliances",
    "exampleCn": "独立组织和联盟"
   },
   {
    "word": "chic",
    "phonetic": "ʃɪk",
    "pos": "n.",
    "meaning": "时髦；别致的款式；别致的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "denomination",
    "phonetic": "dɪ,nɑmɪ'neʃən",
    "pos": "n.",
    "meaning": "[金融]面额；名称；教派",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "frown",
    "phonetic": "fraʊn",
    "pos": "vi",
    "meaning": "皱眉；不同意；皱眉，蹙额",
    "example": "She frowned as she read the letter.",
    "exampleCn": "她看着信皱起了眉头。"
   },
   {
    "word": "coerce",
    "phonetic": "ko'ɝs",
    "pos": "vt",
    "meaning": "强制，迫使",
    "example": "Potter had argued that the government coerced him into pleading guilty.",
    "exampleCn": "波特曾争辩说是政府胁迫他认罪。"
   },
   {
    "word": "cumbersome",
    "phonetic": "'kʌmbəsəm",
    "pos": "adj.",
    "meaning": "笨重的；累赘的；难处理的",
    "example": "a large cumbersome machine",
    "exampleCn": "大而笨重的机器"
   },
   {
    "word": "credit",
    "phonetic": "'krɛdɪt",
    "pos": "n.",
    "meaning": "信用，信誉；[金融]贷款；学分；信任；声望；相信，信任；把…归给，归功于；赞颂",
    "example": "The store agreed to let him have credit.",
    "exampleCn": "商店同意他赊购。"
   },
   {
    "word": "rhythm",
    "phonetic": "'rɪðəm",
    "pos": "n.",
    "meaning": "节奏；韵律",
    "example": "Begin to listen to your own body rhythms.",
    "exampleCn": "开始聆听你自己身体的规律性变化。"
   },
   {
    "word": "crash",
    "phonetic": "kræʃ",
    "pos": "n.",
    "meaning": "碰撞；崩溃；坠落；坠落；破碎；撞碎；碰撞；[航]坠毁；闯；突然倒台；速成的",
    "example": "The jet crashed after take-off.",
    "exampleCn": "这架喷气式飞机起飞后就坠毁了。"
   },
   {
    "word": "toneless",
    "phonetic": "'tonləs",
    "pos": "adj.",
    "meaning": "沉闷的；单调的；缺乏声调的；无声的",
    "example": "‘I’m sorry,’ he said, in a flat toneless voice.",
    "exampleCn": "“对不起。”他以淡淡的声调说道。"
   },
   {
    "word": "vomit",
    "phonetic": "'vɑmɪt",
    "pos": "vt",
    "meaning": "吐出；使……呕吐；[医]呕吐；吐出；[医]呕吐；呕吐物；催吐剂",
    "example": "He had swallowed so much sea water he wanted to vomit.",
    "exampleCn": "他呛了这么多海水，所以想吐。"
   },
   {
    "word": "electrician",
    "phonetic": "ɪ'lɛk'trɪʃən",
    "pos": "n.",
    "meaning": "电工；电气技师",
    "example": "I've heard an electrician got hurt when he hiked.",
    "exampleCn": "我听说有个电工在高空检修电线时摔伤了。"
   },
   {
    "word": "articulate",
    "phonetic": "ɑr'tɪkjulet",
    "pos": "vi",
    "meaning": "发音；清楚地讲话；用关节连接起来；发音清晰的；口才好的；[动][生物]有关节的",
    "example": "Many people are unable to articulate the unhappiness they feel.",
    "exampleCn": "许多人都表达不出内心的痛苦。"
   },
   {
    "word": "porch",
    "phonetic": "pɔrtʃ",
    "pos": "n.",
    "meaning": "门廊；走廊",
    "example": "He was standing on the porch, waving as we drove away.",
    "exampleCn": "我们开车离开的时候，他站在走廊上向我们挥手。"
   },
   {
    "word": "fortnight",
    "phonetic": "'fɔrtnaɪt",
    "pos": "n.",
    "meaning": "两星期",
    "example": "a fortnight’s holiday",
    "exampleCn": "十四天的假期"
   },
   {
    "word": "arouse",
    "phonetic": "ə'raʊz",
    "pos": "vt",
    "meaning": "引起；唤醒；鼓励；激发；醒来；发奋",
    "example": "His revolutionary work in linguistics has aroused intense scholarly interest.",
    "exampleCn": "他在语言学方面的革命性著作引起了强烈的学术兴趣。"
   },
   {
    "word": "champion",
    "phonetic": "'tʃæmpɪən",
    "pos": "n.",
    "meaning": "冠军；拥护者；战士；支持；拥护；优胜的；第一流的",
    "example": "the world heavyweight boxing champion",
    "exampleCn": "世界重量级拳击冠军"
   },
   {
    "word": "hazard",
    "phonetic": "'hæzɚd",
    "pos": "vt",
    "meaning": "赌运气；冒…的危险，使遭受危险；[安全]危险，冒险；冒险的事",
    "example": "That pile of rubbish is a fire hazard (= something that is likely to cause a fire ).",
    "exampleCn": "那堆垃圾是火灾隐患。"
   },
   {
    "word": "clause",
    "phonetic": "klɔz",
    "pos": "n.",
    "meaning": "[法]条款；[计]子句",
    "example": "A confidentiality clause was added to the contract.",
    "exampleCn": "合同中加上了一项保密条款。"
   },
   {
    "word": "enthusiastic",
    "phonetic": "ɪn,θuzɪ'æstɪk",
    "pos": "adj.",
    "meaning": "热情的；热心的；狂热的",
    "example": "an enthusiastic supporter of reform",
    "exampleCn": "改革的热心支持者"
   },
   {
    "word": "original",
    "phonetic": "ə'rɪdʒənl",
    "pos": "n.",
    "meaning": "[摄]原件；原作；[经]原物；原型；[摄]原始的；最初的；独创的；新颖的",
    "example": "The colours are much more striking in the original.",
    "exampleCn": "原作的色彩要鲜艳得多。"
   },
   {
    "word": "output",
    "phonetic": "'aʊtpʊt",
    "pos": "n.",
    "meaning": "[计]输出，输出量；[经]产量；出产；[计]输出",
    "example": "Output is up 30% on last year.",
    "exampleCn": "产量比去年提高了30%。"
   },
   {
    "word": "plausible",
    "phonetic": "'plɔzəbl",
    "pos": "adj.",
    "meaning": "貌似可信的，花言巧语的；貌似真实的，貌似有理的",
    "example": "His story certainly sounds plausible.",
    "exampleCn": "他的叙述听上去当然很合理。"
   },
   {
    "word": "nausea",
    "phonetic": "'nɔzɪə",
    "pos": "n.",
    "meaning": "[临床]恶心，晕船；极端的憎恶",
    "example": "I was overcome with a feeling of nausea.",
    "exampleCn": "我感到一阵恶心。"
   },
   {
    "word": "discount",
    "phonetic": "dɪs'kaʊnt",
    "pos": "n.",
    "meaning": "[贸易]折扣；[金融]贴现率；[贸易]打折扣；将…贴现；贬损",
    "example": "They are often available at a discount.",
    "exampleCn": "它们经常可以以折扣价买到。"
   },
   {
    "word": "thunder",
    "phonetic": "'θʌndɚ",
    "pos": "n.",
    "meaning": "[气象]雷；轰隆声；恐吓；打雷；怒喝；轰隆地发出；大声喊出",
    "example": "We were woken in the night by thunder.",
    "exampleCn": "晚上我们被雷声惊醒。"
   },
   {
    "word": "outcome",
    "phonetic": "'aʊt'kʌm",
    "pos": "n.",
    "meaning": "结果，结局；成果",
    "example": "People who had heard the evidence at the trial were surprised at the outcome.",
    "exampleCn": "在审判过程中听过证词的人都对此结果感到吃惊。"
   },
   {
    "word": "dial",
    "phonetic": "'daɪəl",
    "pos": "n.",
    "meaning": "转盘；[仪]刻度盘；钟面",
    "example": "The lighted dial of her watch said 1.20.",
    "exampleCn": "她手表上的夜光表面显示时间为1点20分。"
   },
   {
    "word": "confidential",
    "phonetic": ",kɑnfɪ'dɛnʃl",
    "pos": "adj.",
    "meaning": "[管理]机密的；表示信任的；获信任的",
    "example": "a confidential government report",
    "exampleCn": "一份机密的政府报告"
   },
   {
    "word": "hinge",
    "phonetic": "hɪndʒ",
    "pos": "n.",
    "meaning": "[机]铰链；枢纽；关键",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "adore",
    "phonetic": "ə'dɔr",
    "pos": "vt",
    "meaning": "崇拜；爱慕；喜爱；极喜欢；崇拜；爱慕",
    "example": "I simply adore chocolate.",
    "exampleCn": "我简直太喜欢巧克力了。"
   },
   {
    "word": "finite",
    "phonetic": "'faɪnaɪt",
    "pos": "adj.",
    "meaning": "有限的；限定的",
    "example": "the earth’s finite resources",
    "exampleCn": "地球有限的资源"
   },
   {
    "word": "masculine",
    "phonetic": "'mæskjəlɪn",
    "pos": "adj.",
    "meaning": "[人类]男性的；阳性的；男子气概的；[人类]男性；阳性，阳性词",
    "example": "They’re nice curtains, but I’d prefer something a little more masculine.",
    "exampleCn": "这些窗帘很好，但我更喜欢男性化一点的。"
   },
   {
    "word": "mutter",
    "phonetic": "'mʌtɚ",
    "pos": "vi",
    "meaning": "咕哝；喃喃自语；咕哝；喃喃低语",
    "example": "\"God knows,\" she muttered, \"what's happening in that madman's mind.\"",
    "exampleCn": "“天知道，”她低声抱怨，“那个疯子脑子里正在想什么。”"
   },
   {
    "word": "competition",
    "phonetic": ",kɑmpə'tɪʃən",
    "pos": "n.",
    "meaning": "[生态]竞争；比赛，竞赛",
    "example": "Going to trade fairs is an ideal opportunity to size up the competition .",
    "exampleCn": "参加商品交易会是估量竞争规模的理想机会。"
   },
   {
    "word": "recipient",
    "phonetic": "rɪ'sɪpɪənt",
    "pos": "n.",
    "meaning": "[包装]容器，[通信]接受者；容纳者；容易接受的，感受性强的",
    "example": "...the largest recipient of U.S. foreign aid.",
    "exampleCn": "…最大的美国对外援助接受方。"
   },
   {
    "word": "embargo",
    "phonetic": "ɪm'bɑrɡo",
    "pos": "n.",
    "meaning": "禁令；禁止；封港令",
    "example": "Several countries embargoed arms shipments to Yugoslavia.",
    "exampleCn": "好几个国家对南斯拉夫实行武器禁运。"
   },
   {
    "word": "digital",
    "phonetic": "'dɪdʒɪtl",
    "pos": "adj.",
    "meaning": "数字的；手指的；数字；键",
    "example": "digital TV",
    "exampleCn": "数字电视"
   },
   {
    "word": "scholarship",
    "phonetic": "'skɑlɚʃɪp",
    "pos": "n.",
    "meaning": "奖学金；学识，学问",
    "example": "Her latest publication is a fine piece of scholarship.",
    "exampleCn": "她最新出版的作品是一部优秀的学术著作。"
   },
   {
    "word": "impose",
    "phonetic": "ɪm'poz",
    "pos": "vi",
    "meaning": "利用；欺骗；施加影响；强加；征税；以…欺骗",
    "example": "Parents should beware of imposing their own tastes on their children.",
    "exampleCn": "父母应该提防把自己的兴趣强加给孩子。"
   },
   {
    "word": "complex",
    "phonetic": "kəm'plɛks; 'kɑm,plɛks",
    "pos": "adj.",
    "meaning": "复杂的；合成的",
    "example": "a complex system of highways",
    "exampleCn": "复杂的公路网"
   },
   {
    "word": "consent",
    "phonetic": "kən'sɛnt",
    "pos": "vi",
    "meaning": "同意；赞成；答应；同意；（意见等的）一致；赞成",
    "example": "He took the car without the owner’s consent .",
    "exampleCn": "他没有得到车主的许可就把车开走了。"
   },
   {
    "word": "hubbub",
    "phonetic": "'hʌbʌb",
    "pos": "n.",
    "meaning": "喧哗；骚动",
    "example": "the hubbub from the market",
    "exampleCn": "市场的嘈杂声"
   },
   {
    "word": "shaft",
    "phonetic": "ʃæft",
    "pos": "n.",
    "meaning": "矛；矿井；车辕；轴；光线",
    "example": "a drive shaft",
    "exampleCn": "驱动轴"
   },
   {
    "word": "caption",
    "phonetic": "'kæpʃən",
    "pos": "n.",
    "meaning": "[语][计][图情]标题；字幕；说明；逮捕",
    "example": "The local paper featured me standing on a stepladder with a caption, \"Wendy climbs the ladder to success.\"",
    "exampleCn": "当地的报纸刊登了一幅我站在活梯上的特写，下面写着：“温迪登上了成功之梯。”"
   },
   {
    "word": "harbour",
    "phonetic": "hɑrbɚ",
    "pos": "vt",
    "meaning": "庇护；藏匿；入港停泊；海港（等于harbor）；避难所",
    "example": "as they sailed into Portsmouth Harbour",
    "exampleCn": "当他们驶入朴次茅斯港的时候"
   },
   {
    "word": "tumble",
    "phonetic": "'tʌmbl",
    "pos": "vi",
    "meaning": "摔倒；倒塌；滚动；打滚；仓惶地行动；使摔倒；使滚翻；弄乱；跌倒；翻斤斗；跌跤",
    "example": "Oil prices have tumbled.",
    "exampleCn": "石油价格猛跌。"
   },
   {
    "word": "sink",
    "phonetic": "sɪŋk",
    "pos": "vi",
    "meaning": "下沉；消沉；渗透；使下沉；挖掘；使低落；[化工]水槽；洗涤槽；污水坑",
    "example": "Dirty plates were piled high in the sink.",
    "exampleCn": "脏盘子在洗涤槽里堆得很高。"
   },
   {
    "word": "patron",
    "phonetic": "'petrən",
    "pos": "n.",
    "meaning": "赞助人；保护人；主顾",
    "example": "a wealthy patron",
    "exampleCn": "富有的赞助人"
   },
   {
    "word": "flu",
    "phonetic": "flu",
    "pos": "n.",
    "meaning": "流感",
    "example": "Steven’s still in bed with flu .",
    "exampleCn": "史蒂文患了流感，仍卧病在床。"
   },
   {
    "word": "column",
    "phonetic": "'kɑləm",
    "pos": "n.",
    "meaning": "纵队，[数]列；专栏；圆柱，柱形物",
    "example": "He writes a weekly column for ‘The Times’.",
    "exampleCn": "他每周为《泰晤士报》写一篇专栏文章。"
   },
   {
    "word": "overrun",
    "phonetic": "'ovərʌn",
    "pos": "vt",
    "meaning": "泛滥；超过；蹂躏；泛滥；蔓延",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "etiquette",
    "phonetic": "'ɛtɪkɛt",
    "pos": "n.",
    "meaning": "礼节，礼仪；规矩",
    "example": "strict rules of professional etiquette",
    "exampleCn": "严格的行规"
   },
   {
    "word": "deduct",
    "phonetic": "dɪ'dʌkt",
    "pos": "vt",
    "meaning": "扣除，减去；演绎",
    "example": "The company deducted this payment from his compensation.",
    "exampleCn": "公司从他的补偿金中扣除了这笔款项。"
   },
   {
    "word": "dense",
    "phonetic": "dɛns",
    "pos": "adj.",
    "meaning": "[统计]稠密的；浓厚的；愚钝的",
    "example": "a dense rurally-based population",
    "exampleCn": "居住在乡村的密集人口"
   },
   {
    "word": "tinge",
    "phonetic": "tɪndʒ",
    "pos": "n.",
    "meaning": "淡色；些许味道；风味",
    "example": "Pink tinged her cheeks.",
    "exampleCn": "她面色粉红。"
   },
   {
    "word": "congruent",
    "phonetic": "'kɑŋɡruənt",
    "pos": "adj.",
    "meaning": "[数]适合的，一致的；全等的；合谐的",
    "example": "They want to work in an organization whose values are congruent with their own.",
    "exampleCn": "他们想在一家与他们自己的价值观相同的组织里工作。"
   },
   {
    "word": "crouch",
    "phonetic": "kraʊtʃ",
    "pos": "vi",
    "meaning": "蹲伏，蜷伏；卑躬屈膝；低头；屈膝；蹲伏",
    "example": "He crouched in the shadows near the doorway.",
    "exampleCn": "他蹲在门道近旁的阴暗处。"
   },
   {
    "word": "conserve",
    "phonetic": "kən'sɝv",
    "pos": "vt",
    "meaning": "保存；将…做成蜜饯；使守恒；果酱；蜜饯",
    "example": "We must conserve our woodlands for future generations.",
    "exampleCn": "我们必须为子孙后代保护林地。"
   },
   {
    "word": "fahrenheit",
    "phonetic": "'færən'haɪt",
    "pos": "n.",
    "meaning": "华氏温度计；华氏温标",
    "example": "He was asked for the boiling point of water in Fahrenheit.",
    "exampleCn": "有人问他华氏温标下水的沸点。"
   },
   {
    "word": "corporation",
    "phonetic": ",kɔrpə'reʃən",
    "pos": "n.",
    "meaning": "[贸易]公司；法人（团体）；社团；大腹便便；市政当局",
    "example": "He works for a large American corporation.",
    "exampleCn": "他在一家美国大公司工作。"
   },
   {
    "word": "quench",
    "phonetic": "kwɛntʃ",
    "pos": "vt",
    "meaning": "熄灭，[机]淬火；解渴；结束；冷浸；熄灭；平息",
    "example": "a desperate bid to quench the raging flames",
    "exampleCn": "为扑灭熊熊大火而不顾一切的努力"
   },
   {
    "word": "alarm",
    "phonetic": "ə'lɑrm",
    "pos": "n.",
    "meaning": "警报，[安全]警告器；惊慌；警告；使惊恐",
    "example": "I forgot to set the burglar alarm.",
    "exampleCn": "我忘记打开防盗警报器了。"
   },
   {
    "word": "nasty",
    "phonetic": "'næsti",
    "pos": "adj.",
    "meaning": "肮脏的；下流的；险恶的；脾气不好的",
    "example": "I went to school with him e_SEnD he was nasty then and he’s nasty now.",
    "exampleCn": "我和他一起上过学他那时很讨厌，现在还是很讨厌。"
   },
   {
    "word": "shovel",
    "phonetic": "'ʃʌvl",
    "pos": "n.",
    "meaning": "铁铲；一铲的量；铲车；铲除；用铲挖；把…胡乱塞入；[机]铲",
    "example": "...a coal shovel.",
    "exampleCn": "…一把煤铲。"
   },
   {
    "word": "suspicious",
    "phonetic": "sə'spɪʃəs",
    "pos": "adj.",
    "meaning": "可疑的；怀疑的；多疑的",
    "example": "His reluctance to answer my questions made me suspicious .",
    "exampleCn": "他不愿回答我的问题，这引起我的怀疑。"
   },
   {
    "word": "trunk",
    "phonetic": "trʌŋk",
    "pos": "n.",
    "meaning": "树干；躯干；象鼻；汽车车尾的行李箱；[航][铁路]干线的；躯干的；箱子的",
    "example": "He left his bicycle leaning against a tree trunk .",
    "exampleCn": "他把他的自行车斜靠在树干上。"
   },
   {
    "word": "ovation",
    "phonetic": "o'veʃən",
    "pos": "n.",
    "meaning": "热烈欢迎，欢呼",
    "example": "The Chancellor’s entrance was greeted with a standing ovation (= everyone stood up ).",
    "exampleCn": "总理进来时，全体起立鼓掌欢迎。"
   },
   {
    "word": "saddle",
    "phonetic": "'sædl",
    "pos": "n.",
    "meaning": "鞍，鞍状物；[车辆]车座；拖具；承受；使负担；装以马鞍",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "tragedy",
    "phonetic": "'trædʒədi",
    "pos": "n.",
    "meaning": "悲剧；灾难；惨案",
    "example": "The tragedy happened as they were returning home from a night out.",
    "exampleCn": "悲剧发生在他们夜里外出归来的路上。"
   },
   {
    "word": "meteorology",
    "phonetic": ",mitɪə'rɑlədʒi",
    "pos": "n.",
    "meaning": "气象状态，[气象]气象学",
    "example": "This is a book about meteorology.",
    "exampleCn": "这本书是讲气象的。"
   },
   {
    "word": "saturate",
    "phonetic": "'sætʃərɪt",
    "pos": "vt",
    "meaning": "浸透，使湿透；使饱和，使充满；浸透的，饱和的；深颜色的",
    "example": "Water poured through the hole, saturating the carpet.",
    "exampleCn": "水从洞里流进来，浸湿了地毯。"
   },
   {
    "word": "elbow",
    "phonetic": "'ɛlbo",
    "pos": "n.",
    "meaning": "肘部；弯头；扶手；推挤；用手肘推开",
    "example": "He slipped and fell, badly bruising an elbow.",
    "exampleCn": "他滑倒了，严重挫伤了一只胳膊肘。"
   },
   {
    "word": "formidable",
    "phonetic": "'fɔrmɪdəbl",
    "pos": "adj.",
    "meaning": "强大的；可怕的；令人敬畏的；艰难的",
    "example": "The building is grey, formidable, not at all picturesque.",
    "exampleCn": "那幢建筑呈灰色，气势凛然，与漂亮沾不上边。"
   },
   {
    "word": "structural",
    "phonetic": "'strʌktʃərəl",
    "pos": "adj.",
    "meaning": "结构的；建筑的",
    "example": "structural changes in the computer industry",
    "exampleCn": "电脑行业的结构性改变"
   },
   {
    "word": "kindle",
    "phonetic": "'kɪndl",
    "pos": "vt",
    "meaning": "点燃；激起；照亮；发亮；着火；激动起来",
    "example": "The Second World War kindled his enthusiasm for politics.",
    "exampleCn": "第二次世界大战激发了他的政治热情。"
   },
   {
    "word": "decline",
    "phonetic": "dɪ'klaɪn",
    "pos": "n.",
    "meaning": "下降；衰退；斜面；下降；衰落；谢绝；谢绝；婉拒",
    "example": "The number of staff has declined from 217,000 to 114,000.",
    "exampleCn": "员工人数已从217000人减少到114000人。"
   },
   {
    "word": "enroll",
    "phonetic": "ɪn'rol",
    "pos": "vt",
    "meaning": "登记；使加入；把...记入名册；使入伍；参加；登记；注册；记入名册",
    "example": "The school will enroll new students in August.",
    "exampleCn": "这所学校将于八月份招收新生."
   },
   {
    "word": "slope",
    "phonetic": "slop",
    "pos": "n.",
    "meaning": "斜坡；倾斜；[数]斜率；扛枪姿势；倾斜；逃走；倾斜；使倾斜；扛",
    "example": "a steep slope",
    "exampleCn": "陡坡"
   },
   {
    "word": "distend",
    "phonetic": "dɪ'stɛnd",
    "pos": "vi",
    "meaning": "扩张；膨胀",
    "example": "Through this incision, the abdominal cavity is distended with carbon dioxide gas.",
    "exampleCn": "通过此切口，二氧化碳气体把胸腔充得肿胀起来。"
   },
   {
    "word": "exert",
    "phonetic": "ɪɡ'zɝt",
    "pos": "vt",
    "meaning": "运用，发挥；施以影响",
    "example": "He has exerted himself tirelessly on behalf of the charity.",
    "exampleCn": "他为这个慈善组织奋斗不懈。"
   },
   {
    "word": "appreciable",
    "phonetic": "ə'priʃəbl",
    "pos": "adj.",
    "meaning": "可感知的；[经]可评估的；相当可观的",
    "example": "There’s no appreciable change in the patient’s condition.",
    "exampleCn": "病人的状况没有明显改变。"
   },
   {
    "word": "aggregate",
    "phonetic": "'æɡrɪɡət; (for v.) æɡrɪˌɡet",
    "pos": "vi",
    "meaning": "[数]集合；[物化][无脊椎]聚集；合计；[数]集合；[物化][无脊椎]聚集；合计；合计；[物化][数]集合体；[会计]总计；[植][无脊椎][地质]聚合的；[数]集合的；合计的",
    "example": "(=  as a group or in total  ) , women outlive men by 7 or more years.",
    "exampleCn": "总体来看，女性比男性多活七年或以上。"
   },
   {
    "word": "thirst",
    "phonetic": "θɝst",
    "pos": "n.",
    "meaning": "渴望；口渴；热望；渴望；口渴",
    "example": "Ice water is the only thing that really quenches my thirst (= gets rid of it ) .",
    "exampleCn": "只有冰水才能让我真正解渴。"
   },
   {
    "word": "hurricane",
    "phonetic": "hʌrɪˌken",
    "pos": "n.",
    "meaning": "飓风，[气象]暴风",
    "example": "The hurricane devastated a large section of the coast.",
    "exampleCn": "飓风毁坏了沿海地区的大部分。"
   },
   {
    "word": "miracle",
    "phonetic": "'mɪrəkl",
    "pos": "n.",
    "meaning": "奇迹，奇迹般的人或物；惊人的事例",
    "example": "It’s a miracle you weren’t killed!",
    "exampleCn": "你没有死真是奇迹！"
   },
   {
    "word": "nightmare",
    "phonetic": "'naɪt'mɛr",
    "pos": "n.",
    "meaning": "恶梦；梦魇般的经历；可怕的；噩梦似的",
    "example": "All the victims still suffered nightmares.",
    "exampleCn": "所有的受害者仍为恶梦所扰。"
   },
   {
    "word": "opposite",
    "phonetic": "ˈɑpəzɪt; ˈɑpəsɪt",
    "pos": "adj.",
    "meaning": "相反的；[植]对面的；对立的；对立面；反义词；在对面",
    "example": "I thought the medicine would make him sleep, but it had the opposite effect.",
    "exampleCn": "我以为这药会让他睡觉，但是它却起了反作用。"
   },
   {
    "word": "dedicated",
    "phonetic": "'dɛdə'ketɪd",
    "pos": "adj.",
    "meaning": "[计]专用的；专注的；献身的",
    "example": "a dedicated and thoughtful teacher",
    "exampleCn": "一位富有敬业精神、待人体贴的教师"
   },
   {
    "word": "tender",
    "phonetic": "'tɛndɚ",
    "pos": "adj.",
    "meaning": "温柔的；柔软的；脆弱的；幼稚的；难对付的；偿付，清偿；看管人；小船；提供，偿还；使…变嫩；是…变柔软；[贸易]投标；变柔软",
    "example": "Continue cooking until the meat is tender.",
    "exampleCn": "把肉一直烧到松软为止。"
   },
   {
    "word": "pervert",
    "phonetic": "pɚ'vɝt",
    "pos": "vt",
    "meaning": "使堕落；滥用；使反常；堕落者；行为反常者；性欲反常者",
    "example": "TV violence perverts the minds of young children.",
    "exampleCn": "电视暴力腐蚀了孩子们的心灵。"
   },
   {
    "word": "idiot",
    "phonetic": "'ɪdɪət",
    "pos": "n.",
    "meaning": "笨蛋，傻瓜；[心理]白痴",
    "example": "Are you an idiot?",
    "exampleCn": "你是一个白痴吗？"
   },
   {
    "word": "forge",
    "phonetic": "fɔrdʒ",
    "pos": "n.",
    "meaning": "熔炉，锻铁炉；铁工厂；伪造；做锻工；伪造；[机]锻造",
    "example": "Someone stole my credit card and forged my signature.",
    "exampleCn": "有人偷了我的信用卡，并假冒我的签名。"
   },
   {
    "word": "conscious",
    "phonetic": "'kɑnʃəs",
    "pos": "adj.",
    "meaning": "意识到的；故意的；神志清醒的",
    "example": "The driver was still conscious when the ambulance arrived.",
    "exampleCn": "救护车赶到时，司机仍然神志清醒。"
   },
   {
    "word": "concise",
    "phonetic": "kən'saɪs",
    "pos": "adj.",
    "meaning": "简明的，简洁的",
    "example": "Your summary should be as clear and concise as possible.",
    "exampleCn": "你的总结应该尽可能地明白简洁。"
   },
   {
    "word": "cartoon",
    "phonetic": "kɑr'tun",
    "pos": "n.",
    "meaning": "卡通片，[电影]动画片；连环漫画",
    "example": "cartoon characters such as Donald Duck",
    "exampleCn": "唐老鸭一类的卡通人物"
   },
   {
    "word": "overtake",
    "phonetic": ",ovɚ'tek",
    "pos": "vt",
    "meaning": "赶上；压倒；突然来袭；超车",
    "example": "He pulled out to overtake the van.",
    "exampleCn": "他把车驶出所在车道想超过那辆小货车。"
   },
   {
    "word": "layout",
    "phonetic": "'leaʊt",
    "pos": "n.",
    "meaning": "布局；设计；安排；陈列",
    "example": "All the flats in the building had the same layout.",
    "exampleCn": "大楼里所有的公寓布局都是一样的。"
   },
   {
    "word": "outdated",
    "phonetic": "'aʊt'detɪd",
    "pos": "adj.",
    "meaning": "过时的；旧式的",
    "example": "outdated teaching methods",
    "exampleCn": "不合时宜的教学方法"
   },
   {
    "word": "sigh",
    "phonetic": "saɪ",
    "pos": "vi",
    "meaning": "叹息，叹气；叹息，叹气；叹息，叹气",
    "example": "‘Well, there’s nothing we can do about it now,’ she sighed.",
    "exampleCn": "“唉，我们现在对此无能为力。”她叹口气说。"
   },
   {
    "word": "consequent",
    "phonetic": "'kɑnsəkwənt",
    "pos": "n.",
    "meaning": "结果；随之发生的；作为结果的",
    "example": "the rise in inflation and consequent fall in demand",
    "exampleCn": "通货膨胀的加剧和随之而来的需求下降"
   },
   {
    "word": "chop",
    "phonetic": "tʃɑp",
    "pos": "n.",
    "meaning": "砍；排骨；削球；商标；砍；剁碎；砍；突然转向",
    "example": "He went outside to chop some more wood for the fire.",
    "exampleCn": "他出去再砍些木材来生火。"
   },
   {
    "word": "exposition",
    "phonetic": ",ɛkspə'zɪʃən",
    "pos": "n.",
    "meaning": "博览会；阐述；展览会",
    "example": "Aristotle was valued because of his clear exposition of rational thought.",
    "exampleCn": "亚里士多德因其对理性思维的清晰阐述而被重视。"
   },
   {
    "word": "outlet",
    "phonetic": "'aʊtlɛt",
    "pos": "n.",
    "meaning": "出口，排放孔；[电]电源插座；[贸易]销路；发泄的方法；批发商店",
    "example": "Her father had found an outlet for his ambition in his work.",
    "exampleCn": "她父亲在工作中找到了施展抱负的途径。"
   },
   {
    "word": "wardrobe",
    "phonetic": "'wɔr'drob",
    "pos": "n.",
    "meaning": "衣柜；行头；全部戏装",
    "example": "Can you hang these in the wardrobe, please?",
    "exampleCn": "请你把这些衣服挂到衣橱里去好吗？"
   },
   {
    "word": "molecule",
    "phonetic": "'mɑlɪkjul",
    "pos": "n.",
    "meaning": "[化学]分子；微小颗粒，微粒",
    "example": "The molecules of oxygen gas contain just two atoms.",
    "exampleCn": "氧分子中只有两个原子。"
   },
   {
    "word": "tablet",
    "phonetic": "'tæblət",
    "pos": "n.",
    "meaning": "碑；[药]药片；写字板；小块",
    "example": "She took a couple of headache tablets .",
    "exampleCn": "她吃了几片头痛药。"
   },
   {
    "word": "observatory",
    "phonetic": "əb'zɝvətɔri",
    "pos": "n.",
    "meaning": "天文台；[气象][天]气象台；瞭望台",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "distinct",
    "phonetic": "dɪ'stɪŋkt",
    "pos": "adj.",
    "meaning": "明显的；独特的；清楚的；有区别的",
    "example": "two entirely distinct languages",
    "exampleCn": "两种完全不同的语言"
   },
   {
    "word": "telex",
    "phonetic": "'tɛlɛks",
    "pos": "n.",
    "meaning": "用户电报；直通专用电传",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "monarchy",
    "phonetic": "'mɑnɚki",
    "pos": "n.",
    "meaning": "君主政体；君主国；君主政治",
    "example": "the abolition of the monarchy",
    "exampleCn": "君主制的废除"
   },
   {
    "word": "negative",
    "phonetic": "'nɛɡətɪv",
    "pos": "adj.",
    "meaning": "[数]负的；消极的；[语]否定的；阴性的；[语]否定；负数；[摄]底片；[语]否定；拒绝",
    "example": "students with a negative attitude to school",
    "exampleCn": "对上学抱消极态度的学生"
   },
   {
    "word": "graze",
    "phonetic": "ɡrez",
    "pos": "vt",
    "meaning": "放牧；擦伤；吃草；擦伤；放牧；轻擦",
    "example": "I fell on the gravel, severely grazing my knee.",
    "exampleCn": "我摔倒在砾石路上，膝盖擦伤得很严重。"
   },
   {
    "word": "starve",
    "phonetic": "stɑrv",
    "pos": "vi",
    "meaning": "饿死；挨饿；渴望；使饿死；使挨饿",
    "example": "Thousands of people will starve if food doesn’t reach the city.",
    "exampleCn": "如果食品不能运到那座城市，成千上万的人就要饿死。"
   },
   {
    "word": "tide",
    "phonetic": "taɪd",
    "pos": "n.",
    "meaning": "趋势，[海洋]潮流；潮汐",
    "example": "Is the tide going out or coming in ?",
    "exampleCn": "现在是退潮还是涨潮？"
   },
   {
    "word": "parasite",
    "phonetic": "'pærəsaɪt",
    "pos": "n.",
    "meaning": "[生物][基医]寄生虫；食客",
    "example": "Kangaroos harbour a vast range of parasites.",
    "exampleCn": "袋鼠身上有各种各样的寄生虫。"
   },
   {
    "word": "layer",
    "phonetic": "'leɪr",
    "pos": "n.",
    "meaning": "层，阶层；地层",
    "example": "He pulled off layer upon layer of clothing (= many layers of clothing ).",
    "exampleCn": "他把衣服一件件地脱掉。"
   },
   {
    "word": "strengthen",
    "phonetic": "'strɛŋθn",
    "pos": "vt",
    "meaning": "加强；巩固；变强；变坚挺",
    "example": "Our friendship has steadily strengthened over the years.",
    "exampleCn": "我们的友谊逐年加深。"
   },
   {
    "word": "vogue",
    "phonetic": "voɡ",
    "pos": "n.",
    "meaning": "时尚；流行，时髦；时髦的，流行的",
    "example": "Suntanning first came into vogue in the mid-1930s.",
    "exampleCn": "晒黑皮肤最早流行于20世纪30年代中期。"
   },
   {
    "word": "nevertheless",
    "phonetic": ",nɛvɚðə'lɛs",
    "pos": "adv.",
    "meaning": "然而，不过；虽然如此；然而，不过",
    "example": "What you said was true. It was, nevertheless, a little unkind.",
    "exampleCn": "你说的都是实话，只不过有点刻薄。"
   },
   {
    "word": "chiche",
    "phonetic": "",
    "pos": "n.",
    "meaning": "陈腐思想，陈词滥调",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "levy",
    "phonetic": "'lɛvi",
    "pos": "n.",
    "meaning": "[税收]征收；征兵，征税；[税收]征收（税等）；征集（兵等）；征税；征兵",
    "example": "...an annual levy on all drivers.",
    "exampleCn": "…向所有司机征收的年税。"
   },
   {
    "word": "encyclopedia",
    "phonetic": "ɪnˌsaɪkləˈpidiɚ",
    "pos": "n.",
    "meaning": "百科全书",
    "example": "the Encyclopedia of Music",
    "exampleCn": "音乐百科全书"
   },
   {
    "word": "drainage",
    "phonetic": "'drenɪdʒ",
    "pos": "n.",
    "meaning": "[农工][建]排水；排水系统；污水；排水面积",
    "example": "A handful of pebbles in the bottom of a flowerpot will help drainage.",
    "exampleCn": "在花盆底下放一把鹅卵石能够帮助排水。"
   },
   {
    "word": "tunnel",
    "phonetic": "'tʌnl",
    "pos": "n.",
    "meaning": "[交]隧道；坑道；洞穴通道；挖；在…打开通道；在…挖掘隧道",
    "example": "a railway tunnel",
    "exampleCn": "铁路隧道"
   },
   {
    "word": "excel",
    "phonetic": "ɪk'sɛl",
    "pos": "vt",
    "meaning": "优于，胜过；擅长",
    "example": "You have excelled yourself with the new exhibition.",
    "exampleCn": "你新办的这次展览特别成功。"
   },
   {
    "word": "circuit",
    "phonetic": "'sɝkɪt",
    "pos": "n.",
    "meaning": "[电子]电路，回路；巡回；一圈；环道；环行",
    "example": "an electrical circuit",
    "exampleCn": "电路"
   },
   {
    "word": "thrust",
    "phonetic": "θrʌst",
    "pos": "n.",
    "meaning": "[力]推力；刺；插；插入；推挤；插入；用向某人刺去；猛然或用力推",
    "example": "He jumped back to avoid another thrust of the knife.",
    "exampleCn": "他往后一闪，躲避再次捅来的一刀。"
   },
   {
    "word": "modify",
    "phonetic": "'mɑdɪfaɪ",
    "pos": "vt",
    "meaning": "修改，修饰；更改；修改",
    "example": "The feedback will be used to modify the course for next year.",
    "exampleCn": "这些反馈意见将用于修改明年的课程。"
   },
   {
    "word": "utmost",
    "phonetic": "'ʌt'most",
    "pos": "n.",
    "meaning": "极限；最大可能；极度的；最远的",
    "example": "It is a matter of the utmost urgency to find out what has happened to these people.",
    "exampleCn": "当务之急是弄清楚这些人出了什么事。"
   },
   {
    "word": "endurance",
    "phonetic": "ɪn'dʊrəns",
    "pos": "n.",
    "meaning": "忍耐力；忍耐；持久；耐久",
    "example": "She was pushed beyond her powers of endurance.",
    "exampleCn": "她被逼得忍无可忍。"
   },
   {
    "word": "mount",
    "phonetic": "maʊnt",
    "pos": "vt",
    "meaning": "增加；爬上；使骑上马；爬；上升；山峰；底座；乘骑用马",
    "example": "Tension here is mounting , as we await the final result.",
    "exampleCn": "我们等待着最终结果，这里的气氛也越来越紧张。"
   },
   {
    "word": "consensus",
    "phonetic": "kən'sɛnsəs",
    "pos": "n.",
    "meaning": "一致；舆论；合意",
    "example": "The EU Council of Finance Ministers failed to reach a consensus on the pace of integration.",
    "exampleCn": "欧盟财政部长会议未能就一体化的进度达成共识。"
   },
   {
    "word": "enforce",
    "phonetic": "ɪn'fɔrs",
    "pos": "vt",
    "meaning": "实施，执行；强迫，强制",
    "example": "Parking restrictions will be strictly enforced.",
    "exampleCn": "停车限制将会严格执行。"
   },
   {
    "word": "tag",
    "phonetic": "tæɡ",
    "pos": "n.",
    "meaning": "标签；名称；结束语；附属物；尾随，紧随；连接；起浑名；添饰；紧随",
    "example": "Staff wore name tags and called inmates by their first names.",
    "exampleCn": "工作人员戴着姓名标签，对同僚直呼其名。"
   },
   {
    "word": "concede",
    "phonetic": "kən'sid",
    "pos": "vt",
    "meaning": "承认；退让；给予，容许；让步",
    "example": "‘That’s the only possible solution.’ ‘Yes, I suppose so,’ Charles conceded.",
    "exampleCn": "“那是唯一可行的解决办法。”“对，我想是。”查尔斯承认道。"
   },
   {
    "word": "grit",
    "phonetic": "ɡrɪt",
    "pos": "vt",
    "meaning": "研磨；在…上铺砂砾；[岩][地质]粗砂，砂砾",
    "example": "If they gave gold medals for grit, Karen would be right up there on the winners' podium.",
    "exampleCn": "如果他们颁发毅力金牌，卡伦应该站在领奖台上。"
   },
   {
    "word": "elevate",
    "phonetic": "'ɛlɪvet",
    "pos": "vt",
    "meaning": "提升；举起；振奋情绪等；提升…的职位",
    "example": "Gradually elevate the patient into anupright position.",
    "exampleCn": "把病人慢慢托到直立的位置。"
   },
   {
    "word": "horizon",
    "phonetic": "hə'raɪzn",
    "pos": "n.",
    "meaning": "[天]地平线；视野；眼界；范围",
    "example": "In the distance, the dot of a boat appeared on the horizon.",
    "exampleCn": "远处小黑点般的一条小船出现在地平线上。"
   },
   {
    "word": "crawl",
    "phonetic": "krɔl",
    "pos": "vi",
    "meaning": "爬行；匍匐行进；爬行；[水产]养鱼池；匍匐而行",
    "example": "We crawled into bed at 2 am.",
    "exampleCn": "我们凌晨两点爬上了床。"
   },
   {
    "word": "mingle",
    "phonetic": "'mɪŋɡl",
    "pos": "vi",
    "meaning": "混合；交往；使混合；使相混",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "substantial",
    "phonetic": "səbˈstænʃəl",
    "pos": "adj.",
    "meaning": "大量的；实质的；内容充实的；本质；重要材料",
    "example": "We have the support of a substantial number of parents.",
    "exampleCn": "我们有相当多家长的支持。"
   },
   {
    "word": "marginal",
    "phonetic": "'mɑrdʒɪnl",
    "pos": "adj.",
    "meaning": "[数]边缘的；临界的；末端的",
    "example": "a marginal increase in the unemployment figures",
    "exampleCn": "失业人数的小幅增加"
   },
   {
    "word": "foresee",
    "phonetic": "fɔr'si",
    "pos": "vt",
    "meaning": "预见；预知",
    "example": "I’ve put your name on the list and I don’t foresee any problems.",
    "exampleCn": "我把你的名字写在名单上了，估计不会有什么问题。"
   },
   {
    "word": "soil",
    "phonetic": "sɔɪl",
    "pos": "n.",
    "meaning": "土地；[土壤]土壤；国家；粪便；务农；温床；弄脏；污辱；变脏",
    "example": "She moistenend  the soil round the plant.",
    "exampleCn": "她把植物周围的土壤弄湿。"
   },
   {
    "word": "awful",
    "phonetic": "'ɔfl",
    "pos": "adj.",
    "meaning": "可怕的，吓人的；糟糕的，糟透的（口语）；庄严的，威严的；十分，极其",
    "example": "The weather was awful.",
    "exampleCn": "天气很糟糕。"
   },
   {
    "word": "regime",
    "phonetic": "re'ʒim",
    "pos": "n.",
    "meaning": "政权，政体；社会制度；管理体制",
    "example": "The regime got rid of most of its opponents.",
    "exampleCn": "该政权清除了大多数反对者。"
   },
   {
    "word": "divine",
    "phonetic": "dɪ'vaɪn",
    "pos": "adj.",
    "meaning": "神圣的；非凡的；天赐的；极好的；占卜；预言；用占卜勘探；占卜；预言；使用占卜勘探矿；牧师；神学家",
    "example": "divine power",
    "exampleCn": "神的力量"
   },
   {
    "word": "assume",
    "phonetic": "ə'sum",
    "pos": "vt",
    "meaning": "承担；假定；采取；呈现；装腔作势；多管闲事",
    "example": "I think we can safely assume (=  it is almost certain  ) that interest rates will go up again soon.",
    "exampleCn": "我想我们几乎可以肯定，利率很快会再次上调。"
   },
   {
    "word": "Easter",
    "phonetic": "istəʳ",
    "pos": "n.",
    "meaning": "复活节",
    "example": "on Easter Sunday",
    "exampleCn": "在复活节星期日"
   },
   {
    "word": "shatter",
    "phonetic": "'ʃætɚ",
    "pos": "vt",
    "meaning": "粉碎；打碎；破坏；破掉；使散开；粉碎；损坏；落叶；碎片；乱七八糟的状态",
    "example": "The explosion shattered the building.",
    "exampleCn": "这次爆炸把大楼炸成一片废墟。"
   },
   {
    "word": "inquire",
    "phonetic": "ɪn'kwaɪr",
    "pos": "vt",
    "meaning": "询问；查究；问明；询问；查究；询价",
    "example": "‘Why are you doing that?’ the boy inquired.",
    "exampleCn": "“你为什么这么做？”男孩问道。"
   },
   {
    "word": "annuity",
    "phonetic": "ə'nuəti",
    "pos": "n.",
    "meaning": "[劳经]年金，养老金；年金保险；年金享受权",
    "example": "He received a paltry annuity of $100.",
    "exampleCn": "他收到了微不足道的100美元年金。"
   },
   {
    "word": "cynical",
    "phonetic": "'sɪnɪkl",
    "pos": "adj.",
    "meaning": "愤世嫉俗的",
    "example": "a cynical view of human nature",
    "exampleCn": "认为人性本恶的一种观点"
   },
   {
    "word": "affix",
    "phonetic": "ə'fɪks",
    "pos": "vt",
    "meaning": "粘上；署名；将罪责加之于；[语]词缀；附加物",
    "example": "We could reprint at a cost of X, or she had found a service that would affix stickers over the price to correct at a cost of X.",
    "exampleCn": "我们可以按成本价格重新印刷，这将花费X，或根据她找到的一种修正服务，可以重新粘贴上正确的价格，这将花费X。"
   },
   {
    "word": "compress",
    "phonetic": "kəm'prɛs",
    "pos": "vt",
    "meaning": "压缩，压紧；精简",
    "example": "Light silk is best for parachutes, as it compresses well and then expands rapidly.",
    "exampleCn": "轻质丝绸最适合制作降落伞，因为这种面料便于压缩，而且展开迅速。"
   },
   {
    "word": "verge",
    "phonetic": "vɝdʒ",
    "pos": "vi",
    "meaning": "濒临，接近；处在边缘；边缘",
    "example": "The car skidded across the road and came to a stop on the grass verge.",
    "exampleCn": "汽车滑过路面，在路缘草带上停了下来。"
   },
   {
    "word": "crumb",
    "phonetic": "krʌm",
    "pos": "n.",
    "meaning": "面包屑，碎屑；少许；弄碎；捏碎",
    "example": "She stood up to brush the crumbs off her uniform.",
    "exampleCn": "她站起来拂去制服上的面包屑。"
   },
   {
    "word": "sustenance",
    "phonetic": "'sʌstənəns",
    "pos": "n.",
    "meaning": "食物；生计；支持",
    "example": "Without sustenance, the animals will soon die.",
    "exampleCn": "没有食物，动物很快就会死亡。"
   },
   {
    "word": "diminish",
    "phonetic": "dɪ'mɪnɪʃ",
    "pos": "vt",
    "meaning": "使减少；使变小；减少，缩小；变小",
    "example": "The party’s share of the electorate has diminished steadily.",
    "exampleCn": "支持这个政党的选民比例持续下降。"
   },
   {
    "word": "itinerary",
    "phonetic": "aɪ'tɪnərɛri",
    "pos": "n.",
    "meaning": "路线，旅程；旅行指南；旅程的；巡回的",
    "example": "The next place on our itinerary was Sedona.",
    "exampleCn": "我们旅行计划的下一站是塞多纳。"
   },
   {
    "word": "array",
    "phonetic": "ə're",
    "pos": "n.",
    "meaning": "数组，阵列；排列，列阵；大批，一系列；衣服；排列，部署；打扮",
    "example": "We visited the local markets and saw wonderful arrays of fruit and vegetables.",
    "exampleCn": "我们参观了当地的市场，看到了漂亮地摆放着的水果蔬菜。"
   },
   {
    "word": "planetarium",
    "phonetic": "'plænə'tɛrɪəm",
    "pos": "n.",
    "meaning": "天文馆",
    "example": "The motions of the stars can be approximated in a planetarium.",
    "exampleCn": "星星的运动可在天文馆里模拟。"
   },
   {
    "word": "gland",
    "phonetic": "ɡlænd",
    "pos": "n.",
    "meaning": "腺",
    "example": "the pituitary gland",
    "exampleCn": "脑垂体腺"
   },
   {
    "word": "exquisite",
    "phonetic": "ɪk'skwɪzɪt",
    "pos": "adj.",
    "meaning": "精致的；细腻的；优美的，高雅的；异常的；剧烈的",
    "example": "the most exquisite craftsmanship",
    "exampleCn": "最精美的工艺"
   },
   {
    "word": "deputy",
    "phonetic": "'dɛpjuti",
    "pos": "n.",
    "meaning": "[法][贸易]代理人，代表；副的；[法][贸易]代理的",
    "example": "His brother was acting as his deputy in America.",
    "exampleCn": "他的兄弟充当他在美洲的代理人。"
   },
   {
    "word": "ridiculous",
    "phonetic": "rɪ'dɪkjələs",
    "pos": "adj.",
    "meaning": "可笑的；荒谬的",
    "example": "That’s a ridiculous idea!",
    "exampleCn": "那主意很荒唐！"
   },
   {
    "word": "reconcile",
    "phonetic": "'rɛkənsaɪl",
    "pos": "vt",
    "meaning": "使一致；使和解；调停，调解；使顺从",
    "example": "Jonah and his youngest son were, on the surface at least, reconciled.",
    "exampleCn": "乔纳和他小儿子和好了，至少表面上如此。"
   },
   {
    "word": "funnel",
    "phonetic": "'fʌnl",
    "pos": "n.",
    "meaning": "[化学]漏斗；烟囱",
    "example": "...a ship with three masts and two funnels.",
    "exampleCn": "…一艘有3根桅杆和2个烟囱的轮船。"
   },
   {
    "word": "shell",
    "phonetic": "ʃɛl",
    "pos": "n.",
    "meaning": "[动][机]壳，贝壳；炮弹；外形；剥落；设定命令行解释器的位置；剥皮；炮轰",
    "example": "They cracked the nuts and removed their shells.",
    "exampleCn": "他们打破坚果并剥掉果壳。"
   },
   {
    "word": "succinct",
    "phonetic": "sək'sɪŋkt",
    "pos": "adj.",
    "meaning": "简洁的；简明的；紧身的",
    "example": "a succinct explanation",
    "exampleCn": "简明扼要的解释"
   },
   {
    "word": "eminent",
    "phonetic": "'ɛmɪnənt",
    "pos": "adj.",
    "meaning": "杰出的；有名的；明显的",
    "example": "an eminent lawyer",
    "exampleCn": "杰出的律师"
   },
   {
    "word": "jam",
    "phonetic": "dʒæm",
    "pos": "v.",
    "meaning": "压紧，夹住，发生故障，塞进；阻塞物",
    "example": "The second time he fired his gun jammed.",
    "exampleCn": "他开第二枪时，枪卡壳了。"
   },
   {
    "word": "terminate",
    "phonetic": "'tɝmɪnet",
    "pos": "vt",
    "meaning": "使终止；使结束；解雇；结束，终止；结果；结束的",
    "example": "The court ruled that the contract must be terminated.",
    "exampleCn": "法庭裁决该合同必须终止。"
   },
   {
    "word": "temporary",
    "phonetic": "'tɛmpə'rɛri",
    "pos": "adj.",
    "meaning": "暂时的，临时的；临时工，临时雇员",
    "example": "temporary pain relief",
    "exampleCn": "疼痛的暂时缓解"
   },
   {
    "word": "rage",
    "phonetic": "redʒ",
    "pos": "n.",
    "meaning": "愤怒；狂暴，肆虐；情绪激动；大怒，发怒；流行，风行",
    "example": "Sobbing with rage, Carol was taken to the hospital.",
    "exampleCn": "卡罗尔气得呜呜哭，被送往医院。"
   },
   {
    "word": "span",
    "phonetic": "spæn",
    "pos": "n.",
    "meaning": "[建]跨度，跨距；范围；跨越；持续；以手指测量",
    "example": "Travellers get from one side to the other by walking across a footbridge that spans a little stream.",
    "exampleCn": "旅游者通过一座横跨小溪的人行桥从一边走到另一边。"
   },
   {
    "word": "dialect",
    "phonetic": "'daɪə'lɛkt",
    "pos": "n.",
    "meaning": "方言，土话；同源语；行话；个人用语特征",
    "example": "the local dialect",
    "exampleCn": "当地方言"
   },
   {
    "word": "proficiency",
    "phonetic": "prə'fɪʃənsi",
    "pos": "n.",
    "meaning": "精通，熟练",
    "example": "I brought her proficiency up to the required level.",
    "exampleCn": "我把她的熟练程度提高到所规定的水平。"
   },
   {
    "word": "pilgrim",
    "phonetic": "'pɪlɡrɪm",
    "pos": "n.",
    "meaning": "朝圣者；漫游者；（美）最初的移民；去朝圣；漫游",
    "example": "pilgrims visiting a holy shrine",
    "exampleCn": "祭拜圣庙的朝圣者"
   },
   {
    "word": "shrink",
    "phonetic": "ʃrɪŋk",
    "pos": "vi",
    "meaning": "收缩；畏缩；使缩小，使收缩；收缩",
    "example": "I’m worried about washing that shirt in case it shrinks.",
    "exampleCn": "我不太敢洗那件衬衫，怕它会缩水。"
   },
   {
    "word": "radius",
    "phonetic": "'redɪəs",
    "pos": "n.",
    "meaning": "[数]半径，半径范围；[解剖]桡骨；辐射光线；有效航程",
    "example": "The shock of the explosion was felt over a radius of forty miles.",
    "exampleCn": "爆炸引起的剧烈震动在方圆40英里内都能感觉得到。"
   },
   {
    "word": "oar",
    "phonetic": "ɔr",
    "pos": "n.",
    "meaning": "桨；橹；桨手；划（船）",
    "example": "Cold worlds shake from the oar.",
    "exampleCn": "冰冷的世界从桨上摇落。"
   },
   {
    "word": "web",
    "phonetic": "wɛb",
    "pos": "n.",
    "meaning": "网；卷筒纸；蹼；织物；圈套",
    "example": "He watched a spider spinning its web.",
    "exampleCn": "他观察一只蜘蛛织网。"
   },
   {
    "word": "diplomat",
    "phonetic": "'dɪpləmæt",
    "pos": "n.",
    "meaning": "外交家",
    "example": "French diplomats",
    "exampleCn": "法国外交官"
   },
   {
    "word": "database",
    "phonetic": "'detəbes",
    "pos": "n.",
    "meaning": "[计]数据库，资料库",
    "example": "customer details held on a database",
    "exampleCn": "存储在数据库内的客户详细信息"
   },
   {
    "word": "standing",
    "phonetic": "'stændɪŋ",
    "pos": "adj.",
    "meaning": "长期的；直立的；固定的；站立；持续；身分；站立；坚持不变；坐落于（stand的ing形式）",
    "example": "You have to pay standing charges whether or not you use the service.",
    "exampleCn": "无论是否使用这项服务，你都必须一直付费。"
   },
   {
    "word": "cellar",
    "phonetic": "'sɛlɚ",
    "pos": "n.",
    "meaning": "[建]地窖；酒窖；地下室",
    "example": "a coal cellar",
    "exampleCn": "煤窖"
   },
   {
    "word": "cooperate",
    "phonetic": "koʊˈɑːpəreɪt",
    "pos": "vi",
    "meaning": "合作，配合；协力",
    "example": "They agreed to co-operate with Brazil on a programme to protect the rain forests.",
    "exampleCn": "他们同意和巴西合作进行一个保护热带雨林的项目。"
   },
   {
    "word": "dictate",
    "phonetic": "'dɪktet",
    "pos": "vt",
    "meaning": "命令；口述；使听写；命令；指示",
    "example": "Federal funds have to be used as dictated by Washington.",
    "exampleCn": "联邦款项得按照华盛顿规定的途径使用。"
   },
   {
    "word": "partisan",
    "phonetic": "'pɑrtəzn",
    "pos": "adj.",
    "meaning": "党派的；效忠的；偏袒的；盲目推崇的；游击队；虔诚信徒；党羽",
    "example": "a media campaign to represent Democrats as angry partisans",
    "exampleCn": "把民主党人描述成愤怒的死硬派的媒体宣传"
   },
   {
    "word": "weed",
    "phonetic": "wid",
    "pos": "vt",
    "meaning": "除草；铲除；[植]杂草，野草；菸草",
    "example": "Caspar was weeding the garden.",
    "exampleCn": "卡斯帕正在给花园除草。"
   },
   {
    "word": "chief",
    "phonetic": "tʃif",
    "pos": "n.",
    "meaning": "首领；酋长；主要部分；首席的；主要的；主任的；主要地；首要地",
    "example": "Most health chiefs believe the reforms have gone too far.",
    "exampleCn": "大多数卫生部领导人都觉得改革搞得过火了。"
   },
   {
    "word": "lap",
    "phonetic": "læp",
    "pos": "n.",
    "meaning": "一圈；膝盖；下摆；山坳；使重叠；拍打；包围；重叠；轻拍；围住",
    "example": "Rubens Barrichello finished a lap ahead of his team-mate.",
    "exampleCn": "鲁本斯·巴里切罗领先队友一圈跑完全程。"
   },
   {
    "word": "surrender",
    "phonetic": "sə'rɛndɚ",
    "pos": "vt",
    "meaning": "使投降；放弃；交出；听任；投降；屈服；自首；投降；放弃；交出；屈服",
    "example": "Germany surrendered on May 7th, 1945.",
    "exampleCn": "德国于 1945 年 5 月 7 日投降。"
   },
   {
    "word": "misconceive",
    "phonetic": ",mɪskən'siv",
    "pos": "vt",
    "meaning": "误解",
    "example": "Since namely namely misconceive, that explanation clear nice.",
    "exampleCn": "既然是个误会，那解释清楚就好了。"
   },
   {
    "word": "fervent",
    "phonetic": "'fɝvənt",
    "pos": "adj.",
    "meaning": "热心的；强烈的；炽热的；热烈的",
    "example": "a fervent appeal for peace",
    "exampleCn": "对和平的强烈呼吁"
   },
   {
    "word": "aisle",
    "phonetic": "aɪl",
    "pos": "n.",
    "meaning": "[建]通道，走道；侧廊",
    "example": "Would you like a window seat or an aisle seat (=  seat next to the aisle  ) ?",
    "exampleCn": "您想要靠窗的座位还是靠过道的座位？"
   },
   {
    "word": "configuration",
    "phonetic": "kən,fɪɡjə'reʃən",
    "pos": "n.",
    "meaning": "配置；结构；外形",
    "example": "...Stonehenge, in southwestern England, an ancient configuration of giant stones.",
    "exampleCn": "…史前巨石柱群，位于英国西南部，是一座古代巨石阵列。"
   },
   {
    "word": "reap",
    "phonetic": "rip",
    "pos": "vt",
    "meaning": "收获，获得；收割；收割，收获",
    "example": "You'll soon begin to reap the benefits of being fitter.",
    "exampleCn": "你很快就会获得身体更健康带来的好处。"
   },
   {
    "word": "missile",
    "phonetic": "'mɪsl",
    "pos": "n.",
    "meaning": "[航][军]导弹；投射物",
    "example": "a nuclear missile",
    "exampleCn": "核导弹"
   },
   {
    "word": "oncoming",
    "phonetic": "'ɔn,kʌmɪŋ",
    "pos": "adj.",
    "meaning": "即将到来的；接近的；新兴的；来临，接近",
    "example": "He crashed into an oncoming car.",
    "exampleCn": "他撞上了一辆迎面驶来的汽车。"
   },
   {
    "word": "mature",
    "phonetic": "mə'tʃʊr",
    "pos": "adj.",
    "meaning": "[农学][地质]成熟的；充分考虑的；到期的；成年人的；[农学][地质]成熟；到期",
    "example": "Laura is very mature for her age .",
    "exampleCn": "相对她的年龄来说劳拉是很成熟的。"
   },
   {
    "word": "occasion",
    "phonetic": "ə'keʒn",
    "pos": "n.",
    "meaning": "时机，机会；场合；理由；引起，惹起",
    "example": "I often think fondly of an occasion some years ago in New Orleans.",
    "exampleCn": "我经常深情地想起一些年前在新奥尔良所发生的一幕。"
   },
   {
    "word": "pretentious",
    "phonetic": "prɪ'tɛnʃəs",
    "pos": "adj.",
    "meaning": "自命不凡的；炫耀的；做作的",
    "example": "a pretentious film",
    "exampleCn": "矫饰的电影"
   },
   {
    "word": "mischance",
    "phonetic": ",mɪs'tʃæns",
    "pos": "n.",
    "meaning": "不幸，不幸的事；灾难",
    "example": "If by some mischance the government get elected again, I think taxes will rise.",
    "exampleCn": "如果不幸这届政府再次当选，我想税收会提高。"
   },
   {
    "word": "conquer",
    "phonetic": "'kɑŋkɚ",
    "pos": "vt",
    "meaning": "战胜，征服；攻克，攻取；胜利；得胜",
    "example": "The Normans conquered England in 1066.",
    "exampleCn": "诺曼人于 1066 年征服英格兰。"
   },
   {
    "word": "nourish",
    "phonetic": "'nɜrɪʃ",
    "pos": "vt",
    "meaning": "滋养；怀有；使健壮",
    "example": "We need to nourish our hopes and dreams.",
    "exampleCn": "我们应该怀有希望和梦想。"
   },
   {
    "word": "tourism",
    "phonetic": "'tʊrɪzəm",
    "pos": "n.",
    "meaning": "旅游业；游览",
    "example": "The country depends on tourism for much of its income.",
    "exampleCn": "该国的大部分收入依靠旅游业。"
   },
   {
    "word": "valuation",
    "phonetic": ",vælju'eʃən",
    "pos": "n.",
    "meaning": "评价，[经管]估价；计算",
    "example": "The property has a valuation of $1.6 billion.",
    "exampleCn": "那处房地产估价为16亿美元。"
   },
   {
    "word": "compromise",
    "phonetic": "'kɑmprəmaɪz",
    "pos": "vt",
    "meaning": "妥协；危害；妥协；让步；妥协，和解；折衷",
    "example": "Compromise is an inevitable part of marriage.",
    "exampleCn": "妥协是婚姻生活中必不可少的。"
   },
   {
    "word": "shield",
    "phonetic": "ʃild",
    "pos": "n.",
    "meaning": "盾；防护物；保护者；遮蔽；包庇；避开；保卫；防御；起保护作用",
    "example": "He used his left hand as a shield against the reflecting sunlight.",
    "exampleCn": "他用左手遮挡反射过来的阳光。"
   },
   {
    "word": "greedy",
    "phonetic": "'gridi",
    "pos": "adj.",
    "meaning": "贪婪的；贪吃的；渴望的",
    "example": "a greedy and selfish society",
    "exampleCn": "一个贪婪自私的社会"
   },
   {
    "word": "diet",
    "phonetic": "'daɪət",
    "pos": "n.",
    "meaning": "[食品]饮食；食物；[医]规定饮食",
    "example": "Lyn always seems to be on a diet.",
    "exampleCn": "琳恩似乎一直在节食。"
   },
   {
    "word": "pigment",
    "phonetic": "'pɪgmənt",
    "pos": "n.",
    "meaning": "[生物][物][生化]色素；[颜料]颜料；给…着色",
    "example": "Melanin is the dark brown pigment of the hair, skin and eyes.",
    "exampleCn": "黑色素是头发、皮肤以及眼睛中的深棕色色素。"
   },
   {
    "word": "ascend",
    "phonetic": "ə'sɛnd",
    "pos": "vi",
    "meaning": "上升；登高；追溯；攀登，上升",
    "example": "The plane ascended rapidly.",
    "exampleCn": "飞机迅速爬升。"
   },
   {
    "word": "sour",
    "phonetic": "'saʊɚ",
    "pos": "adj.",
    "meaning": "[化学]酸的；发酵的；刺耳的；酸臭的；讨厌的；发酵；变酸；厌烦；使变酸；使失望",
    "example": "Rachel sampled the wine. It was sour.",
    "exampleCn": "雷切尔尝了尝葡萄酒，是酸的。"
   },
   {
    "word": "fury",
    "phonetic": "'fjʊri",
    "pos": "n.",
    "meaning": "狂怒；暴怒；激怒者",
    "example": "I was shaking with fury .",
    "exampleCn": "我气得发抖。"
   },
   {
    "word": "guy",
    "phonetic": "gaɪ",
    "pos": "n.",
    "meaning": "男人，家伙；嘲弄，取笑；逃跑",
    "example": "Dave’s a nice guy when you get to know him.",
    "exampleCn": "戴夫是个好人，你了解他后就知道了。"
   },
   {
    "word": "nullify",
    "phonetic": "'nʌlɪ'fai",
    "pos": "vt",
    "meaning": "使无效，作废；取消",
    "example": "Recent inflation could nullify the economic growth of the last several years.",
    "exampleCn": "最近的通货膨胀可能会抵消过去数年的经济增长。"
   },
   {
    "word": "presumption",
    "phonetic": "pri'zʌmpʃən",
    "pos": "n.",
    "meaning": "放肆，傲慢；推测",
    "example": "She was enraged by his presumption.",
    "exampleCn": "她被他的放肆激怒了。"
   },
   {
    "word": "stumble",
    "phonetic": "'stʌmbl",
    "pos": "vi",
    "meaning": "踌躇，蹒跚；失足；犯错；使…困惑；使…绊倒；绊倒；蹒跚而行",
    "example": "In her hurry, she stumbled and spilled the milk all over the floor.",
    "exampleCn": "匆忙中她绊了一下，把牛奶洒得满地都是。"
   },
   {
    "word": "nucleus",
    "phonetic": "'nuklɪəs",
    "pos": "n.",
    "meaning": "[核][天][生物]核，核心；原子核",
    "example": "Neutrons and protons are bound together in the nucleus of an atom.",
    "exampleCn": "在一个原子的核内，中子和质子聚合在一起。"
   },
   {
    "word": "thrive",
    "phonetic": "θraɪv",
    "pos": "vi",
    "meaning": "繁荣，兴旺；茁壮成长",
    "example": "plants that thrive in tropical rain forests",
    "exampleCn": "在热带雨林蓬勃生长的植物"
   },
   {
    "word": "languid",
    "phonetic": "'læŋɡwid",
    "pos": "adj.",
    "meaning": "倦怠的；呆滞的；软弱无力的",
    "example": "He greeted Charles with a languid wave of his hand.",
    "exampleCn": "他无精打采地挥挥手，算是和查尔斯打招呼。"
   },
   {
    "word": "homogeneous",
    "phonetic": ",homə'dʒinɪəs",
    "pos": "adj.",
    "meaning": "[化学]均匀的；[数]齐次的；[生物]同种的",
    "example": "a homogeneous society",
    "exampleCn": "同种族人组成的社会"
   },
   {
    "word": "scant",
    "phonetic": "skænt",
    "pos": "adj.",
    "meaning": "不足的；缺乏的；勉强够的；减少；节省；限制",
    "example": "The story has received scant attention in the press.",
    "exampleCn": "这件事没在报界引起多少注意。"
   },
   {
    "word": "versatile",
    "phonetic": "'vɝsətl",
    "pos": "adj.",
    "meaning": "多才多艺的；通用的，万能的；多面手的",
    "example": "a very versatile performer",
    "exampleCn": "多才多艺的表演者"
   },
   {
    "word": "conspicuous",
    "phonetic": "kən'spɪkjʊəs",
    "pos": "adj.",
    "meaning": "显著的；显而易见的",
    "example": "The notice must be displayed in a conspicuous place.",
    "exampleCn": "通告一定要贴在显眼的地方。"
   },
   {
    "word": "tighten",
    "phonetic": "'taɪtn",
    "pos": "vi",
    "meaning": "绷紧；变紧",
    "example": "Tighten the screws firmly.",
    "exampleCn": "把螺丝拧紧。"
   },
   {
    "word": "haul",
    "phonetic": "hɔl",
    "pos": "n.",
    "meaning": "拖，拉；用力拖拉；努力得到的结果；捕获物；一网捕获的鱼量；拖运距离；[交]拖运；拖拉；拖，拉；改变主意；改变方向",
    "example": "the steam locomotive which hauled the train",
    "exampleCn": "拖动火车的蒸汽机车"
   },
   {
    "word": "rejoice",
    "phonetic": "rɪ'dʒɔɪs",
    "pos": "vi",
    "meaning": "高兴；庆祝；使高兴",
    "example": "Garbo plays the queen, rejoicing in the love she has found with Antonio.",
    "exampleCn": "嘉宝饰演沉浸在与安东尼奥爱情的欣喜中的王后。"
   },
   {
    "word": "comet",
    "phonetic": "'kɑmət",
    "pos": "n.",
    "meaning": "慧星",
    "example": "Halley’s comet",
    "exampleCn": "哈雷彗星"
   },
   {
    "word": "phonetic",
    "phonetic": "fə'nɛtɪk",
    "pos": "adj.",
    "meaning": "语音的，语音学的；音形一致的；发音有细微区别的",
    "example": "a phonetic alphabet",
    "exampleCn": "音标"
   },
   {
    "word": "ambitious",
    "phonetic": "æm'bɪʃəs",
    "pos": "adj.",
    "meaning": "野心勃勃的；有雄心的；热望的；炫耀的",
    "example": "Alfred was intensely ambitious, obsessed with the idea of becoming rich.",
    "exampleCn": "艾尔弗雷德雄心勃勃，一心想着发财。"
   },
   {
    "word": "abnormal",
    "phonetic": "æbˈnɔːrml",
    "pos": "adj.",
    "meaning": "反常的，不规则的；变态的",
    "example": "abnormal behaviour",
    "exampleCn": "反常行为"
   },
   {
    "word": "maneuver",
    "phonetic": "mə'nʊvɚ; mə'njʊvɚ",
    "pos": "n.",
    "meaning": "[军]机动；演习；策略；调遣；[军]机动；演习；调遣；用计谋；[军]机动；演习；用计；调遣",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "primitive",
    "phonetic": "'prɪmətɪv",
    "pos": "adj.",
    "meaning": "[数][生物][地质]原始的，远古的；简单的，粗糙的；[数][生物][地质]原始人",
    "example": "a primitive society",
    "exampleCn": "原始社会"
   },
   {
    "word": "valve",
    "phonetic": "vælv",
    "pos": "n.",
    "meaning": "[机]阀；[解剖]瓣膜；真空管；活门",
    "example": "heart valves",
    "exampleCn": "心脏瓣膜"
   },
   {
    "word": "vanity",
    "phonetic": "'vænəti",
    "pos": "n.",
    "meaning": "虚荣心；空虚；浮华；无价值的东西",
    "example": "Sabrina had none of the vanity so often associated with beautiful women.",
    "exampleCn": "萨布里娜没有一点漂亮女人经常会有的那种虚荣。"
   },
   {
    "word": "reception",
    "phonetic": "rɪ'sɛpʃən",
    "pos": "n.",
    "meaning": "接待；接收；招待会；感受；反应",
    "example": "It’s an ideal location for a wedding reception .",
    "exampleCn": "这里是举办喜宴的理想地点。"
   },
   {
    "word": "cordial",
    "phonetic": "'kɔrdʒəl",
    "pos": "adj.",
    "meaning": "热忱的，诚恳的；兴奋的；补品；兴奋剂；甜香酒，甘露酒",
    "example": "The talks were conducted in a cordial atmosphere.",
    "exampleCn": "会谈在友好的气氛中进行。"
   },
   {
    "word": "noxious",
    "phonetic": "'nɑkʃəs",
    "pos": "adj.",
    "meaning": "有害的；有毒的；败坏道德的；讨厌的",
    "example": "noxious fumes",
    "exampleCn": "有毒烟雾"
   },
   {
    "word": "reimburse",
    "phonetic": ",riɪm'bɝs",
    "pos": "vt",
    "meaning": "偿还；赔偿",
    "example": "I'll be happy to reimburse you for any expenses you've had.",
    "exampleCn": "我很乐意报销你的所有花费。"
   },
   {
    "word": "exacerbate",
    "phonetic": "ɪɡ'zæsɚbet",
    "pos": "vt",
    "meaning": "使加剧；使恶化；激怒",
    "example": "The recession has exacerbated this problem.",
    "exampleCn": "经济衰退使这个问题更加严重。"
   },
   {
    "word": "object",
    "phonetic": "'ɑbdʒɛkt",
    "pos": "n.",
    "meaning": "目标；物体；客体；[语]宾语；反对；拒绝",
    "example": "an everyday object such as a spoon",
    "exampleCn": "调羹之类的日常用品"
   },
   {
    "word": "palpitate",
    "phonetic": "'pælpə'tet",
    "pos": "vi",
    "meaning": "发抖；（心脏）悸动；跳动",
    "example": "He felt suddenly faint, and his heart began to palpitate.",
    "exampleCn": "他突然感到晕厥，心脏也开始悸动。"
   },
   {
    "word": "tick",
    "phonetic": "tɪk",
    "pos": "n.",
    "meaning": "滴答声；扁虱；记号；赊欠；发出滴答声；标以记号",
    "example": "I’ll be with you in a tick (= soon ) .",
    "exampleCn": "我马上就来。"
   },
   {
    "word": "certificate",
    "phonetic": "sɚˈtɪfɪkɪt; (for v.,) sɚˈtɪfɪˌket",
    "pos": "n.",
    "meaning": "[管理]证书；执照，文凭",
    "example": "a degree certificate",
    "exampleCn": "学位证书"
   },
   {
    "word": "exploit",
    "phonetic": "ɪk'splɔɪt",
    "pos": "vt",
    "meaning": "开发，开拓；剥削；开采；勋绩；功绩",
    "example": "Homeworkers can easily be exploited by employers.",
    "exampleCn": "在家工作的人容易被雇主剥削。"
   },
   {
    "word": "vigilant",
    "phonetic": "'vɪdʒələnt",
    "pos": "adj.",
    "meaning": "警惕的；警醒的；注意的；警戒的",
    "example": "Please remain vigilant at all times and report anything suspicious.",
    "exampleCn": "请时刻保持警惕，有可疑情况随时报告。"
   },
   {
    "word": "grand",
    "phonetic": "ɡrænd",
    "pos": "adj.",
    "meaning": "宏伟的；豪华的；极重要的；大钢琴；一千美元",
    "example": "the Grand Hotel",
    "exampleCn": "格兰大酒店"
   },
   {
    "word": "congress",
    "phonetic": "'kɑŋɡrəs",
    "pos": "n.",
    "meaning": "国会；代表大会；会议；社交",
    "example": "a congress of the ruling Labor Party",
    "exampleCn": "执政党工党的代表大会"
   },
   {
    "word": "academic",
    "phonetic": ",ækə'dɛmɪk",
    "pos": "adj.",
    "meaning": "学术的；理论的；学院的；大学生，大学教师；学者",
    "example": "He possessed no academic qualifications.",
    "exampleCn": "他没有学历。"
   },
   {
    "word": "correspond",
    "phonetic": ",kɔrə'spɑnd",
    "pos": "vi",
    "meaning": "符合，一致；相应；通信",
    "example": "The two halves of the document did not correspond.",
    "exampleCn": "这份文件的前后两部分不相符。"
   },
   {
    "word": "passive",
    "phonetic": "'pæsɪv",
    "pos": "adj.",
    "meaning": "被动的，消极的；被动语态的",
    "example": "Kathy seems to take a very passive role in the relationship.",
    "exampleCn": "凯茜在这一关系中似乎扮演着十分被动的角色。"
   },
   {
    "word": "discord",
    "phonetic": "'dɪskɔrd",
    "pos": "n.",
    "meaning": "[声]不和；不调和；嘈杂声；不一致；刺耳",
    "example": "marital discord",
    "exampleCn": "婚姻不和"
   },
   {
    "word": "defer",
    "phonetic": "dɪ'fɝ",
    "pos": "vi",
    "meaning": "推迟；延期；服从；使推迟；使延期",
    "example": "The committee deferred their decision .",
    "exampleCn": "委员会延期作出决定。"
   },
   {
    "word": "gloomy",
    "phonetic": "'ɡlumi",
    "pos": "adj.",
    "meaning": "黑暗的；沮丧的；阴郁的",
    "example": "Anne dismissed these gloomy thoughts from her mind.",
    "exampleCn": "安妮抛开了心里这些沮丧的念头。"
   },
   {
    "word": "fanatic",
    "phonetic": "fə'nætɪk",
    "pos": "n.",
    "meaning": "狂热入迷者；盲信者；盲信；狂热的；盲信的",
    "example": "fanatics who represent a real danger to democracy",
    "exampleCn": "对民主构成很大威胁的狂热分子"
   },
   {
    "word": "trick",
    "phonetic": "trɪk",
    "pos": "n.",
    "meaning": "诡计；恶作剧；窍门；花招；骗局；欺诈；欺骗；哄骗；装饰；打扮；哄骗；戏弄；[电影]特技的；欺诈的；有决窍的",
    "example": "Pretending he doesn’t remember is an old trick of his.",
    "exampleCn": "假装不记得是他的老花招了。"
   },
   {
    "word": "abandon",
    "phonetic": "ə'bændən",
    "pos": "n.",
    "meaning": "狂热；放任；遗弃；放弃",
    "example": "How could she abandon her own child?",
    "exampleCn": "她怎么能抛弃自己的孩子？"
   },
   {
    "word": "therapy",
    "phonetic": "'θɛrəpi",
    "pos": "n.",
    "meaning": "治疗，[临床]疗法",
    "example": "new drug therapies",
    "exampleCn": "新的药物疗法"
   },
   {
    "word": "forfeit",
    "phonetic": "'fɔrfət",
    "pos": "n.",
    "meaning": "[金融]罚金；[法]没收物；丧失的东西；因受罚而丧失的；被没收的；（因犯罪、失职、违约等）丧失（权利、名誉、生命等）",
    "example": "By being absent from the trial, he forfeited the right to appeal.",
    "exampleCn": "因缺席审判，他丧失了上诉权。"
   },
   {
    "word": "execution",
    "phonetic": ",ɛksɪ'kjuʃən",
    "pos": "n.",
    "meaning": "[计]执行，实行；完成；死刑",
    "example": "a public execution",
    "exampleCn": "当众处死"
   },
   {
    "word": "majority",
    "phonetic": "mə'dʒɔrəti",
    "pos": "n.",
    "meaning": "多数；成年",
    "example": "The Labour Party won a huge majority at the last general election.",
    "exampleCn": "工党在上次大选中以巨大的票数优势获胜。"
   },
   {
    "word": "fertile",
    "phonetic": "ˈfɝtəl; (canadian) ˈfɝˌtaɪl",
    "pos": "adj.",
    "meaning": "富饶的，肥沃的；[植]能生育的；肥沃，多产",
    "example": "800 acres of fertile cropland",
    "exampleCn": "800英亩的肥沃耕地"
   },
   {
    "word": "treatment",
    "phonetic": "'tritmənt",
    "pos": "n.",
    "meaning": "[临床]治疗，疗法；处理；对待",
    "example": "Just lately, Kyra has been giving me the silent treatment (= refusing to speak to me because she is angry with me ) .",
    "exampleCn": "就在最近，凯拉一直对我不理不睬。"
   },
   {
    "word": "coin",
    "phonetic": "kɔɪn",
    "pos": "vt",
    "meaning": "铸造（货币）；杜撰，创造；硬币，钱币",
    "example": "Toss a coin to see who goes first.",
    "exampleCn": "抛硬币决定谁先来。"
   },
   {
    "word": "vertical",
    "phonetic": "'vɝtɪkl",
    "pos": "adj.",
    "meaning": "[测]垂直的，直立的；[解剖][天]头顶的，顶点的；[数]垂直线，垂直面",
    "example": "a vertical line",
    "exampleCn": "垂直线"
   },
   {
    "word": "erroneous",
    "phonetic": "ɪ'ronɪəs",
    "pos": "adj.",
    "meaning": "错误的；不正确的",
    "example": "His economic predictions are based on some erroneous assumptions.",
    "exampleCn": "他的经济预测是基于错误假设之上的。"
   },
   {
    "word": "alloy",
    "phonetic": "'ælɔɪ",
    "pos": "n.",
    "meaning": "[材]合金",
    "example": "Brass is an alloy of copper and zinc.",
    "exampleCn": "黄铜是铜和锌的合金。"
   },
   {
    "word": "feasible",
    "phonetic": "'fizəbl",
    "pos": "adj.",
    "meaning": "可行的；可能的；可实行的",
    "example": "a feasible solution",
    "exampleCn": "可行的解决方法"
   },
   {
    "word": "collide",
    "phonetic": "kə'laɪd",
    "pos": "vi",
    "meaning": "碰撞；抵触，冲突",
    "example": "The aims of the negotiators in New York again seem likely to collide with the aims of the warriors in the field.",
    "exampleCn": "纽约谈判者的目标看起来可能再次与战场上勇士们的目标相冲突。"
   },
   {
    "word": "triangle",
    "phonetic": "'traɪæŋɡl",
    "pos": "n.",
    "meaning": "[数][昆][测]三角（形）；三角关系；三角形之物；三人一组",
    "example": "a triangle of land",
    "exampleCn": "一块三角地"
   },
   {
    "word": "innumerable",
    "phonetic": "ɪ'nʊmərəbl",
    "pos": "adj.",
    "meaning": "无数的，数不清的",
    "example": "She’s served on innumerable committees.",
    "exampleCn": "她在多个委员会担任委员。"
   },
   {
    "word": "holocaust",
    "phonetic": "'hɑləkɔst",
    "pos": "n.",
    "meaning": "大屠杀；毁灭",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "dawn",
    "phonetic": "dɔn",
    "pos": "n.",
    "meaning": "[天]黎明；开端；破晓；出现；被领悟",
    "example": "When dawn broke (= the first light of the day appeared ) , we were still 50 miles from Calcutta.",
    "exampleCn": "破晓的时候，我们离加尔各答还有50英里。"
   },
   {
    "word": "adverse",
    "phonetic": "ædˈvɚs, ˈædˌvɚs",
    "pos": "adj.",
    "meaning": "不利的；相反的；[植]敌对的（名词adverseness，副词adversely）",
    "example": "They fear it could have an adverse effect on global financial markets.",
    "exampleCn": "他们担心这会对全球金融市场产生不利影响。"
   },
   {
    "word": "prescription",
    "phonetic": "prɪ'skrɪpʃən",
    "pos": "n.",
    "meaning": "[医]药方；指示；惯例",
    "example": "We are trying to cut the price of prescription drugs .",
    "exampleCn": "我们正努力降低处方药的价格。"
   },
   {
    "word": "notorious",
    "phonetic": "no'tɔrɪəs",
    "pos": "adj.",
    "meaning": "声名狼藉的，臭名昭著的",
    "example": "a notorious computer hacker",
    "exampleCn": "声名狼藉的电脑黑客"
   },
   {
    "word": "obnoxious",
    "phonetic": "əb'nɑkʃəs",
    "pos": "adj.",
    "meaning": "讨厌的；可憎的；不愉快的",
    "example": "She’s really obnoxious.",
    "exampleCn": "她这人真讨厌。"
   },
   {
    "word": "desperate",
    "phonetic": "'dɛspərət",
    "pos": "adj.",
    "meaning": "不顾一切的；令人绝望的；极度渴望的",
    "example": "I had no money left and was desperate.",
    "exampleCn": "我身无分文，已经走投无路了。"
   },
   {
    "word": "reign",
    "phonetic": "ren",
    "pos": "vi",
    "meaning": "统治；支配；盛行；君临；统治；统治时期；支配",
    "example": "George VI reigned from 1936 to 1952.",
    "exampleCn": "乔治六世于1936年至1952年在位。"
   },
   {
    "word": "lane",
    "phonetic": "len",
    "pos": "n.",
    "meaning": "[交]车道；小巷；[航][水运]航线",
    "example": "a quiet country lane",
    "exampleCn": "一条宁静的乡间小路"
   },
   {
    "word": "cruise",
    "phonetic": "krʊz",
    "pos": "vi",
    "meaning": "巡航，巡游；漫游；巡航，巡游；漫游",
    "example": "We were cruising along at 50 miles per hour.",
    "exampleCn": "我们以每小时50英里的速度平稳行驶。"
   },
   {
    "word": "fastidious",
    "phonetic": "fæ'stɪdɪəs",
    "pos": "adj.",
    "meaning": "挑剔的；苛求的，难取悦的；（微生物等）需要复杂营养地",
    "example": "people who are fastidious about personal hygiene",
    "exampleCn": "十分讲究个人卫生的人"
   },
   {
    "word": "expertise",
    "phonetic": "'ɛkspɝ'tiz",
    "pos": "n.",
    "meaning": "专门知识；专门技术；专家的意见",
    "example": "She was not an accountant and didn't have the expertise to verify all of the financial details.",
    "exampleCn": "她不是会计，不具有核查所有这些财政细目的专业知识。"
   },
   {
    "word": "restless",
    "phonetic": "'rɛstləs",
    "pos": "adj.",
    "meaning": "焦躁不安的；不安宁的；得不到满足的",
    "example": "After a few weeks in Marseille, I grew restless and decided to move on.",
    "exampleCn": "在马赛住了几星期后，我开始待不住了，决定换个地方。"
   },
   {
    "word": "undo",
    "phonetic": "ʌn'du",
    "pos": "vt",
    "meaning": "取消；解开；破坏；扰乱；撤消",
    "example": "The screws can be undone by hand.",
    "exampleCn": "这些螺丝可以用手拧开。"
   },
   {
    "word": "courier",
    "phonetic": "'kʊrɪɚ",
    "pos": "n.",
    "meaning": "导游；情报员，通讯员；送快信的人",
    "example": "...a motorcycle courier.",
    "exampleCn": "…一名骑摩托车的信使。"
   },
   {
    "word": "grab",
    "phonetic": "ɡræb",
    "pos": "vt",
    "meaning": "攫取；霸占；将…深深吸引；攫取；夺取；攫取；霸占；夺取之物",
    "example": "I grabbed my bag and ran off.",
    "exampleCn": "我抓起我的包就跑。"
   },
   {
    "word": "frantic",
    "phonetic": "'fræntɪk",
    "pos": "adj.",
    "meaning": "狂乱的，疯狂的",
    "example": "A bird had been locked in and was by now quite frantic.",
    "exampleCn": "一只鸟被关了起来，到现在它都非常狂躁。"
   },
   {
    "word": "yacht",
    "phonetic": "jɑt",
    "pos": "n.",
    "meaning": "游艇，[船]快艇；轻舟",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "doze",
    "phonetic": "doz",
    "pos": "vi",
    "meaning": "打瞌睡；假寐；瞌睡",
    "example": "Grandad was dozing in his chair.",
    "exampleCn": "爷爷在椅子上打瞌睡。"
   },
   {
    "word": "relapse",
    "phonetic": "rɪ'læps",
    "pos": "n.",
    "meaning": "[医]复发，再发；故态复萌；回复原状",
    "example": "She had a relapse and died soon after.",
    "exampleCn": "她旧病复发，不久就去世了。"
   },
   {
    "word": "contact",
    "phonetic": "'kɑntækt",
    "pos": "n.",
    "meaning": "[电][电子]接触，联系；联系，[电][电子]接触",
    "example": "Does that metal pit after contact with acid?",
    "exampleCn": "那种金属同酸接触后是否会起凹点?"
   },
   {
    "word": "astound",
    "phonetic": "ə'staʊnd",
    "pos": "vt",
    "meaning": "使惊骇；使震惊",
    "example": "If we did all the things we are capable of, we would literally astound ourselves.",
    "exampleCn": "如果我们所做的都是我们擅长的事情，我们最终将使自己大吃一惊。"
   },
   {
    "word": "ostensible",
    "phonetic": "ɑ'stɛnsəbl",
    "pos": "adj.",
    "meaning": "表面的；假装的",
    "example": "The ostensible purpose of these meetings was to gather information on financial strategies.",
    "exampleCn": "这些会议声称旨在收集金融策略方面的信息。"
   },
   {
    "word": "equal",
    "phonetic": "'ikwəl",
    "pos": "adj.",
    "meaning": "[数]平等的；相等的；胜任的；等于；比得上；对手；匹敌；同辈；[数]相等的事物",
    "example": "Two plus two equals four.",
    "exampleCn": "二加二等于四。"
   },
   {
    "word": "terminal",
    "phonetic": "ˈtɜːrmɪnl",
    "pos": "n.",
    "meaning": "末端；[交]终点；[计]终端机；极限；[动]末端的；[交]终点的；晚期的",
    "example": "the airport’s passenger terminal",
    "exampleCn": "机场航站楼"
   },
   {
    "word": "fall",
    "phonetic": "fɔl",
    "pos": "vi",
    "meaning": "落下；变成；来临；减弱；[气象]下降；秋天；瀑布；砍倒；击倒；秋天的",
    "example": "The tree was about to fall.",
    "exampleCn": "那棵树快要倒下了。"
   },
   {
    "word": "alleviate",
    "phonetic": "ə'livɪ'et",
    "pos": "vt",
    "meaning": "减轻，缓和",
    "example": "measures to alleviate poverty",
    "exampleCn": "扶贫措施"
   },
   {
    "word": "sociable",
    "phonetic": "'soʃəbl",
    "pos": "adj.",
    "meaning": "社交的；好交际的；友善的；联谊会",
    "example": "a pleasant, sociable couple",
    "exampleCn": "一对和善且喜欢与人交往的夫妇"
   },
   {
    "word": "wholesome",
    "phonetic": "'holsəm",
    "pos": "adj.",
    "meaning": "健全的；有益健康的；合乎卫生的；审慎的",
    "example": "good wholesome fun",
    "exampleCn": "健康有益的娱乐"
   },
   {
    "word": "cube",
    "phonetic": "kjʊb",
    "pos": "n.",
    "meaning": "[数]立方；立方体；骰子",
    "example": "a sugar cube",
    "exampleCn": "一块方糖"
   },
   {
    "word": "provoke",
    "phonetic": "prə'vok",
    "pos": "vt",
    "meaning": "驱使；激怒；煽动；惹起",
    "example": "The novel has provoked fierce debate in the US.",
    "exampleCn": "那部小说在美国引发了激烈的争论。"
   },
   {
    "word": "acquire",
    "phonetic": "ə'kwaɪr",
    "pos": "vt",
    "meaning": "获得；取得；学到；捕获",
    "example": "Manning hoped to acquire valuable works of art as cheaply as possible.",
    "exampleCn": "曼宁希望以尽可能低的价格买到有价值的艺术品。"
   },
   {
    "word": "resemble",
    "phonetic": "rɪ'zɛmbl",
    "pos": "vt",
    "meaning": "类似，像",
    "example": "It’s amazing how closely Brian and Steve resemble each other.",
    "exampleCn": "布赖恩和史蒂夫真是惊人地相像。"
   },
   {
    "word": "coherent",
    "phonetic": "ko'hɪrənt",
    "pos": "adj.",
    "meaning": "[植]连贯的，一致的；明了的；清晰的；凝聚性的；互相偶合的；粘在一起的",
    "example": "The three years of the course are planned as a coherent whole.",
    "exampleCn": "这三年的课程是作为连贯的整体来安排的。"
   },
   {
    "word": "margin",
    "phonetic": "'mɑrdʒən",
    "pos": "n.",
    "meaning": "[心理]边缘；[会计]利润，余裕；[印刷]页边的空白",
    "example": "the western margin of southern Africa",
    "exampleCn": "非洲南部的西隅"
   },
   {
    "word": "depart",
    "phonetic": "dɪ'pɑrt",
    "pos": "vi",
    "meaning": "离开；出发，起程；违反；去世",
    "example": "Flights by Air Europe depart Gatwick on Tuesdays.",
    "exampleCn": "欧洲航空公司的航班每逢周二从盖特威克机场起飞。"
   },
   {
    "word": "mode",
    "phonetic": "mod",
    "pos": "n.",
    "meaning": "模式；方式；风格；时尚",
    "example": "Set the monitor to 256 colour mode.",
    "exampleCn": "把显示器调成256色彩模式。"
   },
   {
    "word": "preliminary",
    "phonetic": "prɪ'lɪmɪnɛri",
    "pos": "n.",
    "meaning": "准备；预赛；初步措施；初步的；开始的；预备的",
    "example": "the preliminary stages of the competition",
    "exampleCn": "竞赛的预赛阶段"
   },
   {
    "word": "intrinsic",
    "phonetic": "ɪn'trɪnsɪk",
    "pos": "adj.",
    "meaning": "[物][生物]本质的，固有的",
    "example": "the intrinsic interest of the subject",
    "exampleCn": "该话题本身的趣味"
   },
   {
    "word": "enclose",
    "phonetic": "ɪn'kloz",
    "pos": "vt",
    "meaning": "围绕；装入；放入封套",
    "example": "The pool area is enclosed by a six-foot wall.",
    "exampleCn": "游泳区用六英尺高的高墙围了起来。"
   },
   {
    "word": "entail",
    "phonetic": "ɪn'tel",
    "pos": "vt",
    "meaning": "必需，使承担；限定继承",
    "example": "A new computer system entails a lot of re-training.",
    "exampleCn": "使用新的计算机系统需要大量的再培训。"
   },
   {
    "word": "heart",
    "phonetic": "hɑrt",
    "pos": "n.",
    "meaning": "[内科][解剖]心脏；感情；勇气；心形；要点；鼓励；铭记",
    "example": "Regular exercise is good for the heart.",
    "exampleCn": "经常锻炼对心脏有好处。"
   },
   {
    "word": "positive",
    "phonetic": "'pɑzətɪv",
    "pos": "adj.",
    "meaning": "[电]积极的；[摄][物][数]正的，[化学][医]阳性的；确定的，肯定的；实际的，真实的；绝对的",
    "example": "We need to take positive steps to improve the situation of families in poverty.",
    "exampleCn": "我们需要采取积极措施来改善贫困家庭的状况。"
   },
   {
    "word": "collapse",
    "phonetic": "kə'læps",
    "pos": "vi",
    "meaning": "倒塌；瓦解；暴跌；使倒塌，使崩溃；使萎陷；倒塌；失败；衰竭",
    "example": "Uncle Ted’s chair collapsed under his weight.",
    "exampleCn": "椅子承受不了特德叔叔的重量，塌架了。"
   },
   {
    "word": "statesman",
    "phonetic": "'stetsmən",
    "pos": "n.",
    "meaning": "政治家；国务活动家",
    "example": "a respected elder statesman",
    "exampleCn": "一位受人尊敬的政界元老"
   },
   {
    "word": "jeer",
    "phonetic": "dʒɪr",
    "pos": "n.",
    "meaning": "嘲笑；戏弄；揶揄的言语；嘲笑；戏弄；嘲笑；戏弄",
    "example": "‘You know I’m right!’ she jeered.",
    "exampleCn": "“你知道我是对的！”她嘲笑道。"
   },
   {
    "word": "sack",
    "phonetic": "sæk",
    "pos": "n.",
    "meaning": "麻布袋；洗劫；解雇；把……装入袋；劫掠",
    "example": "They’ve never actually given anyone the sack .",
    "exampleCn": "他们从未真的辞退过什么人。"
   },
   {
    "word": "narcotic",
    "phonetic": "nɑr'kɑtɪk",
    "pos": "adj.",
    "meaning": "[药]麻醉的；有麻醉作用的；催眠的；[药]麻醉药；镇静剂；起麻醉作用的事物",
    "example": "The truth of Johnson’s comment was recently brought home to me by the serene calm of a resident who was treating a particularly complicated narcotic-dependent patient.",
    "exampleCn": "最近，一位住院医生对待一位异常复杂的麻醉药依赖病人的平静态度让我领会到了塞缪尔.约翰逊这句话的真谛。"
   },
   {
    "word": "ponder",
    "phonetic": "'pɑndɚ",
    "pos": "vt",
    "meaning": "仔细考虑；衡量；考虑；沉思",
    "example": "He continued to ponder the problem as he walked home.",
    "exampleCn": "他一边往家走一边继续思考那个问题。"
   },
   {
    "word": "argue",
    "phonetic": "'ɑrgjʊ",
    "pos": "vi",
    "meaning": "争论，辩论；提出理由；辩论，争论；证明；说服",
    "example": "She argued the case for changing the law.",
    "exampleCn": "她提出论据，力主修改法律。"
   },
   {
    "word": "sound",
    "phonetic": "saʊnd",
    "pos": "vt",
    "meaning": "听（诊）；测量，测…深；使发声；试探；宣告；[声]声音，语音；噪音；海峡；吵闹；听力范围；[医]探条；健全的，健康的；合理的；可靠的；有效彻底的；彻底地，充分地；听起来；发出声音；回响；测深",
    "example": "a sound understanding of money and banking systems",
    "exampleCn": "对货币和银行业体制的透彻理解"
   },
   {
    "word": "irrigation",
    "phonetic": "ˌɪrɪˈɡeʃn",
    "pos": "n.",
    "meaning": "[农工]灌溉；[临床]冲洗；冲洗法",
    "example": "Rivers and lakes provide us with water transport and irrigation.",
    "exampleCn": "江河湖泽给我们以舟楫和灌溉之利。"
   },
   {
    "word": "despair",
    "phonetic": "dɪ'spɛr",
    "pos": "n.",
    "meaning": "绝望；令人绝望的人或事；绝望，丧失信心",
    "example": "The noise from the neighbours used to drive him to despair .",
    "exampleCn": "过去，邻居的噪音常常吵得他心烦意乱。"
   },
   {
    "word": "dentist",
    "phonetic": "'dɛntɪst",
    "pos": "n.",
    "meaning": "牙科医生",
    "example": "Visit your dentist twice a year for a checkup.",
    "exampleCn": "每年看两次牙医做检查。"
   },
   {
    "word": "focus",
    "phonetic": "'fokəs",
    "pos": "n.",
    "meaning": "[光][数]焦点；中心；清晰；焦距；使集中；[光][摄]使聚焦；集中；[光][摄]聚焦；调节焦距",
    "example": "His eyes were focussed straight ahead.",
    "exampleCn": "他的双眼盯着正前方。"
   },
   {
    "word": "inundate",
    "phonetic": "'ɪnʌndet",
    "pos": "vt",
    "meaning": "淹没；泛滥；浸水；（洪水般的）扑来",
    "example": "The tidal wave inundated vast areas of cropland.",
    "exampleCn": "海啸淹没了大片农田。"
   },
   {
    "word": "cherish",
    "phonetic": "'tʃɛrɪʃ",
    "pos": "vt",
    "meaning": "珍爱；怀抱",
    "example": "He genuinely loved and cherished her.",
    "exampleCn": "他真爱并珍惜过她。"
   },
   {
    "word": "pointless",
    "phonetic": "'pɔɪntləs",
    "pos": "adj.",
    "meaning": "无意义的；钝的；不尖的；不得要领的",
    "example": "Life just seemed pointless to me.",
    "exampleCn": "生活对我来说简直没什么意义。"
   },
   {
    "word": "rhetoric",
    "phonetic": "'rɛtərɪk",
    "pos": "n.",
    "meaning": "[语]修辞，修辞学；华丽的词藻；花言巧语的",
    "example": "...the noble institutions of political life, such as political rhetoric, public office, and public service.",
    "exampleCn": "…政治生活中令人尊崇的机制，诸如政治修辞艺术、政府机构以及公益服务。"
   },
   {
    "word": "humanity",
    "phonetic": "hjʊ'mænəti",
    "pos": "n.",
    "meaning": "[人类]人类；人道；仁慈；人文学科",
    "example": "We want a clean healthy environment for all humanity .",
    "exampleCn": "我们希望全人类拥有一个干净健康的生存环境。"
   },
   {
    "word": "disgust",
    "phonetic": "dɪs'ɡʌst",
    "pos": "n.",
    "meaning": "厌恶，嫌恶；使厌恶；使作呕",
    "example": "He reached into the bin with a look of disgust on his face.",
    "exampleCn": "他把手伸进垃圾箱，脸上带着厌恶的表情。"
   },
   {
    "word": "wager",
    "phonetic": "'weidʒə",
    "pos": "n.",
    "meaning": "赌注；赌博；赌物；打赌；下赌注",
    "example": "There have been various wagers on certain candidates since the senator announced his retirement.",
    "exampleCn": "自从那位参议员宣布引退之后，对某些候选人的打赌猜测纷纷出现。"
   },
   {
    "word": "promise",
    "phonetic": "'prɑmɪs",
    "pos": "n.",
    "meaning": "许诺，允诺；希望；允诺，许诺；给人以…的指望或希望",
    "example": "The post office has promised to resume first class mail delivery to the area on Friday.",
    "exampleCn": "邮局已承诺在星期五恢复该地区第一类邮件的递送。"
   },
   {
    "word": "aspiration",
    "phonetic": "'æspə'reʃən",
    "pos": "n.",
    "meaning": "渴望；抱负；呼气；吸引术",
    "example": "a high level of political aspiration",
    "exampleCn": "崇高的政治抱负"
   },
   {
    "word": "fee",
    "phonetic": "fi",
    "pos": "n.",
    "meaning": "[会计]费用；[劳经]酬金；小费",
    "example": "You can use the gym and pool for a fee of £35 a month.",
    "exampleCn": "月付35英镑，即可使用健身房和游泳池。"
   },
   {
    "word": "fault",
    "phonetic": "fɔlt",
    "pos": "n.",
    "meaning": "故障；[地质]断层；错误；缺点；毛病；（网球等）发球失误；弄错；产生断层；（通常用于疑问句或否定句）挑剔",
    "example": "I’m really sorry - it’s all my fault.",
    "exampleCn": "我真的很抱歉——都是我的错。"
   },
   {
    "word": "envy",
    "phonetic": "'ɛnvi",
    "pos": "n.",
    "meaning": "嫉妒，妒忌；羡慕；嫉妒，妒忌；羡慕",
    "example": "I really envy you and Ian, you seem so happy together.",
    "exampleCn": "我真是羡慕你和伊恩，你俩在一起看起来多幸福。"
   },
   {
    "word": "yield",
    "phonetic": "jild",
    "pos": "vt",
    "meaning": "[力]屈服；出产；放弃；[力]屈服，投降；[经]产量；收益",
    "example": "Our research has only recently begun to yield important results.",
    "exampleCn": "直到最近我们的研究才开始取得重要成果。"
   },
   {
    "word": "erratic",
    "phonetic": "ɪ'rætɪk",
    "pos": "adj.",
    "meaning": "不稳定的；古怪的；漂泊无定的人；古怪的人",
    "example": "His breathing was becoming erratic.",
    "exampleCn": "他的呼吸越来越不均匀。"
   },
   {
    "word": "intent",
    "phonetic": "ɪn'tɛnt",
    "pos": "n.",
    "meaning": "意图；目的；含义；专心的；急切的；坚决的",
    "example": "his intent gaze",
    "exampleCn": "他专注的凝视"
   },
   {
    "word": "steak",
    "phonetic": "stek",
    "pos": "n.",
    "meaning": "牛排；肉排；鱼排",
    "example": "...fresh salmon steaks.",
    "exampleCn": "…新鲜的三文鱼排。"
   },
   {
    "word": "clan",
    "phonetic": "klæn",
    "pos": "n.",
    "meaning": "宗族；部落；集团",
    "example": "the Campbell clan",
    "exampleCn": "坎贝尔家族"
   },
   {
    "word": "anthropology",
    "phonetic": "'ænθrə'pɑlədʒi",
    "pos": "n.",
    "meaning": "[人类]人类学",
    "example": "\"In anthropology, you can't equate third gender with homosexuality,\" he said.",
    "exampleCn": "“在人类学中，你不能将同性恋和第三性别混同，”他说。"
   },
   {
    "word": "credible",
    "phonetic": "'krɛdəbl",
    "pos": "adj.",
    "meaning": "可靠的，可信的",
    "example": "Her excuse was barely credible.",
    "exampleCn": "她的借口无法让人信服。"
   },
   {
    "word": "spotlight",
    "phonetic": "'spɑtlaɪt",
    "pos": "n.",
    "meaning": "[电]聚光灯；反光灯；公众注意的中心",
    "example": "The yard was lit by three huge spotlights.",
    "exampleCn": "院子里亮着三盏巨大的聚光灯。"
   },
   {
    "word": "lag",
    "phonetic": "læɡ",
    "pos": "n.",
    "meaning": "落后；迟延；防护套；囚犯；桶板；落后于；押往监狱；加上外套；[电子]滞后；缓缓而行；蹒跚；最后的",
    "example": "Western banks still lag behind financial institutions in most other regions of the country.",
    "exampleCn": "西部地区的银行仍然落后于这个国家其他大部分地区的金融机构。"
   },
   {
    "word": "piston",
    "phonetic": "'pɪstən",
    "pos": "n.",
    "meaning": "[机]活塞",
    "example": "Filling the cylinder with steam pushes the piston out.",
    "exampleCn": "填充汽缸的蒸汽将活塞推出。"
   },
   {
    "word": "comment",
    "phonetic": "'kɑmɛnt",
    "pos": "n.",
    "meaning": "评论；意见；批评；发表评论；发表意见",
    "example": "He was fined for making abusive comments to the referee.",
    "exampleCn": "他因谩骂裁判而被罚款。"
   },
   {
    "word": "metabolism",
    "phonetic": "mɛ'tæbəlɪzəm",
    "pos": "n.",
    "meaning": "新陈代谢",
    "example": "This drug speeds up your metabolism.",
    "exampleCn": "这种药物会加快你的新陈代谢。"
   },
   {
    "word": "inclination",
    "phonetic": "'ɪnklə'neʃən",
    "pos": "n.",
    "meaning": "倾向，爱好；斜坡",
    "example": "My natural inclination was to say no.",
    "exampleCn": "我生性爱说“不”。"
   },
   {
    "word": "mackintosh",
    "phonetic": "'mækɪntɒʃ",
    "pos": "n.",
    "meaning": "(英国英语)雨衣；苹果计算机的一种型号",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "appendix",
    "phonetic": "ə'pɛndɪks",
    "pos": "n.",
    "meaning": "[图情]附录；阑尾；附加物",
    "example": "Christine had to go into hospital to have her appendix out (=  have it removed  ) .",
    "exampleCn": "克里丝蒂娜不得不去医院切除阑尾。"
   },
   {
    "word": "cathedral",
    "phonetic": "kə'θidrəl",
    "pos": "n.",
    "meaning": "大教堂",
    "example": "St Paul’s Cathedral",
    "exampleCn": "圣保罗大教堂"
   },
   {
    "word": "assorted",
    "phonetic": "ə'sɔrtəd",
    "pos": "adj.",
    "meaning": "组合的；各种各样的；混杂的",
    "example": "paintbrushes in assorted sizes",
    "exampleCn": "各种大小的画笔"
   },
   {
    "word": "possession",
    "phonetic": "pə'zɛʃən",
    "pos": "n.",
    "meaning": "拥有；财产；领地；自制；着迷",
    "example": "That information is not in our possession.",
    "exampleCn": "那则信息不归我们所有。"
   },
   {
    "word": "width",
    "phonetic": "wɪdθ",
    "pos": "n.",
    "meaning": "[数]宽度；广度",
    "example": "a covered terrace extending the full width of the house",
    "exampleCn": "和房子同宽的有顶露台"
   },
   {
    "word": "variation",
    "phonetic": ",vɛrɪ'eʃən",
    "pos": "n.",
    "meaning": "变化；[生物]变异，变种",
    "example": "Most of his poems are variations on the theme of love.",
    "exampleCn": "他的大部分诗作都是有关爱情主题的形式不同的作品。"
   },
   {
    "word": "commemorate",
    "phonetic": "kə'mɛməret",
    "pos": "vt",
    "meaning": "庆祝，纪念；成为…的纪念",
    "example": "a parade to commemorate the town’s bicentenary",
    "exampleCn": "庆祝该镇建立200周年的游行"
   },
   {
    "word": "mosaic",
    "phonetic": "mo'zeɪk",
    "pos": "n.",
    "meaning": "[建]马赛克；[细胞][遗]镶嵌；镶嵌细工",
    "example": "rooms decorated with wall paintings and mosaics",
    "exampleCn": "用壁画和马赛克装饰的房间"
   },
   {
    "word": "misdeed",
    "phonetic": ",mɪs'did",
    "pos": "n.",
    "meaning": "罪行；犯罪",
    "example": "He now repents of his past misdeeds.",
    "exampleCn": "他现在对自己过去犯下的种种恶行感到懊悔。"
   },
   {
    "word": "mitigate",
    "phonetic": "'mɪtɪɡet",
    "pos": "vt",
    "meaning": "使缓和，使减轻；减轻，缓和下来",
    "example": "...ways of mitigating the effects of an explosion.",
    "exampleCn": "…减轻爆炸后果的方法。"
   },
   {
    "word": "mesh",
    "phonetic": "mɛʃ",
    "pos": "n.",
    "meaning": "网眼；网丝；圈套；[机]啮合；以网捕捉",
    "example": "The windows were covered in wire mesh to keep out flies.",
    "exampleCn": "窗户上装了铁丝纱网，防止苍蝇飞入。"
   },
   {
    "word": "float",
    "phonetic": "flot",
    "pos": "vt",
    "meaning": "使漂浮；实行；浮动；飘动，散播；摇摆；付诸实施；彩车，花车；漂流物；浮舟；浮萍",
    "example": "We stood and watched the Carnival floats drive past.",
    "exampleCn": "我们站着观看狂欢节彩车经过。"
   },
   {
    "word": "illuminate",
    "phonetic": "ɪ'lumɪnet",
    "pos": "vt",
    "meaning": "阐明，说明；照亮；使灿烂；用灯装饰；照亮",
    "example": "A single candle illuminated his face.",
    "exampleCn": "一支蜡烛照亮了他的脸。"
   },
   {
    "word": "quarry",
    "phonetic": "'kwɔri",
    "pos": "n.",
    "meaning": "[矿业]采石场；猎物；来源；挖出；努力挖掘",
    "example": "a slate quarry",
    "exampleCn": "板岩采石场"
   },
   {
    "word": "compound",
    "phonetic": "'kɑmpaʊnd",
    "pos": "vt",
    "meaning": "合成；混合；和解妥协；搀合；和解；妥协；[化学]化合物；混合物；[生物]复合词；[生物]复合的；混合的",
    "example": "man-made organic compounds",
    "exampleCn": "人造有机化合物"
   },
   {
    "word": "confuse",
    "phonetic": "kən'fjʊz",
    "pos": "vt",
    "meaning": "使混乱；使困惑",
    "example": "People might well confuse the two products.",
    "exampleCn": "人们很容易混淆这两种产品。"
   },
   {
    "word": "dean",
    "phonetic": "din",
    "pos": "n.",
    "meaning": "(大学)院长，系主任，教务长",
    "example": "the admissions dean",
    "exampleCn": "招生主任"
   },
   {
    "word": "gossip",
    "phonetic": "'ɡɑsɪp",
    "pos": "n.",
    "meaning": "小道传闻；随笔；爱说长道短的人；闲聊；传播流言蜚语",
    "example": "What’s the latest gossip ?",
    "exampleCn": "最近有些什么传闻？"
   },
   {
    "word": "succumb",
    "phonetic": "sə'kʌm",
    "pos": "vi",
    "meaning": "屈服；死；被压垮",
    "example": "Don't succumb to the temptation to have just one cigarette.",
    "exampleCn": "不要屈服于只抽一支烟的诱惑。"
   },
   {
    "word": "obsess",
    "phonetic": "əb'sɛs",
    "pos": "vt",
    "meaning": "迷住，缠住；使…着迷；使…困扰",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "distraction",
    "phonetic": "dɪ'strækʃən",
    "pos": "n.",
    "meaning": "注意力分散；消遣；心烦意乱",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "miscarriage",
    "phonetic": "'mɪskærɪdʒ",
    "pos": "n.",
    "meaning": "[妇产]流产；失败；误送",
    "example": "She had two miscarriages before she had her first child.",
    "exampleCn": "她生第一个孩子之前流产了两次。"
   },
   {
    "word": "dormant",
    "phonetic": "'dɔrmənt",
    "pos": "adj.",
    "meaning": "休眠的；静止的；睡眠状态的；隐匿的",
    "example": "a huge dormant volcano",
    "exampleCn": "一座巨大的休眠火山"
   },
   {
    "word": "economy",
    "phonetic": "ɪ'kɑnəmi",
    "pos": "n.",
    "meaning": "经济；[经]节约；理财",
    "example": "a successful economy",
    "exampleCn": "发展成功的经济"
   },
   {
    "word": "aesthetic",
    "phonetic": "ɛs'θɛtɪk",
    "pos": "adj.",
    "meaning": "美的；美学的；审美的，具有审美趣味的",
    "example": "From an esthetic point of view, it’s a nice design.",
    "exampleCn": "从美学角度看，这是个不错的设计。"
   },
   {
    "word": "facility",
    "phonetic": "fə'sɪləti",
    "pos": "n.",
    "meaning": "设施；设备；容易；灵巧",
    "example": "What recreational facilities are now available?",
    "exampleCn": "什么娱乐设施现在是可用的？"
   },
   {
    "word": "armour",
    "phonetic": "'ɑmɚ",
    "pos": "n.",
    "meaning": "盔甲；装甲；护面",
    "example": "a knight wearing a suit of armour",
    "exampleCn": "全身披挂的骑士"
   },
   {
    "word": "hamper",
    "phonetic": "'hæmpɚ",
    "pos": "vt",
    "meaning": "妨碍；束缚；使困累；食盒，食篮；阻碍物",
    "example": "She tried to run, but was hampered by her heavy suitcase.",
    "exampleCn": "她想跑，但沉重的旅行箱拖累了她。"
   },
   {
    "word": "commitment",
    "phonetic": "kə'mɪtmənt",
    "pos": "n.",
    "meaning": "承诺，保证；委托；承担义务；献身",
    "example": "Are you ready to make a long-term commitment ?",
    "exampleCn": "你是否准备好作出长久的承诺？"
   },
   {
    "word": "professional",
    "phonetic": "prə'fɛʃənl",
    "pos": "adj.",
    "meaning": "专业的；职业的；职业性的；[管理]专业人员；职业运动员",
    "example": "This business plan looks very professional.",
    "exampleCn": "这个商业计划看上去很有专业水平。"
   },
   {
    "word": "attack",
    "phonetic": "ə'tæk",
    "pos": "n.",
    "meaning": "[军]攻击；抨击；疾病发作；[军]攻击；抨击；动手干；[军]攻击；腐蚀",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "exasperate",
    "phonetic": "ɪɡ'zæspəret",
    "pos": "vt",
    "meaning": "恶化；使恼怒；激怒",
    "example": "It exasperates me to hear comments like that.",
    "exampleCn": "听到那样的评论令我恼怒。"
   },
   {
    "word": "trial",
    "phonetic": "'traɪəl",
    "pos": "n.",
    "meaning": "[试验]试验；审讯；努力；磨炼；[试验]试验的；审讯的",
    "example": "The trial is due to start next week.",
    "exampleCn": "审理定于下周开始。"
   },
   {
    "word": "mess",
    "phonetic": "mɛs",
    "pos": "n.",
    "meaning": "混乱；食堂，伙食团；困境；脏乱的东西；弄乱，弄脏；毁坏；使就餐；把事情弄糟；制造脏乱；玩弄",
    "example": "What a mess!",
    "exampleCn": "太乱了！"
   },
   {
    "word": "tear",
    "phonetic": "(for v.) ˈter; (for n.) ˈtir",
    "pos": "vt",
    "meaning": "撕破，撕裂；折磨；使分裂；使精神不安；撕破；被撕破；飞奔",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "dose",
    "phonetic": "dos",
    "pos": "n.",
    "meaning": "[药][核]剂量；一剂，一服；服药；给药；给…服药",
    "example": "I quite like Jamie in small doses (= in limited amounts but not a lot or often ) .",
    "exampleCn": "如果偶尔在一起的话，我还是蛮喜欢杰米的。"
   },
   {
    "word": "dreadful",
    "phonetic": "'drɛdfəl",
    "pos": "adj.",
    "meaning": "可怕的；糟透的，令人不快的",
    "example": "We’ve had some dreadful weather lately.",
    "exampleCn": "最近我们这里的天气糟透了。"
   },
   {
    "word": "maternal",
    "phonetic": "mə'tɝnl",
    "pos": "adj.",
    "meaning": "[生物]母亲的；母性的；母系的；母体遗传的",
    "example": "Annie was wonderfully warm and maternal.",
    "exampleCn": "安妮非常亲切慈爱。"
   },
   {
    "word": "feeble",
    "phonetic": "'fibl",
    "pos": "adj.",
    "meaning": "微弱的，无力的；虚弱的；薄弱的",
    "example": "His voice sounded feeble and far away.",
    "exampleCn": "他的声音听上去既无力又遥远。"
   },
   {
    "word": "depression",
    "phonetic": "dɪ'prɛʃən",
    "pos": "n.",
    "meaning": "沮丧；[地理]洼地；[经]不景气；忧愁",
    "example": "He never forgot the hardships he witnessed during the Great Depression of the 1930s.",
    "exampleCn": "他从未忘记20世纪30年代经济大萧条时期他所目睹的艰辛。"
   },
   {
    "word": "sparse",
    "phonetic": "spɑrs",
    "pos": "adj.",
    "meaning": "稀疏的；稀少的",
    "example": "his sparse brown hair",
    "exampleCn": "他那稀疏的棕色头发"
   },
   {
    "word": "polish",
    "phonetic": "'pɑlɪʃ",
    "pos": "n.",
    "meaning": "[机]磨光，擦亮；上光剂，擦亮剂；优雅，精良；[机]磨光，使发亮；波兰的",
    "example": "I spent all afternoon polishing the silver.",
    "exampleCn": "我整个下午都在擦拭银器。"
   },
   {
    "word": "trim",
    "phonetic": "trɪm",
    "pos": "vt",
    "meaning": "修剪；整理；装点；削减；修剪；整齐；情形；整齐的",
    "example": "trim suburban gardens",
    "exampleCn": "修剪齐整的郊区花园"
   },
   {
    "word": "massacre",
    "phonetic": "'mæsəkɚ",
    "pos": "vt",
    "meaning": "残杀；彻底击败；大屠杀；惨败",
    "example": "the only survivor of the massacre",
    "exampleCn": "这场大屠杀的唯一幸存者"
   },
   {
    "word": "waver",
    "phonetic": "'wevɚ",
    "pos": "vi",
    "meaning": "摇曳；踌躇；摆动；动摇；踌躇；挥动者",
    "example": "Her voice wavered uncertainly.",
    "exampleCn": "她吞吞吐吐的。"
   },
   {
    "word": "decrepit",
    "phonetic": "dɪ'krɛpɪt",
    "pos": "adj.",
    "meaning": "衰老的；破旧的",
    "example": "The buildings were in a decrepit state.",
    "exampleCn": "这些建筑物破旧不堪。"
   },
   {
    "word": "mortgage",
    "phonetic": "'mɔrɡɪdʒ",
    "pos": "vt",
    "meaning": "[经]抵押；[经]抵押",
    "example": "At this point, such claims have no bearing on the mortgage or housing crisis; they have bearing only on the holders of these securities themselves.",
    "exampleCn": "从这一点上来说，这些贷款凭证与抵押贷款或住房危机没有任何关系，他们只与拥有这些证券的持有者有关。"
   },
   {
    "word": "hypothesis",
    "phonetic": "haɪ'pɑθəsɪs",
    "pos": "n.",
    "meaning": "假设",
    "example": "One hypothesis is that the victim fell asleep while driving.",
    "exampleCn": "一种假设是受害人开车时睡着了。"
   },
   {
    "word": "all",
    "phonetic": "ɔl",
    "pos": "adj.",
    "meaning": "全部的；全然地；越发；全部",
    "example": "You shouldn’t be sitting here by yourself, all alone.",
    "exampleCn": "你不应该一个人孤零零地坐在这儿。"
   },
   {
    "word": "finance",
    "phonetic": "'faɪnæns",
    "pos": "n.",
    "meaning": "[财政]财政，财政学；[金融]金融；筹措资金",
    "example": "leasing and other forms of business finance",
    "exampleCn": "租赁及其他商业金融形式"
   },
   {
    "word": "take",
    "phonetic": "tek",
    "pos": "vt",
    "meaning": "拿，取；采取；吃；接受；拿；获得",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "legislate",
    "phonetic": "'lɛdʒɪslet",
    "pos": "vi",
    "meaning": "立法；制定法律",
    "example": "Most member countries have already legislated against excessive overtime.",
    "exampleCn": "大部分成员国已经立法禁止过度加班。"
   },
   {
    "word": "permeate",
    "phonetic": "'pɝmɪet",
    "pos": "vt",
    "meaning": "渗透，透过；弥漫；弥漫；透入；散布",
    "example": "The smell of diesel oil permeated the air.",
    "exampleCn": "空气里充斥着柴油的气味。"
   },
   {
    "word": "cavity",
    "phonetic": "'kævəti",
    "pos": "n.",
    "meaning": "[解剖]腔；洞，凹处",
    "example": "Put herbs inside the body cavity of the fish.",
    "exampleCn": "把香草放进鱼肚里。"
   },
   {
    "word": "definite",
    "phonetic": "'dɛfɪnət",
    "pos": "adj.",
    "meaning": "确切的，明确的",
    "example": "It’s impossible for me to give you a definite answer.",
    "exampleCn": "我不可能给你明确的答复。"
   },
   {
    "word": "skeleton",
    "phonetic": "'skɛlɪtn",
    "pos": "n.",
    "meaning": "[测][建]骨架，[解剖]骨骼；纲要；骨瘦如柴的人；[解剖]骨骼的；骨瘦如柴的；概略的",
    "example": "We agreed on a skeleton outline of the proposal.",
    "exampleCn": "我们给提案商定了一个基本框架。"
   },
   {
    "word": "quarterly",
    "phonetic": "'kwɔrtɚli",
    "pos": "adj.",
    "meaning": "季度的；季刊",
    "example": "We publish a quarterly journal.",
    "exampleCn": "我们出版一份季刊。"
   },
   {
    "word": "textile",
    "phonetic": "'tɛkstaɪl",
    "pos": "n.",
    "meaning": "[纺]纺织品，织物；[纺]纺织的",
    "example": "Their main exports are textiles, especially silk and cotton.",
    "exampleCn": "他们的主要出口商品是纺织品，尤其是丝绸和棉布。"
   },
   {
    "word": "conception",
    "phonetic": "kən'sɛpʃən",
    "pos": "n.",
    "meaning": "[妇产]怀孕；概念；设想；开始",
    "example": "the original conception of the book",
    "exampleCn": "此书最初的构想"
   },
   {
    "word": "jury",
    "phonetic": "'dʒʊri",
    "pos": "adj.",
    "meaning": "应急的",
    "example": "the members of the jury",
    "exampleCn": "陪审团成员"
   },
   {
    "word": "murmur",
    "phonetic": "'mɝmɚ",
    "pos": "n.",
    "meaning": "低语；低语声；低声抱怨；潺潺声；低声说",
    "example": "The wind murmured through the trees.",
    "exampleCn": "风在林间低语。"
   },
   {
    "word": "virus",
    "phonetic": "'vaɪrəs",
    "pos": "n.",
    "meaning": "[病毒]病毒；恶毒；毒害",
    "example": "children infected with the Aids virus",
    "exampleCn": "感染艾滋病病毒的儿童"
   },
   {
    "word": "gasp",
    "phonetic": "ɡæsp",
    "pos": "vi",
    "meaning": "喘气；喘息；渴望；气喘吁吁地说；喘着气说话；喘气",
    "example": "‘My leg!’ he gasped. ‘I think it’s broken!’",
    "exampleCn": "“我的腿！”他倒抽一口气喊道，“我觉得腿断了！”"
   },
   {
    "word": "fatal",
    "phonetic": "'fetl",
    "pos": "adj.",
    "meaning": "[生物][医]致命的；重大的；毁灭性的；命中注定的",
    "example": "potentially fatal diseases",
    "exampleCn": "潜在致命的疾病"
   },
   {
    "word": "altitude",
    "phonetic": "'æltɪtud",
    "pos": "n.",
    "meaning": "高地；高度；[数]顶垂线；（等级和地位等的）高级",
    "example": "The aircraft had reached its cruising altitude of about 39,000 feet.",
    "exampleCn": "那架飞机已经达到了大约三万九千英尺的巡航高度。"
   },
   {
    "word": "outdo",
    "phonetic": ",aʊt'du",
    "pos": "vt",
    "meaning": "超过；胜过",
    "example": "When it comes to speed of response, a small firm can outdo a big company.",
    "exampleCn": "说到反应速度，小公司会胜过大公司。"
   },
   {
    "word": "opinion",
    "phonetic": "ə'pɪnjən",
    "pos": "n.",
    "meaning": "意见；主张",
    "example": "When choosing an insurance policy it’s best to get an independent opinion.",
    "exampleCn": "选择保险时，最好听听专家的独立意见。"
   },
   {
    "word": "decay",
    "phonetic": "dɪ'ke",
    "pos": "vi",
    "meaning": "衰退，[核]衰减；腐烂，[木]腐朽；衰退，[核]衰减；腐烂，[木]腐朽；使腐烂，使腐败；使衰退，使衰落",
    "example": "Her body was already starting to decay.",
    "exampleCn": "她的尸体已经开始腐烂。"
   },
   {
    "word": "audit",
    "phonetic": "'ɔdɪt",
    "pos": "vi",
    "meaning": "审计；[审计]查帐；（美）旁听",
    "example": "the annual audit",
    "exampleCn": "年度审计"
   },
   {
    "word": "forthcoming",
    "phonetic": ",fɔrθ'kʌmɪŋ",
    "pos": "adj.",
    "meaning": "即将来临的；来临",
    "example": "the forthcoming elections",
    "exampleCn": "即将到来的选举"
   },
   {
    "word": "anthology",
    "phonetic": "æn'θɑlədʒi",
    "pos": "n.",
    "meaning": "（诗、文、曲、画等的）[图情]选集",
    "example": "an anthology of American literature",
    "exampleCn": "美国文学选集"
   },
   {
    "word": "yarn",
    "phonetic": "jɑn",
    "pos": "n.",
    "meaning": "[纺]纱线；奇谈，故事；讲故事",
    "example": "The old captain would often spin (= tell ) us a yarn about life aboard ship.",
    "exampleCn": "老船长经常会给我们讲一些船上生活的奇闻轶事。"
   },
   {
    "word": "plaintive",
    "phonetic": "'plentɪv",
    "pos": "adj.",
    "meaning": "哀伤的；悲哀的",
    "example": "They lay on the firm sands, listening to the plaintive cry of the seagulls.",
    "exampleCn": "他们躺在坚实的沙滩上，听着海鸥的哀鸣。"
   },
   {
    "word": "misrepresent",
    "phonetic": ",mɪs,rɛprɪ'zɛnt",
    "pos": "vt",
    "meaning": "歪曲，误传；不合适地代表",
    "example": "These statistics grossly misrepresent the reality.",
    "exampleCn": "这些统计资料严重歪曲了实际情况。"
   },
   {
    "word": "warranty",
    "phonetic": "'wɔrənti",
    "pos": "n.",
    "meaning": "[贸易]保证；[法]担保；授权；（正当）理由",
    "example": "a three-year warranty",
    "exampleCn": "三年的保修期"
   },
   {
    "word": "rigorous",
    "phonetic": "'rɪɡərəs",
    "pos": "adj.",
    "meaning": "严格的，严厉的；严密的；严酷的",
    "example": "a rigorous analysis of defence needs",
    "exampleCn": "对国防需求的缜密分析"
   },
   {
    "word": "auxiliary",
    "phonetic": "ɔːɡ'zɪlɪəri",
    "pos": "n.",
    "meaning": "助动词；辅助者，辅助物；附属机构；辅助的；副的；附加的",
    "example": "an auxiliary nurse",
    "exampleCn": "助理护士"
   },
   {
    "word": "terse",
    "phonetic": "tɝs",
    "pos": "adj.",
    "meaning": "简洁的，精练的，扼要的",
    "example": "Derek’s terse reply ended the conversation.",
    "exampleCn": "德里克的简短回答结束了谈话。"
   },
   {
    "word": "orchard",
    "phonetic": "'ɔrtʃɚd",
    "pos": "n.",
    "meaning": "[园艺]果园；果树林",
    "example": "a cherry orchard",
    "exampleCn": "樱桃园"
   },
   {
    "word": "dissertation",
    "phonetic": "'dɪsɚ'teʃən",
    "pos": "n.",
    "meaning": "论文，专题；学术演讲",
    "example": "He is currently writing a dissertation on the Somali civil war.",
    "exampleCn": "他正在写一篇关于索马里内战的论文。"
   },
   {
    "word": "vivid",
    "phonetic": "'vɪvɪd",
    "pos": "adj.",
    "meaning": "生动的；鲜明的；鲜艳的",
    "example": "I’ve got vivid memories of that summer.",
    "exampleCn": "我对那年夏天记忆犹新。"
   },
   {
    "word": "grumble",
    "phonetic": "'ɡrʌmbl",
    "pos": "vi",
    "meaning": "抱怨；嘟囔；怨言；喃喃地说出",
    "example": "‘This is boring,’ Kathleen grumbled.",
    "exampleCn": "“这真无聊。”凯瑟琳抱怨道。"
   },
   {
    "word": "phenomenon",
    "phonetic": "fə'nɑmɪnən",
    "pos": "n.",
    "meaning": "[物]现象；奇迹；杰出的人才",
    "example": "Homelessness is not a new phenomenon .",
    "exampleCn": "无家可归已不是什么新现象。"
   },
   {
    "word": "rally",
    "phonetic": "'ræli",
    "pos": "vi",
    "meaning": "团结；重整；恢复；（网球等）连续对打；团结；集合；恢复健康、力量等；集会；回复；公路赛车会",
    "example": "About 1,000 people attended the rally in Hyde Park.",
    "exampleCn": "大约有1,000人参加了海德公园的集会。"
   },
   {
    "word": "ceramic",
    "phonetic": "sə'ræmɪk",
    "pos": "adj.",
    "meaning": "[陶瓷]陶瓷的；陶器的；制陶艺术的；[陶瓷]陶瓷；陶瓷制品",
    "example": "This takes a little while to switch all of your plastic storage containers over to ceramic, glass or stainless steel but its definitely worthwhile.",
    "exampleCn": "把你所有的塑料存储容器换成陶瓷的，玻璃的，或者不锈钢的你会浪费你一点时间。 但这绝对是值得的。"
   },
   {
    "word": "tongue",
    "phonetic": "tʌŋ",
    "pos": "n.",
    "meaning": "舌头；语言；舔；斥责；用舌吹；说话；吹管乐器",
    "example": "Joe ran his tongue over his dry lips.",
    "exampleCn": "乔舔了舔干燥的嘴唇。"
   },
   {
    "word": "initiative",
    "phonetic": "ɪ'nɪʃətɪv",
    "pos": "n.",
    "meaning": "主动权；首创精神；主动的；自发的；起始的",
    "example": "I wish my son would show more initiative.",
    "exampleCn": "我希望我的儿子能表现得再主动一些。"
   },
   {
    "word": "formula",
    "phonetic": "'fɔrmjələ",
    "pos": "n.",
    "meaning": "[数]公式，准则；[化工]配方；婴儿食品",
    "example": "the formula for calculating distance",
    "exampleCn": "计算距离的公式"
   },
   {
    "word": "incipient",
    "phonetic": "ɪn'sɪpɪənt",
    "pos": "adj.",
    "meaning": "初期的；[生物]初始的；起初的；发端的",
    "example": "a sign of incipient madness",
    "exampleCn": "精神失常的早期征兆"
   },
   {
    "word": "coincidence",
    "phonetic": "ko'ɪnsɪdəns",
    "pos": "n.",
    "meaning": "巧合；一致；同时发生",
    "example": "‘I’m going to Appleby tomorrow.’ ‘ What a coincidence ! I’m going there too.’",
    "exampleCn": "“明天我要去阿普尔比。”“太巧了！我也要去那里。”"
   },
   {
    "word": "envisage",
    "phonetic": "ɪn'vɪzɪdʒ",
    "pos": "vt",
    "meaning": "正视，面对；想像",
    "example": "The scheme cost a lot more than we had originally envisaged.",
    "exampleCn": "该计划的花费大大超出了我们最初所预想的数额。"
   },
   {
    "word": "precaution",
    "phonetic": "prɪ'kɔʃən",
    "pos": "n.",
    "meaning": "预防，警惕；预防措施；警惕；预先警告",
    "example": "Fire precautions were neglected.",
    "exampleCn": "防火措施被忽视了。"
   },
   {
    "word": "challenge",
    "phonetic": "'tʃælɪndʒ",
    "pos": "n.",
    "meaning": "挑战；怀疑",
    "example": "They threw down the challenge that he couldn’t wash 40 cars in one hour (= invited him to try to do it ) .",
    "exampleCn": "他们激将他，说他不可能在1小时内擦洗40辆汽车。"
   },
   {
    "word": "annihilate",
    "phonetic": "ə'naɪəlet",
    "pos": "vt",
    "meaning": "歼灭；战胜；废止；湮灭；湮没",
    "example": "Just one of these bombs could annihilate a city the size of New York.",
    "exampleCn": "这种炸弹只要一颗就能彻底毁灭纽约那么大的一座城市。"
   },
   {
    "word": "addict",
    "phonetic": "'ædɪkt (for n.); əˈdɪkt (for v.)",
    "pos": "v.",
    "meaning": "使沉迷，使嗜好",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "conservative",
    "phonetic": "kən'sɝvətɪv",
    "pos": "adj.",
    "meaning": "保守的；保守派，守旧者",
    "example": "a very conservative attitude to education",
    "exampleCn": "对待教育非常守旧的态度"
   },
   {
    "word": "edge",
    "phonetic": "ɛdʒ",
    "pos": "n.",
    "meaning": "[地质]边缘；优势；刀刃；锋利",
    "example": "Put the eggs in the centre of the dish, with the vegetables and herbs around the edge.",
    "exampleCn": "把鸡蛋放在盘子中间，盘边一圈放些蔬菜和香草。"
   },
   {
    "word": "rumour",
    "phonetic": "'ru:mə",
    "pos": "n.",
    "meaning": "谣言",
    "example": "U.S. officials are discounting rumours of a coup.",
    "exampleCn": "美国政府官员对一场政变的传闻将信将疑。"
   },
   {
    "word": "misuse",
    "phonetic": ",mɪs'jus",
    "pos": "vt",
    "meaning": "滥用；误用；虐待；滥用；误用；虐待",
    "example": "Even harmless drugs can be misused.",
    "exampleCn": "即使是无毒副作用的药物也有使用不当的时候。"
   },
   {
    "word": "propaganda",
    "phonetic": "'prɑpə'gændə",
    "pos": "n.",
    "meaning": "宣传；传道总会",
    "example": "the spreading of political propaganda",
    "exampleCn": "政治宣传的开展"
   },
   {
    "word": "inherit",
    "phonetic": "ɪn'hɛrɪt",
    "pos": "vt",
    "meaning": "继承；遗传而得",
    "example": "inherited wealth",
    "exampleCn": "继承的财富"
   },
   {
    "word": "secretion",
    "phonetic": "sɪ'kriʃən",
    "pos": "n.",
    "meaning": "[生理]分泌；分泌物；藏匿；隐藏",
    "example": "These secretions are used by the caterpillar as a defence.",
    "exampleCn": "这些分泌物被毛虫用作自卫武器。"
   },
   {
    "word": "attendance",
    "phonetic": "ə'tɛndəns",
    "pos": "n.",
    "meaning": "出席；到场；出席人数",
    "example": "We have an average attendance of 4,000 fans per game.",
    "exampleCn": "每场比赛平均有4,000名球迷来观战。"
   },
   {
    "word": "illiterate",
    "phonetic": "ɪ'lɪtərət",
    "pos": "adj.",
    "meaning": "文盲的；不识字的；没受教育的；文盲",
    "example": "...a subclass of illiterates.",
    "exampleCn": "…文盲阶层。"
   },
   {
    "word": "turmoil",
    "phonetic": "'tɝmɔɪl",
    "pos": "n.",
    "meaning": "混乱，骚动",
    "example": "She lived through the turmoil of the French Revolution.",
    "exampleCn": "她经历过法国大革命的混乱之后仍旧活着。"
   },
   {
    "word": "denote",
    "phonetic": "dɪ'not",
    "pos": "vt",
    "meaning": "表示，指示",
    "example": "What does the word ‘curriculum’ denote that ‘course’ does not?",
    "exampleCn": "curriculum一词的哪些含义是course没有的？"
   },
   {
    "word": "adhere",
    "phonetic": "əd'hɪr",
    "pos": "vi",
    "meaning": "坚持；依附；粘着；追随",
    "example": "But this means they cannot always adhere to the strict codes of practice dictated in UN headquarters.",
    "exampleCn": "但是这就意味着它们无法总是坚持联合国总部规定的严格的实践规章。"
   },
   {
    "word": "pinch",
    "phonetic": "pɪntʃ",
    "pos": "vt",
    "meaning": "捏；勒索；使苦恼；掐掉某物，修剪；匮乏；少量；夹痛；夹痛；节省",
    "example": "We have to stop her pinching her baby brother.",
    "exampleCn": "我们不能让她再掐她小弟弟了。"
   },
   {
    "word": "pulp",
    "phonetic": "pʌlp",
    "pos": "n.",
    "meaning": "纸浆；[食品]果肉；黏浆状物质",
    "example": "Halve the melon and scoop out the pulp.",
    "exampleCn": "把瓜切成两半，挖出瓜瓤。"
   },
   {
    "word": "pierce",
    "phonetic": "pɪrs",
    "pos": "vt",
    "meaning": "刺穿；洞察；响彻；深深地打动；进入；透入",
    "example": "Steam the corn until it can easily be pierced with a fork.",
    "exampleCn": "把玉米蒸到用叉子可以轻易扎透。"
   },
   {
    "word": "contribution",
    "phonetic": ",kɑntrɪ'bjuʃən",
    "pos": "n.",
    "meaning": "贡献；捐献；投稿",
    "example": "a campaign contribution",
    "exampleCn": "竞选捐款"
   },
   {
    "word": "analogy",
    "phonetic": "ə'nælədʒi",
    "pos": "n.",
    "meaning": "类比；类推；类似",
    "example": "The analogy between music and fragrance has stuck.",
    "exampleCn": "音乐与香味的类比已经深入人心了。"
   },
   {
    "word": "policy",
    "phonetic": "'pɑləsi",
    "pos": "n.",
    "meaning": "政策，方针；[保险]保险单",
    "example": "an insurance policy",
    "exampleCn": "保险单"
   },
   {
    "word": "elegant",
    "phonetic": "'ɛləgənt",
    "pos": "adj.",
    "meaning": "高雅的，优雅的；讲究的",
    "example": "a tall, elegant young woman",
    "exampleCn": "身材高挑、举止优雅的年轻女子"
   },
   {
    "word": "witness",
    "phonetic": "ˈwɪtnɪs",
    "pos": "n.",
    "meaning": "[法]证人；目击者；证据；目击；证明；为…作证",
    "example": "Police have appealed for witnesses to come forward.",
    "exampleCn": "警方呼吁目击者站出来。"
   },
   {
    "word": "vulgar",
    "phonetic": "'vʌlɡɚ",
    "pos": "adj.",
    "meaning": "粗俗的；通俗的；本土的；平民，百姓",
    "example": "vulgar behaviour",
    "exampleCn": "粗俗的行为"
   },
   {
    "word": "option",
    "phonetic": "'ɑpʃən",
    "pos": "n.",
    "meaning": "[计]选项；选择权；买卖的特权",
    "example": "There are a number of options available.",
    "exampleCn": "有多种选择。"
   },
   {
    "word": "economics",
    "phonetic": "'ikə'nɑmɪks; 'ɛkə'nɑmɪks",
    "pos": "n.",
    "meaning": "[经]经济学；国家的经济状况",
    "example": "a Harvard professor of economics",
    "exampleCn": "哈佛大学的经济学教授"
   },
   {
    "word": "periodically",
    "phonetic": "pɪrɪˈɑdɪklɪ",
    "pos": "adv.",
    "meaning": "定期地；周期性地；偶尔；间歇",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "roam",
    "phonetic": "rom",
    "pos": "vi",
    "meaning": "漫游，漫步；流浪；在…漫步，漫游；在…流浪；漫步，漫游；流浪",
    "example": "Chickens and geese roam freely in the back yard.",
    "exampleCn": "鸡和鹅在后院随意溜达。"
   },
   {
    "word": "stoop",
    "phonetic": "stʊp",
    "pos": "vi",
    "meaning": "弯腰；屈服；堕落；弯腰，屈背；屈服；辱没，堕落；俯曲",
    "example": "We had to stoop to pass through the low entrance.",
    "exampleCn": "我们得弯腰通过那低矮的入口。"
   },
   {
    "word": "extinguish",
    "phonetic": "ɪk'stɪŋɡwɪʃ",
    "pos": "vt",
    "meaning": "熄灭；压制；偿清",
    "example": "Please extinguish all cigarettes.",
    "exampleCn": "请把香烟都熄灭了。"
   },
   {
    "word": "disturbance",
    "phonetic": "dɪ'stɝbəns",
    "pos": "n.",
    "meaning": "[通信][电子]干扰；骚乱；忧虑",
    "example": "There were disturbances in the crowd as fans left the stadium.",
    "exampleCn": "球迷离开体育场时，人群中发生了骚乱。"
   },
   {
    "word": "censor",
    "phonetic": "'sɛnsɚ",
    "pos": "vt",
    "meaning": "审查，检查；检查员；[心理]潜意识压抑力；信件检查员",
    "example": "The information given to the press was carefully censored by the Ministry of Defence.",
    "exampleCn": "发布给报界的信息经过了国防部的仔细审查。"
   },
   {
    "word": "lever",
    "phonetic": "'lɛvɚ",
    "pos": "n.",
    "meaning": "[机]杠杆；控制杆",
    "example": "Pull this lever to open the gate.",
    "exampleCn": "拉此横杆开启大门。"
   },
   {
    "word": "gang",
    "phonetic": "ɡæŋ",
    "pos": "n.",
    "meaning": "群；一伙；一组",
    "example": "Several gangs were operating in the area.",
    "exampleCn": "有好几个犯罪团伙在这个地区活动。"
   },
   {
    "word": "detach",
    "phonetic": "dɪ'tætʃ",
    "pos": "vt",
    "meaning": "分离；派遣；使超然",
    "example": "Please detach and fill out the application form.",
    "exampleCn": "请撕下申请表并填好。"
   },
   {
    "word": "stimulus",
    "phonetic": "'stɪmjələs",
    "pos": "n.",
    "meaning": "[医]刺激；[电子]激励；刺激物",
    "example": "At this age, the infant begins to react more to visual stimuli.",
    "exampleCn": "到了这个年龄段，婴儿开始对视觉刺激有了更多的反应。"
   },
   {
    "word": "knot",
    "phonetic": "nɑt",
    "pos": "n.",
    "meaning": "（绳等的）结；节瘤，疙瘩；海里/小时（航速单位）；打结；打结",
    "example": "One lace had broken and been tied in a knot.",
    "exampleCn": "一根带子已经断了，被打成一个结。"
   },
   {
    "word": "tumult",
    "phonetic": "'tumʌlt",
    "pos": "n.",
    "meaning": "骚动；骚乱；吵闹；激动",
    "example": "I could simply not be heard in the tumult.",
    "exampleCn": "一片嘈杂声中别人根本听不到我说话。"
   },
   {
    "word": "ardent",
    "phonetic": "'ɑrdnt",
    "pos": "adj.",
    "meaning": "热情的；热心的；激烈的；燃烧般的",
    "example": "an ardent supporter of free trade",
    "exampleCn": "自由贸易的热心支持者"
   },
   {
    "word": "ideology",
    "phonetic": ",aidi'ɔlədʒi, ,idi-",
    "pos": "n.",
    "meaning": "思想，思想体系，意识形态",
    "example": "the ideologies of fascism and terrorism",
    "exampleCn": "法西斯主义和恐怖主义的意识形态"
   },
   {
    "word": "everlasting",
    "phonetic": ",ɛvɚ'læstɪŋ",
    "pos": "adj.",
    "meaning": "永恒的；接连不断的",
    "example": "everlasting fame",
    "exampleCn": "永久的名声"
   },
   {
    "word": "insight",
    "phonetic": "'ɪn'saɪt",
    "pos": "n.",
    "meaning": "洞察力；洞悉",
    "example": "a woman of great insight",
    "exampleCn": "一位极有眼光的妇女"
   },
   {
    "word": "artificial",
    "phonetic": ",ɑrtɪ'fɪʃl",
    "pos": "adj.",
    "meaning": "人造的；[自]仿造的；虚伪的；非原产地的；武断的",
    "example": "artificial flowers",
    "exampleCn": "假花"
   },
   {
    "word": "uphold",
    "phonetic": "ʌpˈhoʊld",
    "pos": "vt",
    "meaning": "支撑；鼓励；赞成；举起",
    "example": "a committee that aims to uphold educational standards",
    "exampleCn": "旨在保持教育水准的委员会"
   },
   {
    "word": "constitution",
    "phonetic": "'kɑnstə'tʊʃən",
    "pos": "n.",
    "meaning": "宪法；体质；章程；构造",
    "example": "The right to speak freely is written into the Constitution of the United States.",
    "exampleCn": "言论自由的权利被写入美国宪法。"
   },
   {
    "word": "canvas",
    "phonetic": "'kænvəs",
    "pos": "n.",
    "meaning": "[纺]帆布",
    "example": "a canvas bag",
    "exampleCn": "帆布包"
   },
   {
    "word": "prominent",
    "phonetic": "'prɑmɪnənt",
    "pos": "adj.",
    "meaning": "突出的，显著的；杰出的；卓越的",
    "example": "a prominent Russian scientist",
    "exampleCn": "杰出的俄罗斯科学家"
   },
   {
    "word": "flirt",
    "phonetic": "flɝt",
    "pos": "vi",
    "meaning": "调情；玩弄；轻率地对待；摆动；挥动；忽然弹出；急扔；调情的人；卖弄风骚的人",
    "example": "Dad's flirting with all the ladies, or they're all flirting with him, as usual.",
    "exampleCn": "爸爸在和所有的女士打情骂俏，或者说她们都在和他调情，跟平常一样。"
   },
   {
    "word": "duly",
    "phonetic": "'dʊli",
    "pos": "adv.",
    "meaning": "适当地；充分地；按时地",
    "example": "Here are your travel documents, all duly signed.",
    "exampleCn": "这是你的旅行证件，都签好了。"
   },
   {
    "word": "maize",
    "phonetic": "mez",
    "pos": "adj.",
    "meaning": "黄色的，玉米色的；[作物]玉米；黄色，玉米色",
    "example": "We can grow sorghum or maize on this plot.",
    "exampleCn": "这块地可以种高粱或玉米。"
   },
   {
    "word": "insipid",
    "phonetic": "ɪn'sɪpɪd",
    "pos": "adj.",
    "meaning": "清淡的；无趣的",
    "example": "an insipid pasta dish",
    "exampleCn": "一盘没有味道的意大利面食"
   },
   {
    "word": "favour",
    "phonetic": "ˈfevɚ",
    "pos": "n.",
    "meaning": "偏爱；赞同；善行；赞成；喜爱；有助于",
    "example": "The company has no rules about favouring U.S. citizens during layoffs.",
    "exampleCn": "该公司没有在裁员期间偏袒美国公民的规定。"
   },
   {
    "word": "malignant",
    "phonetic": "mə'lɪgnənt",
    "pos": "adj.",
    "meaning": "[医]恶性的；有害的；有恶意的",
    "example": "She developed a malignant tumour in her breast.",
    "exampleCn": "她的乳房长了个恶性肿瘤。"
   },
   {
    "word": "systematic",
    "phonetic": "'sɪstə'mætɪk",
    "pos": "adj.",
    "meaning": "系统的；体系的；有系统的；[图情]分类的",
    "example": "They went about their business in a systematic way.",
    "exampleCn": "他们按部就班地做生意。"
   },
   {
    "word": "caustic",
    "phonetic": "'kɔstɪk",
    "pos": "adj.",
    "meaning": "[化学]腐蚀性的；苛性的；刻薄的；焦散的；[助剂]腐蚀剂；[化学]苛性钠；焦散曲线",
    "example": "caustic soda (= a chemical used for cleaning things )",
    "exampleCn": "苛性钠，烧碱"
   },
   {
    "word": "inherent",
    "phonetic": "ɪn'hɪrənt",
    "pos": "adj.",
    "meaning": "内在的；固有的；与生俱来的",
    "example": "Every business has its own inherent risks.",
    "exampleCn": "每笔生意本身都有风险。"
   },
   {
    "word": "wage",
    "phonetic": "wedʒ",
    "pos": "vi",
    "meaning": "进行；发动；从事；工资；代价；报偿；进行；开展",
    "example": "He earns a good wage.",
    "exampleCn": "他工资挺高。"
   },
   {
    "word": "amuse",
    "phonetic": "ə'mjuz",
    "pos": "vt",
    "meaning": "娱乐；消遣；使发笑；使愉快",
    "example": "He made funny faces to amuse the children.",
    "exampleCn": "他做鬼脸逗孩子们开心。"
   },
   {
    "word": "negligible",
    "phonetic": "'nɛɡlɪdʒəbl",
    "pos": "adj.",
    "meaning": "微不足道的，[数]可以忽略的",
    "example": "The damage done to his property was negligible.",
    "exampleCn": "对他财产造成的损失微不足道。"
   },
   {
    "word": "air",
    "phonetic": "ɛr",
    "pos": "n.",
    "meaning": "[气象]空气，[地物]大气；天空；样子；曲调；使通风，晾干；夸耀",
    "example": "Let’s go outside and get some fresh air.",
    "exampleCn": "我们出去呼吸些新鲜空气吧。"
   },
   {
    "word": "incur",
    "phonetic": "ɪn'kɝ",
    "pos": "vt",
    "meaning": "招致，引发；蒙受",
    "example": "The government had also incurred huge debts.",
    "exampleCn": "政府也已承受了大笔债务。"
   },
   {
    "word": "molest",
    "phonetic": "mə'lɛst",
    "pos": "vt",
    "meaning": "骚扰；调戏；干扰",
    "example": "men who molest young boys",
    "exampleCn": "猥亵男童的男子"
   },
   {
    "word": "monstrous",
    "phonetic": "'mɑnstrəs",
    "pos": "adj.",
    "meaning": "巨大的；怪异的；荒谬的；畸形的",
    "example": "a monstrous nose",
    "exampleCn": "很大的鼻子"
   },
   {
    "word": "edible",
    "phonetic": "'ɛdəbl",
    "pos": "adj.",
    "meaning": "可食用的；食品；食物",
    "example": "These berries are edible, but those are poisonous.",
    "exampleCn": "这些浆果可以吃，但那些有毒。"
   },
   {
    "word": "offer",
    "phonetic": "'ɔfɚ",
    "pos": "vt",
    "meaning": "提供；出价；试图；提议；出价；意图；提议；出现；献祭；求婚",
    "example": "The offer of talks with Moscow marks a significant change from the previous Western position.",
    "exampleCn": "与莫斯科会谈的提议标志着先前西方立场的一个重大转变。"
   },
   {
    "word": "alternate",
    "phonetic": "'ɔltɚnət",
    "pos": "vi",
    "meaning": "交替；轮流；使交替；使轮流；[物]交替的；轮流的；替换物",
    "example": "alternate blue and red stripes",
    "exampleCn": "蓝红相间的条纹"
   },
   {
    "word": "tramp",
    "phonetic": "træmp",
    "pos": "vi",
    "meaning": "流浪；践踏，踩；脚步沉重地行走；流浪者；沉重的脚步声；徒步旅行；践踏，踩；走过",
    "example": "They put on their coats and tramped through the falling snow.",
    "exampleCn": "他们穿上大衣，在落雪中脚步沉重地缓缓走着。"
   },
   {
    "word": "sprout",
    "phonetic": "spraʊt",
    "pos": "vi",
    "meaning": "发芽；长芽；使发芽；使萌芽；[植]芽；萌芽；苗芽",
    "example": "Move the pots outside when the seeds begin to sprout.",
    "exampleCn": "种子开始发芽时把盆搬到外面去。"
   },
   {
    "word": "tempo",
    "phonetic": "'tɛmpo",
    "pos": "n.",
    "meaning": "速度，发展速度；拍子",
    "example": "the easy tempo of island life",
    "exampleCn": "岛上生活的轻松节奏"
   },
   {
    "word": "tough",
    "phonetic": "tʌf",
    "pos": "adj.",
    "meaning": "艰苦的，困难的；坚强的，不屈不挠的；坚韧的，牢固的；强壮的，结实的；恶棍；坚持；忍受，忍耐；强硬地，顽强地",
    "example": "The EU is taking a tough line with the UK over this issue.",
    "exampleCn": "在这一问题上，欧盟对英国的态度很强硬。"
   },
   {
    "word": "maritime",
    "phonetic": "'mærɪtaɪm",
    "pos": "adj.",
    "meaning": "[海洋]海的；海事的；沿海的；海员的",
    "example": "San Francisco has lost nearly all of its maritime industry.",
    "exampleCn": "旧金山几乎失去了所有海运业。"
   },
   {
    "word": "spark",
    "phonetic": "spɑrk",
    "pos": "n.",
    "meaning": "[电]火花；朝气；闪光；发动；鼓舞；求婚；闪烁；[电]发火花；求婚",
    "example": "sparks from the fire",
    "exampleCn": "火里飞出的火星"
   },
   {
    "word": "establish",
    "phonetic": "ɪˈstæblɪʃ",
    "pos": "vt",
    "meaning": "建立；创办；安置",
    "example": "The city of Boerne was established by German settlers in the 1840s.",
    "exampleCn": "博恩市是德国移民于19世纪40年代建立的。"
   },
   {
    "word": "dim",
    "phonetic": "dɪm",
    "pos": "adj.",
    "meaning": "暗淡的，昏暗的；模糊的，看不清的；悲观的，怀疑的；使暗淡，使失去光泽；使变模糊；变模糊，变暗淡；笨蛋，傻子",
    "example": "in the dim light of the early dawn",
    "exampleCn": "在微弱的晨曦里"
   },
   {
    "word": "lodge",
    "phonetic": "lɑdʒ",
    "pos": "n.",
    "meaning": "旅馆；门房；集会处；山林小屋；提出；寄存；借住；嵌入；寄宿；临时住宿",
    "example": "a building used to lodge prisoners of war",
    "exampleCn": "一座关押战俘的建筑物"
   },
   {
    "word": "rendezvous",
    "phonetic": "'rɑndevʊ",
    "pos": "n.",
    "meaning": "约会；约会地点；集结地；[军][航]会合；约会",
    "example": "plans for a secret rendezvous",
    "exampleCn": "秘密约会的计划"
   },
   {
    "word": "martyr",
    "phonetic": "'mɑrtɚ",
    "pos": "vt",
    "meaning": "牺牲；折磨；杀害",
    "example": "St. Stephen, the first Christian martyr",
    "exampleCn": "圣司提反，第一个基督教殉道者"
   },
   {
    "word": "confront",
    "phonetic": "kən'frʌnt",
    "pos": "vt",
    "meaning": "面对；遭遇；比较",
    "example": "The problems confronting the new government were enormous.",
    "exampleCn": "新政府面临的难题是巨大的。"
   },
   {
    "word": "neat",
    "phonetic": "nit",
    "pos": "adj.",
    "meaning": "灵巧的；整洁的；优雅的；齐整的；未搀水的；平滑的",
    "example": "neat handwriting",
    "exampleCn": "工整的笔迹"
   },
   {
    "word": "rectangle",
    "phonetic": "'rɛktæŋɡl",
    "pos": "n.",
    "meaning": "[数]矩形；长方形",
    "example": "Suppose the width of a rectangle is x metres.",
    "exampleCn": "设长方形的宽是 x 米。"
   },
   {
    "word": "transgress",
    "phonetic": "trænz'ɡrɛs",
    "pos": "vt",
    "meaning": "违反；侵犯；犯罪；违反；违法；越界",
    "example": "Orton’s plays transgress accepted social norms.",
    "exampleCn": "奥顿的戏剧违背了公认的社会准则。"
   },
   {
    "word": "verdict",
    "phonetic": "'vɝdɪkt",
    "pos": "n.",
    "meaning": "结论；裁定",
    "example": "The verdict was ‘not guilty’.",
    "exampleCn": "裁决为“无罪”。"
   },
   {
    "word": "evacuate",
    "phonetic": "ɪ'vækjuet",
    "pos": "vt",
    "meaning": "疏散，撤退；排泄；疏散；撤退；排泄",
    "example": "Police evacuated the area.",
    "exampleCn": "警方将该地区人员全部疏散。"
   },
   {
    "word": "remorse",
    "phonetic": "rɪ'mɔrs",
    "pos": "n.",
    "meaning": "懊悔；同情",
    "example": "Throughout the trial, he had shown no remorse .",
    "exampleCn": "整个审判过程中，他没有表示出一丝悔意。"
   },
   {
    "word": "caution",
    "phonetic": "'kɔʃən",
    "pos": "n.",
    "meaning": "小心，谨慎；警告，警示；警告",
    "example": "The physician must exercise caution when prescribing antidepressants.",
    "exampleCn": "医师在开抗抑郁药处方时必须谨慎。"
   },
   {
    "word": "subordinate",
    "phonetic": "səˈbɔːdɪnɪt (for n. &adj.) ; səˈbɔːdɪˌnet (for v.)",
    "pos": "n.",
    "meaning": "下属，下级；部属，属下；从属的；次要的",
    "example": "a subordinate officer",
    "exampleCn": "下级官员"
   },
   {
    "word": "chin",
    "phonetic": "tʃɪn",
    "pos": "n.",
    "meaning": "下巴；聊天；引体向上动作；闲谈；作引体向上动作",
    "example": "He rubbed his chin thoughtfully.",
    "exampleCn": "他若有所思地抚摸着下巴。"
   },
   {
    "word": "live",
    "phonetic": "laɪv；lɪv",
    "pos": "adj.",
    "meaning": "活的；生动的；实况转播的；精力充沛的；经历；度过；活；居住；生存",
    "example": "Without light, plants couldn’t live.",
    "exampleCn": "没有阳光，植物就无法生存。"
   },
   {
    "word": "global",
    "phonetic": "'ɡlobl",
    "pos": "adj.",
    "meaning": "全球的；总体的；球形的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "revive",
    "phonetic": "rɪ'vaɪv",
    "pos": "vi",
    "meaning": "复兴；复活；苏醒；恢复精神；使复兴；使苏醒；回想起；重演，重播",
    "example": "...an attempt to revive the economy.",
    "exampleCn": "…一次重振经济的尝试。"
   },
   {
    "word": "pesticide",
    "phonetic": "'pɛstɪsaɪd",
    "pos": "n.",
    "meaning": "[农药]杀虫剂",
    "example": "This pesticide is diluted with water and applied directly to the fields.",
    "exampleCn": "这种杀虫剂用水稀释后直接施用在田里。"
   },
   {
    "word": "create",
    "phonetic": "krɪ'et",
    "pos": "vt",
    "meaning": "创造，创作；造成",
    "example": "Some people believe the universe was created by a big explosion.",
    "exampleCn": "有些人认为宇宙是通过一次大爆炸创造出来的。"
   },
   {
    "word": "gloss",
    "phonetic": "ɡlɑs",
    "pos": "n.",
    "meaning": "光彩；注释；假象；使光彩；掩盖；注释",
    "example": "This gel will add gloss to even the dullest hair.",
    "exampleCn": "用了这种发胶，即使最干枯的头发也会增添光泽。"
   },
   {
    "word": "entreat",
    "phonetic": "ɪn'trit",
    "pos": "vt",
    "meaning": "恳求；请求；恳求；乞求",
    "example": "He entreated them to delay their departure.",
    "exampleCn": "他恳求他们晚些再走。"
   },
   {
    "word": "detain",
    "phonetic": "dɪ'ten",
    "pos": "vt",
    "meaning": "拘留；留住；耽搁",
    "example": "Two suspects have been detained by the police for questioning .",
    "exampleCn": "两名嫌疑人被警方拘留审问。"
   },
   {
    "word": "tidy",
    "phonetic": "'taɪdi",
    "pos": "adj.",
    "meaning": "整齐的；相当大的；整理；收拾；弄整齐；整理；收拾",
    "example": "a tidy desk",
    "exampleCn": "整洁的书桌"
   },
   {
    "word": "eloquent",
    "phonetic": "'ɛləkwənt",
    "pos": "adj.",
    "meaning": "意味深长的；雄辩的，有口才的；有说服力的；动人的",
    "example": "an eloquent appeal for support",
    "exampleCn": "极具说服力的求助呼吁"
   },
   {
    "word": "attend",
    "phonetic": "ə'tɛnd",
    "pos": "vt",
    "meaning": "出席；上（大学等）；照料；招待；陪伴；出席；致力于；照料；照顾",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "postage",
    "phonetic": "'postɪdʒ",
    "pos": "n.",
    "meaning": "[邮]邮资，邮费",
    "example": "How much is the postage for a postcard?",
    "exampleCn": "寄一张明信片的邮资是多少？"
   },
   {
    "word": "postpone",
    "phonetic": "po'spon",
    "pos": "vt",
    "meaning": "使…延期；把…放在次要地位；把…放在后面；延缓，延迟；延缓发作",
    "example": "The match had to be postponed until next week.",
    "exampleCn": "比赛不得不推迟到下周举行。"
   },
   {
    "word": "crisp",
    "phonetic": "krɪsp",
    "pos": "adj.",
    "meaning": "脆的；新鲜的；易碎的；使卷曲；使发脆；卷曲；发脆",
    "example": "She kicked at the crisp leaves at her feet.",
    "exampleCn": "她踢着脚边松脆的树叶。"
   },
   {
    "word": "instrument",
    "phonetic": "'ɪnstrəmənt",
    "pos": "n.",
    "meaning": "[仪]仪器；[机]工具；乐器；手段；器械",
    "example": "surgical instruments",
    "exampleCn": "外科(手术)器械"
   },
   {
    "word": "most",
    "phonetic": "most",
    "pos": "adv.",
    "meaning": "最；非常，极其；最多；几乎；大部分的，多数的；最多的；大部分，大多数",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "situated",
    "phonetic": "'sɪtʃuetɪd",
    "pos": "adj.",
    "meaning": "坐落在的；处于某种境地的",
    "example": "His hotel is situated in one of the loveliest places on the Loire.",
    "exampleCn": "他的旅馆坐落在卢瓦尔的一个最优美的地方。"
   },
   {
    "word": "notify",
    "phonetic": "'notə'fai",
    "pos": "vt",
    "meaning": "通告，通知；公布",
    "example": "The skipper notified the coastguard of the tragedy.",
    "exampleCn": "船长通知了海岸警卫队这一灾难。"
   },
   {
    "word": "phobia",
    "phonetic": "'fobɪə",
    "pos": "n.",
    "meaning": "[内科]恐怖，憎恶；恐惧症",
    "example": "Some children suffer from school phobia .",
    "exampleCn": "有些儿童对上学有恐惧症。"
   }
  ]
 },
 {
  "level": "C2",
  "name": "精通",
  "band": "雅思 ≈8.0–9.0",
  "desc": "按词频排列的最后一段，最生僻的高阶词汇，目标 8+ 必备。",
  "words": [
   {
    "word": "municipal",
    "phonetic": "mju'nɪsɪpl",
    "pos": "adj.",
    "meaning": "[建][经]市政的，市的；地方自治的",
    "example": "the municipal waste dump",
    "exampleCn": "城市垃圾场"
   },
   {
    "word": "eye",
    "phonetic": "aɪ",
    "pos": "n.",
    "meaning": "[解剖]眼睛；视力；眼光；见解，观点；注视，看",
    "example": "He’s got beautiful eyes.",
    "exampleCn": "他有一双漂亮的眼睛。"
   },
   {
    "word": "curl",
    "phonetic": "kɝl",
    "pos": "vi",
    "meaning": "[纸]卷曲；盘绕；[纸]卷曲；卷发；螺旋状物",
    "example": "a little boy with beautiful blonde curls",
    "exampleCn": "满头漂亮的金色鬈发的小男孩"
   },
   {
    "word": "vehicle",
    "phonetic": "'viːɪkl",
    "pos": "n.",
    "meaning": "[车辆]车辆；工具；交通工具；运载工具；传播媒介；媒介物",
    "example": "a description of the stolen vehicle",
    "exampleCn": "对被盗车辆的描述"
   },
   {
    "word": "minus",
    "phonetic": "'maɪnəs",
    "pos": "prep.",
    "meaning": "[数]减，减去；[数]负号，减号；不足；负数；减的；负的",
    "example": "17 minus 5 is 12 (17–5=12).",
    "exampleCn": "17减5等于12。"
   },
   {
    "word": "scold",
    "phonetic": "skold",
    "pos": "vi",
    "meaning": "责骂；叱责；骂；责骂；责骂；爱责骂的人",
    "example": "Do not scold the puppy, but simply and firmly say ‘no’.",
    "exampleCn": "不要责骂小狗，但要干脆利落地说“不”。"
   },
   {
    "word": "section",
    "phonetic": "'sɛkʃən",
    "pos": "n.",
    "meaning": "截面；部门；地区；章节",
    "example": "The plane’s tail section was found in a cornfield.",
    "exampleCn": "飞机的尾部在玉米田里找到了。"
   },
   {
    "word": "reciprocal",
    "phonetic": "rɪ'sɪprəkl",
    "pos": "adj.",
    "meaning": "[贸易]互惠的；相互的；[数]倒数的，彼此相反的",
    "example": "He spoke of the necessity for a reciprocal relationship that would be useful for all sides.",
    "exampleCn": "他谈及需要建立对各方都有益的互惠关系。"
   },
   {
    "word": "category",
    "phonetic": "'kætəɡɔri",
    "pos": "n.",
    "meaning": "种类，分类；[数]范畴",
    "example": "people in the over-45 age category",
    "exampleCn": "属45岁以上年龄组的人"
   },
   {
    "word": "captive",
    "phonetic": "'kæptɪv",
    "pos": "adj.",
    "meaning": "被俘虏的；被迷住的；俘虏；迷恋者",
    "example": "He described the difficulties of surviving for four months as a captive.",
    "exampleCn": "他讲述了沦为阶下囚的4个月中生存的种种不易。"
   },
   {
    "word": "panic",
    "phonetic": "'pænɪk",
    "pos": "n.",
    "meaning": "恐慌，惊慌；[金融]大恐慌；恐慌的；没有理由的；使恐慌",
    "example": "a feeling of sheer panic",
    "exampleCn": "惊恐万分的感觉"
   },
   {
    "word": "intact",
    "phonetic": "ɪn'tækt",
    "pos": "adj.",
    "meaning": "完整的；原封不动的；未受损伤的",
    "example": "Only the medieval tower had remained intact.",
    "exampleCn": "只有这座中世纪塔楼保存完好。"
   },
   {
    "word": "entry",
    "phonetic": "'ɛntri",
    "pos": "n.",
    "meaning": "进入；入口；条目；登记；报关手续；对土地的侵占",
    "example": "There was no sign of a forced entry.",
    "exampleCn": "没有强行闯入的迹象。"
   },
   {
    "word": "inspiring",
    "phonetic": "ɪn'spaɪərɪŋ",
    "pos": "adj.",
    "meaning": "鼓舞人心的；灌输的；启发灵感的；鼓舞；激发；使感悟（inspire的ing形式）",
    "example": "inspiring music",
    "exampleCn": "激励人心的音乐"
   },
   {
    "word": "tedious",
    "phonetic": "'tidɪəs",
    "pos": "adj.",
    "meaning": "沉闷的；冗长乏味的",
    "example": "The work was tiring and tedious.",
    "exampleCn": "这工作既累人又枯燥。"
   },
   {
    "word": "cannon",
    "phonetic": "'kænən",
    "pos": "n.",
    "meaning": "大炮；[军]加农炮；榴弹炮；机关炮；炮轰；开炮；炮轰",
    "example": "The cannons boom, the band plays.",
    "exampleCn": "炮声隆隆，鼓乐齐鸣。"
   },
   {
    "word": "stereo",
    "phonetic": "'stɛrɪo",
    "pos": "n.",
    "meaning": "[声]立体声；立体声系统；[印刷]铅版；立体照片；[声]立体的；立体声的；立体感觉的",
    "example": "a stereo with good speakers",
    "exampleCn": "扬声器音质好的立体声音响"
   },
   {
    "word": "feedback",
    "phonetic": "'fidbæk",
    "pos": "n.",
    "meaning": "[电子][自]反馈；成果，资料；回复",
    "example": "Continue to ask for feedback on your work.",
    "exampleCn": "继续征求对你工作的反馈。"
   },
   {
    "word": "lament",
    "phonetic": "lə'mɛnt",
    "pos": "n.",
    "meaning": "挽歌；恸哭；悲痛之情；哀悼；悲叹；悔恨；哀悼；痛惜",
    "example": "The nation lamented the death of its great war leader.",
    "exampleCn": "举国上下都在哀悼他们伟大的战时领袖。"
   },
   {
    "word": "paradise",
    "phonetic": "'pærə'daɪs",
    "pos": "n.",
    "meaning": "天堂",
    "example": "The market is a shopper’s paradise.",
    "exampleCn": "这个市场是购物者的乐园。"
   },
   {
    "word": "fountain",
    "phonetic": "'faʊntn",
    "pos": "n.",
    "meaning": "[地质]喷泉，泉水；源泉",
    "example": "He was a fountain of information on Asian affairs.",
    "exampleCn": "他是亚洲事务的信息源。"
   },
   {
    "word": "acquisition",
    "phonetic": ",ækwɪ'zɪʃən",
    "pos": "n.",
    "meaning": "获得物，获得",
    "example": "the acquisition of language",
    "exampleCn": "语言的习得"
   },
   {
    "word": "revise",
    "phonetic": "rɪ'vaɪz",
    "pos": "vt",
    "meaning": "修正；复习；[印刷]校订；[图情]修订；[印刷]校订；复习功课；[图情]修订；[印刷]校订",
    "example": "The college has revised its plans because of local objections.",
    "exampleCn": "由于地方上的反对，学院已经修改了计划。"
   },
   {
    "word": "closet",
    "phonetic": "'klɑzət",
    "pos": "n.",
    "meaning": "壁橱；议事室，密室；小房间；秘密的，私下的；空谈的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "prolific",
    "phonetic": "prə'lɪfɪk",
    "pos": "adj.",
    "meaning": "多产的；丰富的",
    "example": "Handel’s prolific output of opera",
    "exampleCn": "韩德尔丰富的歌剧作品"
   },
   {
    "word": "audible",
    "phonetic": "'ɔdəbl",
    "pos": "adj.",
    "meaning": "听得见的",
    "example": "His voice was barely audible (=  could only just be heard  ) above the roar of the crowd.",
    "exampleCn": "人声嘈杂，几乎听不见他的说话声。"
   },
   {
    "word": "advent",
    "phonetic": "",
    "pos": "n.",
    "meaning": "到来；出现；基督降临；基督降临节",
    "example": "the advent of the computer",
    "exampleCn": "计算机的问世"
   },
   {
    "word": "get",
    "phonetic": "ɡɛt",
    "pos": "vt",
    "meaning": "使得；获得；受到；变成；生殖；幼兽；成为；变得；到达",
    "example": "I got 98% in my last maths test.",
    "exampleCn": "上一次数学考试我得了98分。"
   },
   {
    "word": "recline",
    "phonetic": "rɪ'klaɪn",
    "pos": "vi",
    "meaning": "靠；依赖；斜倚；使躺下；使斜倚",
    "example": "She proceeded to recline on a chaise longue.",
    "exampleCn": "她开始斜靠在一个躺椅上。"
   },
   {
    "word": "pier",
    "phonetic": "pɪr",
    "pos": "n.",
    "meaning": "码头，直码头；桥墩；窗间壁",
    "example": "a yacht moored at a pier",
    "exampleCn": "停在码头的一艘游艇"
   },
   {
    "word": "menace",
    "phonetic": "'mɛnəs",
    "pos": "n.",
    "meaning": "威胁；恐吓；恐吓；进行威胁；威胁；恐吓",
    "example": "the growing menace of oil pollution at sea",
    "exampleCn": "日益严重的海洋石油污染"
   },
   {
    "word": "outrageous",
    "phonetic": "aʊt'redʒəs",
    "pos": "adj.",
    "meaning": "粗暴的；可恶的；令人吃惊的",
    "example": "outrageous prices",
    "exampleCn": "骇人的价格"
   },
   {
    "word": "fossil",
    "phonetic": "'fɑsl",
    "pos": "n.",
    "meaning": "[古生]化石；僵化的事物；顽固不化的人；[古生]化石的；陈腐的，守旧的",
    "example": "fossils of early reptiles",
    "exampleCn": "早期爬行动物的化石"
   },
   {
    "word": "ethnic",
    "phonetic": "'ɛθnɪk",
    "pos": "adj.",
    "meaning": "种族的；人种的",
    "example": "The school teaches pupils from different ethnic groups.",
    "exampleCn": "该校教授不同种族的小学生。"
   },
   {
    "word": "marital",
    "phonetic": "'mærɪtl",
    "pos": "adj.",
    "meaning": "婚姻的；夫妇间的",
    "example": "marital problems",
    "exampleCn": "婚姻问题"
   },
   {
    "word": "wrought",
    "phonetic": "rɔt",
    "pos": "adj.",
    "meaning": "锻造的；加工的；精细的；工作（work的过去分词）",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "supposedly",
    "phonetic": "sə'pozɪdli",
    "pos": "adv.",
    "meaning": "可能；按照推测；恐怕",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "clockwise",
    "phonetic": "'klɑk'waɪz",
    "pos": "adv.",
    "meaning": "顺时针方向地",
    "example": "Screw the lid on clockwise.",
    "exampleCn": "按顺时针方向拧紧盖子。"
   },
   {
    "word": "sector",
    "phonetic": "'sɛktɚ",
    "pos": "n.",
    "meaning": "部门；扇形，扇区；象限仪；函数尺",
    "example": "...the nation's manufacturing sector.",
    "exampleCn": "…该国的制造部门。"
   },
   {
    "word": "chunk",
    "phonetic": "tʃʌŋk",
    "pos": "n.",
    "meaning": "大块；矮胖的人或物",
    "example": "ice chunks",
    "exampleCn": "大冰块"
   },
   {
    "word": "transplant",
    "phonetic": "træns'plænt",
    "pos": "vt",
    "meaning": "[林]移植；迁移；使移居；[林]移植；移植器官；被移植物；移居者；[林]移植；迁移；移居",
    "example": "heart transplant surgery",
    "exampleCn": "心脏移植手术"
   },
   {
    "word": "radiate",
    "phonetic": "'redɪet",
    "pos": "vt",
    "meaning": "[物]辐射；传播；流露；发射；广播；[物]辐射；流露；发光；从中心向各方伸展；[物]辐射状的，有射线的",
    "example": "The log fire radiated a warm cosy glow.",
    "exampleCn": "燃烧的原木发出温暖舒适的红光。"
   },
   {
    "word": "millennium",
    "phonetic": "məˈlɛniəm",
    "pos": "n.",
    "meaning": "千年期，千禧年；一千年，千年纪念；太平盛世，黄金时代",
    "example": "people who have inhabited this land for millennia",
    "exampleCn": "在这片土地上已经居住了数千年的人们"
   },
   {
    "word": "speculate",
    "phonetic": "'spɛkjə'let",
    "pos": "vi",
    "meaning": "推测；投机；思索；推断",
    "example": "She refused to speculate.",
    "exampleCn": "她拒绝猜测。"
   },
   {
    "word": "inept",
    "phonetic": "i'nept",
    "pos": "adj.",
    "meaning": "笨拙的；不适当的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "lamb",
    "phonetic": "læm",
    "pos": "n.",
    "meaning": "[食品][畜牧]羔羊，小羊；羔羊肉",
    "example": "roast lamb",
    "exampleCn": "烤羊肉"
   },
   {
    "word": "specimen",
    "phonetic": "'spɛsəmən",
    "pos": "n.",
    "meaning": "样品，[图情]样本；标本",
    "example": "a blood specimen",
    "exampleCn": "血样"
   },
   {
    "word": "hop",
    "phonetic": "hɑp",
    "pos": "vt",
    "meaning": "[计][通信]跳跃；跳过；[计][通信]跳跃；舞会；短途旅行；[计][通信]跳跃；单脚跳；作短途旅行",
    "example": "a little girl hopping and skipping",
    "exampleCn": "一个蹦蹦跳跳的小女孩"
   },
   {
    "word": "differ",
    "phonetic": "'dɪfɚ",
    "pos": "vi",
    "meaning": "相异；意见分歧",
    "example": "The two systems differ in many respects.",
    "exampleCn": "这两个系统在许多方面不同。"
   },
   {
    "word": "volunteer",
    "phonetic": ",vɑlən'tɪr",
    "pos": "vt&n",
    "meaning": "自愿参加(者)",
    "example": "Most of the relief work was done by volunteers.",
    "exampleCn": "大部分救援工作都由志愿人员完成。"
   },
   {
    "word": "aquarium",
    "phonetic": "ə'kwɛrɪəm",
    "pos": "n.",
    "meaning": "水族馆；养鱼池；玻璃缸",
    "example": "In Amsterdam the girls all stand in the windows shimmering as tantalising as tropical fish beyond the gleam of aquarium glass.",
    "exampleCn": "在阿姆斯特丹，姑娘们都站在窗后，光芒四射柔情撩人宛如水族馆玻璃背后脉脉含情的热带鱼。"
   },
   {
    "word": "supposition",
    "phonetic": ",sʌpə'zɪʃən",
    "pos": "n.",
    "meaning": "假定；推测；想像；见解",
    "example": "His version of events is pure supposition .",
    "exampleCn": "他对事情的说法纯属推测。"
   },
   {
    "word": "costume",
    "phonetic": "'kɑstum",
    "pos": "n.",
    "meaning": "[服装]服装，装束；戏装，剧装",
    "example": "the film’s lavish costumes and spectacular sets",
    "exampleCn": "影片中奢华的戏装和壮观的场景"
   },
   {
    "word": "fixture",
    "phonetic": "'fɪkstʃɚ",
    "pos": "n.",
    "meaning": "设备；固定装置；固定于某处不大可能移动之物",
    "example": "...a detailed list of what fixtures and fittings are included in the purchase price.",
    "exampleCn": "…详细列出的室内设施与装备包括在购买价格中。"
   },
   {
    "word": "strive",
    "phonetic": "straɪv",
    "pos": "vi",
    "meaning": "努力；奋斗；抗争",
    "example": "He strives hard to keep himself very fit.",
    "exampleCn": "他努力使自己保持非常的健康。"
   },
   {
    "word": "seclude",
    "phonetic": "sɪ'klud",
    "pos": "vt",
    "meaning": "使隔离，使隔绝",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "heighten",
    "phonetic": "'haɪtn",
    "pos": "vt",
    "meaning": "提高；增高；加强；使更显著；升高；变强",
    "example": "There are fears that the march will heighten racial tension.",
    "exampleCn": "有人担心这次游行会加深种族间的紧张局势。"
   },
   {
    "word": "predecessor",
    "phonetic": "'prɛdəsɛsɚ",
    "pos": "n.",
    "meaning": "前任，前辈",
    "example": "Kennedy’s predecessor as President was the war hero Dwight Eisenhower.",
    "exampleCn": "肯尼迪总统的前任是战争英雄德怀特·艾森豪威尔。"
   },
   {
    "word": "aboriginal",
    "phonetic": ",æbə'rɪdʒənl",
    "pos": "adj.",
    "meaning": "土著的；[生物]原始的；土著居民；[动]土生生物",
    "example": "He remained fascinated by the Aboriginals' tales.",
    "exampleCn": "他一直对澳大利亚土著人的故事很着迷。"
   },
   {
    "word": "chronological",
    "phonetic": ",krɑnə'lɑdʒɪkl",
    "pos": "adj.",
    "meaning": "按时间顺序的",
    "example": "We arranged the documents in chronological order .",
    "exampleCn": "我们把这些文件按时序排列。"
   },
   {
    "word": "assault",
    "phonetic": "ə'sɔlt",
    "pos": "n.",
    "meaning": "攻击；袭击；攻击；袭击；袭击；动武",
    "example": "a case of robbery and assault",
    "exampleCn": "一宗抢劫袭击案"
   },
   {
    "word": "sober",
    "phonetic": "'sobɚ",
    "pos": "adj.",
    "meaning": "冷静的，清醒的；未醉的；使严肃；使醒酒，使清醒",
    "example": "He’s a nice guy when he’s sober.",
    "exampleCn": "他没喝醉时是个不错的家伙。"
   },
   {
    "word": "implement",
    "phonetic": "'ɪmplɪmɛnt",
    "pos": "vt",
    "meaning": "实施，执行；实现，使生效；[机]工具，器具；手段",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "quiver",
    "phonetic": "'kwɪvɚ",
    "pos": "n.",
    "meaning": "颤抖；箭袋；震动；颤抖；振动；使…颤动；抖动",
    "example": "The child was quivering in her arms.",
    "exampleCn": "那孩子在她怀里发抖。"
   },
   {
    "word": "ostentation",
    "phonetic": "'ɑstɛn'teʃən",
    "pos": "n.",
    "meaning": "卖弄；虚饰；虚有其表",
    "example": "Her lifestyle was remarkably free from ostentation.",
    "exampleCn": "她的生活方式毫不张扬。"
   },
   {
    "word": "compulsory",
    "phonetic": "kəm'pʌlsəri",
    "pos": "adj.",
    "meaning": "义务的；必修的；被强制的；（花样滑冰、竞技体操等的）规定动作",
    "example": "the threat of compulsory redundancies",
    "exampleCn": "强制性裁员的威胁"
   },
   {
    "word": "hike",
    "phonetic": "haɪk",
    "pos": "vi",
    "meaning": "远足；徒步旅行；上升；提高；拉起；使…高涨；远足；徒步旅行；涨价",
    "example": "a hike in the woods",
    "exampleCn": "林间远足"
   },
   {
    "word": "tackle",
    "phonetic": "'tækl",
    "pos": "n.",
    "meaning": "[机]滑车；装备；用具；扭倒；处理；抓住；固定；与…交涉",
    "example": "There is more than one way to tackle the problem.",
    "exampleCn": "解决这个问题不止一个办法。"
   },
   {
    "word": "legislation",
    "phonetic": ",lɛdʒɪs'leʃən",
    "pos": "n.",
    "meaning": "立法；法律",
    "example": "This is a very important piece of legislation (= law ).",
    "exampleCn": "这是一条非常重要的法规。"
   },
   {
    "word": "estate",
    "phonetic": "ɪ'stet",
    "pos": "n.",
    "meaning": "房地产；[经]财产；身份",
    "example": "His estate was valued at $150,000.",
    "exampleCn": "他的遗产价值为15万美元。"
   },
   {
    "word": "interrogate",
    "phonetic": "ɪn'tɛrəɡet",
    "pos": "vt",
    "meaning": "审问；质问；[计]询问；审问；质问",
    "example": "The police interrogated the suspect for several hours.",
    "exampleCn": "警察盘问了这名嫌疑犯好几个小时。"
   },
   {
    "word": "plummet",
    "phonetic": "'plʌmɪt",
    "pos": "n.",
    "meaning": "[测]铅锤，坠子",
    "example": "House prices have plummeted down.",
    "exampleCn": "房价已经暴跌。"
   },
   {
    "word": "roll",
    "phonetic": "rol",
    "pos": "vt",
    "meaning": "卷；滚动，转动；辗；卷；滚动；转动；起伏，摇晃；卷，卷形物；名单；摇晃",
    "example": "His sleeves were rolled above his elbows.",
    "exampleCn": "他的袖子卷到了胳膊肘的上面。"
   },
   {
    "word": "assimilate",
    "phonetic": "ə'sɪməlet",
    "pos": "vt",
    "meaning": "吸收；使同化；把…比作；使相似；吸收；同化",
    "example": "It will take time to assimilate all these facts.",
    "exampleCn": "充分掌握所有这些情况需要时间。"
   },
   {
    "word": "harsh",
    "phonetic": "hɑrʃ",
    "pos": "adj.",
    "meaning": "严厉的；严酷的；[声]刺耳的；粗糙的；刺目的",
    "example": "The hostages are being held in harsh conditions.",
    "exampleCn": "人质被拘押在恶劣环境中。"
   },
   {
    "word": "recall",
    "phonetic": "'rikɔl",
    "pos": "vt",
    "meaning": "召回；回想起，记起；取消；召回；回忆；撤消",
    "example": "You don’t happen to recall his name, do you?",
    "exampleCn": "你不会恰巧还想得起他的名字吧？"
   },
   {
    "word": "electronics",
    "phonetic": "ɪ,lɛk'trɑnɪks",
    "pos": "n.",
    "meaning": "[电子]电子学；电子工业",
    "example": "an electronics engineer",
    "exampleCn": "电子工程师"
   },
   {
    "word": "abbreviation",
    "phonetic": "əˌbrivɪ'eʃən",
    "pos": "n.",
    "meaning": "[语]缩写；缩写词",
    "example": "The abbreviation for Kansas is KS.",
    "exampleCn": "的缩写是。"
   },
   {
    "word": "flee",
    "phonetic": "fli",
    "pos": "vi",
    "meaning": "逃走；消失，消散；逃跑，逃走；逃避",
    "example": "His attackers turned and fled.",
    "exampleCn": "袭击他的人转身逃走了。"
   },
   {
    "word": "numb",
    "phonetic": "nʌm",
    "pos": "vt",
    "meaning": "使麻木；使发愣；使失去感觉；麻木的；发愣的",
    "example": "My fingers were so numb I could hardly write.",
    "exampleCn": "我的手指麻木得几乎没法写字。"
   },
   {
    "word": "crude",
    "phonetic": "krud",
    "pos": "adj.",
    "meaning": "粗糙的；天然的，未加工的；粗鲁的",
    "example": "a crude estimate of the population available for work",
    "exampleCn": "对劳动力人口的粗略估计"
   },
   {
    "word": "metropolitan",
    "phonetic": ",mɛtrə'pɑlɪtən",
    "pos": "adj.",
    "meaning": "大都市的；大主教辖区的；宗主国的；大城市人；大主教；宗主国的公民",
    "example": "a metropolitan area of South Australia",
    "exampleCn": "南澳大利亚的一个都市区"
   },
   {
    "word": "notable",
    "phonetic": "'notəbl",
    "pos": "adj.",
    "meaning": "值得注意的，显著的；著名的；名人，显要人物",
    "example": "If there are any notable inconsistencies or discrepancies, think through how you are going to explain the situation.",
    "exampleCn": "如果有任何显著的不相符或让人起疑的情况，要想好该如何去解释这个情况。"
   },
   {
    "word": "treble",
    "phonetic": "'trɛbl",
    "pos": "adj.",
    "meaning": "[数]三倍的；最高声部的；三层的；三重的；[数]三倍；最高声部；使成三倍",
    "example": "But the KGB, in turn, was deceiving the Englishmen, because it really believed that they were playing a treble game and were all traitors to the Communist cause.",
    "exampleCn": "但是克格勃实际上以欺骗回报了英国人，因为他们认为，这几个人在玩三重游戏，实际上是共产主义事业的叛徒。"
   },
   {
    "word": "propagate",
    "phonetic": "'prɑpə'get",
    "pos": "vt",
    "meaning": "传播；传送；繁殖；宣传；繁殖；增殖",
    "example": "The group launched a website to propagate its ideas .",
    "exampleCn": "这个团体建了一个网站来宣扬他们的主张。"
   },
   {
    "word": "converge",
    "phonetic": "kən'vɝdʒ",
    "pos": "vi",
    "meaning": "聚合；集中于一点；会聚；使聚集；使向一点会合",
    "example": "The two rivers converge into one near Pittsburgh.",
    "exampleCn": "这两条河在匹兹堡附近汇合。"
   },
   {
    "word": "compel",
    "phonetic": "kəm'pɛl",
    "pos": "vt",
    "meaning": "强迫，迫使；强使发生",
    "example": "...the introduction of legislation to compel cyclists to wear a helmet.",
    "exampleCn": "…强制骑车人戴头盔的法律的引入。"
   },
   {
    "word": "pointed",
    "phonetic": "'pɔɪntɪd",
    "pos": "adj.",
    "meaning": "尖的；突出的；锐利的；率直的；指出；瞄准（point的过去式）",
    "example": "a pointed beard",
    "exampleCn": "一把山羊胡"
   },
   {
    "word": "swarm",
    "phonetic": "swɔrm",
    "pos": "vi",
    "meaning": "挤满；成群浮游；云集；[蜂]蜂群；一大群；挤满；爬",
    "example": "...a swarm of locusts.",
    "exampleCn": "…一大群蝗虫。"
   },
   {
    "word": "shrewd",
    "phonetic": "ʃrud",
    "pos": "adj.",
    "meaning": "精明的；狡猾的；机灵的；精明（的人）；机灵（的人）",
    "example": "Malcolm is a shrewd businessman.",
    "exampleCn": "马尔科姆是个精明的商人。"
   },
   {
    "word": "abolish",
    "phonetic": "ə'bɑlɪʃ",
    "pos": "vt",
    "meaning": "废除，废止；取消，革除",
    "example": "Slavery was abolished in the US in the 19th century.",
    "exampleCn": "美国于19世纪废除了奴隶制。"
   },
   {
    "word": "imitate",
    "phonetic": "'ɪmɪtet",
    "pos": "vt",
    "meaning": "模仿，仿效；仿造，仿制",
    "example": "She was a splendid mimic and loved to imitate Winston Churchill.",
    "exampleCn": "她是个出色的模仿者，喜欢模仿温斯顿·丘吉尔。"
   },
   {
    "word": "waggon",
    "phonetic": "'wægən",
    "pos": "n.",
    "meaning": "货车",
    "example": "The ragged man drags a waggon of rag fragments.",
    "exampleCn": "那个衣衫褴褛的人拉著一货车破布碎片."
   },
   {
    "word": "definitive",
    "phonetic": "dɪ'fɪnətɪv",
    "pos": "n.",
    "meaning": "限定词；决定性的；最后的；限定的",
    "example": "a definitive agreement to buy the company",
    "exampleCn": "收购这家公司的最终协议"
   },
   {
    "word": "imminent",
    "phonetic": "'ɪmɪnənt",
    "pos": "adj.",
    "meaning": "即将来临的；迫近的",
    "example": "A new trade agreement is imminent.",
    "exampleCn": "一项新的贸易协定即将签署。"
   },
   {
    "word": "dispute",
    "phonetic": "'dɪs'pjʊt",
    "pos": "vt",
    "meaning": "辩论；怀疑；阻止；抗拒；争论；辩论；争吵",
    "example": "It is beyond dispute that advances in medicine have enabled people to live longer.",
    "exampleCn": "医学的发展使人们更加长寿，这是无可置疑的。"
   },
   {
    "word": "horticulture",
    "phonetic": "'hɔrtɪ'kʌltʃɚ",
    "pos": "n.",
    "meaning": "[园艺]园艺，园艺学",
    "example": "The area has a long tradition of horticulture.",
    "exampleCn": "园艺是这个地区源远流长的传统。"
   },
   {
    "word": "semblance",
    "phonetic": "'sɛmbləns",
    "pos": "n.",
    "meaning": "外貌；假装；类似",
    "example": "At least a semblance of normality has been restored to parts of the country.",
    "exampleCn": "这个国家的部分地区至少在表面上已恢复正常。"
   },
   {
    "word": "impair",
    "phonetic": "ɪm'pɛr",
    "pos": "vt",
    "meaning": "损害；削弱；减少",
    "example": "The illness had impaired his ability to think and concentrate.",
    "exampleCn": "这种疾病损害了他的思维能力和注意力。"
   },
   {
    "word": "dismay",
    "phonetic": "dɪs'me",
    "pos": "n.",
    "meaning": "沮丧，灰心；惊慌；使沮丧；使惊慌",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "dash",
    "phonetic": "dæʃ",
    "pos": "n.",
    "meaning": "破折号；冲撞；使…破灭；猛撞；泼溅；猛冲；撞击",
    "example": "Suddenly she dashed down to the cellar.",
    "exampleCn": "她猛地朝地窖冲过去。"
   },
   {
    "word": "outlying",
    "phonetic": "'aʊtlaɪɪŋ",
    "pos": "adj.",
    "meaning": "边远的；无关的",
    "example": "one of the outlying suburbs",
    "exampleCn": "边远郊区之一"
   },
   {
    "word": "catching",
    "phonetic": "'kætʃɪŋ",
    "pos": "adj.",
    "meaning": "传染性的；有魅力的；抓住（catch的ing形式）",
    "example": "Julia’s enthusiasm was catching.",
    "exampleCn": "朱莉娅的热情很有感染力。"
   },
   {
    "word": "deter",
    "phonetic": "dɪ'tɝ",
    "pos": "vt",
    "meaning": "制止，阻止；使打消念头",
    "example": "The company’s financial difficulties have deterred potential investors.",
    "exampleCn": "该公司的财务困境令潜在的投资者望而却步。"
   },
   {
    "word": "influx",
    "phonetic": "'ɪnflʌks",
    "pos": "n.",
    "meaning": "[流]流入；汇集；河流的汇集处",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "deplore",
    "phonetic": "dɪ'plɔr",
    "pos": "vt",
    "meaning": "谴责；悲悼；哀叹；对…深感遗憾",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "pathos",
    "phonetic": "'peθɑs",
    "pos": "n.",
    "meaning": "悲怅；痛苦；同情；哀婉动人的词句",
    "example": "the pathos of the woman trying to keep her lover",
    "exampleCn": "那个女人试图留住爱侣的哀婉之情"
   },
   {
    "word": "namely",
    "phonetic": "'nemli",
    "pos": "adv.",
    "meaning": "也就是；即是；换句话说",
    "example": "Three students were mentioned, namely John, Sarah and Sylvia.",
    "exampleCn": "有三名学生被提到，即约翰、萨拉和西尔维娅。"
   },
   {
    "word": "relinguish",
    "phonetic": "",
    "pos": "vt",
    "meaning": "放弃；撤回",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "sole",
    "phonetic": "sol",
    "pos": "n.",
    "meaning": "[服装]鞋底；脚底；基础；鳎目鱼；唯一的；[法]单独的；仅有的",
    "example": "The soles of his feet were caked in mud.",
    "exampleCn": "他的脚掌上沾满了泥巴。"
   },
   {
    "word": "thaw",
    "phonetic": "θɔ",
    "pos": "vi",
    "meaning": "融解；变暖和；解冻；融雪",
    "example": "The lake thawed in March.",
    "exampleCn": "3月里，湖水解冻了。"
   },
   {
    "word": "fling",
    "phonetic": "flɪŋ",
    "pos": "vt",
    "meaning": "掷，抛；嘲笑；使陷入；轻蔑地投射；猛动；掷，抛；嘲弄；急冲；猛冲，急行",
    "example": "He flung his coat over the back of a chair.",
    "exampleCn": "他把外套扔在椅背上。"
   },
   {
    "word": "sufficient",
    "phonetic": "səˈfɪʃənt",
    "pos": "adj.",
    "meaning": "足够的；充分的",
    "example": "We can only prosecute if there is sufficient evidence.",
    "exampleCn": "有了足够的证据，我们才能提出起诉。"
   },
   {
    "word": "morality",
    "phonetic": "məˈræləti",
    "pos": "n.",
    "meaning": "道德；品行，美德",
    "example": "...standards of morality and justice in society.",
    "exampleCn": "…社会中道德和正义的标准。"
   },
   {
    "word": "shave",
    "phonetic": "ʃev",
    "pos": "vt",
    "meaning": "剃；修面；掠过；剃；刮脸；勉强通过",
    "example": "He hadn’t shaved for days.",
    "exampleCn": "他已经好几天没刮脸了。"
   },
   {
    "word": "liaison",
    "phonetic": "lɪ'ezɑn",
    "pos": "n.",
    "meaning": "联络",
    "example": "Liaison between police forces and the art world is vital to combat art crime.",
    "exampleCn": "警方和艺术界之间的联络对于打击艺术犯罪是至关重要的。"
   },
   {
    "word": "flip",
    "phonetic": "flɪp",
    "pos": "vt",
    "meaning": "掷；轻击；用指轻弹；蹦跳；无礼的；轻率的；弹；筋斗",
    "example": "We flipped a coin to see who would go first.",
    "exampleCn": "我们抛硬币决定谁先去。"
   },
   {
    "word": "shear",
    "phonetic": "ʃɪr",
    "pos": "vt",
    "meaning": "剪；修剪；剥夺；剪；[机]剪切；修剪；[力]切变；修剪；大剪刀",
    "example": "Her long fair hair had been shorn.",
    "exampleCn": "她长长的金发已经剪掉了。"
   },
   {
    "word": "hover",
    "phonetic": "'hʌvɚ",
    "pos": "vi",
    "meaning": "盘旋，翱翔；徘徊；徘徊；盘旋；犹豫；孵；徘徊在…近旁",
    "example": "Judith was hovering in the doorway.",
    "exampleCn": "朱迪丝在门口徘徊。"
   },
   {
    "word": "wax",
    "phonetic": "waks",
    "pos": "vi",
    "meaning": "月亮渐满；增大；[轻]蜡制的；似蜡的",
    "example": "wax crayons",
    "exampleCn": "蜡笔"
   },
   {
    "word": "gaily",
    "phonetic": "'ɡeili",
    "pos": "adv.",
    "meaning": "华丽地；欢乐地",
    "example": "‘Morning, Albert,’ she called gaily.",
    "exampleCn": "“早安，艾伯特。”她快乐地喊道。"
   },
   {
    "word": "slide",
    "phonetic": "slaɪd",
    "pos": "n.",
    "meaning": "滑动；[电影]幻灯片；滑梯；雪崩；滑动；滑落；不知不觉陷入；滑动；使滑动；悄悄地迅速放置",
    "example": "a slide show",
    "exampleCn": "幻灯片放映"
   },
   {
    "word": "lump",
    "phonetic": "lʌmp",
    "pos": "n.",
    "meaning": "块，块状；[医]肿块；瘤；很多；笨人；混在一起；使成块状；忍耐；笨重地移动；成团的；总共的；很；非常",
    "example": "Strain the custard to remove lumps.",
    "exampleCn": "滤去牛奶蛋糊里的面块。"
   },
   {
    "word": "inspection",
    "phonetic": "ɪn'spɛkʃən",
    "pos": "n.",
    "meaning": "视察，检查",
    "example": "An inspection was carried out at the school.",
    "exampleCn": "有人来学校视察了一遍。"
   },
   {
    "word": "arena",
    "phonetic": "ə'rinə",
    "pos": "n.",
    "meaning": "舞台；竞技场",
    "example": "a sports arena",
    "exampleCn": "运动场"
   },
   {
    "word": "economical",
    "phonetic": ",ɛkə'nɑmɪkl",
    "pos": "adj.",
    "meaning": "经济的；节约的；合算的",
    "example": "A small car is more economical to run.",
    "exampleCn": "开小型汽车比较省油。"
   },
   {
    "word": "magnetic",
    "phonetic": "mæg'nɛtɪk",
    "pos": "adj.",
    "meaning": "地磁的；有磁性的；有吸引力的",
    "example": "magnetic forces",
    "exampleCn": "磁力"
   },
   {
    "word": "fluff",
    "phonetic": "flʌf",
    "pos": "n.",
    "meaning": "绒毛；错误；无价值的东西；[纸]起毛；出错；变松",
    "example": "He was picking bits of fluff off his trousers.",
    "exampleCn": "他在揪裤子上的绒毛球。"
   },
   {
    "word": "cashier",
    "phonetic": "kæ'ʃɪr",
    "pos": "n.",
    "meaning": "[会计]出纳员；司库；解雇；抛弃",
    "example": "The cashier absconded with the money.",
    "exampleCn": "出纳员携款潜逃。"
   },
   {
    "word": "maiden",
    "phonetic": "'medn",
    "pos": "adj.",
    "meaning": "未婚的，处女的；初次的；少女；处女",
    "example": "...stories of noble princes and their brave deeds on behalf of beautiful maidens.",
    "exampleCn": "…高贵的王子以及他们英雄救美的故事。"
   },
   {
    "word": "startle",
    "phonetic": "'stɑrtl",
    "pos": "vt",
    "meaning": "使吓一跳；使惊奇；惊吓；惊跳；惊奇；惊愕；惊恐",
    "example": "Sorry, I didn’t mean to startle you.",
    "exampleCn": "抱歉，我不是故意吓你一跳的。"
   },
   {
    "word": "chill",
    "phonetic": "tʃɪl",
    "pos": "n.",
    "meaning": "寒冷；寒意；寒心；寒冷的；冷漠的；扫兴的；冷冻，冷藏；使寒心；使感到冷",
    "example": "There was a slight chill in the air .",
    "exampleCn": "空气中有些微的寒意。"
   },
   {
    "word": "reserve",
    "phonetic": "rɪ'zɝv",
    "pos": "n.",
    "meaning": "[贸易][金融]储备，储存；自然保护区；[军][林]预备队；储备金；[贸易][金融]储备；保留；预约；预订",
    "example": "Do you have to reserve tickets in advance?",
    "exampleCn": "你必须预先订票吗？"
   },
   {
    "word": "substitute",
    "phonetic": "'sʌbstɪtut",
    "pos": "n.",
    "meaning": "代用品；代替者；[计]替代；代替",
    "example": "Germany brought on a substitute at half time.",
    "exampleCn": "德国队在比赛半场时换上一名替补队员。"
   },
   {
    "word": "auditorium",
    "phonetic": ",ɔdɪ'tɔrɪəm",
    "pos": "n.",
    "meaning": "礼堂，会堂；[建]观众席",
    "example": "...a high school auditorium.",
    "exampleCn": "…一所中学的礼堂。"
   },
   {
    "word": "esteem",
    "phonetic": "ɪ'stim",
    "pos": "vt",
    "meaning": "尊敬；认为；考虑；估价；尊重；尊敬",
    "example": "Peden was greatly esteemed by the people of Ayrshire.",
    "exampleCn": "佩登深受艾尔郡人的尊敬。"
   },
   {
    "word": "creation",
    "phonetic": "krɪ'eʃən",
    "pos": "n.",
    "meaning": "创造，创作；创作物，产物",
    "example": "a job creation scheme",
    "exampleCn": "创造就业机会的计划"
   },
   {
    "word": "manifest",
    "phonetic": "'mænɪfɛst",
    "pos": "vt",
    "meaning": "证明，表明；显示；显示，出现；[贸易]载货单，货单；旅客名单；显然的，明显的；明白的",
    "example": "a manifest error of judgment",
    "exampleCn": "明显的判断错误"
   },
   {
    "word": "confer",
    "phonetic": "kən'fɝ",
    "pos": "vt",
    "meaning": "授予；给予；协商",
    "example": "The constitution also confers large powers on Brazil's 25 constituent states.",
    "exampleCn": "宪法还授予巴西25个成员州极大的权力。"
   },
   {
    "word": "underneath",
    "phonetic": ",ʌndɚ'niθ",
    "pos": "adv.",
    "meaning": "在下面；在底下；下面；底部；下面的；底层的",
    "example": "He got out of the car and looked underneath.",
    "exampleCn": "他下车往底下看了看。"
   },
   {
    "word": "hoist",
    "phonetic": "hɔɪst",
    "pos": "n.",
    "meaning": "起重机；升起，吊起；升起；吊起",
    "example": "The crew hurried to hoist the flag.",
    "exampleCn": "船员们急忙把旗子升起来。"
   },
   {
    "word": "capacity",
    "phonetic": "kə'pæsəti",
    "pos": "n.",
    "meaning": "能力；[物]容量；资格，地位；生产力",
    "example": "The room had seating capacity for about 80.",
    "exampleCn": "这房间能坐80个人左右。"
   },
   {
    "word": "fuel",
    "phonetic": "'fjuəl",
    "pos": "n.",
    "meaning": "[能源]燃料；刺激因素",
    "example": "Coal is one of the cheapest fuels.",
    "exampleCn": "煤是最廉价的燃料之一。"
   },
   {
    "word": "incidentally",
    "phonetic": ",ɪnsɪ'dɛntli",
    "pos": "adv.",
    "meaning": "顺便；偶然地；附带地",
    "example": "Quite incidentally, I got some useful information at the party.",
    "exampleCn": "我在聚会上无意中得到了一些有用信息。"
   },
   {
    "word": "giggle",
    "phonetic": "'ɡɪɡl",
    "pos": "vi",
    "meaning": "傻笑；咯咯地笑",
    "example": "If you can’t stop giggling you’ll have to leave the room.",
    "exampleCn": "如果你再咯咯地笑个不停，就给我离开屋子。"
   },
   {
    "word": "escort",
    "phonetic": "ˈeskɔːrt",
    "pos": "n.",
    "meaning": "陪同；护航舰；护卫队；护送者；护送；陪同；为…护航",
    "example": "a police escort",
    "exampleCn": "警察护卫队"
   },
   {
    "word": "lottery",
    "phonetic": "'lɑtəri",
    "pos": "n.",
    "meaning": "彩票；碰运气的事，难算计的事；抽彩给奖法",
    "example": "a lottery ticket",
    "exampleCn": "彩票"
   },
   {
    "word": "retain",
    "phonetic": "rɪ'ten",
    "pos": "vt",
    "meaning": "保持；雇；记住",
    "example": "You have the right to retain possession of the goods.",
    "exampleCn": "你有权保留这些物品。"
   },
   {
    "word": "undercharge",
    "phonetic": ",ʌndɚ'tʃɑrdʒ",
    "pos": "n.",
    "meaning": "潜流；(思想，情绪)暗流",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "synonym",
    "phonetic": "ˈsɪnənɪm",
    "pos": "n.",
    "meaning": "同义词",
    "example": "The term \"industrial democracy\" is often used as a synonym for worker participation.",
    "exampleCn": "“工业民主”这一词语常被用作“工人参与”的同义词。"
   },
   {
    "word": "turf",
    "phonetic": "tɝf",
    "pos": "n.",
    "meaning": "[建]草皮；泥炭；跑马场",
    "example": "soft green turf",
    "exampleCn": "柔软的绿色草皮"
   },
   {
    "word": "owe",
    "phonetic": "o",
    "pos": "vt",
    "meaning": "欠；感激；应给予；应该把……归功于",
    "example": "How much do I owe you (= often used to show that you want to pay for something )?",
    "exampleCn": "我该付你多少钱？"
   },
   {
    "word": "deplete",
    "phonetic": "dɪ'plit",
    "pos": "vt",
    "meaning": "耗尽，用尽；使衰竭，使空虚",
    "example": "...substances that deplete the ozone layer.",
    "exampleCn": "…消耗臭氧层的物质。"
   },
   {
    "word": "fort",
    "phonetic": "fɔrt",
    "pos": "n.",
    "meaning": "堡垒；[军]要塞；（美）边界贸易站",
    "example": "The fort flanked on a swamp.",
    "exampleCn": "堡垒侧面靠着沼泽。"
   },
   {
    "word": "delude",
    "phonetic": "dɪ'l(j)uːd",
    "pos": "vt",
    "meaning": "迷惑；逃避；使失望",
    "example": "I was angry with him for trying to delude me.",
    "exampleCn": "他想骗我，因此我很恼火。"
   },
   {
    "word": "ingenious",
    "phonetic": "ɪn'dʒinɪəs",
    "pos": "adj.",
    "meaning": "有独创性的；机灵的，精制的；心灵手巧的",
    "example": "Many fish have ingenious ways of protecting their eggs from predators.",
    "exampleCn": "很多鱼都有绝妙的方法来保护它们产的卵不被捕食者吃掉。"
   },
   {
    "word": "compare",
    "phonetic": "kəm'pɛr",
    "pos": "vt",
    "meaning": "比较；对照；比喻为；比较；相比；比较",
    "example": "The report compares the different types of home computer available.",
    "exampleCn": "这份报告比较了市场上不同类型的家用计算机。"
   },
   {
    "word": "inland",
    "phonetic": ",ɪn'lænd",
    "pos": "n.",
    "meaning": "内地；[地理]内陆；[地理]内陆的；内地的；国内的；在内地；向内地；[地理]向内陆；在内陆",
    "example": "the largest area of inland water in the southeast",
    "exampleCn": "东南部最大的内陆水域"
   },
   {
    "word": "suppress",
    "phonetic": "sə'prɛs",
    "pos": "vt",
    "meaning": "抑制；镇压；废止",
    "example": "The uprising was ruthlessly suppressed.",
    "exampleCn": "起义受到了残酷的镇压。"
   },
   {
    "word": "terror",
    "phonetic": "'tɛrɚ",
    "pos": "n.",
    "meaning": "恐怖；恐怖行动；恐怖时期；可怕的人",
    "example": "There was a look of sheer terror (= complete terror ) on his face.",
    "exampleCn": "他脸上的表情异常惊恐。"
   },
   {
    "word": "procedure",
    "phonetic": "prə'sidʒɚ",
    "pos": "n.",
    "meaning": "程序，[管理]手续；步骤",
    "example": "On board, we were given the usual talk on safety procedures (= what to do if an accident happens, or to prevent an accident ) .",
    "exampleCn": "在飞机上，我们听了例行的飞行安全讲解。"
   },
   {
    "word": "pretext",
    "phonetic": "'pritɛkst",
    "pos": "n.",
    "meaning": "借口；托辞",
    "example": "He’ll phone on some pretext or other.",
    "exampleCn": "他会以这样或那样的理由打电话的。"
   },
   {
    "word": "flap",
    "phonetic": "flæp",
    "pos": "n.",
    "meaning": "拍打，拍打声；[航]副翼；拍动；鼓翼而飞；（帽边等）垂下；拍打；扔；拉下帽边；飘动",
    "example": "the flap of the sails",
    "exampleCn": "船帆的拍动"
   },
   {
    "word": "obsolete",
    "phonetic": "ɑbsəˌlit",
    "pos": "adj.",
    "meaning": "[生物]废弃的；老式的；淘汰；废弃",
    "example": "obsolete weapons",
    "exampleCn": "已被淘汰的武器"
   },
   {
    "word": "deliberate",
    "phonetic": "dɪ'lɪbərət",
    "pos": "adj.",
    "meaning": "故意的；深思熟虑的；从容的；仔细考虑；商议",
    "example": "a deliberate attempt to humiliate her",
    "exampleCn": "对她的故意羞辱"
   },
   {
    "word": "oath",
    "phonetic": "oθ",
    "pos": "n.",
    "meaning": "誓言，誓约；诅咒，咒骂",
    "example": "The president took the oath of office (= made the official public promises that every president makes when starting their job ) .",
    "exampleCn": "总统宣誓就职。"
   },
   {
    "word": "depletion",
    "phonetic": "dɪ'pliʃən",
    "pos": "n.",
    "meaning": "消耗；损耗；放血",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "forecast",
    "phonetic": "'fɔrkæst",
    "pos": "vt",
    "meaning": "[气象][通信]预报，预测；预示；预测，[气象][通信]预报；预想",
    "example": "The weather forecast is good for tomorrow.",
    "exampleCn": "天气预报说明天是晴天。"
   },
   {
    "word": "sore",
    "phonetic": "sɔr",
    "pos": "adj.",
    "meaning": "疼痛的，痛心的；剧烈的，极度的；恼火的，发怒的；厉害的，迫切的；溃疡，痛处；恨事，伤心事",
    "example": "I had a sore throat and aching limbs.",
    "exampleCn": "我喉咙疼，四肢酸痛。"
   },
   {
    "word": "metric",
    "phonetic": "'mɛtrɪk",
    "pos": "adj.",
    "meaning": "十进制的，公制的",
    "example": "a metric tonne",
    "exampleCn": "一公吨"
   },
   {
    "word": "plead",
    "phonetic": "plid",
    "pos": "vt",
    "meaning": "借口；为...[法]辩护；托称；恳求；[法]辩护",
    "example": "He appeared before the committee to plead his case.",
    "exampleCn": "他出现在委员会上为他的案子辩护。"
   },
   {
    "word": "wrench",
    "phonetic": "rɛntʃ",
    "pos": "n.",
    "meaning": "扳手，[机]扳钳；扭伤；痛苦；歪曲；猛扭；扭伤；猛扭；曲解；折磨；扭伤；猛扭；猛绞",
    "example": "I wrenched the packet from his grasp.",
    "exampleCn": "我用力夺过他攥在手里的纸袋。"
   },
   {
    "word": "surgeon",
    "phonetic": "'sɝdʒən",
    "pos": "n.",
    "meaning": "外科医生",
    "example": "...a heart surgeon.",
    "exampleCn": "…一位心脏外科医生。"
   },
   {
    "word": "compensation",
    "phonetic": ",kɑmpɛn'seʃən",
    "pos": "n.",
    "meaning": "[会计]补偿；报酬；[保险]赔偿金",
    "example": "People who are wrongly arrested may be paid compensation .",
    "exampleCn": "被误抓的人有可能得到补偿费。"
   },
   {
    "word": "reference",
    "phonetic": "'rɛfrəns",
    "pos": "n.",
    "meaning": "参考，参照；涉及，提及；参考书目；介绍信；证明书；引用；引用",
    "example": "a list of towns, each with a map reference",
    "exampleCn": "一份城镇清单，每个城镇都有地图参照号"
   },
   {
    "word": "huddle",
    "phonetic": "'hʌdl",
    "pos": "vi",
    "meaning": "蜷缩；挤作一团；拥挤；混乱；杂乱一团",
    "example": "We lay huddled together for warmth.",
    "exampleCn": "我们紧紧挤在一起取暖。"
   },
   {
    "word": "dock",
    "phonetic": "dɑk",
    "pos": "n.",
    "meaning": "[水运]码头；[船]船坞；被告席；尾巴的骨肉部分；使靠码头；剪短",
    "example": "A crowd was waiting at the dock to greet them.",
    "exampleCn": "一群人在码头等着迎接他们。"
   },
   {
    "word": "eccentric",
    "phonetic": "ɪk'sɛntrɪk",
    "pos": "adj.",
    "meaning": "古怪的，反常的；古怪的人",
    "example": "Askew used several names, and had a reputation as an eccentric.",
    "exampleCn": "艾斯丘用过几个名字，并以“怪人”著称。"
   },
   {
    "word": "indefinite",
    "phonetic": "ɪn'dɛfɪnət",
    "pos": "adj.",
    "meaning": "不确定的；无限的；模糊的",
    "example": "The next day the union voted to begin an indefinite strike.",
    "exampleCn": "第二天工会投票表决决定开始无限期罢工。"
   },
   {
    "word": "coverage",
    "phonetic": "'kʌvərɪdʒ",
    "pos": "n.",
    "meaning": "[植]覆盖，覆盖范围",
    "example": "live coverage of the match (= the match is broadcast at the same time that it is happening )",
    "exampleCn": "这场比赛的现场直播"
   },
   {
    "word": "stationary",
    "phonetic": "'steʃənɛri",
    "pos": "adj.",
    "meaning": "固定的；静止的；定居的；常备军的",
    "example": "How did you manage to drive into a stationary vehicle?",
    "exampleCn": "你是怎么开车的，竟会撞上一辆停着的车子？"
   },
   {
    "word": "maximum",
    "phonetic": "ˈmæksəməm",
    "pos": "n.",
    "meaning": "[数]极大，最大限度；最大量；最高的；最多的；最大极限的",
    "example": "We might have a third child, but that’s the absolute maximum .",
    "exampleCn": "我们可能会要第三个孩子，但这绝对是极限了。"
   },
   {
    "word": "edit",
    "phonetic": "'ɛdɪt",
    "pos": "vt",
    "meaning": "[计]编辑；校订",
    "example": "The newspaper edits letters before printing them.",
    "exampleCn": "这家报社刊登读者来信前先作校订。"
   },
   {
    "word": "somehow",
    "phonetic": "'sʌmhaʊ",
    "pos": "adv.",
    "meaning": "以某种方法；莫明其妙地",
    "example": "Don’t worry, we’ll get the money back somehow.",
    "exampleCn": "别担心，我们总会把那些钱拿回来的。"
   },
   {
    "word": "obstinate",
    "phonetic": "'ɑbstɪnət",
    "pos": "adj.",
    "meaning": "顽固的；倔强的；难以控制的",
    "example": "He was the most obstinate man I’ve ever met.",
    "exampleCn": "他是我遇到过的最固执的人。"
   },
   {
    "word": "string",
    "phonetic": "strɪŋ",
    "pos": "n.",
    "meaning": "线，细绳；一串，一行；扎，缚；使排成一列，串起；伸展，拉直",
    "example": "Her key hung on a string around her neck.",
    "exampleCn": "她的钥匙穿了根绳子挂在脖子上。"
   },
   {
    "word": "day",
    "phonetic": "de",
    "pos": "n.",
    "meaning": "一天；时期；白昼；日间的；逐日的",
    "example": "We spent three days in Paris.",
    "exampleCn": "我们在巴黎度过了三天。"
   },
   {
    "word": "numerous",
    "phonetic": "'numərəs",
    "pos": "adj.",
    "meaning": "许多的，很多的",
    "example": "Numerous attempts have been made to hide the truth.",
    "exampleCn": "为掩盖事实作了很多尝试。"
   },
   {
    "word": "resignation",
    "phonetic": ",rɛzɪɡ'neʃən",
    "pos": "n.",
    "meaning": "辞职；放弃；辞职书；顺从",
    "example": "She gave a sigh of resignation.",
    "exampleCn": "她无奈地叹了一口气。"
   },
   {
    "word": "laden",
    "phonetic": "'ledn",
    "pos": "adj.",
    "meaning": "负载的；装满的；苦恼的；装载（等于lade）；装载（等于lade）",
    "example": "snow-laden branches",
    "exampleCn": "积满雪的树枝"
   },
   {
    "word": "instinct",
    "phonetic": "'ɪnstɪŋkt",
    "pos": "n.",
    "meaning": "[生物]本能，直觉；[心理]天性；充满着的",
    "example": "Her instinct told her that something was wrong.",
    "exampleCn": "直觉告诉她有些不对劲。"
   },
   {
    "word": "end",
    "phonetic": "ɛnd",
    "pos": "n.",
    "meaning": "结束；目标；尽头；末端；死亡；结束，终止；终结；结束，终止；终结",
    "example": "At last it seemed the war might be coming to an end.",
    "exampleCn": "终于战争似乎即将结束。"
   },
   {
    "word": "extinct",
    "phonetic": "ɪk'stɪŋkt",
    "pos": "vt",
    "meaning": "使熄灭",
    "example": "Dinosaurs have been extinct for millions of years.",
    "exampleCn": "恐龙已灭绝数千万年了。"
   },
   {
    "word": "theme",
    "phonetic": "θim",
    "pos": "n.",
    "meaning": "主题；主旋律；题目",
    "example": "The book’s theme is the conflict between love and duty.",
    "exampleCn": "本书的主题是爱与责任之间的冲突。"
   },
   {
    "word": "prologue",
    "phonetic": "'prolɔɡ",
    "pos": "n.",
    "meaning": "开场白；序言",
    "example": "The prologue to the novel is written in the form of a newspaper account.",
    "exampleCn": "该小说的前言是以新闻报道的形式写的。"
   },
   {
    "word": "diagram",
    "phonetic": "'daɪəɡræm",
    "pos": "n.",
    "meaning": "图表；[数]图解",
    "example": "...a circuit diagram.",
    "exampleCn": "…电路图。"
   },
   {
    "word": "fitting",
    "phonetic": "'fɪtɪŋ",
    "pos": "n.",
    "meaning": "[机]装配，装置；[服装]试穿，试衣；适合的，适宜的；相称的",
    "example": "I thought the memorial was a fitting tribute to the President.",
    "exampleCn": "我认为这座纪念碑恰如其分地表达了对总统的敬意。"
   },
   {
    "word": "install",
    "phonetic": "ɪn'stɔl",
    "pos": "vt",
    "meaning": "安装；任命；安顿",
    "example": "They’ve installed the new computer network at last.",
    "exampleCn": "他们终于安装了新电脑网络。"
   },
   {
    "word": "dilute",
    "phonetic": "daɪ'l(j)ut",
    "pos": "adj.",
    "meaning": "稀释的；淡的；稀释；冲淡；削弱；变稀薄；变淡",
    "example": "diluted fruit juice",
    "exampleCn": "稀释的果汁"
   },
   {
    "word": "storey",
    "phonetic": "'stɔri",
    "pos": "n.",
    "meaning": "[建]楼层；叠架的一层",
    "example": "A staircase leads to the upper storey .",
    "exampleCn": "有一段楼梯通往上面一层。"
   },
   {
    "word": "odds",
    "phonetic": "ɑdz",
    "pos": "n.",
    "meaning": "几率；胜算；不平等；差别",
    "example": "(= it is likely ) that he will commit the same crime again.",
    "exampleCn": "他可能还会犯同样的罪行。"
   },
   {
    "word": "swirl",
    "phonetic": "swɝl",
    "pos": "n.",
    "meaning": "漩涡；打旋；涡状形；盘绕；打旋；眩晕；大口喝酒",
    "example": "The river had become a swirling torrent.",
    "exampleCn": "河水变成了翻滚的洪流。"
   },
   {
    "word": "reassure",
    "phonetic": ",riə'ʃʊr",
    "pos": "v.",
    "meaning": "使放心，使消除疑虑",
    "example": "Teachers reassured anxious parents.",
    "exampleCn": "老师们安慰焦急的父母。"
   },
   {
    "word": "casualty",
    "phonetic": "'kæʒuəlti",
    "pos": "n.",
    "meaning": "意外事故；伤亡人员；急诊室",
    "example": "We have had our first casualty. One runner has dropped out with cramp.",
    "exampleCn": "我们有了第一位伤员，有一位队员因腿部痉挛退出了。"
   },
   {
    "word": "match",
    "phonetic": "mætʃ",
    "pos": "vt",
    "meaning": "使比赛；使相配；敌得过，比得上；相配；与…竞争；比赛；匹配；相配，相称；相比；比赛，竞赛；匹配；对手；火柴",
    "example": "It’s our last match of the season.",
    "exampleCn": "这是我们本赛季最后一场比赛。"
   },
   {
    "word": "decade",
    "phonetic": "'dɛked",
    "pos": "n.",
    "meaning": "十年，十年期；十",
    "example": "...the last decade of the nineteenth century.",
    "exampleCn": "…19世纪的最后10年。"
   },
   {
    "word": "exceed",
    "phonetic": "ɪk'sid",
    "pos": "vt",
    "meaning": "超过；胜过",
    "example": "Working hours must not exceed 42 hours a week.",
    "exampleCn": "工作时间每周不得超过42小时。"
   },
   {
    "word": "tutor",
    "phonetic": "'tʊtɚ",
    "pos": "vt",
    "meaning": "辅导；约束；导师；家庭教师；助教",
    "example": "The children were educated at home by a succession of tutors.",
    "exampleCn": "这些孩子在家接受教育，连续请过几任家庭教师。"
   },
   {
    "word": "proximity",
    "phonetic": "prɑk'sɪməti",
    "pos": "n.",
    "meaning": "亲近，接近；[数]邻近",
    "example": "Here the rich and the poor live in close proximity (= very near to each other ) .",
    "exampleCn": "在这里，富人和穷人比邻而居。"
   },
   {
    "word": "cosmopolitan",
    "phonetic": "'kɑzmə'pɑlətn",
    "pos": "adj.",
    "meaning": "全世界的，世界主义的",
    "example": "a vibrant, cosmopolitan city",
    "exampleCn": "一个充满活力的国际性都市"
   },
   {
    "word": "Christian",
    "phonetic": "'krɪstʃən",
    "pos": "a&n",
    "meaning": "基督教的；基督教徒",
    "example": "He was a devout Christian.",
    "exampleCn": "他曾是一个虔诚的基督教徒。"
   },
   {
    "word": "catalyst",
    "phonetic": "'kætəlɪst",
    "pos": "n.",
    "meaning": "[物化]催化剂；刺激因素",
    "example": "I very much hope that this case will prove to be a catalyst for change.",
    "exampleCn": "我非常希望这件事终将成为促成变化的催化剂。"
   },
   {
    "word": "consign",
    "phonetic": "kən'saɪn",
    "pos": "vt",
    "meaning": "交付；[交]托运；寄存；把…委托给",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "lease",
    "phonetic": "lis",
    "pos": "n.",
    "meaning": "租约；租期；[租赁]租赁物；租赁权；出租；租得；出租",
    "example": "I’m interested in leasing your cottage.",
    "exampleCn": "我有兴趣租下你的小屋。"
   },
   {
    "word": "wane",
    "phonetic": "wen",
    "pos": "vi",
    "meaning": "衰落；变小；亏缺；[海洋]退潮；消逝；[经]衰退；[天]月亏；衰退期；缺损",
    "example": "My enthusiasm for the project was waning.",
    "exampleCn": "我对这个项目的热情逐渐减退了。"
   },
   {
    "word": "quota",
    "phonetic": "'kwotə",
    "pos": "n.",
    "meaning": "配额；[经管]定额；[经]限额",
    "example": "The government has decided to scrap quotas on car imports.",
    "exampleCn": "政府决定取消汽车进口配额。"
   },
   {
    "word": "depress",
    "phonetic": "dɪ'prɛs",
    "pos": "vt",
    "meaning": "压低；使沮丧；使萧条",
    "example": "The thought of taking the exam again depressed him.",
    "exampleCn": "想到要补考，他就心情沮丧。"
   },
   {
    "word": "clarify",
    "phonetic": "'klærəfaɪ",
    "pos": "vt",
    "meaning": "澄清；阐明",
    "example": "Reporters asked him to clarify his position (= say exactly what his beliefs are ) on welfare reform.",
    "exampleCn": "记者们要求他阐明他在福利改革问题上的立场。"
   },
   {
    "word": "extreme",
    "phonetic": "ɪk'strim",
    "pos": "adj.",
    "meaning": "极端的；极度的；偏激的；尽头的；极端；末端；最大程度；极端的事物",
    "example": "Extreme poverty still exists in many rural areas.",
    "exampleCn": "许多农村地区仍处于赤贫状态。"
   },
   {
    "word": "radar",
    "phonetic": "'redɑr",
    "pos": "n.",
    "meaning": "雷达",
    "example": "The coastline can now be monitored by radar.",
    "exampleCn": "现在能用雷达监测海岸线了。"
   },
   {
    "word": "pertain",
    "phonetic": "pɝ'ten",
    "pos": "vi",
    "meaning": "属于；关于；适合",
    "example": "...matters pertaining to naval district defence.",
    "exampleCn": "…与海军区域防卫有关的问题。"
   },
   {
    "word": "given",
    "phonetic": "'ɡɪvn",
    "pos": "adj.",
    "meaning": "赠予的；沉溺的；考虑到；给予（give的过去分词）",
    "example": "On any given day in the Houston area, half the hospital beds are empty.",
    "exampleCn": "在休斯敦地区，任何一天医院的床位都有一半是空的。"
   },
   {
    "word": "seismic",
    "phonetic": "'saɪzmɪk",
    "pos": "adj.",
    "meaning": "地震的，地震强度的",
    "example": "increased seismic activity",
    "exampleCn": "越来越频繁的地震活动"
   },
   {
    "word": "summit",
    "phonetic": "'sʌmɪt",
    "pos": "n.",
    "meaning": "顶点；最高级会议；最高阶层；最高级的；政府首脑的",
    "example": "But are these the summit of our values, of our aspirations of society?",
    "exampleCn": "但这些是我们的价值观、我们对社会的抱负的顶点吗？"
   },
   {
    "word": "nautical",
    "phonetic": "'nɔtɪkl",
    "pos": "adj.",
    "meaning": "[水运]航海的，海上的；船员的",
    "example": "nautical equipment",
    "exampleCn": "航海装备"
   },
   {
    "word": "licence",
    "phonetic": "'laɪsəns",
    "pos": "n.",
    "meaning": "许可证，执照；[财政]特许；[财政]特许，许可；发给执照",
    "example": "The dealers applied for an export licence.",
    "exampleCn": "经销商申请了出口许可证。"
   },
   {
    "word": "target",
    "phonetic": "'tɑrɡɪt",
    "pos": "n.",
    "meaning": "目标；靶子",
    "example": "There is no target date for completion of the new project.",
    "exampleCn": "这个新的项目何时完工没有预定日期。"
   },
   {
    "word": "analytical",
    "phonetic": ",ænə'lɪtɪkl",
    "pos": "adj.",
    "meaning": "分析的；分解的",
    "example": "She’s got an analytical mind.",
    "exampleCn": "她思维缜密。"
   },
   {
    "word": "jerk",
    "phonetic": "dʒɝk",
    "pos": "n.",
    "meaning": "肌肉抽搐；性情古怪的人；蠢人；急拉；猛拉",
    "example": "Wilcox jerked his head to indicate that they should move on.",
    "exampleCn": "威尔科克斯扭扭头，示意他们该走了。"
   },
   {
    "word": "rescue",
    "phonetic": "'rɛskju",
    "pos": "n.",
    "meaning": "营救；援救；解救",
    "example": "Survivors of the crash were rescued by helicopter.",
    "exampleCn": "空难的生还者被直升机救了出来。"
   },
   {
    "word": "couch",
    "phonetic": "kaʊtʃ",
    "pos": "n.",
    "meaning": "睡椅，[家具]长沙发；床；卧榻；蹲伏，埋伏；躺着；使躺下；表达；弯下",
    "example": "Tom offered to sleep on the couch.",
    "exampleCn": "汤姆说他来睡沙发。"
   },
   {
    "word": "strategic",
    "phonetic": "strə'tidʒɪk",
    "pos": "adj.",
    "meaning": "战略的，战略方针的",
    "example": "UN forces made a strategic withdrawal.",
    "exampleCn": "联合国部队作了战略性撤退。"
   },
   {
    "word": "impulse",
    "phonetic": "'ɪmpʌls",
    "pos": "n.",
    "meaning": "[心理]冲动；[电子]脉冲；刺激；神经冲动；推动力；推动",
    "example": "The eye converts light signals to nerve impulses.",
    "exampleCn": "眼睛把光信号转变成神经冲动。"
   },
   {
    "word": "ultraviolet",
    "phonetic": ",ʌltrə'vaɪələt",
    "pos": "adj.",
    "meaning": "[光]紫外的；紫外线的",
    "example": "Ozone in the stratosphere is important because it absorbs some of the Sun’s dangerous ultraviolet radiation.",
    "exampleCn": "在平流层的臭氧是重要的，因为它吸收了一些太阳中危险的紫外线辐射。"
   },
   {
    "word": "melodious",
    "phonetic": "mə'lodɪəs",
    "pos": "adj.",
    "meaning": "悦耳的；旋律优美的",
    "example": "He spoke in a quiet melodious voice.",
    "exampleCn": "他说话的声音轻柔悦耳。"
   },
   {
    "word": "crucial",
    "phonetic": "'krʊʃəl",
    "pos": "adj.",
    "meaning": "重要的；决定性的；定局的；决断的",
    "example": "The conservation of tropical forests is of crucial importance .",
    "exampleCn": "保护热带雨林至关重要。"
   },
   {
    "word": "commodity",
    "phonetic": "kə'mɑdəti",
    "pos": "n.",
    "meaning": "商品，[贸易]货物；日用品",
    "example": "agricultural commodities",
    "exampleCn": "农业商品"
   },
   {
    "word": "conceive",
    "phonetic": "kən'siv",
    "pos": "vt",
    "meaning": "怀孕；构思；以为；持有；怀孕；设想；考虑",
    "example": "Scientists first conceived the idea of the atomic bomb in the 1930’s.",
    "exampleCn": "在20世纪30年代，科学家第一次有了原子弹的设想。"
   },
   {
    "word": "monopoly",
    "phonetic": "mə'nɑpəli",
    "pos": "n.",
    "meaning": "[经]垄断；垄断者；[贸易]专卖权",
    "example": "a monopoly in copper trading",
    "exampleCn": "对铜交易的垄断"
   },
   {
    "word": "weird",
    "phonetic": "wɪrd",
    "pos": "adj.",
    "meaning": "怪异的；不可思议的；超自然的；（苏格兰）命运；预言",
    "example": "A really weird thing happened last night.",
    "exampleCn": "昨晚发生了一件非常奇怪的事。"
   },
   {
    "word": "stereotype",
    "phonetic": "'stɛrɪətaɪp",
    "pos": "n.",
    "meaning": "陈腔滥调，老套；铅版",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "smooth",
    "phonetic": "smʊð",
    "pos": "adj.",
    "meaning": "顺利的；光滑的；平稳的；使光滑；消除（障碍等）；使优雅；缓和；光滑地；平稳地；流畅地",
    "example": "Her skin felt smooth and cool.",
    "exampleCn": "她的皮肤摸上去又滑又凉。"
   },
   {
    "word": "clumsy",
    "phonetic": "'klʌmzi",
    "pos": "adj.",
    "meaning": "笨拙的",
    "example": "A clumsy waiter spilled wine all over her new skirt.",
    "exampleCn": "一名笨手笨脚的服务员把葡萄酒洒得她新裙子上到处都是。"
   },
   {
    "word": "portable",
    "phonetic": "'pɔrtəbl",
    "pos": "adj.",
    "meaning": "手提的，便携式的；轻便的",
    "example": "a portable radio",
    "exampleCn": "便携式收音机"
   },
   {
    "word": "voltage",
    "phonetic": "'voltɪdʒ",
    "pos": "n.",
    "meaning": "[电]电压",
    "example": "The systems are getting smaller and using lower voltages.",
    "exampleCn": "这些系统正变得更小而且使用更低的电压。"
   },
   {
    "word": "nuisance",
    "phonetic": "'nusns",
    "pos": "n.",
    "meaning": "讨厌的人；损害；麻烦事；讨厌的东西",
    "example": "He could be a bit of a nuisance when he was drunk.",
    "exampleCn": "他喝醉时会是一个有点令人讨厌的人。"
   },
   {
    "word": "intensify",
    "phonetic": "ɪn'tɛnsɪfaɪ",
    "pos": "vi",
    "meaning": "增强，强化；变激烈",
    "example": "In Junethe civil war intensified.",
    "exampleCn": "6月份内战更加激烈了。"
   },
   {
    "word": "retrieve",
    "phonetic": "rɪ'triv",
    "pos": "vt",
    "meaning": "[计]检索；恢复；重新得到；[计]检索；恢复，取回",
    "example": "The general made one last desperate effort to retrieve the situation.",
    "exampleCn": "将军为挽回局面而孤注一掷。"
   },
   {
    "word": "fist",
    "phonetic": "fɪst",
    "pos": "n.",
    "meaning": "拳头；掌握；笔迹；紧握；拳打；握成拳",
    "example": "She held the money tightly in her fist.",
    "exampleCn": "她把钱紧紧地攥在手中。"
   },
   {
    "word": "twinkle",
    "phonetic": "'twɪŋkl",
    "pos": "vi",
    "meaning": "闪烁；发亮；使闪耀；闪耀；闪烁",
    "example": "stars twinkling in the sky",
    "exampleCn": "天空中闪烁的星星"
   },
   {
    "word": "orchestra",
    "phonetic": "'ɔrkɪstrə",
    "pos": "n.",
    "meaning": "管弦乐队",
    "example": "He directed an orchestra.",
    "exampleCn": "他指挥一个管弦乐队。"
   },
   {
    "word": "conform",
    "phonetic": "kən'fɔrm",
    "pos": "vi",
    "meaning": "符合；遵照；适应环境；使遵守；使一致；使顺从；一致的；顺从的",
    "example": "the pressure on schoolchildren to conform",
    "exampleCn": "小学生要顺应社会的压力"
   },
   {
    "word": "fallible",
    "phonetic": "'fæləbl",
    "pos": "adj.",
    "meaning": "易犯错误的；不可靠的",
    "example": "Humans are fallible.",
    "exampleCn": "人孰无过。"
   },
   {
    "word": "fatigue",
    "phonetic": "fə'tig",
    "pos": "n.",
    "meaning": "[生理][心理][力]疲劳，疲乏；杂役；[生理][心理][力]使疲劳；使心智衰弱；[生理][心理][力]疲劳",
    "example": "{\"COLLOINEXA\":[\"metal fatigue\"]}",
    "exampleCn": "金属疲劳"
   },
   {
    "word": "practitioner",
    "phonetic": "præk'tɪʃənɚ",
    "pos": "n.",
    "meaning": "实践者，从事者；(医生或律师等)开业者",
    "example": "one of golf’s most experienced practitioners",
    "exampleCn": "最有经验的高尔夫球员之一"
   },
   {
    "word": "Catholic",
    "phonetic": "kæθəlɪk",
    "pos": "n.",
    "meaning": "天主教教徒",
    "example": "At least nine out of ten Mexicans are baptized Catholics.",
    "exampleCn": "至少十分之九的墨西哥人是受过洗礼的天主教徒。"
   },
   {
    "word": "comedy",
    "phonetic": "'kɑmədi",
    "pos": "n.",
    "meaning": "喜剧；一出喜剧，喜剧性事件",
    "example": "a career in stand-up comedy",
    "exampleCn": "单口喜剧表演职业"
   },
   {
    "word": "originate",
    "phonetic": "əˈrɪdʒəˌnet",
    "pos": "vt",
    "meaning": "引起；创作；发源；发生；起航",
    "example": "How did the plan originate?",
    "exampleCn": "这个计划最早是怎么想到的？"
   },
   {
    "word": "allocate",
    "phonetic": "'æləket",
    "pos": "vt",
    "meaning": "分配；拨出；使坐落于；分配；指定",
    "example": "Tickets are limited and will be allocated to those who apply first.",
    "exampleCn": "票数有限，将分配给那些先申请的人。"
   },
   {
    "word": "junior",
    "phonetic": "'dʒunɪɚ",
    "pos": "adj.",
    "meaning": "年少的；后进的；下级的",
    "example": "She now lives with actor Denis Lawson, 10 years her junior.",
    "exampleCn": "她现在和比她小10岁的演员丹尼斯·劳森同居。"
   },
   {
    "word": "cupboard",
    "phonetic": "'kʌbɚd",
    "pos": "n.",
    "meaning": "[家具]碗柜；食橱",
    "example": "It’s in the kitchen cupboard.",
    "exampleCn": "它在厨房的碗柜里。"
   },
   {
    "word": "moped",
    "phonetic": "'mopɛd",
    "pos": "n.",
    "meaning": "机动脚踏车",
    "example": "Look at that family on a moped!",
    "exampleCn": "看看脚踏车上的那一家子！"
   },
   {
    "word": "plus",
    "phonetic": "plʌs",
    "pos": "n.",
    "meaning": "正号，加号；好处；附加额；[数]正的；附加的",
    "example": "Three plus six equals nine (3+6=9).",
    "exampleCn": "3 加6等于9。"
   },
   {
    "word": "optimism",
    "phonetic": "'ɑptɪmɪzəm",
    "pos": "n.",
    "meaning": "乐观，乐观主义",
    "example": "There are grounds for cautious optimism.",
    "exampleCn": "有理由保持谨慎乐观。"
   },
   {
    "word": "embody",
    "phonetic": "ɪm'bɑdi",
    "pos": "vt",
    "meaning": "体现，使具体化；具体表达",
    "example": "She embodies everything I admire in a teacher.",
    "exampleCn": "她具备了我所钦佩的教师该具备的一切素质。"
   },
   {
    "word": "wedge",
    "phonetic": "wɛdʒ",
    "pos": "vt",
    "meaning": "楔入；挤进；楔住；楔入；挤进；楔子；楔形物；导致分裂的东西",
    "example": "Garnish with lemon wedges.",
    "exampleCn": "用几角柠檬片作装饰。"
   },
   {
    "word": "ceremony",
    "phonetic": "ˈsɛrəˌmoʊni",
    "pos": "n.",
    "meaning": "典礼，仪式；礼节，礼仪；客套，虚礼",
    "example": "a wedding ceremony",
    "exampleCn": "婚礼"
   },
   {
    "word": "suicide",
    "phonetic": "'suɪsaɪd",
    "pos": "n.",
    "meaning": "自杀；自杀行为；自杀者；自杀的；自杀；自杀",
    "example": "More people commit suicide at Christmas than at any other time.",
    "exampleCn": "圣诞节期间自杀的人比其他任何时候都多。"
   },
   {
    "word": "swear",
    "phonetic": "swɛr",
    "pos": "vt",
    "meaning": "发誓；咒骂；发誓，宣誓；诅咒；宣誓；诅咒",
    "example": "I never touched your purse, I swear!",
    "exampleCn": "我绝对没有碰过你的钱包，我发誓！"
   },
   {
    "word": "considerable",
    "phonetic": "kən'sɪdərəbl",
    "pos": "adj.",
    "meaning": "相当大的；重要的，值得考虑的",
    "example": "Michael has already spent considerable time in Barcelona.",
    "exampleCn": "迈克尔在巴塞罗那已经待了相当长的时间了。"
   },
   {
    "word": "judicial",
    "phonetic": "dʒʊ'dɪʃəl",
    "pos": "adj.",
    "meaning": "公正的，明断的；[法]法庭的；审判上的",
    "example": "...an independent judicial system.",
    "exampleCn": "…一个独立的司法体系。"
   },
   {
    "word": "catastrophe",
    "phonetic": "kə'tæstrəfi",
    "pos": "n.",
    "meaning": "大灾难；大祸；惨败",
    "example": "From all points of view, war would be a catastrophe.",
    "exampleCn": "从各个方面来看，战争都会是一场灾难。"
   },
   {
    "word": "hose",
    "phonetic": "hoz",
    "pos": "n.",
    "meaning": "[橡胶]软管；长统袜；男性穿的紧身裤；用软管浇水；痛打",
    "example": "Water in the engine compartment is sucked away by a hose.",
    "exampleCn": "发动机舱里的水由一条软管吸走。"
   },
   {
    "word": "minimum",
    "phonetic": "'mɪnɪməm",
    "pos": "adj.",
    "meaning": "[数]最小的；最低的",
    "example": "At a minimum, we must recruit two new teachers.",
    "exampleCn": "我们最起码应该招两名新教师。"
   },
   {
    "word": "domestic",
    "phonetic": "də'mɛstɪk",
    "pos": "adj.",
    "meaning": "国内的；家庭的；驯养的；一心只管家务的；国货；佣人",
    "example": "Unfortunately his domestic life wasn’t very happy.",
    "exampleCn": "不幸的是，他的家庭生活并不幸福。"
   },
   {
    "word": "deficit",
    "phonetic": "'dɛfəsɪt",
    "pos": "n.",
    "meaning": "[财政]赤字；不足额",
    "example": "the country’s widening budget deficit",
    "exampleCn": "这个国家日益严重的预算赤字"
   },
   {
    "word": "leave",
    "phonetic": "liv",
    "pos": "vt",
    "meaning": "离开；留下；遗忘；委托；离开，出发；留下；许可，同意；休假",
    "example": "My baby gets upset when I leave the room.",
    "exampleCn": "我一离开房间宝宝就会不安。"
   },
   {
    "word": "abuse",
    "phonetic": "ə'bjus",
    "pos": "n.",
    "meaning": "滥用；虐待；辱骂；弊端；恶习，陋习；滥用；虐待；辱骂",
    "example": "A self-monitoring tax system is clearly open to abuse (=  able to be used wrongly  ) .",
    "exampleCn": "自我监督的税收制度明显会被滥用。"
   },
   {
    "word": "feature",
    "phonetic": "'fitʃɚ",
    "pos": "n.",
    "meaning": "特色，特征；容貌；特写或专题节目；特写；以…为特色；由…主演",
    "example": "Air bags are a standard feature in most new cars.",
    "exampleCn": "气囊是大多数新车的标准配置。"
   },
   {
    "word": "escalator",
    "phonetic": "'ɛskə'letɚ",
    "pos": "n.",
    "meaning": "自动扶梯",
    "example": "Take the escalator to the third floor and it's the last office on the left.",
    "exampleCn": "乘电梯到4楼，左边最后的那个办公室就是。"
   },
   {
    "word": "domain",
    "phonetic": "do'men",
    "pos": "n.",
    "meaning": "领域；域名；产业；地产",
    "example": "Looking after the house was viewed as a woman’s domain.",
    "exampleCn": "料理家务被认为是女性的份内之事。"
   },
   {
    "word": "expand",
    "phonetic": "ɪk'spænd",
    "pos": "vt",
    "meaning": "扩张；使膨胀；详述；发展；张开，展开",
    "example": "Water expands as it freezes.",
    "exampleCn": "水结冰时会膨胀。"
   },
   {
    "word": "corresponding",
    "phonetic": ",kɔrə'spɑndɪŋ",
    "pos": "adj.",
    "meaning": "相当的，相应的；一致的；通信的；类似（correspond的ing形式）；相配",
    "example": "The war and the corresponding fall in trade have had a devastating effect on the country.",
    "exampleCn": "战争以及由此所导致的贸易量下降对这个国家产生了致命的影响。"
   },
   {
    "word": "deem",
    "phonetic": "dim",
    "pos": "vt",
    "meaning": "认为，视作；相信；认为，持某种看法；作某种评价",
    "example": "French and German were deemed essential.",
    "exampleCn": "法语和德语被认为是必需的。"
   },
   {
    "word": "passion",
    "phonetic": "'pæʃən",
    "pos": "n.",
    "meaning": "激情；热情；酷爱；盛怒",
    "example": "His eyes were burning with passion.",
    "exampleCn": "他的眼中欲火燃烧。"
   },
   {
    "word": "flour",
    "phonetic": "'flaʊɚ",
    "pos": "n.",
    "meaning": "[粮食]面粉；粉状物质",
    "example": "He added some flour to thicken the soup.",
    "exampleCn": "他加了一些面粉使汤浓些。"
   },
   {
    "word": "collision",
    "phonetic": "kə'lɪʒən",
    "pos": "n.",
    "meaning": "[物]碰撞；冲突",
    "example": "Two people were killed in a head-on collision (= between two vehicles that are moving directly towards each other ) on highway 218.",
    "exampleCn": "218号公路上有两辆汽车迎面相撞，两人死亡。"
   },
   {
    "word": "ascribe",
    "phonetic": "ə'skraɪb",
    "pos": "vt",
    "meaning": "归因于；归咎于",
    "example": "An autopsy eventually ascribed the baby's death to sudden infant death syndrome.",
    "exampleCn": "一次尸检最终把这名婴儿的死亡归因于婴儿猝死综合症。"
   },
   {
    "word": "infest",
    "phonetic": "ɪn'fɛst",
    "pos": "vt",
    "meaning": "骚扰；寄生于；大批出没；大批滋生",
    "example": "...pests like aphids which infest cereal crops.",
    "exampleCn": "…像蚜虫那样大肆侵害谷类作物的害虫。"
   },
   {
    "word": "intervene",
    "phonetic": ",ɪntɚ'vin",
    "pos": "vi",
    "meaning": "干涉；调停；插入",
    "example": "The army will have to intervene to prevent further fighting.",
    "exampleCn": "军队将不得不干预以阻止进一步的战斗。"
   },
   {
    "word": "rectify",
    "phonetic": "'rɛktɪfaɪ",
    "pos": "vt",
    "meaning": "改正；精馏；整流",
    "example": "I did my best to rectify the situation, but the damage was already done.",
    "exampleCn": "我竭尽全力去挽回局面，但损害已经造成了。"
   },
   {
    "word": "temptation",
    "phonetic": "tɛmp'teʃən",
    "pos": "n.",
    "meaning": "引诱；诱惑物",
    "example": "Resist the temptation to buy the item until you’re certain you need it.",
    "exampleCn": "要抵挡住购买的诱惑，除非你确有需要。"
   },
   {
    "word": "smash",
    "phonetic": "smæʃ",
    "pos": "vt",
    "meaning": "粉碎；使破产；溃裂；破碎；扣球；冲突；大败；粉碎；打碎；了不起的；非常轰动的；出色的",
    "example": "Vandals had smashed all the windows.",
    "exampleCn": "破坏分子打碎了所有的窗子。"
   },
   {
    "word": "explosive",
    "phonetic": "ɪk'splosɪv; ɪk'splozɪv",
    "pos": "adj.",
    "meaning": "[力]爆炸的；爆炸性的；爆发性的；[化工]炸药；[力]爆炸物",
    "example": "...one-hundred-and-fifty pounds of Semtex explosive.",
    "exampleCn": "…150磅的塞姆汀塑料炸药。"
   },
   {
    "word": "coach",
    "phonetic": "kotʃ",
    "pos": "n.",
    "meaning": "教练；旅客车厢；[车辆]长途公车；四轮大马车；训练；指导",
    "example": "Nigel coaches a cricket team in his spare time.",
    "exampleCn": "奈杰尔业余时间担任一个板球队的教练。"
   },
   {
    "word": "induce",
    "phonetic": "ɪn'dus",
    "pos": "vt",
    "meaning": "诱导；引起；引诱；感应",
    "example": "Doctors said surgery could induce a heart attack.",
    "exampleCn": "医生们说手术可能导致心脏病。"
   },
   {
    "word": "curb",
    "phonetic": "kɝb",
    "pos": "n.",
    "meaning": "抑制；路边；勒马绳；控制；勒住",
    "example": "measures to curb the spread of the virus",
    "exampleCn": "控制病毒扩散的措施"
   },
   {
    "word": "untold",
    "phonetic": ",ʌn'told",
    "pos": "adj.",
    "meaning": "数不清的；未说过的；未透露的；无限的",
    "example": "The rumours will do untold damage to his reputation.",
    "exampleCn": "这些谣言会给他的名声造成无法估计的损害。"
   },
   {
    "word": "predisposition",
    "phonetic": "'pridɪspə'zɪʃən",
    "pos": "n.",
    "meaning": "倾向；素质；易染病体质",
    "example": "There is a thin dividing line between educating the public and creating a predisposition to panic.",
    "exampleCn": "教育公众和营造恐慌倾向之间只有细小的区别。"
   },
   {
    "word": "climax",
    "phonetic": "'klaɪmæks",
    "pos": "n.",
    "meaning": "高潮；顶点；层进法；极点",
    "example": "The festival reaches its climax with the traditional boat-burning ceremony.",
    "exampleCn": "传统的烧船仪式将节庆活动推向了高潮。"
   },
   {
    "word": "remedy",
    "phonetic": "'rɛmədi",
    "pos": "vt",
    "meaning": "补救；治疗；纠正；补救；治疗；赔偿",
    "example": "The problems in our schools do not have a simple remedy.",
    "exampleCn": "我们学校的问题没有简单的解决办法。"
   },
   {
    "word": "archives",
    "phonetic": "'a:kaivz",
    "pos": "n.",
    "meaning": "档案，档案室；案卷（archive的复数）",
    "example": "...the State Library's archives.",
    "exampleCn": "…国立图书馆的档案。"
   },
   {
    "word": "magnificent",
    "phonetic": "mæg'nɪfəsnt",
    "pos": "adj.",
    "meaning": "高尚的；壮丽的；华丽的；宏伟的",
    "example": "a magnificent performance",
    "exampleCn": "气势恢宏的演出"
   },
   {
    "word": "toil",
    "phonetic": "tɔɪl",
    "pos": "n.",
    "meaning": "辛苦；苦工；网；圈套；辛苦工作；艰难地行进",
    "example": "People who toiled in dim, dank factories were too exhausted to enjoy their family life.",
    "exampleCn": "在阴暗潮湿的工厂里苦作的人们精疲力竭了，无法享受家庭生活。"
   },
   {
    "word": "mortal",
    "phonetic": "'mɔrtl",
    "pos": "adj.",
    "meaning": "凡人的；[医]致死的；终有一死的；不共戴天的；人类，凡人",
    "example": "The computer has dealt a mortal blow to traditional printing methods.",
    "exampleCn": "计算机 给了传统的印刷方法一记致命的打击。"
   },
   {
    "word": "flutter",
    "phonetic": "'flʌtɚ",
    "pos": "vi",
    "meaning": "飘动；鼓翼；烦扰；拍；使焦急；使飘动；摆动；鼓翼；烦扰",
    "example": "A small bird fluttered past the window.",
    "exampleCn": "一只小鸟拍打着翅膀飞过窗前。"
   },
   {
    "word": "obscure",
    "phonetic": "əb'skjʊr",
    "pos": "adj.",
    "meaning": "模糊的；晦涩的；[光]昏暗的；遮掩；使变暗；使难理解",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "deposit",
    "phonetic": "dɪ'pɑzɪt",
    "pos": "n.",
    "meaning": "存款；[金融]保证金；[地质][电]沉淀物；[地质]使沉积；存放；[电]沉淀",
    "example": "fatty deposits on the heart",
    "exampleCn": "心脏上沉积的脂肪层"
   },
   {
    "word": "dignity",
    "phonetic": "'dɪɡnəti",
    "pos": "n.",
    "meaning": "尊严；高贵",
    "example": "Prisoners should be treated with regard for human dignity .",
    "exampleCn": "对待囚犯应该考虑到人的尊严。"
   },
   {
    "word": "lucrative",
    "phonetic": "'lukrətɪv",
    "pos": "adj.",
    "meaning": "[金融]有利可图的，赚钱的；合算的",
    "example": "Thousands of ex-army officers have found lucrative jobs in private security firms.",
    "exampleCn": "成千上万的退役军官在私人保安公司找到了薪水丰厚的工作。"
   },
   {
    "word": "hint",
    "phonetic": "hɪnt",
    "pos": "n.",
    "meaning": "暗示；线索；暗示；示意；示意",
    "example": "There have been hints that he may take up coaching.",
    "exampleCn": "他暗示过可能会出任教练。"
   },
   {
    "word": "resilience",
    "phonetic": "rɪˈzɪliəns",
    "pos": "n.",
    "meaning": "恢复力；[力]弹力；顺应力",
    "example": "And I think what we're seeing in the economy now is the inherent resilience of the American economy and the American people.",
    "exampleCn": "而且我认为，我认为，在经济方面，我们现在看到的是美国经济和美国人民一直以来所固有的弹性。"
   },
   {
    "word": "sequence",
    "phonetic": "'sikwəns",
    "pos": "n.",
    "meaning": "[数][计]序列；顺序；续发事件",
    "example": "Be careful to perform the actions in the correct sequence .",
    "exampleCn": "注意要按正确的顺序来完成动作。"
   },
   {
    "word": "aptitude",
    "phonetic": "ˈæptɪˌtud, -ˌtjud",
    "pos": "n.",
    "meaning": "天资；自然倾向；适宜",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "scrap",
    "phonetic": "skræp",
    "pos": "n.",
    "meaning": "[机]碎片；残余物；打架；少量；废弃；使解体；拆毁；废弃的；零碎的；吵架",
    "example": "a rug made out of old scraps of material",
    "exampleCn": "用旧零碎材料拼做的一块小地毯"
   },
   {
    "word": "asset",
    "phonetic": "'æsɛt",
    "pos": "n.",
    "meaning": "[经]资产；优点；有用的东西；有利条件",
    "example": "the value of a company’s assets",
    "exampleCn": "公司的资产价值"
   },
   {
    "word": "throng",
    "phonetic": "θrɔŋ",
    "pos": "n.",
    "meaning": "人群；众多；群集；挤满；蜂拥而至；群集；拥挤的",
    "example": "She got lost in the throng.",
    "exampleCn": "她在人群中迷路了。"
   },
   {
    "word": "postmortem",
    "phonetic": ",post'mɔrtəm",
    "pos": "n.",
    "meaning": "验尸；检视；尸体检查",
    "example": "A postmortem was carried out to establish the cause of death.",
    "exampleCn": "进行了尸检以确定死因。"
   },
   {
    "word": "time",
    "phonetic": "taɪm",
    "pos": "n.",
    "meaning": "[物]时间；时代；次数；节拍；倍数；定时的；定期的；分期的",
    "example": "Einstein changed the way we think about space and time.",
    "exampleCn": "爱因斯坦改变了我们的时空概念。"
   },
   {
    "word": "elsewhere",
    "phonetic": "els'weə; 'elsweə",
    "pos": "adv.",
    "meaning": "在别处；到别处",
    "example": "She is becoming famous in Australia and elsewhere.",
    "exampleCn": "她在澳大利亚和其他地方渐渐出名了。"
   },
   {
    "word": "monologue",
    "phonetic": "'mɑnəlɔɡ",
    "pos": "n.",
    "meaning": "独白",
    "example": "Henry looked up, then continued his monologue.",
    "exampleCn": "亨利抬起头，然后继续他的长篇独白。"
   },
   {
    "word": "property",
    "phonetic": "'prɑpɚti",
    "pos": "n.",
    "meaning": "性质，性能；[经]财产；[法]所有权",
    "example": "The hotel is not responsible for any loss or damage to guests’ personal property .",
    "exampleCn": "宾馆对住客个人财物的丢失和损坏概不负责。"
   },
   {
    "word": "displace",
    "phonetic": "dɪs'ples",
    "pos": "vt",
    "meaning": "取代；置换；转移；把…免职；排水",
    "example": "Coal has been displaced by natural gas as a major source of energy.",
    "exampleCn": "作为一种主要能源，煤的地位已为天然气所取代。"
   },
   {
    "word": "identical",
    "phonetic": "aɪ'dɛntɪkl",
    "pos": "adj.",
    "meaning": "[数]同一的；完全相同的",
    "example": "four identical houses",
    "exampleCn": "四幢一模一样的房子"
   },
   {
    "word": "gorgeous",
    "phonetic": "'ɡɔrdʒəs",
    "pos": "adj.",
    "meaning": "华丽的，灿烂的；极好的",
    "example": "...gorgeous mountain scenery.",
    "exampleCn": "…壮观的山间景色。"
   },
   {
    "word": "withstand",
    "phonetic": "wɪð'stænd",
    "pos": "vt",
    "meaning": "抵挡；禁得起；反抗；反抗",
    "example": "...armoured vehicles designed to withstand chemical attack.",
    "exampleCn": "…设计来抵御化学攻击的装甲车。"
   },
   {
    "word": "deluge",
    "phonetic": "'dɛljʊdʒ",
    "pos": "n.",
    "meaning": "洪水；泛滥；暴雨；使泛滥；压倒",
    "example": "There was a deluge of requests for interviews and statements.",
    "exampleCn": "对接受访谈和发表声明的要求铺天盖地地涌来。"
   },
   {
    "word": "immerse",
    "phonetic": "ɪ'mɝs",
    "pos": "vt",
    "meaning": "沉浸；使陷入",
    "example": "He left school at 16 and immersed himself in the Labour Party.",
    "exampleCn": "他16岁离开学校投身工党。"
   },
   {
    "word": "glorious",
    "phonetic": "'ɡlɔriəs; 'ɡloriəs",
    "pos": "adj.",
    "meaning": "光荣的；辉煌的；极好的",
    "example": "a truly glorious future",
    "exampleCn": "无比美好的将来"
   },
   {
    "word": "sponge",
    "phonetic": "spʌndʒ",
    "pos": "vt",
    "meaning": "抹掉；用海绵擦拭；讨得；采集海绵；过寄生生活；海绵般地吸收；[橡胶][无脊椎]海绵；海绵状物",
    "example": "a Victoria sponge",
    "exampleCn": "维多利亚海绵蛋糕"
   },
   {
    "word": "glimpse",
    "phonetic": "ɡlɪmps",
    "pos": "n.",
    "meaning": "一瞥，一看；瞥见；瞥见",
    "example": "I glimpsed a figure at the window.",
    "exampleCn": "我瞥见窗前有个身影。"
   },
   {
    "word": "consult",
    "phonetic": "kən'sʌlt",
    "pos": "vt",
    "meaning": "查阅；商量；向…请教；请教；商议；当顾问",
    "example": "If symptoms persist, consult a doctor without delay.",
    "exampleCn": "如果症状持续的话，马上咨询医生。"
   },
   {
    "word": "humdrum",
    "phonetic": "'hʌmdrʌm",
    "pos": "adj.",
    "meaning": "单调的；无聊的；单调；乏味",
    "example": "...her lawyer husband, trapped in a humdrum but well-paid job.",
    "exampleCn": "...她整天做着单调乏味的工作但收入颇丰的律师丈夫。"
   },
   {
    "word": "crown",
    "phonetic": "kraʊn",
    "pos": "n.",
    "meaning": "[纸]王冠；花冠；王权；顶点；加冕；居…之顶；表彰；使圆满完成",
    "example": "a hat with a high crown",
    "exampleCn": "高顶帽"
   },
   {
    "word": "trend",
    "phonetic": "trɛnd",
    "pos": "n.",
    "meaning": "[统计]趋势，倾向；[地质]走向；趋向，伸向",
    "example": "The current trend is towards more part-time employment.",
    "exampleCn": "当前的趋势是雇用更多的兼职人员。"
   },
   {
    "word": "stretch",
    "phonetic": "strɛtʃ",
    "pos": "vt&vi",
    "meaning": "伸长，拉长；滥用，曲解；伸展",
    "example": "The procession stretched for several miles.",
    "exampleCn": "游行队伍延伸了数英里。"
   },
   {
    "word": "pollinate",
    "phonetic": "'pɑlənet",
    "pos": "v.",
    "meaning": "授以花粉",
    "example": "flowers pollinated by bees",
    "exampleCn": "由蜜蜂授粉的花"
   },
   {
    "word": "article",
    "phonetic": "'ɑrtɪkl",
    "pos": "n.",
    "meaning": "文章；物品；[法]条款；[语]冠词",
    "example": "The paper’s leading article (=  the main article  ) described the government as weak.",
    "exampleCn": "该报社论称政府软弱。"
   },
   {
    "word": "haven",
    "phonetic": "'hevn",
    "pos": "n.",
    "meaning": "港口；避难所，安息所",
    "example": "...Lake Baringo, a freshwater haven for a mixed variety of birds.",
    "exampleCn": "…百瑞高湖，一个适合各种鸟类的淡水栖息地。"
   },
   {
    "word": "adopt",
    "phonetic": "ə'dɑpt",
    "pos": "vt",
    "meaning": "采取；接受；收养；正式通过",
    "example": "Sally was adopted when she was four.",
    "exampleCn": "莎莉四岁时被人收养。"
   },
   {
    "word": "protrude",
    "phonetic": "pro'trud",
    "pos": "vt",
    "meaning": "使突出，使伸出；突出，伸出",
    "example": "...a huge round mass of smooth rock protruding from the water.",
    "exampleCn": "…从水中突出来的一块光滑的圆形巨石。"
   },
   {
    "word": "chapel",
    "phonetic": "'tʃæpl",
    "pos": "n.",
    "meaning": "小礼拜堂，[建]小教堂；礼拜",
    "example": "Bethan goes to chapel every Sunday.",
    "exampleCn": "贝唐每个星期天都去教堂做礼拜。"
   },
   {
    "word": "fake",
    "phonetic": "feɪk",
    "pos": "n.",
    "meaning": "假货，骗子；伪造",
    "example": "The painting was judged a fake.",
    "exampleCn": "这幅画被鉴定为赝品。"
   },
   {
    "word": "moist",
    "phonetic": "mɔɪst",
    "pos": "adj.",
    "meaning": "[气象][物]潮湿的；多雨的；含泪的；[气象][物]潮湿",
    "example": "Make sure the soil is moist before planting the seeds.",
    "exampleCn": "播种之前要确保土壤湿润。"
   },
   {
    "word": "regardless",
    "phonetic": "rɪ'ɡɑrdləs",
    "pos": "adj.",
    "meaning": "不管；不顾；不注意",
    "example": "The new tax laws were rammed through regardless of the opposition of the majority of the people.",
    "exampleCn": "不顾大多数人民的反对，新的税法强行通过了。"
   },
   {
    "word": "slate",
    "phonetic": "slet",
    "pos": "n.",
    "meaning": "[岩]板岩；[地质]石板；蓝色；石片",
    "example": "There were several slates missing from the roof.",
    "exampleCn": "房顶有几块石板瓦掉了。"
   },
   {
    "word": "glow",
    "phonetic": "ɡlo",
    "pos": "vi",
    "meaning": "发热；洋溢；绚丽夺目；灼热；色彩鲜艳；兴高采烈",
    "example": "She had a healthy glow in her cheeks.",
    "exampleCn": "她脸上泛着健康的红晕。"
   },
   {
    "word": "federation",
    "phonetic": "'fɛdə'reʃən",
    "pos": "n.",
    "meaning": "联合；联邦；联盟；联邦政府",
    "example": "the National Federation of Women’s Institutes",
    "exampleCn": "〔英国及英联邦国家〕妇女协会全国联合会"
   },
   {
    "word": "cunning",
    "phonetic": "'kʌnɪŋ",
    "pos": "adj.",
    "meaning": "狡猾的；巧妙的；可爱的；狡猾",
    "example": "the tiger’s ferocity and cunning",
    "exampleCn": "老虎的凶猛和狡诈"
   },
   {
    "word": "gust",
    "phonetic": "ɡʌst",
    "pos": "n.",
    "meaning": "风味；一阵狂风；趣味",
    "example": "A gust of wind drove down the valley.",
    "exampleCn": "一阵狂风掠过山谷。"
   },
   {
    "word": "chore",
    "phonetic": "tʃɔr",
    "pos": "n.",
    "meaning": "家庭杂务；日常的零星事务；讨厌的或累人的工作",
    "example": "everyday chores like shopping and housework",
    "exampleCn": "购物和做家务之类的日常琐事"
   },
   {
    "word": "absurd",
    "phonetic": "əbˈsɚd, -ˈzɚd",
    "pos": "adj.",
    "meaning": "荒谬的；可笑的",
    "example": "It seems an absurd idea.",
    "exampleCn": "这似乎是个荒唐的想法。"
   },
   {
    "word": "surge",
    "phonetic": "sɝdʒ",
    "pos": "n.",
    "meaning": "大浪；汹涌澎湃；巨涌；激增；汹涌；使颠簸",
    "example": "A wave surged up towards them.",
    "exampleCn": "一个浪头向他们涌来。"
   },
   {
    "word": "survival",
    "phonetic": "sɚ'vaɪvl",
    "pos": "n.",
    "meaning": "幸存，残存；幸存者，残存物",
    "example": "The doctors gave him a one in ten chance of survival .",
    "exampleCn": "医生说他有十分之一的生存希望。"
   },
   {
    "word": "ignite",
    "phonetic": "ɪɡ'naɪt",
    "pos": "vt",
    "meaning": "点燃；使燃烧；使激动；点火；燃烧",
    "example": "The petrol tank suddenly ignited.",
    "exampleCn": "油箱突然着火了。"
   },
   {
    "word": "gigantic",
    "phonetic": "dʒaɪ'ɡæntɪk",
    "pos": "adj.",
    "meaning": "巨大的，庞大的",
    "example": "a gigantic skyscraper",
    "exampleCn": "摩天大楼"
   },
   {
    "word": "prospect",
    "phonetic": "'prɑspɛkt",
    "pos": "n.",
    "meaning": "前途；预期；景色；勘探，找矿；勘探，勘察",
    "example": "Unfortunately, there is little prospect of seeing these big questions answered.",
    "exampleCn": "遗憾的是，几乎没有可能看到这些重大问题得到解答。"
   },
   {
    "word": "term",
    "phonetic": "tɝm",
    "pos": "n.",
    "meaning": "术语；学期；期限；条款",
    "example": "Teachers often feel overworked in term time (= during the term ) .",
    "exampleCn": "教师在学期内经常觉得工作担子过重。"
   },
   {
    "word": "refrain",
    "phonetic": "rɪ'fren",
    "pos": "vi",
    "meaning": "节制，克制；避免；制止；叠句，副歌；重复",
    "example": "Mrs. Hardie refrained from making any comment.",
    "exampleCn": "哈迪太太忍住了没做任何评论。"
   },
   {
    "word": "equator",
    "phonetic": "ɪ'kwetɚ",
    "pos": "n.",
    "meaning": "[天][地理]赤道",
    "example": "The United States is north of the equator.",
    "exampleCn": "美国位于赤道以北。"
   },
   {
    "word": "slam",
    "phonetic": "slæm",
    "pos": "n.",
    "meaning": "猛击；砰然声",
    "example": "We heard a car door slam.",
    "exampleCn": "我们听到有车门砰的一声关上了。"
   },
   {
    "word": "render",
    "phonetic": "'rɛndɚ",
    "pos": "vt",
    "meaning": "致使；提出；实施；着色；以…回报；打底；交纳；粉刷",
    "example": "an obligation to render assistance to those in need",
    "exampleCn": "为有困难的人提供援助的义务"
   },
   {
    "word": "whatever",
    "phonetic": "wət'ɛvɚ",
    "pos": "adj.",
    "meaning": "任何的，无论什么样的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "steer",
    "phonetic": "stɪr",
    "pos": "vt",
    "meaning": "控制，引导；驾驶；驾驶，掌舵；行驶",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "affection",
    "phonetic": "ə'fɛkʃən",
    "pos": "n.",
    "meaning": "喜爱，[心理]感情；影响；感染",
    "example": "She thought of him with affection.",
    "exampleCn": "她怀着喜爱想起了他。"
   },
   {
    "word": "hold",
    "phonetic": "hold",
    "pos": "vt",
    "meaning": "持有；拥有；保存；拘留；约束或控制；支持；有效；持续；控制；保留",
    "example": "This year’s conference will be held at the Hilton Hotel.",
    "exampleCn": "今年的会议将在希尔顿酒店召开。"
   },
   {
    "word": "lull",
    "phonetic": "lʌl",
    "pos": "vt",
    "meaning": "使平静；使安静；哄骗；平息；减弱；停止；间歇；暂停；暂时平静",
    "example": "The hum of the tyres on the road lulled her to sleep.",
    "exampleCn": "一路上滚滚的车轮声使她昏昏欲睡。"
   },
   {
    "word": "invaluable",
    "phonetic": "ɪn'væljʊəbl",
    "pos": "adj.",
    "meaning": "无价的；非常贵重的",
    "example": "The internet is an invaluable source of information.",
    "exampleCn": "因特网是十分有价值的信息来源。"
   },
   {
    "word": "plagiarize",
    "phonetic": "'pledʒə'raɪz",
    "pos": "vi",
    "meaning": "剽窃；抄袭；剽窃；抄袭",
    "example": "He accused other scientists of plagiarizing his research.",
    "exampleCn": "他指控其他科学家剽窃他的研究成果。"
   },
   {
    "word": "acid",
    "phonetic": "'æsɪd",
    "pos": "n.",
    "meaning": "[化学]酸；<俚>迷幻药；[食品]酸的；讽刺的；刻薄的",
    "example": "a juicy apple with a slightly acid flavour",
    "exampleCn": "一个多汁、略带酸味的苹果"
   },
   {
    "word": "mutual",
    "phonetic": "'mjutʃuəl",
    "pos": "adj.",
    "meaning": "共同的；相互的，彼此的",
    "example": "I didn’t like Dev, and the feeling seemed to be mutual.",
    "exampleCn": "我不喜欢德夫，他好像也不喜欢我。"
   },
   {
    "word": "publicity",
    "phonetic": "pʌb'lɪsəti",
    "pos": "n.",
    "meaning": "宣传，宣扬；公开；广告；注意",
    "example": "Much advance publicity was given to the talks.",
    "exampleCn": "会谈之前做了大量的宣传。"
   },
   {
    "word": "grate",
    "phonetic": "ɡret",
    "pos": "n.",
    "meaning": "壁炉；格栅",
    "example": "A wood fire burned in the grate.",
    "exampleCn": "柴火在炉栅里燃烧。"
   },
   {
    "word": "administer",
    "phonetic": "əd'mɪnɪstɚ",
    "pos": "vt",
    "meaning": "管理；执行；给予",
    "example": "The money will be administered by local charities.",
    "exampleCn": "这笔资金将由当地慈善机构管理。"
   },
   {
    "word": "restrain",
    "phonetic": "rɪ'stren",
    "pos": "vt",
    "meaning": "抑制，控制；约束；制止",
    "example": "Wally gripped my arm, partly to restrain me and partly to reassure me.",
    "exampleCn": "沃利抓住了我的胳膊，部分是想制止我，部分是想安慰我。"
   },
   {
    "word": "martial",
    "phonetic": "'mɑrʃəl",
    "pos": "adj.",
    "meaning": "军事的；战争的；尚武的",
    "example": "martial music",
    "exampleCn": "军乐"
   },
   {
    "word": "veil",
    "phonetic": "vel",
    "pos": "n.",
    "meaning": "面纱；[服装]面罩；遮蔽物；托词；遮蔽；掩饰；以面纱遮掩；用帷幕分隔",
    "example": "She lifted her veil with both hands.",
    "exampleCn": "她用双手揭开面纱。"
   },
   {
    "word": "inflation",
    "phonetic": "ɪn'fleʃən",
    "pos": "n.",
    "meaning": "膨胀；[金融]通货膨胀；夸张；自命不凡",
    "example": "Inflation is now at over 16%.",
    "exampleCn": "通货膨胀率现已超过16%。"
   },
   {
    "word": "previous",
    "phonetic": "'privɪəs",
    "pos": "adj.",
    "meaning": "以前的；早先的；过早的；在先；在…以前",
    "example": "She has a teenage daughter from a previous marriage.",
    "exampleCn": "她有个出自前一次婚姻的十几岁的女儿。"
   },
   {
    "word": "eclipse",
    "phonetic": "ɪ'klɪps",
    "pos": "n&v",
    "meaning": "[天](日，月)蚀",
    "example": "an eclipse of the sun",
    "exampleCn": "日食"
   },
   {
    "word": "scarcely",
    "phonetic": "'skɛrsli",
    "pos": "adv.",
    "meaning": "几乎不，简直不；简直没有",
    "example": "The city had scarcely changed in 20 years.",
    "exampleCn": "这座城市20年中几乎没有什么改变。"
   },
   {
    "word": "platitude",
    "phonetic": "'plætɪtud",
    "pos": "n.",
    "meaning": "陈词滥调；平凡；陈腐",
    "example": "His excuse was the platitude ‘boys will be boys.’",
    "exampleCn": "他还是那一套理由:“男孩总归是男孩。”"
   },
   {
    "word": "incentive",
    "phonetic": "ɪn'sɛntɪv",
    "pos": "n.",
    "meaning": "动机；刺激；激励的；刺激的",
    "example": "As an added incentive, there’s a bottle of champagne for the best team.",
    "exampleCn": "给最优秀的队发一瓶香槟作为额外的鼓励。"
   },
   {
    "word": "mire",
    "phonetic": "'maɪɚ",
    "pos": "n.",
    "meaning": "泥潭；[地理]泥沼；陷于泥坑；陷入困境；使陷于泥坑；使陷入困境",
    "example": "The wheels got stuck in the mire.",
    "exampleCn": "轮子陷入泥潭里了。"
   },
   {
    "word": "dispel",
    "phonetic": "dɪ'spɛl",
    "pos": "vt",
    "meaning": "驱散，驱逐；消除（烦恼等）",
    "example": "We want to dispel the myth that you cannot eat well in Britain.",
    "exampleCn": "我们要消除在英国吃不好的误解。"
   },
   {
    "word": "eternal",
    "phonetic": "ɪ'tɝnl",
    "pos": "adj.",
    "meaning": "永恒的；不朽的",
    "example": "the Christian promise of eternal life",
    "exampleCn": "基督教承诺的永生"
   },
   {
    "word": "stake",
    "phonetic": "stek",
    "pos": "n.",
    "meaning": "桩，棍子；赌注；火刑；奖金；资助，支持；系…于桩上；把…押下打赌；打赌",
    "example": "Young people don’t feel they have a stake in the country’s future.",
    "exampleCn": "年轻人觉得自己与国家的未来没有关系。"
   },
   {
    "word": "harmony",
    "phonetic": "'hɑrməni",
    "pos": "n.",
    "meaning": "协调；和睦；融洽；调和",
    "example": "the gorgeous vocal harmonies on ‘Mexicali Rose’",
    "exampleCn": "《墨西哥玫瑰》的精彩和声演唱"
   },
   {
    "word": "whilst",
    "phonetic": "hwailst",
    "pos": "conj.",
    "meaning": "=while；时候",
    "example": "As you lower your pen whilst continuing the motion, you should notice the resulting shape is more regular than it otherwise would have been.",
    "exampleCn": "随着你降低你的笔，同时保持圆周运动，你应该会注意到画出的形状比起不这样做画出的形状要规范的多。"
   },
   {
    "word": "literally",
    "phonetic": "'lɪtərəli",
    "pos": "adv.",
    "meaning": "照字面地；逐字地",
    "example": "We've got to get the economy under control or it will literally eat us up.",
    "exampleCn": "我们必须控制住经济，否则它真地就会把我们困住。"
   },
   {
    "word": "ascertain",
    "phonetic": "'æsɚ'ten",
    "pos": "vt",
    "meaning": "确定；查明；探知",
    "example": "A postmortem was ordered to try to ascertain the cause of death.",
    "exampleCn": "下令验尸以查明死因。"
   },
   {
    "word": "paralysis",
    "phonetic": "pə'ræləsɪs",
    "pos": "n.",
    "meaning": "[内科]麻痹；无力；停顿",
    "example": "paralysis of the lower body",
    "exampleCn": "下半身瘫痪"
   },
   {
    "word": "timely",
    "phonetic": "'taɪmli",
    "pos": "adj.",
    "meaning": "及时的；适时的；及时地；早",
    "example": "The fight ended only with the timely arrival of the police.",
    "exampleCn": "幸亏警察及时赶到，打斗总算停止。"
   },
   {
    "word": "worship",
    "phonetic": "'wɝʃɪp",
    "pos": "n.",
    "meaning": "崇拜；礼拜；尊敬；崇拜；尊敬；爱慕；拜神；做礼拜",
    "example": "The ceremony must take place in a recognized place of worship .",
    "exampleCn": "该仪式必须在获得认可的敬拜场所举行。"
   },
   {
    "word": "idiom",
    "phonetic": "'ɪdɪəm",
    "pos": "n.",
    "meaning": "成语，习语；土话",
    "example": "the new musical idiom",
    "exampleCn": "新的音乐风格"
   },
   {
    "word": "safeguard",
    "phonetic": "'sefɡɑrd",
    "pos": "n.",
    "meaning": "[安全]保护；保卫；保护措施；[安全]保护，护卫",
    "example": "technology that will safeguard the environment",
    "exampleCn": "将会保护环境的技术"
   },
   {
    "word": "trumpet",
    "phonetic": "'trʌmpɪt",
    "pos": "n.",
    "meaning": "喇叭；喇叭声；吹喇叭；吹嘘；吹喇叭；发出喇叭般的声音",
    "example": "Life is something like a trumpet.",
    "exampleCn": "生活有点像一个喇叭。"
   },
   {
    "word": "spill",
    "phonetic": "spɪl",
    "pos": "vt",
    "meaning": "使溢出，使流出；使摔下；溢出，流出；摔下；涌流；溢出，溅出；溢出量；摔下；小塞子",
    "example": "Katie almost spilled her milk.",
    "exampleCn": "凯蒂差点把牛奶洒出来。"
   },
   {
    "word": "eddy",
    "phonetic": "'ɛdi",
    "pos": "n.",
    "meaning": "[流]涡流；漩涡；逆流；旋转；起漩涡",
    "example": "The racing river caused swirling eddies.",
    "exampleCn": "湍急的河水形成了许多漩涡。"
   },
   {
    "word": "spectator",
    "phonetic": "'spɛktetɚ",
    "pos": "n.",
    "meaning": "观众；旁观者",
    "example": "The match attracted over 40,000 spectators.",
    "exampleCn": "这场比赛吸引了四万多名观众。"
   },
   {
    "word": "spectrum",
    "phonetic": "'spɛktrəm",
    "pos": "n.",
    "meaning": "[光]光谱；频谱；范围；余象",
    "example": "the electromagnetic spectrum",
    "exampleCn": "电磁（波）谱"
   },
   {
    "word": "ammunition",
    "phonetic": ",æmju'nɪʃən",
    "pos": "n.",
    "meaning": "[军]弹药；军火",
    "example": "He had only seven rounds of ammunition for the revolver.",
    "exampleCn": "他只有7发左轮手枪的弹药。"
   },
   {
    "word": "condolence",
    "phonetic": "kən'doləns",
    "pos": "n.",
    "meaning": "哀悼；慰问",
    "example": "a letter of condolence",
    "exampleCn": "吊唁信"
   },
   {
    "word": "indigenous",
    "phonetic": "ɪn'dɪdʒənəs",
    "pos": "adj.",
    "meaning": "本土的；土著的；国产的；固有的",
    "example": "the many indigenous cultures which existed in Siberia",
    "exampleCn": "存在于西伯利亚的许多当地文化"
   },
   {
    "word": "constitute",
    "phonetic": "'kɑnstətut",
    "pos": "vt",
    "meaning": "组成，构成；建立；任命",
    "example": "We must redefine what constitutes a family.",
    "exampleCn": "我们必须对家庭的构成重新定义。"
   },
   {
    "word": "spouse",
    "phonetic": "spaʊs",
    "pos": "n.",
    "meaning": "配偶",
    "example": "Spouses were invited to the company picnic.",
    "exampleCn": "配偶受到邀请参加公司的野餐会。"
   },
   {
    "word": "plateau",
    "phonetic": "plæ'to",
    "pos": "n.",
    "meaning": "[地理]高原；稳定水平；托盘；平顶女帽；达到平衡；达到稳定时期",
    "example": "A broad valley opened up leading to a high, flat plateau of cultivated land.",
    "exampleCn": "一个宽阔的山谷展开，通向一片平坦的高原耕地。"
   },
   {
    "word": "implicit",
    "phonetic": "ɪm'plɪsɪt",
    "pos": "adj.",
    "meaning": "[计]含蓄的；暗示的；盲从的",
    "example": "...an implicit warning to the Moroccans not to continue or repeat the military actions they began a week ago.",
    "exampleCn": "…叫摩洛哥人不要继续或重复一周前开始的军事行动的含蓄警告。"
   },
   {
    "word": "vegetarian",
    "phonetic": "ˌvedʒə'teriən",
    "pos": "n.",
    "meaning": "素食者；食草动物；素食的",
    "example": "Our youngest daughter is a vegetarian.",
    "exampleCn": "我们的小女儿是个素食主义者。"
   },
   {
    "word": "genetic",
    "phonetic": "dʒə'nɛtɪk",
    "pos": "adj.",
    "meaning": "遗传的；基因的；起源的",
    "example": "genetic defects",
    "exampleCn": "遗传性缺陷"
   },
   {
    "word": "legitimate",
    "phonetic": "ləˈdʒɪtəmɪt",
    "pos": "adj.",
    "meaning": "合法的；正当的；合理的；正统的",
    "example": "That’s a perfectly legitimate question.",
    "exampleCn": "那个问题完全合乎情理。"
   },
   {
    "word": "wisdom",
    "phonetic": "'wɪzdəm",
    "pos": "n.",
    "meaning": "智慧，才智；明智；学识；至理名言",
    "example": "a man of great wisdom",
    "exampleCn": "一个有大智慧的男人"
   },
   {
    "word": "retort",
    "phonetic": "rɪ'tɔrt",
    "pos": "n.",
    "meaning": "反驳，顶嘴；曲颈瓶；反驳，反击；反驳，回嘴",
    "example": "‘It’s all your fault!’ he retorted.",
    "exampleCn": "“那都是你的错！”他反驳道。"
   },
   {
    "word": "adjust",
    "phonetic": "ə'dʒʌst",
    "pos": "vt",
    "meaning": "调整，使…适合；校准；调整，校准；适应",
    "example": "Check and adjust the brakes regularly.",
    "exampleCn": "经常检查并调节刹车装置。"
   },
   {
    "word": "motel",
    "phonetic": "mo'tɛl",
    "pos": "n.",
    "meaning": "汽车旅馆",
    "example": "The gas station just neighbours to the motel.",
    "exampleCn": "加油站就在汽车旅馆的附近。"
   },
   {
    "word": "tendency",
    "phonetic": "'tɛndənsi",
    "pos": "n.",
    "meaning": "倾向，趋势；癖好",
    "example": "...the government's tendency to secrecy in recent years.",
    "exampleCn": "…近年来政府的保密倾向。"
   },
   {
    "word": "lunar",
    "phonetic": "'lunɚ",
    "pos": "adj.",
    "meaning": "月亮的，月球的；阴历的；银的；微亮的",
    "example": "studies of the lunar surface",
    "exampleCn": "对月球表面的研究"
   },
   {
    "word": "extend",
    "phonetic": "ɪk'stɛnd",
    "pos": "vt",
    "meaning": "延伸；扩大；推广；伸出；给予；使竭尽全力；对…估价；延伸；扩大；伸展；使疏开",
    "example": "Management have agreed to extend the deadline.",
    "exampleCn": "管理层已同意延长最后期限。"
   },
   {
    "word": "journalist",
    "phonetic": "'dʒɝnəlɪst",
    "pos": "n.",
    "meaning": "新闻工作者；报人；记日志者",
    "example": "a well-known journalist and broadcaster",
    "exampleCn": "一位著名的新闻记者兼播音员"
   },
   {
    "word": "apologetic",
    "phonetic": "ə,pɑlə'dʒɛtɪk",
    "pos": "adj.",
    "meaning": "表示歉意的",
    "example": "The hospital staff were very apologetic but that couldn't really compensate.",
    "exampleCn": "医院员工都深表歉意，但那不能真正补偿。"
   },
   {
    "word": "contradiction",
    "phonetic": ",kɑntrə'dɪkʃən",
    "pos": "n.",
    "meaning": "[数]矛盾；否认；反驳",
    "example": "apparent contradictions in the defendant’s testimony",
    "exampleCn": "被告证词中的明显矛盾"
   },
   {
    "word": "meticulous",
    "phonetic": "mə'tɪkjələs",
    "pos": "adj.",
    "meaning": "一丝不苟的；小心翼翼的；拘泥小节的",
    "example": "He was so meticulous about everything.",
    "exampleCn": "他对任何事情都很小心谨慎。"
   },
   {
    "word": "anyhow",
    "phonetic": "'ɛnɪ'haʊ",
    "pos": "adv.",
    "meaning": "总之；无论如何；不管怎样",
    "example": "The scandal could damage her reputation but the press reported it anyhow.",
    "exampleCn": "这宗丑闻可能损害她的名声，不过报纸还是给登了出来。"
   },
   {
    "word": "draft",
    "phonetic": "dræft",
    "pos": "n.",
    "meaning": "草稿；汇票；征兵；起草；征兵",
    "example": "the rough draft of his new novel",
    "exampleCn": "他的新小说的草稿"
   },
   {
    "word": "forerunner",
    "phonetic": "'fɔr'rʌnɚ",
    "pos": "n.",
    "meaning": "先驱；先驱者；预兆",
    "example": "...a machine which, in some respects, was the forerunner of the modern helicopter.",
    "exampleCn": "…一台在某些方面是现代直升飞机的前身的机器。"
   },
   {
    "word": "repetition",
    "phonetic": "'rɛpə'tɪʃən",
    "pos": "n.",
    "meaning": "重复；背诵；副本",
    "example": "Children used to learn by repetition.",
    "exampleCn": "过去小孩子是通过背诵来学习的。"
   },
   {
    "word": "emigrate",
    "phonetic": "'ɛmɪɡret",
    "pos": "vi",
    "meaning": "移居；移居外国；移民",
    "example": "He emigrated to Belgium.",
    "exampleCn": "他移民去了比利时。"
   },
   {
    "word": "stuffing",
    "phonetic": "'stʌfɪŋ",
    "pos": "n.",
    "meaning": "[包装][机]填料，填塞物",
    "example": "sage and onion stuffing",
    "exampleCn": "洋苏叶和洋葱填料"
   },
   {
    "word": "novel",
    "phonetic": "ˈnɑːvl",
    "pos": "adj.",
    "meaning": "新奇的；异常的；小说",
    "example": "Protesters found a novel way of demonstrating against steeply rising oil prices.",
    "exampleCn": "抗议者们找到一种新奇的示威方式来反对石油价格的飙升。"
   },
   {
    "word": "observance",
    "phonetic": "əb'zɝvəns",
    "pos": "n.",
    "meaning": "惯例；遵守；仪式；庆祝",
    "example": "the Memorial Day observance",
    "exampleCn": "纪念日的习俗"
   },
   {
    "word": "intellectual",
    "phonetic": ",ɪntə'lɛktʃuəl",
    "pos": "adj.",
    "meaning": "[心理]智力的；聪明的；理智的；[劳经]知识分子；凭理智做事者",
    "example": "a leading British intellectual",
    "exampleCn": "一位顶尖的英国知识分子"
   },
   {
    "word": "laundry",
    "phonetic": "'lɔndri",
    "pos": "n.",
    "meaning": "[贸易]洗衣店，洗衣房；要洗的衣服；洗熨；洗好的衣服",
    "example": "She did the laundry (= washed the clothes etc ) and hung it out to dry.",
    "exampleCn": "她洗了衣服，然后挂出去晾干。"
   },
   {
    "word": "indemnity",
    "phonetic": "ɪn'dɛmnəti",
    "pos": "n.",
    "meaning": "补偿，[经]赔偿；保障；赔偿物",
    "example": "insurance providing indemnity against future liabilities",
    "exampleCn": "对将来的债务提供保障的保险"
   },
   {
    "word": "concentrate",
    "phonetic": "'kɑnsn'tret",
    "pos": "vi",
    "meaning": "集中；[物]浓缩；全神贯注；聚集；集中；[物]浓缩；[物]浓缩，精选；浓缩液",
    "example": "Now please concentrate.",
    "exampleCn": "现在请集中注意力。"
   },
   {
    "word": "impart",
    "phonetic": "ɪm'pɑrt",
    "pos": "vt",
    "meaning": "给予（尤指抽象事物），传授；告知，透露",
    "example": "She had information that she couldn’t wait to impart.",
    "exampleCn": "她得到了消息，迫不及待地想告诉别人。"
   },
   {
    "word": "qualitative",
    "phonetic": "'kwɑlətetɪv",
    "pos": "adj.",
    "meaning": "质的，定性的",
    "example": "There are qualitative differences in the way children of different ages and adults think.",
    "exampleCn": "不同年龄的儿童和成人在思维方式上有着质的差异。"
   },
   {
    "word": "exclusive",
    "phonetic": "ɪk'sklusɪv",
    "pos": "adj.",
    "meaning": "独有的；排外的；专一的；独家新闻；独家经营的项目；排外者",
    "example": "Bel Air is an exclusive suburb of Los Angeles.",
    "exampleCn": "贝莱尔是洛杉矶郊外一处高级住宅区。"
   },
   {
    "word": "somewhat",
    "phonetic": "'sʌmwʌt",
    "pos": "adv.",
    "meaning": "有点；多少；几分；稍微",
    "example": "Things have changed somewhat since then.",
    "exampleCn": "从那时候起，情况就有些不一样了。"
   },
   {
    "word": "appeal",
    "phonetic": "ə'pil",
    "pos": "vi",
    "meaning": "呼吁，恳求；[法]上诉；诉诸，求助；有吸引力，迎合爱好；（体育比赛中）诉诸裁判；呼吁，请求；吸引力，感染力；[法]上诉；诉诸裁判",
    "example": "The girl’s family have made a public appeal for help to try and catch her killer.",
    "exampleCn": "那名遇害女孩的家人吁请公众协助捉拿凶手。"
   },
   {
    "word": "even",
    "phonetic": "'ivən",
    "pos": "adj.",
    "meaning": "[数]偶数的；平坦的；相等的；甚至；即使；还；实际上；使平坦；使相等；变平；变得可比较；成为相等",
    "example": "Most companies have suffered a drop in their profits, even very large companies.",
    "exampleCn": "大多数公司的利润都出现下滑，甚至连很大的公司也不例外。"
   },
   {
    "word": "intricate",
    "phonetic": "'ɪntrɪkət",
    "pos": "adj.",
    "meaning": "复杂的；错综的，缠结的",
    "example": "intricate patterns",
    "exampleCn": "繁复的图案"
   },
   {
    "word": "outfit",
    "phonetic": "'aʊtfɪt",
    "pos": "n.",
    "meaning": "机构；用具；全套装备；配备；供应",
    "example": "She bought a new outfit for the party.",
    "exampleCn": "她为了这次派对买了套新衣服。"
   },
   {
    "word": "continuity",
    "phonetic": "'kɑntə'nʊəti",
    "pos": "n.",
    "meaning": "[数]连续性；一连串；[电影]分镜头剧本",
    "example": "...a tank designed to ensure continuity of fuel supply during aerobatics.",
    "exampleCn": "…为特技飞行中确保持续供油而设计的油箱。"
   },
   {
    "word": "expenditure",
    "phonetic": "ɪk'spɛndɪtʃɚ",
    "pos": "n.",
    "meaning": "[会计]支出，花费；经费，消费额",
    "example": "huge cuts in public expenditure",
    "exampleCn": "大幅度削减公共开支"
   },
   {
    "word": "sauce",
    "phonetic": "sɔs",
    "pos": "n.",
    "meaning": "酱油；沙司；调味汁；使增加趣味；给…调味",
    "example": "spaghetti sauces",
    "exampleCn": "意大利面酱"
   },
   {
    "word": "impact",
    "phonetic": "ɪm'pækt",
    "pos": "vt",
    "meaning": "影响；[力]撞击；冲突；压紧；[力]冲击；产生影响；影响；效果；[物]碰撞；[力]冲击力",
    "example": "The force of the impact knocked the breath out of her.",
    "exampleCn": "撞击力使她喘不过气来。"
   },
   {
    "word": "personality",
    "phonetic": ",pɝsə'næləti",
    "pos": "n.",
    "meaning": "[心理]个性；品格；名人",
    "example": "Despite their different personalities, they became the best of friends.",
    "exampleCn": "尽管个性不同，他们还是成了最好的朋友。"
   },
   {
    "word": "inhabitant",
    "phonetic": "ɪn'hæbɪtənt",
    "pos": "n.",
    "meaning": "居民；居住者",
    "example": "a city of six million inhabitants",
    "exampleCn": "有600万居民的城市"
   },
   {
    "word": "hardy",
    "phonetic": "'hɑːdɪ",
    "pos": "adj.",
    "meaning": "坚强的；勇敢的；能吃苦耐劳的；鲁莽的",
    "example": "hardy mountain goats",
    "exampleCn": "能适应恶劣环境的石山羊"
   },
   {
    "word": "vessel",
    "phonetic": "'vɛsl",
    "pos": "n.",
    "meaning": "[船]船，舰；[组织]脉管，血管；容器，[轻]器皿",
    "example": "a fishing vessel",
    "exampleCn": "渔船"
   },
   {
    "word": "convention",
    "phonetic": "kən'vɛnʃən",
    "pos": "n.",
    "meaning": "大会；[法]惯例；[计]约定；协定；习俗",
    "example": "a teachers’ convention",
    "exampleCn": "教师大会"
   },
   {
    "word": "coupon",
    "phonetic": "'kupɑn",
    "pos": "n.",
    "meaning": "[金融]息票；[贸易]赠券；联票；[经]配给券",
    "example": "The coupon entitles you to ten cents off your next purchase.",
    "exampleCn": "这张优惠券可以让你在下次购物时节省10分钱。"
   },
   {
    "word": "grim",
    "phonetic": "ɡrɪm",
    "pos": "adj.",
    "meaning": "冷酷的；糟糕的；残忍的",
    "example": "‘I’ll survive,’ he said with a grim smile.",
    "exampleCn": "“我死不了。”他阴笑着说。"
   },
   {
    "word": "groa",
    "phonetic": "",
    "pos": "n v&n",
    "meaning": "呻吟，呻吟着表示;承受重压发出的声音",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "invest",
    "phonetic": "ɪn'vɛst",
    "pos": "vt",
    "meaning": "投资；覆盖；耗费；授予；包围；投资，入股；花钱买",
    "example": "I’ve got a few thousand dollars I’m looking to invest.",
    "exampleCn": "我有几千美元想作投资。"
   },
   {
    "word": "crumble",
    "phonetic": "'krʌmbl",
    "pos": "vi",
    "meaning": "崩溃；破碎，粉碎；崩溃；弄碎，粉碎",
    "example": "Under the pressure, the flint crumbled into fragments.",
    "exampleCn": "在压力作用下，燧石裂成了碎片。"
   },
   {
    "word": "overhaul",
    "phonetic": "'ovɚhɔl",
    "pos": "vt",
    "meaning": "分解检查，大修；追上并超过；彻底检修，详细检查",
    "example": "A mechanic is coming to overhaul the engine.",
    "exampleCn": "一名机修工要来彻底检修引擎。"
   },
   {
    "word": "commend",
    "phonetic": "kə'mɛnd",
    "pos": "vt",
    "meaning": "推荐；称赞；把…委托；称赞；表扬",
    "example": "The paper was highly commended in the UK Press Awards.",
    "exampleCn": "该报获得了“英国新闻奖”的高度褒奖。"
   },
   {
    "word": "peculiar",
    "phonetic": "pɪ'kjulɪɚ",
    "pos": "adj.",
    "meaning": "特殊的；独特的；奇怪的；罕见的；特权；特有财产",
    "example": "Punks, soldiers, hippies, and Sumo wrestlers all have distinct hair styles, peculiar to their group.",
    "exampleCn": "朋克摇滚歌手、士兵、嬉皮士和相扑手都留着他们那个群体特有的独特发型。"
   },
   {
    "word": "commonwealth",
    "phonetic": "'kɑmən'wɛlθ",
    "pos": "n.",
    "meaning": "联邦；共和国；国民整体",
    "example": "...the Asian, Caribbean and African members of the commonwealth.",
    "exampleCn": "…英联邦在亚洲、加勒比海和非洲的成员国。"
   },
   {
    "word": "deceive",
    "phonetic": "dɪ'siv",
    "pos": "v.",
    "meaning": "欺骗；行骗",
    "example": "He had been deceived by a young man claiming to be the son of a millionaire.",
    "exampleCn": "他被一个自称是百万富翁之子的年轻人骗了。"
   },
   {
    "word": "lax",
    "phonetic": "læks",
    "pos": "adj.",
    "meaning": "松的；松懈的；腹泻的",
    "example": "One of the problem areas is lax security for airport personnel.",
    "exampleCn": "其中一个问题是对机场人员的安全措施不严格。"
   },
   {
    "word": "default",
    "phonetic": "dɪ'fɔlt",
    "pos": "vi",
    "meaning": "[会计]拖欠；不履行；不到场；违约；缺席；缺乏；系统默认值；不履行；不参加（比赛等）；对…处以缺席裁判",
    "example": "the risk of default by borrowers",
    "exampleCn": "借款人不偿还欠款的风险"
   },
   {
    "word": "monitor",
    "phonetic": "'mɔnɪtɚ",
    "pos": "n.",
    "meaning": "[电子][环境]监视器；[通信][军]监听器；[自]监控器；班长",
    "example": "a heart monitor",
    "exampleCn": "心脏监测仪"
   },
   {
    "word": "intermediate",
    "phonetic": ",ɪntɚ'midɪət",
    "pos": "adj.",
    "meaning": "[化学]中间的，中级的；[化学][生化]中间物；媒介",
    "example": "If you must use descendant selectors, prefer child selectors, which at least only require evaluation of one additional node, not all the intermediate nodes up to an ancestor.",
    "exampleCn": "如果您必须使用后代选择器，尽量使用子代选择器，这最少只需评估一个额外的节点，而非中间直至祖先的所有节点。"
   },
   {
    "word": "nominal",
    "phonetic": "'nɑmɪnl",
    "pos": "adj.",
    "meaning": "名义上的；有名无实的；[会计]票面上的",
    "example": "A nominal charge is made for use of the tennis courts.",
    "exampleCn": "使用这些网球场只是象征性地收取费用。"
   },
   {
    "word": "deadly",
    "phonetic": "'dɛdli",
    "pos": "adj.",
    "meaning": "[医]致命的；非常的；死一般的；非常；如死一般地",
    "example": "a deadly poison",
    "exampleCn": "致命的毒药"
   },
   {
    "word": "exterminate",
    "phonetic": "ɪk'stɝmə'net",
    "pos": "vt",
    "meaning": "消灭；根除",
    "example": "Staff use the poison to exterminate moles and rabbits.",
    "exampleCn": "员工用毒药来消灭鼹鼠和野兔。"
   },
   {
    "word": "contrast",
    "phonetic": "'kɑntræst",
    "pos": "n.",
    "meaning": "对比；差别；对照物",
    "example": "an essay comparing and contrasting (= showing how two things are similar and different ) Verdi and Wagner and their operas",
    "exampleCn": "把威尔第和瓦格纳以及他们的歌剧进行比较和对照的一篇文章"
   },
   {
    "word": "presumably",
    "phonetic": "prɪ'zuməbli",
    "pos": "adv.",
    "meaning": "大概；推测起来；可假定",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "conservatory",
    "phonetic": "kən'sɝvətɔri",
    "pos": "n.",
    "meaning": "[园艺]温室；音乐学校；有保存力的；保存性的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "embed",
    "phonetic": "ɪm'bɛd",
    "pos": "vt",
    "meaning": "栽种；使嵌入，使插入；使深留脑中",
    "example": "Feelings of guilt are deeply embedded in her personality.",
    "exampleCn": "负罪感在她的性格里根深蒂固。"
   },
   {
    "word": "available",
    "phonetic": "ə'veləbl",
    "pos": "adj.",
    "meaning": "[交]有效的，可得的；可利用的；空闲的",
    "example": "Tickets are available from the box office.",
    "exampleCn": "售票处有票出售。"
   },
   {
    "word": "arctic",
    "phonetic": "'ɑrktɪk",
    "pos": "adj.",
    "meaning": "北极的；极寒的；北极圈；御寒防水套鞋",
    "example": "The bathroom, with its spartan pre-war facilities, is positively arctic.",
    "exampleCn": "这个有简陋战前设施的浴室实在冷极了。"
   },
   {
    "word": "onlooker",
    "phonetic": "'ɑnlʊkɚ",
    "pos": "n.",
    "meaning": "旁观者；观众（等于spectator）",
    "example": "A crowd of onlookers had gathered at the scene of the accident.",
    "exampleCn": "一群旁观者围聚在事故现场。"
   },
   {
    "word": "hinder",
    "phonetic": "'hɪndɚ",
    "pos": "vt",
    "meaning": "阻碍；打扰；后面的",
    "example": "His career has been hindered by injury.",
    "exampleCn": "由于受伤，他的事业受到了阻碍。"
   },
   {
    "word": "relay",
    "phonetic": "rɪ'le",
    "pos": "vi",
    "meaning": "转播；接替；[电]继电器；接替，接替人员；驿马；转播；使接替；分程传递",
    "example": "the 100 metres relay",
    "exampleCn": "一百米接力赛"
   },
   {
    "word": "medieval",
    "phonetic": ",midɪ'ivəl",
    "pos": "adj.",
    "meaning": "中世纪的；原始的；仿中世纪的；老式的",
    "example": "These spices were first brought to Italy from the East in medieval times.",
    "exampleCn": "这些香料最早是在中世纪时从东方被带到了意大利。"
   },
   {
    "word": "commit",
    "phonetic": "kə'mɪt",
    "pos": "vt",
    "meaning": "犯罪，做错事；把...交托给；指派…作战；使…承担义务",
    "example": "Women commit fewer crimes than men.",
    "exampleCn": "女性犯罪比男性少。"
   },
   {
    "word": "halt",
    "phonetic": "hɔlt",
    "pos": "vi",
    "meaning": "停止；立定；踌躇，犹豫；停止；立定；休息；使停止；使立定",
    "example": "Heavy snowfalls brought traffic to a halt (= made it stop moving ).",
    "exampleCn": "大雪使得交通陷于停顿。"
   },
   {
    "word": "conservation",
    "phonetic": ",kɑnsɚ'veʃən",
    "pos": "n.",
    "meaning": "保存，保持；保护",
    "example": "wildlife conservation",
    "exampleCn": "野生生物保护"
   },
   {
    "word": "illustrate",
    "phonetic": "'ɪləstret",
    "pos": "vt",
    "meaning": "阐明，举例说明；图解；举例",
    "example": "Let me give an example to illustrate the point.",
    "exampleCn": "让我举个例子来说明这一点。"
   },
   {
    "word": "function",
    "phonetic": "'fʌŋkʃən",
    "pos": "n.",
    "meaning": "[计]功能；[数]函数；[管理]职责；盛大的集会；运行；活动；行使职责",
    "example": "The nervous system regulates our bodily functions (= eating, breathing, going to the toilet etc ) .",
    "exampleCn": "神经系统控制着我们身体的功能。"
   },
   {
    "word": "scent",
    "phonetic": "sɛnt",
    "pos": "n.",
    "meaning": "气味；嗅觉；痕迹；察觉能力；闻到；发觉；使充满…的气味；循着遗臭追踪；发出…的气味；有…的迹象；嗅着气味追赶",
    "example": "a yellow rose with a lovely scent",
    "exampleCn": "香气怡人的黄玫瑰"
   },
   {
    "word": "entertainment",
    "phonetic": "'ɛntɚ'tenmənt",
    "pos": "n.",
    "meaning": "娱乐；消遣；款待",
    "example": "The town provides a wide choice of entertainment.",
    "exampleCn": "该镇提供各式各样的娱乐活动。"
   },
   {
    "word": "pregnant",
    "phonetic": "'prɛɡnənt",
    "pos": "adj.",
    "meaning": "怀孕的；富有意义的",
    "example": "care for pregnant women",
    "exampleCn": "孕妇保健"
   },
   {
    "word": "invert",
    "phonetic": "'ɪnvɝt",
    "pos": "vt",
    "meaning": "使…转化；使…颠倒；使…反转；使…前后倒置",
    "example": "Invert the cake onto a serving plate.",
    "exampleCn": "把蛋糕倒扣过来放到一个盘子上。"
   },
   {
    "word": "sturdy",
    "phonetic": "'stɝdi",
    "pos": "adj.",
    "meaning": "坚定的；强健的；健全的",
    "example": "That chair doesn’t look very sturdy.",
    "exampleCn": "那把椅子看上去不太结实。"
   },
   {
    "word": "spring",
    "phonetic": "sprɪŋ",
    "pos": "n.",
    "meaning": "春天；弹簧；泉水；活力；跳跃；春天的；生长；涌出；跃出；裂开；使跳起；使爆炸；突然提出；使弹开",
    "example": "He sprang to his feet, grabbing his keys off the coffee table.",
    "exampleCn": "他跳了起来，从咖啡桌上抓起他的钥匙。"
   },
   {
    "word": "scorch",
    "phonetic": "skɔrtʃ",
    "pos": "vt",
    "meaning": "烧焦；使枯萎；挖苦；烧焦；枯萎；烧焦；焦痕",
    "example": "The walls had been blackened and scorched by fire.",
    "exampleCn": "这些墙被大火熏黑了。"
   },
   {
    "word": "panorama",
    "phonetic": ",pænə'ræmə",
    "pos": "n.",
    "meaning": "全景，全貌；全景画；概论",
    "example": "Horton looked out over a panorama of fertile valleys and gentle hills.",
    "exampleCn": "霍顿眺望着那一片肥沃山谷和平缓山脉的景象。"
   },
   {
    "word": "content",
    "phonetic": "'kɑntɛnt",
    "pos": "n.",
    "meaning": "内容，目录；满足；[物]容量；满意的；使满足",
    "example": "Empty the contents of the pan into the sieve.",
    "exampleCn": "将平锅里的东西全部倒入漏勺。"
   },
   {
    "word": "tar",
    "phonetic": "tɑr",
    "pos": "n.",
    "meaning": "[化工]焦油；柏油；水手；涂以焦油；玷污",
    "example": "high tar cigarettes",
    "exampleCn": "高焦香烟"
   },
   {
    "word": "migrate",
    "phonetic": "'maɪɡret",
    "pos": "vi",
    "meaning": "移动；随季节而移居；移往；使移居；使移植",
    "example": "People migrate to cities like Jakarta in search of work.",
    "exampleCn": "人们移居到雅加达这样的城市找工作。"
   },
   {
    "word": "magnate",
    "phonetic": "'mæɡnet",
    "pos": "n.",
    "meaning": "巨头；大资本家；要人；富豪；……大王",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "deaf",
    "phonetic": "dɛf",
    "pos": "adj.",
    "meaning": "聋的",
    "example": "communication between deaf and hearing people",
    "exampleCn": "失聪者和听力正常者之间的交流"
   },
   {
    "word": "contribute",
    "phonetic": "kən'trɪbjut",
    "pos": "vt",
    "meaning": "贡献，出力；[图情]投稿；[经]捐献；贡献，出力；[图情]投稿；[经]捐献",
    "example": "Stress is a contributing factor in many illnesses.",
    "exampleCn": "压力是许多疾病的致病因素。"
   },
   {
    "word": "remarkable",
    "phonetic": "rɪ'mɑrkəbl",
    "pos": "adj.",
    "meaning": "卓越的；非凡的；值得注意的",
    "example": "She has made remarkable progress.",
    "exampleCn": "她取得了显著的进步。"
   },
   {
    "word": "affect",
    "phonetic": "ə'fɛkt",
    "pos": "vt",
    "meaning": "影响；感染；感动；假装；倾向；喜欢；情感；引起感情的因素",
    "example": "the areas affected by the hurricane",
    "exampleCn": "受飓风影响的地区"
   },
   {
    "word": "fellowship",
    "phonetic": "'fɛloʃɪp",
    "pos": "n.",
    "meaning": "友谊；奖学金；研究员职位",
    "example": "...the National Schizophrenia Fellowship.",
    "exampleCn": "…全国精神分裂协会。"
   },
   {
    "word": "pester",
    "phonetic": "'pestə",
    "pos": "vt",
    "meaning": "纠缠，烦扰；使烦恼",
    "example": "She’d been pestered by reporters for days.",
    "exampleCn": "几天来她一直受到记者们的纠缠。"
   },
   {
    "word": "frugal",
    "phonetic": "'fruɡl",
    "pos": "adj.",
    "meaning": "节俭的；朴素的；花钱少的",
    "example": "As children we were taught to be frugal and hard-working.",
    "exampleCn": "我们小时候被教育要节俭和勤劳。"
   },
   {
    "word": "clamp",
    "phonetic": "klæmp",
    "pos": "vt",
    "meaning": "[机]夹紧，固定住",
    "example": "He returned, only to discover his car had been clamped.",
    "exampleCn": "他回来了，不料发现自己的汽车被上了夹钳。"
   },
   {
    "word": "masterpiece",
    "phonetic": "'mæstəpis",
    "pos": "n.",
    "meaning": "杰作；绝无仅有的人",
    "example": "Mary Shelley was just 18 when she wrote the horror masterpiece ‘Frankenstein’.",
    "exampleCn": "玛丽•雪莱创作《科学怪人》这部恐怖小说名作的时候年仅18岁。"
   },
   {
    "word": "cultivate",
    "phonetic": "'kʌltɪvet",
    "pos": "vt",
    "meaning": "培养；陶冶；耕作",
    "example": "The land was too rocky to cultivate.",
    "exampleCn": "这块地石头太多，无法耕作。"
   },
   {
    "word": "split",
    "phonetic": "splɪt",
    "pos": "vt",
    "meaning": "分离；使分离；劈开；离开；离开；被劈开；断绝关系；劈开；[木]裂缝；劈开的",
    "example": "The branch split under their weight.",
    "exampleCn": "树枝承受不住他们的重量断裂了。"
   },
   {
    "word": "concession",
    "phonetic": "kən'sɛʃən",
    "pos": "n.",
    "meaning": "让步；特许（权）；承认；退位",
    "example": "The British were not prepared to make any concessions .",
    "exampleCn": "英国人没有打算作出让步。"
   },
   {
    "word": "idle",
    "phonetic": "'aɪdl",
    "pos": "adj.",
    "meaning": "闲置的；懒惰的；停顿的；无所事事；虚度；[机]空转；虚度；[机]使空转",
    "example": "Go and wake up that idle brother of yours.",
    "exampleCn": "去把你那懒哥哥叫起来。"
   },
   {
    "word": "pragmatic",
    "phonetic": "præg'mætɪk",
    "pos": "adj.",
    "meaning": "实际的；实用主义的；国事的",
    "example": "Williams took a more pragmatic approach to management problems.",
    "exampleCn": "威廉斯在管理问题上采用的是一种更务实的做法。"
   },
   {
    "word": "dilemma",
    "phonetic": "dɪˈlemə",
    "pos": "n.",
    "meaning": "困境；进退两难；两刀论法",
    "example": "a moral dilemma",
    "exampleCn": "道德上进退两难的窘境"
   },
   {
    "word": "lavish",
    "phonetic": "'lævɪʃ",
    "pos": "adj.",
    "meaning": "浪费的；丰富的；大方的；浪费；慷慨给予；滥用",
    "example": "a royal palace on a lavish scale",
    "exampleCn": "庞大的皇宫"
   },
   {
    "word": "series",
    "phonetic": "'sɪriz",
    "pos": "n.",
    "meaning": "系列，连续；[电]串联；[数]级数；丛书",
    "example": "the series of events that led to the outbreak of war",
    "exampleCn": "导致战争爆发的一系列事件"
   },
   {
    "word": "strait",
    "phonetic": "stret",
    "pos": "adj.",
    "meaning": "狭窄的；苦恼的；[海洋]海峡；困境",
    "example": "the Bering Strait",
    "exampleCn": "白令海峡"
   },
   {
    "word": "sarcasm",
    "phonetic": "'sɑrkæzəm",
    "pos": "n.",
    "meaning": "讽刺；挖苦；嘲笑",
    "example": "‘Good of you to arrive on time,’ George said, with heavy sarcasm (= very clear sarcasm ) .",
    "exampleCn": "“你到得真准时啊。”乔治不加掩饰地挖苦道。"
   },
   {
    "word": "sensitive",
    "phonetic": "'sɛnsətɪv",
    "pos": "adj.",
    "meaning": "[仪]敏感的；灵敏的；感光的；易受伤害的",
    "example": "a very sensitive child",
    "exampleCn": "一个很敏感的小孩"
   },
   {
    "word": "rely",
    "phonetic": "rɪ'laɪ",
    "pos": "vi",
    "meaning": "依靠；信赖",
    "example": "They relied heavily on the advice of their professional advisers.",
    "exampleCn": "他们非常依赖专业顾问的建议。"
   },
   {
    "word": "enterprise",
    "phonetic": "'ɛntɚ'praɪz",
    "pos": "n.",
    "meaning": "[经]企业；事业；进取心；事业心",
    "example": "commercial enterprises such as banks and food manufacturers",
    "exampleCn": "银行和食品制造厂等商业企业"
   },
   {
    "word": "garbage",
    "phonetic": "'ɡɑrbɪdʒ",
    "pos": "n.",
    "meaning": "[环境]垃圾；废物",
    "example": "Can you take out the garbage when you go?",
    "exampleCn": "你走的时候把垃圾带出去好吗？"
   },
   {
    "word": "postscript",
    "phonetic": "'postskrɪpt",
    "pos": "n.",
    "meaning": "信件中附笔，附言",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "segregate",
    "phonetic": "'sɛɡrɪɡet",
    "pos": "vt",
    "meaning": "使隔离；[生物]使分离；在…实行种族隔离",
    "example": "A large detachment of police was used to segregate the two rival camps of protesters.",
    "exampleCn": "一大队分遣警察被派来隔离两群敌对的抗议者。"
   },
   {
    "word": "cylinder",
    "phonetic": "'sɪlɪndɚ",
    "pos": "n.",
    "meaning": "圆筒；汽缸；[数]柱面；圆柱状物",
    "example": "a four-cylinder engine",
    "exampleCn": "四汽缸引擎"
   },
   {
    "word": "surcharge",
    "phonetic": "'sɝtʃɑrdʒ",
    "pos": "n.",
    "meaning": "超载；额外费",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "ensue",
    "phonetic": "ɪn'su",
    "pos": "vi",
    "meaning": "跟着发生，接着发生；继起；追求",
    "example": "If the Europeans did not reduce subsidies, a trade war would ensue.",
    "exampleCn": "如果欧洲不减少补贴，贸易战将随即爆发。"
   },
   {
    "word": "pant",
    "phonetic": "pænt",
    "pos": "vi",
    "meaning": "喘息；渴望；气喘吁吁地说出某事；气喘；喘息；喷气声",
    "example": "He came in panting after running up the steps.",
    "exampleCn": "他跑上台阶，气喘吁吁地走了进来。"
   },
   {
    "word": "stern",
    "phonetic": "stɝn",
    "pos": "n.",
    "meaning": "[船]船尾；末端；严厉的；坚定的",
    "example": "sterner penalties for drug offences",
    "exampleCn": "对毒品犯罪的更为严厉的惩罚"
   },
   {
    "word": "steady",
    "phonetic": "'stɛdi",
    "pos": "adj.",
    "meaning": "稳定的；不变的；沉着的；使稳定；稳固；使坚定；稳定地；稳固地；关系固定的情侣；固定支架",
    "example": "Paul is making steady progress.",
    "exampleCn": "保罗逐渐在进步。"
   },
   {
    "word": "abstract",
    "phonetic": "'æbstrækt",
    "pos": "n.",
    "meaning": "[图情]摘要；抽象；抽象的概念；抽象的；深奥的；[图情]摘要；提取；使……抽象化",
    "example": "By the age of seven, children are capable of thinking in abstract terms .",
    "exampleCn": "儿童到了七岁就具有抽象思维的能力。"
   },
   {
    "word": "clue",
    "phonetic": "klʊ",
    "pos": "n.",
    "meaning": "线索；（故事等的）情节",
    "example": "Police have found a vital clue .",
    "exampleCn": "警方发现了至关重要的线索。"
   },
   {
    "word": "thorough",
    "phonetic": "ˈθʌrəʊ; θʌro",
    "pos": "adj.",
    "meaning": "彻底的；十分的；周密的",
    "example": "The doctor gave him a thorough check-up.",
    "exampleCn": "医生给他做了一次全面的体检。"
   },
   {
    "word": "alphabetical",
    "phonetic": ",ælfə'bɛtɪkl",
    "pos": "adj.",
    "meaning": "字母的；[计]依字母顺序的",
    "example": "The files are arranged in alphabetical order .",
    "exampleCn": "这些文件按字母顺序排列。"
   },
   {
    "word": "democracy",
    "phonetic": "dɪˈmɑkrəsi",
    "pos": "n.",
    "meaning": "民主，民主政体，民主社会",
    "example": "a return to democracy after 16 years of military rule",
    "exampleCn": "16年军人统治后民主制度的恢复"
   },
   {
    "word": "seep",
    "phonetic": "sip",
    "pos": "vi",
    "meaning": "漏；渗出；小泉；水陆两用的吉普车",
    "example": "Radioactive water had seeped into underground reservoirs.",
    "exampleCn": "放射性水已渗入了地下蓄水池。"
   },
   {
    "word": "distinction",
    "phonetic": "dɪ'stɪŋkʃən",
    "pos": "n.",
    "meaning": "区别；差别；特性；荣誉、勋章",
    "example": "Eliot’s distinction as a poet",
    "exampleCn": "艾略特作为诗人的杰出才能"
   },
   {
    "word": "indicator",
    "phonetic": "'ɪndɪketɚ",
    "pos": "n.",
    "meaning": "[微][试剂][计][电][电子][机]指示器；指示剂；指示符；压力计",
    "example": "All the main economic indicators suggest that trade is improving.",
    "exampleCn": "所有主要的经济指标都表明贸易情况正在改善。"
   },
   {
    "word": "persevere",
    "phonetic": ",pɝsə'vɪr",
    "pos": "vi",
    "meaning": "坚持；不屈不挠；固执己见（在辩论中）",
    "example": "It can be tricky at first, but persevere.",
    "exampleCn": "一开始会有些棘手，不过要坚持。"
   },
   {
    "word": "literacy",
    "phonetic": "'lɪtərəsi",
    "pos": "n.",
    "meaning": "识字，读写能力",
    "example": "a new adult literacy campaign",
    "exampleCn": "新一轮成人识字[扫盲]运动"
   },
   {
    "word": "affirm",
    "phonetic": "ə'fɝm",
    "pos": "vt",
    "meaning": "肯定；断言；确认；断言",
    "example": "The court affirmed that the information can be made public under the Freedom of Information Act.",
    "exampleCn": "法院公开肯定了此信息能依据《自由信息法案》公之于众。"
   },
   {
    "word": "denounce",
    "phonetic": "dɪ'naʊns",
    "pos": "vt",
    "meaning": "谴责；告发；公然抨击；通告废除",
    "example": "The group denounced the failure by the authorities to take action.",
    "exampleCn": "该团体谴责当局没有采取行动。"
   },
   {
    "word": "defect",
    "phonetic": "‘dɪfɛkt",
    "pos": "n.",
    "meaning": "缺点，[晶体][材]缺陷；不足之处；变节；叛变",
    "example": "All the cars are tested for defects before they leave the factory.",
    "exampleCn": "所有汽车在出厂前都经过品质检验。"
   },
   {
    "word": "knit",
    "phonetic": "nɪt",
    "pos": "vi",
    "meaning": "[纺]编织；结合；皱眉；[纺]编织；结合",
    "example": "My grandmother taught me how to knit.",
    "exampleCn": "我祖母教过我编织。"
   },
   {
    "word": "marvelous",
    "phonetic": "'mɑrvələs",
    "pos": "adj.",
    "meaning": "了不起的；非凡的；令人惊异的；不平常的",
    "example": "",
    "exampleCn": ""
   },
   {
    "word": "haunt",
    "phonetic": "hɔnt",
    "pos": "n.",
    "meaning": "栖息地；常去的地方",
    "example": "The pub is said to be haunted by the ghost of a former landlord.",
    "exampleCn": "据说这个酒吧里经常有一位前任房主的鬼魂出没。"
   },
   {
    "word": "preach",
    "phonetic": "pritʃ",
    "pos": "vt",
    "meaning": "说教；讲道；鼓吹；传道；反复灌输；说教；讲道；鼓吹；宣扬；说教",
    "example": "He traveled the southern states, preaching the gospel .",
    "exampleCn": "他游历南方各州宣讲福音。"
   },
   {
    "word": "tariff",
    "phonetic": "'tærɪf",
    "pos": "n.",
    "meaning": "(酒店)价目表；关税税率",
    "example": "America wants to eliminate tariffs on items such as electronics.",
    "exampleCn": "美国想要取消电子类产品的关税。"
   },
   {
    "word": "prime",
    "phonetic": "praɪm",
    "pos": "adj.",
    "meaning": "主要的；最好的；基本的；极好地；初期；青年；精华；全盛时期；使准备好；填装；作准备",
    "example": "Smoking is the prime cause of lung disease.",
    "exampleCn": "抽烟是引发肺部疾病的首要原因。"
   },
   {
    "word": "mist",
    "phonetic": "mɪst",
    "pos": "n.",
    "meaning": "[气象]薄雾；视线模糊不清；模糊不清之物；下雾；变模糊；使模糊；使蒙上薄雾",
    "example": "We could just see the outline of the house through the mist.",
    "exampleCn": "薄雾中我们只能看到房子的轮廓。"
   },
   {
    "word": "agony",
    "phonetic": "'æɡəni",
    "pos": "n.",
    "meaning": "苦恼；极大的痛苦；临死的挣扎",
    "example": "the agony of arthritis",
    "exampleCn": "关节炎的剧烈疼痛"
   },
   {
    "word": "pick",
    "phonetic": "pɪk",
    "pos": "vi",
    "meaning": "挑选；采摘；挖；采摘；拾取；掘；精选；选择；挖；[农机]鹤嘴锄",
    "example": "Have a look at the menu and take your pick .",
    "exampleCn": "看看菜单再作选择吧。"
   },
   {
    "word": "tournament",
    "phonetic": "'tɔnəmənt",
    "pos": "n.",
    "meaning": "锦标赛，联赛；比赛",
    "example": "She is aching to join in the tournament.",
    "exampleCn": "她渴望参加比赛。"
   },
   {
    "word": "genius",
    "phonetic": "'dʒinjəs",
    "pos": "n.",
    "meaning": "天才，天赋；精神",
    "example": "The film reveals Fellini’s genius.",
    "exampleCn": "这部影片展现了费里尼的天赋。"
   },
   {
    "word": "flicker",
    "phonetic": "'flɪkɚ",
    "pos": "vi",
    "meaning": "[电子][光]闪烁；摇曳；颤动；扑动翅膀；假装昏倒；[电子][光]使闪烁；使摇曳；[电子][光]闪烁；闪光；电影",
    "example": "The overhead lights flickered momentarily.",
    "exampleCn": "头顶灯闪了一会儿。"
   },
   {
    "word": "hierarchy",
    "phonetic": "'haɪərɑrki",
    "pos": "n.",
    "meaning": "等级制度",
    "example": "a rigid social hierarchy",
    "exampleCn": "严格的社会等级制度"
   },
   {
    "word": "distinguish",
    "phonetic": "dɪ'stɪŋɡwɪʃ",
    "pos": "vt",
    "meaning": "区分；辨别；使杰出，使表现突出；区别，区分；辨别",
    "example": "Could he distinguish right from wrong?",
    "exampleCn": "他能辨别是非吗？"
   },
   {
    "word": "chamber",
    "phonetic": "ˈtʃeɪmbər",
    "pos": "n.",
    "meaning": "（身体或器官内的）室，膛；房间；会所；室内的；私人的，秘密的；把…关在室内；装填（弹药等）",
    "example": "the Queen’s private chambers",
    "exampleCn": "女王的寝宫"
   },
   {
    "word": "credentials",
    "phonetic": "krə'dɛnʃlz",
    "pos": "n.",
    "meaning": "[管理]证书；文凭；信任状（credential的复数）",
    "example": "The commissioner presented his credentials to the State Department.",
    "exampleCn": "该委员向国务院递交了他的任职资格证书。"
   },
   {
    "word": "invigilate",
    "phonetic": "ɪn'vɪdʒɪlet",
    "pos": "vi",
    "meaning": "监考；看守",
    "example": "Different is, the exam in the life often does not have person invigilate.",
    "exampleCn": "不同的是，生活中的考试常常是没有人监考的。"
   },
   {
    "word": "recover",
    "phonetic": "rɪ'kʌvɚ",
    "pos": "vt",
    "meaning": "恢复；弥补；重新获得；恢复；胜诉；重新得球",
    "example": "It was some hours before she recovered consciousness .",
    "exampleCn": "过了几个小时她才恢复知觉。"
   },
   {
    "word": "artillery",
    "phonetic": "ɑr'tɪləri",
    "pos": "n.",
    "meaning": "[军]火炮；大炮；炮队；炮术",
    "example": "Using tanks and heavy artillery, they seized the town.",
    "exampleCn": "他们使用坦克和重炮攻下了这座城市。"
   },
   {
    "word": "ventilate",
    "phonetic": "'vɛntɪlet",
    "pos": "vt",
    "meaning": "使通风；给…装通风设备；宣布",
    "example": "Ventilate the room properly when stripping paint.",
    "exampleCn": "在刮漆的时候要适当地使房间通风。"
   },
   {
    "word": "reproach",
    "phonetic": "rɪ'protʃ",
    "pos": "n.",
    "meaning": "责备；耻辱；责备；申斥",
    "example": "‘You don’t need me,’ she said quietly, without reproach.",
    "exampleCn": "“你不需要我。”她语气平静，没有丝毫责备。"
   },
   {
    "word": "dump",
    "phonetic": "dʌmp",
    "pos": "vt",
    "meaning": "倾倒；倾卸；倒垃圾",
    "example": "We dumped our bags at the nearby Grand Hotel and hurried toward the market.",
    "exampleCn": "我们把包扔在附近的格兰德旅馆，急匆匆地向市场赶去。"
   },
   {
    "word": "volume",
    "phonetic": "'vɑljum",
    "pos": "n.",
    "meaning": "量；[物]体积；[计]卷；音量；大量；[图情]册；大量的",
    "example": "the volume of trade",
    "exampleCn": "贸易量"
   },
   {
    "word": "coalition",
    "phonetic": "ˌkoʊəˈlɪʃn",
    "pos": "n.",
    "meaning": "联合；结合，合并",
    "example": "the centre-right coalition government",
    "exampleCn": "政治上中间偏右的联合政府"
   },
   {
    "word": "opening",
    "phonetic": "'opənɪŋ",
    "pos": "n.",
    "meaning": "开始；机会；通路；空缺的职位；开始的；开放（open的ing形式）；打开；公开",
    "example": "There are very few openings in scientific research.",
    "exampleCn": "科学研究领域很少有职位空缺。"
   },
   {
    "word": "hit",
    "phonetic": "hɪt",
    "pos": "vt",
    "meaning": "打击；袭击；碰撞；偶然发现；伤…的感情；打；打击；碰撞；偶然碰上；打；打击；（演出等）成功；讽刺",
    "example": "First a house took a direct hit and then the rocket exploded.",
    "exampleCn": "首先一幢房子被直接击中，接着火箭弹爆炸了。"
   },
   {
    "word": "substantiate",
    "phonetic": "səb'stænʃɪet",
    "pos": "vt",
    "meaning": "证实；使实体化",
    "example": "Katzen offered little evidence to substantiate his claims .",
    "exampleCn": "卡曾拿不出什么证据来证明他的说法。"
   },
   {
    "word": "allege",
    "phonetic": "ə'lɛdʒ",
    "pos": "vt",
    "meaning": "宣称，断言；提出…作为理由",
    "example": "She alleged that there was rampant drug use among the male members of the group.",
    "exampleCn": "她指称该组织中有大量的男性成员吸毒。"
   },
   {
    "word": "prescribe",
    "phonetic": "prɪ'skraɪb",
    "pos": "vi",
    "meaning": "规定；开药方；规定；开处方",
    "example": "Planning, as they employ the term, means: plans made by others will prescribe to me what I am to do and how to do it.",
    "exampleCn": "按照他们使用这个词的方式，“计划”的意思是指：由他人所制定的计划将规定我应该做什么以及如何做。"
   },
   {
    "word": "expend",
    "phonetic": "ɪk'spɛnd",
    "pos": "vt",
    "meaning": "花费；消耗；用光；耗尽",
    "example": "Children expend a lot of energy and may need more high-energy food than adults.",
    "exampleCn": "孩子们耗能多，可能比成人需要更多高能量的食物。"
   },
   {
    "word": "thoughtful",
    "phonetic": "'θɔtfl",
    "pos": "adj.",
    "meaning": "深思的；体贴的；关切的",
    "example": "Paul is very thoughtful.",
    "exampleCn": "保罗非常体贴人。"
   },
   {
    "word": "poultry",
    "phonetic": "'poltri",
    "pos": "n.",
    "meaning": "[禽]家禽",
    "example": "...a poultry farm.",
    "exampleCn": "…一个家禽饲养场。"
   },
   {
    "word": "cater",
    "phonetic": "'ketɚ",
    "pos": "vt",
    "meaning": "投合，迎合；满足需要；提供饮食及服务",
    "example": "...a full-service restaurant equipped to cater large events.",
    "exampleCn": "…一家承办大型活动及提供全方位服务的饭店。"
   }
  ]
 }
];
