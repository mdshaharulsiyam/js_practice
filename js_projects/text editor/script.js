textaria = document.querySelector('#textarea');
boldBtn = document.querySelector('#btn-b');
boldBtn.addEventListener('click',function () {
if (textaria.style.fontWeight == '400') {
    textaria.style.fontWeight = '800';
    boldBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
}else{
    textaria.style.fontWeight = '400';
    boldBtn.style.boxShadow = '';
}
})
italicBtn=document.querySelector('#btn-i');
italicBtn.addEventListener('click',()=>{
    if (textaria.style.fontStyle == 'italic') {
        textaria.style.fontStyle = 'normal';
        italicBtn.style.boxShadow = '';
    }else{
        textaria.style.fontStyle = 'italic';
        italicBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
    }
})
underlineBtn = document.querySelector('#btn-u');
underlineBtn.addEventListener('click',()=>{
    if(textaria.style.textDecoration == 'underline'){
        textaria.style.textDecoration = 'none';
        underlineBtn.style.boxShadow = '';
    }else{
        textaria.style.textDecoration = 'underline';
        underlineBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
    }
})
allignLeftBtn = document.querySelector('#align-left');
alligncenterBtn = document.querySelector('#align-center');
allignrightBtn = document.querySelector('#align-right');
allignLeftBtn.addEventListener('click',()=>{
    textaria.style.textAlign = 'left'
    allignLeftBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
    alligncenterBtn.style.boxShadow = '';
    allignrightBtn.style.boxShadow = '';
})
alligncenterBtn.addEventListener('click',()=>{
    textaria.style.textAlign = 'center'
    allignLeftBtn.style.boxShadow = '';
    alligncenterBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
    allignrightBtn.style.boxShadow = '';
})
allignrightBtn.addEventListener('click',()=>{
    textaria.style.textAlign = 'right'
    allignLeftBtn.style.boxShadow = '';
    alligncenterBtn.style.boxShadow = '';
    allignrightBtn.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';
});
color = document.querySelector('#color');
color.addEventListener('input',(e)=>{
 colors = e.target.value;
 textaria.style.color = `${colors}`
})