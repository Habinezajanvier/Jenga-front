import axios from 'axios';
import { toast } from 'react-toastify';
import {
  GET_ALL_OFFERS,
  GET_OFFERS_FAILED,
  REQUEST_GET_OFFERS,
  REQUEST_UPDATE_OFFER,
  UPDATE_OFFER,
  UPDATE_OFFER_FAILED,
} from '../types/offer';

const { REACT_APP_BACKEND } = process.env;

export const getOffers = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_OFFERS });
  axios
    .get(`${REACT_APP_BACKEND}/api/offers`)
    .then((res) => {
      dispatch({
        type: GET_ALL_OFFERS,
        payload: res.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_OFFERS_FAILED,
        payload: error.response?.data,
      });
    });
};

export const updateOffer = (id, data) => (dispatch) => {
  dispatch({ type: REQUEST_UPDATE_OFFER });
  axios
    .put(`${REACT_APP_BACKEND}/api/offers/${id}`, data)
    .then((res) => {
      toast.success(res.data.message);
      dispatch({
        type: UPDATE_OFFER,
        payload: res.data,
      });
    })
    .catch((error) => {
      toast.error(error.response?.data?.error);
      dispatch({
        type: UPDATE_OFFER_FAILED,
        payload: error.response?.data?.error,
      });
    });
};
