import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import {getCitiesList} from "../../until.js";
import places from "../../mocks/mocks.js";
import {SignInPage} from "./sign-in-page.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`SignInPage component test.`, () => {
  const citiesList = getCitiesList(places);
  it(`calls onSubmit prop function when form is submitted`, () => {
    const handleClick = jest.fn();
    const mockDate = {
      cityCurrent: citiesList[0],
      email: `e1@e1.ru`,
      password: `ddfgdfdgf`,
      isValidationInput: true,
      onInputChange: jest.fn(),
      onSendAuthorizationData: handleClick,
    };
    const component = mount(
        <Router history={createBrowserHistory()}>
          <SignInPage
            {...mockDate}
          />
        </Router>);

    component.find(`.login__submit`).simulate(`click`, {
      preventDefault: () => {},
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
