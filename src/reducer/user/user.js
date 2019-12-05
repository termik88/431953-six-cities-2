const REQUEST_URL = {
  LOGIN: `/login`
};

const initialState = {
  isAuthorizationRequired: false
};

const ActionType = {
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

const ActionsCreator = {
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
  }

  return state;
};

const Operations = {
  sendAuthorizationData: (email, password) => (dispatch, _, api) => {
    return api.post(REQUEST_URL.LOGIN, email, password)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        }
      });
  }
};

export {
  ActionsCreator,
  Operations,
  reducer
};
