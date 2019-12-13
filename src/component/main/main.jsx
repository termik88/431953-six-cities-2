import React from "react";

import {CitiesListContainer} from "../cities-list/cities-list.jsx";
import {CityPlacesListContainer} from "../city-places-list/city-places-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.jsx";

const WrappedCityPlacesListContainer = withActiveItem(CityPlacesListContainer);

const Main = () => {
  console.log(`rerender main`);
  return (
    <main className="page__main page__main--index">
      <CitiesListContainer/>

      <WrappedCityPlacesListContainer/>
    </main>
  );
};

export default Main;
