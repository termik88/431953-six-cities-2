import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PlaceCard from './place-card.jsx';

describe(`PlaceCard component e2e test.`, () => {

  Enzyme.configure({adapter: new Adapter()});

  it(`Click on card correctly works link`, () => {
    const mock = `Beautiful &amp; luxurious apartment at great location`;
    const clickHandler = jest.fn();
    const placeCard = shallow(<PlaceCard
      title = {mock}
      onClick = {clickHandler}
    />);

    const link = placeCard.find(`.place-card__name a`);
    link.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
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
