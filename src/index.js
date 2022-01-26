import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import '@brainhubeu/react-carousel/lib/style.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3E8E7E',
    },
    secondary: {
      main: '#A6469E',
    },
    danger: {
      main: '#9C433D',
    },
    background: {
      default: '#fff',
    },
    grey: { 200: '#78A299' },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
