import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const ProfileDescription = ({ description, openModal }) => {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          padding: 2,
          position: 'relative',
        }}
      >
        <Typography component="p" variant="h6">
          {description}
        </Typography>
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
      </Paper>
    </>
  );
};

export default ProfileDescription;
