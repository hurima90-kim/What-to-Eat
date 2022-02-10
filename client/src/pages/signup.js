import React, { useCallback, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '../components/Link';
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

export default function RegisterPage() {
  const [Email, onEmailHandler] = useInput('');
  const [Name, onNameHandler] = useInput('');
  const [Password, onPasswordHandler] = useInput('');
  // const [Email, setEmail] = useState('');
  // const [Name, setName] = useState('');
  // const [Password, setPassword] = useState('');
  const [PasswordCheck, setPasswordCheck] = useState('');
  const [PasswordError, setPasswordError] = useState(false);

  // const onEmailHandler = useCallback((event) => {
  //   setEmail(event.currentTarget.value);
  // }, []);

  // const onNameHandler = useCallback((event) => {
  //   setName(event.currentTarget.value);
  // }, []);

  // const onPasswordHandler = useCallback((event) => {
  //   setPassword(event.currentTarget.value);
  // }, []);

  const onPasswordCheckHandler = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== Password);
    },
    [Password]
  );

  const onSubmitHandler = useCallback(
    (event) => {
      event.preventDefault();
      console.log(Email, Name, Password, PasswordCheck);

      if (Password !== PasswordCheck) {
        return alert('비밀번호가 일치하지 않습니다.');
      }
    },
    [Email, Name, Password, PasswordCheck]
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
          Sign Up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={onSubmitHandler}
          sx={{ mt: 1 }}
        >
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="Name"
                required
                fullWidth
                autoFocus
                autoComplete="given-name"
                onChange={onNameHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="Email"
                required
                fullWidth
                autoComplete="email"
                onChange={onEmailHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="Password"
                type="password"
                required
                fullWidth
                autoComplete="new-password"
                onChange={onPasswordHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                name="Password"
                type="password"
                required
                fullWidth
                onChange={onPasswordCheckHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email"
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  variant="text"
                  component={Link}
                  href="/signin"
                  disableRipple
                  color="secondary"
                >
                  Already have an account? Sign In
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
