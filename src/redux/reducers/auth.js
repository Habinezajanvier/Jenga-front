/* eslint-disable import/no-anonymous-default-export */

import {
  REQUEST_AUTH,
  AUTH_FAILIED,
  AUTH_SUCCESS,
  SET_UNAUTHENTICATED,
  REQUEST_SIGNUP,
} from '../types';
const initialState = {
  authenticated: false,
  error: null,
  message: null,
  loading: false,
  roles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        error: null,
        message: null,
        loading: true,
      };
    case REQUEST_SIGNUP:
      return {
        ...state,
        error: null,
        message: null,
        loading: true,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        authenticated: true,
        roles: action.roles,
      };

    case AUTH_FAILIED:
      return {
        ...state,
        error: action.payload,
        authenticated: false,
      };

    case SET_UNAUTHENTICATED:
      return {
        ...state,
        error: action.payload,
        authenticated: false,
      };

    default:
      return state;
  }
};
