const siteConfig = {
  adminAccount: "admin",
  adminPassword: "carterthyia",
  siteDomain: "carterthyia.cloud",
  defaultTheme: "purple",
  defaultMode: "light",
  
  // ================= 角色数据分开 =================
  characters: {
    // 卡提希娅的配置 (适用于 index.html)
    carter: {
      siteName: "卡提希娅的星光小站",
      siteDescription: "于光影中守护的温柔使者 · 双形态战斗达人卡提希娅专属站点",
      avatar: "favicon/1.png", // 确保此路径存在
      smallVideo: "videos/111.mp4",
      bigVideo: "videos/12.mp4"
    },
    // 爱弥斯的配置 (适用于 index2.html)
    aimis: {
      siteName: "爱弥斯的璀璨星穹",
      siteDescription: "自由的幻梦掌控者 · 璀璨星海梦境领主",
      avatar: "images/P1.png", // 确保此路径图片存在
      smallVideo: null,       // 爱弥斯没有视频
      bigVideo: null
    }
  },
  
  // ================= 特效配置 (极限性能优化) =================
  effectsConfig: {
    enableAdvancedEffects: true,
    maxParticlesDesktop: 250, // Windows端高粒子数
    maxParticlesMobile: 60,   // 手机端限制粒子数
    enableBlurDesktop: true,  // Windows端开启模糊
    enableBlurMobile: false   // 手机端关闭模糊防止卡顿
  }
};
window.siteConfig = siteConfig;