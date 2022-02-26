/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Categories from '../../components/Categories';
import RecentPost from '../../components/RecentPost';
import {
  getAdverts,
  getCategories,
  getUsers,
} from '../../redux/action';
import profits from '../../utils/profits';
import TransitionsModal from '../../components/shared/Model';
import HireCard from '../../components/HireCard';
import HeroSlider from '../../components/Slider';

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
      padding: '0 4rem 0 4rem',
      fontSize: '19pt',
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

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openMore, setOpenMore] = React.useState(false);
  const { adverts } = useSelector((state) => state.adverts);
  // const [homeUsers, setHomeUsers] = React.useState([]);
  const [user, setUser] = React.useState({});
  const { categories } = useSelector(
    (state) => state.categories
  );
  // const { users } = useSelector((state) => state.users);

  // React.useEffect(() => {
  //   const filterUsers = users.filter(
  //     (user) => user.skills?.length !== 0
  //   );
  //   setHomeUsers(filterUsers);
  // }, [users]);

  React.useEffect(() => {
    dispatch(getCategories());
    dispatch(getUsers());
    dispatch(getAdverts());
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      <>
        <Typography component="div" sx={{}}>
          <HeroSlider slides={adverts} />
        </Typography>
        {categories.length !== 0 && (
          <Categories categories={categories} />
        )}
        <RecentPost
          categories={categories}
          openModel={setOpenMore}
          setUser={setUser}
        />
        <div>
          <Grid
            container
            spacing={4}
            className={classes.welcomeSection}
            id="hero-slider"
          >
            {profits.map((item, i) => (
              <Grid item md={3} key={i}>
                {item.icon}
                <Typography
                  component="h6"
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{
                    mt: 2,
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  gutterBottom
                >
                  {item.content}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </>
      <TransitionsModal
        open={openMore}
        setOpen={setOpenMore}
      >
        <HireCard user={user} />
      </TransitionsModal>
    </Box>
  );
};
