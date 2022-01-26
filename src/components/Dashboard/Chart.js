import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from 'recharts';
import Title from '../shared/Title';
import moment from 'moment';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData(
    moment().subtract(11, 'month').format('MMMM'),
    1
  ),
  createData(
    moment().subtract(10, 'month').format('MMMM'),
    12
  ),
  createData(
    moment().subtract(9, 'month').format('MMMM'),
    16
  ),
  createData(
    moment().subtract(8, 'month').format('MMMM'),
    5
  ),
  createData(
    moment().subtract(7, 'month').format('MMMM'),
    7
  ),
  createData(
    moment().subtract(6, 'month').format('MMMM'),
    9
  ),
  createData(
    moment().subtract(5, 'month').format('MMMM'),
    10
  ),
  createData(
    moment().subtract(4, 'month').format('MMMM'),
    11
  ),
  createData(
    moment().subtract(3, 'month').format('MMMM'),
    2
  ),
  createData(
    moment().subtract(2, 'month').format('MMMM'),
    2
  ),
  createData(
    moment().subtract(1, 'month').format('MMMM'),
    10
  ),
  createData(
    moment().subtract(0, 'month').format('MMMM'),
    13
  ),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>This Year</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Employements
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
