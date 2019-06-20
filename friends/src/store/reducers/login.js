import * as actions from '../actions/actionType';

const initialState = {
  login: false,
  error: '',
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
