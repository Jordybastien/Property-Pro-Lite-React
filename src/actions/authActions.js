import axios from "axios";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
// Register User
export const registerUser = userData => dispatch => {
    const { BASE_URL } = process.env;
  axios
    .post(
      `${BASE_URL}auth/signup`,
      userData
    )
    .then(res => {
      const { token } = res.data.data;
      const response = authenticate(token);
      dispatch(setCurrentUser(response));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
const authenticate = token => {
  // save to localStorage
  // set token to localStorage
  // localStorage only stores strings
  localStorage.setItem("proLiteToken", token);
  // Set token to Auth header
  setAuthToken(token);
  // decode token
  return jwt_decode(token);
};
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// logout user
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("proLiteToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
