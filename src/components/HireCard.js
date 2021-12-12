import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Paper } from '@mui/material';
import portrait from '../assets/images/portrait.png';
import moment from 'moment';

function HireCard(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <CardActionArea component="a">
        <Card sx={{ display: 'flex' }}>
          <CardContent
            sx={{
              flex: 1,
              maxHeight: 300,
              overflow: 'scroll',
            }}
          >
            <Typography
              component="div"
              gutterBottom
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <Typography component="h2" variant="h5">
                  Joen Doe
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {'Joined'} {moment().format('MMM, YYYY')}
                </Typography>
              </div>
              <Typography
                variant="subtitle1"
                color="primary"
              >
                HIRE
              </Typography>
            </Typography>
            <Typography
              component="div"
              gutterBottom
              sx={{
                mt: 3,
                mb: 3,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Grid container spacing={1}>
                <Grid item md={12}>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                  >
                    Skills
                  </Typography>
                </Grid>
                {[...new Array(40)].map((skill) => (
                  <Grid item xs="auto">
                    <Paper
                      sx={{
                        padding: '.3rem 1rem',
                        cursor: 'pointer',
                      }}
                    >
                      {'skills'}
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Typography>
            <Typography variant="subtitle1" color="primary">
              HIRE
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 240,
              display: { xs: 'none', sm: 'block' },
            }}
            image={portrait}
            alt="_alt_"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default HireCard;
