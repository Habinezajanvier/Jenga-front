import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ASSIGN_SKILL_FAILED,
  ASSIGN_SKILL_SUCCESS,
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAILED,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_ASSIGN_SKILL,
  REQUEST_CREATE_CATEGORY,
  REQUEST_DELETE_CATEGORY,
  REQUEST_GET_CATEGORIES,
  REQUEST_UPDATE_CATEGORY,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
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

export const assignCategorySkill =
  (skills, id) => (dispatch) => {
    dispatch({ type: REQUEST_ASSIGN_SKILL });
    axios
      .put(
        `${REACT_APP_BACKEND}/api/categories/assign/${id}`,
        { skills }
      )
      .then((res) => {
        dispatch({
          type: ASSIGN_SKILL_SUCCESS,
          payload: res.data,
        });
        toast.success(res.data?.message);
      })
      .catch((error) => {
        dispatch({
          type: ASSIGN_SKILL_FAILED,
          payload: error.response?.data,
        });
        toast.error(error.response?.data?.error);
      });
  };

export const createCategory = (data) => (dispatch) => {
  dispatch({ type: REQUEST_CREATE_CATEGORY });
  axios
    .post(`${REACT_APP_BACKEND}/api/categories`, data)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: CREATE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CREATE_CATEGORY_FAILED,
        payload: error.response?.data,
      });
      toast.error(error.response?.data?.error);
    });
};

export const updateCategory = (data, id) => (dispatch) => {
  dispatch({ type: REQUEST_UPDATE_CATEGORY });
  axios
    .put(`${REACT_APP_BACKEND}/api/categories/${id}`, data)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: UPDATE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: UPDATE_CATEGORY_FAILED,
        payload: error.response?.data,
      });
      toast.error(error.response?.data?.error);
    });
};
export const deleteCategory = (id) => (dispatch) => {
  dispatch({ type: REQUEST_DELETE_CATEGORY });
  axios
    .delete(`${REACT_APP_BACKEND}/api/categories/${id}`)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: DELETE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: DELETE_CATEGORY_FAILED,
        payload: error.response?.data,
      });
      toast.error(error.response?.data?.error);
    });
};
