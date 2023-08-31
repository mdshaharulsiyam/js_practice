// console.log('script linked sucsessfully')
let butons = document.querySelectorAll('.icon');
let tabParent = document.querySelector('.tab-parent');
let tabs = document.querySelectorAll('#tabs');
let isDragging = false;
let handelicon = ()=>{
 let scrollVal = tabParent.scrollLeft;
 let maxscrollVal = tabParent.scrollWidth - tabParent.clientWidth
 butons[0].style.display = (scrollVal > 0 ) ? 'block':'none'
 butons[1].style.display = (scrollVal < maxscrollVal ) ? 'block':'none'
}

butons.forEach(buton =>{
    buton.addEventListener('click',(e)=>{
     const  id =  buton.getAttribute('id');
     tabParent.scrollLeft += (id === 'left') ? -350 : 350;
     setTimeout(() => {
        handelicon()
     }, 600);
    })
})
tabParent.addEventListener('mousedown',()=>{
    isDragging = true;
    tabParent.style.cursor = 'grabbing'
})
document.addEventListener('mouseup',()=>{
    isDragging = false;
    tabParent.style.cursor = ''
    tabParent.classList.remove('scrollBehave')
})
tabParent.addEventListener('mousemove',(e)=>{
    if (!isDragging) return;
        tabParent.classList.add('scrollBehave')
        tabParent.scrollLeft -= e.movementX
        handelicon()
        
})
tabs.forEach(tab =>{
    tab.addEventListener('click',(e)=>{
        tabParent.querySelector('.active').classList.remove('active');
        tab.classList.add('active')
    })
})