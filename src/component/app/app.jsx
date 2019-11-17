import React from 'react';

import Main from '../main/main.jsx';
import PlaceDetails from '../place-details/place-details.jsx';

const getPageScreen = () => {
  switch (location.pathname) {
    case `/`:
      return <Main/>;
    case `/place-details`:
      return <PlaceDetails place={places[0]} />;
  }

  return null;
};

const App = () => {
  return <React.Fragment>{getPageScreen()}</React.Fragment>;
};

export default App;
