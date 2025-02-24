import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import "../styles/SignUp.scss";


function Signup({ login, isLoggedIn }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  let navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      navigate('/');
      return;
    }
    setError('');
    setIsSigningUp(true);

    try {
      if (!fullName || !email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      // Store the 'password' value in a separate variable
      const userPassword = password;

      const response = await axios.post('http://localhost:8080/signup', {
        fullName: fullName,
        email,
        password: userPassword,
      });
      // Handle successful login and token response
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);
      const userData = jwtDecode(response.data.token);
      localStorage.setItem('userData', JSON.stringify(userData));
      login();
      setIsSigningUp(false);
      // Navigate to the home page
      navigate('/');

    } catch (error) {
      // Handle registration error
      console.error('Registration failed:', error.message);
      setError(error.message);
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className="signup-body-container background-image">
      <h1>Signup</h1>
      <form >
        <div className="signup-container">
          <label>Full Name: </label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
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
          <label>Confirm Password: </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="btn-signup">
          <button type="submit" onClick={(event) => handleSignup(event)} disabled={isSigningUp}>
            {isSigningUp ? 'Signing up...' : 'Sign Up'}
          </button>
        </div>
      </form>

    </div>
  );
}

export default Signup;
