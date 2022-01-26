import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Chart from '../../components/Dashboard/Chart';
import Deposits from '../../components/Dashboard/Deposits';
import Employement from '../../components/Dashboard/Employement';
import DashboardLayout from '../../components/shared/DashboardLayout';

function DashboardContent() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
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

export default function Dashboard() {
  return (
    <DashboardLayout name="Dashboard">
      <DashboardContent />
    </DashboardLayout>
  );
}
