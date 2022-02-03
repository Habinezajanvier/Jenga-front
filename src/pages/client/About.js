import * as React from 'react';
import {
  Typography,
  Grid,
  Box,
  Container,
} from '@mui/material';
import syncImage from '../../assets/images/sync.png';
import distanceImage from '../../assets/images/distancing.png';

export default function AboutPage() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        paddingTop: '100px',
        marginBottom: { sm: '60px', md: '100px' },
      }}
    >
      <Container maxWidth="lg">
        <Typography component="div">
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Typography
                component="div"
                sx={{
                  width: '100%',
                }}
              >
                <img
                  style={{ width: '100%' }}
                  alt="_dist_"
                  src={distanceImage}
                />
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontWeight: '700',
                    color: 'primary.main',
                    fontSize: 30,
                    mb: 2,
                  }}
                  component="h2"
                  variant="h6"
                >
                  About Company
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    fontWeight: '500',
                  }}
                >
                  Due to the increase of unemployment,
                  pandemics, lack of capital, lack of
                  experience …,, it is hard for many people
                  to meet on a daily basis, mostly
                  postgraduate students, holiday and
                  vacation occupations,.. Meanwhile, there
                  could be more work to be done by those
                  people to meet their basic needs. not
                  limited to those who have experience but
                  the salary or wage doesn’t meet the needs
                  or still want to make more money.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: { md: 20, lg: 20, xl: 20 },
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontWeight: '700',
                    color: 'primary.main',
                    fontSize: 30,
                    mb: 2,
                    mt: { xs: 4, sm: 4, md: 0 },
                  }}
                  component="h2"
                  variant="h6"
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    lineHeight: 1.6,
                    fontWeight: '500',
                  }}
                >
                  Jenga.rw will help people by creating a
                  simple platform sphere so that people with
                  nowhere to run to save their living will
                  find refuge. People who are willing to do
                  simple work to live regardless they level
                  of education or status which is not
                  helping at all. Those work will mainly be
                  indoor work, gardens, pets, casual, and
                  professional works, professional works and
                  freelance jobs.
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              sm={12}
              md={6}
              sx={{
                minHeight: { md: 300, lg: 300, xl: 300 },
              }}
            >
              <Typography
                component="div"
                sx={{
                  width: '100%',
                  height: '100%',
                }}
              >
                <img
                  style={{ width: '110%' }}
                  alt="_sync_"
                  src={syncImage}
                />
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </Box>
  );
}
