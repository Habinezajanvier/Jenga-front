import axios from 'axios';
import {
  GET_ONE_USER,
  GET_ONE_USER_FAILED,
  GET_SELF_PROFILE,
  GET_USERS,
  GET_USERS_FAILED,
  REQUEST_GET_ONE_USER,
  REQUEST_GET_USERS,
} from '../types';

const { REACT_APP_BACKEND } = process.env;

export const getSelfProfile = () => (dispatch) => {
  axios
    .get(`${REACT_APP_BACKEND}/api/users/me`)
    .then((res) => {
      dispatch({
        type: GET_SELF_PROFILE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ONE_USER_FAILED,
        payload: err.response?.data,
      });
    });
};

export const getUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_USERS });
  axios
    .get(`${REACT_APP_BACKEND}/api/users`)
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USERS_FAILED,
        payload: err.response?.data,
      });
    });
};

export const getOneUser = (id) => (dispatch) => {
  dispatch({ type: REQUEST_GET_ONE_USER });
  axios
    .get(`${REACT_APP_BACKEND}/api/users/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ONE_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ONE_USER_FAILED,
        payload: err.response?.data,
      });
    });
};
