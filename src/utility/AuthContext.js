import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [otpMap, setOtpMap] = useState({}); // Simulated OTP storage

  const sendOtp = (email) => {
    const otp = '123456'; // Static OTP for simplicity
    setOtpMap(prev => ({ ...prev, [email]: otp }));
    console.log(`OTP sent to ${email}: ${otp}`); // Replace with actual email sending logic if needed
  };

  const verifyOtp = (email, otp) => {
    return otpMap[email] === otp;
  };

  const signup = (email) => {
    setUsers([...users, { email }]);
    sendOtp(email); // Simulate sending OTP
  };

  const login = (email, otp) => {
    const userExists = users.some(user => user.email === email);
    if (userExists && verifyOtp(email, otp)) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
