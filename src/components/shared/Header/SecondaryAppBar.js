import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(
      theme.palette.common.white,
      0.25
    ),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const pages = ['how it works', 'our Blog'];

export default function SearchAppBar({ styles }) {
  return (
    <Toolbar
      sx={{
        ...styles,
        justifyContent: 'space-between',
        background: '#004120',
      }}
    >
      <Typography
        noWrap
        component="div"
        sx={{
          flexGrow: { sm: 1, md: 0.5, lg: 0.3 },
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}
        >
          Jenga
        </Typography>
        <Typography
          noWrap
          component="div"
          sx={{
            flexGrow: { sm: 1, md: 0.5, lg: 0.3 },
            display: { xs: 'none', sm: 'flex' },
          }}
        >
          {pages.map((item) => (
            <Typography
              variant="body1"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {item}
            </Typography>
          ))}
        </Typography>
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Toolbar>
  );
}
