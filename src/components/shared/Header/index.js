import React from 'react';
import ResponsiveAppBar from './StickyAppBar';
import AppBar from '@mui/material/AppBar';

const Header = () => {
  return (
    <AppBar>
      <ResponsiveAppBar />
    </AppBar>
  );
};

export default Header;
