// alert('hi there');
const likes = document.querySelector('#likes');
const favourite = document.querySelector('.favourite');

let count = 0;
let clicked = 0;

// For single click we use the 'click' event but for double click we use 'dblclick' event.
// There is one more way of adding the double click by just chcecking if the double click event was generated within 800milli seconds or lesser than that.
favourite.addEventListener('click',(e)=>{
   
    if(clicked === 0){
        clicked = new Date().getTime();
    }else{
        if((new Date().getTime() - clicked) < 800){
            showHeartRipple(e);
            clicked = 0;
        }else{
            clicked = new Date().getTime();
        }
    }
    
})

function showHeartRipple(e){
    count++;
   let favX = favourite.getBoundingClientRect().left;
   let favY = favourite.getBoundingClientRect().top;
   // Thus instead of clientBoundingRect, we can make use of target.offsetTop(Y) and target.offsetLeft(X) .
   console.log(e.clientX,e.clientY,favX ,favY,e.target.offsetTop, e.target.offsetLeft );

   let clickPosX = e.clientX - favX;
   let clickPosY = e.clientY - favY;

   console.log(clickPosX,clickPosY);
   let rippleEl = `<div id="ripple-heart">&#9829;</div>`;
   favourite.innerHTML = rippleEl;

   rippleEl = favourite.querySelector('#ripple-heart');
   rippleEl.style.top = `${clickPosY}px`;
   rippleEl.style.left = `${clickPosX}px`;
   likes.innerText = count;

   setTimeout(()=>{favourite.innerHTML = ''},1000);
}