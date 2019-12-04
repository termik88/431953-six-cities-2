export const getCitiesList = (placesAll) => [...new Set(placesAll.map((place) => place.city.name))];

export const getRandomCity = (citiesList) => citiesList[Math.floor(Math.random() * Math.floor(citiesList.length))];

export const getPlacesSelected = (cityName, placesAll) => placesAll.filter((place) => place.city.name === cityName);

export const transformRatingToPercent = (ratingPlace) => {
  const RATING_STARS = 5;
  const PERCENT = 100;
  return (Math.round(ratingPlace) / RATING_STARS * PERCENT);
};

const prepareUser = (user) => {
  const userData = Object.assign({}, user);
  userData.avatarUrl = userData.avatar_url;
  userData.isPro = userData.is_pro;
  delete userData.avatar_url;
  delete userData.is_pro;

  return userData;
};

const prepareOffer = (offer) => {
  const newOffer = Object.assign({}, offer);
  newOffer.previewImage = newOffer.preview_image;
  newOffer.isFavorite = newOffer.is_favorite;
  newOffer.isPremium = newOffer.is_premium;
  newOffer.maxAdults = newOffer.max_adults;
  delete newOffer.preview_image;
  delete newOffer.is_favorite;
  delete newOffer.is_premium;
  delete newOffer.max_adults;
  newOffer.host = prepareUser(newOffer.host);

  return newOffer;
};

export const prepareOffers = (offersList) => offersList.map((offer) => prepareOffer(offer));
