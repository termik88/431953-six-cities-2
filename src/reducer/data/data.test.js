import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';
import {reducer, getInitialState, ActionTypes, sortMethodsList, Operations} from "./data";
import {getCitiesList} from "../../until";
import places from "../../mocks/places.js";
import {RequestUrls, SuccessfulResponses} from "../../constants/constants";

describe(`Offers reducer works correctly`, () => {
  let initialState;
  let citiesList;
  beforeEach(() => {
    initialState = getInitialState();
    initialState.placesAll = places;
    citiesList = getCitiesList(places);
    initialState.cityCurrent = citiesList[0];
  });


  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(getInitialState());
  });

  it(`Reducer should change city correctly`, () => {
    const city = initialState.citiesList[1];
    expect(reducer(initialState, {
      type: ActionTypes.CHANGE_CITY_CURRENT,
      payload: city,
    })).toEqual(Object.assign({}, initialState, {cityCurrent: city}));
  });

  it(`Reducer should change sort correctly`, () => {
    expect(reducer(initialState, {
      type: ActionTypes.CHANGE_SORT_METHOD,
      payload: sortMethodsList[1],
    })).toEqual(Object.assign({}, initialState, {
      sortMethodCurrent: Object.assign({}, sortMethodsList[1]),
    }));
  });

  it(`Should make a correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadData = Operations.loadData();

    apiMock
      .onGet(RequestUrls.HOTELS)
      .reply(SuccessfulResponses.OK, places);

    return loadData(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
