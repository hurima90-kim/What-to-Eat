import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from './Link';
import {
  AppBar,
  // Avatar,
  Box,
  Button,
  Container,
  // IconButton,
  Tooltip,
  Toolbar,
  IconButton,
} from '@mui/material';
import Image from 'next/image';
import { logoutAction } from '../reducers';

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const logoutHandler = useCallback(() => {
    dispatch(logoutAction());
  });

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton component={Link} href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width="150px"
              height="50px"
            />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sign Up">
              <Button
                variant="outlined"
                component={Link}
                color="secondary"
                href="/signup"
                disableRipple
                sx={{ color: 'secondary', mr: '20px' }}
              >
                SignUp
              </Button>
            </Tooltip>
            <Tooltip title="Sign In">
              {isLoggedIn ? (
                // <IconButton sx={{ p: 0 }}>
                //   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                // </IconButton>
                <Button
                  type="submit"
                  onClick={logoutHandler}
                  variant="contained"
                  color="secondary"
                  component={Link}
                  href="/"
                  disableRipple
                  sx={{ color: 'white' }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  href="/signin"
                  disableRipple
                  sx={{ color: 'white' }}
                >
                  SignIn
                </Button>
              )}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
