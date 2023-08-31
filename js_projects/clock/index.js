let secounds = document.querySelector('.time_wrapper_S');
let minutes = document.querySelector('.time_wrapper_M');
let hours = document.querySelector('.time_wrapper_H');
let dsecound = document.querySelector('.dsecound');
let dminute = document.querySelector('.dminute');
let dhour = document.querySelector('.dhour');
let milisecounds = document.querySelector('.dmiliscound')
setInterval(function() {
    let d = new Date();
    let secound = d.getSeconds()*6;
    let minute = d.getMinutes()*6;
    let hour = d.getHours()*30 +(minute/12);
    secounds.style.transform = "rotate("+ secound +"deg)"
    minutes.style.transform = "rotate("+ minute +"deg)"
    hours.style.transform = "rotate("+ hour +"deg)"
})
setInterval(function(){
    let d = new Date();
    let secound = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    let milisecound = d.getMilliseconds();
    dhour.innerText = hour;
    dminute.innerText = minute;
    dsecound.innerText = secound;
    milisecounds.innerText = milisecound;
});

let clockSwitch = document.querySelector('#btn');
let clockSwitch1 = document.querySelector('#btn2');
let analogs = document.querySelector('.analog_clock');
let digitals = document.querySelector('.digital_clock');
clockSwitch.addEventListener('click',()=>{
    analogs.style.top = "50%"
    digitals.style.top = "200%"
    clockSwitch.style.display = "none"
    clockSwitch1.style.display = "block"
    


})
clockSwitch1.addEventListener('click',()=>{
    analogs.style.top = "-200%"
    digitals.style.top = "50%"
    clockSwitch1.style.display = "none"
    clockSwitch.style.display = "block"
})
