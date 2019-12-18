import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './layout';
jest.mock(`../header/header.jsx`);

describe(`Layout component test.`, () => {
  it(`Correctly renders after relaunch`, () => {
    const mockComponent = <div></div>;
    const mainPage = renderer
      .create(
          <Layout layoutClassName="page">
            {mockComponent}
          </Layout>
      ).toJSON();

    expect(mainPage).toMatchSnapshot();
  });
});
