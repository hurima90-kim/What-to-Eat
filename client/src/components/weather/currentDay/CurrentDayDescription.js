import React from 'react';
import PropTypes from 'prop-types';
import CurrentDayDescriptionItem from './CurrentDayDescriptionItem';
import { List } from '@mui/material';

const CurrentDayDescription = ({ forecast }) => (
  <List sx={{ display: 'flex', flexDirection: 'column', padding: '20px 40px' }}>
    {forecast.map((item) => (
      <CurrentDayDescriptionItem {...item} key={item.name} />
    ))}
  </List>
);

CurrentDayDescription.propTypes = {
  forecast: PropTypes.array,
};

export default CurrentDayDescription;
