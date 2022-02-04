import React from 'react';
import {
  Grid,
  Typography,
  Popover,
  MenuList,
  MenuItem,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '1rem auto',
    marginBottom: '6rem',
  },
  heading: {
    '& h2': {
      textAlign: 'center',
      color: '#999',
      marginTop: '1.4rem',
      fontSize: '1.2rem',
    },
    '& h1': {
      textAlign: 'center',
      fontWeight: '500',
      marginTop: '1.6rem',
      marginBottom: '3.1rem',
      '& span': {
        fontWeight: '700',
      },
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    border: 'solid 1px #5DD28E',
    borderRadius: '.4rem',
    marginLeft: '1.3rem',
    padding: '.4rem .9rem',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#E9F8EF',
      color: '#5DD28E',
    },
    '& > h2': {
      fontSize: '.9rem',
    },
    '& > div': {
      backgroundColor: '#E9F8EF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItem: 'center',
      padding: '.1rem .4rem',
      borderRadius: '.2rem',
    },
  },
}));

const Categories = ({ categories, action = undefined }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openedPopoverId, setOponedPopoverId] =
    React.useState(null);

  const handlePopoverOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setOponedPopoverId(id);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setOponedPopoverId(null);
  };

  const open = Boolean(anchorEl);
  return (
    <>
      <div className={classes.root}>
        <div className={classes.heading}>
          <Typography variant="h6" component="h2">
            Skill's categories waiting for you
          </Typography>
          <Typography variant="h4" component="h1">
            Current <span> Categories</span>
          </Typography>
        </div>
        <div>
          <Grid container spacing={2}>
            {categories.map((item, i) => (
              <Grid item md={3} sm={6} xs={12} key={i}>
                <Typography
                  component="div"
                  aria-haspopup="true"
                  aria-describedby={`mouse-over-popover-${item.id}`}
                  aria-owns={
                    open
                      ? `mouse-over-popover-${item.id}`
                      : undefined
                  }
                  className={classes.content}
                  onMouseEnter={(e) =>
                    handlePopoverOpen(e, item.id)
                  }
                  onMouseLeave={handlePopoverClose}
                >
                  <Typography variant="h6" component="h2">
                    {item.name}
                  </Typography>
                  {item.skills.length !== 0 && (
                    <Typography variant="p" component="div">
                      {item.skills.length}
                    </Typography>
                  )}
                  {item.skills.length !== 0 && (
                    <Popover
                      id={`mouse-over-popover-${item.id}`}
                      // sx={{
                      //   pointerEvents: 'none',
                      // }}
                      open={openedPopoverId === item.id}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      onClose={handlePopoverClose}
                      disableRestoreFocus
                    >
                      <MenuList>
                        {item.skills.map((item) => (
                          <MenuItem>
                            <Typography
                              key={item.id}
                              sx={{ p: 1 }}
                              onClick={() =>
                                action(item.id)
                              }
                            >
                              {item.name}
                            </Typography>
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Popover>
                  )}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Categories;
