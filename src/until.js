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

export const preparePlace = (places) => {
  const newPlaces = Object.assign({}, places);
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

export const preparePlaces = (placesList) => placesList.map((place) => preparePlace(place));

export const isValidationEmail = (email) => {
  const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return pattern.test(String(email).toLowerCase());
};

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const getMonthYear = (date) => {
  if (!date) {
    return ``;
  }
  const fullDate = new Date(date);
  const month = MONTHS[fullDate.getMonth()];

  return `${month} ${fullDate.getFullYear()}`;
};

const prepareComment = (comment) => {
  const newComment = Object.assign({}, comment);
  newComment.rating = transformRatingToPercent(newComment.rating);
  newComment.commentText = newComment.comment;
  delete newComment.comment;
  newComment.user = prepareUser(newComment.user);

  return newComment;
};

export const prepareComments = (comments) => comments.map((comment) => prepareComment(comment));

export const getPlacesNearest = (currentPoint, allPoints) => {
  const distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x2 - x1, 2) + (Math.pow(y2 - y1, 2)));
  const filteredPoints = allPoints.filter((item) => item.city.name === currentPoint.city.name && item.id !== currentPoint.id);
  return filteredPoints
    .map((x) => x)
    .sort((x, y) =>
      Math.abs(distance(x.location.longitude, x.location.latitude, currentPoint.location.longitude, currentPoint.location.latitude))
      - Math.abs(distance(y.location.longitude, y.location.latitude, currentPoint.location.longitude, currentPoint.location.latitude)))
    .slice(0, 3);
};

