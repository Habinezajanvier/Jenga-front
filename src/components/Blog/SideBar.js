import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import portrait from '../../assets/images/img_avatar.png';
import moment from 'moment';

function ListContent({ post, action }) {
  return (
    // <Grid item xs={12} md={6}>
    <CardActionArea
      // component="a"
      // href="#"
      onClick={() => action(post)}
      sx={{ mb: 2 }}
    >
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h6">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle3"
            color="text.secondary"
          >
            {moment(post.createdAt).format('MMM Do, YYYY')}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
        {post.image && (
          <CardMedia
            component="img"
            sx={{
              width: 120,
              display: { xs: 'none', sm: 'block' },
            }}
            image={post.image}
            alt="story_image"
          />
        )}
      </Card>
    </CardActionArea>
    // </Grid>
  );
}

function Sidebar(props) {
  const { archives, action } = props;

  return (
    <Grid container spacing={2} item xs={12} md={4}>
      {/* <Typography
        variant="h4"
        component="h2"
        color="primary"
        gutterBottom
        sx={{ mt: 3 }}
      >
        Stories
      </Typography> */}
      {archives.map((archive) => (
        <Grid item xs={12} sm={6} md={12}>
          <ListContent post={archive} action={action} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Sidebar;
