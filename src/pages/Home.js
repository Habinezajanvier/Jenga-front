/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import backgroundImage from '../assets/images/markus-winkler-7iSEHWsxPLw-unsplash.jpg';
import ContactsIcon from '@mui/icons-material/Contacts';
import CurrentPost from '../components/CurrentPost';
import RecentPost from '../components/RecentPost';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // paddingTop: '100px',
  },
  hero: {
    position: 'relative',
    background: `url(${backgroundImage})`,
    width: '100%',
    minHeight: 'calc(100vh - 80px)',
    marginTop: '70px',
    backgroundSize: 'cover',
  },
  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#717072c5',
    '& *': {
      color: '#fff',
    },
    '& h4': {
      textAlign: 'center',
      marginTop: '18%',
      textTransform: 'capitalize',
    },
  },
  welcomeSection: {
    width: '80%',
    margin: '3.4rem auto',
    marginBottom: '6rem',
    '& h6': {
      fontSize: '1.2rem',
      color: '#000',
      fontWeight: '500',
    },
    '& p': {
      lineHeight: '1.6rem',
      fontSize: '1rem',
      color: '#999',
    },
  },
  icons: {
    fontSize: '2.8rem',
    color: theme.primary,
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <>
        <div className={classes.hero}>
          <div className={classes.heroContent}>
            <Typography
              component="h4"
              variant="h3"
              gutterBottom
            >
              The easiest way to get your dream job
            </Typography>
          </div>
        </div>
        <div>
          <Grid
            container
            spacing={4}
            className={classes.welcomeSection}
          >
            {[...new Array(4)].map((item, i) => (
              <Grid item md={3} key={i}>
                <ContactsIcon className={classes.icons} />
                <Typography
                  component="h6"
                  variant="h6"
                  gutterBottom
                >
                  Search Millions of Jobs
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  gutterBottom
                >
                  A small river named Duden flows by their
                  place and supplies.
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
        <CurrentPost />
        <RecentPost />
      </>
    </Box>
  );
};
