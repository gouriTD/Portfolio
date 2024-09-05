let loading_text = document.querySelector('.loading-text');
let bg_image = document.querySelector('.bg-image');
let count = 0;
let interval = setInterval(load, 30);

function load () {
    count++;
    loading_text.innerText = `${count}%`
    if(count > 99){
        clearInterval(interval);
       
        
    }
    loading_text.style.opacity = scale(count, 0, 100, 1, 0);
    bg_image.style.filter = `blur(${scale(count,0,100,30,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}