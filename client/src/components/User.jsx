import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from './Logout';

function User() {
  const [userFullName, setUserFullName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserFullName() {
      const userId = getUserId();
      if (userId) {
        try {
          const response = await fetch(`/api/getUserFullName/${userId}`, {
            method: 'GET',
          });

          if (response.ok) {
            const data = await response.json();
            setUserFullName(data.fullName);
          } else {
            // Handle error, e.g., user is not authenticated
            navigate('/login');
          }
        } catch (error) {
          console.error('Error fetching user full name:', error);
        }
      }
    }

    getUserFullName();
  }, [navigate]);

  // Implement this function to get the user's ID
  function getUserId() {
    const userId = localStorage.getItem('userId');
    return userId;
  }

  return (
    <>
      {userFullName ? (
        <div>
          <Link to="/account">{userFullName}</Link>
          <Link to="/logout">Logout</Link>
        </div>
      ) : (
        <h2>User</h2>
      )}
    </>
  );
}

export default User;
