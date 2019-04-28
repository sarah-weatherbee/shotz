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

// import moviesData from '../../helpers/data/moviesData';
// import util from '../../helpers/util';

// import './movies.scss';

// let movies = [];

// const domStringBuilder = () => {
//   let domString = '';
//   movies.forEach((movie) => {
//     domString += `<div class="card col-3" id=${movie.id}>`;
//     domString += `<h3 class="card-title">${movie.name}</h3>`;
//     domString += '<div class="card-body">';
//     domString += `<h5>${movie.genre}</h5>`;
//     domString += `<h5>${movie.releaseDate}</h5>`;
//     domString += `<h5>${movie.description}</h5>`;
//     domString += `<h5>Locations: ${movie.locations.length}</h5>`;
//     domString += '</div>';
//     domString += '</div>';
//   });
//   util.printToDom('movies', domString);
// };

// const getMovieLocations = (e) => {
//   movies.forEach((movie) => {
//     if (e.target.id === movie.id) {
//       console.error(movie.locations);
//     }
//   });
// };

// const hideOtherCards = (e) => {
//   const movieBtnId = e.target.id;
//   movies.filter(movie => movie.id === movieBtnId);
//   domStringBuilder();
//   getMovieLocations(e);
// };

// const buttonEvents = () => {
//   console.error(movies);
//   movies.forEach((movie) => {
//     document.getElementById(movie.id).addEventListener('click', hideOtherCards);
//   });
// };

// const initializeMovies = () => {
//   moviesData.getMoviesData()
//     .then((resp) => {
//       const movieResults = resp.data.movies;
//       movies = movieResults;
//       domStringBuilder();
//       buttonEvents();
//     })
//     .catch(err => console.error(err));
// };

// export default { initializeMovies, buttonEvents };

// import moviesData from '../../helpers/data/moviesData';
// import util from '../../helpers/util';
// // import locationsData from '../../helpers/data/locationsData';
// // import locations from '../locations/locations';

// import './movies.scss';

// // writing to the dom for the movies component

// let movies = [];

// const domStringBuilder = () => {
//   let domString = '';
//   movies.forEach((movie) => {
//     domString += `<div class="card col-3" id="movie" ${movie.id}>`;
//     domString += `<h3 class="card-title">${movie.name}</h3>`;
//     domString += '<div class="card-body">';
//     domString += `<h5>${movie.genre}</h5>`;
//     domString += `<h5>${movie.releaseDate}</h5>`;
//     domString += `<h5>${movie.description}</h5>`;
//     domString += `<h5>Locations: ${movie.locations.length}</h5>`;
//     domString += '</div>';
//     domString += '</div>';
//   });
//   util.printToDom('movies', domString);
// };


// const getMovieLocations = (e) => {
//   movies.forEach((movie) => {
//     if (e.target.id === movie.id) {
//       console.error(movie.locations);
//     }
//   });
// };

// // let clickedMovies = [];
// // const oneMovieBuilder = (clickedMovies) => {
// //   let domString = '';
// //   clickedMovies.forEach((clickedMovie) => {
// //     domString += `<div class card col-3 id=${clickedMovie.id}>`;
// //     domString += `<h3 class="card-title>${clickedMovie.name}>`;

// //     domString += '</div>';
// //   });
// //   util.printToDom('movies', domString);
// // };


// // const oneMovie = (e) => {
// //   console.error('hi');
// //   moviesData.getMoviesData()
// //     .then((resp) => {
// //       const movieInfo = resp.data.movies;
// //       movies = movieInfo;
// //       const buttonId = e.target.id;
// //       movies.forEach((movie) => {
// //         if (movie.id === buttonId) {
// //           oneMovieBuilder(movie);
// //         }
// //       });
// //     });
// // };

// // const oneMovie = (e) => {
// //   console.error('hi');
// //   const buttonId = e.target.id;
// //   const selectedMovie = movies.filter(x => x.id === buttonId);
// //   if (selectedMovie) {
// //     domStringBuilder([selectedMovie]);
// //     const movieLocations = [];
// //     const location = locations.bringLocations();
// //     selectedMovie.locations.forEach((id) => {
// //       const loc = location.find(x => x.id === id);
// //       movieLocations.push([loc]);
// //     });
// //     locations.domStringBuilder(movieLocations);
// //   } else {
// //     domStringBuilder(movies);
// //   }
// // };

// // As a user, when I click on a movie the dom should be completely erased
// // and I should see the single movie view.
// // (needs an event listener on the card and needs a function that when the
// // button is clicked only shows the movie that is clicked, i.e. erases
// // everything else from the dom. start with a function that only displays movie 1
// // when clicked. Think about how the buttons in the locations.js file filter the
// // locations.)

// // As a user, looking at the single movie view, I should see details about that movie
// // and bootstrap cards showing any locations that relate to that movie.

// // As a user, on the single movie view, there should be some kind of back button
// // that "closes" the single movie view
// // and brings back the original page that had all movies and all locations


// // const buttonEvents = () => {
// //   const filterMovies = document.getElementsByClassName('card');
// //   for (let i = 0; i < filterMovies.length; i += 1) {
// //     filterMovies[i].addEventListener('click', oneMovie);
// //   }
// // };

// const buttonEvents = () => {
//   console.error(movies);
//   movies.forEach((movie) => {
//     document.getElementById(movie.id).addEventListener('click', getMovieLocations);
//   });
// };

// // for (let i = 0; i < deleteButtons.length; i++){
// //   deleteButtons[i].addEventListener('click', deleteFunction);
// // }

// const initializeMovies = () => {
//   moviesData.getMoviesData()
//     .then((resp) => {
//       const movieResults = resp.data.movies;
//       movies = movieResults;
//       domStringBuilder();
//       buttonEvents();
//     })
//     .catch(err => console.error(err));
// };

// export default { initializeMovies, buttonEvents };
