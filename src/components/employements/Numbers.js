import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Title from '../shared/Title';
import moment from 'moment';

export default function Number({
  title,
  number,
  currency,
}) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 1,
          minHeight: 120,
        }}
      >
        <Title>{title}</Title>
        <Typography component="p" variant="h4">
          {currency} {number}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {moment().format('ll')}
        </Typography>
      </Paper>
    </>
  );
}
