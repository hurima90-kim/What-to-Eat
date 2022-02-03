import { Chip, Paper, Typography } from '@mui/material';
import React from 'react';

function Write() {
  return (
    <Paper elevation={2} style={{ padding: 20, marginBottom: 10 }}>
      <Typography variant="h5" component="div" sx={{ mb: 2 }}>
        Writing on WhatToEat
      </Typography>
      <Typography variant="body2" sx={{ mb: 8 }}>
        The discovery of a new dish does more for human happiness than the
        discovery of a new star.
      </Typography>
      <Chip label="Start writing" />
    </Paper>
  );
}

export default Write;
