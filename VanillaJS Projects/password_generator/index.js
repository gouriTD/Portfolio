//In this project we try to create a password of desired length and then try to print it on screen.
//The password generated is mix of different characters like uppercase, lowercase, symnbol, number etc.
// Now by using random and String.fromcharcode we try to get the required characyers.
// Here knowledge of ASCII table helps and we can take reference from net.
// Now after creating different functions for random generation of characters we get the length of the password, the desired characters in the pwd by getting the checked values.
//To get the no. of truw counts we have to simply add the true values which in return will give a numeric value as true=1.
//We then create a generate function which is an object with key as the desired character and the value as the pointer to the functions which will generate the character.
//In the password generator function we then first get an array of objects whicb hold all the types which are supported and then use pwd_length and random generator functions to create the password.
//In order to add content to clipboard we use the clipboard api. Now the api would work on only those webpages which are running on https. so for checking the clipboard api working or not we need to open the page on chrome browser.
// For clipboard to work use navigator.clipboard.writeText(value) , here value is the text required to be copied.
// For password generation we should first what set of required characters need to be produced so for that we get a count of them and then continue.

const pwd_length = document.querySelector('#length');
const btn_generate = document.querySelector('.btn-generate');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const symbolEl = document.querySelector('#symbol');
const numberEl = document.querySelector('#number');
const resultEl = document.querySelector('#result');
const btn_clipboard = document.querySelector('#btn-clipboard');

btn_generate.addEventListener('click', generatePWD);


btn_clipboard.addEventListener('click',addToClipBoard);

const generateFunction = {
    uppercase: getRandomUppercase,
    lowercase: getRandomLowercase,
    symbol: getRandomSymbol,
    number: getRandomNumber,
}

function generatePWD() {

    let password = '';
    const types = uppercaseEl.checked + lowercaseEl.checked + symbolEl.checked + numberEl.checked;

    if (types === 0) {
        return;
    }

    let typesArray = [
        { uppercase: uppercaseEl.checked },
        { lowercase: lowercaseEl.checked },
        { symbol: symbolEl.checked },
        { number: numberEl.checked }
    ]

    //Here we get an array of only those types which have value as true.
    typesArray = typesArray.filter(type => Object.values(type)[0]);
    console.log(typesArray);
   
    let pwdlength = +pwd_length.value

    const repeat = Math.floor(pwdlength/types) ;
    const execute = pwdlength%types;

    console.log(repeat,execute,pwdlength,types)

    if(repeat){
        for(let i = 0; i < repeat; i++){
            typesArray.forEach( type =>{
                const key = Object.keys(type);
                password += generateFunction[key]();
                }
            ) 
        }
    }

    if(execute){
        for(let i= 0; i<execute; i++){
            const obj = typesArray[i];
            const key = Object.keys(obj)[0];
            password += (generateFunction[key])();
        //    console.log(keys,(generateFunction[keys[x]])());
        }
    }

    console.log(password,pwdlength);
    resultEl.innerHTML = password;
}

async function addToClipBoard(){
    try {
        await navigator.clipboard.writeText(resultEl.innerText);
        console.log('Content copied to clipboard');

         // Alert the copied text
        alert("Copied the text: " + resultEl.innerText);
        
      } catch (err) {
        console.error('Failed to copy: ', err);
      } 
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomSymbol() {
    const Symbols = '!@#$%^&*()_{}[]';
    return Symbols[Math.floor(Math.random() * Symbols.length)];
}

function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}