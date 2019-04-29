import moviesData from '../../helpers/data/moviesData';
import locations from '../locations/locations';
import util from '../../helpers/util';


import './movies.scss';

let movies = [];

const domStringBuilder = (films) => {
  let domString = '';
  films.forEach((movie) => {
    domString += `<div class="card col-3" id=${movie.id}>`;
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

const hideOtherCards = (e) => {
  const movieBtnId = e.target.id;
  console.error(`${movieBtnId}`);
  console.error(movies[0].id);
  const selectedMovieArray = movies.filter(x => x.id === movieBtnId);
  console.error(selectedMovieArray);
  domStringBuilder(selectedMovieArray);
  locations.getMovieLocations(selectedMovieArray[0].locations);
  document.getElementById('clearButton').classList.remove('hide');
};

const buttonEvents = () => {
  console.error(movies);
  movies.forEach((movie) => {
    document.getElementById(movie.id).addEventListener('click', hideOtherCards);
  });
};

const initializeMovies = () => {
  moviesData.getMoviesData()
    .then((resp) => {
      const movieResults = resp.data.movies;
      movies = movieResults;
      domStringBuilder(movies);
      buttonEvents();
    })
    .catch(err => console.error(err));
};

export default { initializeMovies, buttonEvents };
