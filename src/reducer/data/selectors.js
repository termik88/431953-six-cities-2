import {createSelector} from "reselect";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

export const getSortMethodsList = (state) => {
  return state[NAME_SPACE].sortMethodsList;
};

export const getSortMethodCurrent = (state) => {
  return state[NAME_SPACE].sortMethodCurrent;
};

export const getPlacesAll = (state) => {
  return state[NAME_SPACE].placesAll;
};

export const getCitiesList = (state) => {
  return state[NAME_SPACE].citiesList;
};

export const getCityCurrent = (state) => {
  return state[NAME_SPACE].cityCurrent;
};

export const getPlacesSelected = createSelector(
    getCityCurrent,
    getPlacesAll,
    getSortMethodCurrent,
    (resultOne, resultTwo, resultThree) => resultTwo.filter((place) => place.city.name === resultOne).sort(resultThree.method)
);

export const getFavoritesPlaces = (state) => {
  return state[NAME_SPACE].placesFavorites;
};

export const getCitiesListFavorites = (state) => {
  return state[NAME_SPACE].citiesListFavorites;
};

export const getComments = (state) => {

  return state[NAME_SPACE].comments.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getIsLoading = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getErrorInfo = (state) => {
  return state[NAME_SPACE].error;
};
