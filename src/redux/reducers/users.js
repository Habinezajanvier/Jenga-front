/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ONE_USER,
  GET_ONE_USER_FAILED,
  GET_SELF_PROFILE,
  GET_USERS,
  GET_USERS_FAILED,
  REQUEST_GET_ONE_USER,
  REQUEST_GET_USERS,
} from '../types';

const initialState = {
  profile: {},
  users: [],
  error: null,
  response: null,
  getUsersLoading: false,
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
    default:
      return state;
  }
};
