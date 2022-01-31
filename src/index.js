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
      main: '#135029',
    },
    secondary: {
      main: '#359C5B',
    },
    danger: {
      main: '#4F1613',
    },
    background: {
      default: '#fff',
    },
    grey: { 200: '#38694A' },
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
