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
  content: {
    marginTop: '1.2rem',
    marginBottom: '2rem',
    '& h1': {
      fontWeight: '500',
      marginTop: '1.6rem',
      marginBottom: '3.1rem',
      '& span': {
        fontWeight: '700',
      },
    },
  },
}));

const RecentPost = ({ categories, openModel, setUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="h6" component="h2">
            Hire best freelancer
          </Typography>
        </div>
        {categories &&
          categories.map((category, i) => (
            <div className={classes.content} key={i}>
              <Typography variant="h4" component="h1">
                From <span>{category.name} </span>
              </Typography>
              <Grid container spacing={4}>
                {category?.skills?.map((userSkill, i) =>
                  userSkill?.skills?.map((skill, i) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={3}
                      key={i}
                    >
                      <UserCard
                        user={skill?.user}
                        hireAction={openModel}
                        setUser={setUser}
                      />
                    </Grid>
                  ))
                )}

                {/* {category?.skills?.skills?.user?.map(
                  (item, i) => (
                    <Grid
                      item
                      xs={12}
                      md={4}
                      lg={3}
                      key={i}
                    >
                      <UserCard
                        user={item}
                        hireAction={openModel}
                      />
                    </Grid>
                  )
                )} */}
              </Grid>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentPost;
