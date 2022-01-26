import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material/';
import { styled, alpha } from '@mui/material/styles';

const StyledButton = styled(MenuItem)((theme) => ({
  fontSize: 18,
  marginLeft: 3,
  marginRight: 3,
  borderRadius: 1.2,
  textTransform: 'capitalize',
}));

export default function NavButton({ children, to }) {
  return (
    <StyledButton>
      <Link color="#fff" href={to}>
        {children}
      </Link>
    </StyledButton>
  );
}
