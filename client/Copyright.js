import { Link, Typography } from '@mui/material';
import React from 'react';

export default function Copyright(props) {
  return (
    <Typography varint="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link href="/" color="inherit">
        WhatToEat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
