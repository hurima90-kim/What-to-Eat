import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../_actions/user_action';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (SpecificComponent, option, adminRoute = null) {
  // option = null(everyone), true(islogged), false()
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        if (!response.payload.isAuth) {
          if (option) {
            navigate('/login');
          }
        } else {
          if (adminRoute && !response.payload.isAdmin) {
            navigate('/');
          } else {
            navigate('/');
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return <AuthenticationCheck />;
}
