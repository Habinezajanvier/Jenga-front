import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DashboardLayout from '../../components/shared/DashboardLayout';
import AdvertContent from '../../components/Advert/AdvertContent';
import Button from '../../components/Advert/Button';
import TransitionsModal from '../../components/shared/Model';
import AddAdvertForm from '../../components/Advert/CreateAdvert';
import {
  deleteAdverts,
  getAdverts,
} from '../../redux/action';

function AdvertContents() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { adverts, createSuccess, deleteSuccess } =
    useSelector((state) => state.adverts);

  React.useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch, createSuccess, deleteSuccess]);

  const handleDelete = (id) => {
    dispatch(deleteAdverts(id));
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
          {adverts.length !== 0 && (
            <AdvertContent
              adverts={adverts}
              deleteAction={handleDelete}
            />
          )}
        </Paper>
      </Grid>
      <TransitionsModal open={open} setOpen={setOpen}>
        <AddAdvertForm />
      </TransitionsModal>
    </Grid>
  );
}

export default function Adverts() {
  return (
    <DashboardLayout name="Adverts">
      <AdvertContents />
    </DashboardLayout>
  );
}
