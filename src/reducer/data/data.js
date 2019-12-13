import {preparePlaces, preparePlace, prepareComments, getCitiesList, getRandomCity} from "../../until.js";

const REQUEST_URL = {
  HOTELS: `/hotels`,
  FAVORITES: `/favorite`,
  COMMENTS: `/comments`
};

const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
  placesFavorites: [],
  citiesListFavorites: [],
  comments: []
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  LOAD_PLACES_DATA: `LOAD_PLACES_DATA`,
  ADD_FAVORITE_PLACE: `ADD_FAVORITE_PLACE`,
  LOAD_DATA_FAVORITES_PLACES: `LOAD_DATA_FAVORITES_PLACES`,
  LOAD_DATA_COMMENTS: `LOAD_DATA_COMMENTS`
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
  }),

  loadDataFavoritesPlaces: (placesFavorites, citiesListFavorites) => ({
    type: ActionType.LOAD_DATA_FAVORITES_PLACES,
    payload: {placesFavorites, citiesListFavorites}
  }),

  loadDataComments: (comments) => ({
    type: ActionType.LOAD_DATA_COMMENTS,
    payload: comments
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

    case ActionType.LOAD_DATA_FAVORITES_PLACES:
      return Object.assign({}, state, {
        placesFavorites: action.payload.placesFavorites,
        citiesListFavorites: action.payload.citiesListFavorites
      });

    case ActionType.LOAD_DATA_COMMENTS:
      return Object.assign({}, state, {
        comments: action.payload
      });
  }

  return state;
};

const Operations = {
  loadData: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.HOTELS)
      .then((response) => {
        if (response.status === 200) {
          const placesAll = preparePlaces(response.data);
          const citiesList = getCitiesList(placesAll);
          const cityCurrent = getRandomCity(citiesList);
          dispatch(ActionsCreator.loadData(placesAll, citiesList, cityCurrent));
        }
      });
  },

  sendFavoriteData: (id, status) => (dispatch, _, api) => {
    return api.post(`${REQUEST_URL.FAVORITES}/${id}/${status}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionsCreator.addFavoritePlace(preparePlace(response.data)));
        }
      });
  },

  getDataFavoritesPlaces: () => (dispatch, _, api) => {
    return api.get(REQUEST_URL.FAVORITES)
      .then((response) => {
        if (response.status === 200) {
          const placesFavorites = preparePlaces(response.data);
          const citiesListFavorites = getCitiesList(placesFavorites);
          dispatch(ActionsCreator.loadDataFavoritesPlaces(placesFavorites, citiesListFavorites));
        }
      });
  },

  loadDataComments: (id) => (dispatch, _, api) => {
    return api.get(`${REQUEST_URL.COMMENTS}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionsCreator.loadDataComments(prepareComments(response.data)));
        }
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
