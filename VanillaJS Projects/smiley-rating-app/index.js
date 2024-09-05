// alert('hi there');
// In this project we will learn how event bubbling works.
// Ideally we apply listening of event listeners on a particular element, but we can also listen for events on a given container. by adding event listeners on that particular container, and then through parentNode try to add the necessary class.This technique is called event bubbling.
// parentNode : gives the parent node element.
// children : gives the array of children inside the parentNode. 

const rating_container = document.querySelector('.rating-container');
const reviewBtn = document.querySelector('#review');
const ratingCard = document.querySelector('.rating-card')
let rating_selected = 'Satisfied'

rating_container.addEventListener('click',(e)=>{
   
    clearRating();
    const parent = e.target.parentNode;
    const children = parent.children;
    parent.classList.add('active');
    rating_selected = children[children.length-1].innerText;
    console.log(rating_selected) ;
})

function clearRating(){
    const ratings = document.querySelectorAll('.rating');
    ratings.forEach(rating=>rating.classList.remove('active'))
}

reviewBtn.addEventListener('click',()=>{
    console.log(rating_selected);

    ratingCard.innerHTML = `
    <h3>Thank You  🙏  for sharing your feedback</h3>
    <p>Your rating: <strong>${rating_selected}</strong> </br>Looking forward to serve you better<p>
`;
})