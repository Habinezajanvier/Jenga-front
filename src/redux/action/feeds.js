import axios from 'axios';
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

const { REACT_APP_BACKEND } = process.env;

export const createStory = (data) => (dispatch) => {
  dispatch({ type: REQUEST_CREATE_FEED });
  axios
    .post(`${REACT_APP_BACKEND}/api/feeds`, data)
    .then((res) => {
      dispatch({ type: CREATE_FEED, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_FEED_FAILED,
        payload: error.response?.data,
      });
    });
};

export const getStories = () => (dispatch) => {
  dispatch({ type: REQUEST_GET_FEEDS });
  axios
    .get(`${REACT_APP_BACKEND}/api/feeds`)
    .then((res) => {
      dispatch({ type: GET_FEEDS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: GET_FEEDS_FAILED,
        payload: error.response?.data,
      });
    });
};

export const deleteStory = (id) => (dispatch) => {
  dispatch({ type: REQUEST_DELETE_FEEDS });
  axios
    .delete(`${REACT_APP_BACKEND}/api/feeds/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_FEEDS, payload: res.data });
    })
    .catch((error) => {
      dispatch({
        type: DELETE_FEEDS_FAILED,
        payload: error.response?.data,
      });
    });
};
