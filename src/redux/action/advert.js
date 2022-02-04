import axios from 'axios';
import {
  CREATE_ADVERT,
  CREATE_ADVERT_FAILED,
  DELETE_ADVERTS,
  DELETE_ADVERTS_FAILED,
  GET_ADVERTS,
  GET_ADVERTS_FAILED,
  REQUEST_CREATE_ADVERT,
  REQUEST_DELETE_ADVERTS,
  REQUEST_GET_ADVERTS,
} from '../types';

const { REACT_APP_BACKEND } = process.env;

export const createAdvert = (data) => (dispatch) => {
  dispatch({ type: REQUEST_CREATE_ADVERT });
  axios
    .post(`${REACT_APP_BACKEND}/api/advertisements`, data)
    .then((res) => {
      dispatch({ type: CREATE_ADVERT, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_ADVERT_FAILED,
        payload: error.response?.data,
      });
    });
};

export const getAdverts = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_ADVERTS });
  axios
    .get(`${REACT_APP_BACKEND}/api/advertisements`)
    .then((res) => {
      dispatch({ type: GET_ADVERTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: GET_ADVERTS_FAILED,
        payload: error.response?.data,
      });
    });
};

export const deleteAdverts = (id) => (dispatch) => {
  dispatch({ type: REQUEST_DELETE_ADVERTS });
  axios
    .delete(`${REACT_APP_BACKEND}/api/advertisements/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_ADVERTS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_ADVERTS_FAILED,
        payload: error.response?.data,
      });
    });
};
