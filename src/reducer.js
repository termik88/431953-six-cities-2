const initialState = {
  cityCurrent: ``,
  citiesList: [],
  placesAll: [],
  placesSelected: [],
  isAuthorizationRequired: false
};

const ActionType = {
  CHANGE_CITY_CURRENT: `CHANGE_CITY_CURRENT`,
  SET_CITIES_LIST: `SET_CITIES_LIST`,
  SET_PLACES_SELECTED: `SET_PLACES_SELECTED`,
  LOAD_PLACES_ALL: `LOAD_PLACES_ALL`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
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

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  })
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

    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
  }

  return state;
};

const Operations = {
  loadPlacesAll: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const
        dispatch(ActionsCreator.loadPlacesAll(response.data));
      });
  }
};

export {
  Operations,
  ActionsCreator,
  reducer
};
