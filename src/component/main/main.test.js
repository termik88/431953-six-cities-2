import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

describe(`Main commponet test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mock = [
      {title: `Beautiful &amp; luxurious apartment at great location`},
      {title: `Wood and stone place`},
      {title: `Canal View Prinsengracht`},
      {title: `Nice, cozy, warm big bed apartment`}];
    const test = renderer
      .create(<Main
        places = {mock}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
