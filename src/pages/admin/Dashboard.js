import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '../../components/Dashboard/Chart';
import Numbers from '../../components/Dashboard/Numbers';
import Employement from '../../components/Dashboard/Employement';
import DashboardLayout from '../../components/shared/DashboardLayout';
import {
  getCategories,
  getOffers,
  getSkills,
  getUsers,
} from '../../redux/action';

function DashboardContent() {
  const dispatch = useDispatch();

  const { offers } = useSelector((state) => state.offers);
  const { users } = useSelector((state) => state.users);
  const { categories } = useSelector(
    (state) => state.categories
  );
  const { skills } = useSelector((state) => state.skills);

  React.useEffect(() => {
    dispatch(getOffers());
    dispatch(getUsers());
    dispatch(getCategories());
    dispatch(getSkills());
  }, [dispatch]);
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
          {offers.length !== 0 && <Chart offers={offers} />}
        </Paper>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              mt: 3,
            }}
          >
            {offers.length !== 0 && (
              <Employement offers={offers.slice(0, 10)} />
            )}
          </Paper>
        </Grid>
      </Grid>

      <Grid item xs={12} md={4} lg={3}>
        <Numbers
          title="Total Employments"
          number={offers.length}
        />
        <Numbers
          title="Number of Users"
          number={users.length}
        />
        <Numbers
          title="Number of Categories"
          number={categories.length}
        />
        <Numbers
          title="Number of Skills"
          number={skills.length}
        />
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
