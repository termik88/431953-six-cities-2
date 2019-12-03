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

export {
  ActionsCreator,
  reducer
};
