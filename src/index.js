import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store.js";
import App from './component/app/app.jsx';

import places from './mocks/places.js';
import {ActionsCreator} from "./reducer";

// eslint-disable-next-line no-shadow
const init = (places) => {

  store.dispatch(ActionsCreator.loadPlaces(places));

  ReactDOM.render(
      <Provider store={store}>
        <App/>,
      </Provider>,
      document.querySelector(`#root`)
  );
};

init(places);
