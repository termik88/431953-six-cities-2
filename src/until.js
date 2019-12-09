export const getCitiesList = (placesAll) => [...new Set(placesAll.map((place) => place.city.name))];

export const getRandomCity = (citiesList) => citiesList[Math.floor(Math.random() * Math.floor(citiesList.length))];


const RATING_STARS = 5;
const PERCENT = 100;
const transformRatingToPercent = (ratingPlace) => Math.round(ratingPlace) / RATING_STARS * PERCENT;

export const transformRatingToStarsNumber = (ratingPlace) => ratingPlace * RATING_STARS / PERCENT;

export const prepareUser = (user) => {
  const userData = Object.assign({}, user);
  userData.avatarUrl = userData.avatar_url;
  userData.isPro = userData.is_pro;
  delete userData.avatar_url;
  delete userData.is_pro;

  return userData;
};

const preparePlace = (Places) => {
  const newPlaces = Object.assign({}, Places);
  newPlaces.previewImage = newPlaces.preview_image;
  newPlaces.isFavorite = newPlaces.is_favorite;
  newPlaces.isPremium = newPlaces.is_premium;
  newPlaces.maxAdults = newPlaces.max_adults;
  newPlaces.rating = transformRatingToPercent(newPlaces.rating);
  newPlaces.type = newPlaces.type[0].toUpperCase() + newPlaces.type.slice(1);
  delete newPlaces.preview_image;
  delete newPlaces.is_favorite;
  delete newPlaces.is_premium;
  delete newPlaces.max_adults;
  newPlaces.host = prepareUser(newPlaces.host);

  return newPlaces;
};

export const preparePlacesData = (PlacesList) => PlacesList.map((place) => preparePlace(place));

export const isValidationEmail = (email) => {
  const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return pattern.test(String(email).toLowerCase());
};
