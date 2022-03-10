const movies = ('http://localhost:3000/films')
const movie = ('http://localhost:3000/films/1')
const moviePic = document.querySelector('#poster')
const movieInfo = document.querySelector('#film-info')
const movieShowTime = document.querySelector('#showtime')
const tickets = document.getElementById('ticket-num')
const titles = document.querySelector('.film.item')
const buyTicket = document.querySelector('#buy-ticket').addEventListener("click", buyTickets)
const movieTitle = document.querySelector('#title')
const runTime = document.querySelector('#runtime')
let buyCount = 0;

fetch(movies)
    .then((res) => res.json())
    .then(renderMovies)


fetch(movie)
    .then((res) => res.json())
    .then(renderMovie)

function renderMovie(movie) {
    moviePic.src = movie.poster
    movieInfo.textContent = movie.description
    movieShowTime.textContent = movie.showtime
    tickets.textContent = movie.tickets_sold
    movieTitle.textContent = movie.title
    runTime.textContent = movie.runtime
}


function renderMovies(movies) {
    movies.forEach(listMovies)
}


function listMovies(movies) {
    const li = document.createElement('li');
    li.textContent = movies.title
    titles.append(li)
}

function buyTickets() {
    buyCount++;
    fetch(movie)
    .then((res) => res.json())
    .then(m => {
        const numTickets = Math.max(0, m.tickets_sold-buyCount)
        tickets.textContent = numTickets
    })
}