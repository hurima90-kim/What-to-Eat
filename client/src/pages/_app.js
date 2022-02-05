import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

function App({ Component }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <title>WhatToEat</title>
      </Head>
      <Component />
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
