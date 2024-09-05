// alert('hi there');

const colors = ['red','green','blue','yellow','blue','violet','purple','orange','indigo'];
const SQUARE_DEFAULT_COLOR = '#777'

const brushes = document.querySelectorAll('.btn.brush');
console.log(brushes);

const container = document.querySelector('.container');

const SQUARES = 500;

let SELECTED_BRUSH_COLOR = '';

brushes.forEach(brush=>{
    // console.log(brush.getAttribute('id'));
    brush.addEventListener('click',()=>{
        if(brush.getAttribute('id') === 'empty'){
            SELECTED_BRUSH_COLOR = '';
        }else{
            SELECTED_BRUSH_COLOR = brush.getAttribute('id');
        }
        
    })
})

for(let i=0;i<SQUARES;i++){
    const squareEl = document.createElement('div');
    squareEl.classList.add('square');
    container.appendChild(squareEl);
    
    squareEl.addEventListener('mouseover',()=>{
        console.log('mouseover');
        setColor(squareEl);
    })

    squareEl.addEventListener('mouseleave',()=>{
        console.log('mouseleave');
        removeColor(squareEl);
    })
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function setColor(squareEl){
    const randColor = SELECTED_BRUSH_COLOR? SELECTED_BRUSH_COLOR : getRandomColor();
    squareEl.style.backgroundColor = randColor
    squareEl.style.boxShadow = `0 2px 5px ${randColor} 0 5px 10px ${randColor}`
}

function removeColor(squareEl){
   squareEl.style.backgroundColor = SQUARE_DEFAULT_COLOR;
   squareEl.style.boxShadow = `0 2px 5px rgba(${SQUARE_DEFAULT_COLOR},0.2)`
}