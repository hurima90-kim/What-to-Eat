import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Grid } from '@mui/material';

function AppLayout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          왼쪽메뉴
        </Grid>
        <Grid item xs={12} md={6}>
          {children}
        </Grid>
        <Grid item xs={12} md={3}>
          오른쪽메뉴
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
