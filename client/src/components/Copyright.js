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
