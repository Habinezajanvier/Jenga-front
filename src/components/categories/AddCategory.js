import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Loading from '../shared/Loaders/SmallLoader';
import {
  createCategory,
  updateCategory,
} from '../../redux/action';

const AddCateogyForm = ({ previous }) => {
  const dispatch = useDispatch();
  const [category, setCatgory] = React.useState({
    name: '',
    description: '',
  });
  const { createLoading, updateLoading } = useSelector(
    (state) => state.categories
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCatgory((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Boolean(previous)
      ? dispatch(updateCategory(category, previous.id))
      : dispatch(createCategory(category));
  };
  React.useEffect(() => {
    if (Boolean(previous)) {
      setCatgory({ ...previous });
    }
  }, [previous]);
  return (
    <>
      <Typography component="h1" variant="h5">
        {Boolean(previous) ? 'Update ' : 'Create new '}
        category
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Category Name"
          name="name"
          autoComplete="name"
          autoFocus
          value={category.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="description"
          label="Description"
          type="description"
          id="description"
          autoComplete="current-description"
          value={category.description}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {createLoading || updateLoading ? (
            <Loading />
          ) : (
            'Save'
          )}
        </Button>
      </Box>
    </>
  );
};

export default AddCateogyForm;
