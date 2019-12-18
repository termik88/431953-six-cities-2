import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './card.jsx';
import places from "../../mocks/mocks";
import {Router} from "react-router";
import {createBrowserHistory} from "history";

Enzyme.configure({adapter: new Adapter()});

jest.mock(`../favorite-button/favorite-button.jsx`);

const mockDate = {
  cardName: `cities`,
  place: places[0],
  handleAction: jest.fn(),
};

describe(`Card component e2e test.`, () => {
  const component = mount(
      <Router history={createBrowserHistory()}>
        <Card
          {...mockDate}
        />
      </Router>);

  it(`Card mouse on Enter`, () => {
    component
      .find(`.place-card`)
      .simulate(`mouseenter`);
    expect(mockDate.handleAction).toHaveBeenCalled();
  });

  it(`Card mouse on Leave`, () => {
    component
      .find(`.place-card`)
      .simulate(`mouseleave`);
    expect(mockDate.handleAction).toHaveBeenCalled();
  });
});
