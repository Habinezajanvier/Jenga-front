/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircularProgress from '@mui/material/CircularProgress';
import Popover from '@mui/material/Popover';
import {
  MenuItem,
  MenuList,
  Checkbox,
} from '@mui/material';
import {
  getSkills,
  assignCategorySkill,
  deleteCategory,
} from '../../redux/action';

function Row(props) {
  const { category, index, viewMore } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [disabled, setDisabled] = React.useState([]);
  const [delId, setDelId] = React.useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelection = (id) => {
    !selected.includes(id)
      ? setSelected([...selected, id])
      : setSelected([
          ...selected.filter((item) => item !== id),
        ]);
  };

  const { skills: allSkills } = useSelector(
    (state) => state.skills
  );
  const { deleteLoading } = useSelector(
    (state) => state.categories
  );
  React.useEffect(() => {
    dispatch(getSkills());
    setDisabled([
      ...category.skills.map((skill) => skill.id),
    ]);
  }, [dispatch]);

  const handleSubmit = () =>
    dispatch(assignCategorySkill(selected, category.id));

  const handleDelete = (id) => {
    setDelId(id);
    dispatch(deleteCategory(id));
  };

  const openPopover = Boolean(anchorEl);
  const id = openPopover ? 'simple-popover' : undefined;

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
              <IconButton
                onClick={() => viewMore(category)}
              >
                <ReadMoreIcon color="primary" />
              </IconButton>
            </Tooltip>
            {deleteLoading && category.id === delId ? (
              <CircularProgress color="danger" />
            ) : (
              <Tooltip title="Delete">
                <IconButton
                  onClick={() => handleDelete(category.id)}
                >
                  <DeleteIcon color="danger" />
                </IconButton>
              </Tooltip>
            )}
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
                component="div"
                sx={{
                  display: {
                    md: 'flex',
                    sm: 'inline',
                  },
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  Skills
                </Typography>

                <IconButton
                  aria-label="fingerprint"
                  color="primary"
                  onClick={handleClick}
                >
                  <AddCircleIcon sx={{ fontSize: 40 }} />
                </IconButton>
                {allSkills.length !== 0 && (
                  <Popover
                    id={id}
                    open={openPopover}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                  >
                    <MenuList>
                      <MenuItem
                        disabled={selected.length === 0}
                      >
                        <IconButton
                          aria-label="fingerprint"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          <AddCircleIcon
                            sx={{ fontSize: 30 }}
                          />
                        </IconButton>
                      </MenuItem>
                      {allSkills.map((item) => (
                        <MenuItem
                          disabled={disabled.includes(
                            item.id
                          )}
                          onClick={() =>
                            handleSelection(item.id)
                          }
                        >
                          <Checkbox
                            checked={
                              selected.includes(item.id) ||
                              disabled.includes(item.id)
                            }
                          />
                          <Typography
                            key={item.id}
                            sx={{ p: 1 }}
                          >
                            {item.name}
                          </Typography>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Popover>
                )}
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

export default function CategoriesTable({
  categories,
  viewMore,
}) {
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
              viewMore={viewMore}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
