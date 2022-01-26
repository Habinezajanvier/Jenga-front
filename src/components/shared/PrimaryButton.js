import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from '@mui/material/';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)((theme) => ({
  //   fontSize: 14,
  marginLeft: 3,
  marginRight: 3,
  borderRadius: 1.2,
}));

export default function PrimaryButton({ children, to }) {
  return (
    <StyledButton variant="text">
      <Link color="primary" href={to}>
        {children}
      </Link>
    </StyledButton>
  );
}
