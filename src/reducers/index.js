// import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/index"
import setLoginSuccess from '../actions/index';
import setLoginError from '../actions/index';

const initialState = {
  success: false,
  error: null
};

export const index = (state = initialState, action) => {
  switch (action.type) {
    case setLoginSuccess:
      return Object.assign({}, state, {
        success: action.success
      });
    case setLoginError:
      return Object.assign({}, state, {
        error: action.error
      });
    default:
      return state;
  }
};
