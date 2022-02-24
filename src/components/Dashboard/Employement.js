import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';
import moment from 'moment';

export default function Employement({ offers }) {
  return (
    <React.Fragment>
      <Title>Current Employements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Created</TableCell>
            <TableCell>Employer</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">
              Amount gained
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {offers.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {moment(row.createdAt).format(
                  'MMM Do, YYYY'
                )}
              </TableCell>
              <TableCell>{row.owner.firstname}</TableCell>
              <TableCell>
                {row.employee.firstname}
              </TableCell>
              <TableCell>{row.status}</TableCell>

              <TableCell align="right">{`...`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link
        color="primary"
        href="/employements"
        // onClick={preventDefault}
        sx={{ mt: 3 }}
      >
        See more Employements
      </Link>
    </React.Fragment>
  );
}
