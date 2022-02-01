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
import { Link, Popover } from '@mui/material/';
import {
  getSelfProfile,
  logoutUser,
  searchUser,
} from '../../../redux/action';
import NavButton from './navButton';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  LocationSearch,
} from './SearchButton';
import logo from '../../../assets/images/logo.png';
import SearchResult from './SearchResult';

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
  const [query, setQuery] = React.useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const { authenticated } = useSelector(
    (state) => state.auth
  );
  const { profile, searchLoading, searchResult } =
    useSelector((state) => state.users);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchUser(query));
    setAnchorEl(e.currentTarget);
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
          // display: { md: 'flex' },
          display: 'flex',
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
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link color="inherit" href="/blog">
                  Blog
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link color="inherit" href="/login">
                  Login
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link color="inherit" href="/singup">
                  Join Us
                </Link>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            // flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ml: { md: 4, sm: 2 },
          }}
        >
          <Typography
            sx={{
              width: { md: 150, xs: '100%' },
            }}
          >
            <a href="/">
              <img
                style={{ width: '100%' }}
                src={logo}
                alt="_jenga_logo_"
              />
            </a>
          </Typography>
          {/* {pages.map((page) => (
            <NavButton to={page.link}>
              {page.name}
            </NavButton>
          ))} */}
        </Box>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <form onSubmit={handleSubmit}>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
          </form>
          <Divider orientation="vertical" flexItem />
          <LocationSearch
            placeholder="Search Location"
            inputProps={{
              'aria-label': 'search location',
            }}
          />
        </Search>

        <Box sx={{ flexGrow: 0, mr: { md: 8, sm: 3 } }}>
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
          <Typography
            component="div"
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginRight: '3rem',
            }}
          >
            <NavButton to="/login">Blog</NavButton>
            {!authenticated && (
              <NavButton to="/login">Login</NavButton>
            )}
            {!authenticated && (
              <Typography
                component="div"
                sx={{
                  background: '#083C1B',
                  borderRadius: 2,
                }}
              >
                <NavButton to="/signup">Join Us</NavButton>
              </Typography>
            )}
          </Typography>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        sx={{
          width: '80vw',
        }}
      >
        <Typography
          sx={{ width: { sm: '95vh', md: '80vh' } }}
        >
          <SearchResult
            loading={searchLoading}
            users={searchResult}
          />
        </Typography>
      </Popover>
    </Toolbar>
  );
};
export default ResponsiveAppBar;
