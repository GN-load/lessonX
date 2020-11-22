import './index.css'
import axios from 'axios'

// const divPosters = document.querySelector('.divPosters')

// axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1')
//     .then(res => {
//         console.log(res);
//         const trendingFilms = res.data.results;
//         const imgReduce = trendingFilms.reduce((acc, el) => acc + `<img src="https://image.tmdb.org/t/p/w500${el.poster_path}">` + `<div><span class="nameFilm">${el.title}</span></div>` + `<div><span class="description">${el.overview}</span></div>` + `<div><span class="pop">${el.popularity}</span></div>`, '')
//         console.log(imgReduce)
//         divPosters.insertAdjacentHTML('beforeend', imgReduce)
//     })

const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=';
const input = document.querySelector('input');
const divPosters = document.querySelector('.divPosters');
const divSearch = document.querySelector('.searchFilms');
const a = document.querySelector('a')
divPosters.setAttribute('hidden', true)

const func = () => {
    axios.get(BASE_URL + input.value)
        .then(res => {
            console.log(res)
            const trendingFilms_Search = res.data.results;
            const imgFilter = trendingFilms_Search.filter(img => img.poster_path !== null)
            const imgReduce_Search = imgFilter.reduce((acc, el) => acc + `<img src="https://image.tmdb.org/t/p/w500${el.poster_path}">`, '')
            divSearch.insertAdjacentHTML('beforeend', imgReduce_Search)
        })
}

input.addEventListener('change', func)
a.addEventListener('click', () => {
    if (divSearch.hasAttribute('hidden') === false) {
        divSearch.setAttribute('hidden', true)
        divPosters.removeAttribute('hidden')
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1')
            .then(res => {
                console.log(res);
                const trendingFilms = res.data.results;
                const imgReduce = trendingFilms.reduce((acc, el) => acc + `<img src="https://image.tmdb.org/t/p/w500${el.poster_path}">` + `<div><span class="nameFilm">${el.title}</span></div>` + `<div><span class="description">${el.overview}</span></div>` + `<div><span class="pop">${el.popularity}</span></div>`, '')
                console.log(imgReduce)
                divPosters.insertAdjacentHTML('beforeend', imgReduce)
            })
    } else if (divSearch.hasAttribute('hidden') === true) {
        divPosters.setAttribute('hidden', true);
        divSearch.removeAttribute('hidden')

    }
})