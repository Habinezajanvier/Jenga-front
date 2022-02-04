import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_ONE_USER,
  GET_ONE_USER_FAILED,
  GET_SELF_PROFILE,
  GET_USERS,
  GET_USERS_FAILED,
  HIRE_USER_FAILLURE,
  HIRE_USER_SUCCESS,
  REQUEST_GET_ONE_USER,
  REQUEST_GET_USERS,
  REQUEST_HIRE_USER,
  REQUEST_UPDATE_USER,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  SEARCH_USER,
  SEARCH_USER_FAILED,
  REQUEST_SEARCH_USERS,
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

export const updateUser = (id, userData) => (dispatch) => {
  dispatch({ type: REQUEST_UPDATE_USER });
  axios
    .put(`${REACT_APP_BACKEND}/api/users/${id}`, userData)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data?.error);
      dispatch({
        type: UPDATE_USER_FAILED,
        payload: error.response?.data?.error,
      });
    });
};

export const requestEmployee =
  (employeeId) => (dispatch) => {
    dispatch({ type: REQUEST_HIRE_USER });
    axios
      .get(
        `${REACT_APP_BACKEND}/api/users/request/${employeeId}`
      )
      .then((res) => {
        toast.success(res.data.message);
        dispatch({
          type: HIRE_USER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((error) => {
        toast.error(error.response?.data?.error);
        dispatch({
          type: HIRE_USER_FAILLURE,
          payload: error.response?.data?.error,
        });
      });
  };

export const searchUser = (query) => (dispatch) => {
  dispatch({ type: REQUEST_SEARCH_USERS });
  axios
    .post(`${REACT_APP_BACKEND}/api/users/search`, {
      query,
    })
    .then((res) => {
      dispatch({
        type: SEARCH_USER,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SEARCH_USER_FAILED,
        payload: error.response?.data?.error,
      });
    });
};

export const getUsersBySkill = (skillId) => (dispatch) => {
  dispatch({ type: REQUEST_GET_USERS });
  axios
    .get(`${REACT_APP_BACKEND}/api/skills/${skillId}/users`)
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
