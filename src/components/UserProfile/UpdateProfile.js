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
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { storage } from '../../firebase/config';
import { toast } from 'react-toastify';
import CircularStatic from '../shared/Loaders/ProgressLoader';

const Input = styled('input')({
  display: 'none',
});

export default function UpdateUserProfileForm({
  profile,
  action,
  setModel,
}) {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({});
  const [progress, setProgress] = React.useState(0);
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
        profileImage: profile.profileImage,
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

  const onFileChange = (e) => {
    const selected = e.target.files[0];
    const accepted = ['image/png', 'image/jpeg'];

    if (selected && accepted.includes(selected.type)) {
      const storageRef = storage.ref(selected.name);
      storageRef.put(selected).on(
        'state_changed',
        (snap) => {
          let percentage =
            (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUserData((item) => ({
            ...item,
            profileImage: url,
          }));
          setProgress(null);
        }
      );
    } else {
      const errorMsg = 'Selected file is not an image type';
      toast.error(errorMsg);
    }
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
            alignItems: 'center',
            m: { md: 2, sm: 0.2 },
            mb: 4,
            '& .MuiAvatar-root': {
              mr: 3,
            },
          }}
        >
          <Avatar
            src={userData.profileImage}
            alt="John Doe"
          />
          {progress ? (
            <CircularStatic progress={progress} />
          ) : (
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={onFileChange}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera sx={{ fontSize: 40 }} />
              </IconButton>
            </label>
          )}
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
                name="gender"
                value={userData.gender}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
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
                  md: 'flex',
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
