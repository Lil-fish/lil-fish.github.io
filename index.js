// 切换内容的函数
function changeContent(sectionId) {
    // 隐藏所有的内容区域
    var sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // 显示被点击的内容区域
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// 默认加载主页内容
document.addEventListener('DOMContentLoaded', function() {
    changeContent('home');
});
