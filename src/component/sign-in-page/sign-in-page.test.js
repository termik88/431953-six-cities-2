import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {getCitiesList} from "../../until.js";
import places from "../../mocks/places.js";
import {SignInPage} from "./sign-in-page.jsx";

describe(`SignInPage component test.`, () => {
  const citiesList = getCitiesList(places);
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      cityCurrent: citiesList[0],
      email: `e1@.ru`,
      password: `d`,
      isValidationInput: true,
      onInputChange: jest.fn(),
      onSendAuthorizationData: jest.fn
    };
    const component = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <SignInPage
              {...mockDate}
            />
          </Router>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
