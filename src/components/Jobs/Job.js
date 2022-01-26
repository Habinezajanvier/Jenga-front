import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';

// Generate Order Data
function createData(
  id,
  startTime,
  employer,
  employee,
  jobType,
  amount
) {
  return {
    id,
    startTime,
    employer,
    employee,
    jobType,
    amount,
  };
}

const rows = [
  createData(
    0,
    '16 Mar, 2019',
    'Elvis Presley',
    'Tom Scholz',
    // 'VISA ⠀•••• 3719',
    'Web development',
    312.44
  ),
  createData(
    1,
    '16 Mar, 2019',
    'Paul McCartney',
    'John Doe',
    'Building construction',
    866.99
  ),
  createData(
    2,
    '16 Mar, 2019',
    'Tom Scholz',
    'Janvier Ha',
    'Software development',
    100.81
  ),
  createData(
    3,
    '16 Mar, 2019',
    'Michael Jackson',
    'Gary Kim',
    'Web maintaince',
    654.39
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'John Doe',
    'Parttime driver',
    212.79
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'John Doe',
    'Parttime driver',
    212.79
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'John Doe',
    'Parttime driver',
    212.79
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'John Doe',
    'Parttime driver',
    212.79
  ),
  createData(
    4,
    '15 Mar, 2019',
    'Bruce Springsteen',
    'John Doe',
    'Parttime driver',
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Jobs() {
  return (
    <>
      <Title>All Jobs</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Owner</TableCell>
            {/* <TableCell></TableCell> */}
            <TableCell align="right">Payment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.startTime}</TableCell>
              <TableCell>{row.employer}</TableCell>
              <TableCell>{row.employee}</TableCell>
              {/* <TableCell>{row.jobType}</TableCell> */}
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
