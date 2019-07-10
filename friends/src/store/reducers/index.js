import * as actions from '../actions/actionType';

const initialState = {
  friends: [],
  error: '',
};
const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default friendReducer;
