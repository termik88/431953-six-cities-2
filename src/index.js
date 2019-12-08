import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {BrowserRouter} from "react-router-dom";

import {configureAPI} from './api.js';
import reducer from "./reducer";
import {AppContainer} from './component/app/app.jsx';

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer/>,
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
