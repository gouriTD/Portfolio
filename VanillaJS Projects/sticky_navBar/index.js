// alert('hi there');

const navBar = document.querySelector('.nav');

window.addEventListener('scroll',()=>{
    // Scroll value gives the y positon when the window is getting scrolled.
    if(scrollY > navBar.clientHeight + 200){
        navBar.classList.add('active')
    }else{
        navBar.classList.remove('active')
    }
})