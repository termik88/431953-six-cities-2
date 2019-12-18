import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {App} from './app.jsx';
import places from '../../mocks/places';

jest.mock(`../header/header.jsx`);
jest.mock(`../main-page/main-page.jsx`);

it(`App is correctly rendered after launch`, () => {
  const mock = jest.fn();
  mock.mockReturnValue(places);
  const app = renderer
    .create(
        <Router history={createBrowserHistory()}>
          <App onLoadData={mock} onCheckAuthorization={mock}/>
        </Router>
    ).toJSON();

  expect(app).toMatchSnapshot();
});
