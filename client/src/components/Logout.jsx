import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove user token and ID from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    // Redirect to the login page or any other desired page
    navigate('/');
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
}

export default Logout;
