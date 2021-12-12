import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import StickyFooter from './components/Footer';
import Routes from './Routes';
import store from './redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwtDecode from 'jwt-decode';
import { isEmpty } from 'lodash';
import { getSelfProfile, logoutUser } from './redux/action';
import { AUTH_SUCCESS, AUTH_FAILIED } from './redux/types';
import axios from 'axios';

toast.configure({
  // position: "top-right",
  autoClose: 4000,
  // hideProgressBar: true,
  // closeOnClick: true,
  // pauseOnHover: true,
  // draggable: true,
  // progress: undefined,
  // delay: 10000,
});

const token = localStorage.IdToken;

(async () => {
  try {
    if (isEmpty(token)) {
      store.dispatch(logoutUser());
      return;
    }

    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      store.dispatch(logoutUser());
      window.location.reload();
    } else {
      store.dispatch({
        type: AUTH_SUCCESS,
        payload: { message: '' },
        roles: decodedToken.roles,
      });
      store.dispatch(getSelfProfile());
      axios.defaults.headers.common['token'] = token;
    }
  } catch (err) {
    store.dispatch(logoutUser());
    window.location.reload();
    return;
  }
})();

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
      <StickyFooter />
      <ToastContainer />
    </Provider>
  );
}

export default App;
