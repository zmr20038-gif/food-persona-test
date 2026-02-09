document.addEventListener('DOMContentLoaded', () => {
    // 1. 完整 15 题数据
    const questions = [
        { q: "1. 派对角落有人在偷偷哭泣，你会？", options: [
            { text: "假装没看到，留出空间", weight: { BitterMelon: 3, MintIceCream: 1 } },
            { text: "递张纸巾，陪着坐一会儿", weight: { SaltLemon: 3, MangoPomelo: 2 } },
            { text: "询问原因并尝试解决", weight: { CrispyPork: 3, TomYum: 2 } }
        ]},
        { q: "2. 你更希望别人如何评价你？", options: [
            { text: "深不可测、有故事", weight: { WhiskyChocolate: 3, OnionSoup: 3 } },
            { text: "靠谱、专业、逻辑强", weight: { MintIceCream: 3, BitterMelon: 2 } },
            { text: "温暖、有趣、待着舒服", weight: { MangoPomelo: 3, SaltLemon: 2 } }
        ]},
        { q: "3. 去陌生城市生活，你第一反应？", options: [
            { text: "兴奋，终于可以重塑身份", weight: { TomYum: 3, WhiskyChocolate: 2 } },
            { text: "警觉，观察潜规则", weight: { OnionSoup: 3, BitterMelon: 2 } },
            { text: "笃定，有网有钱就能活", weight: { CrispyPork: 3, MintIceCream: 2 } }
        ]},
        { q: "4. 能力被质疑时，你会？", options: [
            { text: "瞬间被点燃，一定要辩赢", weight: { TomYum: 3, CrispyPork: 2 } },
            { text: "表面平静，内心拉黑", weight: { MintIceCream: 3, WhiskyChocolate: 2 } },
            { text: "虚心反思，若对方对则感激", weight: { FrozenPear: 3, MangoPomelo: 2 } }
        ]},
        { q: "5. 手机相册里占比最高的是？", options: [
            { text: "情绪、风景或自拍", weight: { TomYum: 3, MangoPomelo: 2 } },
            { text: "截图、备忘录、工作相关", weight: { MintIceCream: 3, SaltLemon: 2 } },
            { text: "很少拍照或氛围感废片", weight: { WhiskyChocolate: 3, OnionSoup: 2 } }
        ]},
        { q: "6. 你认为“虚伪”是成年礼吗？", options: [
            { text: "是社交润滑剂", weight: { MangoPomelo: 3, SaltLemon: 2 } },
            { text: "不是，比起和谐更重真相", weight: { BitterMelon: 3, CrispyPork: 2 } },
            { text: "是防护服，保护内心纯真", weight: { OnionSoup: 3, FrozenPear: 2 } }
        ]},
        { q: "7. 拥有一整个下午自由时间？", options: [
            { text: "发呆或整理，享受留白", weight: { MintIceCream: 3, BitterMelon: 3 } },
            { text: "健身或探店，消耗生活", weight: { CrispyPork: 3, TomYum: 2 } },
            { text: "沉浸在虚拟世界的剧情里", weight: { OnionSoup: 3, FrozenPear: 2 } }
        ]},
        { q: "8. 关于金钱，你的态度是？", options: [
            { text: "交换体验的筹码，赚了就花", weight: { TomYum: 3, CrispyPork: 2 } },
            { text: "对抗世界的底气，要有存款", weight: { OnionSoup: 3, SaltLemon: 2 } },
            { text: "自我实现的副产品", weight: { BitterMelon: 3, MintIceCream: 2 } }
        ]},
        { q: "9. 获得巨大成就时？", options: [
            { text: "自己知道就好，默默庆祝", weight: { MintIceCream: 3, FrozenPear: 2 } },
            { text: "分享朋友圈，接受点赞", weight: { CrispyPork: 3, MangoPomelo: 2 } },
            { text: "只告诉懂背后艰辛的死党", weight: { GrilledDurian: 3, OnionSoup: 2 } }
        ]},
        { q: "10. 亲密关系中最害怕什么？", options: [
            { text: "被看穿所有脆弱", weight: { OnionSoup: 3, GrilledDurian: 3 } },
            { text: "对方跟不上步调，索然无味", weight: { WhiskyChocolate: 3, TomYum: 2 } },
            { text: "丧失独立空间，过度依赖", weight: { MintIceCream: 3, SaltLemon: 2 } }
        ]},
        { q: "11. 理想的秘密房间风格？", options: [
            { text: "极简主义，大量留白", weight: { MintIceCream: 3, BitterMelon: 3 } },
            { text: "赛博朋克，霓虹与金属", weight: { TomYum: 3, CrispyPork: 2 } },
            { text: "复古书房，木质与泛黄", weight: { OnionSoup: 3, FrozenPear: 3 } }
        ]},
        { q: "12. 感到孤独时？", options: [
            { text: "享受它，灵感来源", weight: { WhiskyChocolate: 3, MintIceCream: 2 } },
            { text: "厌恶它，感到被抛弃", weight: { MangoPomelo: 3, TomYum: 2 } },
            { text: "适应它，当成背景音", weight: { SaltLemon: 3, CrispyPork: 2 } }
        ]},
        { q: "13. 你如何看待“遗憾”？", options: [
            { text: "遗憾是美的，曾经闪耀", weight: { WhiskyChocolate: 3, TomYum: 2 } },
            { text: "遗憾是无能，当时应更努力", weight: { MintIceCream: 3, BitterMelon: 2 } },
            { text: "遗憾是常态，接受并往前走", weight: { FrozenPear: 3, MangoPomelo: 2 } }
        ]},
        { q: "14. 必须选一种生活方式：", options: [
            { text: "风口浪尖跳舞，波澜壮阔", weight: { TomYum: 3, WhiskyChocolate: 2 } },
            { text: "山间小径行走，平静安稳", weight: { SaltLemon: 3, MangoPomelo: 2 } },
            { text: "迷宫探险，不知下个拐角", weight: { OnionSoup: 3, GrilledDurian: 3 } }
        ]},
        { q: "15. 人生的本质是？", options: [
            { text: "一场寻找自我的修行", weight: { WhiskyChocolate: 3, MintIceCream: 2 } },
            { text: "一场及时行乐的盛宴", weight: { MangoPomelo: 3, CrispyPork: 3 } },
            { text: "一场注定失败仍挥剑的战斗", weight: { FrozenPear: 3, BitterMelon: 2 } }
        ]}
    ];

    const personas = {
        MintIceCream: { name: "薄荷冰淇淋 🍦", desc: "【清冷派隔离者】在喧嚣中精准退后一步。宁愿在孤傲中保持清爽，也不愿在温热中变得粘腻。" },
        MangoPomelo: { name: "杨枝甘露 🍹", desc: "【高阶全能兼容机】极度聪明地收敛锋芒。展现出的温柔其实是一种高阶统筹能力，像水一样适应容器。" },
        BitterMelon: { name: "冰镇苦瓜 🥒", desc: "【现实主义修行者】享受冒犯他人的清醒。不需要外界赞美证明价值，敢于直面最苦涩的真相。" },
        OnionSoup: { name: "法式洋葱汤 🍲", desc: "【厚甲包裹理想家】用心防外壳守护纯真。一旦破开防御，内心滚烫如火。" },
        SaltLemon: { name: "柠檬海盐糖 🍬", desc: "【边界感大师】温柔但带刺。擅长点到为止，给出的善意带有清晰刻度。" },
        WhiskyChocolate: { name: "威士忌生巧克力 🍫", desc: "【优雅掌控欲玩家】危险与诱惑的平衡。优雅是面具，内在是叛逆和野心。" },
        CrispyPork: { name: "脆皮五花肉 🥓", desc: "【生命能量野蛮生长】拒绝虚无，拥抱获得。拥有原始的坦荡，不屑于形而上的争论。" },
        GrilledDurian: { name: "炙烤榴莲 🍮", desc: "【被偏见掩盖的绝对领域】只为极少数人绽放。内核是浓郁到化不开的深情。" },
        FrozenPear: { name: "冻梨 🍐", desc: "【黑化后的纯净主义】历经寒冬后的重塑。冷硬外壳是对抗伤害的勋章，深处藏着清甜初心。" },
        TomYum: { name: "泰式冬阴功 🥘", desc: "【高频情绪骇客】追求极致的冲突与叠加。拒绝平庸，灵魂里住着剧烈燃烧的调色盘。" }
    };

    let currentQuestion = 0;
    let scores = { MintIceCream:0, MangoPomelo:0, BitterMelon:0, OnionSoup:0, SaltLemon:0, WhiskyChocolate:0, CrispyPork:0, GrilledDurian:0, FrozenPear:0, TomYum:0 };

    // 2. 绑定开始按钮
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
        
        // 更新进度条
        const progress = ((currentQuestion) / questions.length) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';

        qData.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.innerText = opt.text;
            btn.className = 'option-btn';
            btn.onclick = () => {
                for (let key in opt.weight) { scores[key] += opt.weight[key]; }
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
        const result = personas[winner];
        
        document.getElementById('result-name').innerText = "你竟然是..." + result.name;
        document.getElementById('result-desc').innerText = result.desc;
    }
});
