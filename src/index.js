import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {compose} from "recompose";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import {configureAPI} from './api.js';
import reducer from "./reducer";
import {AppContainer} from './component/app/app.jsx';

const init = () => {
  const history = createBrowserHistory();
  const api = configureAPI((...args) => store.dispatch(...args), (path) => history.push(path));
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
      )
  );

  ReactDOM.render(
      <Provider store={store}>
        <Router history={history}>
          <AppContainer/>,
        </Router>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
