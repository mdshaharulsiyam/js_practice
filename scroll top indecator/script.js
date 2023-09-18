const scrollIndicator = document.querySelector('.scroll-indicator');
const scrollableContent = document.querySelector('.container');

scrollableContent.addEventListener('scroll', () => {
    const scrollTop = scrollableContent.scrollTop;
    const scrollHeight = scrollableContent.scrollHeight;
    const clientHeight = scrollableContent.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    scrollIndicator.style.width = scrollPercentage + '%';
});
