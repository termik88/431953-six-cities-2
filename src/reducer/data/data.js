// import {prepareOffers, getCitiesList, getRandomCity, getPlacesSelected} from "../../until";

const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
  placesSelected: [],
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  SET_PLACES_SELECTED: `SET_PLACES_SELECTED`,
  LOAD_DATA: `LOAD_DATA`,
};

const ActionsCreator = {
  changeCityCurrent: (cityName) => ({
    type: ActionType.CHANGE_CITY_CURRENT,
    payload: cityName,
  }),

  setPlacesSelected: (placesSelected) => ({
    type: ActionType.SET_PLACES_SELECTED,
    payload: placesSelected
  }),

  loadData: (placesAll) => ({
    type: ActionType.LOAD_DATA,
    payload: placesAll
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_CURRENT:
      return Object.assign({}, state, {
        cityCurrent: action.payload
      });

    case ActionType.SET_PLACES_SELECTED:
      return Object.assign({}, state, {
        placesSelected: action.payload
      });

    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        placesAll: action.payload,
        // citiesList: action.payload.citiesList,
        // cityCurrent: action.payload.cityCurrent,
        // placesSelected: action.payload.placesSelected
      });
  }

  return state;
};

const Operations = {
  loadData: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const placesAll = response.data;
          // const citiesList = getCitiesList(placesAll);
          // const cityCurrent = getRandomCity(citiesList);
          // const placesSelected = getPlacesSelected(cityCurrent, placesAll);

          dispatch(ActionsCreator.loadData(placesAll));
        }
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
