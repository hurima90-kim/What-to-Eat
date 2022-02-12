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
  Typography,
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
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Image
              src="/images/logo.png"
              alt="logo"
              width="150px"
              height="50px"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant="text"
              component={Link}
              href="/"
              disableRipple
              sx={{ color: 'white' }}
            >
              Home
            </Button>
            <Button
              variant="text"
              component={Link}
              href="/"
              disableRipple
              sx={{ color: 'white' }}
            >
              List
            </Button>
            <Button
              variant="text"
              component={Link}
              href="/signup"
              disableRipple
              sx={{ color: 'white' }}
            >
              SignUp
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sign In">
              {isLoggedIn ? (
                // <IconButton sx={{ p: 0 }}>
                //   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                // </IconButton>
                <Button
                  type="submit"
                  onClick={logoutHandler}
                  variant="text"
                  component={Link}
                  href="/"
                  disableRipple
                  sx={{ color: 'white' }}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="text"
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
