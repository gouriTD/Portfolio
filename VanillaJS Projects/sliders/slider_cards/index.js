// alert('hi there');
var panels = document.querySelectorAll('.panel');
console.log(panels);

// for(var i=0; i< panels.length; i++){
//     document.querySelectorAll('.panel')[i].addEventListener('click',function(){
//     var current = document.getElementsByClassName("active");
//     // current[0].className = current[0].className.replace(" active", "");
//     // this.className += " active";
//     current[0].classList.remove('active');
//     this.classList.add('active');
//     })
// }

// Lets do this with foreach and arrow function.
panels.forEach(panel=>{
    panel.addEventListener('click', ()=>{
        removeClassNameForAll();
        panel.classList.add('active');
    })
})


function removeClassNameForAll(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}