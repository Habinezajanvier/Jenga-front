import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ProfileDescription from '../../components/profile/Description';
import ProfileCard from '../../components/profile/Profile';
import SKillsCard from '../../components/profile/SkillsCard';
import { Box } from '@mui/system';
import { getOneUser, updateUser } from '../../redux/action';
import TransitionsModal from '../../components/shared/Model';
import UpdateUserProfileForm from '../../components/UserProfile/UpdateProfile';
import UpdateUserBiosForm from '../../components/UserProfile/UpdateBiosform';

function ProfileContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.users);

  const [openProfileModel, setOpenProfileModel] =
    React.useState(false);
  const [openBiosModal, setOpenBiosModal] =
    React.useState(false);

  React.useEffect(() => {
    if (profile.id !== id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id, profile]);
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
              <ProfileCard
                user={profile}
                openModel={setOpenProfileModel}
              />
            )}
          </Grid>
          <Grid item md={8} sm={12}>
            <ProfileDescription
              description={profile.bios}
              openModal={setOpenBiosModal}
            />
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
                <SKillsCard
                  skills={profile.skills}
                  id={profile.id}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </Typography>
      <TransitionsModal
        open={openProfileModel}
        setOpen={setOpenProfileModel}
        top={400}
      >
        <UpdateUserProfileForm
          action={updateUser}
          profile={profile}
          setModel={setOpenProfileModel}
        />
      </TransitionsModal>
      <TransitionsModal
        open={openBiosModal}
        setOpen={setOpenBiosModal}
      >
        <UpdateUserBiosForm
          action={updateUser}
          profile={profile}
          setModel={setOpenBiosModal}
        />
      </TransitionsModal>
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
