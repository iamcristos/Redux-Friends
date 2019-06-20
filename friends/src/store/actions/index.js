import axois from 'axios';
import * as action from './actionType';

const loginSuccess = payload => ({
  type: action.LOGIN_SUCCESS,
  payload,
});

const loginError = payload => ({
  type: action.FETCH_ERROR,
  payload,
});

const postLogin = (username, password) => async (dispatch) => {
  try {
    const formData = { username, password };
    const login = await axois.post('http://localhost:5000/api/login', formData);
    dispatch(loginSuccess(login.data.payload));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const addTokenToLocalStorage = () => next => (actions) => {
  if (actions.type === action.LOGIN_SUCCESS) {
    localStorage.setItem('userToken', actions.payload);
  }
  next(actions);
};

export default postLogin;
