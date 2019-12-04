import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

export const getCityCurrent = (state) => {
  return state[NAME_SPACE].cityCurrent;
};

export const getCitiesList = (state) => {
  return state[NAME_SPACE].citiesList;
};

export const getPlacesSelected = (state) => {
  return state[NAME_SPACE].placesSelected;
};

export const getPlacesAll = (state) => {
  return state[NAME_SPACE].placesAll;
};
