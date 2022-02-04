/* eslint-disable import/no-anonymous-default-export */
import {
  CREATE_ADVERT,
  CREATE_ADVERT_FAILED,
  DELETE_ADVERTS,
  DELETE_ADVERTS_FAILED,
  GET_ADVERTS,
  GET_ADVERTS_FAILED,
  REQUEST_CREATE_ADVERT,
  REQUEST_DELETE_ADVERTS,
  REQUEST_GET_ADVERTS,
} from '../types';

const initialState = {
  loading: false,
  getLoading: false,
  deleteLoading: false,
  deleteSuccess: false,
  createSuccess: false,
  adverts: [],
  message: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CREATE_ADVERT:
      return {
        ...state,
        loading: true,
        createSuccess: false,
      };

    case CREATE_ADVERT:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        createSuccess: true,
      };

    case CREATE_ADVERT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REQUEST_GET_ADVERTS:
      return {
        ...state,
        getLoading: true,
      };

    case GET_ADVERTS:
      return {
        ...state,
        getLoading: false,
        message: action.payload.message,
        adverts: action.payload.data,
      };

    case GET_ADVERTS_FAILED:
      return {
        ...state,
        getLoading: false,
        error: action.payload.error,
      };

    case REQUEST_DELETE_ADVERTS:
      return {
        ...state,
        deleteLoading: true,
        deleteSuccess: false,
      };

    case DELETE_ADVERTS:
      return {
        ...state,
        deleteLoading: false,
        message: action.payload.message,
        deleteSuccess: true,
      };

    case DELETE_ADVERTS_FAILED:
      return {
        ...state,
        deleteLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
