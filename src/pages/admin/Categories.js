import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import DashboardLayout from '../../components/shared/DashboardLayout';
import { Typography } from '@mui/material';
import Button from '../../components/categories/Button';
import VerticalChart from '../../components/Users/Barchart';
import CategoriesTable from '../../components/categories/CategoriesTable';
import Number from '../../components/categories/Numbers';
import Title from '../../components/shared/Title';
import TransitionsModal from '../../components/shared/Model';
import AddCateogyForm from '../../components/categories/AddCategory';
import { getCategories } from '../../redux/action';

function CategoryContent() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { categories, assignSuccess } = useSelector(
    (state) => state.categories
  );
  const dataEmployers = {
    labels: [
      'software dev',
      'front dev',
      'backend dev',
      'Drivers',
    ],
    datasets: [
      {
        label: 'Users per categories',
        data: [50, 60, 70, 10],
        backgroundColor: ['#3E8E7E'],
        // borderColor: ['#cf1b33', '#078ece'],
        borderWidth: 1,
      },
    ],
  };

  React.useEffect(() => {
    dispatch(getCategories());
  }, [dispatch, assignSuccess]);

  const handleOpenAddCategoryModel = () => setOpen(true);
  return (
    <Grid container spacing={3}>
      <Grid md={6} sm={12}>
        <Typography
          component="div"
          sx={{
            p: 3,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            gutterBottom
          >
            Categories
          </Typography>
        </Typography>
        <VerticalChart data={dataEmployers} />
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Number title="Total Categories" number="12" />
        <Number title="Total Skills" number={1200} />
      </Grid>
      <Grid md={3} sm={6} xs={12}>
        <Button
          title="Add category"
          action={handleOpenAddCategoryModel}
        />
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Title>All Categories</Title>
          {categories.length !== 0 && (
            <CategoriesTable categories={categories} />
          )}
        </Paper>
      </Grid>
      <TransitionsModal open={open} setOpen={setOpen}>
        <AddCateogyForm />
      </TransitionsModal>
    </Grid>
  );
}

export default function Categories() {
  return (
    <DashboardLayout name="Categories">
      <CategoryContent />
    </DashboardLayout>
  );
}
