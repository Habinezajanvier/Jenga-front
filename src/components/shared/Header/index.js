import React, { useState } from 'react';
import SearchAppBar from './SecondaryAppBar';
import ResponsiveAppBar from './StickyAppBar';
import AppBar from '@mui/material/AppBar';

const Header = () => {
  // const [show, setShow] = useState(true);

  // document.onscroll = () => {
  //   document.documentElement.scrollTop > 150
  //     ? setShow(false)
  //     : setShow(true);
  // };

  return (
    <AppBar>
      {/* <SearchAppBar
        styles={{ marginTop: show ? '0' : '-70px' }}
      /> */}
      <ResponsiveAppBar />
    </AppBar>
  );
};

export default Header;
