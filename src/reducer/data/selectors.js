import {prepareOffers, getCitiesList, getRandomCity, getPlacesSelected} from "../../until.js";
import {createSelector} from "reselect";
import NameSpace from "../name-spaces.js";

const NAME_SPACE = NameSpace.DATA;

export const getPlacesAllSelector = (state) => {
  return prepareOffers(state[NAME_SPACE].placesAll);
};

export const getCitiesListSelector = createSelector(
  getPlacesAllSelector,
  (placesAll) => getCitiesList(placesAll)
);

export const getCityCurrentSelector = createSelector(
  getCitiesListSelector,
  (citiesList) => getRandomCity(citiesList)
);

export const getPlacesSelectedSelector = createSelector(
  getCityCurrentSelector,
  getPlacesAllSelector,
  // eslint-disable-next-line no-shadow
  (getCityCurrentSelector, getPlacesAllSelector) => getPlacesSelected(getCityCurrentSelector, getPlacesAllSelector)
);
