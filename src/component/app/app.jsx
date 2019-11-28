import React from 'react';
import SvgBlock from '../svg-block/svg-block.jsx';
import {MainContainer} from '../main/main.jsx';

// const getPageScreen = () => {
//   switch (location.pathname) {
//     case `/`:
//       return <Main/>;
//     case `/place-details`:
//       return <PlaceDetails place={places[0]} />;
//   }
//
//   return null;
// };
//
// const App = () => {
//   return <React.Fragment>{getPageScreen()}</React.Fragment>;
// };

const App = () => {
  return (
    <>
      <SvgBlock/>
      <MainContainer/>
    </>
  );
};

export default App;
