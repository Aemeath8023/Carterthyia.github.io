// ================= 全局状态 =================
let currentTheme = 'purple';
let isDarkMode = false;

// ================= 初始化入口 =================
window.addEventListener('DOMContentLoaded', () => {
  if (typeof window.siteConfig === 'undefined') {
    console.error("config.js 加载失败！");
    return;
  }
  
  // 1. 核心：根据页面自动切换角色数据
  loadCharacterData();
  
  // 2. 初始化其他功能
  initAnimations();
  initNavbar();
  initBackToTop();
  initGalleryFilter();
  initGuideTab();
  initDefaultThemeAndMode();
});

// ================= 角色数据加载逻辑 =================
function loadCharacterData() {
  const fileName = window.location.pathname.split("/").pop();
  let role = "carterthyia"; // 默认角色

  // 判断是否为第二个角色页面
  if (fileName.includes("2") || fileName.includes("aimis")) {
    role = "aimis";
  }

  const data = window.siteConfig.characters[role];
  if (!data) return;

  // 更新文字内容
  document.title = data.siteName;
  const desc = document.querySelector('.site-description');
  if (desc) desc.textContent = data.siteDescription;

  // 更新视频路径
  const smallVid = document.getElementById('smallVideo');
  const bigVid = document.getElementById('bigVideo');

  if (smallVid) {
    smallVid.src = data.videos.smallCardVideo;
    smallVid.load(); // 强制重新加载视频源
  }
  if (bigVid) {
    bigVid.src = data.videos.bigCardVideo;
    bigVid.load();
  }
}

// ================= 其它基础功能 (保持不变) =================
function initAnimations() {
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.section-animate, .card-animate').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) el.classList.add('visible');
    });
  });
  window.dispatchEvent(new Event('scroll'));
}

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    window.scrollY > 50 ? navbar?.classList.add('scrolled') : navbar?.classList.remove('scrolled');
  });
}

function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    window.scrollY > 300 ? btn?.classList.remove('hidden') : btn?.classList.add('hidden');
  });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initDefaultThemeAndMode() {
  currentTheme = window.siteConfig.defaultTheme;
  document.documentElement.style.setProperty('--primary-color', currentTheme === 'purple' ? '#8a5cf7' : '#3b82f6');
}

// 视频切换逻辑 (小卡/大卡切换)
function switchVideo(type) {
  const small = document.getElementById('smallVideo');
  const big = document.getElementById('bigVideo');
  if (type === 'small') {
    small?.classList.remove('hidden');
    big?.classList.add('hidden');
  } else {
    small?.classList.add('hidden');
    big?.classList.remove('hidden');
  }
}