import React from "react";
import FavoritesCity from "../favorites-city/favorites-city.jsx";

const FavoritesFilled = ({favoritesCityList, favoritesOffers, handleClickCityName}) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {favoritesCityList.map((city, key) => (
              <FavoritesCity
                key = {`city-${city}-${key}`}
                cityName = {city}
                path = {`/`}
                handleClickCityName = {handleClickCityName}

                favoritesOffers = {favoritesOffers}
              />
            ))}

          </ul>
        </section>
      </div>
    </main>
  );
};

export default FavoritesFilled;
