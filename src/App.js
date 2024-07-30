// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignupPage from './SignUpPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import ProtectedPage from './ProtectedPage';
import { AuthProvider } from './utility/AuthContext';
import './style/styles.css'; // Ensure you include the CSS file for styling

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/" element={<Navigate to="/protected" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
