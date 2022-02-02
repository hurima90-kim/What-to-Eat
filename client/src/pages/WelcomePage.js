import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import withRoot from '../withRoot';
import MainCotent from '../components/MainCotent';

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log(response));
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <MainCotent />
    </React.Fragment>
  );
}

export default withRoot(WelcomePage);
