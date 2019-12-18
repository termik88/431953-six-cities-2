import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import {userData} from "../../mocks/reviews";
import {Header} from "./header.jsx";

describe(`Header component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockDate = {
      userData,
      isAuthorizationRequired: false
    };

    const test = renderer
      .create(
          <Router history={createBrowserHistory()}>
            <Header
              {...mockDate}
            />
          </Router>).toJSON();

    expect(test).toMatchSnapshot();
  });
});
