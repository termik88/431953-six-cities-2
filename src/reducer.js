import city from './mocks/city.js';
import cities from './mocks/cities';
import places from './mocks/places.js';
import placesSelected from './mocks/places-selected.js';

const initialState = {
  city,
  cities,
  places,
  placesSelected
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
  }

  return state;
};

export {
  ActionCreator,
  reducer
};
