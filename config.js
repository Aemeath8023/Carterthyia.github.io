const siteConfig = {
    adminAccount: "admin",
    adminPassword: "carterthyia",
    siteDomain: "carterthyia.cloud",
    defaultTheme: "purple",
    defaultMode: "light",
    
    characters: {
        carter: {
            siteName: "卡提希娅的星光小站",
            siteDescription: "于光影中守护的温柔使者 · 双形态战斗达人",
            avatar: "favicon/1.png",
            smallVideo: "videos/111.mp4",
            bigVideo: "videos/12.mp4"
        },
        aimis: {
            siteName: "爱弥斯 | 鸣潮3.1角色站",
            siteDescription: "星炬学院的电子幽灵 · 以数据之躯守护世界的温柔灵魂",
            avatar: "images/P1.png",
            smallVideo: null,
            bigVideo: null
        }
    },
    
    effectsConfig: {
        enableAdvancedEffects: true,
        maxParticlesDesktop: 250,
        maxParticlesMobile: 60,
        enableBlurDesktop: true,
        enableBlurMobile: false
    }
};

window.siteConfig = siteConfig;