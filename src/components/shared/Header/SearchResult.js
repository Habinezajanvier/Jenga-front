import * as React from 'react';
import {
  Skeleton,
  Grid,
  Typography,
  Avatar,
} from '@mui/material';

const SkeletonLoader = () => (
  <Typography component="div">
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Skeleton
          animation="wave"
          variant="circular"
          width={40}
          height={40}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          style={{ marginBottom: 6 }}
        />
        <Skeleton
          animation="wave"
          height={10}
          width="40%"
        />
      </Grid>
    </Grid>
  </Typography>
);

export default function SearchResult({ loading, users }) {
  return (
    <Typography component="div">
      {loading ? (
        [...new Array(6)].map((item, i) => (
          <SkeletonLoader key={i} />
        ))
      ) : (
        <Typography component="div">
          {users.map((user, i) => (
            <Typography
              component="div"
              key={i}
              sx={{
                background: '#AEBEB4',
              }}
            >
              <a href={`/user_profile/${user.id}`}>
                <Grid
                  container
                  spacing={2}
                  sx={{ mt: 0.1 }}
                >
                  <Grid
                    item
                    sm={6}
                    md={2}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      alt="Ted talk"
                      src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        m: 0.2,
                        fontWeight: '700',
                        fontSize: 24,
                      }}
                    >
                      {user.firstname} {user.lastname}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        m: 0.2,
                        fontWeight: '400',
                        fontSize: 14,
                      }}
                    >
                      {user.profileTitle}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4} md={2}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {user.location}
                    </Typography>
                  </Grid>
                </Grid>
              </a>
            </Typography>
          ))}
        </Typography>
      )}
    </Typography>
  );
}
