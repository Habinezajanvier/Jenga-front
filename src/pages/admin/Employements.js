import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Employement from '../../components/employements/Employment';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { Typography } from '@mui/material';
import Number from '../../components/employements/Numbers';

function EmployementsContent() {
  return (
    <Grid container spacing={3}>
      <Grid md={6} sm={12}>
        <Typography
          component="div"
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            gutterBottom
          >
            Employements
          </Typography>
        </Typography>
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Number
          title="Number of employements"
          number="12000"
        />
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Number
          title="Amount Generated"
          number="43899"
          currency="$"
        />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Employement />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default function Employements() {
  return (
    <DashboardLayout name="Employements">
      <EmployementsContent />
    </DashboardLayout>
  );
}
