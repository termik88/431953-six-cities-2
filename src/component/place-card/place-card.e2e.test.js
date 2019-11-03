import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

const mockDate = {
  place: {
    name: `Beautiful & luxurious studio at great location`,
    src: `img/apartment-01.jpg`,
    type: `Apartment`,
    premium: true,
    rating: 93,
    price: 180,
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
