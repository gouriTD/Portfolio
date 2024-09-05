// alert('hi there');

const codes = document.querySelectorAll('.code')
codes[0].focus();

let verifyCode = '';
codes.forEach((code,idx)=>{
    code.addEventListener('keydown',(e)=>{
        console.log(e.key);
        if(e.key >= '0' && e.key <= '9'){
            e.target.value = '';
            // A little bit of timeout is required in order to move the focus to a new input field..
            setTimeout(()=>{
                if(idx < codes.length-1)
                    codes[idx + 1].focus();   
            },10)
        }else if(e.key === 'Backspace'){
            // A little bit of timeout is required in order to have the effect of deletion.
            e.target.value = '';
            setTimeout(()=>{
                if(idx > 0 && idx < codes.length){
                    codes[idx - 1].focus(); 
                }
            },50)
            
            
        }
        
    })
   
})


