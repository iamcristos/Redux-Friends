import axois from '../../axios';
import * as action from './actionType';

const fetchSuccess = friend => ({
  type: action.FETCH_SUCCESS,
  payload: friend,
});

const fetchFriend = () => async (dispatch) => {
  try {
    const response = await axois().get('http://localhost:5000/api/friends');
    debugger
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default fetchFriend;
