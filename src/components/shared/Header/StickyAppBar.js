import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import {
  getSelfProfile,
  logoutUser,
} from '../../../redux/action';
import NavButton from './navButton';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  LocationSearch,
} from './SearchButton';

const pages = [
  // 'Home',
  // 'About',
  // 'Contact',
  // 'Want a Job',
  // 'Post a Job',
  {
    name: 'Jenga',
    link: '/',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  // {
  //   name: 'About Us',
  //   link: '/about',
  // },
  // {
  //   name: 'Find Freelancers',
  //   link: '/freelancers',
  // },
];
const settings = [
  'Profile',
  'Account',
  'Dashboard',
  'Logout',
];

const ResponsiveAppBar = ({ styles }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] =
    React.useState(null);
  const [anchorElUser, setAnchorElUser] =
    React.useState(null);

  const { authenticated } = useSelector(
    (state) => state.auth
  );
  const { profile } = useSelector((state) => state.users);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDirects = (nav) => {
    const link = nav.toLowerCase();
    link === 'logout'
      ? dispatch(logoutUser())
      : history.push(`/${link}`);
  };

  React.useEffect(() => {
    if (authenticated) {
      dispatch(getSelfProfile());
    }
  }, [authenticated, dispatch]);

  return (
    <Toolbar sx={{ ...styles }} disableGutters>
      <Typography
        component="div"
        sx={{
          display: { md: 'flex' },
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            // flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ml: { md: 4, sm: 2 },
          }}
        >
          {pages.map((page) => (
            <NavButton to={page.link}>
              {page.name}
            </NavButton>
          ))}
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Divider orientation="vertical" flexItem />
          <LocationSearch
            placeholder="Search Location"
            inputProps={{
              'aria-label': 'search location',
            }}
          />
        </Search>

        <Box sx={{ flexGrow: 0, mr: 8 }}>
          {authenticated && profile && (
            <Tooltip
              title={`${profile.firstname} ${profile.lastname}`}
            >
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt={profile.firstname}
                  src={profile.profileImage}
                />
              </IconButton>
            </Tooltip>
          )}
          {!authenticated && (
            <div
              style={{
                display: 'flex',
                marginRight: '4.6rem',
              }}
            >
              <NavButton to="/login">Login</NavButton>
              <NavButton to="/signup">join</NavButton>
            </div>
          )}
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  handleCloseUserMenu();
                  handleDirects(setting);
                }}
              >
                <Typography textAlign="center">
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Typography>
    </Toolbar>
  );
};
export default ResponsiveAppBar;
