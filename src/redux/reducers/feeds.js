/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE_FEED,
  CREATE_FEED_FAILED,
  DELETE_FEEDS,
  DELETE_FEEDS_FAILED,
  GET_FEEDS,
  GET_FEEDS_FAILED,
  REQUEST_CREATE_FEED,
  REQUEST_DELETE_FEEDS,
  REQUEST_GET_FEEDS,
} from '../types';

const initialState = {
  loading: false,
  getLoading: false,
  deleteLoading: false,
  deleteSuccess: false,
  createSuccess: false,
  feeds: [],
  message: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CREATE_FEED:
      return {
        ...state,
        loading: true,
        createSuccess: false,
      };

    case CREATE_FEED:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        createSuccess: true,
      };

    case CREATE_FEED_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REQUEST_GET_FEEDS:
      return {
        ...state,
        getLoading: true,
      };

    case GET_FEEDS:
      return {
        ...state,
        getLoading: false,
        message: action.payload.message,
        feeds: action.payload.data,
      };

    case GET_FEEDS_FAILED:
      return {
        ...state,
        getLoading: false,
        error: action.payload.error,
      };

    case REQUEST_DELETE_FEEDS:
      return {
        ...state,
        deleteLoading: true,
        deleteSuccess: false,
      };

    case DELETE_FEEDS:
      return {
        ...state,
        deleteLoading: false,
        message: action.payload.message,
        deleteSuccess: true,
      };

    case DELETE_FEEDS_FAILED:
      return {
        ...state,
        deleteLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
