import React, { useEffect } from 'react';
import axios from 'axios';

export default function WelcomePage() {
  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log(response));
  }, []);

  return <React.Fragment>메인 페이지</React.Fragment>;
}
