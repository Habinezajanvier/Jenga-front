/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { easyApply, getSkills } from '../../redux/action';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SendIcon from '@mui/icons-material/Send';
import Loading from '../../components/shared/Loaders/SmallLoader';

export default function Register() {
  document.title = 'Easy registration | Jenga';
  const dispatch = useDispatch();
  const { updateLoading } = useSelector(
    (state) => state.users
  );
  const [userData, setUserData] = React.useState({
    firstname: '',
    lastname: '',
    phoneNumber: '',
    email: '',
    password: '',
    location: '',
    bios: '',
    gender: '',
  });

  const [userSkill, setUserSkill] = React.useState([]);
  const [displayedSkill, setDispalyedSkill] =
    React.useState([]);
  const { skills } = useSelector((state) => state.skills);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(easyApply(userData, userSkill));
  };

  React.useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  React.useEffect(() => {
    setDispalyedSkill([...skills]);
  }, [skills]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserData((user) => ({ ...user, [name]: value }));
  };

  const handleSelectSkill = ({ target }) => {
    let newSkill = skills.filter(
      (skill) => !userSkill.includes(skill.id)
    );
    setDispalyedSkill([...newSkill]);
    if (!userSkill.includes(target.value)) {
      setUserSkill([...userSkill, target.value]);
    }
  };

  const handleSelectGender = ({ target }) => {
    setUserData(() => ({
      ...userData,
      gender: target.value,
    }));
  };

  const fields = [
    {
      label: 'First Name',
      name: 'firstname',
    },
    {
      label: 'Last Name',
      name: 'lastname',
    },
    {
      label: 'Title (Eg Software dev)',
      name: 'profileTitle',
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
      label: 'Create Password',
      name: 'password',
      type: 'password',
    },
    {
      label: 'Bios',
      name: 'bios',
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
            mb: { md: 6, sm: 4 },
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              '& .MuiTextField-root': {
                mt: { md: 2, sm: 1 },
              },
            }}
          >
            {' '}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {fields.map((field) => (
                  <TextField
                    label={field.label}
                    fullWidth
                    required
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    defaultValue={userData[field.name]}
                    value={userData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  fullWidth
                  sx={{
                    mt: 1,
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
                    onChange={handleSelectGender}
                  >
                    <MenuItem value="Female">
                      Female
                    </MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  size="small"
                  fullWidth
                  sx={{
                    mt: 1,
                    // ml: { md: 1, sm: 0.2 },
                  }}
                >
                  <InputLabel id="demo-simple-select-label">
                    Skills
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    //   value={age}
                    label="Age"
                    onChange={handleSelectSkill}
                  >
                    {displayedSkill.map((item) => (
                      <MenuItem
                        key={item?.id}
                        value={item.id}
                      >
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
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
        </Box>
      </Container>
    </>
  );
}
