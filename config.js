const siteConfig = {
  adminAccount: "admin",
  adminPassword: "password",
  
  // 角色列表配置
  characters: {
    // 第一个角色：卡提希娅 (对应 index.html)
    carterthyia: {
      siteName: "卡提希娅的星光小站",
      siteDescription: "于光影中守护的温柔使者 · 双形态战斗达人",
      videos: {
        smallCardVideo: "videos/111.mp4", // 你的小卡视频
        bigCardVideo: "videos/12.mp4"    // 你的大卡视频（注意大写MP4）
      }
    },
    // 第二个角色：爱弥斯 (对应 index2.html 或 character2.html)
    aimis: {
      siteName: "爱弥斯的璀璨星穹",
      siteDescription: "在星海间穿梭的自由之翼 · 幻梦掌控者",
      videos: {
        smallCardVideo: "videos/aimis_small.mp4", // 这里需要你准备爱弥斯的视频文件名
        bigCardVideo: "videos/aimis_big.mp4"
      }
    }
  },
  
  defaultTheme: "purple",
  defaultMode: "light",
  galleryCount: 8,
  effectsConfig: {
    enableAdvancedEffects: true,
    maxParticles: 150
  }
};
window.siteConfig = siteConfig;