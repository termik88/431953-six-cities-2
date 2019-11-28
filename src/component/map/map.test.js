import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

describe(`Map component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      placesSelected:
        [
          {
            id: 1,
            city: {
              name: `Amsterdam`,
              location: {
                latitude: 52.370216,
                longitude: 4.895168,
                zoom: 10
              }
            },
            previewImage: `img/apartment-01.jpg`,
            images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
            title: `Beautiful & luxurious studio at great location`,
            isFavorite: false,
            isPremium: false,
            rating: 4.8,
            type: `apartment`,
            bedrooms: 3,
            maxAdults: 4,
            price: 120,
            goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
            host: {
              id: 3,
              isPro: true,
              name: `Angelina`,
              avatarUrl: `img/avatar-angelina.jpg`
            },
            description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
            location: {
              latitude: 52.3909553943508,
              longitude: 4.85309666406198,
              zoom: 8
            }
          }
        ],
      active: {
        id: 1,
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10
        }
      }
    };
    const test = renderer
      .create(<Map
        {...mockDate}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
