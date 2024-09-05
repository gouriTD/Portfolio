// alert('hi there');

const Days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const Months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const html = document.querySelector('html');
const btn = document.querySelector('.btn');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const datetime = document.querySelector('.time');
const presetdate = document.querySelector('.date');

const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    // if you need an integer value use Math.floor or Math.ceil here
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}

setTime();

btn.addEventListener('click',()=>{
   
    html.classList.toggle('dark')

    if(html.classList.contains('dark')){
        btn.innerHTML = 'Light mode'
    }else{
        btn.innerHTML = 'Dark mode'
    }
})

setInterval(setTime,1000);


function setTime(){
    const date = new Date();
    const time = date.getTime();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const currentdate = date.getDate();

    // As we are dealing with 12hr format.
    let clockHrs = hours % 12;
    console.log(time);
    console.log(clockHrs);


    // Setting different clock needles;
    hour.style.transform = `translateY(-50%) rotate(${Math.floor(scale(clockHrs,[0,12],[0,360]))}deg)`
    
    minute.style.transform = `translateY(-50%) rotate(${Math.floor(scale(minutes,[0,59],[0,360]))}deg)`

    second.style.transform = `translateY(-50%) rotate(${Math.floor(scale(seconds,[0,59],[0,360]))}deg)`

    datetime.innerHTML = `${clockHrs}:${minutes<10?`0${minutes}`:minutes} ${hours > 12? `PM` : `AM`}`;
    presetdate.innerHTML = `${Days[day]}, ${Months[month]} <span>${currentdate}</span>`
    
}