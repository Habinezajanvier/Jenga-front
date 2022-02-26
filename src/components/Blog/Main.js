import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';

export default function ActiveFeed({ feed }) {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        '& img': {
          objectFit: 'contain !important',
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: '#135029' }}
            aria-label="recipe"
          >
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={feed.title}
        subheader={moment(feed.createdAt).format(
          'MMM Do, YYYY'
        )}
      />
      {feed.image && (
        <CardMedia
          component="img"
          height="300"
          image={feed.image}
          alt="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {feed.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
    </Card>
  );
}
