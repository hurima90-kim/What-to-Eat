import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography, useTheme } from '@mui/material';
import AppLayout from '../components/AppLayout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function index() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <AppLayout>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Tab menu"
          centered
        >
          <Tab label="Roulette" {...a11yProps(0)} />
          <Tab label="Restaurant List" {...a11yProps(1)} />
          <Tab label="Wirte Post" {...a11yProps(2)} />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item one
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </AppLayout>
  );
}

export default index;
