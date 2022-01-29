import * as React from 'react';
import { AppBar, Box, Toolbar, Link, Chip } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export default function Navbar() {
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
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
