import React from 'react';
import Main from './main/main.jsx';

const places = [
  {title: `Beautiful &amp; luxurious apartment at great location`},
  {title: `Wood and stone place`},
  {title: `Canal View Prinsengracht`},
  {title: `Nice, cozy, warm big bed apartment`}];

const App = () => {
  return <Main
    places = {places}
  />;
};

export default App;
