// import locations from '../locations/locations';
import moviesData from '../../helpers/data/moviesData';
// import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './movies.scss';

// writing to the dom for the movies component

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
    domString += `<div class="card col-3" id="movie" ${movie.id}>`;
    domString += `<h3 class="card-title">${movie.name}</h3>`;
    domString += '<div class="card-body">';
    domString += `<h5>${movie.genre}</h5>`;
    domString += `<h5>${movie.releaseDate}</h5>`;
    domString += `<h5>${movie.description}</h5>`;
    domString += `<h5>Locations: ${movie.locations.length}</h5>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const oneMovieBuilder = (clickedMovies) => {
  let domString = '';
  clickedMovies.forEach((clickedMovie) => {
    domString += `<div class card col-3 id=${clickedMovie.id}>`;
    domString += `<h3 class="card-title>${clickedMovie.name}>`;
    domString += '</div>';
  });
  util.printToDom('movies', domString);
};

const oneMovie = (e) => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieInfo = resp.data.movies;
      movies = movieInfo;
      const buttonId = e.target.id;
      movies.forEach((movie) => {
        if (movie.id === buttonId) {
          oneMovieBuilder(movie);
        }
      });
    });
};
// As a user, when I click on a movie the dom should be completely erased
// and I should see the single movie view.
// (needs an event listener on the card and needs a function that when the
// button is clicked only shows the movie that is clicked, i.e. erases
// everything else from the dom. start with a function that only displays movie 1
// when clicked. Think about how the buttons in the locations.js file filter the
// locations.)

// As a user, looking at the single movie view, I should see details about that movie
// and bootstrap cards showing any locations that relate to that movie.

// As a user, on the single movie view, there should be some kind of back button
// that "closes" the single movie view
// and brings back the original page that had all movies and all locations


const buttonEvents = () => {
  document.getElementsByClassName('card').addEventListener('click', oneMovie);
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder();
      buttonEvents();
    })
    .catch(err => console.error(err));
};

export default { movies, initializeMovies, oneMovie };
