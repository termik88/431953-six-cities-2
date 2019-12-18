import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import {FavoriteButton} from "./favorite-button.jsx";
import places from "../../mocks/places";

Enzyme.configure({adapter: new Adapter()});

describe(`FavoriteButton`, () => {
  const mockDate = {
    buttonName: `place-card`,
    id: 1,
    placesAll: places,
    isAuthorizationStatus: false,
    onSendFavoriteData: jest.fn()
  };

  const component = mount(
      <Router history={createBrowserHistory()}>
        <FavoriteButton
          {...mockDate}
        />
      </Router>);

  const button = component.find(`.button`);
  it(`Click `, () => {
    button.simulate(`click`);
    expect(mockDate.onSendFavoriteData).toHaveBeenCalledTimes(1);
  });
});
