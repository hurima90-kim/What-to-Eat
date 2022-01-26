import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/hello').then((response) => console.log(response));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        navigate('/login');
      } else {
        alert('로그아웃하는데 실패했습니다.');
      }
    });
  };

  return (
    <React.Fragment>
      메인 페이지
      <button onClick={onClickHandler}>Logout</button>
    </React.Fragment>
  );
}
