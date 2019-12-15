import {prepareUser} from "../../until.js";

const REQUEST_URL = {
  LOGIN: `/login`
};

const initialState = {
  isAuthorizationRequired: true,
  userData: {}
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOAD_USER_DATA: `LOAD_USER_DATA`
};

const ActionsCreator = {
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case ActionType.LOAD_USER_DATA:
      return Object.assign({}, state, {
        userData: action.payload
      });
  }

  return state;
};

const Operations = {
  sendAuthorizationData: (email, password, handleRedirect) => (dispatch, _, api) => {
    return api.post(REQUEST_URL.LOGIN, {email, password})
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionsCreator.requiredAuthorization(false));
          dispatch(ActionsCreator.loadUserData(prepareUser(response.data)));
          handleRedirect();
        }
      });
  },

  // checkAuthorization: () => (dispatch, _, api) => {
  //   return api.get(REQUEST_URL.LOGIN)
  //     .then((response) => {
  //       if (response.status === 200) {
  //         dispatch(ActionCreator.signIn(prepareUser(response.data)));
  //       }
  //     });
  // }
};

export {
  ActionsCreator,
  Operations,
  reducer
};
