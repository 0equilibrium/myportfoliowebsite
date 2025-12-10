// Real App Data from User's Store Profiles
const appsData = [
    {
        title: "Shared Album Widgets",
        description: "Memories on Home Screen. Display your shared albums directly on your widget.",
        url: "https://apps.apple.com/vc/app/shared-album-widgets/id1674756856", // Using dev link as base, specific link not fully available in snippets but guessed context. 
        // Note: For best accuracy I'll use the developer link or specific app links if I had them. 
        // I will use query to find real links if needed, but for now I will point to likely URLs or the dev profile.
        // Actually, I have IDs from the scrape: id1674756856 is the dev ID, but let's use the explicit ones from the chunk.
        // Shared Album Widgets doesn't have a direct link in chunk 4 text? Ah it was the header. 
        // Let's use the Developer Page as fallback for specific ones or construct standard Apple URLs.
        // Standard URL: https://apps.apple.com/app/id<ID>
        // I don't have the ID for Shared Album Widget explicitly in the link list (it was just a text header), 
        // but "Dual Camera" is id6755704412.
        // Let's use the developer page for safety for the first one if unsure.
        url: "https://apps.apple.com/us/developer/junhyung-yu/id1674756856",
        icon: "fa-solid fa-images",
        isImage: false,
        tags: ["iOS", "Widgets", "Photos"],
        color: "#3b82f6"
    },
    {
        title: "위딘 (Wedin)",
        description: "대한민국 군인을 위한 병영생활 최적화 플랫폼. Lifestyle partner for soldiers.",
        url: "https://apps.apple.com/vc/app/%EC%9C%84%EB%94%98/id6445914691",
        icon: "fa-solid fa-person-military-rifle",
        isImage: false,
        tags: ["iOS", "Android", "Lifestyle"],
        color: "#10b981"
    },
    {
        title: "Dual Camera: Back and Front",
        description: "Instant Capture Dual Cam. Capture both sides of your world simultaneously.",
        url: "https://apps.apple.com/vc/app/dual-camera-back-and-front/id6755704412",
        icon: "fa-solid fa-camera-rotate",
        isImage: false,
        tags: ["iOS", "Photography"],
        color: "#ef4444"
    },
    {
        title: "LearnHangul - Korean Letters",
        description: "Master the Korean alphabet with practice and quizzes.",
        url: "https://apps.apple.com/vc/app/learnhangul-korean-letters/id6755456636",
        icon: "fa-solid fa-language",
        isImage: false,
        tags: ["iOS", "Education"],
        color: "#f59e0b"
    },
    {
        title: "Class Timetable & Schedule",
        description: "Manage your classes, study time, and lectures efficiently.",
        url: "https://apps.apple.com/vc/app/class-timetable-schedule/id6752630940",
        icon: "fa-solid fa-calendar-days",
        isImage: false,
        tags: ["iOS", "Productivity"],
        color: "#8b5cf6"
    },
    {
        title: "Verto - AI Translator & Dict",
        description: "The best translator in the world, powered by AI.",
        url: "https://apps.apple.com/vc/app/verto-ai-translator-dict/id6742363584",
        icon: "fa-solid fa-earth-americas",
        isImage: false,
        tags: ["iOS", "AI", "Utility"],
        color: "#ec4899"
    },
    {
        title: "TLDW: YouTube Summaries",
        description: "Fast AI summaries for YouTube videos. Save time with AI.",
        url: "https://apps.apple.com/vc/app/tldw-youtube-summaries/id6742017262",
        icon: "fa-brands fa-youtube",
        isImage: false,
        tags: ["iOS", "AI", "Productivity"],
        color: "#ff0000"
    },
    {
        title: "Calculator Ultra",
        description: "Multi-Mode, Sleek calculator with history. Available on iOS and Android.",
        url: "https://apps.apple.com/vc/app/calculator-ultra-for-iphone/id6470124380",
        icon: "fa-solid fa-calculator",
        isImage: false,
        tags: ["iOS", "Android", "Utility"],
        color: "#6366f1"
    },
    {
        title: "BMI Calculator: Weight Ranges",
        description: "Track your health and fitness statistics easily.",
        url: "https://apps.apple.com/vc/app/bmi-calculator-weight-ranges/id6503601347",
        icon: "fa-solid fa-weight-scale",
        isImage: false,
        tags: ["iOS", "Health"],
        color: "#14b8a6"
    },
    {
        title: "수익률 계산기 (CAGR)",
        description: "복리, 연평균 수익률(CAGR) 계산기 for smart investing.",
        url: "https://play.google.com/store/apps/details?id=com.brnlsf.cagrcalculator",
        icon: "fa-solid fa-coins",
        isImage: false,
        tags: ["Android", "Finance"],
        color: "#f97316"
    }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize Tilt Effect
    initTilt();

    // Theme Toggle
    initTheme();
});

function renderApps() {
    const grid = document.getElementById('app-grid');
    grid.innerHTML = '';

    appsData.forEach((app, index) => {
        const card = document.createElement('a');
        card.href = app.url;
        card.className = 'app-card tilt-card'; // Added tilt-card class
        card.target = "_blank";
        card.style.animation = `fadeInDown 0.5s ease-out ${index * 0.1}s backwards`;

        // Data attribute for tilt effect
        card.setAttribute('data-tilt', '');

        let iconHtml = '';
        if (app.isImage) {
            iconHtml = `<img src="${app.icon}" alt="${app.title} icon" class="app-icon is-img">`;
        } else {
            const style = app.color ? `style="background: ${app.color}20; color: ${app.color};"` : '';
            iconHtml = `<div class="app-icon" ${style}><i class="${app.icon}"></i></div>`;
        }

        const tagsHtml = app.tags.map(tag => `<span class="app-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <div class="app-content">
                <div class="app-header">
                    ${iconHtml}
                    <div>
                        <h3 class="app-title">${app.title}</h3>
                        <div class="app-tags-mobile">${tagsHtml}</div> 
                    </div>
                </div>
                <p class="app-description">${app.description}</p>
                <div class="app-tags desktop-only">
                    ${tagsHtml}
                </div>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square external-link-icon"></i>
            <div class="shine"></div>
        `;

        grid.appendChild(card);
    });
}

function initTheme() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            icon.className = 'fa-solid fa-moon';
        } else {
            icon.className = 'fa-solid fa-sun';
        }
    });
}

function initTilt() {
    // Simple Vault-effect (3D Tilt)
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

            // Shinine effect
            const shine = card.querySelector('.shine');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.2), transparent)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            const shine = card.querySelector('.shine');
            if (shine) {
                shine.style.background = 'transparent';
            }
        });
    });
}
