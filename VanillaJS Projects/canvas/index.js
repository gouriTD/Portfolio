// alert('hi there');

// For canvas api to work properly and to draw at the particular mouse click, it is important to set the width and height of our canvas to specific pixel values, just specifyinh width and height in css would mention the html the size to which the canvas would be displayed and not the actual size of the canvas set. Resulting the canvas would appear stretched and hence would result in improper pixel positioning.

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const decreamentBtn = document.querySelector('#decreamentBtn');
const increamentBtn = document.querySelector('#increamentBtn');
const pensize = document.querySelector('#size');
const mycolor = document.querySelector('#mycolor');
const clear = document.querySelector('#clear');

const MAX_SIZE = 50;
const MIN_SIZE = 2;
const increament = 2;
let size = MIN_SIZE;
let fillcolor = 'red';

decreamentBtn.addEventListener('click',()=>{
    size -= increament;

    if(size <= 0){
        size = MIN_SIZE;
    }

    updateSize()
})

increamentBtn.addEventListener('click',()=>{
    size += increament;

    if(size > MAX_SIZE){
        size = MAX_SIZE;
    }

    updateSize()
})

mycolor.addEventListener('change',(e)=>{
    console.log(e.target.value);
    fillcolor = `${e.target.value}`
})

clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})





let isMousePressed = false;

let x1,x2,y1,y2;

drawCircle(20,20);

canvas.addEventListener('mousedown',(ev)=>{
    isMousePressed = true;
    x1 = ev.offsetX;
    y1 = ev.offsetY;

    console.log(x1,y1);

    
    drawCircle(x1,y1);
    drawLine(x1,y1,x2,y2)

})

canvas.addEventListener('mouseup',(ev)=>{
    isMousePressed = false;
    x1 = undefined;
    y1 = undefined;
    x2 = undefined;
    y2 = undefined;
})

canvas.addEventListener('mousemove',(ev)=>{
    if(isMousePressed){
        x2 = ev.offsetX;
        y2 = ev.offsetY;

        drawCircle(x1,y1);
        drawLine(x1,y1,x2,y2)

        x1 = x2;
        y1 = y2;

    }
})



function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = fillcolor;
    ctx.fill();
}

function drawLine(x1,y1, x2, y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);

    ctx.strokeStyle = fillcolor;
    ctx.lineWidth = 2 * size;
    ctx.stroke();
}

function updateSize(){
    pensize.innerText = `${size}`;
}
