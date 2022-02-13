import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@mui/material';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysItem = ({ weekday, temperature, imgUrl }) => (
  <ListItem sx={{ flexDirection: 'column' }}>
    <img width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="" />
    <Typography variant="body2" sx={{ marginBottom: '4px', marginTop: '8px' }}>
      {weekday}
    </Typography>
    <Typography variant="body2">{temperature}&deg;</Typography>
  </ListItem>
);

UpcomingDaysItem.propTypes = {
  weekday: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UpcomingDaysItem;
