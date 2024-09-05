// alert('hi there');

const buttons = document.querySelectorAll('.btn');
const faqs = document.querySelectorAll('.faq');


buttons.forEach((btn,index)=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active')
        // faqs[index].classList.toggle('active')
        
        // The toggle function available with the 

        //classList gives the same effect as done below.
        // if(faqs[index].classList.contains('active')){
        //     faqs[index].classList.remove('active')
        // } else {
        //     faqs[index].classList.add('active')
        // }
        
    })
})