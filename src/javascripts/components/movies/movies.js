import locations from '../locations/locations';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './movies.scss';

let movies = [];

const domStringBuilder = () => {
  let domString = '';
  movies.forEach((movie) => {
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

const showMovieInfo = (e) => {
  const movieId = e.target.id;
  const selectedMovie = movies.find(x => x.id === movieId);
  if (selectedMovie) {
    domStringBuilder([selectedMovie]);
  } else {
    domStringBuilder(movies);
  }
  const movieLocations = [];
  const location = locations.bringLocations();
  selectedMovie.locations.forEach((id) => {
    const loc = location.find(x => x.id === id);
    movieLocations.push(loc);
  });
  locations.domStringBuilder(movieLocations);
};

const buttonEvents = () => {
  movies.forEach((movie) => {
    document.getElementById(movie.id).addEventListener('click', showMovieInfo);
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
