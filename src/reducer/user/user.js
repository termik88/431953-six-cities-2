import {prepareUser} from "../../until.js";
import {RequestUrls, SuccessfulResponses} from "../../constants/constants.js";

const getInitialState = () => {
  return {
    isAuthorizationRequired: true,
    userData: {},
  };
};

const ActionTypes = {
  LOAD_USER_DATA: `LOAD_USER_DATA`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

const ActionsCreator = {
  requiredAuthorization: (status) => ({
    type: ActionTypes.REQUIRE_AUTHORIZATION,
    payload: status
  }),

  loadUserData: (userData) => ({
    type: ActionTypes.LOAD_USER_DATA,
    payload: userData
  }),
};

const reducer = (state = getInitialState(), action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ActionTypes.LOAD_USER_DATA:
      newState.isAuthorizationRequired = false;
      newState.userData = Object.assign({}, action.payload);
      return newState;
  }

  return state;
};

const Operations = {
  sendAuthorizationData: (email, password, callback) => (dispatch, getState, api) => {
    return api.post(RequestUrls.LOGIN, {email, password})
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadUserData(prepareUser(response.data)));
          callback();
        }
      });
  },

  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(RequestUrls.LOGIN)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadUserData(prepareUser(response.data)));
        }
      });
  }
};

export {
  getInitialState,
  ActionTypes,
  ActionsCreator,
  Operations,
  reducer
};
