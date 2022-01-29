/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Avatar, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Title from '../shared/Title';
import Loading from '../shared/Loaders/SmallLoader';

export default function UpdateUserProfileForm({
  profile,
  action,
  setModel,
}) {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({});
  const { updateLoading } = useSelector(
    (state) => state.users
  );
  const fields = [
    {
      label: 'Title (Eg Software dev)',
      name: 'profileTitle',
    },
    {
      label: 'First Name',
      name: 'firstname',
    },
    {
      label: 'Last Name',
      name: 'lastname',
    },
    {
      label: 'Phone Number',
      name: 'phoneNumber',
    },
    {
      label: 'Email',
      name: 'email',
    },
    {
      label: 'Nationality',
      name: 'nationality',
    },
    {
      label: 'Location',
      name: 'location',
    },
  ];

  React.useEffect(() => {
    fields.map((field) =>
      setUserData((user) => ({
        ...user,
        [field.name]: profile[field.name],
      }))
    );
  }, [profile]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(action(profile.id, userData));
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            m: { md: 1, sm: 0.3 },
            width: { md: '25ch', sm: 'auto' },
          },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography
          component="div"
          sx={{
            display: 'flex',
            m: { md: 2, sm: 0.2 },
            mb: 4,
            '& .MuiAvatar-root': {
              mr: 3,
            },
          }}
        >
          <Avatar
            src={profile.profileImage}
            alt="John Doe"
          />
          <Avatar
            sx={{
              bgcolor: '#9C433D',
              display: { md: 'none', sm: 'inline' },
            }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
            onClick={() => setModel(false)}
          >
            X
          </Avatar>
          <Typography
            component="div"
            sx={{
              display: {
                sm: 'none',
                xs: 'none',
              },
            }}
          >
            <Title>Update your Profile</Title>
          </Typography>
        </Typography>
        <Grid container spacing={2}>
          {fields.map((field) => (
            <Grid item sm={6} xs={12}>
              <TextField
                label={field.label}
                name={field.name}
                id="outlined-size-small"
                defaultValue={profile[field.name]}
                value={userData[field.name]}
                size="small"
                onChange={handleChange}
              />
            </Grid>
          ))}
          <Grid item sm={6} xs={12}>
            <FormControl
              size="small"
              fullWidth
              sx={{
                mt: 1,
                width: { md: '25ch', sm: 'auto' },
                ml: { md: 1, sm: 0.2 },
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //   value={age}
                label="Age"
                //   onChange={handleChange}
              >
                <MenuItem value={10}>Female</MenuItem>
                <MenuItem value={20}>Male</MenuItem>
                <MenuItem value={30}>
                  Prefer not to tell
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            '& button': {
              mt: 3,
            },
          }}
        >
          <Grid item sm={6} xs={12}>
            <Button
              fullWidth
              variant="contained"
              startIcon={<CancelIcon />}
              color="danger"
              onClick={() => setModel(false)}
              sx={{
                display: {
                  md: 'inline',
                  sm: 'none',
                  xs: 'none',
                },
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Button
              fullWidth
              variant="contained"
              endIcon={!updateLoading && <SendIcon />}
              onClick={handleSubmit}
            >
              {updateLoading ? <Loading /> : 'Send'}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
