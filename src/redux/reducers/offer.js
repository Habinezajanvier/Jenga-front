/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_OFFERS,
  GET_OFFERS_FAILED,
  REQUEST_GET_OFFERS,
  REQUEST_UPDATE_OFFER,
  UPDATE_OFFER,
  UPDATE_OFFER_FAILED,
} from '../types/offer';

const initialState = {
  loading: false,
  offers: [],
  error: '',
  message: '',
  updateLoading: false,
  updateSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_OFFERS:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_OFFERS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        offers: action.payload.data,
      };

    case GET_OFFERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case REQUEST_UPDATE_OFFER:
      return {
        ...state,
        updateLoading: true,
        updateSuccess: false,
      };

    case UPDATE_OFFER:
      return {
        ...state,
        updateLoading: false,
        message: action.payload.message,
        updateSuccess: true,
      };

    case UPDATE_OFFER_FAILED:
      return {
        ...state,
        updateLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};
