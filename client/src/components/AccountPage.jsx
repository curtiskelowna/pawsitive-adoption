import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/AccountPage.scss";

function AccountPage() {
  const [fullname, setFullName] = useState('');
  const [animalPreference, setAnimalPreference] = useState('');
  const [adoptionStatus, setAdoptionStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch user data and populate the form when the component mounts
  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('userData'))['id'];
    axios.get(`http://localhost:8080/api/user/${userId}`)
      .then((response) => {
        const userData = response.data;
        setFullName(userData.fullname);
        setAnimalPreference(userData.animalpreference);
        setAdoptionStatus(userData.adoptionstatus);
        setPhoneNumber(userData.phonenumber);
        setPostalCode(userData.postalcode);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const updateUserData = () => {
    setIsLoading(true);
    const userId = JSON.parse(localStorage.getItem('userData'))['id'];

    axios.post(`http://localhost:8080/api/user/${userId}`, {
      fullname,
      animalPreference,
      adoptionStatus,
      phoneNumber,
      postalCode
    })
      .then(() => {
        setIsLoading(false);
        setSuccessMessage('Profile Updated!');
        setErrorMessage('');
        // Handle success
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage('Error updating user data');
        setSuccessMessage('');
        console.error('Error updating user data:', error);
      });
  };

  const handleUpdate = () => {
    updateUserData();
  };

  return (
    <div className="account-page">
      <h2>My Account</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="animalPreference">Animal Preference</label>
          <input
            type="text"
            id="animalPreference"
            value={animalPreference}
            onChange={(e) => setAnimalPreference(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adoptionStatus">Adoption Status</label>
          <select
            id="adoptionStatus"
            value={adoptionStatus}
            onChange={(e) => setAdoptionStatus(e.target.value)}
          >
            <option value="interested">Interested</option>
            <option value="notLooking">Not Looking Right Now</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Postal Code/Zip Code</label>
          <input
            type="text"
            id="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={handleUpdate}
          disabled={isLoading}
        >
          Update
        </button>
      </form>
    </div>
  );

}

export default AccountPage;
