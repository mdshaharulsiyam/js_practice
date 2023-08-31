
const catagorydata = async ()=>{
try {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`);
    let data = await res.json();
    data = data.data.news_category;
    showCatagory(data);
} catch (error) {
    document.getElementById('catagory').innerText = `can't fetch data`
    console.log(error)
}

}
catagorydata()
const showCatagory = (data) =>{
    catagory = document.getElementById('catagory');
    for (const datas of data) {
        li = document.createElement('li');
        // catagory.innerHTML = `<li id="catagores" style="display: none;">${datas.category_name}</li>`
        li.setAttribute('id','catagores')
        li.setAttribute('onclick',`showDataOfCurrentData('${datas.category_id}')`)
        li.innerText = datas.category_name;
        catagory.appendChild(li)
     }
     pagination()
}
    const pagination = () =>{
        const itemperpage = 3;
        let items = document.querySelectorAll('#catagores')
        const pagecontainer = document.querySelector('#pages');
        const totalpage = Math.ceil(items.length / itemperpage)
        // console.log(totalpage)
        for (let i = 0; i < totalpage; i++) {
            let pagebutton = document.createElement('button')
            pagebutton.setAttribute('id','pagebutton')
            pagebutton.innerText= i+1;
            pagecontainer.appendChild(pagebutton)
            pagebutton.addEventListener('click',()=>{
                showpage(i)
            })
            
        }
        const showpage = (pagenumber)=>{
            const startindex = itemperpage * pagenumber;
            const endindex = startindex + itemperpage;
            // console.log(items)
            items.forEach((item,index)=>{
                if (index >=startindex && index < endindex) {
                    item.style.display = 'inline-block';
                }else{
                    item.style.display = 'none';
                }
            })
        }
        showpage(0)

    }
    const showDataOfCurrentData = async(categoryId)=>{
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
        let data = await res.json()
        data = data.data
        news = document.querySelector('.parent-div')
        news.innerHTML = ''
        for (const datas of data) {
            // console.log(datas._id)
            div = document.createElement('div')
            div.setAttribute('class','text-left p-6 bg-[#E1F0F0] news_div cursor-pointer')
            div.setAttribute('onclick',`showModal('${datas._id}')`)
            div.innerHTML = `
            <img src="${datas?.image_url}" alt="">
            <h2 class="text-xl">${datas?.title.slice(0,45)}...</h2>
            <h2>published date :${datas.author.published_date}</h2>
            <span>total view : ${datas.total_view ?datas.total_view:"no views"}</span>
            <img class="author" src="${datas?.author?.img}" alt="">
            <h1>${datas.author.name}</h1>
            
            `
            news.appendChild(div)
        }
       }
       showDataOfCurrentData('08')
       const showModal = async (id)=>{
        const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        let data = await res.json()
        data = data.data
        console.log(data[0])
        let modalDiv = document.querySelector('.modalItem');
        let modalparent = document.querySelector('.modalDiv');
        modalDiv.innerHTML= '';
        modalparent.addEventListener('click', ()=>{
            modalparent.style.top = '-9999999999px'
        })

        let div = document.createElement('div');
        div.innerHTML=`
        <img class="w-full" src="${data[0].thumbnail_url}" alt="image">
        <h2>${data[0].title}</h2>
        <p>${data[0].details}</p>
        
        `
        modalDiv.appendChild(div)
        modalparent.style.top = '30px'
       }
    // pagination()
// }, 200);

// const showpage = (pagenumber)=>{
//     const startindex = itemperpage * pagenumber;
//     console.log(startindex)
// }
// pagination()

// {
//     API Links

// All News Category

// URL: https://openapi.programming-hero.com/api/news/categories



// All news in a Category

// URL Format: https://openapi.programming-hero.com/api/news/category/{category_id}



// Example: https://openapi.programming-hero.com/api/news/category/01



// News detail URL:

// URL Format: https://openapi.programming-hero.com/api/news/{news_id}



// Example: https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a



// Missing Data:

// Here, the total view and author name are null
// }