const notification = document.querySelector('#notification_container');
const button = document.querySelectorAll('#button');
const massage = {
    success : 'your request is succes',
    faield : 'your request is failed'
}
let notificationCloseBtn;
button.forEach((btn)=>{
    btn.addEventListener('click',()=>{
       const content = btn.textContent;
       let li = document.createElement('li')
        li.innerHTML = `<div><p>${massage[content]}</p><i class="fa-regular fa-circle-xmark"></i></div></i>`;
        notification.appendChild(li);
        setTimeout(() => {
            notification.removeChild(li)
        }, 3500);
        notificationCloseBtn = document.querySelectorAll('#notificationCloseBtn');
    })
});

notification.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-circle-xmark')) {
        const selectedItem = e.target.closest('li');
        notification.removeChild(selectedItem);
        console.log('btn clicked')
    }
})
