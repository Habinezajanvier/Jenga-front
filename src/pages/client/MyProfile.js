import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import ProfileDescription from '../../components/UserProfile/Description';
import ProfileCard from '../../components/UserProfile/Profile';
import SKillsCard from '../../components/UserProfile/SkillsCard';
import { Box } from '@mui/system';
import {
  getOneUser,
  requestEmployee,
  updateUser,
} from '../../redux/action';
import TransitionsModal from '../../components/shared/Model';
import UpdateUserProfileForm from '../../components/UserProfile/UpdateProfile';
import UpdateUserBiosForm from '../../components/UserProfile/UpdateBiosform';
import jwtDecode from 'jwt-decode';

function MyProfileContent() {
  const [id, setId] = React.useState('');
  const dispatch = useDispatch();
  const { profile, updateSuccess } = useSelector(
    (state) => state.users
  );
  const [openProfileModel, setOpenProfileModel] =
    React.useState(false);
  const [openBiosModal, setOpenBiosModal] =
    React.useState(false);

  React.useEffect(() => {
    const token = localStorage.IdToken;
    const { id } = jwtDecode(token);
    setId(id);
  }, []);

  React.useEffect(() => {
    dispatch(getOneUser(id));
    if (updateSuccess) {
      setOpenProfileModel(false);
      setOpenBiosModal(false);
    }
  }, [dispatch, id, updateSuccess]);

  const requestUser = (userId) => {
    dispatch(requestEmployee(userId));
  };
  return (
    <>
      <Typography
        component="div"
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          mt: 18,
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
            {Boolean(profile.id) && (
              <ProfileCard
                openModel={setOpenProfileModel}
                user={profile}
                requestUser={requestUser}
              />
            )}
          </Grid>
          <Grid item md={8} sm={12}>
            {Boolean(profile.id) && (
              <ProfileDescription
                description={profile.bios}
                userId={profile.id}
                openModal={setOpenBiosModal}
              />
            )}
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
                  userId={profile.id}
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

export default MyProfileContent;
