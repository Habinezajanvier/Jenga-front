import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ data }) => (
  <>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;
