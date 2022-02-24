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

// Generate graph Data
function createData(month, data) {
  const time = moment()
    .subtract(month, 'month')
    .format('MMMM');
  const amount = data.filter((value) =>
    moment(value.createdAt).isSame(
      moment().subtract(month, 'month'),
      'month'
    )
  ).length;
  return { time, amount };
}

export default function Chart({ offers }) {
  const theme = useTheme();

  const data = [
    createData(11, offers),
    createData(10, offers),
    createData(9, offers),
    createData(8, offers),
    createData(7, offers),
    createData(6, offers),
    createData(5, offers),
    createData(4, offers),
    createData(3, offers),
    createData(2, offers),
    createData(1, offers),
    createData(0, offers),
  ];
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
