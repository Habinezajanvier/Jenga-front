import * as React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
// import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CategoryIcon from '@mui/icons-material/Category';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import List from '@mui/material/List';

export const MainListItems = () => {
  const history = useHistory();

  const handleClick = (link) => {
    history.push(link);
  };
  return (
    <List>
      <div>
        <ListItem
          button
          onClick={() => handleClick('/dashboard')}
        >
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/jobs')}
        >
          <ListItemIcon>
            <WorkIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Jobs" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/users')}
        >
          <ListItemIcon>
            <PeopleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/admin/categories')}
        >
          <ListItemIcon>
            <CategoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleClick('/admin/adverts')}
        >
          <ListItemIcon>
            <AddBusinessIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Adverts" />
        </ListItem>
        {/* <ListItem
          button
          onClick={() => handleClick('/reports')}
        >
          <ListItemIcon>
            <BarChartIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem> */}
        <ListItem
          button
          onClick={() => handleClick('/employements')}
        >
          <ListItemIcon>
            <AccountBalanceIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Employements" />
        </ListItem>
      </div>
    </List>
  );
};

export const SecondaryListItems = () => {
  return (
    <List>
      <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItem>
        {/* <ListItem button>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItem> */}
      </div>
    </List>
  );
};
