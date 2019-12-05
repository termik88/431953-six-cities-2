import {preparePlaces, getCitiesList, getRandomCity, getPlacesSelected} from "../../until.js";
import {createSelector} from "reselect";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

export const getPlacesAllSelector = (state) => {
  return preparePlaces(state[NAME_SPACE].placesAll);
};

export const getCitiesListSelector = createSelector(
    getPlacesAllSelector,
    (placesAll) => getCitiesList(placesAll)
);

const getCityCurrent = (state) => {
  return state[NAME_SPACE].cityCurrent;
};

export const getCityCurrentSelector = createSelector(
    getCityCurrent,
    getCitiesListSelector,
    (resultOne, resultTwo) => resultOne ? resultOne : getRandomCity(resultTwo)
);

export const getPlacesSelectedSelector = createSelector(
    getCityCurrentSelector,
    getPlacesAllSelector,
    (resultOne, resultTwo) => getPlacesSelected(resultOne, resultTwo)
);
