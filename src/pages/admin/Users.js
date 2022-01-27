import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import UsersTable from '../../components/Users/Users';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { Typography } from '@mui/material';
import Statistics from '../../components/Users/Statistic';
import VerticalChart from '../../components/Users/Barchart';
import { getUsers } from '../../redux/action';

function JobContent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { users } = useSelector((state) => state.users);
  const dataGender = {
    labels: [`Female (50%)`, `Male (60%)`],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 60],
        backgroundColor: ['#3E8E7E', '#9C433D'],
        borderColor: ['#3E8E7E', '#9C433D'],
        borderWidth: 1,
      },
    ],
  };
  const dataRole = {
    labels: [`Employer (50%)`, `Employee (60%)`],
    datasets: [
      {
        label: '# of Votes',
        data: [50, 60],
        backgroundColor: ['#3E8E7E', '#9C433D'],
        borderColor: ['#3E8E7E', '#9C433D'],
        borderWidth: 1,
      },
    ],
  };
  const dataEmployers = {
    labels: [
      'software dev',
      'front dev',
      'backend dev',
      'Drivers',
    ],
    datasets: [
      {
        label: 'Users per employements',
        data: [50, 60, 70, 10],
        backgroundColor: ['#3E8E7E'],
        // borderColor: ['#cf1b33', '#078ece'],
        borderWidth: 1,
      },
    ],
  };

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
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
            Users
          </Typography>
        </Typography>
        <VerticalChart data={dataEmployers} />
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Statistics
          title="Users by Gender"
          data={dataGender}
        />
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Statistics
          title="Users by Roles"
          data={dataRole}
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
          {users.length !== 0 && (
            <UsersTable users={users} history={history} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default function Users() {
  return (
    <DashboardLayout name="Users">
      <JobContent />
    </DashboardLayout>
  );
}
