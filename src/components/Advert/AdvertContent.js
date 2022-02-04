import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import moment from 'moment';

export default function AdvertContent({
  adverts,
  deleteAction,
}) {
  return (
    <React.Fragment>
      <Title>Current Employements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>created</TableCell>
            <TableCell>thumnail</TableCell>
            <TableCell>content</TableCell>
            <TableCell>link</TableCell>
            <TableCell>More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adverts.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {moment(row.createdAt).format('MMM Do YY')}
              </TableCell>
              <TableCell>
                <Avatar
                  alt="Ad"
                  src={row.thumbnail}
                  variant="square"
                />
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.link}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => deleteAction(row.id)}
                >
                  <DeleteIcon color="danger" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
