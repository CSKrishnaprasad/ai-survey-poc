const questions = [
    {
        id: 'intro',
        type: 'intro',
        headline: "Think You Know Your Car?",
        subtext: "Just 20 Minutes a Day | Your Answers Will Tell the Truth",
        buttonText: "Reveal Your Driver Type!",
        image: "assets/hero.png"
    },
    {
        id: 'q1',
        type: 'choice',
        question: "When you drive on muddy or dirty roads and your car’s underbody... how soon do you usually wash your car?",
        image: "assets/q1.png",
        options: [
            { label: "Immediately after the drive", value: "immediate" },
            { label: "Next day", value: "next_day" },
            { label: "Wait until the weekend", value: "weekend" },
            { label: "Rarely wash underbody", value: "rarely" }
        ]
    },
    {
        id: 'q2',
        type: 'choice',
        question: "When was the last time you checked your tire pressure with a proper gauge...?",
        image: "assets/q2.png",
        options: [
            { label: "Within the last week", value: "week" },
            { label: "Last month", value: "month" },
            { label: "Check when it feels different", value: "feel" },
            { label: "Never checked myself", value: "never" }
        ]
    },
    {
        id: 'q3',
        type: 'choice',
        question: "How does your car feel when you drive over small potholes or speed breakers?",
        image: "assets/q3.png",
        options: [
            { label: "Smooth and stable", value: "smooth" },
            { label: "Slightly bouncy", value: "bouncy" },
            { label: "Too stiff or harsh", value: "stiff" },
            { label: "Odd noises or rattles", value: "noise" }
        ]
    },
    {
        id: 'q4',
        type: 'choice',
        question: "After a long highway drive, how often do you inspect your car’s brakes or tires...?",
        image: "assets/q4.png",
        options: [
            { label: "Always — I do a quick inspection", value: "always" },
            { label: "Only if I feel a difference", value: "feel" },
            { label: "Rarely", value: "rarely" },
            { label: "Never — assume it's fine", value: "never" }
        ]
    },
    {
        id: 'q5',
        type: 'choice',
        question: "When was the last time your wheel alignment and balancing were done?",
        image: "assets/q5.png",
        options: [
            { label: "Within the last 3 months", value: "3m" },
            { label: "3–6 months ago", value: "6m" },
            { label: "I don’t remember", value: "forgot" },
            { label: "Never done it since purchase", value: "never" }
        ]
    },
    {
        id: 'q6',
        type: 'choice',
        question: "When you wash your car, do you or your detailer clean inside the wheel arches and suspension area?",
        image: "assets/q6.png",
        options: [
            { label: "Yes, always", value: "always" },
            { label: "Sometimes", value: "sometimes" },
            { label: "Rarely", value: "rarely" },
            { label: "I didn’t know that was needed", value: "unknown" }
        ]
    },
    {
        id: 'q7',
        type: 'choice',
        question: "Do you feel your headlights are as bright and clear as when the car was new?",
        image: "assets/q7.png",
        options: [
            { label: "Yes, perfectly clear", value: "clear" },
            { label: "Slightly dull but manageable", value: "dull" },
            { label: "Quite dim", value: "dim" },
            { label: "Not sure", value: "unsure" }
        ]
    },
    {
        id: 'q8',
        type: 'choice',
        question: "How often do you check or replace your car’s air filter or cabin filter?",
        image: "assets/q8.png",
        options: [
            { label: "Every service", value: "service" },
            { label: "Once or twice a year", value: "yearly" },
            { label: "Only when mileage drops/AC smells", value: "reactive" },
            { label: "Not sure what it is", value: "unsure" }
        ]
    },
    {
        id: 'q9',
        type: 'choice',
        question: "If your steering feels slightly heavier or not as smooth as before...",
        image: "assets/q9.png",
        options: [
            { label: "Immediately get it checked", value: "immediate" },
            { label: "Wait to see", value: "wait" },
            { label: "Ignore unless hard to turn", value: "ignore" },
            { label: "Thought that’s normal wear", value: "normal" }
        ]
    },
    {
        id: 'q10',
        type: 'choice',
        question: "When you park after a long drive, do you ever look under your car...?",
        image: "assets/q10.png",
        options: [
            { label: "Always — it’s a habit", value: "always" },
            { label: "Sometimes", value: "sometimes" },
            { label: "Rarely", value: "rarely" },
            { label: "Never", value: "never" }
        ]
    },
    {
        id: 'i2',
        type: 'interstitial',
        question: "Did you know? If you park in extreme sub-zero climates, your fuel can actually freeze or gel into 'ice'!",
        image: "assets/idea.png",
        buttonText: "Next"
    },
    {
        id: 'q11',
        type: 'choice',
        question: "What best describes your current situation?",
        image: "assets/q11.png",
        options: [
            { label: "Fine overall but could be better", value: "fine" },
            { label: "Noticing issues (rough ride)", value: "issues" },
            { label: "Just bought/want to upgrade", value: "new" },
            { label: "Owned for years/time to refresh", value: "refresh" }
        ]
    },
    {
        id: 'q12',
        type: 'choice',
        question: "What’s the main outcome you’d like to achieve with your car upgrades?",
        image: "assets/q12.png",
        options: [
            { label: "More stability, comfort, and control while driving", value: "comfort" },
            { label: "Better looks, design, and road presence", value: "looks" },
            { label: "More power, sound, and driving excitement", value: "performance" },
            { label: "Improved off-road performance and durability", value: "offroad" },
            { label: "Safer and more reliable driving experience", value: "safety" },
            { label: "A mix of everything — I want a complete upgrade experience", value: "mix" }
        ]
    },
    {
        id: 'q13',
        type: 'choice',
        question: "What have you tried in the past that didn’t work as well as expected?",
        image: "assets/q13.png",
        options: [
            { label: "Cheaper aftermarket products", value: "cheap" },
            { label: "Local garage (inconsistent)", value: "garage" },
            { label: "YouTube/DIY", value: "diy" },
            { label: "Advice from friends", value: "friends" },
            { label: "Haven't tried much yet", value: "none" }
        ]
    },
    {
        id: 'q14',
        type: 'choice',
        question: "Which type of solution do you believe will suit you best?",
        image: "assets/q14.png",
        options: [
            { label: "Comfort (suspension, seats)", value: "comfort" },
            { label: "Performance (power, handling)", value: "performance" },
            { label: "Looks (body kits)", value: "looks" },
            { label: "Off-road", value: "offroad" },
            { label: "Safety (brakes, tires)", value: "safety" }
        ]
    },
    {
        id: 'final',
        type: 'text',
        question: "Anything else you think we should know...",
        image: "assets/final.png",
        placeholder: "Tell us about your specific car model or any other details...",
        buttonText: "Finalize Report",
        required: true
    }
];

let currentStep = 0;
let answers = {};
let isTransitioning = false;
const slideContainer = document.getElementById('slideContainer');
const progressBar = document.getElementById('progressBar');

function init() {
    renderQuestion();
    setupGlobalShortcuts();
}

function updateProgress() {
    const progress = (currentStep / (questions.length - 1)) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextStep() {
    if (isTransitioning) return;
    isTransitioning = true;

    const currentSlide = slideContainer.firstElementChild;
    if (currentSlide) {
        currentSlide.classList.remove('fade-in', 'fade-in-reverse');
        currentSlide.classList.add('fade-out');
    }

    setTimeout(() => {
        currentStep++;
        if (currentStep < questions.length) {
            renderQuestion('forward');
        } else {
            submitSurvey();
        }
        isTransitioning = false;
    }, 400);
}

function prevStep() {
    if (currentStep === 0 || isTransitioning) return;
    isTransitioning = true;

    const currentSlide = slideContainer.firstElementChild;
    if (currentSlide) {
        currentSlide.classList.remove('fade-in', 'fade-in-reverse');
        currentSlide.classList.add('fade-out');
    }

    setTimeout(() => {
        currentStep--;
        renderQuestion('backward');
        isTransitioning = false;
    }, 400);
}

function updateBackButton() {
    let backBtn = document.querySelector('.btn-back-arrow');

    if (currentStep > 0 && currentStep < questions.length) {
        if (!backBtn) {
            backBtn = document.createElement('button');
            backBtn.className = 'btn-back-arrow';
            backBtn.innerHTML = '←';
            backBtn.title = 'Go Back';
            backBtn.setAttribute('type', 'button');
            backBtn.addEventListener('click', prevStep);
            document.body.appendChild(backBtn);
        }
    } else {
        if (backBtn) {
            backBtn.remove();
        }
    }
}

function renderQuestion(direction = 'forward') {
    updateProgress();
    updateBackButton(); // Restored Back Button
    const q = questions[currentStep];

    slideContainer.innerHTML = '';

    // Create Slide Wrapper
    const slide = document.createElement('div');
    slide.className = direction === 'forward' ? 'slide fade-in' : 'slide fade-in-reverse';

    // Add Counter
    // Counter removed

    // Handle Slide Types
    if (q.type === 'intro') {
        renderIntroSlide(q, slide);
    } else if (q.type === 'interstitial') {
        renderInterstitialSlide(q, slide);
    } else if (q.type === 'choice') {
        renderChoiceSlide(q, slide);
    } else if (q.type === 'multi-choice') {
        renderMultiChoiceSlide(q, slide);
    } else if (q.type === 'text') {
        renderTextSlide(q, slide);
    }

    slideContainer.appendChild(slide);
}

function renderIntroSlide(q, container) {
    container.classList.add('landing-slide');
    container.innerHTML = `
        <img src="${q.image}" alt="Hero">
        <h1>${q.headline}</h1>
        <p>${q.subtext}</p>
        <div class="button-group">
            <button class="btn-primary" id="mainBtn">${q.buttonText}</button>
        </div>

    `;
    container.querySelector('#mainBtn').onclick = nextStep;
}

function renderInterstitialSlide(q, container) {
    container.classList.add('interstitial-slide');
    container.innerHTML = `
        <img src="${q.image}" alt="Break">
        <h2>${q.question}</h2>
        <div class="button-group">
            <button class="btn-primary" id="mainBtn">${q.buttonText}</button>
        </div>

    `;
    container.querySelector('#mainBtn').onclick = nextStep;
}

function renderChoiceSlide(q, container) {
    if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = "Question Image";
        img.className = "question-image";
        container.appendChild(img);
    }

    const title = document.createElement('h2');
    title.innerText = q.question;
    container.appendChild(title);

    if (q.subtext) {
        const sub = document.createElement('p');
        sub.innerText = q.subtext;
        container.appendChild(sub);
    }

    const grid = document.createElement('div');
    grid.className = 'options-grid';

    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        if (answers[q.id] === opt.value) card.classList.add('selected');

        // Add number hint
        card.innerHTML = `${opt.label}`;

        card.onclick = () => {
            selectOption(q, opt.value, card, grid);
        };
        grid.appendChild(card);
    });
    container.appendChild(grid);
}

function selectOption(q, value, card, grid) {
    Array.from(grid.children).forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    answers[q.id] = value;

    // Auto-next with slight delay for satisfaction
    setTimeout(nextStep, 500);
}

function renderMultiChoiceSlide(q, container) {
    if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = "Question Image";
        img.className = "question-image";
        container.appendChild(img);
    }

    const title = document.createElement('h2');
    title.innerText = q.question;
    container.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'options-grid multi-select';

    let selectedValues = answers[q.id] ? answers[q.id].split(', ') : [];

    q.options.forEach((opt, idx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        if (selectedValues.includes(opt.value)) card.classList.add('selected');

        card.innerHTML = `${opt.label}`;

        card.onclick = () => {
            const index = selectedValues.indexOf(opt.value);
            if (index > -1) {
                selectedValues.splice(index, 1);
                card.classList.remove('selected');
            } else if (selectedValues.length < q.maxSelect) {
                selectedValues.push(opt.value);
                card.classList.add('selected');
            }
            answers[q.id] = selectedValues.join(', ');
            answers[q.id] = selectedValues.join(', ');

            if (q.autoAdvance && selectedValues.length === q.maxSelect) {
                setTimeout(nextStep, 500);
            }
        };
        grid.appendChild(card);
    });

    container.appendChild(grid);

    if (!q.autoAdvance) {
        const group = document.createElement('div');
        group.className = 'button-group';
        group.innerHTML = `<button class="btn-primary" id="mainBtn">Continue</button>`;
        container.appendChild(group);

        group.querySelector('#mainBtn').onclick = nextStep;
    }

    /* Hint logic removed */
}

function renderTextSlide(q, container) {
    if (q.image) {
        const img = document.createElement('img');
        img.src = q.image;
        img.alt = "Question Image";
        img.className = "question-image";
        container.appendChild(img);
    }

    const title = document.createElement('h2');
    title.innerText = q.question;
    container.appendChild(title);

    const input = document.createElement('textarea');
    input.placeholder = q.placeholder;
    input.value = answers[q.id] || '';
    input.oninput = (e) => {
        answers[q.id] = e.target.value;
    };
    container.appendChild(input);

    const group = document.createElement('div');
    group.className = 'button-group';
    group.innerHTML = `<button class="btn-primary" id="mainBtn">${q.buttonText || 'Submit'}</button>`;
    container.appendChild(group);

    // Click handler with validation
    group.querySelector('#mainBtn').onclick = () => {
        if (q.required) {
            const val = answers[q.id] || '';
            if (val.trim().length < 2) {
                alert('Please provide your feedback to proceed.');
                return;
            }
        }
        submitSurvey();
    };

}

function setupGlobalShortcuts() {
    window.onkeydown = (e) => {
        // Number keys 1-9
        if (e.key >= '1' && e.key <= '9') {
            const grid = document.querySelector('.options-grid');
            if (grid) {
                const cards = grid.querySelectorAll('.option-card');
                const idx = parseInt(e.key) - 1;
                if (cards[idx]) cards[idx].click();
            }
        }

        // Enter key
        if (e.key === 'Enter') {
            const q = questions[currentStep];
            if (q.type === 'text') {
                if (e.ctrlKey) {
                    // Same validation for shortcut
                    if (q.required) {
                        const val = answers[q.id] || '';
                        if (val.trim().length < 2) {
                            alert('Please provide your feedback to proceed.');
                            return;
                        }
                    }
                    submitSurvey();
                }
            } else {
                const btn = document.getElementById('mainBtn');
                if (btn) btn.click();
            }
        }
    };
}

async function submitSurvey() {
    // Cleanup fixed elements
    const backBtn = document.querySelector('.btn-back-arrow');
    if (backBtn) backBtn.remove();

    document.body.classList.add('loading-state');
    progressBar.style.width = '100%';

    // --- NEON GAUGE GENERATOR ---
    // Generate Ticks (60 ticks for full circle)
    let ticksHTML = '';
    for (let i = 0; i <= 60; i++) {
        const angle = (i / 60) * 270 - 135; // Map to -135deg to +135deg range
        const isMajor = i % 5 === 0;
        const length = isMajor ? 18 : 8; // Longer major ticks

        // SVG math: center 170,170 (since w=340). r=150 approx.
        // Outer radius for ticks start
        const r1 = 155;
        const r2 = r1 - length;
        const rad = (angle - 90) * (Math.PI / 180); // SVG coordinates rotated -90

        // Correct Trigonometry
        const x1 = 170 + r1 * Math.cos(rad);
        const y1 = 170 + r1 * Math.sin(rad);
        const x2 = 170 + r2 * Math.cos(rad);
        const y2 = 170 + r2 * Math.sin(rad);

        ticksHTML += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="neon-tick ${isMajor ? 'major' : 'minor'}" />`;
    }

    slideContainer.innerHTML = `
        <div class="car-loader-container fade-in" id="loaderContainer">
            <div class="loader-gauge-wrapper neon-mode">
                <svg class="neon-svg" viewBox="0 0 340 340">
                    <!-- Outer Glow Ring -->
                    <circle cx="170" cy="170" r="165" class="neon-ring-outer"></circle>
                    
                    <!-- Ticks -->
                    ${ticksHTML}

                    <!-- Redline Arc (Last 20%) -->
                    <path d="M 276 276 A 150 150 0 0 0 299 170" fill="none" class="neon-redline-arc" transform="rotate(50, 170, 170)" style="opacity:0.3"></path>

                    <!-- Digital Readout -->
                    <text x="170" y="220" class="neon-digital percentage" id="digitalPercent">0%</text>
                    <text x="170" y="245" class="neon-digital label">BOOST</text>
                </svg>

                <!-- Needle -->
                <div class="neon-needle"></div>
            </div>
            
            <div class="neon-text-container">
                 <h2 class="neon-status-text" id="loaderText">SYSTEM INITIALIZATION...</h2>
            </div>
        </div>
    `;

    // Animation Logic
    const needle = document.querySelector('.neon-needle');
    const percentDisplay = document.getElementById('digitalPercent');

    // 1. Needle Setup
    if (needle) {
        // Start at min
        needle.style.transform = 'rotate(-135deg)';
        // Smooth linear movement between ticks (120ms tick)
        needle.style.transition = 'transform 0.12s linear';
    }

    // 2. Digital Counter & Needle Sync (0-100 in ~12s)
    let counter = 0;
    const countInterval = setInterval(() => {
        counter++;
        const val = Math.min(counter, 100);

        // Update Text
        if (percentDisplay) percentDisplay.textContent = `${val}%`;

        // Update Needle
        if (needle) {
            // Map 0-100 to -135 to 135 (270deg range)
            const deg = -135 + ((val / 100) * 270);
            needle.style.transform = `rotate(${deg}deg)`;
        }

        if (counter >= 100) clearInterval(countInterval);
    }, 120);

    // 3. Text Cycling (Slower to match 12s duration)
    const phrases = [
        "CALIBRATING FUEL MAPS...",
        "PRE-IGNITION CHECKS...",
        "BUILDING BOOST PRESSURE...",
        "ANALYZING TELEMETRY...",
        "MAXIMIZING RPM..."
    ];
    let pIdx = 0;
    const textInterval = setInterval(() => {
        pIdx = (pIdx + 1) % phrases.length;
        const t = document.getElementById('loaderText');
        if (t) t.textContent = phrases[pIdx];
    }, 2000); // 2s per text change


    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answers)
        });

        // Cleanup
        clearInterval(countInterval);
        clearInterval(textInterval);
        if (percentDisplay) percentDisplay.textContent = "100%";
        if (needle) needle.style.transform = 'rotate(135deg)'; // Ensure max

        // Red Flash
        const wrapper = document.querySelector('.loader-gauge-wrapper');
        if (wrapper) {
            wrapper.style.boxShadow = "0 0 60px #ff003c";
            wrapper.style.transition = "0.2s";
        }

        await new Promise(r => setTimeout(r, 600));

        const data = await response.json();
        document.body.classList.remove('loading-state');

        if (data.classification === 'Cold Lead') {
            renderColdLeadView(data);
        } else {
            renderHotWarmLeadView(data);
        }
    } catch (err) {
        clearInterval(textInterval);
        clearInterval(countInterval);
        document.body.classList.remove('loading-state');
        slideContainer.innerHTML = `<div class="result-card"><h2>ERROR</h2><p>${err.message}</p></div>`;
    }
}

function renderFinalDashboard(data) {
    window.lastReportData = data; // Store for download

    // Switch to dark mode for HUD
    document.body.style.backgroundColor = '#121212';
    document.body.style.color = '#e0e0e0';

    // Enable Wide Mode
    slideContainer.classList.add('dashboard-mode');

    // Calculate detailed scores
    const scores = calculateDetailedScores(data.score);

    // Determine Personality & Badge
    let personality = "DAILY DRIVER";
    let badgeColor = "var(--text-muted)";
    if (data.score >= 80) { personality = "TRACK READY"; badgeColor = "#ef4444"; }
    else if (data.score >= 50) { personality = "HIDDEN PERFORMER"; badgeColor = "#fbbf24"; }

    slideContainer.innerHTML = `
        <div class="result-card result-card-dark fade-in" style="padding: 3rem;">
            
            <!-- 1. HUD Header -->
            <div class="hud-header">
                <span class="hud-label"><i class="fas fa-flag-checkered"></i> DIAGNOSTIC COMPLETE</span>
                <h1 class="hud-title">Vehicle Personality: <span style="color: var(--electric-blue);">${personality}</span></h1>
                <p class="hud-subtitle">Your car’s DNA has been analyzed. Ready for the next level?</p>
            </div>

            <!-- 2. Main Content Area (Gauges + Insight) -->
            <div class="main-dashboard-content">
                
                <!-- Left: Gauges Grid -->
                <div class="gauges-section">
                    <div class="gauges-grid">
                        ${getSpeedometerHTML(scores.condition, 'Current Condition', 'dashboard', 'fa-wrench')}
                        ${getSpeedometerHTML(scores.performance, 'Performance Potential', 'dashboard', 'fa-tachometer-alt')}
                        ${getSpeedometerHTML(scores.style, 'Style Quotient', 'dashboard', 'fa-star')}
                        ${getSpeedometerHTML(scores.upgrade, 'Upgrade Readiness', 'dashboard', 'fa-bolt')}
                        ${getSpeedometerHTML(scores.enthusiast, 'Enthusiast Score', 'dashboard', 'fa-flag')}
                    </div>
                </div>

                <!-- Right: Expert Insight -->
                <div class="expert-section">
                    <div class="expert-clipboard">
                        <div class="clipboard-header">Expert Insight</div>
                        <div class="clipboard-sub">CHIEF CONSULTANT'S VERDICT</div>
                        <div class="clipboard-body">
                            "${data.summary || 'Based on your inputs, your vehicle is showing signs of Reactive Maintenance. While the core is solid, your Upgrade Readiness suggests you are ready to transition from a daily driver to a precision machine.'}"
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Action Footer -->
            <div class="action-footer">
                ${data.downloadOption ? `
                <button class="btn-action-orange" onclick="renderLeadForm('download')">
                    <i class="fas fa-file-pdf"></i> Download Full PDF Report
                </button>
                <button class="btn-action-blue" onclick="renderLeadForm('booking')">
                    <i class="fas fa-phone-alt"></i> Book Free Consultation
                </button>
                ` : `
                <button class="btn-action-orange" onclick="window.location.href='https://autobacsindia.com'">
                    <i class="fas fa-search"></i> Explore Autobacs
                </button>
                <button class="btn-action-blue" onclick="window.location.href='https://instagram.com/autobacsindia'">
                    <i class="fab fa-instagram"></i> Join The Community
                </button>
                `}
            </div>
            
             <p style="text-align: center; margin-top: 1rem; color: #666; font-size: 0.8rem; display: none;">Our experts are ready to review your 350-word diagnostic profile.</p>

        </div>
    `;

    // Trigger Confetti
    triggerConfetti();

    // Animate SVG Gauges "Sweep"
    setTimeout(() => {
        const gauges = document.querySelectorAll('.gauge-arc');
        gauges.forEach(gauge => {
            const targetOffset = gauge.getAttribute('data-target-offset');
            // Force reflow
            gauge.getBoundingClientRect();
            // detailed stroke-dashoffset transition handled in CSS
            gauge.style.strokeDashoffset = targetOffset;
        });
    }, 500);
}

function calculateDetailedScores(baseScore) {
    // Generate pseudo-random but consistent variations based on baseScore
    const jitter = (seed) => {
        const x = Math.sin(baseScore * seed) * 10000;
        return x - Math.floor(x);
    };

    return {
        condition: Math.min(100, Math.max(0, Math.floor(baseScore + (jitter(1) * 20 - 10)))),
        performance: Math.min(100, Math.max(0, Math.floor(baseScore + (jitter(2) * 30 - 15)))),
        style: Math.min(100, Math.max(0, Math.floor(baseScore + (jitter(3) * 20 - 5)))),
        upgrade: Math.min(100, Math.max(0, Math.floor(baseScore + (jitter(4) * 40 - 10)))),
        enthusiast: Math.min(100, Math.max(0, Math.floor(baseScore + (jitter(5) * 15))))
    };
}

function triggerConfetti() {
    const colors = ['#f2d74e', '#95c3de', '#ff9a91', '#f2d74e', '#95c3de'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(confetti);

        // Cleanup
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Redirect old function calls to new dashboard
function renderHotWarmLeadView(data) { renderFinalDashboard(data); }
function renderColdLeadView(data) { renderFinalDashboard(data); }

async function downloadReport() {
    if (!window.lastReportData) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = window.lastReportData.full_report_content || "";

    // Page Settings
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;

    let y = 20; // Starting Y Position

    // Parse loop
    const lines = content.split('\n');

    lines.forEach(line => {
        // Check for Page Break
        if (y > pageHeight - margin) {
            doc.addPage();
            y = 20;
        }

        const trimmed = line.trim();

        // Title detection
        if (trimmed.startsWith('VEHICLE & DRIVER CONDITION REPORT')) {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            doc.text(trimmed, margin, y);
            y += 10;
        }
        // Section Header detection (e.g., "SECTION 1: ...")
        else if (trimmed.toUpperCase().startsWith('SECTION')) {
            doc.setFont("helvetica", "bold");
            doc.setFontSize(14);
            // Add extra space before section
            y += 5;
            doc.text(trimmed, margin, y);
            y += 8;
        }

        // Normal Text
        else {
            doc.setFont("helvetica", "normal");
            doc.setFontSize(11);

            // Text Wrapping
            const splitText = doc.splitTextToSize(trimmed, maxLineWidth);
            splitText.forEach(textLine => {
                if (y > pageHeight - margin) {
                    doc.addPage();
                    y = 20;
                }
                doc.text(textLine, margin, y);
                y += 6; // Line height
            });

            // Add small gap for empty lines, but not too big
            if (trimmed === "") {
                y -= 2;
            }
        }
    });

    // Save PDF
    doc.save(`Autobacs_Report_${new Date().getTime()}.pdf`);
}

function renderLeadForm(purpose) {
    const isBooking = purpose === 'booking';

    slideContainer.innerHTML = `
        <div class="result-card result-card-dark fade-in" style="max-width: 600px;">
            <div style="text-align: center; margin-bottom: 2rem;">
                <span class="hud-label" style="display:block; margin-bottom: 1rem;">${isBooking ? 'Consultation Request' : 'Profile Access'}</span>
                <h2>${isBooking ? 'Book Your Session' : 'Unlock Full Report'}</h2>
            </div>
            
            <p style="text-align: center; margin-bottom: 2rem;">${isBooking ? 'Select a time for our experts to connect with you.' : 'Enter your details to receive your comprehensive 350-word vehicle profile.'}</p>
            
            <div class="form-group" style="display: grid; gap: 1rem; margin-top: 1.5rem;">
                <input type="text" placeholder="Your Name" class="input-field" id="bName">
                <input type="email" placeholder="Email Address" class="input-field" id="bEmail">
                <input type="tel" placeholder="Phone Number" class="input-field" id="bPhone">
                ${isBooking ? `
                <input type="date" class="input-field" id="bDate" min="${new Date().toISOString().split('T')[0]}">
                <select class="input-field" id="bTime">
                    <option value="">Select Time Slot</option>
                    <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                </select>
                ` : ''}
            </div>

            <div class="button-group" style="margin-top: 2rem; justify-content: center;">
                <button class="btn-hud primary" style="min-width: 100%;" onclick="handleFormSubmit('${purpose}')">
                    ${isBooking ? 'Confirm Booking' : 'Download Now'}
                </button>
            </div>
            
            <div style="text-align: center; margin-top: 1rem;">
                <button onclick="renderFinalDashboard(window.lastReportData)" style="background:none; border:none; color: #666; cursor: pointer; text-decoration: underline;">Back to Dashboard</button>
            </div>
        </div>
    `;
}

async function handleFormSubmit(purpose) {
    const name = document.getElementById('bName').value.trim();
    const email = document.getElementById('bEmail').value.trim();
    const phone = document.getElementById('bPhone').value.trim();

    if (!name || !email || !phone) {
        alert("Please fill in your name, email, and phone number.");
        return;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Phone Validation (Indian Format: 10 digits, optional +91)
    // Matches: 9876543210, +919876543210, 09876543210
    const phoneRegex = /^(\+91[\-\s]?)?[0]?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const payload = {
        name,
        email,
        phone,
        type: purpose,
        reportContent: window.lastReportData ? window.lastReportData.full_report_content : null,
        classification: window.lastReportData ? window.lastReportData.classification : null,
        score: window.lastReportData ? window.lastReportData.score : 0,
        feedback: answers['final'] || '' // Capture feedback from the distinct 'final' question ID
    };

    if (purpose === 'booking') {
        const date = document.getElementById('bDate').value;
        const time = document.getElementById('bTime').value;
        if (!date || !time) {
            alert("Please select a date and time for your consultation.");
            return;
        }

        // Validate future date
        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day
        if (selectedDate < today) {
            alert("Please select a future date for your consultation.");
            return;
        }

        payload.bookingDate = date;
        payload.bookingTime = time;
    }

    // Save lead
    try {
        await fetch('/api/save-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Failed to save lead", e);
    }

    // Proceed with UI flow
    if (purpose === 'download') {
        downloadReport();
        slideContainer.innerHTML = `
            <div class="result-card result-card-dark fade-in" style="text-align: center; max-width: 600px;">
                <h1 style="color: var(--electric-blue); margin-bottom: 1rem;">Download Started!</h1>
                <p>Thanks ${name}, your report is downloading now.</p>
                
                <div class="hud-actions" style="margin-top: 2rem;">
                    <button class="btn-hud primary" onclick="renderLeadForm('booking')">
                        Call to Expert
                        <span class="subtext">Book your consultation now</span>
                    </button>
                    <button class="btn-hud" onclick="location.reload()">
                        Back to Home
                        <span class="subtext">Start a new diagnostic</span>
                    </button>
                </div>
            </div>
        `;
    } else {
        // Booking Flow
        slideContainer.innerHTML = `
            <div class="result-card result-card-dark fade-in" style="text-align: center; max-width: 600px;">
                <h1 style="color: var(--autobacs-orange); margin-bottom: 1rem;">Booking Confirmed!</h1>
                <p>Thanks ${name}, our expert will call you shortly.</p>
                <p style="margin-top: 1rem;">A copy of your report has been emailed to you.</p>
                
                <div class="hud-actions">
                    <button class="btn-hud primary" onclick="location.reload()" style="min-width: 200px;">
                        Back to Home
                    </button>
                </div>
            </div>
        `;
    }
}




function getSpeedometerHTML(score, label, type, icon) {
    // 1. Determine Color
    let mainColor = '#f59e0b'; // Amber (Default/Caution)
    if (score >= 80) mainColor = '#FF5F00'; // Autobacs Orange (High Performance)
    else if (score >= 50) mainColor = '#10b981'; // Green (Good)

    // 2. Calculate Dash Offset for Animation
    // Circumference for r=70 is ~440. 
    // Max arc is 270 degrees (3/4 circle) -> 330 length.
    // Let's use full circle length 440 for simplicity mapping 0-100 to 0-330 range?
    // Actually, for a 270deg gauge:
    // Full Circle = 440.
    // Visible Arc = (270/360) * 440 = 330.
    // So 0 score = 440 (Empty, but offset starts at full).
    // Wait, dasharray 330 440 ensures 330 filled, rest gap.
    // stroke-dashoffset: 330 - (score/100 * 330) ? 
    // Let's stick to a simpler full circle logic masked or rotated.
    // Logic: stroke-dasharray="330 440" (330 Dash, 440-330 Gap)
    // Offset: Start at 330 (Hidden) -> End at 330 - (3.3 * Score).

    // We will set the FINAL offset in a data attribute, and start at 330 in CSS/Inline
    const maxDash = 330;
    const finalOffset = maxDash - ((score / 100) * maxDash);

    return `
        <div class="gauge-wrapper">
             <div class="gauge-svg-container">
                <svg class="gauge-svg" viewBox="0 0 200 200">
                    <!-- 1. Background Track -->
                    <circle cx="100" cy="100" r="70" class="gauge-track" stroke-dasharray="330 440"></circle>
                    
                    <!-- 2. Ticks (Outer Ring) -->
                    <circle cx="100" cy="100" r="85" class="gauge-ticks" stroke-dasharray="2 4"></circle>

                    <!-- 3. Progress Arc (Animated) -->
                    <!-- We initialize style with the color -->
                    <circle cx="100" cy="100" r="70" class="gauge-arc" 
                        stroke="${mainColor}" 
                        style="--current-color: ${mainColor}"
                        stroke-dasharray="330 440"
                        stroke-dashoffset="330"
                        data-target-offset="${finalOffset}">
                    </circle>
                </svg>

                <div class="gauge-center">
                    <span class="gauge-value" style="color: ${mainColor}">${score}%</span>
                    ${icon ? `<i class="gauge-label-icon ${icon}"></i>` : ''}
                </div>
            </div>
            <h3 class="gauge-title">${label}</h3>
        </div>
    `;
}

init();
