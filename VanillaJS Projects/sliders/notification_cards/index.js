// alert('hi there');

var companyList = ["facebook","twitter","bmw","google","instagram","whatsapp"];

var expanders = document.querySelectorAll('.expand')
expanders.forEach((expander,index)=>{
    expander.addEventListener('click',()=>{

        if(expander.classList.contains("less")){
            console.log('expand-less');
            document.querySelectorAll('.card')[index].classList.remove('active');
            
            
            setTimeout(()=>{
                const element = document.querySelectorAll('.card')[index].querySelector('.column > p');
                
                // const element = document.querySelector(".column > p");
                element.remove();
                expander.classList.add('more');
                expander.classList.remove('less');
            },300)

        }else{
        const para = document.createElement("p");
        para.innerHTML = companyList[index]+" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled";

        setTimeout(()=>{
            document.getElementsByClassName("column")[index].appendChild(para);
            expander.classList.remove('more');
            expander.classList.add('less');
        },400)
        // document.getElementsByClassName("column")[index].appendChild(para);
        console.log(index);
        document.querySelectorAll('.card')[index].classList.add('active');
        }
        
    })
})