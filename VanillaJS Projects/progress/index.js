let circles = document.querySelectorAll('.circle');
let prev = document.querySelector('.btn.prev');
let next = document.querySelector('.btn.next');
let progress = document.querySelector('.progress-line');

let currentActiveState = 1;
prev.addEventListener('click',()=>{
    currentActiveState -= 1;
    if(currentActiveState < 1){
        currentActiveState = 1;
    } 

    updateProgress();
})

next.addEventListener('click',()=>{
    currentActiveState += 1;
    if(currentActiveState > circles.length){
        currentActiveState = circles.length;
    } 

    updateProgress();
})

function updateProgress(){

    /**
     * 1) Make both the buttons as enabled if the currentActiveState is between 1 and length.
     * 2) Disable the next button if all the circles are active.
     * 3) Disable the prev button if we again reach the initial state.
     */
    if(currentActiveState >  1 && currentActiveState < circles.length ){
        prev.disabled = false;
        next.disabled = false;
    } else if(currentActiveState === circles.length){
        next.disabled = true;
    } else {
        prev.disabled = true;
    }

    /** Make the circles active or inactive depending upon state of click. */
    circles.forEach((circle,idx)=>{
        if (idx < currentActiveState){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    /** Update the progressbar. */
    let activeCircles = document.querySelectorAll('.active');
    let progress_width = (activeCircles.length - 1)/(circles.length - 1) * 100;
    progress.style.width = progress_width+'%';

}