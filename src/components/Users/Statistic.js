import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Title from '../shared/Title';
import DoughnutChart from './Doughnut';

export default function Number({ data, title }) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 1,
          minHeight: 200,
        }}
      >
        <Title>{title}</Title>
        <Typography component="p" variant="h4">
          <DoughnutChart data={data} />
        </Typography>
      </Paper>
    </>
  );
}
