import axios from 'axios';
import { toast } from 'react-toastify';
import {
  ASSIGN_SKILL_FAILED,
  ASSIGN_SKILL_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_ASSIGN_SKILL,
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
