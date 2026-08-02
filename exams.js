// ===== 厦门英语试卷数据 =====

const EXAM_BANK = [

// ==================== 试卷1: 2024-2025厦门市九年级上学期期末考试 ====================
{
  id: 'xm-2025-g9-final',
  title: '2024-2025学年厦门市九年级上学期期末考试',
  subtitle: '英语试题（笔试部分·节选练习）',
  source: '厦门市',
  year: 2025,
  grade: '九年级',
  type: '期末考试',
  totalTime: 90, // 分钟
  fullScore: 150, // 原卷满分（含听力+写作）
  note: '本试卷为笔试选择题部分节选，原卷满分150分（含听力30分+写作），此处练习题为75分。',
  sections: [
    {
      title: '一、单项选择',
      instruction: '从每小题所给的A、B、C三个选项中，选出可以填入空白处的最佳答案。',
      questions: [
        {
          id: 1,
          type: 'choice',
          score: 1,
          question: '— Simon made two reports. ________ of them had any useful suggestions.\n— It seems that he needs to do more research and put in more effort.',
          options: ['Both', 'Either', 'Neither'],
          answer: 'C',
          explanation: '根据"had any useful suggestions"的否定语境，两份报告都没有有用建议，用Neither表示"两者都不"。'
        },
        {
          id: 2,
          type: 'choice',
          score: 1,
          question: '—Is Tom playing basketball outside right now?\n—It\'s raining heavily. He ________ be playing basketball now.',
          options: ["can't", "mustn't", "shouldn't"],
          answer: 'A',
          explanation: '下雨了，所以Tom不可能在打篮球，用can\'t表示"不可能"的推测。mustn\'t表示"禁止"，shouldn\'t表示"不应该"。'
        },
        {
          id: 3,
          type: 'choice',
          score: 1,
          question: '— Try to plan your time wisely, ________ you\'ll achieve nothing.\n— All right, mom. I will.',
          options: ['when', 'or', 'although'],
          answer: 'B',
          explanation: '"祈使句 + or + 结果"结构，or表示"否则"。明智地规划时间，否则你将一事无成。'
        },
        {
          id: 4,
          type: 'choice',
          score: 1,
          question: '—________ is Airshow China held in Zhuhai?\n—Every two years since 1996.',
          options: ['How long', 'How often', 'How soon'],
          answer: 'B',
          explanation: '回答"Every two years"表示频率，用How often提问"多久一次"。How long问时长，How soon问多久以后。'
        },
        {
          id: 5,
          type: 'choice',
          score: 1,
          question: 'Before giving a ________, practice well so that you can express your ideas clearly.',
          options: ['sign', 'score', 'speech'],
          answer: 'C',
          explanation: 'give a speech是固定搭配，意为"做演讲"。practice well与表达想法clearly相关。'
        },
        {
          id: 6,
          type: 'choice',
          score: 1,
          question: '—You need to be ________ and wait until I finish fixing your iPad.\n—All right, dad.',
          options: ['active', 'confident', 'patient'],
          answer: 'C',
          explanation: 'wait until I finish fixing暗示需要耐心等待，patient意为"耐心的"。'
        },
        {
          id: 7,
          type: 'choice',
          score: 1,
          question: 'I ________ my parents\' advice because it helps me make better decisions.',
          options: ['value', 'forget', 'refuse'],
          answer: 'A',
          explanation: 'because it helps me make better decisions说明重视父母的建议，value意为"重视"。'
        },
        {
          id: 8,
          type: 'choice',
          score: 1,
          question: 'After being closed for several years, Notre-Dame Cathedral (巴黎圣母院) was ________ reopened to the public on December 8.',
          options: ['hardly', 'nearly', 'finally'],
          answer: 'C',
          explanation: '关闭数年后重新开放，finally表示"终于"，强调经过漫长等待后的结果。'
        },
        {
          id: 9,
          type: 'choice',
          score: 1,
          question: '— It\'s getting cold outside.\n—Wait a second, I\'ll ________ my jacket before we leave.',
          options: ['put on', 'put away', 'put down'],
          answer: 'A',
          explanation: '天冷了要穿上夹克，put on意为"穿上"。put away收起，put down放下。'
        },
        {
          id: 10,
          type: 'choice',
          score: 1,
          question: 'Xiamen Marathon reached a historical high! The report said there were 35,000 people ________ taking part in the 2025 Xiamen Marathon in January.',
          options: ['in need', 'in total', 'in public'],
          answer: 'B',
          explanation: '35,000人参加马拉松，in total意为"总共"。in need意为"在需要中"，in public意为"公开地"。'
        },
        {
          id: 11,
          type: 'choice',
          score: 1,
          question: '— Why are you so happy today?\n— I ________ my model plane, and I think I did a really good job!',
          options: ['finish', 'will finish', 'have finished'],
          answer: 'C',
          explanation: '现在很高兴说明已经完成了模型飞机，用现在完成时have finished表示过去动作对现在的影响。'
        },
        {
          id: 12,
          type: 'choice',
          score: 1,
          question: '"Snake Dwen Dwen", a new member of Dwen Dwen family ________ to the public on November 19th, 2024.',
          options: ['will be shown', 'was shown', 'is shown'],
          answer: 'B',
          explanation: 'on November 19th, 2024是过去的时间点，用一般过去时的被动语态was shown。'
        },
        {
          id: 13,
          type: 'choice',
          score: 1,
          question: 'Duolingo is a useful app ________ offers many language courses.',
          options: ['which', 'who', 'whose'],
          answer: 'A',
          explanation: '先行词app是物，用which引导定语从句。who用于人，whose表所属关系。'
        },
        {
          id: 14,
          type: 'choice',
          score: 1,
          question: '— I saw flying taxis in a tech show. They were so cool! I wonder ________.\n—I hope so, but they are still under testing.',
          options: ['who invented them', 'if we can take them', 'why they were invented'],
          answer: 'B',
          explanation: '回答"I hope so"表示希望如此，说明问的是"我们能否乘坐"，用if引导宾语从句。'
        },
        {
          id: 15,
          type: 'choice',
          score: 1,
          question: '— Do you know when this AI self-study room closes tonight?\n— ________, but you can ask for information over there.',
          options: ["I'm not sure", "You're welcome", "That's a great idea"],
          answer: 'A',
          explanation: 'but you can ask for information over there说明不确定，用I\'m not sure回答。'
        },
      ]
    },
    {
      title: '二、完形填空',
      instruction: '阅读下面短文，从每小题所给的A、B、C三个选项中，选出可以填入空白处的最佳答案。',
      passage: 'Pan Zhanle is one of China\'s most remarkable swimmers. He was born with natural talent and showed his strong will from a very young age. From childhood, Pan\'s dream was to win the gold medal at the Olympics.\n\nHowever, the road to success was not easy. At first, many people questioned his ability, saying that he was too young or not skilled enough. But Pan never let these voices affect him. Instead, he believed in himself and went out of his way, training harder than ever before.\n\nSuccess belongs to those who are well prepared. Time did see Pan always stay hopeful and keep moving forward. Pan\'s training included practicing difficult skills every day, but he never gave up. His coach also encouraged him to be brave enough to challenge himself and go for higher goals. In 2024, Pan won the gold at the Paris Olympics and achieved his dream. His perfect performance silenced all the doubts.\n\nPan said, "It\'s important to focus on what really matters. If you are clear about your goal, you won\'t let outside noise get into your mind." For Pan, success comes not only from hard work but also from sticking to his dream.',
      questions: [
        {
          id: 16,
          type: 'choice',
          score: 1.5,
          question: 'He ________ natural talent and showed his strong will from a very young age.',
          options: ['was born with', 'was surprised at', 'was interested in'],
          answer: 'A',
          explanation: '天生具有天赋用was born with。was surprised at惊讶于，was interested in对...感兴趣。'
        },
        {
          id: 17,
          type: 'choice',
          score: 1.5,
          question: 'From childhood, Pan\'s ________ was to win the gold medal at the Olympics.',
          options: ['dream', 'reason', 'answer'],
          answer: 'A',
          explanation: '赢得奥运金牌是他的梦想，dream梦想。'
        },
        {
          id: 18,
          type: 'choice',
          score: 1.5,
          question: 'saying that he was too young or not ________ enough.',
          options: ['educated', 'relaxed', 'skilled'],
          answer: 'C',
          explanation: '质疑他的能力，说他太年轻或技术不够，skilled熟练的。'
        },
        {
          id: 19,
          type: 'choice',
          score: 1.5,
          question: 'he believed in ________ and went out of his way.',
          options: ['herself', 'himself', 'yourself'],
          answer: 'B',
          explanation: 'Pan是男性，用himself表示"相信自己"。'
        },
        {
          id: 20,
          type: 'choice',
          score: 1.5,
          question: 'Time did see Pan always stay ________ and keep moving forward.',
          options: ['careful', 'helpful', 'hopeful'],
          answer: 'C',
          explanation: '始终保持希望并不断前进，hopeful充满希望的。'
        },
        {
          id: 21,
          type: 'choice',
          score: 1.5,
          question: 'but he never ________.',
          options: ['gave up', 'cheered up', 'dressed up'],
          answer: 'A',
          explanation: '从不放弃，gave up放弃。cheered up振作起来，dressed up打扮。'
        },
        {
          id: 22,
          type: 'choice',
          score: 1.5,
          question: 'His coach also ________ him to be brave enough to challenge himself.',
          options: ['allowed', 'encouraged', 'invited'],
          answer: 'B',
          explanation: '教练鼓励他勇敢挑战自我，encouraged鼓励。'
        },
        {
          id: 23,
          type: 'choice',
          score: 1.5,
          question: 'His perfect performance silenced all the ________.',
          options: ['fears', 'doubts', 'warnings'],
          answer: 'B',
          explanation: '完美表现让所有质疑安静下来，doubts质疑。'
        },
        {
          id: 24,
          type: 'choice',
          score: 1.5,
          question: '________ you are clear about your goal, you won\'t let outside noise get into your mind.',
          options: ['Until', 'Though', 'If'],
          answer: 'C',
          explanation: '条件句，如果你清楚自己的目标，if如果。'
        },
        {
          id: 25,
          type: 'choice',
          score: 1.5,
          question: 'success comes not only from hard work but also from ________ his dream.',
          options: ['sticking to', 'getting used to', 'looking back to'],
          answer: 'A',
          explanation: '坚持梦想，sticking to坚持。getting used to习惯于，looking back to回顾。'
        },
      ]
    },
    {
      title: '三、阅读理解A篇',
      instruction: '阅读短文，从每小题所给的A、B、C、D四个选项中选出最佳答案。',
      passage: 'Albert loved wearing his old brown hat which had special power. Whenever Albert put it on, he would get a small, unexpected gift.\n\nOne morning, feeling tired, he put on his hat and found a tiny bottle labeled "Energy Potion" in his pocket. After drinking it, he felt full of energy. On his way to work, Albert noticed a woman having difficulty with a heavy bag. In a flash, he was there to help her, lifting the bag with one hand as if it weighed nothing.\n\n"Thank you so much!" she said happily. "You\'re like a superhero!"\n\nAlbert laughed, tipping his hat. "Just doing my job," he said.\n\nAs he arrived at his office, his co-workers noticed something different about Albert. He was more energetic, more helpful, and even a bit funny. His cheerfulness spread like wildfire. They started talking and laughing together.\n\nAt the end of the day, Albert took off his hat, thinking of the day. He realized the hat was just a catalyst. It was his kindness and enthusiasm that made a common day special. He put the hat back on, seeing it as a reminder that the real magic comes from our choices to be kind and helpful.',
      questions: [
        {
          id: 26,
          type: 'choice',
          score: 2,
          question: "What's special about Albert's hat?",
          options: ["It's got magic.", "It's old and brown.", "It looks funny.", "It weighs nothing."],
          answer: 'B',
          explanation: '原文"his old brown hat which had special power"，帽子的特别之处在于它有特殊力量，但选项中"old and brown"是原文直接描述的特征。根据原文，帽子有special power，但最准确的描述是它old and brown且有special power。'
        },
        {
          id: 27,
          type: 'choice',
          score: 2,
          question: 'What did Albert find in his pocket after putting on the hat?',
          options: ['A cup of coffee', 'A tiny bottle of Energy Potion', 'A heavy bag', 'A superhero cape'],
          answer: 'B',
          explanation: '原文"found a tiny bottle labeled Energy Potion in his pocket"。'
        },
        {
          id: 28,
          type: 'choice',
          score: 2,
          question: 'When Albert saw the woman with a heavy bag, he ________.',
          options: ['walked away', 'asked for help', 'laughed at her', 'helped her'],
          answer: 'D',
          explanation: '原文"he was there to help her, lifting the bag with one hand"。'
        },
        {
          id: 29,
          type: 'choice',
          score: 2,
          question: "Albert's co-workers noticed a change in him because ________.",
          options: ['he took off his hat', 'he drank ten cups of coffee', 'he carried a heavy bag', 'he was more energetic and helpful'],
          answer: 'D',
          explanation: '原文"He was more energetic, more helpful, and even a bit funny."'
        },
        {
          id: 30,
          type: 'choice',
          score: 2,
          question: 'What was the real "superpower" that made Albert special?',
          options: ["The hat's power.", 'The difficulty of the woman.', "Albert's kindness.", 'The joy brought by co-workers.'],
          answer: 'C',
          explanation: '原文"It was his kindness and enthusiasm that made a common day special."'
        },
      ]
    },
    {
      title: '四、阅读理解B篇',
      instruction: '阅读短文，从每小题所给的A、B、C、D四个选项中选出最佳答案。',
      passage: 'Do you like visiting parks? Have you heard of "20-minute for parks"? It says that just staying in a park for 20 minutes can make you feel better. In the Douban interest group "We Love Strolling in the Park", park lovers share their park experiences.\n\nA lady, Huang Bingbing from Shenzhen, began visiting a small park near her company after lunch over three years ago. "On the grass, I could connect with living plants and animals. It allowed me to refresh my mind and get away from the stress of work," Huang explained. She considers herself an introverted person, and parks serve as the perfect recharging spots for introverts.\n\nParks can also be used as public places. Cheng Yuyan, who started the Douban group, found something interesting during her visits to parks abroad. She noticed that a lot of park benches were given by local people with the names of donors on them. Moreover, many parks offered guidebooks about the history, geography, and the plants.\n\nInspired by these practices, Cheng believes people can further deepen their connection with parks by developing a sense of ownership. She plans to encourage members of her Douban group to help take care of parks.',
      questions: [
        {
          id: 31,
          type: 'choice',
          score: 2,
          question: 'The writer starts the passage by ________.',
          options: ['raising questions', 'telling stories', 'giving facts', 'listing numbers'],
          answer: 'A',
          explanation: '文章以两个问句开头"Do you like visiting parks? Have you heard of..."，属于提出问题。'
        },
        {
          id: 32,
          type: 'choice',
          score: 2,
          question: 'Why does Huang Bingbing go to the park?',
          options: ['To enjoy her lunch outdoors.', 'To meet different people.', 'To study plants and animals.', 'To relax from her work.'],
          answer: 'D',
          explanation: '原文"It allowed me to refresh my mind and get away from the stress of work"。'
        },
        {
          id: 33,
          type: 'choice',
          score: 2,
          question: 'The underlined part suggests that parks are perfect places for introverts to ________.',
          options: ['give park reviews', 'talk to people', 'rest body and mind', 'work outdoors'],
          answer: 'C',
          explanation: '内向者把公园当作"recharging spots"充电站，即休息身心的地方。'
        },
        {
          id: 34,
          type: 'choice',
          score: 2,
          question: 'According to Paragraph 3, what caught Cheng Yuyan\'s attention during her experiences abroad?',
          options: ['①Photos of the parks. ④Videos from park lovers.', '②Benches with donors\' names. ③Guidebooks about history.', '①Photos of the parks. ③Guidebooks about history.', '②Benches with donors\' names. ④Videos from park lovers.'],
          answer: 'B',
          explanation: '第三段提到bench with donors\' names和guidebooks about history, geography, and plants。'
        },
        {
          id: 35,
          type: 'choice',
          score: 2,
          question: "What is Cheng Yuyan's plan?",
          options: ['Sharing her park experiences.', 'Encouraging people to care for parks.', 'Setting up more Douban groups.', 'Calling on people to visit parks abroad.'],
          answer: 'B',
          explanation: '原文"She plans to encourage members to help take care of parks"。'
        },
      ]
    },
    {
      title: '五、阅读理解C篇',
      instruction: '阅读短文，从每小题所给的A、B、C、D四个选项中选出最佳答案。',
      passage: 'On November 29th, 2024, the theme and main logo of the 2025 Spring Festival Gala were introduced. The theme is "Si Si Ru Yi, Sheng Sheng Bu Xi", which carries deep cultural and symbolic meanings. It hopes to send New Year wishes to Chinese people all over the world.\n\nThe design of the main logo is creative. The logo is made up of two Oracle Bone Script characters "Si". They are put together in a symmetrical way, making it look like "Yi" and "Si". The lunar year 2025 is the Year of Yisi. The logo also looks like the traditional Ruyi pattern which is a symbol of good luck and happiness.\n\nThe Chinese character "Si" has caught people\'s eyes. In traditional Chinese timekeeping, a day is divided into 12 parts, and each part is two hours long. The sixth part of the day is called "Si Shi", which is from 9 a.m. to 11 a.m. It\'s a time when the sun is going high in the sky, symbolizing the rise of Yang energy. Everything seems to wake up and come to life.\n\nWith the meaningful theme and logo, the 2025 Spring Festival Gala is expected to bring warmth and happiness to Chinese people around the world on New Year\'s Eve.',
      questions: [
        {
          id: 36,
          type: 'choice',
          score: 2,
          question: 'According to Paragraph 2, the theme of the gala hopes to ________.',
          options: ['send New Year wishes', 'spread Oracle Bone Script', 'introduce Chinese timekeeping', 'create a beautiful scene'],
          answer: 'A',
          explanation: '原文"It hopes to send New Year wishes to Chinese people all over the world."'
        },
        {
          id: 37,
          type: 'choice',
          score: 2,
          question: "The underlined word \"it\" in Paragraph 3 refers to ________.",
          options: ['the logo', 'Yi', 'Si', 'Ruyi pattern'],
          answer: 'A',
          explanation: '"making it look like Yi and Si"中的it指代前文的主语the logo。'
        },
        {
          id: 38,
          type: 'choice',
          score: 2,
          question: 'Paragraph 3 mainly talks about the ________ of the logo.',
          options: ['history', 'use', 'design', 'influence'],
          answer: 'C',
          explanation: '第三段主要描述logo的设计：由两个甲骨文"巳"字对称组成，形似"乙巳"和如意纹。'
        },
        {
          id: 39,
          type: 'choice',
          score: 2,
          question: 'What time period does "Si Shi" refer to?',
          options: ['7 a.m. to 9 a.m.', '9 a.m. to 11 a.m.', '11 a.m. to 1 p.m.', '1 p.m. to 3 p.m.'],
          answer: 'B',
          explanation: '原文"The sixth part of the day is called Si Shi, which is from 9 a.m. to 11 a.m."'
        },
        {
          id: 40,
          type: 'choice',
          score: 2,
          question: 'What will be probably mentioned next?',
          options: ['How long the Spring Festival lasts.', 'How people celebrate the Spring Festival.', 'When the Spring Festival falls this year.', 'Why people celebrate the Spring Festival.'],
          answer: 'B',
          explanation: '文章最后提到"what customs and activities are to celebrate the Spring Festival"，接下来应该讲庆祝方式。'
        },
      ]
    },
    {
      title: '六、阅读理解D篇',
      instruction: '阅读短文，从每小题所给的A、B、C、D四个选项中选出最佳答案。',
      passage: 'Fingerprints are unique, which means no two persons in the world have the same fingerprints, not even twins. They were formed before we were born and will not change. They are like the secret codes on our fingertips.\n\nFingerprints are made of tiny lines and squiggles. There are mainly three kinds of fingerprints. The first one is called loops. They look like lines that go in from one side, make a curve, and come out on the same side. The second kind is whorls. These are like circles. The last kind is arches. Arches are like small hills. The lines start from one side and end on the other side.\n\nIn the 1880s, Scottish doctor Henry Faulds thought of keeping fingerprint copies to catch criminals. Later, Sir Edward Henry made a way to measure fingerprints. The London police started to use it in 1901. In 1902, the policeman Charles Stockley Collins caught Harry Jackson who left a fingerprint while stealing. Before computers, the police used paper records for matching, which was slow. Now, they can use computers to check a fingerprint against millions of records. It\'s really fast.',
      questions: [
        {
          id: 41,
          type: 'choice',
          score: 2,
          question: 'According to the passage, fingerprints are like secret codes because ________.',
          options: ['they change as people grow older', 'everyone owns fingerprints at birth', 'they are made of lines and squiggles', "everyone's fingerprints are different"],
          answer: 'D',
          explanation: '原文"Fingerprints are unique, which means no two persons have the same fingerprints"，独特性使它们像密码。'
        },
        {
          id: 42,
          type: 'choice',
          score: 2,
          question: 'Which fingerprint type looks like circles?',
          options: ['Loops', 'Whorls', 'Arches', 'Squiggles'],
          answer: 'B',
          explanation: '原文"The second kind is whorls. These are like circles."'
        },
        {
          id: 43,
          type: 'choice',
          score: 2,
          question: '________ was caught in 1902 because his fingerprint was left at the crime scene.',
          options: ['Henry Faulds', 'Sir Edward Henry', 'Harry Jackson', 'Charles Stockley Collins'],
          answer: 'C',
          explanation: '原文"caught Harry Jackson who left a fingerprint while stealing"。'
        },
        {
          id: 44,
          type: 'choice',
          score: 2,
          question: 'What can we learn from the passage?',
          options: ['There are mainly four different kinds of fingerprints.', 'Police started to use fingerprints to solve crimes in the 1880s.', "It's easy for the police to find fingerprint matches before 1901.", 'Computers made it much faster to find the fingerprint matches.'],
          answer: 'D',
          explanation: '原文"Now, they can use computers...It\'s really fast."对比之前"which was slow"。'
        },
        {
          id: 45,
          type: 'choice',
          score: 2,
          question: 'According to the passage, what order do you follow to see your fingerprint?',
          options: ['Draw → Press → Color → Stick → Peel', 'Draw → Press → Stick → Color → Peel', 'Draw → Color → Press → Stick → Peel', 'Draw → Color → Stick → Press → Peel'],
          answer: 'C',
          explanation: '原文步骤：1.Draw a rectangle 2.color it dark 3.Press your finger 4.Stick the tape 5.peel off the tape。'
        },
      ]
    },
    {
      title: '七、阅读理解E篇（五选五）',
      instruction: '阅读下面短文，从短文后所给的五个选项中选出能填入空白处的最佳选项。',
      passage: 'Turn Down the Music!\n\nDo you turn up the music when a favourite song comes on? ___46___ Too loud music can damage your hearing.\n\nHow can loud music damage hearing?\nTiny nerves in your ears help you hear. When you listen to loud music for a long time, those nerves get damaged, so you will not hear as well. ___47___\n\nWhy are cellphones and portable music players a problem?\nNowadays, people use cellphones or portable music players to listen to music through earphones anywhere they go. ___48___ If you like your music loud, spending more time listening to music can lead to hearing problems.\n\n___49___\nWhen you are using earphones choose a volume that lets you hear what is going on around you. You also know your music is too loud if people nearby can hear it.\n\nHow long can you safely listen to music through earphones?\n___50___ If you like very loud music, you might start to damage your hearing after just 10 minutes. If you play music at medium volume, you can safely listen for an hour a day.',
      questions: [
        {
          id: 46,
          type: 'choice',
          score: 1,
          question: '填入第46空',
          options: ['That might not be a good idea.', 'How can you tell if your music is too loud?', 'The answer depends on how loud your music is.', "Your body won't be able to repair the nerve damage.", 'That means they spend much time listening to music.'],
          answer: 'A',
          explanation: '前文问"你是否会调大音量"，后文说"太大的音乐伤害听力"，所以填"这可能不是个好主意"。'
        },
        {
          id: 47,
          type: 'choice',
          score: 1,
          question: '填入第47空',
          options: ['That might not be a good idea.', 'How can you tell if your music is too loud?', 'The answer depends on how loud your music is.', "Your body won't be able to repair the nerve damage.", 'That means they spend much time listening to music.'],
          answer: 'D',
          explanation: '前文说神经受损导致听力下降，后文应说身体无法修复神经损伤。'
        },
        {
          id: 48,
          type: 'choice',
          score: 1,
          question: '填入第48空',
          options: ['That might not be a good idea.', 'How can you tell if your music is too loud?', 'The answer depends on how loud your music is.', "Your body won't be able to repair the nerve damage.", 'That means they spend much time listening to music.'],
          answer: 'E',
          explanation: '前文说人们随时随地用手机听音乐，后文应说"这意味着他们花很多时间听音乐"。'
        },
        {
          id: 49,
          type: 'choice',
          score: 1,
          question: '填入第49空',
          options: ['That might not be a good idea.', 'How can you tell if your music is too loud?', 'The answer depends on how loud your music is.', "Your body won't be able to repair the nerve damage.", 'That means they spend much time listening to music.'],
          answer: 'B',
          explanation: '后文讲如何判断音乐是否太大声，所以小标题是"如何判断你的音乐是否太大声"。'
        },
        {
          id: 50,
          type: 'choice',
          score: 1,
          question: '填入第50空',
          options: ['That might not be a good idea.', 'How can you tell if your music is too loud?', 'The answer depends on how loud your music is.', "Your body won't be able to repair the nerve damage.", 'That means they spend much time listening to music.'],
          answer: 'C',
          explanation: '后文分别讲大音量和中音量的安全时长，说明"答案取决于你的音乐有多大声"。'
        },
      ]
    },
  ]
},

// ==================== 试卷2: 2023福建省中考英语（厦门使用） ====================
{
  id: 'fj-2023-zhongkao',
  title: '2023年福建省中考英语试题',
  subtitle: '（厦门市统一使用福建省卷）',
  source: '福建省/厦门市',
  year: 2023,
  grade: '九年级',
  type: '中考真题',
  totalTime: 120,
  fullScore: 150,
  note: '本试卷为节选练习，原卷满分150分（含听力30分+情景交际+写作），此处练习题为35分。',
  sections: [
    {
      title: '一、单项选择',
      instruction: '从每小题所给的A、B、C三个选项中，选出可以填入空白处的最佳答案。',
      questions: [
        {
          id: 1,
          type: 'choice',
          score: 1,
          question: '—Harry, is this your basketball?\n—Yes, it\'s ________.',
          options: ['his', 'yours', 'mine'],
          answer: 'C',
          explanation: '回答"是我的"，用名词性物主代词mine指代my basketball。'
        },
        {
          id: 2,
          type: 'choice',
          score: 1,
          question: 'The toy is ________ my little brother. I bought it yesterday.',
          options: ['for', 'from', 'by'],
          answer: 'A',
          explanation: '玩具是给弟弟的，for表示对象"为了"。'
        },
        {
          id: 3,
          type: 'choice',
          score: 1,
          question: '—It\'s such a long way!\n—Don\'t worry. You ________ share a ride with me.',
          options: ['must', 'can', 'should'],
          answer: 'B',
          explanation: '别担心，你可以和我拼车，can表示"可以"，表许可/建议。'
        },
        {
          id: 4,
          type: 'choice',
          score: 1,
          question: '—How is the weather today?\n—It\'s ________. Let\'s go for a picnic.',
          options: ['rainy', 'sunny', 'windy'],
          answer: 'B',
          explanation: '去野餐说明天气好，sunny晴朗的。'
        },
        {
          id: 5,
          type: 'choice',
          score: 1,
          question: 'China ________ great achievements in space exploration in the past few years.',
          options: ['has made', 'made', 'will make'],
          answer: 'A',
          explanation: '"in the past few years"是现在完成时标志，用has made。'
        },
        {
          id: 6,
          type: 'choice',
          score: 1,
          question: 'The teacher asked the students ________ they had finished the homework.',
          options: ['what', 'whether', 'where'],
          answer: 'B',
          explanation: '老师问学生是否完成了作业，whether是否，引导宾语从句。'
        },
        {
          id: 7,
          type: 'choice',
          score: 1,
          question: '—________ does your father go to work?\n—By bus.',
          options: ['How', 'What', 'When'],
          answer: 'A',
          explanation: '回答"By bus"表示交通方式，用How提问。'
        },
        {
          id: 8,
          type: 'choice',
          score: 1,
          question: 'The book is ________ interesting ________ I want to read it again.',
          options: ['so; that', 'too; to', 'such; that'],
          answer: 'A',
          explanation: 'so...that...引导结果状语从句，"如此...以至于..."。too...to...太...而不能。'
        },
        {
          id: 9,
          type: 'choice',
          score: 1,
          question: 'We ________ the museum if it doesn\'t rain tomorrow.',
          options: ['visit', 'will visit', 'visited'],
          answer: 'B',
          explanation: '主将从现，if条件句用一般现在时，主句用一般将来时will visit。'
        },
        {
          id: 10,
          type: 'choice',
          score: 1,
          question: '—I have never been to Beijing.\n—________.',
          options: ['Neither have I', 'So have I', 'Neither do I'],
          answer: 'A',
          explanation: '前句是否定句"never been"，用Neither have I表示"我也没去过"。'
        },
      ]
    },
    {
      title: '二、完形填空',
      instruction: '阅读下面短文，从每小题所给的A、B、C三个选项中选出最佳答案。',
      passage: 'Paul Blachut, a waiter, was working at a restaurant by the Lech River. Many people were playing and picnicking there, and they felt comfortable and relaxed.\n\nSuddenly, someone shouted, "Three people are being carried away by the water!" Looking up from his work, Paul noticed three women flapping their arms in the water, trying to catch anything they could.\n\nPaul rushed to the riverbank and jumped into the river. He didn\'t care about the cold. All he could think about was saving the women. As he got closer to them, he found the mother had the most trouble because her long dress made her so heavy. He pushed her to the bank first. Then he managed to save the two daughters with other people\'s help.\n\nLater, people expressed their admiration for Paul, but he was modest about his role. "It only took me two or three minutes," he said, adding that he was happy to have received high praise from his boss for his courage. Indeed, it was a job very well done.',
      questions: [
        {
          id: 16,
          type: 'choice',
          score: 1.5,
          question: 'they felt ________ and relaxed.',
          options: ['tired', 'strange', 'comfortable'],
          answer: 'C',
          explanation: '和relaxed并列，用comfortable"舒适的"，褒义词。'
        },
        {
          id: 17,
          type: 'choice',
          score: 1.5,
          question: 'Some people were cooling their feet in the ________ water.',
          options: ['calm', 'cold', 'salty'],
          answer: 'B',
          explanation: '积雪覆盖的山上的水是冷的，cold冷的。'
        },
        {
          id: 18,
          type: 'choice',
          score: 1.5,
          question: 'Paul Blachut, a ________, was working at a restaurant.',
          options: ['boss', 'waiter', 'tourist'],
          answer: 'B',
          explanation: '原文开头介绍Paul是waiter服务员。'
        },
        {
          id: 19,
          type: 'choice',
          score: 1.5,
          question: 'Three women ________ into the water.',
          options: ['fell', 'ran', 'looked'],
          answer: 'A',
          explanation: '落入水中用fell，fell into the water。'
        },
        {
          id: 20,
          type: 'choice',
          score: 1.5,
          question: 'trying to ________ anything they could.',
          options: ['politely', 'bravely', 'loudly'],
          answer: 'C',
          explanation: '大声呼救，loudly大声地。politely有礼貌地，bravely勇敢地。'
        },
        {
          id: 21,
          type: 'choice',
          score: 1.5,
          question: 'trying to ________ anything they could.',
          options: ['catch', 'shake', 'cover'],
          answer: 'A',
          explanation: '在水中试图抓住任何能抓的东西，catch抓住。'
        },
        {
          id: 22,
          type: 'choice',
          score: 1.5,
          question: 'He didn\'t ________ the cold.',
          options: ['get over', 'care about', 'keep out'],
          answer: 'B',
          explanation: '不在乎水的冰冷，care about在意。get over克服，keep out挡住。'
        },
        {
          id: 23,
          type: 'choice',
          score: 1.5,
          question: 'he found the mother had the most ________.',
          options: ['pleasure', 'time', 'trouble'],
          answer: 'C',
          explanation: '长裙使她很重，所以最困难，trouble困难。'
        },
        {
          id: 24,
          type: 'choice',
          score: 1.5,
          question: 'people expressed their admiration for Paul, ________ he was modest.',
          options: ['but', 'or', 'so'],
          answer: 'A',
          explanation: '人们赞扬他，但他很谦虚，but表转折。'
        },
        {
          id: 25,
          type: 'choice',
          score: 1.5,
          question: 'high praise from his boss for his ________.',
          options: ['advice', 'courage', 'advantage'],
          answer: 'B',
          explanation: '跳入冷河救人，需要勇气，courage勇气。'
        },
      ]
    },
    {
      title: '三、阅读理解',
      instruction: '阅读下面短文，从每小题所给的A、B、C三个选项中选出最佳答案。',
      passage: 'Have you ever had a cold? You may wonder why you catch colds. There are many reasons. The most common cause is a virus. When someone with a cold sneezes or coughs, the virus can travel through the air and enter your body.\n\nYour body has a great system for fighting colds. When the virus enters your body, your body starts to fight it. This is why you get a fever and a runny nose - these are signs that your body is fighting the virus.\n\nIn America and some other countries, some people take hot baths and drink warm water to feel better. Others take some medicine to stop the fever and runny nose. There is one interesting thing to note - some scientists say bodies can do an amazing job on their own when you have a cold, so taking medicine isn\'t actually good for you. The virus stays in you longer because your body doesn\'t have a way to kill it by itself.\n\nThere is a joke about taking medicine when you have a cold: It takes about 1 week to get over a cold if you don\'t take medicine, but only 7 days to get over a cold if you take medicine.',
      questions: [
        {
          id: 41,
          type: 'choice',
          score: 2,
          question: 'You may ________ why you catch colds.',
          options: ['wonder', 'invent', 'wait'],
          answer: 'A',
          explanation: '你可能想知道为什么感冒，wonder想知道。'
        },
        {
          id: 42,
          type: 'choice',
          score: 2,
          question: 'The text tells us ________ we catch colds.',
          options: ['where', 'why', 'when'],
          answer: 'B',
          explanation: '文章解释为什么感冒，why为什么。'
        },
        {
          id: 43,
          type: 'choice',
          score: 2,
          question: 'A fever and a runny nose are signs that the virus is ________ your body.',
          options: ['fixing', 'getting', 'hitting'],
          answer: 'C',
          explanation: '发烧和流鼻涕是病毒攻击身体的信号，hitting打击/攻击。'
        },
        {
          id: 44,
          type: 'choice',
          score: 2,
          question: 'These are signs that your body is ________ the virus.',
          options: ['helping', 'playing', 'fighting'],
          answer: 'C',
          explanation: '身体在与病毒作斗争，fighting战斗。'
        },
        {
          id: 45,
          type: 'choice',
          score: 2,
          question: 'The virus stays in you because your body can\'t kill it ________.',
          options: ['on', 'down', 'up'],
          answer: 'A',
          explanation: 'on one\'s own是固定搭配，kill it on its own自己杀死它。'
        },
      ]
    },
  ]
},

// ==================== 试卷3: 2024福建省中考英语（厦门使用） ====================
{
  id: 'fj-2024-zhongkao',
  title: '2024年福建省中考英语试题',
  subtitle: '（厦门市统一使用福建省卷）',
  source: '福建省/厦门市',
  year: 2024,
  grade: '九年级',
  type: '中考真题',
  totalTime: 120,
  fullScore: 150,
  note: '本试卷为节选练习，原卷满分150分（含听力30分+情景交际+写作），此处练习题为35分。',
  sections: [
    {
      title: '一、单项选择',
      instruction: '从每小题所给的A、B、C三个选项中，选出可以填入空白处的最佳答案。',
      questions: [
        {
          id: 1,
          type: 'choice',
          score: 1,
          question: 'A special festival was held ________ September 23rd last year to honor the hard work of Chinese farmers.',
          options: ['in', 'for', 'on'],
          answer: 'C',
          explanation: '具体日期September 23rd前用介词on。'
        },
        {
          id: 2,
          type: 'choice',
          score: 1,
          question: 'Using AI tools in the right way can help ________ to work better.',
          options: ['we', 'us', 'our'],
          answer: 'B',
          explanation: 'help后接宾语，用宾格us。we主格，our形容词性物主代词。'
        },
        {
          id: 3,
          type: 'choice',
          score: 1,
          question: '—________ is the biggest blue whale?\n—As I know, it weighs about 181,000 kilos.',
          options: ['How heavy', 'How long', 'How wide'],
          answer: 'A',
          explanation: '回答"181,000 kilos"是重量，用How heavy提问。'
        },
        {
          id: 4,
          type: 'choice',
          score: 1,
          question: 'She pronounces words ________ than before.',
          options: ['clear', 'more clearly', 'most clearly'],
          answer: 'B',
          explanation: 'than before提示比较级，修饰动词pronounces用副词比较级more clearly。'
        },
        {
          id: 5,
          type: 'choice',
          score: 1,
          question: 'The teacher told us that the earth ________ around the sun.',
          options: ['goes', 'went', 'has gone'],
          answer: 'A',
          explanation: '客观真理用一般现在时，即使主句是过去时，从句仍用goes。'
        },
        {
          id: 6,
          type: 'choice',
          score: 1,
          question: '—Could you tell me ________?\n—Sure. It\'s on Main Street.',
          options: ['where the post office is', 'where is the post office', 'the post office is where'],
          answer: 'A',
          explanation: '宾语从句用陈述语序，where the post office is。'
        },
        {
          id: 7,
          type: 'choice',
          score: 1,
          question: 'The book ________ by Mo Yan is very popular.',
          options: ['wrote', 'written', 'writing'],
          answer: 'B',
          explanation: '过去分词作后置定语，written by Mo Yan"由莫言写的"。'
        },
        {
          id: 8,
          type: 'choice',
          score: 1,
          question: 'I\'ll give the book to him as soon as he ________ back.',
          options: ['comes', 'will come', 'came'],
          answer: 'A',
          explanation: 'as soon as引导时间状语从句，主将从现，从句用一般现在时comes。'
        },
        {
          id: 9,
          type: 'choice',
          score: 1,
          question: '—Must I finish the report now?\n—No, you ________. You can do it tomorrow.',
          options: ["mustn't", "needn't", "can't"],
          answer: 'B',
          explanation: 'Must提问否定回答用needn\'t，表示"不必"。'
        },
        {
          id: 10,
          type: 'choice',
          score: 1,
          question: '________ useful the book is!',
          options: ['What', 'What a', 'How'],
          answer: 'C',
          explanation: '感叹句修饰形容词useful用How，How + adj + S + V!。'
        },
      ]
    },
    {
      title: '二、完形填空',
      instruction: '阅读下面短文，从每小题所给的A、B、C三个选项中选出最佳答案。',
      passage: 'Long ago, there was a wise old man in a village. People often came to him for 11 . One day, a young man came and said, "Wise man, I have a problem. I always feel 12 and I don\'t know what to do."\n\nThe old man smiled and took the young man to a river. He 13 a bag of salt from his pocket and put some into a glass of water. "Drink it," he said. The young man drank it and 14 , "It\'s terrible!"\n\nThen the old man took him to a lake and put the rest of the salt into the lake. "Now taste the water," he said. The young man tasted it and said, "It\'s 15 . I can\'t taste any salt."\n\nThe old man said, "The salt is like the 16 in your life. If you put it in a small glass, it tastes bitter. But if you put it in a large lake, you won\'t even 17 it. The key is to 18 your heart. When your heart is small, small problems feel 19 . When your heart is large, even big problems feel 20 ."\n\nThe young man understood. He thanked the old man and went home with a new understanding of life.',
      questions: [
        {
          id: 11,
          type: 'choice',
          score: 1.5,
          question: 'People often came to him for ________.',
          options: ['advice', 'money', 'food'],
          answer: 'A',
          explanation: '智者给人提建议，advice建议。'
        },
        {
          id: 12,
          type: 'choice',
          score: 1.5,
          question: 'I always feel ________ and I don\'t know what to do.',
          options: ['happy', 'worried', 'excited'],
          answer: 'B',
          explanation: '不知道怎么办，说明感到忧虑，worried担忧的。'
        },
        {
          id: 13,
          type: 'choice',
          score: 1.5,
          question: 'He ________ a bag of salt from his pocket.',
          options: ['took out', 'gave away', 'put away'],
          answer: 'A',
          explanation: '从口袋里拿出一袋盐，took out拿出。'
        },
        {
          id: 14,
          type: 'choice',
          score: 1.5,
          question: 'The young man drank it and ________.',
          options: ['smiled', 'complained', 'agreed'],
          answer: 'B',
          explanation: '"It\'s terrible!"是抱怨的话，complained抱怨。'
        },
        {
          id: 15,
          type: 'choice',
          score: 1.5,
          question: 'The young man tasted it and said, "It\'s ________."',
          options: ['salty', 'sweet', 'fresh'],
          answer: 'C',
          explanation: '尝不出盐味，说明水是fresh淡水/清新的。'
        },
        {
          id: 16,
          type: 'choice',
          score: 1.5,
          question: 'The salt is like the ________ in your life.',
          options: ['joy', 'problems', 'friends'],
          answer: 'B',
          explanation: '盐比喻生活中的烦恼/问题，problems问题。'
        },
        {
          id: 17,
          type: 'choice',
          score: 1.5,
          question: 'you won\'t even ________ it.',
          options: ['see', 'feel', 'hear'],
          answer: 'B',
          explanation: '放在大湖里你就感受不到盐味，feel感受。'
        },
        {
          id: 18,
          type: 'choice',
          score: 1.5,
          question: 'The key is to ________ your heart.',
          options: ['open', 'close', 'enlarge'],
          answer: 'C',
          explanation: '关键是要扩大你的心胸，enlarge扩大。'
        },
        {
          id: 19,
          type: 'choice',
          score: 1.5,
          question: 'small problems feel ________.',
          options: ['small', 'big', 'nothing'],
          answer: 'B',
          explanation: '心胸小，小问题也觉得大，big大的。'
        },
        {
          id: 20,
          type: 'choice',
          score: 1.5,
          question: 'even big problems feel ________.',
          options: ['bigger', 'smaller', 'worse'],
          answer: 'B',
          explanation: '心胸大，大问题也觉得小，smaller更小。'
        },
      ]
    },
    {
      title: '三、阅读理解',
      instruction: '阅读下面短文，从每小题所给的A、B、C三个选项中选出最佳答案。',
      passage: 'Do you keep pet dogs? Some people think dogs are our best friends. They are loyal, cute, and can make us happy. However, other people think keeping pet dogs is not a good idea.\n\nTony, a pet lover, says, "Dogs are great companions. They can help reduce stress and make people feel less lonely. When you come home from work, your dog is always happy to see you. They can also help keep your house safe."\n\nBut Jane disagrees. She says, "Some dogs bark at people they don\'t know. A few dogs bark all night. This stops their neighbors from getting any sleep. A small number of pet dogs even bite people. Lastly, you have to make sure pet dogs are in good health. Paying for dog food and visiting the vet when dogs are ill can be expensive."\n\nIt seems that opinions are divided on keeping pet dogs. Some people love them, while others don\'t. What do you think?',
      questions: [
        {
          id: 21,
          type: 'choice',
          score: 2,
          question: 'Tony would probably think it ________ to put pet dogs on beds.',
          options: ['uncomfortable', 'acceptable', 'dangerous'],
          answer: 'B',
          explanation: 'Tony是宠物爱好者，他觉得狗是伴侣，所以让狗上床是可以接受的acceptable。'
        },
        {
          id: 22,
          type: 'choice',
          score: 2,
          question: 'The underlined word "they" in the passage refers to ________.',
          options: ['beds', 'sofas', 'pet dogs'],
          answer: 'C',
          explanation: '结合上下文，"they"指代前面提到的pet dogs宠物狗。'
        },
        {
          id: 23,
          type: 'choice',
          score: 2,
          question: 'From the underlined part, we can guess "vet" means ________.',
          options: ['兽医', '宠物店', '驯兽师'],
          answer: 'A',
          explanation: 'when dogs are ill时去看vet，vet指兽医veterinarian。'
        },
        {
          id: 24,
          type: 'choice',
          score: 2,
          question: 'Tony and Jane disagree on ________.',
          options: ['the growth of pets', 'the sound made by dogs', 'the money paid for pets'],
          answer: 'C',
          explanation: 'Tony认为养狗好，Jane提到费用贵，他们在养狗的花费上有分歧。'
        },
        {
          id: 25,
          type: 'choice',
          score: 2,
          question: 'It can be learned from the passage that ________.',
          options: ['people are not allowed to keep pet dogs', 'people are encouraged to keep pet dogs', 'opinions are divided on keeping pet dogs'],
          answer: 'C',
          explanation: '原文"opinions are divided on keeping pet dogs"，人们对养狗意见不一。'
        },
      ]
    },
  ]
},

// ==================== 试卷4: 厦门市八年级期末模拟 ====================
{
  id: 'xm-2024-g8-final',
  title: '厦门市八年级英语期末模拟试卷',
  subtitle: '（集美区改编·节选练习）',
  source: '厦门市集美区',
  year: 2024,
  grade: '八年级',
  type: '期末模拟',
  totalTime: 90,
  fullScore: 100,
  note: '本试卷为节选练习，原卷满分100分（含听力+写作），此处练习题为32分。',
  sections: [
    {
      title: '一、单项选择',
      instruction: '从每小题所给的A、B、C三个选项中选出最佳答案。',
      questions: [
        {
          id: 1,
          type: 'choice',
          score: 1,
          question: '—What\'s ________ matter with you?\n—I have a headache.',
          options: ['a', 'an', 'the'],
          answer: 'C',
          explanation: 'What\'s the matter with...?是固定句型，用the。'
        },
        {
          id: 2,
          type: 'choice',
          score: 1,
          question: 'He has been in Xiamen ________ three years.',
          options: ['for', 'since', 'in'],
          answer: 'A',
          explanation: 'three years是时间段，用for。since接时间点。'
        },
        {
          id: 3,
          type: 'choice',
          score: 1,
          question: 'The story is ________ interesting ________ everyone likes it.',
          options: ['too; to', 'so; that', 'enough; to'],
          answer: 'B',
          explanation: 'so...that...如此...以至于...，所有人都喜欢。too...to太...而不能。'
        },
        {
          id: 4,
          type: 'choice',
          score: 1,
          question: '—________ have you been learning English?\n—For about six years.',
          options: ['How long', 'How often', 'How soon'],
          answer: 'A',
          explanation: '回答"For about six years"是时间段，用How long提问多长时间。'
        },
        {
          id: 5,
          type: 'choice',
          score: 1,
          question: 'I will call you as soon as I ________ in Xiamen.',
          options: ['arrive', 'will arrive', 'arrived'],
          answer: 'A',
          explanation: 'as soon as引导时间状语从句，主将从现，从句用一般现在时arrive。'
        },
        {
          id: 6,
          type: 'choice',
          score: 1,
          question: 'The teacher made us ________ our homework after class.',
          options: ['finish', 'to finish', 'finishing'],
          answer: 'A',
          explanation: 'make sb. do sth.让某人做某事，用动词原形finish。'
        },
        {
          id: 7,
          type: 'choice',
          score: 1,
          question: '—I have never been to Gulangyu Island.\n—________.',
          options: ['Neither have I', 'So have I', 'Me too'],
          answer: 'A',
          explanation: '前句是否定句never，用Neither have I表示"我也没去过"。'
        },
        {
          id: 8,
          type: 'choice',
          score: 1,
          question: 'The population of Xiamen ________ over 5 million.',
          options: ['is', 'are', 'has'],
          answer: 'A',
          explanation: 'population作主语时用单数is。'
        },
        {
          id: 9,
          type: 'choice',
          score: 1,
          question: 'He spent two hours ________ the book yesterday.',
          options: ['read', 'reading', 'to read'],
          answer: 'B',
          explanation: 'spend time doing sth.花时间做某事，用reading。'
        },
        {
          id: 10,
          type: 'choice',
          score: 1,
          question: '—Could you please ________ the music? It\'s too loud.\n—Sorry, I\'ll turn it down.',
          options: ['turn up', 'turn down', 'turn on'],
          answer: 'B',
          explanation: '音乐太大了，要求关小，turn down调小。turn up调大，turn on打开。'
        },
      ]
    },
    {
      title: '二、完形填空',
      instruction: '阅读短文，从A、B、C中选出最佳答案。',
      passage: 'Mr. Smith works in a hospital. His medical skills are good. People like to go to see him, so he is often 11 in the daytime. He always hopes to have a good 12 at home. He lives in a building outside the city. Most of his neighbors are 13 in their houses at night.\n\n14 Mike is not one of them. He moved there about a month ago. The young man lives just upstairs. He likes 15 and bought a piano last week. He works in his study in the daytime and always plays the piano after dinner. However, he can\'t play it very well and makes a lot of noise. Mr. Smith can\'t fall asleep. It makes him 16 . He often goes upstairs and tells Mike about it but the young man soon 17 about it.\n\nOne day Mike was ill. He had to go to the 18 . Mr. Smith looked him over and said, "If you stop playing the piano at night, you\'ll soon be all right." When the young man left, a nurse asked, "Does playing the piano have anything to do with his recovery?" "Yes," said Mr. Smith. "He\'s one of my neighbors!"',
      questions: [
        {
          id: 11,
          type: 'choice',
          score: 1.5,
          question: 'so he is often ________ in the daytime.',
          options: ['busy', 'free', 'happy'],
          answer: 'A',
          explanation: '人们喜欢找他看病，所以白天很忙，busy忙碌的。'
        },
        {
          id: 12,
          type: 'choice',
          score: 1.5,
          question: 'He always hopes to have a good ________ at home.',
          options: ['meal', 'sleep', 'hobby'],
          answer: 'B',
          explanation: '白天忙，希望在家好好睡一觉，sleep睡眠。'
        },
        {
          id: 13,
          type: 'choice',
          score: 1.5,
          question: 'Most of his neighbors are ________ in their houses at night.',
          options: ['quiet', 'lazy', 'shy'],
          answer: 'A',
          explanation: '邻居们晚上很安静，quiet安静的，与Mike形成对比。'
        },
        {
          id: 14,
          type: 'choice',
          score: 1.5,
          question: '________ Mike is not one of them.',
          options: ['And', 'So', 'But'],
          answer: 'C',
          explanation: '转折，但Mike不是这样，But但是。'
        },
        {
          id: 15,
          type: 'choice',
          score: 1.5,
          question: 'He likes ________ and bought a piano last week.',
          options: ['sports', 'music', 'history'],
          answer: 'B',
          explanation: '买了钢琴说明喜欢音乐，music音乐。'
        },
        {
          id: 16,
          type: 'choice',
          score: 1.5,
          question: 'It makes him ________.',
          options: ['happy', 'angry', 'excited'],
          answer: 'B',
          explanation: '睡不着觉让他生气，angry生气的。'
        },
        {
          id: 17,
          type: 'choice',
          score: 1.5,
          question: 'the young man soon ________ about it.',
          options: ['forgets', 'thinks', 'knows'],
          answer: 'A',
          explanation: '很快就忘了，forgets忘记。'
        },
        {
          id: 18,
          type: 'choice',
          score: 1.5,
          question: 'He had to go to the ________.',
          options: ['library', 'supermarket', 'hospital'],
          answer: 'C',
          explanation: '生病了去医院，Mr. Smith在医院工作，hospital医院。'
        },
      ]
    },
    {
      title: '三、阅读理解',
      instruction: '阅读短文，从A、B、C中选出最佳答案。',
      passage: 'Xiamen is a beautiful city in Fujian Province. It is famous for its clean air, blue sea, and friendly people. Every year, millions of tourists come to visit Xiamen.\n\nGulangyu Island is one of the most popular places in Xiamen. There are no cars or buses on the island, so it is very quiet. Visitors can walk around and enjoy the old buildings, many of which were built over 100 years ago. The island is also known as "Piano Island" because it has the highest number of pianos per person in China.\n\nAnother famous place is Xiamen University. It is one of the most beautiful universities in China. The campus is near the sea, and students can see the ocean from their classrooms. Many tourists come to take photos of the old buildings and beautiful gardens.\n\nXiamen is also a great place for food. Seafood is the most popular. You can find all kinds of fish, crabs, and shrimp in the restaurants. Shacha noodles (沙茶面) is a famous local dish that you must try.\n\nIf you want to relax, you can go to Huandao Road. It is a long road along the coast. You can ride a bike, walk, or just sit and enjoy the sea view. Many people say Xiamen is a city where you can slow down and enjoy life.',
      questions: [
        {
          id: 19,
          type: 'choice',
          score: 2,
          question: 'What is Gulangyu Island known as?',
          options: ['Food Island', 'Piano Island', 'Car Island'],
          answer: 'B',
          explanation: '原文"The island is also known as Piano Island"。'
        },
        {
          id: 20,
          type: 'choice',
          score: 2,
          question: 'Why is Gulangyu Island very quiet?',
          options: ['Because there are no people.', 'Because there are no cars or buses.', 'Because it is very small.'],
          answer: 'B',
          explanation: '原文"There are no cars or buses on the island, so it is very quiet."'
        },
        {
          id: 21,
          type: 'choice',
          score: 2,
          question: 'What can students see from their classrooms at Xiamen University?',
          options: ['The mountain', 'The ocean', 'The garden'],
          answer: 'B',
          explanation: '原文"students can see the ocean from their classrooms"。'
        },
        {
          id: 22,
          type: 'choice',
          score: 2,
          question: 'What is the famous local dish in Xiamen?',
          options: ['Seafood soup', 'Shacha noodles', 'Fried rice'],
          answer: 'B',
          explanation: '原文"Shacha noodles (沙茶面) is a famous local dish"。'
        },
        {
          id: 23,
          type: 'choice',
          score: 2,
          question: 'What can you do on Huandao Road?',
          options: ['Only walk', 'Ride a bike, walk, or sit', 'Only drive'],
          answer: 'B',
          explanation: '原文"You can ride a bike, walk, or just sit and enjoy the sea view."'
        },
      ]
    },
  ]
},

];
