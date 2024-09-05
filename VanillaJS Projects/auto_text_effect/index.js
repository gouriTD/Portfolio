// alert('hi there');

let textEl = document.querySelector('h3')
let text = textEl.innerText;

const speedEl = document.querySelector('#speed');
const insertEl = document.querySelector('#insert');
const insert_form = document.querySelector('#insert-form');

let index = 1;
let speedVal = 1;
let speed = 300/speedEl.value;

speedEl.addEventListener('input',(e)=>{
    speed = 300/speedEl.value;
})

insert_form.addEventListener('submit',(e)=>{
    console.log('inserted')
    e.preventDefault();

    if(insertEl.value && insertEl.value !==''){
        text = insertEl.value;
        insertEl.value = '';
        index = 1;
    }
    
})

showText();

function showText(){
    textEl.innerText = text.slice(0,index);
    index++;
    if(index > text.length){
        index = 1;
    }
    setTimeout(showText,speed);
}