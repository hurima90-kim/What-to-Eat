import * as React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Box, Toolbar, Link, Chip, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.payload.loginSuccess) {
        navigate('/login');
      } else {
        alert('로그아웃하는데 실패했습니다.');
      }
    });
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'WhatToEat'}
          </Link>
          {!isLoggedIn ? (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/login"
                sx={rightLink}
              >
                {'Sign In'}
              </Link>
              <Chip
                label="Sign Up"
                component="a"
                href="/register"
                clickable
                sx={{ ...rightLink, color: 'secondary.main' }}
              />
            </Box>
          ) : (
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="/login"
                sx={rightLink}
                onClick={onClickHandler}
              >
                {'Logout'}
              </Link>
              <Avatar
                sx={{
                  width: 24,
                  height: 24,
                  marginLeft: 2,
                }}
              >
                <AccountCircleIcon />
              </Avatar>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
