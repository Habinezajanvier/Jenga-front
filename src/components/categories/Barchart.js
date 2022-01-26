import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Paper } from '@mui/material';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalChart = ({ data }) => (
  <>
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 1,
        minHeight: 180,
      }}
    >
      <Bar data={data} options={options} height={100} />
    </Paper>
  </>
);

export default VerticalChart;
