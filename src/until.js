const getCities = (placesAll) => [...new Set(placesAll.map((place) => place.city.name))];

const getPlacesSelected = (cityName, placesAll) => placesAll.filter((place) => place.city.name === cityName);

export {getCities, getPlacesSelected};
