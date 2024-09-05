// alert('hi there');

const imageArray = ['beaches','flowers','fog','sunset','trees'];

var imageSelected = 0;
const LEFTCLICK = 0;
const RIGHTCLICK = 1;

let indicators = document.querySelectorAll('.indicator');

var selectors = document.querySelectorAll('.selector');
selectors.forEach((selector,selectorindex)=>{
    
    selector.addEventListener('click',()=>{

        clickAnimation(selector);
        // identify the click and then either increament or decreament the arrayIndex.
        if((RIGHTCLICK === selectorindex) && (imageSelected < imageArray.length-1)){
            imageSelected+=1;
        } else if ((LEFTCLICK === selectorindex) && (imageSelected !== 0)){
            imageSelected -= 1;
        }
        // Show the left/right selector to click images.
        if(imageSelected > 0 ){
            setTimeout(()=>{
                document.querySelector('.selector.left').style.visibility = 'visible';
                document.querySelector('.selector.right').style.visibility = 'visible';
            },30)
               
        } else {
            setTimeout(()=>{
                document.querySelector('.selector.left').style.visibility = 'hidden';
                document.querySelector('.selector.right').style.visibility = 'visible';
            },30)
            
        }
        

        // Hide the right selector once the image array is exhausted.
        if(imageSelected === imageArray.length-1){
            setTimeout(()=>{
                document.querySelector('.selector.right').style.visibility = 'hidden';
            },30)
           
        } 

        var imgSrc = './images/'+imageArray[imageSelected]+'.avif';
        document.querySelector('.card').style.backgroundImage = "url('" +imgSrc+ "')";

        removeActiveFromAll();
        console.log(document.querySelectorAll('.indicator')[imageSelected].classList);
        document.querySelectorAll('.indicator')[imageSelected].classList.add('active');
    })
})

function clickAnimation (selector){
    selector.classList.add('selected');
        setTimeout(()=>{
            selector.classList.remove('selected');
        },30);
}
// Removing all the active class from the indicator divs.
function removeActiveFromAll(){
    indicators.forEach((indicator)=>{
        indicator.classList.remove('active');
    })
}