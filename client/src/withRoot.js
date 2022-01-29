import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme/theme';

export default function withRoot(Component) {
  function WithRoot(props) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }
  return WithRoot;
}
