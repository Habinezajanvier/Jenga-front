/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ONE_USER,
  GET_ONE_USER_FAILED,
  GET_SELF_PROFILE,
  GET_USERS,
  GET_USERS_FAILED,
  HIRE_USER_FAILLURE,
  HIRE_USER_SUCCESS,
  REQUEST_GET_ONE_USER,
  REQUEST_GET_USERS,
  REQUEST_HIRE_USER,
  REQUEST_UPDATE_USER,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
} from '../types';

const initialState = {
  profile: {},
  users: [],
  error: null,
  response: null,
  getUsersLoading: false,
  updateLoading: null,
  updateSuccess: false,
  employeeLoading: false,
  employee: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SELF_PROFILE:
      return {
        ...state,
        error: null,
        response: null,
        profile: action.payload,
      };

    case REQUEST_GET_ONE_USER:
      return {
        ...state,
        error: null,
        response: null,
        getUsersLoading: true,
      };

    case GET_ONE_USER:
      return {
        ...state,
        getUsersLoading: false,
        response: action.payload.message,
        profile: action.payload.data,
      };

    case GET_ONE_USER_FAILED:
      return {
        ...state,
        getUsersLoading: false,
        error: action.payload.error,
      };

    case REQUEST_GET_USERS:
      return {
        ...state,
        error: null,
        response: null,
        getUsersLoading: true,
      };

    case GET_USERS:
      return {
        ...state,
        getUsersLoading: false,
        response: action.payload.message,
        users: action.payload.data,
      };

    case GET_USERS_FAILED:
      return {
        ...state,
        getUsersLoading: false,
        error: action.payload.error,
      };

    case REQUEST_UPDATE_USER:
      return {
        ...state,
        updateLoading: true,
        updateSuccess: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateLoading: null,
        response: action.payload.message,
        updateSuccess: true,
      };
    case UPDATE_USER_FAILED:
      return {
        ...state,
        updateLoading: null,
        error: action.payload.error,
        updateSuccess: false,
      };
    case REQUEST_HIRE_USER:
      return {
        ...state,
        employee: {},
        employeeLoading: true,
      };
    case HIRE_USER_SUCCESS:
      return {
        ...state,
        employeeLoading: false,
        employee: action.payload.data,
      };
    case HIRE_USER_FAILLURE:
      return {
        ...state,
        employeeLoading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
