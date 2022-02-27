/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Categories from '../../components/UserCategories';
import UsersContent from '../../components/ClientUsers';
import {
  getCategories,
  getUsers,
  getUsersBySkill,
} from '../../redux/action';
import TransitionsModal from '../../components/shared/Model';
import HireCard from '../../components/HireCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    // paddingTop: '100px',
  },
  hero: {
    position: 'relative',
    width: '60vw',
    // minHeight: 'calc(100vh - 80px)',
    height: '50vh',
    marginTop: '100px',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '#717072c5',
    '& *': {
      color: '#fff',
    },
    '& h4': {
      textAlign: 'center',
      marginTop: '18%',
      textTransform: 'capitalize',
    },
  },
  welcomeSection: {
    width: '80%',
    margin: '3.4rem auto',
    marginBottom: '6rem',
    '& h6': {
      fontSize: '1.2rem',
      color: '#000',
      fontWeight: '500',
    },
    '& p': {
      lineHeight: '1.6rem',
      fontSize: '1rem',
      color: '#999',
    },
  },
  icons: {
    fontSize: '2.8rem',
    color: theme.primary,
  },
}));

export default function Users() {
  document.title = 'Workers | Jenga';
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openMore, setOpenMore] = React.useState(false);
  const [user, setUser] = React.useState({});
  const { categories } = useSelector(
    (state) => state.categories
  );
  const { users } = useSelector((state) => state.users);
  const location = useLocation();

  React.useEffect(() => {
    const id = location.search.split('=')[1];
    dispatch(getCategories());
    id
      ? dispatch(getUsersBySkill(id))
      : dispatch(getUsers());
  }, [dispatch]);
  const getSkillUsers = (id) => {
    dispatch(getUsersBySkill(id));
  };
  return (
    <Box className={classes.root}>
      <>
        {categories.length !== 0 && (
          <Categories
            categories={categories}
            action={getSkillUsers}
          />
        )}
        {users && (
          <UsersContent
            users={users}
            openModel={setOpenMore}
            setUser={setUser}
          />
        )}
      </>
      <TransitionsModal
        open={openMore}
        setOpen={setOpenMore}
      >
        <HireCard user={user} />
      </TransitionsModal>
    </Box>
  );
}
