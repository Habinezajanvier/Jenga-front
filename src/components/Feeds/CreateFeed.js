import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { storage } from '../../firebase/config';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardActionArea, CardMedia } from '@mui/material';
import { createStory } from '../../redux/action';
import Loading from '../shared/Loaders/SmallLoader';

const Input = styled('input')({
  display: 'none',
});

const AddAdvertForm = () => {
  const dispatch = useDispatch();
  const [advert, setAdvert] = React.useState({
    title: '',
    image: '',
    text: '',
  });
  const [progress, setProgress] = React.useState(null);
  const { loading, createSuccess } = useSelector(
    (state) => state.feeds
  );

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAdvert((advert) => ({ ...advert, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createStory(advert));
  };

  React.useEffect(() => {
    if (createSuccess) {
      setAdvert({
        title: '',
        image: '',
        text: '',
      });
    }
  }, [createSuccess]);

  const onFileChange = (e) => {
    const selected = e.target.files[0];
    const accepted = ['image/png', 'image/jpeg'];

    if (selected && accepted.includes(selected.type)) {
      const storageRef = storage.ref(selected.name);
      storageRef.put(selected).on(
        'state_changed',
        (snap) => {
          let percentage =
            (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setAdvert((item) => ({
            ...item,
            image: url,
          }));
          setProgress(null);
        }
      );
    } else {
      const errorMsg = 'Selected file is not an image type';
      alert(errorMsg);
    }
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Add New Story
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={onFileChange}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <Typography>
            {progress
              ? `loading ${progress.toFixed(2)} %`
              : advert.image && (
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={advert.image}
                        alt="_thumbnail_"
                      />
                    </CardActionArea>
                  </Card>
                )}
          </Typography>
        </Stack>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Story title"
          name="title"
          autoComplete="title"
          autoFocus
          value={advert.title}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          multiline
          name="text"
          label="Text"
          id="text"
          autoComplete="text"
          value={advert.text}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? <Loading /> : 'Save'}
        </Button>
      </Box>
    </>
  );
};

export default AddAdvertForm;
