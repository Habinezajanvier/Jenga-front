import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DashboardLayout from '../../components/shared/DashboardLayout';
import FeedContent from '../../components/Feeds/FeedContent';
import Button from '../../components/Feeds/Button';
import TransitionsModal from '../../components/shared/Model';
import AddFeedForm from '../../components/Feeds/CreateFeed';
import {
  deleteStory,
  getStories,
} from '../../redux/action';

function AdvertContents() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { feeds, createSuccess, deleteSuccess } =
    useSelector((state) => state.feeds);

  React.useEffect(() => {
    dispatch(getStories());
  }, [dispatch, createSuccess, deleteSuccess]);

  const handleDelete = (id) => {
    dispatch(deleteStory(id));
  };

  const handleOpenAddCategoryModel = () => setOpen(true);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}></Grid>

      <Grid item xs={12} md={4} lg={3}>
        {/* <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        > */}
        <Button
          title="Add Advert"
          action={handleOpenAddCategoryModel}
        />
        {/* </Paper> */}
      </Grid>

      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {feeds.length !== 0 && (
            <FeedContent
              adverts={feeds}
              deleteAction={handleDelete}
            />
          )}
        </Paper>
      </Grid>
      <TransitionsModal open={open} setOpen={setOpen}>
        <AddFeedForm />
      </TransitionsModal>
    </Grid>
  );
}

export default function Adverts() {
  return (
    <DashboardLayout name="Feeds">
      <AdvertContents />
    </DashboardLayout>
  );
}
