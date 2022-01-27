import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea,
  CardActions,
  Button,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import portrait from '../../assets/images/portrait.png';
import moment from 'moment';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import Loader from 'react-spinners/BeatLoader';

export default function ProfileCard({
  user,
  openModel,
  requestUser,
}) {
  const [id, setId] = React.useState('');
  React.useEffect(() => {
    const token = localStorage.IdToken;
    const { id } = jwtDecode(token);
    setId(id);
  });
  const { employeeLoading } = useSelector(
    (state) => state.users
  );

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={portrait}
          alt="profile_image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            align="center"
          >
            {user.firstname} {user.lastname}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
          >
            {user.profileTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {user.email}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
          >
            {user.phoneNumber}
          </Typography>
          <Typography
            component="div"
            gutterBottom
            sx={{
              marginTop: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              from
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={900}
            >
              {user.nationality}
            </Typography>
          </Typography>
          <Typography
            component="div"
            gutterBottom
            sx={{
              marginTop: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Location
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={900}
            >
              {user.location}
            </Typography>
          </Typography>
          <Typography
            component="div"
            gutterBottom
            sx={{
              marginTop: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Member since
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={900}
            >
              {moment(user.createdAt).format('MMM YYYY')}
            </Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {user.id === id && (
          <IconButton onClick={() => openModel(true)}>
            <EditIcon color="primary" />
          </IconButton>
        )}
        {user.id !== id && (
          <Button
            onClick={() => requestUser(user.id)}
            variant="text"
          >
            {employeeLoading ? (
              <Loader color="#3E8E7E" />
            ) : (
              'Hire me'
            )}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
