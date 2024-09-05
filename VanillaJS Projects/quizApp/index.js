// The section for menu starts here.

const closeMenuBtn = document.querySelector('#close');
const menu_container = document.querySelector('.menu-container');
const menuBtn = document.querySelector('.menuBtn');
const panelone = document.querySelector('.panel#one');
const paneltwo = document.querySelector('.panel#two');
const panelthree = document.querySelector('.panel#three');
const ul = document.querySelector('ul');

closeMenuBtn.addEventListener('click',()=>{
//NEED TO REVISIT.
    panelone.style.width = `0px`;
    paneltwo.style.width = `0px`;
    panelthree.style.width = `0px`;
  
    setTimeout(()=>{
        menu_container.classList.add('hide');
        ul.classList.toggle('hide');
    },250)
   
})

menuBtn.addEventListener('click',()=>{
    menu_container.classList.toggle('hide');
    setTimeout(()=>panelone.style.width = `350px`,50)
    setTimeout(()=>paneltwo.style.width = `300px`,350)
    setTimeout(()=>{
        panelthree.style.width = `250px`
        setTimeout(()=>ul.classList.toggle('hide'),50)
    },700)
})

//quiz part

const quizData = [
    {
        question: 'What is the capital of India ?',
        a:  'New Delhi',
        b:  'Delhi',
        c:  'Agra',
        d:  'None of the above',
        answer: 'a'
    },
    {
        question: 'What is the capital of Japan ?',
        a:  'Jakarta',
        b:  'Moscow',
        c:  'Tokyo',
        d:  'Manilla',
        answer: 'c'
    },
    {
        question: 'What is the capital of Russia ?',
        a:  'Columbia',
        b:  'California',
        c:  'Santiago',
        d:  'Moscow',
        answer: 'd'
    },
    {
        question: 'What is the capital of UK ?',
        a:  'Paris',
        b:  'London',
        c:  'Madrid',
        d:  'Italy',
        answer: 'b'
    } ,
    {
        question: 'What is the capital of Ukraine ?',
        a:  'Kiev',
        b:  'Tel Aviv',
        c:  'Madrid',
        d:  'Italy',
        answer: 'a'
    } ,
    {
        question: 'What is the capital of Bangladesh ?',
        a:  'Paris',
        b:  'London',
        c:  'Dhaka',
        d:  'Italy',
        answer: 'c'
    }        
]

let currentQuizIndex = 0;
let score = 0;

const quizQuestion = document.querySelector('#title') ;
const options = document.querySelectorAll('label');
const submit = document.querySelector('.btn');
const radioButtons = document.querySelectorAll('input');
const quizCard = document.querySelector('.quiz-card')

createQuiz();

function clearAllRadioSelection(){
    radioButtons.forEach(radio=>{
        radio.checked = false;
    })
}

function createQuiz(){
    // First clear all radio selection.
    clearAllRadioSelection();

    // Create the question card with necessary data.
    quizQuestion.innerHTML = quizData[currentQuizIndex].question;
    options.forEach((option,idx)=>{
        let id = option.id;
        option.innerText = quizData[currentQuizIndex][id];
    })
}

submit.addEventListener('click',()=>{
    // get the selected option.
    let selection = ''
    radioButtons.forEach(radio=>{
        if(radio.checked){
            
            selection = radio.id;
            
            if(quizData[currentQuizIndex].answer === selection){
                score++;
            }
        }

        
    })
    if(selection === ''){
        return;
    }

    currentQuizIndex++;

    if(currentQuizIndex < quizData.length){
        createQuiz();
    }else{
        quizCard.innerHTML = ``
        quizCard.innerHTML = `
        <div class="quiz-container">
        <h3 id="title"> You have scored a total of ${score}/${quizData.length} </h3>
        </div>
        <button class="btn" onclick="location.reload()">Reload</button>
        `
    }
    
})




