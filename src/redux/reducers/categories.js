/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCESS,
  REQUEST_GET_CATEGORIES,
} from '../types';

const initialState = {
  categories: [],
  category: {},
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

    default:
      return state;
  }
};
