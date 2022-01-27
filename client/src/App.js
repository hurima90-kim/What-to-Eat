import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import Auth from './hoc/auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Auth(WelcomePage, null)} />
        <Route path="/login" element={Auth(LoginPage, false)} />
        <Route path="/register" element={Auth(RegisterPage, false)} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
