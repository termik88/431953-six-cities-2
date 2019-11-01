import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = ({places}) => {
  return (
    <Main
      places = {places}
    />
  );
};

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    src: PropTypes.string,
    type: PropTypes.string,
    premium: PropTypes.bool,
    rating: PropTypes.number,
    price: PropTypes.number,
  })).isRequired
};

export default App;
