// 角色配置数据
const characters = {
    carter: {
        name: "卡提希娅",
        avatar: "images/carte1.jpg",
        description: "于光影中守护的温柔使者 · 双形态战斗达人",
        story: "在星海尽头，她以光为刃，以影为盾。卡提希娅穿梭于现实与虚影之间，守护着被遗忘的星辰记忆。当双形态切换的刹那，时空为之震颤...",
        video: "videos/111.mp4",
        gallery: [
            { src: "images/carte1.jpg", alt: "卡提希娅·星海轻歌", type: "portrait" },
            { src: "images/carte2.jpg", alt: "卡提希娅·双形态", type: "scene" },
            { src: "images/carte3.jpg", alt: "卡提希娅·迅刀连斩", type: "action" },
            { src: "images/carte4.jpg", alt: "卡提希娅·巨剑降临", type: "action" },
            { src: "images/carte5.jpg", alt: "卡提希娅·星海回眸", type: "portrait" },
            { src: "images/carte6.jpg", alt: "卡提希娅·光影交织", type: "scene" },
            { src: "images/carte7.jpg", alt: "卡提希娅·战斗特写", type: "action" },
            { src: "images/carte8.jpg", alt: "卡提希娅·温柔守护", type: "portrait" },
            { src: "images/carte9.jpg", alt: "卡提希娅·星海漫步", type: "scene" },
            { src: "images/carte10.jpg", alt: "卡提希娅·双形态切换", type: "action" },
            { src: "images/carte11.jpg", alt: "卡提希娅·月光下的誓言", type: "portrait" },
            { src: "images/carte12.jpg", alt: "卡提希娅·星海战场", type: "scene" },
            { src: "images/carte13.jpg", alt: "卡提希娅·终极奥义", type: "action" },
            { src: "images/carte14.jpg", alt: "卡提希娅·守护之光", type: "portrait" }
        ]
    },
    aimis: {
        name: "爱弥斯",
        avatar: "images2/1.jpg",
        description: "来自数据世界的电子幽灵 · 战斗与科技的结合体",
        story: "她是代码与灵魂的交汇点，是未来之光。爱弥斯从数据深渊中苏醒，以电子幽灵之姿穿梭于现实与虚拟边界。她的每一次攻击都带着数据流的韵律，每一次闪避都留下像素残影...",
        video: "videos/12.mp4",
        gallery: [
            { src: "images2/1.jpg", alt: "爱弥斯·电子幽灵", type: "portrait" },
            { src: "images2/2.png", alt: "爱弥斯·数据流环绕", type: "scene" },
            { src: "images2/3.png", alt: "爱弥斯·像素闪避", type: "action" },
            { src: "images2/4.png", alt: "爱弥斯·代码重构", type: "action" },
            { src: "images2/5.png", alt: "爱弥斯·数据回眸", type: "portrait" },
            { src: "images2/6.png", alt: "爱弥斯·虚拟战场", type: "scene" },
            { src: "images2/7.png", alt: "爱弥斯·终极协议", type: "action" }
        ]
    }
};

// 当前站点标识（用于动态内容）
const currentSite = window.location.pathname.includes('index2') ? 'aimis' : 'carter';