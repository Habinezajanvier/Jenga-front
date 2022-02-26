import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Title from '../shared/Title';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function Number({ title, action }) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 1,
          minHeight: 150,
          marginTop: 3,
        }}
      >
        <Title>{title}</Title>
        <Typography
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: 150,
          }}
        >
          <IconButton
            aria-label="fingerprint"
            color="primary"
            sx={{ fontSize: 40 }}
            onClick={action}
          >
            <AddCircleIcon sx={{ fontSize: 80 }} />
          </IconButton>
        </Typography>
      </Paper>
    </>
  );
}
