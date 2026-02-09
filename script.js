const questions = [
    { q: "1. 派对角落有人在偷偷哭泣，你会？", options: [
        { text: "假装没看到，留出独处空间", weight: { BitterMelon: 3, MintIceCream: 1 } },
        { text: "递张纸巾，陪着坐一会儿", weight: { SaltLemon: 3, MangoPomelo: 2 } },
        { text: "询问原因并尝试解决问题", weight: { CrispyPork: 3, TomYum: 2 } }
    ]},
    { q: "2. 你更希望别人如何评价你？", options: [
        { text: "深不可测、有故事的人", weight: { WhiskyChocolate: 3, OnionSoup: 3 } },
        { text: "靠谱、专业、逻辑极强", weight: { MintIceCream: 3, BitterMelon: 2 } },
        { text: "温暖、有趣、待着舒服", weight: { MangoPomelo: 3, SaltLemon: 2 } }
    ]},
    { q: "3. 去陌生城市生活，你第一反应是？", options: [
        { text: "兴奋，终于可以重塑身份", weight: { TomYum: 3, WhiskyChocolate: 2 } },
        { text: "警觉，花时间观察潜规则", weight: { OnionSoup: 3, BitterMelon: 2 } },
        { text: "笃定，有网有钱就能活", weight: { CrispyPork: 3, MintIceCream: 2 } }
    ]},
    { q: "4. 能力被当众质疑时，你会？", options: [
        { text: "瞬间被点燃，一定要辩赢", weight: { TomYum: 3, CrispyPork: 2 } },
        { text: "表面平静，内心拉黑对方", weight: { MintIceCream: 3, WhiskyChocolate: 2 } },
        { text: "虚心反思，若对方对则感激", weight: { FrozenPear: 3, MangoPomelo: 2 } }
    ]},
    { q: "5. 你的手机相册里占比最高的是？", options: [
        { text: "情绪、风景或自拍", weight: { TomYum: 3, MangoPomelo: 2 } },
        { text: "截图、备忘录、工作相关", weight: { MintIceCream: 3, SaltLemon: 2 } },
        { text: "很少拍照或氛围感废片", weight: { WhiskyChocolate: 3, OnionSoup: 2 } }
    ]},
    { q: "6. 你认为“虚伪”是成年礼吗？", options: [
        { text: "是社交润滑剂，避免尴尬", weight: { MangoPomelo: 3, SaltLemon: 2 } },
        { text: "不是，比起和谐更重真相", weight: { BitterMelon: 3, CrispyPork: 2 } },
        { text: "是防护服，保护内心纯真", weight: { OnionSoup: 3, FrozenPear: 2 } }
    ]},
    { q: "7. 拥有一整个下午的自由时间，你会？", options: [
        { text: "发呆或整理，享受留白", weight: { MintIceCream: 3, BitterMelon: 3 } },
        { text: "健身或探店，消耗生活", weight: { CrispyPork: 3, TomYum: 2 } },
        { text: "沉浸在虚拟世界的剧情里", weight: { OnionSoup: 3, GrilledDurian: 2 } }
    ]},
    { q: "8. 关于金钱，你的态度是？", options: [
        { text: "交换体验的筹码，赚了就花", weight: { TomYum: 3, CrispyPork: 2 } },
        { text: "对抗世界的底气，要有存款", weight: { OnionSoup: 3, SaltLemon: 2 } },
        { text: "自我实现的副产品，不在意", weight: { BitterMelon: 3, MintIceCream: 2 } }
    ]},
    { q: "9. 获得巨大成就时，你会？", options: [
        { text: "自己知道就好，默默庆祝", weight: { MintIceCream: 3, FrozenPear: 2 } },
        { text: "分享朋友圈，接受点赞", weight: { CrispyPork: 3, MangoPomelo: 2 } },
        { text: "只告诉懂背后艰辛的死党", weight: { GrilledDurian: 3, OnionSoup: 2 } }
    ]},
    { q: "10. 亲密关系中最害怕什么？", options: [
        { text: "被看穿所有脆弱，无处遁形", weight: { OnionSoup: 3, GrilledDurian: 3 } },
        { text: "对方跟不上步调，索然无味", weight: { WhiskyChocolate: 3, TomYum: 2 } },
        { text: "丧失独立空间，过度依赖", weight: { MintIceCream: 3, SaltLemon: 2 } }
    ]},
    { q: "11. 理想的秘密房间风格是？", options: [
        { text: "极简主义，大量留白", weight: { MintIceCream: 3, BitterMelon: 3 } },
        { text: "赛博朋克，霓虹与金属", weight: { TomYum: 3, CrispyPork: 2 } },
        { text: "复古书房，木质与泛黄", weight: { OnionSoup: 3, FrozenPear: 3 } }
    ]},
    { q: "12. 感到孤独时，你通常会？", options: [
        { text: "享受它，这是灵感来源", weight: { WhiskyChocolate: 3, MintIceCream: 2 } },
        { text: "厌恶它，感到被世界抛弃", weight: { MangoPomelo: 3, TomYum: 2 } },
        { text: "适应它，当成生活背景音", weight: { SaltLemon: 3, CrispyPork: 2 } }
    ]},
    { q: "13. 你如何看待“遗憾”？", options: [
        { text: "遗憾是美的，证明曾经闪耀", weight: { WhiskyChocolate: 3, TomYum: 2 } },
        { text: "遗憾是无能，当时应更努力", weight: { MintIceCream: 3, BitterMelon: 2 } },
        { text: "遗憾是常态，接受并往前走", weight: { FrozenPear: 3, MangoPomelo: 2 } }
    ]},
    { q: "14. 必须选一种生活方式：", options: [
        { text: "风口浪尖跳舞，波澜壮阔", weight: { TomYum: 3, WhiskyChocolate: 2 } },
        { text: "山间小径行走，平静安稳", weight: { SaltLemon: 3, MangoPomelo: 2 } },
        { text: "迷宫探险，不知下个拐角", weight: { OnionSoup: 3, GrilledDurian: 3 } }
    ]},
    { q: "15. 你觉得人生的本质是？", options: [
        { text: "一场寻找自我的修行", weight: { WhiskyChocolate: 3, MintIceCream: 2 } },
        { text: "一场及时行乐的盛宴", weight: { MangoPomelo: 3, CrispyPork: 3 } },
        { text: "一场注定失败仍挥剑的战斗", weight: { FrozenPear: 3, BitterMelon: 2 } }
    ]}
];

const personas = {
    MintIceCream: { name: "薄荷冰淇淋", icon: "🍦", label: "【清冷派隔离者】", desc: "在喧嚣中精准退后一步。你拥有一种礼貌的冷淡，宁愿在孤傲中保持清爽，也不愿在温热中变得粘腻。", soul: "柠檬海盐糖", enemy: "泰式冬阴功" },
    MangoPomelo: { name: "杨枝甘露", icon: "🍹", label: "【高阶全能兼容机】", desc: "极度聪明地收敛锋芒。你展现出的温柔其实是一种高阶统筹能力，像水一样适应容器，但过滤他人情绪时也会疲惫。", soul: "脆皮五花肉", enemy: "冰镇苦瓜" },
    BitterMelon: { name: "冰镇苦瓜", icon: "🥒", label: "【现实主义修行者】", desc: "享受冒犯他人的清醒。你不需要外界赞美证明价值，敢于撕掉虚伪客套，直面最苦涩的真相。", soul: "薄荷冰淇淋", enemy: "杨枝甘露" },
    OnionSoup: { name: "法式洋葱汤", icon: "🍲", label: "【厚甲包裹理想家】", desc: "用冷漠外壳守护纯真。典型的铠甲型人格，心防极厚，但一旦破开防御，内心滚烫如火。", soul: "冻梨", enemy: "威士忌生巧克力" },
    SaltLemon: { name: "柠檬海盐糖", icon: "🍬", label: "【边界感大师】", desc: "温柔但带刺。擅长点到为止，给出的善意带有清晰刻度，保护那个不被侵犯的自我。", soul: "杨枝甘露", enemy: "炙烤榴莲" },
    WhiskyChocolate: { name: "威士忌生巧克力", icon: "🍫", label: "【优雅掌控欲玩家】", desc: "危险与诱惑的平衡。优雅是面具，内在是叛逆和野心，擅长以柔克刚掌控局势。", soul: "泰式冬阴功", enemy: "柠檬海盐糖" },
    CrispyPork: { name: "脆皮五花肉", icon: "🥓", label: "【生命能量野蛮生长】", desc: "拒绝虚无，拥抱获得。拥有原始的坦荡，不屑于形而上的争论，追求最真实的反馈与快乐。", soul: "杨枝甘露", enemy: "冻梨" },
    GrilledDurian: { name: "炙烤榴莲", icon: "🍮", label: "【被偏见掩盖的绝对领域】", desc: "只为极少数人绽放。你是天生的筛选器，不屑平庸解读，内核是浓郁到化不开的深情。", soul: "法式洋葱汤", enemy: "薄荷冰淇淋" },
    FrozenPear: { name: "冻梨", icon: "🍐", label: "【黑化后的纯净主义】", desc: "历经寒冬后的重塑。冷硬外壳是对抗伤害的勋章，深处却藏着比谁都清甜的初心。", soul: "炙烤榴莲", enemy: "脆皮五花肉" },
    TomYum: { name: "泰式冬阴功", icon: "🥘", label: "【高频情绪骇客】", desc: "拒绝平庸与单一。灵魂里住着调色盘，追求极致的冲突与叠加，每一刻都在剧烈燃烧。", soul: "威士忌生巧克力", enemy: "冰镇苦瓜" }
};

let currentQuestion = 0;
let scores = { MintIceCream:0, MangoPomelo:0, BitterMelon:0, OnionSoup:0, SaltLemon:0, WhiskyChocolate:0, CrispyPork:0, GrilledDurian:0, FrozenPear:0, TomYum:0 };

document.getElementById('start-btn').onclick = () => {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
};

function showQuestion() {
    const q = questions[currentQuestion];
    const container = document.getElementById('options-container');
    const qText = document.getElementById('question-text');
    
    qText.style.opacity = '0';
    container.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('question-number').innerText = `${String(currentQuestion + 1).padStart(2, '0')} / ${questions.length}`;
        qText.innerText = q.q;
        container.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.innerText = opt.text;
            btn.onclick = () => selectOption(opt.weight);
            container.appendChild(btn);
        });
        qText.style.opacity = '1';
        container.style.opacity = '1';
    }, 200);

    document.getElementById('progress-inner').style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectOption(weight) {
    for (let key in weight) { scores[key] += weight[key]; }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    const quiz = document.getElementById('quiz-screen');
    quiz.innerHTML = `
        <div class="fade-in" style="text-align:center; padding: 40px 0;">
            <div class="emoji-avatar" style="background:none; border:none; font-size:60px;">🧬</div>
            <h2>正在解析数码基因...</h2>
            <div class="progress-bar"><div id="progress-inner" style="width:100%; transition: width 2s linear;"></div></div>
        </div>
    `;
    setTimeout(showResult, 2000);
}

function showResult() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    let winner = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    const res = personas[winner];
    
    document.querySelector('.result-card').innerHTML = `
        <div class="emoji-avatar">${res.icon}</div>
        <p style="color:#888; margin-bottom:5px;">${res.label}</p>
        <h1 style="margin:0 0 20px 0; font-size:2.2rem;">${res.name}</h1>
        <div style="text-align:left; background:#f9f9f9; padding:15px; border-radius:12px; line-height:1.6;">
            ${res.desc}
        </div>
        <div style="margin-top:20px; display:flex; justify-content:space-between; font-size:0.9rem;">
            <span>🤝 伴侣：<b>${res.soul}</b></span>
            <span>🚫 避雷：<b>${res.enemy}</b></span>
        </div>
    `;
}
