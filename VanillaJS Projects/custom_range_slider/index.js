// we need to display the slider value as and when it is scrolled.

const inputRange = document.querySelector('#range');
const label = document.querySelector('label');

// All input elements can listen on the input event.
inputRange.addEventListener('input',(e)=>{
    const value = e.target.value;
    label.innerText = value;

    // Now lets try getting the width of the track, initially it will be in px value then we will remove the px content.
    let track_width = getComputedStyle(e.target).getPropertyValue('width');

    const track_max_range = inputRange.max;
    
    track_width = track_width.slice(0,track_width.length -2);

    // Now lets calculate the steps.
    let left = (track_width/track_max_range)*value;

    console.log(track_width,track_max_range,top);

    // When we scroll we see that the left value when going to extreme left deviates by +10px, hence to adjust the left value we need to do a scaling from 10 to 0 value.
    left = left + scale(left,0,100,10,0);
    label.style.left = `${left}px ` ;

    //we can also adjust the backdrop-blurriness as and when the slider slides.
    document.body.style.backdropFilter = `blur(${scale(value,0,100,20,0)}px)` 
})

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}