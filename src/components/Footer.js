import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { AiFillApple } from 'react-icons/ai';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
import logo from '../assets/images/logoSec.png';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: '700',
    color: '#fff',
  },
  link: {
    marginTop: 18,
    color: '#fff',
  },
  iconWrapper: {
    display: 'flex',
    marginTop: 12,
    border: 'solid 2px #135029',
    borderRadius: 6,
    padding: 6,
    '& *': {
      fontWeight: '700',
      color: '#fff',
    },
  },
  icons: {
    fontSize: 40,
    marginRight: 12,
    color: theme.palette.primary.main,
  },
  socialIcon: {
    fontSize: 20,
    marginTop: 16,
    color: '#fff',
  },
  appSubtitle: {
    fontSize: 12,
  },
}));

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        width: '100%',
        textAlign: 'center',
        mt: 4,
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://jenga.rw/">
        Jenga
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={12} md={3}>
            <Typography
              sx={{
                width: { md: 150, xs: '100%' },
              }}
            >
              <a href="/">
                <img
                  style={{ width: '100%' }}
                  src={logo}
                  alt="_jenga_logo_"
                />
              </a>
            </Typography>
            <Grid container>
              <Grid item xs={3}>
                <BsFacebook
                  className={classes.socialIcon}
                />
              </Grid>
              <Grid item xs={3}>
                <BsTwitter className={classes.socialIcon} />
              </Grid>
              <Grid item xs={3}>
                <BsYoutube className={classes.socialIcon} />
              </Grid>
              <Grid item xs={3}>
                <BsInstagram
                  className={classes.socialIcon}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography component="div">
              <Typography
                className={classes.heading}
                component="h2"
                variant="h6"
              >
                About
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/about">
                  About us
                </Link>
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/">
                  How it works
                </Link>
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/blog">
                  Blog
                </Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography component="div">
              <Typography
                className={classes.heading}
                component="h2"
                variant="h6"
              >
                Terms
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/privacy">
                  Privacy Policy
                </Link>
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/terms">
                  Terms and conditions
                </Link>
              </Typography>
              <Typography
                className={classes.link}
                variant="body2"
              >
                <Link color="inherit" href="/">
                  Fees and charges
                </Link>
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography component="div">
              <Typography
                className={classes.heading}
                component="h2"
                variant="h6"
              >
                Apps
              </Typography>
            </Typography>
            <Typography component="div">
              <a href="/" target="_blank">
                <Typography
                  component="div"
                  className={classes.iconWrapper}
                >
                  <AiFillApple
                    title="Apple Store"
                    className={classes.icons}
                  />
                  <Typography component="div">
                    <Typography
                      variant="subtitle2"
                      className={classes.appSubtitle}
                    >
                      Availabe on the
                    </Typography>
                    <Typography variant="body1">
                      App Store
                    </Typography>
                  </Typography>
                </Typography>
              </a>
            </Typography>
            <Typography component="div">
              <a href="/" target="_blank">
                <Typography
                  component="div"
                  className={classes.iconWrapper}
                >
                  <IoLogoGooglePlaystore
                    title="Google Store"
                    className={classes.icons}
                  />
                  <Typography component="div">
                    <Typography
                      variant="subtitle2"
                      className={classes.appSubtitle}
                    >
                      Availabe on the
                    </Typography>
                    <Typography variant="body1">
                      Google Play
                    </Typography>
                  </Typography>
                </Typography>
              </a>
            </Typography>
          </Grid>
        </Grid>

        <Copyright />
      </Container>
    </Box>
  );
}
