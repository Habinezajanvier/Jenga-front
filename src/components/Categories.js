import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '2.4rem auto',
    marginBottom: '6rem',
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
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    border: 'solid 1px #5DD28E',
    borderRadius: '.4rem',
    marginLeft: '1.3rem',
    padding: '.4rem .9rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E9F8EF',
      color: '#5DD28E',
    },
    '& > h2': {
      fontSize: '.9rem',
    },
    '& > div': {
      backgroundColor: '#E9F8EF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItem: 'center',
      padding: '.1rem .4rem',
      borderRadius: '.2rem',
    },
  },
}));

const Categories = ({ categories }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="h6" component="h2">
            Skill's categories wating for you
          </Typography>
          <Typography variant="h4" component="h1">
            Current <span> Categories</span>
          </Typography>
        </div>
        <div>
          <Grid container spacing={2}>
            {categories.map((item, i) => (
              <Grid item md={3} sm={6} xs={12} key={i}>
                <div className={classes.content}>
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  {item.skills.length !== 0 && (
                    <Typography variant="p" component="div">
                      {item.skills.length}
                    </Typography>
                  )}
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Categories;
