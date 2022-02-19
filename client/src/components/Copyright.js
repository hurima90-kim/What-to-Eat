import { Link, Typography, Button, Container } from '@mui/material';
import React from 'react';

export default function Copyright(props) {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '80px',
        mt: 'auto',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: (theme) => theme.palette.primary.light,
      }}
    >
      <Typography
        varint="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <Button
          variant="text"
          component={Link}
          href="/"
          disableRipple
          color="inherit"
        >
          WhatToEat
        </Button>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
}
