import axios from 'axios';
import {
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_GET_CATEGORIES,
} from '../types';

const { REACT_APP_BACKEND } = process.env;

export const getCategories = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_CATEGORIES });
  axios
    .get(`${REACT_APP_BACKEND}/api/categories`)
    .then((res) => {
      dispatch({
        type: GET_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_CATEGORIES_FAILED,
        payload: error.response?.data,
      });
    });
};
