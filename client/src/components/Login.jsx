import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from "jwt-decode";
import "../styles/Login.scss"

function Login({ login, isLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  let navigate = useNavigate();

  const handleLogin = async () => {
    if (isLoggedIn) {
      navigate('/');
      return;
    }
    setError('');
    setIsLoggingIn(true);

    try {
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      const response = await axios.post('http://localhost:8080/login', { email, password: password });

      // Handle successful login and token response
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      const userData = jwtDecode(response.data.token);
      localStorage.setItem('userData', JSON.stringify(userData));
      login();
      setIsLoggingIn(false);
      // Navigate to the home page
      navigate('/');
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error.message);
      setError(error.message); // Set the error message to display to the user
    }
  };

  return (
    <div className="login-body-container">
      <h2>Login</h2>
      <form className="login-container">
        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="btn-login" onClick={handleLogin} disabled={isLoggingIn}>
          {isLoggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}

export default Login;