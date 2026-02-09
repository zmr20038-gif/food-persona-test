document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { q: "1. 假如世界是一个大型程序，你认为你的底层代码最可能是？", options: [
            { text: "严丝合缝的逻辑循环", weight: { MintIceCream: 3, BitterMelon: 1 } },
            { text: "充满未知的随机生成器", weight: { TomYum: 3, WhiskyChocolate: 1 } },
            { text: "温暖治愈的用户交互界面", weight: { MangoPomelo: 3, SaltLemon: 1 } },
            { text: "坚不可摧的数据防火墙", weight: { OnionSoup: 3, FrozenPear: 1 } }
        ]},
        { q: "2. 如果你要给自己的灵魂选择一种厚度，你会选？", options: [
            { text: "薄如蝉翼，极尽透明", weight: { MintIceCream: 3, FrozenPear: 1 } },
            { text: "层层叠叠，深不见底", weight: { OnionSoup: 3, WhiskyChocolate: 1 } },
            { text: "像海绵一样，吸收万物", weight: { MangoPomelo: 3, CrispyPork: 1 } },
            { text: "像岩石一样，质地坚硬", weight: { BitterMelon: 3, CrispyPork: 1 } }
        ]},
        { q: "3. 面对毫无预兆的离别，你的第一反应是？", options: [
            { text: "理性分析离开的原因", weight: { BitterMelon: 3, MintIceCream: 2 } },
            { text: "在深夜里剧烈燃烧情绪", weight: { TomYum: 3, GrilledDurian: 1 } },
            { text: "礼貌告别，转身拉黑", weight: { SaltLemon: 3, WhiskyChocolate: 1 } },
            { text: "默默在心里留一个位置", weight: { OnionSoup: 3, FrozenPear: 2 } }
        ]},
        { q: "4. 你最希望拥有哪种社交“超能力”？", options: [
            { text: "瞬间看穿谎言的真相", weight: { BitterMelon: 3, WhiskyChocolate: 1 } },
            { text: "永远不让场面冷下的能力", weight: { MangoPomelo: 3, CrispyPork: 1 } },
            { text: "随时随地消失的隐身术", weight: { MintIceCream: 3, SaltLemon: 1 } },
            { text: "让所有人听从你的说服力", weight: { WhiskyChocolate: 3, TomYum: 1 } }
        ]},
        { q: "5. 深夜独处时，你最常感到的状态是？", options: [
            { text: "清冷的自由感", weight: { MintIceCream: 3, BitterMelon: 1 } },
            { text: "被世界遗忘的微小恐惧", weight: { OnionSoup: 3, FrozenPear: 1 } },
            { text: "复盘当天的社交得失", weight: { SaltLemon: 3, MangoPomelo: 1 } },
            { text: "对未来的狂热野心", weight: { WhiskyChocolate: 3, CrispyPork: 1 } }
        ]},
        { q: "6. 如果你有一张可以修改过去的“入场券”，你会？", options: [
            { text: "不需要，遗憾也是作品", weight: { WhiskyChocolate: 3, TomYum: 1 } },
            { text: "修正那个最尴尬的瞬间", weight: { SaltLemon: 3, MangoPomelo: 1 } },
            { text: "彻底抹除某段关系", weight: { BitterMelon: 3, MintIceCream: 1 } },
            { text: "把这张券留给更需要的人", weight: { FrozenPear: 3, OnionSoup: 1 } }
        ]},
        { q: "7. 在一个团队中，你通常扮演的角色是？", options: [
            { text: "冷静的纠错机", weight: { MintIceCream: 3, BitterMelon: 2 } },
            { text: "热血的发动机", weight: { CrispyPork: 3, TomYum: 2 } },
            { text: "温和的粘合剂", weight: { MangoPomelo: 3, SaltLemon: 1 } },
            { text: "深藏不露的幕后推手", weight: { WhiskyChocolate: 3, OnionSoup: 1 } }
        ]},
        { q: "8. 面对别人的误解，你的态度是？", options: [
            { text: "你谁啊？我不在乎", weight: { BitterMelon: 3, GrilledDurian: 1 } },
            { text: "详尽地解释直到说通", weight: { MangoPomelo: 3, CrispyPork: 1 } },
            { text: "微笑着点头，从此避而远之", weight: { SaltLemon: 3, MintIceCream: 1 } },
            { text: "内心受伤但表面装酷", weight: { OnionSoup: 3, FrozenPear: 1 } }
        ]},
        { q: "9. 假如生活是一场电影，你认为它的基调应该是？", options: [
            { text: "极简黑白的文艺片", weight: { MintIceCream: 3, BitterMelon: 1 } },
            { text: "色彩斑斓的邪典片", weight: { TomYum: 3, WhiskyChocolate: 1 } },
            { text: "烟火气浓郁的纪录片", weight: { CrispyPork: 3, MangoPomelo: 1 } },
            { text: "反转不断的悬疑片", weight: { WhiskyChocolate: 3, OnionSoup: 1 } }
        ]},
        { q: "10. 你最讨厌什么样的人？", options: [
            { text: "过度热情且没有边界感的人", weight: { MintIceCream: 3, SaltLemon: 2 } },
            { text: "虚伪且满口谎言的人", weight: { BitterMelon: 3, CrispyPork: 1 } },
            { text: "死板、毫无幽默感的人", weight: { TomYum: 3, WhiskyChocolate: 1 } },
            { text: "自私、不懂体贴的人", weight: { FrozenPear: 3, MangoPomelo: 1 } }
        ]},
        { q: "11. 如果明天就是世界末日，你今天会？", options: [
            { text: "找个安静的地方看日落", weight: { MintIceCream: 3, FrozenPear: 1 } },
            { text: "疯狂消费，体验极致快乐", weight: { TomYum: 3, CrispyPork: 2 } },
            { text: "和最爱的人抱在一起", weight: { OnionSoup: 3, GrilledDurian: 1 } },
            { text: "像往常一样生活，保持体面", weight: { SaltLemon: 3, WhiskyChocolate: 1 } }
        ]},
        { q: "12. 你认为维持一段关系的秘诀是？", options: [
            { text: "保持神秘感和个人空间", weight: { WhiskyChocolate: 3, MintIceCream: 2 } },
            { text: "毫无保留的真诚与分享", weight: { OnionSoup: 3, GrilledDurian: 2 } },
            { text: "共同的兴趣和玩乐体验", weight: { CrispyPork: 3, TomYum: 1 } },
            { text: "体面的客套与互相理解", weight: { MangoPomelo: 3, SaltLemon: 1 } }
        ]},
        { q: "13. 面对失败，你的内心独白通常是？", options: [
            { text: "果然不出所料", weight: { BitterMelon: 3, MintIceCream: 1 } },
            { text: "下一次，我会赢回来", weight: { CrispyPork: 3, WhiskyChocolate: 2 } },
            { text: "这也是一种特别的体验", weight: { TomYum: 3, FrozenPear: 1 } },
            { text: "是不是我哪里做得不够好？", weight: { OnionSoup: 3, MangoPomelo: 1 } }
        ]},
        { q: "14. 如果你是一种季节，你觉得自己是？", options: [
            { text: "凛冽但干净的清冬", weight: { MintIceCream: 3, FrozenPear: 2 } },
            { text: "热烈甚至灼人的盛夏", weight: { TomYum: 3, CrispyPork: 2 } },
            { text: "温柔但多雾的早春", weight: { MangoPomelo: 3, OnionSoup: 1 } },
            { text: "理智且略带萧瑟的深秋", weight: { BitterMelon: 3, SaltLemon: 1 } }
        ]},
        { q: "15. 此时此刻，你最想对自己说的一句话是？", options: [
            { text: "去他的，做自己就好", weight: { BitterMelon: 3, TomYum: 1 } },
            { text: "保持理性，继续前进", weight: { MintIceCream: 3, WhiskyChocolate: 1 } },
            { text: "谢谢你，辛苦了", weight: { FrozenPear: 3, OnionSoup: 1 } },
            { text: "世界很大，去试试看", weight: { MangoPomelo: 3, CrispyPork: 1 } }
        ]}
    ];

    const personas = {
        MintIceCream: { name: "薄荷冰淇淋", icon: "🍦", desc: "【高冷防御者】你是绝对理性的化身，习惯与混乱的人类情感保持安全距离。你讨厌粘腻的依赖，对你而言，清醒是最高级的自由。", soul: "柠檬海盐糖 🍬", enemy: "泰式冬阴功 🥘" },
        MangoPomelo: { name: "杨枝甘露", icon: "🍹", desc: "【高阶兼容者】你拥有极高的社交润滑度，能完美适配任何环境。你展现的温柔其实是极强的统筹力，只是深夜里的疲惫只有你自己知道。", soul: "脆皮五花肉 🥓", enemy: "冰镇苦瓜 🥒" },
        BitterMelon: { name: "冰镇苦瓜", icon: "🥒", desc: "【人间清醒家】你不屑于毫无意义的伪善，总能一眼刺穿谎言。你的毒舌其实是某种程度上的极致诚实，不需要外界赞美来证明价值。", soul: "薄荷冰淇淋 🍦", enemy: "杨枝甘露 🍹" },
        OnionSoup: { name: "法式洋葱汤", icon: "🍲", desc: "【厚甲理想家】你的心防极重，那是你保护纯真内核的堡垒。一旦有人穿透你的层层试探，会发现你内心藏着滚烫到沸腾的热爱。", soul: "冻梨 🍐", enemy: "威士忌生巧克力 🍫" },
        SaltLemon: { name: "柠檬海盐糖", icon: "🍬", desc: "【边界感大师】你非常擅长拿捏人际关系的刻度。你给出的好感是有清晰条件的，如果你感到不被尊重，你会以最体面的方式瞬间消失。", soul: "杨枝甘露 🍹", enemy: "炙烤榴莲 🍮" },
        WhiskyChocolate: { name: "威士忌生巧克力", icon: "🍫", desc: "【优雅掌控者】你习惯掌控局势，却又不露声色。成熟的外壳下藏着不安分的野心，喜欢挑战那些带有危险气息的高难度事物。", soul: "泰式冬阴功 🥘", enemy: "柠檬海盐糖 🍬" },
        CrispyPork: { name: "脆皮五花肉", icon: "🥓", desc: "【生命能量野蛮生长】你讨厌形而上的空谈，更愿意脚踏实地感知快乐。你的生命力极其旺盛，是天生的行动派，从不掩饰对成功的渴望。", soul: "杨枝甘露 🍹", enemy: "冻梨 🍐" },
        GrilledDurian: { name: "炙烤榴莲", icon: "🍮", desc: "【被误解的绝对领域】懂你的人视你如宝，不懂你的人避之不及。你从不迎合大众审美，你的爱极其浓郁且排他，内核是深情。", soul: "法式洋葱汤 🍲", enemy: "薄荷冰淇淋 🍦" },
        FrozenPear: { name: "冻梨", icon: "🍐", desc: "【重塑主义者】你曾经历过现实的寒冬，这让你变得坚韧且通透。外表的冰冷只是为了过滤掉那些不真诚的人，内心依然清甜如初。", soul: "炙烤榴莲 🍮", enemy: "脆皮五花肉 🥓" },
        TomYum: { name: "泰式冬阴功", icon: "🥘", desc: "【高频情绪骇客】你的生活不需要平淡，你追求极致的冲突与叠加。你敢爱敢恨，生命每一刻都在剧烈燃烧，拒绝所有单一的颜色。", soul: "威士忌生巧克力 🍫", enemy: "冰镇苦瓜 🥒" }
    };

    let currentQuestion = 0;
    let scores = { MintIceCream:0, MangoPomelo:0, BitterMelon:0, OnionSoup:0, SaltLemon:0, WhiskyChocolate:0, CrispyPork:0, GrilledDurian:0, FrozenPear:0, TomYum:0 };

    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', () => {
        document.getElementById('start-screen').className = 'hidden';
        document.getElementById('quiz-screen').className = 'active';
        showQuestion();
    });

    function showQuestion() {
        const qData = questions[currentQuestion];
        document.getElementById('question-text').innerText = qData.q;
        const container = document.getElementById('options-container');
        container.innerHTML = '';
        document.getElementById('progress-bar').style.width = ((currentQuestion) / questions.length * 100) + '%';

        qData.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt.text;
            btn.className = 'option-btn';
            btn.onclick = () => {
                for (let key in opt.weight) { scores[key] += (opt.weight[key] || 0); }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            };
            container.appendChild(btn);
        });
    }

    function showResult() {
        document.getElementById('quiz-screen').className = 'hidden';
        document.getElementById('result-screen').className = 'active';
        let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const res = personas[winner];
        
        document.getElementById('result-emoji').innerText = res.icon;
        document.getElementById('result-name').innerText = "你的灵魂镜像：" + res.name;
        document.getElementById('result-desc').innerText = res.desc;
        document.getElementById('soulmate').innerText = res.soul;
        document.getElementById('enemy').innerText = res.enemy;
    }
});
