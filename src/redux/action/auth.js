import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REQUEST_AUTH,
  AUTH_FAILIED,
  AUTH_SUCCESS,
  SET_UNAUTHENTICATED,
  REQUEST_SIGNUP,
} from '../types';
import jwtDecode from 'jwt-decode';

const { REACT_APP_BACKEND } = process.env;

export const loginAction = (userData) => (dispatch) => {
  dispatch({ type: REQUEST_AUTH });

  axios
    .post(`${REACT_APP_BACKEND}/api/auth/login`, userData)
    .then((res) => {
      setAuthorization(res.data.token);
      toast.success(res.data.message);
      const { roles } = jwtDecode(res.data.token);
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data,
        roles,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_FAILIED,
        payload: error.response?.data?.error,
      });
      toast.error(error.response?.data?.error);
    });
};

export const signupAction = (userData) => (dispatch) => {
  dispatch({ type: REQUEST_SIGNUP });

  axios
    .post(`${REACT_APP_BACKEND}/api/auth/signup`, userData)
    .then((res) => {
      setAuthorization(res.data.token);
      toast.success(res.data.message);
      const { roles } = jwtDecode(res.data.token);
      dispatch({
        type: AUTH_SUCCESS,
        payload: res.data,
        roles,
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTH_FAILIED,
        payload: error.response?.data?.error,
      });
      toast.error(error.response?.data?.error);
    });
};

export const setAuthorization = (token) => {
  const IdToken = token;
  localStorage.setItem('IdToken', IdToken);
  //seting authorization to the header axios
  axios.defaults.headers.common['token'] = IdToken;
};

export const logoutUser = () => (dispatch) => {
  // set logout on backend later
  localStorage.removeItem('IdToken');
  delete axios.defaults.headers.common['token'];
  dispatch({ type: SET_UNAUTHENTICATED });
};
