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
import { createSkill } from '../../redux/action';
import Loading from '../shared/Loaders/SmallLoader';

const AddSkillForm = ({ previous }) => {
  const dispatch = useDispatch();
  const [category, setCatgory] = React.useState({
    name: '',
    description: '',
  });
  const { createLoading } = useSelector(
    (state) => state.skills
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCatgory((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createSkill(category));
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        Create new Skill
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
          label="Skill Name"
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
          {createLoading ? <Loading /> : 'Save'}
        </Button>
      </Box>
    </>
  );
};

export default AddSkillForm;
