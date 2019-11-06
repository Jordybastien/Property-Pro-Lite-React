/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export default axios.create({
  baseURL: 'https://propertyprolitejordy.herokuapp.com/api/v1/',
});
