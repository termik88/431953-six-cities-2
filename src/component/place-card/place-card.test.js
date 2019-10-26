import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

describe(`PlaceCard component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mock = `Canal View Prinsengracht`;
    const clickHandler = jest.fn();
    const test = renderer
      .create(<PlaceCard
        title = {mock}
        onClick = {clickHandler}
      />)
      .toJSON();

    expect(test).toMatchSnapshot();
  });
});
