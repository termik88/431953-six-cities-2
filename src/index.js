import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store.js";
import App from './component/app/app.jsx';

import placesAll from './mocks/places.js';
import {ActionsCreator} from "./reducer";
import {getCities, getPlacesSelected} from "./until";

// eslint-disable-next-line no-shadow
const init = (placesAll) => {

  store.dispatch(ActionsCreator.loadPlaces(placesAll));
  store.dispatch(ActionsCreator.changeCityCurrent(placesAll[0].city.name));
  store.dispatch(ActionsCreator.setCitiesList(getCities(placesAll)));
  store.dispatch(ActionsCreator.setPlacesSelected(getPlacesSelected(placesAll[0].city.name, placesAll)));

  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(placesAll);
