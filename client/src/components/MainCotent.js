import React from 'react';
import { Typography, Button } from '@mui/material';
import MainContentLayout from './MainContentLayout';

const backgroundImage =
  'https://cdn.pixabay.com/photo/2014/06/11/17/00/food-366875_1280.jpg';

function MainCotent() {
  return (
    <MainContentLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fcd9',
        backgroundPostion: 'center',
      }}
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Lunch Time
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        The discovery of a new dish does more for human happiness than the
        discovery of a new star.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/register"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </MainContentLayout>
  );
}

export default MainCotent;
