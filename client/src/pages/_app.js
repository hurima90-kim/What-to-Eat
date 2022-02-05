import React from 'react';
import PropTypes from 'prop-types';

function App({ Component }) {
  return <Component />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
