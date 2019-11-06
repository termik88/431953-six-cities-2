import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockDate = {
  place: {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    previewImage: `img/1.png`,
    images: [`img/1.png`, `img/2.png`],
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
      avatarUrl: `img/1.png`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  onMouseEnter: jest.fn(),
  onMouseLeave: jest.fn()
};

describe(`PlaceCard component e2e test.`, () => {
  const component = shallow(<PlaceCard
    {...mockDate}
  />);

  it(`Card mouse on`, () => {
    component
      .find(`.place-card`)
      .simulate(`mouseEnter`);
    expect(mockDate.onMouseEnter).toHaveBeenCalled();
    expect(mockDate.onMouseEnter).toHaveBeenCalledWith(mockDate.place);
  });
});


/* const preventDefault = jest.fn();
*  startButton.simulate(`click`, {preventDefault});
*  expect(preventDefault).toHaveBeenCalledTimes(1);
*  Такой тест проверит, что при нажатии на кнопку
*  форма не отправляется на сервер и событие отменяется
*  mount для глубокого сквозного теста
*  simulate(`click`, {preventDefault()}) если mount
* */
