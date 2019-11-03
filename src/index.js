import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app/app.jsx';
import Offers from './mocks/offers.js';

const init = (informationOffers) => {
  ReactDOM.render(
      <App
        places = {informationOffers}
      />,
      document.querySelector(`#root`)
  );
};

init(Offers);
