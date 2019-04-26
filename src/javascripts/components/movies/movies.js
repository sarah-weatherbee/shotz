// import locations from '../locations/locations';
import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';
import './movies.scss';

// writing to the dom for the movies component

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

const getMovieLocations = (e) => {
// function to make secret movie 1
 console.error('hi');


const buttonEvents = () => {
  document.getElementById('movie1').addEventListener('click', getMovieLocations);
};

// const initializeMovies = () => {
//   moviesData.getMoviesData()
//     .then((resp) => {
//       const movieResults = resp.data.movies;
//       movies = movieResults;
//       domStringBuilder(movies);
//       buttonEvents();
//     })
//     .catch(err => console.error(err));
// };

export default { buttonEvents };
