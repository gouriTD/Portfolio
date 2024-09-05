// alert('hi there');

API_URL = 'https://api.github.com/users/';

const search = document.querySelector('#search');
const form = document.querySelector('#form');
const main = document.querySelector('main');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let user = search.value ;
    console.log(user);
    getUser(user);
    search.value = '';
})

function createUserCard(data,repoData){
    const userCard = `
    <div class="card">
        <div><img src="${data.avatar_url}" alt="${data.name}" id="profile_img"></div>

        <div class="user-info">
            <h3>${data.name}</h3>

            <p>${data.bio}
            </p>

            <ul>
                <li>${data.followers} <strong>followers</strong></li>
                <li>${data.following} <strong>following</strong></li>
                <li>${data.public_repos} <strong>repositories</strong></li>
            </ul>

            <div class="repos">
            </div>
        </div>
    </div>    
    `
   main.innerHTML = userCard;

   createRepoData(repoData);
}

function createRepoData(repoData){
    const repos = document.querySelector('.repos');
    console.log(repoData.length, repoData)
    repoData.forEach(repo => {
        let repoEl = document.createElement('a');
        repoEl.href = repo.html_url;
        repoEl.classList.add('repo');
        repoEl.innerText = repo.name;
        repos.appendChild(repoEl);
    });
}


function createErrCard(){
    const errCard = `
    <div class="card"> <h1>No User Found</h1> </div>
    `
    main.innerHTML = errCard;
}

async function getUser(user){
    try {
        const { data } = await axios(API_URL+user);
        let { data:repoData } = await axios(API_URL+user+'/repos?sort=created');

        console.log(data);
        

        repoData = repoData.slice(0,10);
        console.log(repoData);
        createUserCard(data,repoData);

    } catch (error) {
        console.log(error)
        createErrCard();
    }
}