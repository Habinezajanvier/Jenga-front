import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Tooltip from '@mui/material/Tooltip';
import moment from 'moment';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  price
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { category, index } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell component="th" scope="row">
          {category.name}
        </TableCell>
        <TableCell>{category.slug}</TableCell>
        <TableCell align="right">
          <>
            <Tooltip title="More about">
              <IconButton onClick={() => props.viewMore()}>
                <ReadMoreIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton>
                <DeleteIcon color="danger" />
              </IconButton>
            </Tooltip>
          </>
        </TableCell>

        {/* <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
              >
                Skills
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date Created</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">
                      description
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {category.skills.map((skill) => (
                    <TableRow key={skill.id}>
                      <TableCell component="th" scope="row">
                        {moment(skill.createdAt).format(
                          'MMM, YYYY'
                        )}
                      </TableCell>
                      <TableCell>{skill.name}</TableCell>
                      <TableCell>
                        {skill.description}
                      </TableCell>
                      {/* <TableCell align="right">
                        {historyRow.amount}
                      </TableCell>
                      <TableCell align="right">
                        {Math.round(
                          historyRow.amount *
                            row.price *
                            100
                        ) / 100}
                      </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CategoriesTable({ categories }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Slug</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category, index) => (
            <Row
              key={category.id}
              index={index}
              category={category}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
