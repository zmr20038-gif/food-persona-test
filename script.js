function showQuestion() {
    const q = questions[currentQuestion];
    const container = document.getElementById('options-container');
    const qText = document.getElementById('question-text');
    const qNum = document.getElementById('question-number');

    // 1. 先让容器变透明，准备切换
    container.style.opacity = '0';
    qText.style.opacity = '0';

    setTimeout(() => {
        // 2. 更新内容
        qNum.innerText = `${String(currentQuestion + 1).padStart(2, '0')} / ${questions.length}`;
        qText.innerText = q.q;
        container.innerHTML = '';
        
        q.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            // 增加一点点延迟交错动画
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.innerText = opt.text;
            btn.onclick = () => selectOption(opt.weight);
            container.appendChild(btn);
        });

        // 3. 内容显示回来
        container.style.opacity = '1';
        qText.style.opacity = '1';
    }, 200);

    document.getElementById('progress-inner').style.width = `${((currentQuestion) / questions.length) * 100}%`;
}

function selectOption(weight) {
    // 加分逻辑
    for (let key in weight) { scores[key] += weight[key]; }
    
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // 4. 最后一题答完，进入“计算中”的过渡仪式
        showLoadingEffect();
    }
}

function showLoadingEffect() {
    const quizScreen = document.getElementById('quiz-screen');
    quizScreen.innerHTML = `
        <div class="screen fade-in">
            <div class="emoji-avatar" style="background:none; box-shadow:none; font-size:50px;">🔍</div>
            <p>正在同步你的数码灵魂...</p>
            <div class="progress-bar"><div id="progress-inner" style="width:100%"></div></div>
        </div>
    `;
    
    // 1.5秒后跳出最终结果
    setTimeout(showResult, 1500);
}
