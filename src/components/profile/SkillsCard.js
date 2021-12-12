import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function SKillsCard({ skills }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
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
            gutterBottom
            variant="h5"
            component="div"
            align="center"
          >
            Skills
          </Typography>
          <Typography component="div">
            <IconButton>
              <AddIcon color="primary" />
            </IconButton>
          </Typography>
        </Typography>
        {skills.length !== 0 && (
          <Grid container spacing={3}>
            {skills.map((skill) => (
              <Grid item xs="auto">
                <Paper
                  sx={{ padding: 1, cursor: 'pointer' }}
                >
                  {skill?.name}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
