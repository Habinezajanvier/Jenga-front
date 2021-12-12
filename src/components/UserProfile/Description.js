import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import jwtDecode from 'jwt-decode';
import Title from '../shared/Title';

const ProfileDescription = ({
  description,
  userId,
  openModal,
}) => {
  const [id, setId] = React.useState('');
  React.useEffect(() => {
    const token = localStorage.IdToken;
    const { id } = jwtDecode(token);
    setId(id);
  }, []);
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          padding: 2,
          position: 'relative',
        }}
      >
        <Title>Bios</Title>
        <Typography component="p" variant="h6">
          {description}
        </Typography>
        {userId === id && (
          <Fab
            sx={{
              position: 'absolute',
              bottom: 16,
              right: 16,
            }}
            color="primary"
            aria-label="edit"
            onClick={() => openModal(true)}
          >
            <EditIcon />
          </Fab>
        )}
      </Paper>
    </>
  );
};

export default ProfileDescription;
