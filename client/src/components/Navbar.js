import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Tooltip,
  Toolbar,
  Typography,
} from '@mui/material';
import Image from 'next/image';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

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
              src="/images/logo_transparent.png"
              alt="logo"
              width="150px"
              height="100%"
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="/list">
                <a>List</a>
              </Link>
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              <Link href="/signup">
                <a>SignUp</a>
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Sign In">
              {isLoggedIn ? (
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              ) : (
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Link href="/signin">
                    <a>SignIn</a>
                  </Link>
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
