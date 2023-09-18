"use strict";
const categores = async ()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    let data = await res.json();
    data = data.data;
   showCategory(data);
}
categores()
const showCategory = data =>{
    const tab = document.querySelector('#tab');
    data.forEach(data => {
        const button = document.createElement('button');
        button.setAttribute('class','bg-[#D3D3D3] py-[10px] px-[20px] rounded-md text-lg mx-4 my-4 active');
        button.setAttribute('onclick',`showItems('${data.category_id}')`);
        button.setAttribute('data-value',`${data.category_id}`);
        button.innerText = data.category;
        tab.appendChild(button);
    });
    const categoryBtn = document.querySelectorAll('.active');
    setActiveClass(categoryBtn)
    defaultActiveBtn(categoryBtn)
}
const showItems = async (categoryId)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    let data = await res.json();
    const status = data.status;
    data = data.data;
    const itemsDiv = document.querySelector('#items');
    const container = document.querySelector('#container');
    itemsDiv.innerHTML=''
    container.innerHTML=''
    if (status) {
        data.forEach(data=>{
            const div = document.createElement('div');
            div.innerHTML=`
            <div class="card bg-base-100 shadow-xl h-[350px]">
            <figure class="image relative"><img class="w-full" src="${data.thumbnail}" alt="" /><span id="videoDuration" class="bg-[#171717] p-1 rounded-md absolute text-white right-4 bottom-4">${data.others.posted_date ? secondToHourMinute(data.others.posted_date):""}</span></figure>
            <div class="card-body">
                <div class="flex justify-between text-left gap-[2%]">
                   <div class="w-[19%]"><img class=" rounded-[50%] w-[50px] h-[50px]" src=${data.authors[0].profile_picture}></div>
                    <div class="w-[79%]">
                        <h2 class="text-[#171717] text-base font-bold">${data.title}</h2>
                        <div class="flex items-center justify-start gap-2 my-2"><h3 class="text-sm opacity-75">'${data.authors[0].profile_name}'</h3> <img src=${data.authors[0].verified ?"fi_10629607.png" :""}></div>
                        <span id="views" class="text-sm opacity-75">${data.others.views} views</span>
                    </div>
                </div>
            </div>
          </div>
            `
            itemsDiv.appendChild(div)
        })
    }else{
        const div = document.createElement('div');
        div.innerHTML = `<div class="w-80 mx-auto">
        <img class="mx-auto" src="Icon.png" alt="">
        <h2 class="text-center text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>`
        container.appendChild(div)
    }
    function secondToHourMinute(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        let times = `${hours} hrs ${minutes} min ago`
        return times
    }
    videoDurations()
}
const SortBtn = document.querySelector('#SortBtn');
SortBtn.addEventListener('click', () => {
    const itemsDiv = document.querySelector('#items');
    const viewsList = document.querySelectorAll('#items #views');
    const viewsListArray = Array.from(viewsList);

    viewsListArray.sort((a, b) => {
        const aViews = parseInt(a.innerText.replace(' views', ''));
        const bViews = parseInt(b.innerText.replace(' views', ''));
        return bViews - aViews;
    });
    itemsDiv.innerHTML = '';
    viewsListArray.forEach(item => {
        const parentDiv = item.closest('.card');
        itemsDiv.appendChild(parentDiv);
    });
});

const defaultActiveBtn = (categoryBtn) => {
    categoryBtn[0].setAttribute('id', 'active');
    const defaultValue = categoryBtn[0].getAttribute('data-value');
    console.log(defaultValue);
    showItems(defaultValue)
};

const setActiveClass = (categoryBtn)=>{
    categoryBtn.forEach(button =>{
        button.addEventListener('click',()=>{
            categoryBtn.forEach(button=>{
                button.removeAttribute('id','active')
            })
            button.setAttribute('id','active');
        })
    })
}
const videoDurations = ()=>{
    const videoDuration = document.querySelectorAll('#videoDuration');
    videoDuration.forEach(video=>{
        (video.innerText ==="" || video.innerText ==="")?video.setAttribute('class','hidden'):"";
    })
}

    

