const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

export const setLoginSuccess = isLoginSuccessful => ({
  type: LOGIN_SUCCESS,
  isLoginSuccessful
});

export const setLoginError = error => ({
  type: LOGIN_ERROR,
  error
});

export default {setLoginError , setLoginSuccess};
