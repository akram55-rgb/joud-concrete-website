/* ==========================================================================
   Interactive Scripts - Jabal Al-Jood Website
   ========================================================================== */
// Translation Dictionary
const translations = {
    ar: {
        "nav-title": "جبل الجود",
        "nav-subtitle": "للمقاولات والكونكريت",
        "theme-aquatic": "مائي",
        "theme-concrete": "كونكريتي",
        "theme-desert": "صحراوي",
        "hero-badge": "العراق | الموصل - القيارة",
        "hero-title": "شركة جبل الجود للمقاولات ومعامل صب الكونكريت الجاهز",
        "hero-desc": "الريادة في صب الكونكريت الجاهز والمقاولات العامة بمواصفات هندسية فائقة. نغطي مناطق جنوب الموصل والقيارة بأفضل التقنيات وأقوى التجهيزات الخرسانية.",
        "loc-title": "موقع المعمل والمقر الرئيسي:",
        "loc-desc": "جمهورية العراق، نينوى، جنوب الموصل، ناحية القيارة",
        "cta-contact": "اتصل بنا الآن",
        "cta-projects": "مشاريعنا الهندسية",
        "scroll-hint": "اغرق للأسفل واستكشف",
        "services-title": "خدماتنا ومعايير الجودة",
        "services-subtitle": "خرسانة مجهزة ومصممة بأحدث الأجهزة المختبرية لتحمل أقسى الظروف",
        "srv1-title": "معامل الصب الجاهز",
        "srv1-desc": "طاقات إنتاجية عالية بأحدث الخلاطات المركزية المحوسبة لضمان دقة نسب الخلط والإنتاج المستمر.",
        "srv2-title": "المقاولات العامة",
        "srv2-desc": "تنفيذ المشاريع الإنشائية، الطرق، الجسور والبنى التحتية بإشراف طواقم هندسية خبيرة وبأحدث الآليات.",
        "srv3-title": "مختبر الجودة والسيطرة",
        "srv3-desc": "فحص مستمر ومجهري للمواد الأولية والخرسانة الناتجة لضمان مقاومة الضغط (C20 - C50) ومطابقتها للمواصفات العراقية والعالمية.",
        "srv4-title": "أسطول الناقلات والمضخات",
        "srv4-desc": "أسطول حديث من سيارات الخباطات ومضخات الكونكريت بأذرع طويلة تصل لأكثر الارتفاعات والمناطق تعقيداً.",
        "projects-title": "معرض المشاريع ثلاثي الأبعاد",
        "projects-subtitle": "مرر الفأرة أو المس الشاشة لتحريك المشاريع بأبعاد ثلاثية واقعية",
        
        "p1-title": "معمل صب الخرسانة الجاهزة بالقيارة",
        "p1-title-back": "المواصفات التقنية",
        "p1-desc": "نظام تحكم رقمي بالكامل (PLC)، خلاطات رطبة وجافة فائقة الدقة لتلبية المشاريع العملاقة بأسرع وقت.",
        "p-cap": "القدرة الإنتاجية",
        "p-quality": "نسبة المطابقة",
        "p-active": "نشط / إنتاج يومي",
        
        "p2-title": "أسطول الناقلات والمضخات",
        "p2-title-back": "الخدمات اللوجستية",
        "p2-desc": "سيارات نقل وخلط سعة 10-12 متر مكعب، مع مضخات ذات امتداد يصل إلى 52 متراً لصب الأبراج والجسور.",
        "p-trucks": "عدد الشاحنات",
        "p-pump": "طول المضخة",
        "p-ready": "جاهزية 24/7",
        
        "p3-title": "مشاريع صب ركائز الجسور",
        "p3-title-back": "الهندسة المائية والجسور",
        "p3-desc": "صب ركائز خرسانية مقاومة للأملاح الكبريتية وعوامل التعرية المائية في نهر دجلة وفروعه بجنوب الموصل.",
        "p-grade": "رتبة الخرسانة",
        "p-marine": "مقاومة مائية",
        "p-completed": "منفذ بدقة",
        
        "p4-title": "الهياكل والمقاولات الإنشائية",
        "p4-title-back": "المقاولات العمرانية",
        "p4-desc": "تنفيذ الهياكل الخرسانية للأبنية متعددة الطوابق والمراكز التجارية والمجمعات السكنية في القيارة والموصل.",
        "p-area": "إجمالي المساحة",
        "p-standard": "معايير فحص",
        "p-progress": "تحت التنفيذ",
        
        "p5-title": "صب أسس الهياكل الخرسانية العملاقة",
        "p5-title-back": "صب الأساس الحصيري",
        "p5-desc": "تنفيذ أعمال صب الأسس الحصيرية (Raft Foundations) بسماكات عالية خالية من التشققات والتكهفات مع معالجة مائية ممتازة.",
        "p5-vol": "حجم الصب الأقصى",
        
        "p6-title": "ضخ الخرسانة للأبنية المرتفعة",
        "p6-title-back": "الضخ الرأسي والارتفاعات",
        "p6-desc": "استخدام مضخات ذراع هيدروليكية متطورة لإيصال الخرسانة لقمم الهياكل والمباني السكنية المرتفعة في الموصل.",
        "p6-floors": "طوابق مرتفعة",
        "p6-flow": "انسيابية الضخ",
        
        "contact-title": "تواصل معنا وعزز شراكتك",
        "contact-subtitle": "خطوط الاتصال والصفحات الرسمية لشركة جبل الجود في خدمتك دائماً",
        "cnt-phone": "الاتصال الهاتفي المباشر",
        "cnt-whatsapp": "المحادثة عبر الواتساب",
        "cnt-facebook": "الصفحة الرسمية فيسبوك",
        "cnt-tiktok": "حسابنا على تيك توك",
        
        "map-mosul": "الموصل",
        "map-qayyarah": "القيارة (مقر المعمل)",
        "map-baghdad": "بغداد",
        "map-card-title": "توزيع الخدمات الجغرافية",
        "map-card-desc": "نقوم بتوصيل الخرسانة الجاهزة وتنفيذ المقاولات في كافة أنحاء الموصل، القيارة، الحضر، الشورة، والمناطق المجاورة بأسرع وقت ممكن للمحافظة على مواصفات الخليط.",
        "footer-copyright": "جميع الحقوق محفوظة © 2026",
        "footer-designer": "تصميم وتوقيع:"
    },
    en: {
        "nav-title": "Jabal Al-Jood",
        "nav-subtitle": "Contracting & Concrete",
        "theme-aquatic": "Aquatic",
        "theme-concrete": "Concrete",
        "theme-desert": "Desert",
        "hero-badge": "Iraq | Mosul - Al-Qayyarah",
        "hero-title": "Jabal Al-Jood Contracting & Ready-Mix Concrete Plant",
        "hero-desc": "Pioneering in ready-mix concrete pouring and general contracting with superior engineering standards. Covering South Mosul and Al-Qayyarah with advanced concrete fleets.",
        "loc-title": "Plant Site & Headquarters:",
        "loc-desc": "Republic of Iraq, Nineveh, South of Mosul, Al-Qayyarah Sub-district",
        "cta-contact": "Contact Us Now",
        "cta-projects": "Engineering Projects",
        "scroll-hint": "Dive deep down and explore",
        "services-title": "Our Services & Quality Standards",
        "services-subtitle": "Ready-mix concrete formulated and checked by modern laboratory testing to withstand the harshest elements",
        "srv1-title": "Ready-Mix Batching Plants",
        "srv1-desc": "High capacity production using computerized central batching to guarantee accurate mixing proportions and continuous supply.",
        "srv2-title": "General Contracting",
        "srv2-desc": "Executing structural buildings, roads, bridges, and infrastructure projects supervised by expert engineering crews.",
        "srv3-title": "Quality Testing Laboratory",
        "srv3-desc": "Continuous and microscopic testing of raw materials and output concrete to ensure compression strengths (C20-C50) meet Iraq and global standards.",
        "srv4-title": "Logistics & Pump Fleet",
        "srv4-desc": "A modern fleet of concrete mixers and high-reach pump trucks to supply complex, high-altitude pours.",
        "projects-title": "3D Engineering Showcase",
        "projects-subtitle": "Hover or touch the screen to tilt the projects in interactive 3D space",
        
        "p1-title": "Al-Qayyarah Concrete Batching Plant",
        "p1-title-back": "Technical Specifications",
        "p1-desc": "Fully automated PLC control system, high-performance wet & dry mixers engineered to support large-scale national structures.",
        "p-cap": "Production Capacity",
        "p-quality": "Compliance Rate",
        "p-active": "Active / Daily Output",
        
        "p2-title": "Transit Mixer & Pump Fleet",
        "p2-title-back": "Logistical Capacity",
        "p2-desc": "Transit mixers of 10-12 cubic meters capacity and pump trucks spanning up to 52 meters to facilitate high-altitude pours.",
        "p-trucks": "Mixer Trucks Count",
        "p-pump": "Pump Boom Reach",
        "p-ready": "24/7 Readiness",
        
        "p3-title": "Bridge Pier Pours",
        "p3-title-back": "Marine & Bridge Engineering",
        "p3-desc": "Pouring concrete foundations resistant to sulfurous salts and water erosion factors in the Tigris River, South Mosul.",
        "p-grade": "Concrete Grade",
        "p-marine": "Water Resistance",
        "p-completed": "Fully Executed",
        
        "p4-title": "Concrete Frame Structures",
        "p4-title-back": "Urban Contracting",
        "p4-desc": "Execution of concrete structures for multi-story buildings, malls, and residential complexes in Al-Qayyarah and Mosul.",
        "p-area": "Total Concrete Area",
        "p-standard": "Testing Standard",
        "p-progress": "Under Construction",
        
        "p5-title": "Massive Structure Foundation Pours",
        "p5-title-back": "Raft Foundation Casting",
        "p5-desc": "Executing mass concrete raft foundations with high thickness, zero cracks, and optimal curing protocols.",
        "p5-vol": "Max Pour Volume",
        
        "p6-title": "High-Rise Concrete Pumping",
        "p6-title-back": "Vertical Pumping & Heights",
        "p6-desc": "Deploying modern hydraulic boom pumps to deliver ready-mix concrete to high-rise building frames in Mosul.",
        "p6-floors": "Storeys Reached",
        "p6-flow": "Pumping Efficiency",
        
        "contact-title": "Get In Touch With Us",
        "contact-subtitle": "Direct call lines and official pages of Jabal Al-Jood at your service",
        "cnt-phone": "Direct Telephone Call",
        "cnt-whatsapp": "Chat on WhatsApp",
        "cnt-facebook": "Official Facebook Page",
        "cnt-tiktok": "Follow Us on TikTok",
        
        "map-mosul": "Mosul",
        "map-qayyarah": "Al-Qayyarah (Batching Plant)",
        "map-baghdad": "Baghdad",
        "map-card-title": "Geographical Service Area",
        "map-card-desc": "We supply ready-mix concrete and run contracting across Mosul, Al-Qayyarah, Al-Hadr, Ash-Shura, and nearby areas, ensuring rapid delivery to maintain design properties.",
        "footer-copyright": "All Rights Reserved © 2026",
        "footer-designer": "Designed & Signed by:"
    }
};
// Application State
let currentLang = 'ar'; // Default language
let currentTheme = 'aquatic'; // Default theme
const themes = ['aquatic', 'concrete', 'desert'];
// DOM Elements
const htmlNode = document.documentElement;
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const themeToggle = document.getElementById('themeToggle');
const themeText = document.getElementById('themeText');
const depthValue = document.getElementById('depthValue');
const mainScroller = document.getElementById('mainScroller');
const depthNodes = document.querySelectorAll('.depth-node');
const bubblesContainer = document.getElementById('bubblesContainer');
// --------------------------------------------------------------------------
// 1. Language Toggle Logic
// --------------------------------------------------------------------------
function setLanguage(lang) {
    currentLang = lang;
    htmlNode.setAttribute('lang', lang);
    htmlNode.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update labels inside the switch buttons
    langText.textContent = lang === 'ar' ? 'EN' : 'عربي';
    
    // Update theme title in the specific language
    updateThemeLabel();
    // Loop through all translatable elements
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Update custom layout changes if necessary
    const mapMarkerGroup = document.querySelector('.map-marker');
    if (mapMarkerGroup) {
        if (lang === 'ar') {
            mapMarkerGroup.querySelector('.label-mosul').setAttribute('x', '210');
            mapMarkerGroup.querySelector('.label-qayyarah').setAttribute('x', '210');
        } else {
            mapMarkerGroup.querySelector('.label-mosul').setAttribute('x', '215');
            mapMarkerGroup.querySelector('.label-qayyarah').setAttribute('x', '215');
        }
    }
}
langToggle.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    setLanguage(nextLang);
});
// --------------------------------------------------------------------------
// 2. Theme Cycling Logic
// --------------------------------------------------------------------------
function updateThemeLabel() {
    const activeKey = `theme-${currentTheme}`;
    themeText.textContent = translations[currentLang][activeKey];
}
function setTheme(theme) {
    // Remove all theme classes
    themes.forEach(t => {
        htmlNode.classList.remove(`theme-${t}`);
    });
    
    // Add current theme class
    htmlNode.classList.add(`theme-${theme}`);
    currentTheme = theme;
    
    updateThemeLabel();
    
    // Customize bubble appearance or frequency according to theme
    if (theme === 'concrete') {
        bubblesContainer.style.opacity = '0.3';
    } else if (theme === 'desert') {
        bubblesContainer.style.opacity = '0.5';
    } else {
        bubblesContainer.style.opacity = '1.0';
    }
}
themeToggle.addEventListener('click', () => {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
});
// --------------------------------------------------------------------------
// 3. Scroll & Depth Meter Calculations
// --------------------------------------------------------------------------
mainScroller.addEventListener('scroll', () => {
    const scrollTop = mainScroller.scrollTop;
    const scrollHeight = mainScroller.scrollHeight - mainScroller.clientHeight;
    const scrollRatio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    
    // Calculate simulated depth (0m to 600m)
    let depthInterpolated = 0;
    if (scrollRatio <= 0.33) {
        depthInterpolated = Math.round((scrollRatio / 0.33) * 150);
    } else if (scrollRatio <= 0.66) {
        depthInterpolated = Math.round(150 + ((scrollRatio - 0.33) / 0.33) * 150);
    } else {
        depthInterpolated = Math.round(300 + ((scrollRatio - 0.66) / 0.34) * 300);
    }
    
    depthInterpolated = Math.min(600, Math.max(0, depthInterpolated));
    depthValue.textContent = depthInterpolated;
    // Update active node on the depth meter track
    const sectionIndex = Math.min(3, Math.floor(scrollRatio * 4));
    depthNodes.forEach((node, idx) => {
        if (idx === sectionIndex) {
            node.classList.add('active');
        } else {
            node.classList.remove('active');
        }
    });
});
// Make depth nodes clickable to scroll to specific section
depthNodes.forEach(node => {
    node.addEventListener('click', () => {
        const targetIndex = parseInt(node.getAttribute('data-target'));
        const sections = document.querySelectorAll('.scroll-section');
        if (sections[targetIndex]) {
            sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// --------------------------------------------------------------------------
// 4. Dynamic Bubbles Generator
// --------------------------------------------------------------------------
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Randomize dimensions
    const size = Math.random() * 25 + 8;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Randomize horizontal placement
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Randomize animation variables
    const drift = (Math.random() * 80 - 40) + 'vw';
    bubble.style.setProperty('--drift', drift);
    
    const duration = Math.random() * 6 + 6;
    bubble.style.animationDuration = `${duration}s`;
    
    const delay = Math.random() * 5;
    bubble.style.animationDelay = `${delay}s`;
    
    bubblesContainer.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, (duration + delay) * 1000);
}
// Initial batch of bubbles
for (let i = 0; i < 20; i++) {
    createBubble();
}
// Generate new bubbles continuously
setInterval(createBubble, 800);
// --------------------------------------------------------------------------
// 5. Interactive 3D Tilt Effect on Project Cards
// --------------------------------------------------------------------------
const projectCards = document.querySelectorAll('.project-3d-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const cardRect = card.getBoundingClientRect();
        
        const x = e.clientX - cardRect.left;
        const y = e.clientY - cardRect.top;
        
        const centerX = cardRect.width / 2;
        const centerY = cardRect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const rotX = -deltaY * 15;
        const rotY = deltaX * 15;
        
        const cardInner = card.querySelector('.card-inner');
        
        if (card.matches(':hover')) {
            cardInner.style.transform = `rotateY(${180 + rotY}deg) rotateX(${rotX}deg) scale(1.03)`;
        }
    });
    card.addEventListener('mouseleave', () => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.style.transform = '';
    });
    
    // Touch support for mobile devices
    card.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const cardRect = card.getBoundingClientRect();
        
        const x = touch.clientX - cardRect.left;
        const y = touch.clientY - cardRect.top;
        
        if (x >= 0 && x <= cardRect.width && y >= 0 && y <= cardRect.height) {
            const centerX = cardRect.width / 2;
            const centerY = cardRect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotX = -deltaY * 10;
            const rotY = deltaX * 10;
            
            const cardInner = card.querySelector('.card-inner');
            cardInner.style.transform = `rotateY(${180 + rotY}deg) rotateX(${rotX}deg) scale(1.03)`;
        }
    }, { passive: true });
    
    card.addEventListener('touchend', () => {
        const cardInner = card.querySelector('.card-inner');
        cardInner.style.transform = '';
    });
});
// Setup default visual states
setLanguage('ar');
setTheme('aquatic');