import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {
  getSkills,
  assignUserSkill,
} from '../../redux/action';

export default function SKillsCard({ skills, id }) {
  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] =
    React.useState([]);
  const { skills: allSkills } = useSelector(
    (state) => state.skills
  );
  React.useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? 'simple-popover' : undefined;

  const assignSkill = (skillId) => {
    dispatch(assignUserSkill(skillId, id));
    setSelectedSkills([...selectedSkills, skillId]);
  };

  React.useEffect(() => {
    setSelectedSkills([...skills.map((item) => item.id)]);
  }, [skills]);
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
            <IconButton onClick={handleClick}>
              <AddIcon color="primary" />
            </IconButton>
            <Popover
              id={popoverId}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <MenuList>
                {allSkills?.map((item) => (
                  <MenuItem
                    onClick={() => assignSkill(item.id)}
                    disabled={selectedSkills.includes(
                      item.id
                    )}
                  >
                    <Typography
                      key={item?.id}
                      sx={{ p: 1 }}
                    >
                      {item?.name}
                    </Typography>
                  </MenuItem>
                ))}
              </MenuList>
            </Popover>
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
