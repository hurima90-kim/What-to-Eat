import { Button, Typography } from '@mui/material';
import React from 'react';

function Content() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '100px',
      }}
    >
      <Typography variant="h4" sx={{ mb: '100px' }}>
        What shall we eat today?
      </Typography>
      <Typography variant="h4" sx={{ mb: '60px' }}>
        {'" Food Name "'}
      </Typography>
      <Button
        variant="contained"
        sx={{ mb: '250px', width: '200px', height: '50px' }}
      >
        Start Random Draw
      </Button>
    </div>
  );
}

export default Content;
