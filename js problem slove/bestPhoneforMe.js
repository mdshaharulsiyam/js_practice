let phones = [
    {name:'iphone', price:90000,camera:12,},
    {name:'oppo', price:30000,camera:48,},
    {name:'xiaomi', price:40000,camera:48,},
    {name:'vivo', price:33000,camera:48},
    {name:'htc', price:50000,camera:12,}
];
mybuget = 45000;
bestPhoneForMe = (yourbuget, ...phones)=>{
    bestPhone = [];
    lowestPrice = phones[0].price
    for (let i = 0; i < phones.length; i++) {
        phone = phones[i]
        if (phone.price<lowestPrice) {
            lowestPrice = phone.price
        }
        
    }
    for (let i = 0; i < phones.length; i++) {
        phone = phones[i];
        if(lowestPrice < yourbuget) {
            if(phone.price>30000 && phone.price<50000 && phone.camera>=48) {
            bestPhone.push(phone);
              }
             }else{
                bestPhone.push('there i sno afortable phone for you');
             }
        
    }
 return bestPhone;
}
iWillBuy = bestPhoneForMe(mybuget, ...phones);
console.log(iWillBuy);
// bestPhoneforMe.js