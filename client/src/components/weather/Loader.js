import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Loader(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="caption" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

Loader.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LoaderStatic() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Loader value={progress} />;
}
