import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import Title from '../shared/Title';
import Loading from '../shared/Loaders/SmallLoader';

export default function UpdateUserBiosForm({
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
      label: 'Describe your self',
      name: 'bios',
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
    console.log('==userData==>', userData);
    dispatch(action(profile.id, userData));
  };

  return (
    <>
      <Box
        component="form"
        // sx={{
        //   '& .MuiTextField-root': { m: 1, width: '25ch' },
        // }}
        noValidate
        autoComplete="off"
      >
        <Typography
          component="div"
          sx={{
            display: {
              sm: 'flex',
              xs: 'inline',
            },
            m: 2,
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
          <Title>Describe Yourself</Title>
        </Typography>
        <Grid container spacing={2}>
          {fields.map((field) => (
            <Grid item sm={12} xs={12}>
              <TextField
                label={field.label}
                name={field.name}
                id="outlined-size-small"
                defaultValue={profile[field.name]}
                value={userData[field.name]}
                multiline
                fullWidth
                onChange={handleChange}
              />
            </Grid>
          ))}
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
