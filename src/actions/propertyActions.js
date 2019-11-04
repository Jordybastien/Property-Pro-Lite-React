import axios from "axios";
import { GET_ERRORS, GET_PROPERTIES, SINGLE_PROPERTY } from "./types";

const { BASE_URL } = process.env;
export const fetchAllProperties = () => dispatch => {
  axios
    .get(`${BASE_URL}allProperties`)
    .then(res =>
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const getPropertyById = id => dispatch => {
  axios
    .get(`${BASE_URL}properties/${id}`)
    .then(res =>
      dispatch({
        type: SINGLE_PROPERTY,
        payload: res.data
      })
    )
    .catch(err => (window.location.href = "/"));
};
