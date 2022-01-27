import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import {
  getOneUser,
  requestEmployee,
} from '../redux/action';
import Loader from '../components/shared/Loaders/SmallLoader';

function HireCard({ user }) {
  const dispatch = useDispatch();
  const { profile, employeeLoading } = useSelector(
    (state) => state.users
  );
  React.useEffect(() => {
    dispatch(getOneUser(user.id));
  }, []);
  return (
    <Grid item xs={12} md={12}>
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
                {user.lastname} {user.firstname}
              </Typography>
              {profile.profileTitle && (
                <Typography component="h2" variant="h6">
                  {profile.profileTitle}
                </Typography>
              )}
              <Typography
                variant="subtitle1"
                color="text.secondary"
              >
                {'Joined'}{' '}
                {profile.createdAt
                  ? moment(profile.createdAt).format(
                      'MMM, YYYY'
                    )
                  : moment().format('MMM, YYYY')}
              </Typography>
            </div>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{
                cursor: employeeLoading
                  ? 'not-allowed'
                  : 'pointer',
              }}
              onClick={() =>
                dispatch(requestEmployee(user.id))
              }
            >
              {employeeLoading ? (
                <Loader color="#3E8E7E" />
              ) : (
                'HIRE'
              )}
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
              {profile.skills !== 0 &&
                profile.skills.map((skill) => (
                  <Grid item xs="auto">
                    <Paper
                      sx={{
                        padding: '.3rem 1rem',
                        cursor: 'pointer',
                      }}
                    >
                      {skill.name}
                    </Paper>
                  </Grid>
                ))}
            </Grid>
          </Typography>
          <Typography
            variant="subtitle1"
            color="primary"
            sx={{
              cursor: employeeLoading
                ? 'not-allowed'
                : 'pointer',
            }}
            onClick={() =>
              dispatch(requestEmployee(user.id))
            }
          >
            {employeeLoading ? (
              <Loader color="#3E8E7E" />
            ) : (
              'HIRE'
            )}
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
    </Grid>
  );
}

export default HireCard;
