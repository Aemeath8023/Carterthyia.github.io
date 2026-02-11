// =============== 配置加载 ===============
if (!window.siteConfig) {
    console.error("❌ config.js 未加载！请检查路径");
}

// =============== 角色自动识别 ===============
function autoLoadRole() {
    const pageName = window.location.pathname.toLowerCase();
    const roleKey = pageName.includes("index2") ? "aimis" : "carter";
    const data = window.siteConfig?.characters?.[roleKey];
    
    if (!data) return;
    
    // 更新标题和描述
    document.title = data.siteName;
    const descTag = document.querySelector('.site-description');
    if (descTag) descTag.textContent = data.siteDescription;
    
    // 更新头像
    const avatarImg = document.getElementById('userAvatar');
    if (avatarImg && data.avatar) {
        avatarImg.src = data.avatar;
        // 爱弥斯专属：移除视频区（无视频素材）
        if (roleKey === 'aimis') {
            const videoSec = document.querySelector('.video-section');
            if (videoSec) videoSec.style.display = 'none';
        }
    }
    
    // 卡提希娅专属：显示视频
    if (roleKey === 'carter' && (data.smallVideo || data.bigVideo)) {
        const videoSec = document.querySelector('.video-section');
        if (videoSec) videoSec.style.display = 'block';
    }
}

// =============== 画廊点击放大（你原有功能 + 爱弥斯适配） ===============
function initGalleryClickEffect() {
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.9); display: flex; justify-content: center;
                align-items: center; z-index: 10000; cursor: pointer; transition: opacity 0.3s;
            `;
            const bigImg = document.createElement('img');
            bigImg.src = this.src;
            bigImg.alt = this.alt || '角色大图';
            bigImg.style.cssText = `
                max-width: 90%; max-height: 90%; border-radius: 8px;
                box-shadow: 0 0 30px rgba(255, 105, 180, 0.7);
            `;
            overlay.appendChild(bigImg);
            document.body.appendChild(overlay);
            document.body.style.overflow = 'hidden';
            
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                }
            });
            
            // 按ESC关闭
            const escHandler = (e) => {
                if (e.key === 'Escape') {
                    document.body.removeChild(overlay);
                    document.body.style.overflow = '';
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        });
    });
}

// =============== 粒子系统（你原有代码完整保留） ===============
function initParticleSystem() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const config = window.siteConfig?.effectsConfig || {};
    const isMobile = window.innerWidth < 768;
    const maxParticles = isMobile ? (config.maxParticlesMobile || 60) : (config.maxParticlesDesktop || 250);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = isMobile ? '#ffffff' : '#e0b0ff';
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        
        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        for (let i = 0; i < maxParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    
    function handleResize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);
    init();
    animate();
}

// =============== 涟漪效果（你原有代码完整保留） ===============
function initRippleEffect() {
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

// =============== 动画滚动（你原有代码完整保留） ===============
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.section-animate, .card-animate').forEach(el => {
        observer.observe(el);
    });
}

// =============== 导航栏滚动变色（你原有代码完整保留） ===============
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =============== 返回顶部（你原有代码完整保留） ===============
function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('hidden');
        } else {
            btn.classList.add('hidden');
        }
    });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============== 主题/模式初始化（你原有代码完整保留） ===============
function initDefaultThemeAndMode() {
    const savedTheme = localStorage.getItem('siteTheme') || window.siteConfig?.defaultTheme || 'purple';
    const savedMode = localStorage.getItem('siteMode') || window.siteConfig?.defaultMode || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('data-mode', savedMode);
    
    // 更新主题选择器（如果存在）
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) themeSelect.value = savedTheme;
    
    // 更新模式切换器（如果存在）
    const modeToggle = document.querySelector('.mode-toggle');
    if (modeToggle) {
        modeToggle.checked = (savedMode === 'dark');
    }
}

// =============== 全局初始化 ===============
window.addEventListener('DOMContentLoaded', () => {
    if (!window.siteConfig) {
        console.error("配置文件未加载！");
        return;
    }
    
    autoLoadRole(); // 核心：自动识别卡提希娅/爱弥斯
    initAnimations();
    initNavbar();
    initBackToTop();
    initDefaultThemeAndMode();
    initParticleSystem();
    initRippleEffect();
    initGalleryClickEffect(); // 画廊点击放大（含爱弥斯P1-P8）
    
    // 控制台彩蛋（保留你原有风格）
    console.log("%c✨ 欢迎来到星光小站 ✨", "color: #ff6b9d; font-size: 16px; font-weight: bold;");
    console.log("卡提希娅 & 爱弥斯 · 由玩家用心搭建");
});