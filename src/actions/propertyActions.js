import axios from "axios";
import { GET_ERRORS, GET_PROPERTIES } from "./types";

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
