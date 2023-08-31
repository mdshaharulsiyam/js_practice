console.log('script file linked');
let slider = document.querySelector('.slider')
let icons = document.querySelectorAll('.icon')
let slider_parent = document.querySelector('.slider_parent')

let isMousedown = false;
let iconchacker = ()=>{
    let scrolVal = slider.scrollLeft;
    let maxscrollVal = slider.scrollWidth - slider.clientWidth;
    icons[0].style.display = (scrolVal > 0) ? 'block':'none'
    icons[1].style.display = (scrolVal >= maxscrollVal) ? 'none':'block'
}
icons.forEach(icon =>{
    icon.addEventListener('click',()=>{
      id = icon.getAttribute('id');
    slider.scrollLeft += (id === 'left')? -600:600;
    setTimeout(() => {
        iconchacker()
    }, 600);
    })
})

slider.addEventListener('mousedown',()=>{
    isMousedown = true;
    slider.style.cursor = 'grabbing';
})
document.addEventListener('mouseup',()=>{
    isMousedown = false;
    slider.style.cursor = '';
    slider.classList.add('scrollBehave');
})
slider.addEventListener('mousemove',(e)=>{
    if (!isMousedown) return;
    slider.scrollLeft -= e.movementX;
    slider.classList.remove('scrollBehave');
    iconchacker()
})