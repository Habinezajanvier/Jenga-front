import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../shared/Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Amount generated</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        This Month
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={preventDefault}
        >
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
