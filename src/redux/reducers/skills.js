/* eslint-disable import/no-anonymous-default-export */
import {
  REQUEST_GET_SKILLS,
  GET_ALL_SKILLS,
  GET_SKILLS_FAILED,
  REQUEST_ADD_SKILL_USER,
  ADD_SKILL_TO_USER,
  ADD_SKILL_TO_USER_FAILED,
} from '../types';

const initialState = {
  skills: [],
  skill: {},
  message: null,
  error: null,
  loading: null,
  assignLoading: null,
  assignSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_SKILLS:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
      };

    case GET_ALL_SKILLS:
      return {
        ...state,
        loading: null,
        skills: action.payload.data,
        message: action.payload.message,
      };

    case GET_SKILLS_FAILED:
      return {
        ...state,
        loading: null,
        error: action.payload.error,
      };
    case REQUEST_ADD_SKILL_USER:
      return {
        ...state,
        error: null,
        assignLoading: true,
        assignSuccess: false,
      };
    case ADD_SKILL_TO_USER:
      return {
        ...state,
        message: action.payload.message,
        assignSuccess: true,
        assignLoading: false,
      };

    case ADD_SKILL_TO_USER_FAILED:
      return {
        ...state,
        assignLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
