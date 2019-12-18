import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CitiesList from "./cities-list.jsx";
import places from "../../mocks/places";
import {getCitiesList} from "../../until";

Enzyme.configure({adapter: new Adapter()});

const citiesList = getCitiesList(places);
const handleClickCityName = jest.fn();
const mockDate = {
  citiesList: [citiesList[0]],
  cityCurrent: citiesList[0],
  onChangeCurrentCity: handleClickCityName
};

describe(`CitiesList component e2e test.`, () => {
  const component = shallow(
      <CitiesList
        {...mockDate}
      />);

  const button = component.find(`.locations__item-link`);

  it(`CitiesList click on link`, () => {
    button.simulate(`click`, {
      preventDefault: () => {},
    });
    // expect(handleClickCityName).toHaveBeenCalled();
    expect(handleClickCityName).toHaveBeenCalledWith(`Dusseldorf`);
  });
});
