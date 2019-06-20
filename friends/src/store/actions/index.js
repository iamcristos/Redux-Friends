import axois from 'axios';
import * as action from './actionType';

const fetchSuccess = () => ({
  type: action.FETCH_SUCCESS,
});

const loginSuccess = payload => ({
  type: action.LOGIN_SUCCESS,
  payload,
});

const postLogin = (username, password) => async (dispatch) => {
    console.log('hi')
  try {
    const formData = { username, password };
    const login = await axois.post('http://localhost:5000/api/login', formData);
    console.log(login);
    dispatch(loginSuccess(login.data.payload));
  } catch (error) {
    console.log(error.message);
  }
};

export default postLogin;
