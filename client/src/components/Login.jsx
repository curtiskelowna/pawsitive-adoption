import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import "../styles/Login.scss";

function Login({ login, isLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setIsLoggingIn(true);

    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      const response = await axios.post('http://localhost:8080/login', { email, password: password });
      console.log('response', response.data.token);
      localStorage.setItem('token', response.data.token);
      const userData = jwtDecode(response.data.token);
      localStorage.setItem('userData', JSON.stringify(userData));
      login();
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
      setError(error.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="login-body-container">
      <h1>Login</h1>
      <form>
        <div className="login-container">
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
          {error && <p className="error-message">{error}</p>}
        <div className="btn-login">
        <button type="submit" onClick={(event) => handleLogin(event)} disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Log In'}
        </button>
        </div>
      </form>
    </div>
  );
}

export default Login;