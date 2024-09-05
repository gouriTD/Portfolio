// alert('hi there');

const API_URL = 'https://randomuser.me/api/?results=10';
const userListContainer = document.querySelector('.user-list');

createUserList();
async function createUserList(){

    const res = await fetch(API_URL);
    const data = await res.json();

    const {results} = data; 
    
    userListContainer.innerHTML = '';
    results.forEach(user => {
        const userEl = document.createElement('li');
        userEl.innerHTML = `
        <img src="${user.picture.medium}" alt="user">
        <div class="user-info">
            <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
            <small>${user.location.city}, ${user.location.state}, ${user.location.country}</small>
        </div>
        `
        userListContainer.appendChild(userEl)
    });
}

// Now we need to show only those list items for which content matches the search value.

const search = document.querySelector('#search');
search.addEventListener('input',(e)=>{
    let matchtext = e.target.value;
    console.log(matchtext);
    matchItems(matchtext);
})

function matchItems(matchtext){
    const listItems = document.querySelectorAll('li');
    // console.log({listItems})
    listItems.forEach(item=>{
        console.log((item.children[1]).innerText.toLowerCase());
        if(((item.children[1]).innerText.toLowerCase()).includes(matchtext.toLowerCase())){
            item.classList.remove('hide');

        }else{
            item.classList.add('hide');
        }
    })
}