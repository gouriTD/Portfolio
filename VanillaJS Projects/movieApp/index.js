// alert('hi there');
const API_KEY = `b47e9fca`;
const API_URL = `https://www.omdbapi.com/?`;
const main = document.querySelector('main');
const form = document.querySelector('form');
const input_search = document.getElementById('search');
const loader = document.querySelector('.loader');

const Err_MSG = 'Sorry No Data Found try something else';


const showMovieDetails = (title, poster, rating, overview)=>{
    const movie = document.createElement('div');
    movie.classList.add('movie-card');
    movie.innerHTML=`
    <img src="${poster}" alt="movie" id="moviePic">
    <div class="movie-info">
        <div id="movie-name">${title}</div>
        <div id="rating" class="${rating>8? 'green':(rating>5?'orange':'red')}">${rating}</div>
    </div>
    <div class="overview">
        <h3>Overview:</h3>${overview}
    </div>
    `
    main.appendChild(movie);
}

function showErrorMsg(message){
    main.style.color = 'white';
    main.innerHTML = message;
}

const getMovies = async (s='God')=>{
    const fetchUrl = API_URL + `apikey=${API_KEY}&s=${s}&page=`;

    loader.style.visibility = 'visible';

    let pageOneData, pageTwoData;
    try {
        const res = await fetch(fetchUrl+1);
        pageOneData = await res.json();
    } catch (error) {
        console.log(error);
        loader.style.visibility = 'hidden';
        showErrorMsg('Error');
        return;
    }

    try {
        const res = await fetch(fetchUrl+2);
        pageTwoData = await res.json();
        
    } catch (error) {
        console.log(error);
        loader.style.visibility = 'hidden';
        showErrorMsg('Error');
        return;
    }

    let Search =  [];
    Search = [...(pageOneData.Response==="True" ? pageOneData.Search: [])  , ...(pageTwoData.Response === "True" ? pageTwoData.Search: [])];   
    
    console.log(Search);
    if(Search.length === 0){
        loader.style.visibility = 'hidden';
        showErrorMsg(Err_MSG);
        return;
    }
    
    let movieArray = [];
    Search.forEach(async(element) => {
        const {Title, imdbID:i, Poster} = element
        console.log(Title, i, Poster);

        const res = await fetch(`https://www.omdbapi.com/?`+`apikey=${API_KEY}`+`&i=${i}`);
        const data = await res.json();

        const{imdbRating, Plot} =data;
        
        console.log(imdbRating,Plot);

        const movidata = {
            Title: Title,
            Poster: Poster,
            imdbRating: imdbRating,
            Plot: Plot
        }

        console.log(movidata);
        movieArray.push(movidata);
       
    });
    console.log('*****movieArray:*******' + movieArray);
    
    setTimeout(()=>{
        loader.style.visibility = 'hidden';
        if(movieArray && movieArray.length > 0){
            movieArray.forEach(el => {
                const Title = el.Title;
                const Poster = el.Poster;
                const imdbRating = el.imdbRating
                const Plot = el.Plot;
        
                console.log(`Gouri Title: ${Title}**** Gouri Poster: ${Poster}, imdbRating:${imdbRating}, Plot:${Plot}`)
                showMovieDetails(Title, Poster, imdbRating, Plot);
            })
        } else {
            showErrorMsg(Err_MSG);
        }
        
    },1000)
    
}

getMovies();

form.addEventListener('submit',(e)=>{
    console.log(e);
    // e.defaultPrevented();
    const search = input_search.value;
    
    if(search && search !== ''){
        input_search.value = '';
        main.innerHTML='';
        getMovies(search);
    }
})

