import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function WeatherForm({ submitSearch }) {
  const [location, setLocation] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === '') return;
    submitSearch(location);
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={onSubmit}
    >
      <TextField
        label="Search for location"
        variant="standard"
        sx={{ marginBottom: '20px' }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button type="submit" variant="contained" onClick={onSubmit}>
        SEARCH
      </Button>
    </Box>
  );
}

WeatherForm.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default WeatherForm;
