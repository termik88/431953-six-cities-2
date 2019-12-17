import {prepareUser} from "../../until.js";
import {RequestUrl, SuccessfulResponses} from "../../constants/constants.js";

const initialState = {
  isAuthorizationRequired: true,
  userData: {},
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
};

const ActionsCreator = {
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),

  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData
  }),
};

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      newState.isAuthorizationRequired = action.payload;
      return newState;

    case ActionType.LOAD_USER_DATA:
      newState.userData = Object.assign({}, action.payload);
      return newState;
  }

  return state;
};

const Operations = {
  sendAuthorizationData: (email, password, handleRedirect) => (dispatch, getState, api) => {
    return api.post(RequestUrl.LOGIN, {email, password})
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadUserData(prepareUser(response.data)));
          dispatch(ActionsCreator.requiredAuthorization(false));
          handleRedirect();
        }
      });
  },

  checkAuthorization: () => (dispatch, getState, api) => {
    return api.get(RequestUrl.LOGIN)
      .then((response) => {
        if (response.status === SuccessfulResponses.OK) {
          dispatch(ActionsCreator.loadUserData(prepareUser(response.data)));
          dispatch(ActionsCreator.requiredAuthorization(false));
        }
      });
  }
};

export {
  ActionsCreator,
  Operations,
  reducer
};
