let add = document.getElementById('add')
let quantity = document.getElementById('quantity');
let brand = document.getElementById('brand');
let itemName = document.getElementById('itemName');
add.addEventListener('click',()=>{
   let cart = localstorageGetItem()
   console.log(cart)
   let itames = '';
   if(itemName.value != ''){
    itames = itemName.value
   }else{
    alert('invalid input')
    return
   }
   let brands ='';
   if (brand.value != '') {
    brands = brand.value
   }else{
    alert('invalid input')
    return
   }
   let quantitys ='';
   if (quantity.value != '') {
    quantitys = quantity.value
   }else{
    alert('invalid input')
    return
   }
    if(cart.hasOwnProperty(itames)){
        alert('item already have');
        return
    }else{
        itemsobjcet = cart[itames]= {}
        itemsobjcet.brand = brands
        itemsobjcet.quantity = quantitys
        setTolocalstorage(JSON.stringify(cart))
    }
    itemName.value =''
    brand.value =''
    quantity.value =''
    cart = localstorageGetItem()
})
const localstorageGetItem = ()=>{
    let cart = {}
    let storedCart = localStorage.getItem('cart');
    addTocart(storedCart)
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart
}
const setTolocalstorage = cart =>{
    localStorage.setItem('cart',cart)
}
const addTocart = ()=>{
    let cartDiv = document.querySelector('#cart')
    cartDiv.innerHTML = ''
    storedCart = localStorage.getItem('cart')
    cart = JSON.parse(storedCart);
    for(const key in cart) {
       let li = document.createElement('li');
       console.log(cart[key].brand)
       li.innerText = `${key} brand: ${cart[key].brand} quantity: ${cart[key].quantity} `
       cartDiv.appendChild(li)
    }
}
addTocart()