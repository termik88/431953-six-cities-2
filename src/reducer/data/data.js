import {preparePlaces, getCitiesList, getRandomCity} from "../../until";

const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  LOAD_DATA: `LOAD_DATA`,
};

const ActionsCreator = {
  changeCityCurrent: (cityName) => ({
    type: ActionType.CHANGE_CITY_CURRENT,
    payload: cityName,
  }),

  loadData: (placesAll, citiesList, cityCurrent) => ({
    type: ActionType.LOAD_DATA,
    payload: {placesAll, citiesList, cityCurrent}
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_CURRENT:
      return Object.assign({}, state, {
        cityCurrent: action.payload
      });

    case ActionType.LOAD_DATA:
      return Object.assign({}, state, {
        placesAll: action.payload.placesAll,
        citiesList: action.payload.citiesList,
        cityCurrent: action.payload.cityCurrent,
      });
  }

  return state;
};

const Operations = {
  loadData: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        if (response.status === 200) {
          const placesAll = preparePlaces(response.data);
          const citiesList = getCitiesList(placesAll);
          const cityCurrent = getRandomCity(citiesList);

          dispatch(ActionsCreator.loadData(placesAll, citiesList, cityCurrent));
        }
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
