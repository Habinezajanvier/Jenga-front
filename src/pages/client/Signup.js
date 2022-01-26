import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signupAction } from '../../redux/action';

export default function SignUp() {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signupAction(userData));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData((user) => ({ ...user, [name]: value }));
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: 'calc(100vh - 200px)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={userData.firstname}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  value={userData.lastname}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone number"
                  name="phoneNumber"
                  autoComplete="phone"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
