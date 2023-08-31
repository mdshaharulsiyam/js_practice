let parentDiv = document.querySelector('.parent-div')
let searchBox = document.querySelector('#search-box')
let searchButton = document.querySelector('#searchButton')
const phonedata = async (searchId ='a') =>{
try {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchId}`);
    let data = await res.json();
    data = data.data
    // console.log(data.len)
 for (const datas of data) {
     // console.log(datas.brand)
     phonsDiv =  document.createElement('div')
     phonsDiv.innerHTML = `<div class="card w-96 bg-base-100 shadow-xl text-center p-5">
     <figure><img src="${datas.image}" /></figure>
     <div class="card-body">
         <h2 class="text-2xl">${datas.phone_name}</h2>
         <p>${datas.brand}</p>
         <div class="card-actions justify-center">
         <button class="btn" onclick="showdetails('${datas.slug}')">details</button>
         </div>
     </div>
 </div>`
 parentDiv.appendChild(phonsDiv)
 spinner(false)
//  if (datas.len) {
    
//  }
 }
} catch (error) {
    console.log('cant fetch data'+error)
    document.write('cant fetch data')
}
}
phonedata()
searchButton.addEventListener('click', ()=>{
    spinner(true)
    searchValue = searchBox.value;
    if (searchValue !='') {
        parentDiv.innerHTML = ''
        phonedata(searchValue)
    }else{
      alert('invalid input')
      spinner(false)
    }
})
const spinner = (isLoading)=>{
    const spiner = document.querySelector('#spiner')
    if (isLoading) {
        spiner.classList.remove('hidden')
    }else{
        spiner.classList.add('hidden')
    }
}
spinner(true)
const showdetails = async (modalid)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${modalid}`);
    const data = await res.json();
    const phone = data.data;

    showPhoneDetails(phone)
}
const showPhoneDetails = (phone) =>{
    const phoneName = document.getElementById('show-detail-phone-name');
    phoneName.innerText = phone.name;

    const showDetailContainer = document.getElementById('show-detail-container');

    showDetailContainer.innerHTML = `
        <img src="${phone.image}" alt="" />
        <p><span>Storage:</span>${phone?.mainFeatures?.storage}</p>
        <p><span>GPS:</span>${phone.others?.GPS || 'No GPS available'}</p>
        <p><span>GPS:</span>${phone.others?.GPS ? phone.others.GPS : 'No GPS available in this device'}</p>
    `
    show_details_modal.showModal();
}