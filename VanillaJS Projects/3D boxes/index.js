// alert('hi there');
const magicBtn = document.querySelector('.magic');
const boxContainer = document.querySelector('.boxContainer');

magicBtn.addEventListener('click',()=>{
    boxContainer.classList.toggle('big');
})

const createBoxes = ()=>{
    for (let i=0; i<4; i++){
        for(let j=0; j<4; j++){
            const boxEl = document.createElement('div');
            boxEl.classList.add('box');
            boxEl.style.backgroundPosition = `${-j*125}px ${-i*125}px`;
            boxContainer.appendChild(boxEl);
        }
    }
} 

createBoxes();