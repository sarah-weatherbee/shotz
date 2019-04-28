
import movies from './components/movies/movies';
import locations from './components/locations/locations';

import '../styles/main.scss';

const init = () => {
  movies.initializeMovies();
  locations.initializeLocations();
  document.getElementById('clearButton').classList.add('hide');
};

init();
document.getElementById('clearButton').addEventListener('click', init);
