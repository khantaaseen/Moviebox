
const apiLink = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.disc&api_key=c924408af57d6220391e67561e1f7366&page=1';
const imgPath = 'https://image.tmdb.org/t/p/w1280';
const searchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=c924408af57d6220391e67561e1f7366&query=";

const main = document.getElementById("card-section");
const form = document.getElementById("form");
const search = document.getElementById("query");


returnMovies(apiLink);

    function returnMovies(url){
        fetch(url).then(res => res.json())
        .then(function(data){

        console.log(data.results);
        data.results.forEach(element => {

            const divCard = document.createElement('div');
            divCard.setAttribute('class', 'card')

            const divRow = document.createElement('div');
            divRow.setAttribute('class', 'row')

            const divColumn = document.createElement('div');
            divColumn.setAttribute('class', 'column')

            const image = document.createElement('img');
            image.setAttribute('class', 'thumbnail')
            image.setAttribute('id', 'image')

            const title = document.createElement('h3');
            title.setAttribute('id', 'title')

            const center = document.createElement('center');


            title.innerHTML = `${element.title} <br> <a href="movie.html?id=${element.id}&title=${element.title}">Reviews</a>`;
            image.src = imgPath + element.poster_path;
                
            divCard.appendChild(image);
            divCard.appendChild(title);
            divColumn.appendChild(divCard);
            divRow.appendChild(divColumn);

            main.appendChild(divRow);

            });
        }); 
    }

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''

    const searchItem = search.value;

    if (searchItem){
        returnMovies(searchAPI + searchItem);
        search.value = "";

    }
})