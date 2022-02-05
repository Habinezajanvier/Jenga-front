import * as React from 'react';
// import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../shared/Title';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Tooltip from '@mui/material/Tooltip';
import moment from 'moment';
import Loading from '../shared/Loaders/SmallLoader';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

export default function Employement({ offers, action }) {
  const { updateLoading } = useSelector(
    (state) => state.offers
  );
  return (
    <>
      <Title>All Employements</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Updated</TableCell>
            <TableCell>Employer</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>More</TableCell>
            <TableCell align="right">Amount paid</TableCell>
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
              <TableCell>
                {updateLoading ? (
                  <Loading />
                ) : (
                  <Stack
                    alignItems="center"
                    direction="row"
                    spacing={1}
                  >
                    {row.status.toLowerCase() ===
                    'approved' ? (
                      <Tooltip title="Approved">
                        <CheckIcon color="primary" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Approve">
                        <IconButton
                          disabled={
                            row.status.toLowerCase() ===
                            'declined'
                          }
                          onClick={() =>
                            action(row.id, {
                              status: 'Approved',
                            })
                          }
                        >
                          <RecommendIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    )}
                    {row.status.toLowerCase() ===
                    'declined' ? (
                      <Tooltip title="Declined">
                        <DoNotDisturbOnIcon color="danger" />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Decline">
                        <IconButton
                          disabled={
                            row.status.toLowerCase() ===
                            'approved'
                          }
                          onClick={() =>
                            action(row.id, {
                              status: 'Declined',
                            })
                          }
                        >
                          <ThumbDownAltIcon color="danger" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Stack>
                )}
              </TableCell>
              <TableCell align="right">{`...`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
