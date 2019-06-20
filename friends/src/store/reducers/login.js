import * as actions from '../actions/actionType';

const initialState = {
  login: false,
  error: '',
  token: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      localStorage.setItem('userToken', action.payload);
      return {
        ...state,
        login: true,
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        login: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
