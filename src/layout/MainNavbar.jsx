import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from '../components/logo/Logo';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import Groups2Icon from '@mui/icons-material/Groups2';
import { useNavigate, useLocation } from 'react-router';
import { getLoginUser, removeLoginUser } from '../storage/LoginStorage';
import LoginIcon from '@mui/icons-material/Login';

const pages = [
  { label: 'Colaboladores', url: '/dashboard' },
  { label: 'Criar colaborador', url: '/new' },
  { label: 'Quem somos?', url: '/who' }
];

const settings = [
  { label: 'Perfil', url: '/' },
  { label: 'Conta', url: '/' },
  { label: 'Menu', url: '/' },
  { label: 'Sair', url: '/login' }
];

function MainNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation(); 

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

  const handleMenuClick = (setting) => {
    if (setting.label === 'Sair') {
      removeLoginUser();
    }
    handleCloseUserMenu();
    navigate(setting?.url);
  };

  const isLoginPage = location.pathname === '/login';
  const isLoggedIn = getLoginUser();

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar sx={{ height: 64 }}>
          <Logo />
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => navigate('/dashboard')}
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
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages?.map((page) => (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box display='flex' justifyContent='center' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages?.map((page) => 
                    <Button
                      key={page.label}
                      onClick={() => navigate(page?.url)}
                      sx={{ color: 'white', display: 'block' }}
                    >
                      <Groups2Icon style={{ height: '1rem', width: '2rem' }} />
                      {page?.label}
                    </Button>
                  )
                }
              </Box>

              {!isLoginPage && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title={isLoggedIn ? 'Olá, Colaborador(a)' : 'Entre em sua conta'}>
                    <IconButton onClick={isLoggedIn ? handleOpenUserMenu : ()=>navigate('/login')} sx={{ p: 0 }}>
                      <Avatar alt="teoria" src="">{isLoggedIn ? 'A' : <LoginIcon />}</Avatar>
                    </IconButton>
                  </Tooltip>
                  {isLoggedIn &&  <Menu
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
                        <MenuItem key={setting.label} onClick={() => handleMenuClick(setting)}>
                          <Typography sx={{ textAlign: 'center' }}>{setting.label}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  }
                </Box>
              )}
            </Toolbar>
          </Container>
          <Box sx={{ ml: 1 }} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default MainNavbar;
