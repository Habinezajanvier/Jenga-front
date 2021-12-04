import React from 'react';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: '.4rem',
    marginLeft: '1.3rem',
    padding: '1rem .9rem',
    backgroundColor: '#fff',
    '&:hover': {
      cursor: 'pointer',
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

const RecentPost = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="h6" component="h2">
            Recently Added Jobs
          </Typography>
          <Typography variant="h4" component="h1">
            Recent <span> Jobs</span>
          </Typography>
        </div>
        <div>
          <Grid container spacing={2}>
            {[...new Array(7)].map((item, i) => (
              <Grid item xs={12} key={i}>
                <div className={classes.content}>
                  <div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                      >
                        Frontend Development
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                      >
                        Apply job
                      </Typography>
                    </div>
                    <div>
                      <Typography
                        variant="h6"
                        component="h2"
                      >
                        Compamy
                      </Typography>
                      <Typography
                        variant="p"
                        component="div"
                      >
                        Location
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="p" component="div">
                    Apply job
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
