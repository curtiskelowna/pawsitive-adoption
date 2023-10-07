import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ login, isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
    // Remove user token and ID from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    console.log('Logout successful');
    login();
    // Redirect to the login page or any other desired page
    navigate('/');
  }, []);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
