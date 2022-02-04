import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UserCard from './UserCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '3.4rem auto',
    marginBottom: '6rem',
  },
  wrapper: {
    backgroundColor: '#F8F9FA',
  },
  heading: {
    '& h2': {
      textAlign: 'center',
      color: '#999',
      marginTop: '2.1rem',
      marginBottom: '2.9rem',
      fontSize: '1.2rem',
    },
    '& h1': {
      textAlign: 'center',
      fontWeight: '500',
      marginTop: '1.6rem',
      marginBottom: '3.1rem',
      '& span': {
        fontWeight: '700',
      },
    },
  },
}));

const UsersContent = ({ users, openModel, setUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="h6" component="h2">
            Hire the Best and loyal Employee in your
            location
          </Typography>
        </div>
        <Grid container spacing={4}>
          {users &&
            users.map((user, i) => (
              <Grid item xs={12} md={4} lg={3} key={i}>
                <UserCard
                  user={user}
                  hireAction={openModel}
                  setUser={setUser}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default UsersContent;
