import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Carousel, {
  // slidesToShowPlugin,
  autoplayPlugin,
  Dots,
} from '@brainhubeu/react-carousel';
import Typography from '@mui/material/Typography';

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
}));

const HeroSlider = ({ slides }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [slides, setSlides] = React.useState();

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
        slides={slides.map((item, i) => (
          <div
            className={classes.hero}
            key={i}
            style={{
              backgroundImage: `url(${item.thumbnail})`,
            }}
          >
            <div className={classes.heroContent}>
              <Typography
                component="h4"
                variant="h3"
                gutterBottom
              >
                <a
                  href={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.title}
                </a>
              </Typography>
            </div>
          </div>
        ))}
      />
      <Dots
        value={value}
        number={slides.length}
        onChange={(e) => setValue(e)}
      />
    </>
  );
};

export default HeroSlider;
