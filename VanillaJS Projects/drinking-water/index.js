// alert('hi there');

const water_cans = document.querySelectorAll('.can');
const filled_glass = document.querySelector('.filled');
const unfilled_glass = document.querySelector('.unfilled');
const glass = document.querySelector('.glass');

water_cans.forEach((can,index) => {
    can.addEventListener('click',()=>{
        clearAllActive();
        let count = 0
        while(count <= index){
            water_cans[count].classList.add('active');
            count++;
        }
        glass.classList.add('active');
        

        filled_glass.style.width = '100%'
        unfilled_glass.style.width = '100%'

        let filled = (count * 250)/2000;
        filled_glass.style.height = `${filled * 100}%`
        filled_glass.innerHTML = `${2 * filled}L <br><span>remained`
        unfilled_glass.style.height = `${100-(filled * 100)}%`

        if(2 - (2 * filled) === 0){
            unfilled_glass.innerHTML = '';
        }else{
            unfilled_glass.innerHTML = `${2 - (2 * filled)}L <br><span>remained`
        }
        
        filled_glass.innerText = `${filled * 100}%`
    })
})

function clearAllActive(){
    water_cans.forEach(el=>{
        el.classList.remove('active');
    })
}

