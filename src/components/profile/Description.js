import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

const ProfileDescription = ({ description }) => {
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
          Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas
          eget quam. Morbi leo risus, porta ac consectetur
          ac, vestibulum at eros. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Cras
          mattis consectetur purus sit amet fermentum. Cras
          justo odio, dapibus ac facilisis in, egestas eget
          quam
        </Typography>
        <Fab
          sx={{
            position: 'absolute',
            bottom: 16,
            right: 16,
          }}
          color="primary"
          aria-label="edit"
        >
          <EditIcon />
        </Fab>
      </Paper>
    </>
  );
};

export default ProfileDescription;
