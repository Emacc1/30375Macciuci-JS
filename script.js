let APIURL = 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk'
console.log(`hola`)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4ec29bf683mshc9e8e8bff8341f8p12502ejsnf5c44f1bb3dc',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

getFilms(APIURL);

async function getFilms(url) {
    const resp = await fetch(url,options);
    const data = await resp.json();
    console.log(data);
    showFilms(data.results);
    .catch(err => console.error(err));
}

    
function showFilms(films) {
    films.forEach(film => {
        const filmElement = document.createElement("div");
        filmElement.classList.add("film");
        filmElement.innerHTML = `
        <img
        src="${film.picture + film.provider}"
        alt="${film.name}"
        />
        <div class="movie-info">
        <h3>${film.name}</h3>
        </div>
        <div class="overview">
        <h3>Overview:</h3>
        ${film.name}
        </div>
        `;
        
        main.appendChild(filmElement);
        
    });
}

form.addEventListener("submit", (e) => 
e.preventDefault();
const searchTerm = search.value;

if (searchTerm) {
getMovies(SEARCHAPI + searchTerm);
search.value = "";
});
