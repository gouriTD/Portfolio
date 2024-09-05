// alert('hi there');

const btn = document.querySelector('.btn');
const needle = document.querySelector('.needle');

btn.addEventListener('click',()=>{
    const randomVal = generateRandom();
    let newAngle = Math.floor(scale(randomVal,0,100,-90,90));

    console.log(newAngle);
    needle.style.transform = `translate(-50%, -100%) rotate(${newAngle}deg)`;

})

function generateRandom(){
    return Math.floor(Math.random() * 100) + 1;
};

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

