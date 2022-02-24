/* eslint-disable import/no-anonymous-default-export */
import {
  ASSIGN_SKILL_FAILED,
  ASSIGN_SKILL_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_ASSIGN_SKILL,
  REQUEST_GET_CATEGORIES,
  CREATE_CATEGORY,
  CREATE_CATEGORY_FAILED,
  REQUEST_CREATE_CATEGORY,
  REQUEST_UPDATE_CATEGORY,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_FAILED,
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAILED,
  REQUEST_DELETE_CATEGORY,
} from '../types';

const initialState = {
  categories: [],
  category: {},
  assignLoading: null,
  assignSuccess: false,
  message: null,
  error: null,
  loading: null,
  createLoading: false,
  updateLoading: false,
  success: false,
  deleteLoading: false,
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
    case REQUEST_CREATE_CATEGORY:
      return {
        ...state,
        createLoading: true,
        success: false,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        createLoading: false,
        success: true,
        message: action.payload.message,
      };
    case CREATE_CATEGORY_FAILED:
      return {
        ...state,
        createLoading: false,
        error: action.payload.error,
      };
    case REQUEST_UPDATE_CATEGORY:
      return {
        ...state,
        updateLoading: true,
        success: false,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        updateLoading: false,
        success: true,
        message: action.payload.message,
      };
    case UPDATE_CATEGORY_FAILED:
      return {
        ...state,
        updateLoading: false,
        error: action.payload.error,
      };
    case REQUEST_DELETE_CATEGORY:
      return {
        ...state,
        deleteLoading: true,
        success: false,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        deleteLoading: false,
        success: true,
        message: action.payload.message,
      };
    case DELETE_CATEGORY_FAILED:
      return {
        ...state,
        deleteLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
