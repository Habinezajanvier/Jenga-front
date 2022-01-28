/* eslint-disable import/no-anonymous-default-export */
import {
  ASSIGN_SKILL_FAILED,
  ASSIGN_SKILL_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_ASSIGN_SKILL,
  REQUEST_GET_CATEGORIES,
} from '../types';

const initialState = {
  categories: [],
  category: {},
  assignLoading: null,
  assignSuccess: false,
  message: null,
  error: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: null,
        categories: action.payload.data,
        message: action.payload.message,
      };

    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: null,
        error: action.payload.error,
      };
    case REQUEST_ASSIGN_SKILL:
      return {
        ...state,
        assignLoading: true,
        assignSuccess: false,
      };
    case ASSIGN_SKILL_SUCCESS:
      return {
        ...state,
        assignSuccess: true,
        assignLoading: false,
        message: action.payload.message,
      };
    case ASSIGN_SKILL_FAILED:
      return {
        ...state,
        assignLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
