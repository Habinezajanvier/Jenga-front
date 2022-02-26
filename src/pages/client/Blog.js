/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import Main from '../../components/Blog';
import { Typography } from '@mui/material';
import Sidebar from '../../components/Blog/SideBar';
import { getAdverts, getStories } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import HeroSlider from '../../components/BlogSlider';
import ActiveFeed from '../../components/Blog/Main';
import { Box } from '@mui/system';

export default function Blog() {
  const dispatch = useDispatch();
  const [activePost, setActivePost] = React.useState({});
  const { adverts } = useSelector((state) => state.adverts);
  const { feeds } = useSelector((state) => state.feeds);
  document.title = 'Feeds | Jenga';

  React.useEffect(() => {
    dispatch(getAdverts());
    dispatch(getStories());
  }, []);

  const updateActiveFeed = (post) => {
    setActivePost(post);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        mb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography component="div" sx={{}}>
          <HeroSlider slides={adverts} />
        </Typography>
        <main>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item md={8} sm={12}>
              {feeds.length !== 0 && (
                <ActiveFeed
                  feed={
                    Boolean(activePost.id)
                      ? activePost
                      : feeds[0]
                  }
                />
              )}
            </Grid>
            {feeds.length !== 0 && (
              <Sidebar
                archives={feeds.slice(0, 8)}
                action={updateActiveFeed}
              />
            )}
          </Grid>
        </main>
      </Container>
    </Box>
  );
}
