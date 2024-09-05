// alert('hi there');

const ratingContainer = document.querySelector('.rating-container');
const submitBtn = document.querySelector('.submit');
const rating_card = document.querySelector('.rating-card');

ratingContainer.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.parentNode.classList.toggle('selected')
})

submitBtn.addEventListener('click',()=>{
    // get the total no. of ratings which are selected.
    const rating = document.querySelectorAll('.rating.selected');
    console.log(rating.length);

    // Now remove the entire innerHTML.
    rating_card.innerHTML = '';

    //Construct a new card innerHTML.
    rating_card.innerHTML = `
        <h4>Thank You  🙏  for sharing your feedback</h4>
        <p>Your rating: ${rating.length}<p>
        <p>Looking forward to serve you better</p>
    `
})