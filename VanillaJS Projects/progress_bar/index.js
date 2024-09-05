let progress_bar = document.querySelector('.progress-bar');
let progress_value = document.querySelector('.progress-value');

let interval = setInterval(updateProgress, 100);
let width = 0;
const MAX_WIDTH = 250;
function updateProgress(){
    

    if(width === MAX_WIDTH){
        clearInterval(interval);
        progress_value.style.color = 'lightgreen';
    }
    progress_bar.style.width = `${width}px`
    progress_value.innerText = `${scale(width,0,250,0,100)}%`;
    width+=5;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}