// ======================
// 图集过滤功能
// ======================
function initGalleryFilter() {
    const filters = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-img');

    // 初始化：确保所有图片可见
    galleryItems.forEach(img => {
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
        img.style.display = 'block';
        // 添加加载错误处理
        img.onerror = function() {
            console.warn(`⚠️ 图片加载失败: ${this.src}`);
            this.src = 'https://via.placeholder.com/300x400/4a00e0/ffffff?text=图片缺失';
            this.alt = "加载失败";
        };
    });

    // 绑定过滤事件
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // 更新激活状态
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            const type = filter.dataset.filter;
            
            // 过滤图片
            galleryItems.forEach(item => {
                if (type === 'all' || item.dataset.type === type) {
                    item.style.display = 'block';
                    // 添加淡入动画
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 默认触发"全部"筛选
    document.querySelector('.filter-btn[data-filter="all"]')?.click();
}

// ======================
// 页面加载初始化
// ======================
document.addEventListener('DOMContentLoaded', () => {
    console.log(`🚀 ${currentSite === 'carter' ? '卡提希娅' : '爱弥斯'} 站点已加载`);
    
    // 初始化图集过滤器
    initGalleryFilter();
    
    // 添加图片悬停效果
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.7)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = 'none';
        });
    });
    
    // 检查关键资源
    setTimeout(() => {
        const missingImages = Array.from(document.images).filter(img => 
            !img.complete || (img.naturalWidth === 0 && img.naturalHeight === 0)
        );
        
        if (missingImages.length > 0) {
            console.warn(`⚠️ 检测到 ${missingImages.length} 张图片加载失败`);
            missingImages.forEach(img => console.warn(`  - ${img.src}`));
        } else {
            console.log('✅ 所有图片资源加载正常');
        }
    }, 2000);
});

// ======================
// 跳转辅助函数
// ======================
function goToCharacter(site) {
    if (site === 'carter') {
        window.location.href = 'index.html';
    } else if (site === 'aimis') {
        window.location.href = 'index2.html';
    }
}