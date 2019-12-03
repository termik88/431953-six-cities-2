import {prepareOffers, getCities, getPlacesSelected} from "../../until";

const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
  placesSelected: [],
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_PLACES_SELECTED: `SET_PLACES_SELECTED`,
  LOAD_PLACES_ALL: `LOAD_PLACES_ALL`,
};

const ActionsCreator = {
  changeCityCurrent: (cityName) => ({
    type: ActionType.CHANGE_CITY_CURRENT,
    payload: cityName,
  }),

  setCitiesList: (cities) => ({
    type: ActionType.SET_CITIES_LIST,
    payload: cities
  }),

  setPlacesSelected: (placesSelected) => ({
    type: ActionType.SET_PLACES_SELECTED,
    payload: placesSelected
  }),

  loadPlacesAll: (placesAll) => ({
    type: ActionType.LOAD_PLACES_ALL,
    payload: placesAll
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_CURRENT:
      return Object.assign({}, state, {
        cityCurrent: action.payload
      });

    case ActionType.SET_CITIES_LIST:
      return Object.assign({}, state, {
        citiesList: action.payload
      });

    case ActionType.SET_PLACES_SELECTED:
      return Object.assign({}, state, {
        placesSelected: action.payload
      });

    case ActionType.LOAD_PLACES_ALL:
      return Object.assign({}, state, {
        placesAll: action.payload
      });
  }

  return state;
};

const Operations = {
  loadPlacesAll: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const placesAll = prepareOffers(response.data);
        // const cityCurrent = placesAll[0].city.name;
        // const citiesList = getCities(placesAll);
        // const placesSelected = getPlacesSelected(placesAll[0].city.name, placesAll);
        //
        // dispatch(ActionsCreator.changeCityCurrent(cityCurrent[`DATaA`]));
        // dispatch(ActionsCreator.setCitiesList(citiesList));
        // dispatch(ActionsCreator.setPlacesSelected(placesSelected));
        dispatch(ActionsCreator.loadPlacesAll(placesAll));
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
