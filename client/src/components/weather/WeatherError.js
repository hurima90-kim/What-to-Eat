import React from 'react';
import PropTypes from 'prop-types';

function WeatherError({ message }) {
  return <div>{message}</div>;
}

WeatherError.propTypes = {
  message: PropTypes.string,
};

WeatherError.defaultProps = {
  message: 'An error occurred',
};

export default WeatherError;
