var btns = document.querySelector('.btn')
console.log(btns);
btns.addEventListener('click',()=>{
    alert('okey')
    names = prompt('name')
    confirm('your name '+' '+names)
});