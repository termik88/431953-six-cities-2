import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build';
import {Router} from "react-router";
import {createBrowserHistory} from "history";

import {getCitiesList} from "../../until.js";
import places from "../../mocks/places.js";
import {SignInPage} from "./sign-in-page.jsx";

Enzyme.configure({adapter: new Adapter()});

describe(`SignInPage component test.`, () => {
  const citiesList = getCitiesList(places);
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const mockDate = {
    cityCurrent: citiesList[0],
    email: `e1@e1.ru`,
    password: `ddfgdfdgf`,
    isValidationInput: true,
    onInputChange: handleChange,
    onSendAuthorizationData: handleClick,
  };
  const component = mount(
      <Router history={createBrowserHistory()}>
        <SignInPage
          {...mockDate}
        />
      </Router>);

  it(`Click onSubmit`, () => {
    const button = component.find(`.login__submit`);
    button.simulate(`click`, {
      preventDefault: () => {},
    });
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it(`change input email`, () => {
    const input = component.find(`.login__input--email`);
    input.simulate(`change`, {
      preventDefault: () => {},
    });
    expect(mockDate.onInputChange).toHaveBeenCalledTimes(1);
  });

  it(`change input password`, () => {
    const input = component.find(`.login__input--password`);
    input.simulate(`change`, {
      preventDefault: () => {},
    });
    expect(mockDate.onInputChange).toHaveBeenCalledTimes(2);
  });
});
