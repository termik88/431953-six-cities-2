const getCities = (placesAll) => [...new Set(placesAll.map((place) => place.city.name))];

const getPlacesSelected = (cityName, placesAll) => placesAll.filter((place) => place.city.name === cityName);

const transformRatingToPercent = (ratingPlace) => {
  const RATING_STARS = 5;
  const PERCENT = 100;
  return ratingPlace / RATING_STARS * PERCENT;
};

export {getCities, getPlacesSelected, transformRatingToPercent};
