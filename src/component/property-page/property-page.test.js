import React from 'react';
import renderer from 'react-test-renderer';

import places from "../../mocks/places.js";
import reviews from "../../mocks/reviews.js";

import {PropertyPage} from "./property-page.jsx";

jest.mock(`../favorite-button/favorite-button.jsx`);
jest.mock(`../map/map.jsx`);

describe(`PropertyPage component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      places,
      comments: reviews,
      match: {
        params: {
          id: `1`
        }
      },
      isAuthorizationRequired: false,
      isLoading: false,
      errorInfo: ``,
      onSendComment: jest.fn(),
      loadDataComments: jest.fn(),
    };

    const component = renderer
      .create(
          <PropertyPage
            {...mockDate}
          />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
