import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import CurrentDay from './currentDay/CurrentDay';
import CurrentDayDescription from './currentDay/CurrentDayDescription';
import UpcomingDays from './upcomingDays/UpcomingDays';

function Forecast({ forecast }) {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <div>
          <CurrentDay {...forecast.currentDay} />
        </div>
      </Grid>
      <Grid item xs={12}>
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDays days={forecast.upcomingDays} />
      </Grid>
    </Grid>
  );
}

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array,
    upcomingDays: PropTypes.array,
  }),
};

export default Forecast;
