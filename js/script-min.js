'use strict;'
let modalOpenBtn=document.querySelectorAll('.request_btn');let modalCloseBtn=document.querySelectorAll('.modal-close-btn');let modalWindow=document.querySelector('.request_modal');let modalForm=document.querySelector('.request_modal__container');let modalEnd=document.querySelector('.request_modal-end');let sendBtn=document.querySelector('.send_request-btn');modalOpenBtn.forEach((btn)=>{btn.addEventListener('click',()=>{modalWindow.classList.toggle('active')
modalForm.classList.toggle('active')
document.body.classList.toggle('scroll-lock')
if(btn.classList.contains('request_course')){sendBtn.setAttribute('data-course','true')}else{sendBtn.removeAttribute('data-course','true')}})})
modalCloseBtn.forEach((btn)=>{btn.addEventListener('click',()=>{modalWindow.classList.remove('active')
modalForm.classList.remove('active')
modalEnd.classList.remove('active')
document.body.classList.remove('scroll-lock')})});let phoneNum=document.querySelector('.phone-input');let leadName=document.querySelector('.name-input');let formInputs=document.querySelectorAll('.modal_input input')
let maskOptions={mask:'+ 998 00 000 00 00'};let mask=IMask(phoneNum,maskOptions);phoneNum.addEventListener('blur',()=>{if(phoneNum.value.length>18||phoneNum.value.length<18){phoneNum.style.border='solid red 1px'}else{phoneNum.style.border=''}});phoneNum.addEventListener('input',()=>{if(phoneNum.value.length==18){phoneNum.style.border=''}});leadName.addEventListener('blur',()=>{if(leadName.value.length<=3){leadName.style.border='solid red 1px'}});leadName.addEventListener('input',()=>{if(!isNaN(leadName.value)){leadName.style.border='solid red 1px'}else{leadName.style.border=''}});formInputs.forEach((input)=>{input.addEventListener('input',()=>{if(isNaN(leadName.value)&&leadName.value.length>3&&phoneNum.value.length==18){sendBtn.removeAttribute('disabled')}else{sendBtn.setAttribute('disabled','disabled')}
if(!sendBtn.hasAttribute('disabled')){sendBtn.classList.remove('disabled')}})})
const telegramApi=`https://api.telegram.org/`
const tokenBot='bot1964560094:AAG0CHp7EKcaN0QDb9Ki-mSZ1lOOaJg1xzM/sendMessage'
let sendMessage;let sendMessageValue;function sendForm(){if(sendBtn.hasAttribute('data-course','true')){sendMessageValue=`<b> Заяка на индивидуальный курс 💰:</b> \n\n`
sendMessageValue+=`Имя: ${leadName.value}\n`
sendMessageValue+=`Номер телефона: ${phoneNum.value}\n\n`
sendMessageValue+=`<b> Клиент заполнил форму на сайте </b>`}else{sendMessageValue=`<b> Заяка на консультацию 💰:</b> \n\n`
sendMessageValue+=`Имя: ${leadName.value}\n`
sendMessageValue+=`Номер телефона: ${phoneNum.value}\n\n`
sendMessageValue+=`<b>Клиент заполнил форму на сайте</b>`}
sendMessage=`${telegramApi}`+`${tokenBot}`;fetch(sendMessage,{method:'POST',body:JSON.stringify({chat_id:-1001552086503,text:`${sendMessageValue}`,parse_mode:'HTML',}),cache:'no-cache',headers:{'Content-Type':'application/json'}})
modalForm.classList.remove('active')
modalEnd.classList.toggle('active')}
sendBtn.addEventListener('click',()=>{sendForm()
return leadName.value='',phoneNum.value=''})
let acccordionBtn=document.querySelectorAll('.accordion_btn')
acccordionBtn.forEach((btn)=>{btn.addEventListener('click',()=>{btn.classList.toggle('drop');var dropElem=btn.nextElementSibling;if(dropElem.style.maxHeight){dropElem.style.maxHeight=null}else{dropElem.style.maxHeight=dropElem.scrollHeight+"px"}})})
let animItems=document.querySelectorAll('.anim_item')
if(animItems.length>0){window.addEventListener('scroll',animOnScroll)
function animOnScroll(){for(let index=0;index<animItems.length;index++){const animItem=animItems[index];const animItemHeight=animItem.offsetHeight;const animItemoffset=offset(animItem).top;const animStart=4;let animItemPoint=window.innerHeight-animItemHeight/animStart;if(animItemHeight>window.innerHeigh){animItemPoint=window.innerHeight-window.innerHeight/animStart}
if((pageYOffset>animItemoffset-animItemPoint)&&pageYOffset<(animItemoffset+animItemHeight)){animItem.classList.add('active')}else{if(!animItem.classList.contains('remove_anim')){animItem.classList.remove('active')}}}}
function offset(el){const rect=el.getBoundingClientRect(),scrollLeft=window.pageXOffset||document.documentElement.scrollLeft,scrollTop=window.pageYOffset||document.documentElement.scrollTop;return{top:rect.top+scrollTop,left:rect.left+scrollLeft}}
setTimeout(()=>{animOnScroll()},500)}