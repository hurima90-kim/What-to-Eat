import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
// import Link from 'next/link';
import Link from '../components/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  Avatar,
  Box,
  Container,
} from '@mui/material';
import Copyright from '../components/Copyright';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers';

function SignInPage() {
  const dispatch = useDispatch();
  const [Email, onEmailHandler] = useInput('');
  const [Password, onPasswordHandler] = useInput('');

  const onSubmitHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(loginAction({ Email, Password }));
      console.log(Email, Password);
    },
    [Email, Password]
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          // onFinish={onSubmitHandler}
          onSubmit={onSubmitHandler}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            label="Email Address"
            name="Email"
            required
            fullWidth
            autoComplete="email"
            autoFocus
            margin="normal"
            onChange={onEmailHandler}
          />
          <TextField
            label="Password"
            name="Password"
            type="password"
            required
            fullWidth
            autoComplete="cureent-password"
            margin="normal"
            onChange={onPasswordHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Button
                variant="text"
                component={Link}
                href="/"
                disableRipple
                color="secondary"
              >
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                component={Link}
                href="/signup"
                disableRipple
                color="secondary"
              >
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

SignInPage.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default SignInPage;
