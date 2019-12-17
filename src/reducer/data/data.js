import {preparePlaces, preparePlace, prepareComments, getCitiesList, getRandomCity} from "../../until.js";
import {getPlacesAll, getIsLoading} from "./selectors.js";
import {RequestUrl, SuccessfulResponses} from "../../constants/constants.js";

const sortMethodsList = [
  {name: `Popular`, method: () => {}},
  {name: `Price: low to high`, method: (a, b) => a.price - b.price},
  {name: `Price: high to low`, method: (a, b) => b.price - a.price},
  {name: `Top rated first`, method: (a, b) => b.rating - a.rating}];

const initialState = {
  sortMethodsList,
  sortMethodCurrent: sortMethodsList[0],
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
  placesFavorites: [],
  citiesListFavorites: [],
  comments: [],
  isLoading: false,
  error: ``
};

const ActionType = {
  CHANGE_SORT_METHOD: `CHANGE_SORT_METHOD`,
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  LOAD_PLACES_DATA: `LOAD_PLACES_DATA`,
  ADD_FAVORITE_PLACE: `ADD_FAVORITE_PLACE`,
  LOAD_DATA_FAVORITES_PLACES: `LOAD_DATA_FAVORITES_PLACES`,
  LOAD_DATA_COMMENTS: `LOAD_DATA_COMMENTS`,
  CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`,
  GET_ERROR_INFO: `GET_ERROR_INFO`
};

const ActionsCreator = {
  changeSortMethod: (method) => ({
    type: ActionType.CHANGE_SORT_METHOD,
    payload: method
  }),

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
  }),

  changeLoadingStatus: (isLoading) => ({
    type: ActionType.CHANGE_LOADING_STATUS,
    payload: isLoading
  }),

  getErrorInfo: (error) => ({
    type: ActionType.GET_ERROR_INFO,
    payload: error
  })
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ActionType.CHANGE_SORT_METHOD:
      newState.sortMethodCurrent = Object.assign({}, action.payload);
      return newState;

    case ActionType.CHANGE_CITY_CURRENT:
      newState.cityCurrent = action.payload;
      return newState;

    case ActionType.LOAD_PLACES_DATA:
      newState.placesAll = [...action.payload.placesAll];
      newState.citiesList = [...action.payload.citiesList];
      newState.cityCurrent = action.payload.cityCurrent;
      return newState;

    case ActionType.ADD_FAVORITE_PLACE:
      newState.placesAll = [...action.payload];
      return newState;


    case ActionType.LOAD_DATA_FAVORITES_PLACES:
      newState.placesFavorites = [...action.payload.placesFavorites];
      newState.citiesListFavorites = [...action.payload.citiesListFavorites];
      return newState;

    case ActionType.LOAD_DATA_COMMENTS:
      newState.comments = [...action.payload];
      return newState;

    case ActionType.CHANGE_LOADING_STATUS:
      newState.isLoading = action.payload;
      return newState;

    case ActionType.GET_ERROR_INFO:
      newState.error = action.payload;
      return newState;
  }

  return state;
};

const Operations = {
  loadData: () => (dispatch, getState, api) => {
    return api.get(RequestUrl.HOTELS)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          const placesAll = preparePlaces(response.data);
          const citiesList = getCitiesList(placesAll);
          const cityCurrent = getRandomCity(citiesList);
          dispatch(ActionsCreator.loadData(placesAll, citiesList, cityCurrent));
        }
      });
  },

  sendFavoriteData: (id, status) => (dispatch, getState, api) => {
    return api.post(`${RequestUrl.FAVORITES}/${id}/${status}`)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          const placeNew = preparePlace(response.data);
          const placesOld = getPlacesAll(getState());
          const placesModified = placesOld.map((item) => {
            if (item.id === placeNew.id) {
              item.isFavorite = placeNew.isFavorite;
            }
            return item;
          });

          dispatch(ActionsCreator.addFavoritePlace(placesModified));
        }
      });
  },

  getDataFavoritesPlaces: () => (dispatch, getState, api) => {
    return api.get(RequestUrl.FAVORITES)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          const placesFavorites = preparePlaces(response.data);
          const citiesListFavorites = getCitiesList(placesFavorites);
          dispatch(ActionsCreator.loadDataFavoritesPlaces(placesFavorites, citiesListFavorites));
        }
      });
  },

  loadDataComments: (id) => (dispatch, getState, api) => {
    return api.get(`${RequestUrl.COMMENTS}/${id}`)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadDataComments(prepareComments(response.data)));
        }
      });
  },

  sendComment: (id, comment, callBack) => (dispatch, getState, api) => {
    dispatch(ActionsCreator.changeLoadingStatus(!getIsLoading(getState())));
    return api.post(`${RequestUrl.COMMENTS}/${id}`, comment)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadDataComments(prepareComments(response.data)));
          dispatch(ActionsCreator.changeLoadingStatus(!getIsLoading(getState())));
          dispatch(ActionsCreator.getErrorInfo(``));
          callBack();
        }
      })
      .catch(() => {
        dispatch(ActionsCreator.changeLoadingStatus(!getIsLoading(getState())));
        dispatch(ActionsCreator.getErrorInfo(`An error has occurred.`));
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
