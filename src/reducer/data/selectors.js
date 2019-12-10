import {createSelector} from "reselect";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

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
    (resultOne, resultTwo) => resultTwo.filter((place) => place.city.name === resultOne)
);

export const getFavoritesPlaces = (state) => {
  return state[NAME_SPACE].placesFavorites;
};
