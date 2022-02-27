import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import portrait from '../assets/images/img_avatar.png';
import PrimaryButton from './shared/PrimaryButton';

export default function UserCard({
  hireAction,
  moreAction,
  user,
  setUser,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* {user.profileImage && ( */}
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={user.profileImage || portrait}
        // image={portrait}
      />
      {/* )} */}
      <CardContent
        sx={{
          height: 120,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
        >
          {user.firstname} {user.lastname}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle3"
          color="text.secondary"
        >
          {user.profileTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.bios}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          onClick={() => {
            setUser(user);
            hireAction(true);
          }}
          size="small"
        >
          Hire me
        </Button>
        {/* <Button size="small">Learn more</Button> */}
        <PrimaryButton to={`/user_profile/${user.id}`}>
          learn more
        </PrimaryButton>
      </CardActions>
    </Card>
  );
}
