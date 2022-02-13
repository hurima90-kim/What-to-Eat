import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Typography } from '@mui/material';

const CurrentDayDescriptionItem = ({ name, value, unit }) => (
  <ListItem sx={{ justifyContent: 'space-between' }}>
    <Typography variant="body1">{name}</Typography>
    <Typography variant="body2">
      {value} {unit}
    </Typography>
  </ListItem>
);

CurrentDayDescriptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

export default CurrentDayDescriptionItem;
