const password = document.querySelector('#password');
const background = document.querySelector('.background');

password.addEventListener('input',(e)=>{
    let passLength = e.target.value.length;
    console.log(e.target.value,passLength);

    background.style.filter = `blur(${20 - passLength*2}px)`
})