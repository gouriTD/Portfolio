// alert('hi there');

let left_split = document.querySelector('.split.left');
let right_split = document.querySelector('.split.right');

left_split.addEventListener('mouseover',()=>{
    console.log('left hover');
    left_split.style.width = `75%`;
    right_split.style.width = `25%`;
});

right_split.addEventListener('mouseover',()=>{
    console.log('right hover');
    right_split.style.width = "75%";
    left_split.style.width = "25%";
})
