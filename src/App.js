import ResponsiveAppBar from './components/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import StickyFooter from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Home />
      <StickyFooter />
    </>
  );
}

export default App;
