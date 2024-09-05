// alert('hi there');
//The count-down timer follows.
const counters = document.querySelectorAll('.numbers > div');
const carousel = document.querySelector('.carousel');
const counter_container = document.querySelector('.counter');
console.log(counters);
const final = document.querySelector('.final');
//The Carousel implementation follows.
const images = document.querySelectorAll('.image')
console.log("***"+images.length);

let index = 0

const prev = document.querySelector('.left');
const next = document.querySelector('.right');
const replay = document.querySelector('.replay');
const imgContainer = document.querySelector('.image-container');
const imgWidth = 500;
console.log("!!!"+imgWidth);

prev.addEventListener('click',()=>{
    console.log('prev clicked');
    index--;
    changeImage()
    
});

next.addEventListener('click',()=>{
    console.log('next clicked');
    index++;
    changeImage()
});

replay.addEventListener('click',()=>{
    final.classList.remove('show');
    // final.classList.add('hidden');
    carousel.classList.add('hidden');
    resetCounter();
})

function resetCounter(){
    counter_container.classList.remove('hide');
    counters.forEach((count,idx)=>{
        count.className='';
    })
    counters[0].classList.add('in');
}

//self carousel animation.
let interval=setInterval(run,2000);
function run() {
    if(carousel.classList.contains('hidden')){
        return;
    }
    index++;
    changeImage();
}

function reset(){
    clearInterval(interval);
    interval=setInterval(run,2000);
}

function changeImage(){
    if(index < 0){
        index = images.length - 1;
    } else if(index > images.length-1){
        index = 0
    }
    console.log('image-index',index);
    imgContainer.style.transform = `translateX(-${imgWidth * index}px)`
    reset();
}

counters.forEach((count,idx)=>{
    if(idx === 0){
        count.classList.add('in');
    }
    count.addEventListener('animationend',(e)=>{
        if(e.animationName === 'AnimIn' && idx !== counters.length-1){
            count.classList.remove('in');
            count.classList.add('out');
        }else if(e.animationName === 'AnimOut' && count.nextElementSibling){
            (count.nextElementSibling).classList.add('in')
        }else /*if(e.animationName === 'AnimOut' && idx === (counters.length -1))*/
        {
            counter_container.classList.add('hide');
            // final.classList.remove('hidden');
            
            setTimeout(()=>{
                carousel.classList.remove('hidden');
                carousel.classList.add('show');
                final.classList.add('show');
            },500)
            
        }
    })
})

// //The Carousel implementation follows.
// const images = document.querySelectorAll('.image')
// console.log(images.length);

// let index = 0

// const prev = document.querySelector('.left');
// const next = document.querySelector('.right');
// const imgContainer = document.querySelector('.image-container');
// const imgWidth = (document.querySelector('.image.one')).offsetWidth
// console.log(imgWidth);

// prev.addEventListener('click',()=>{
//     index--;
//     changeImage()
// });

// next.addEventListener('click',()=>{
//     index++;
//     changeImage()
// });

// function changeImage(){
//     if(index < 0){
//         index = images.length - 1;
//     } else if(index > images.length-1){
//         index = 0
//     }

//     imgContainer.style.transform = `translateX(-${imgWidth * index}px)`
//     reset();
// }

// //self carousel animation.
// let interval=setInterval(run,2000);
// function run() {
//     index++;
//     changeImage();
// }

// function reset(){
//     clearInterval(interval);
//     interval=setInterval(run,2000);
// }
