import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Paper, Grid } from '@mui/material';
import Title from '../shared/Title';
import moment from 'moment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

export default function Number({
  title,
  number,
  openModel,
}) {
  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 1,
          minHeight: 120,
          marginTop: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={openModel ? 9 : 12}>
            <Title>{title}</Title>
          </Grid>
          {openModel && (
            <Grid item xs={3}>
              <IconButton
                aria-label="fingerprint"
                color="primary"
                onClick={openModel}
              >
                <AddCircleIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Typography component="p" variant="h4">
          {number}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {moment().format('ll')}
        </Typography>
      </Paper>
    </>
  );
}
