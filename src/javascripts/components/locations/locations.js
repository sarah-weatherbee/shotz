import locationsData from '../../helpers/data/locationsData';
import util from '../../helpers/util';

import './locations.scss';

let locations = [];

const shootTimeClass = (shootTime) => {
  let selectedClass = '';
  switch (shootTime) {
    case 'Morning':
      selectedClass = 'bg-secondary';
      break;
    case 'Afternoon':
      selectedClass = 'bg-success';
      break;
    case 'Evening':
      selectedClass = 'bg-info';
      break;
    case 'After Dark':
      selectedClass = 'bg-danger';
      break;
    default:
  }
  return selectedClass;
};

const domStringBuilder = () => {
  let domString = '';
  locations.forEach((location) => {
    domString += `<div class="card location col-2" id=${location.id}>`;
    domString += `<h3 class="card-header ${shootTimeClass(location.shootTime)}">${location.name}</h3>`;
    domString += '<div class="card-body">';
    domString += `<img src="${location.imageUrl}" class="card-img-top" alt="...">`;
    domString += `<h5>${location.address}</h5>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('locations', domString);
};

const initializeLocations = () => {
  locationsData.getLocationsData()
    .then((resp) => {
      const locationResults = resp.data.locations;
      locations = locationResults;
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { initializeLocations };
