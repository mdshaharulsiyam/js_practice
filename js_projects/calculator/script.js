let AC = document.querySelector('.btn_AC');
let DE = document.querySelector('.btn_DE');
let buttons = document.querySelectorAll('.btn_value');
let calculatorscreen = document.querySelector('.screen');
let result = document.querySelector('.btn_eval');
buttons.forEach(button =>{
    let btnNumbers = "0";
    button.addEventListener('click', (e)=>{
        console.log(e.target.value)
        btnNumbers = e.target.value
        calculatorscreen.value += btnNumbers;
    })
})
AC.addEventListener('click', ()=>{
    calculatorscreen.value = '';
})
DE.addEventListener('click', ()=>{
    calculatorscreen.value = calculatorscreen.value.toString().slice(0,-1);
})

result.addEventListener('click', ()=>{
    calculatorscreen.value = eval(calculatorscreen.value);
})