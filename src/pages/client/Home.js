/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import Carousel, {
  slidesToShowPlugin,
  autoplayPlugin,
  Dots,
} from '@brainhubeu/react-carousel';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Categories from '../../components/Categories';
import RecentPost from '../../components/RecentPost';
import {
  getCategories,
  getUsers,
} from '../../redux/action';
import mySlides from '../../utils/slides';
import profits from '../../utils/profits';
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
    // background: `url(${backgroundImage})`,
    width: '60vw',
    // minHeight: 'calc(100vh - 80px)',
    height: '50vh',
    marginTop: '100px',
    backgroundSize: 'cover',
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

const HeroSlider = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const [slides, setSlides] = React.useState();

  return (
    <>
      <Carousel
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            },
          },
        ]}
        animationSpeed={1500}
        value={value}
        onChange={(e) => setValue(e)}
        slides={mySlides.map((item, i) => (
          <div
            className={classes.hero}
            key={i}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className={classes.heroContent}>
              <Typography
                component="h4"
                variant="h3"
                gutterBottom
              >
                {item.title}
              </Typography>
            </div>
          </div>
        ))}
      />
      <Dots
        value={value}
        number={mySlides.length}
        onChange={(e) => setValue(e)}
      />
    </>
  );
};

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openMore, setOpenMore] = React.useState(false);
  const [homeUsers, setHomeUsers] = React.useState([]);
  const { categories } = useSelector(
    (state) => state.categories
  );
  const { users } = useSelector((state) => state.users);

  React.useEffect(() => {
    const filterUsers = users.filter(
      (user) => user.skills?.length !== 0
    );
    setHomeUsers(filterUsers);
  }, [users]);

  React.useEffect(() => {
    dispatch(getCategories());
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      <>
        <Typography component="div" sx={{}}>
          <HeroSlider classes={classes} />
        </Typography>

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
                    mb: 1.5,
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
        {categories.length !== 0 && (
          <Categories categories={categories} />
        )}
        <RecentPost
          categories={categories}
          openModel={setOpenMore}
        />
      </>
      <TransitionsModal
        open={openMore}
        setOpen={setOpenMore}
      >
        <HireCard />
      </TransitionsModal>
    </Box>
  );
};
