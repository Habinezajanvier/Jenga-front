import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Employement from '../../components/employements/Employment';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { Typography } from '@mui/material';
import Number from '../../components/employements/Numbers';
import { getOffers, updateOffer } from '../../redux/action';

function EmployementsContent() {
  const dispatch = useDispatch();

  const { offers, updateSuccess } = useSelector(
    (state) => state.offers
  );

  React.useEffect(() => {
    dispatch(getOffers());
  }, [dispatch, updateSuccess]);

  const handleUpdate = (id, data) => {
    dispatch(updateOffer(id, data));
  };
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
          number={offers?.length}
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
          {offers.length !== 0 && (
            <Employement
              offers={offers}
              action={handleUpdate}
            />
          )}
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
