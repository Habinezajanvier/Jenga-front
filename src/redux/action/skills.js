import axios from 'axios';
import { toast } from 'react-toastify';
import {
  REQUEST_GET_SKILLS,
  GET_ALL_SKILLS,
  GET_SKILLS_FAILED,
  REQUEST_ADD_SKILL_USER,
  ADD_SKILL_TO_USER,
  ADD_SKILL_TO_USER_FAILED,
  REQUEST_CREATE_SKILL,
  CREATE_SKILL,
  CREATE_SKILL_FAILED,
} from '../types';

const { REACT_APP_BACKEND } = process.env;

export const getSkills = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_SKILLS });
  axios
    .get(`${REACT_APP_BACKEND}/api/skills`)
    .then((res) => {
      dispatch({
        type: GET_ALL_SKILLS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_SKILLS_FAILED,
        payload: error.response?.data,
      });
    });
};

export const assignUserSkill =
  (skillId, userId) => (dispatch) => {
    dispatch({ type: REQUEST_ADD_SKILL_USER });
    axios
      .put(
        `${REACT_APP_BACKEND}/api/skills/assign/${userId}`,
        { skillId }
      )
      .then((res) => {
        dispatch({
          type: ADD_SKILL_TO_USER,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_SKILL_TO_USER_FAILED,
          payload: error.response?.data,
        });
      });
  };

export const createSkill = (data) => (dispatch) => {
  dispatch({ type: REQUEST_CREATE_SKILL });
  axios
    .post(`${REACT_APP_BACKEND}/api/skills`, data)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: CREATE_SKILL,
        payload: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: CREATE_SKILL_FAILED,
        payload: error.response?.data,
      });
      toast.error(error.response?.data?.error);
    });
};
