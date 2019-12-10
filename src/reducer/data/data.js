import {preparePlacesData, preparePlace, getCitiesList, getRandomCity} from "../../until.js";

const REQUEST_URL = {
  HOTELS: `/hotels`,
  FAVORITE: `/favorite`
};

const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  LOAD_PLACES_DATA: `LOAD_PLACES_DATA`,
  ADD_FAVORITE_PLACE: `ADD_FAVORITE_PLACE`
};

const ActionsCreator = {
  changeCityCurrent: (cityName) => ({
    type: ActionType.CHANGE_CITY_CURRENT,
    payload: cityName,
  }),

  loadData: (placesAll, citiesList, cityCurrent) => ({
    type: ActionType.LOAD_PLACES_DATA,
    payload: {placesAll, citiesList, cityCurrent}
  }),

  addFavoritePlace: (favoritePlace) => ({
    type: ActionType.ADD_FAVORITE_PLACE,
    payload: favoritePlace
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY_CURRENT:
      return Object.assign({}, state, {
        cityCurrent: action.payload
      });

    case ActionType.LOAD_PLACES_DATA:
      return Object.assign({}, state, {
        placesAll: action.payload.placesAll,
        citiesList: action.payload.citiesList,
        cityCurrent: action.payload.cityCurrent,
      });

    case ActionType.ADD_FAVORITE_PLACE:
      return Object.assign({}, state, {
        placesAll: state.placesAll.map((item) => {
          if (item.id === action.payload.id) {
            item.isFavorite = action.payload.isFavorite;
          }
          return item;
        })
      });
  }

  return state;
};

const Operations = {
  loadData: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.HOTELS)
      .then((response) => {
        if (response.status === 200) {
          const placesAll = preparePlacesData(response.data);
          const citiesList = getCitiesList(placesAll);
          const cityCurrent = getRandomCity(citiesList);

          dispatch(ActionsCreator.loadData(placesAll, citiesList, cityCurrent));
        }
      });
  },

  sendFavoriteData: (id, status) => (dispatch, _, api) => {
    return api.post(`${REQUEST_URL.FAVORITE}/${id}/${status}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionsCreator.addFavoritePlace(preparePlace(response.data)));
        }
      });
  },

  loadFavoritesData: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.FAVORITE)
      .then((response) => {
        if (response.status === 200) {
          console.log(preparePlacesData(response.data));
        }
      });
  },
};

export {
  Operations,
  ActionsCreator,
  reducer
};
