import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import Auth from './hoc/auth';
import DashboardPage from './pages/DashboardPage';
import { ThemeProvider } from '@mui/material';
import rawTheme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={rawTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={Auth(WelcomePage, null)} />
          <Route path="/login" element={Auth(LoginPage, false)} />
          <Route path="/register" element={Auth(RegisterPage, false)} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
