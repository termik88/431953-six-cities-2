import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {getInitialState, reducer, ActionTypes, Operations} from "./user";
import {RequestUrls, SuccessfulResponses} from "../../constants/constants";

describe(`Reducer works correctly`, () => {
  let initialState;
  beforeEach(() => {
    initialState = getInitialState();
  });

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(getInitialState());
  });

  it(`Login works correctly`, () => {
    const payload = {
      id: 1,
      email: `e1@e1.ru`,
      name: `e1`,
    };

    expect(reducer(initialState, {
      type: ActionTypes.LOAD_USER_DATA,
      payload,
    })).toEqual(Object.assign({}, initialState, {
      userData: payload,
      isAuthorizationRequired: false,
    }));
  });

  it(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const callback = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signIn = Operations.sendAuthorizationData(`e1@e1.ru`, `qwerty`, callback);
    const payload = {
      id: 1,
      email: `e1@e1.ru`,
      name: `e1`,
      avatarUrl: `img/1.png`,
      isPro: false
    };

    apiMock
      .onPost(RequestUrls.LOGIN)
      .reply(SuccessfulResponses.OK, {
        id: 1,
        email: `e1@e1.ru`,
        name: `e1`,
        [`avatar_url`]: `img/1.png`,
        [`is_pro`]: false
      });

    return signIn(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenLastCalledWith({
          type: ActionTypes.LOAD_USER_DATA,
          payload
        });
        expect(callback).toHaveBeenCalledTimes(1);
      });
  });
});
