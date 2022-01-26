import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ProfileDescription from '../../components/profile/Description';
import ProfileCard from '../../components/profile/Profile';
import SKillsCard from '../../components/profile/SkillsCard';
import { Box } from '@mui/system';
import { getOneUser } from '../../redux/action';

function ProfileContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);

  React.useEffect(() => {
    dispatch(getOneUser(id));
  }, [dispatch, id]);
  console.log('==userId==>', id);
  return (
    <>
      <Typography
        component="div"
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            {Boolean(profile.id) && (
              <ProfileCard user={profile} />
            )}
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileDescription />
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              {Boolean(profile.id) && (
                <SKillsCard skills={profile.skills} />
              )}
            </Grid>
          </Grid>
        </Box>
      </Typography>
    </>
  );
}

export default function UserProfile() {
  return (
    <DashboardLayout name="Profile">
      <ProfileContent />
    </DashboardLayout>
  );
}
