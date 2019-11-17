const getCities = () => [...new Set(places.map((place) => place.city.name))];

const getPlacesSelected = (cityName) => places.filter((place) => place.city.name === cityName);

const initialState = {
  city: `Amsterdam`,
  cities: [],
  places: [],
  placesSelected: []
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_PLACES: `LOAD_PLACES`
};

const ActionsCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),

  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        placesSelected: getPlacesSelected(action.payload)
      });

    case ActionType.LOAD_PLACES:
      return Object.assign({}, state, {
        places: action.payload
      });
  }

  return state;
};

export {
  ActionsCreator,
  reducer
};
