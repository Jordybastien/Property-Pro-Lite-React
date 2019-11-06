import axios from "axios";
import {
  GET_ERRORS,
  GET_PROPERTIES,
  SINGLE_PROPERTY,
  PROPERTY_BY_TYPE
} from "./types";
import db from "../config/dbCall";

const { BASE_URL } = process.env;
export const fetchAllProperties = () => dispatch => {
  db.get("allProperties")
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
  db.get(`properties/${id}`)
    .then(res =>
      dispatch({
        type: SINGLE_PROPERTY,
        payload: res.data
      })
    )
    .catch(err => (window.location.href = "/"));
};

export const getPropertyByType = type => dispatch => {
  axios
    .get(`${BASE_URL}getProperty/${type}`)
    .then(res =>
      dispatch({
        type: PROPERTY_BY_TYPE,
        payload: res.data
      })
    )
    .catch(err => (window.location.href = "/allProperties"));
};
