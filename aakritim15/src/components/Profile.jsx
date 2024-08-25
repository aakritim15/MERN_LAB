import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

const Profile = () => {
  const [profileData, setProfileData] = useState({ username: '', age: '', email: '' });
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) setProfileData(savedProfile);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfileData(profileData);
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    console.log('Profile Updated: ', profileData);
    setUpdatedProfile(profileData);
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Fill Your Details Below!</h1>
        <div className="Form">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={profileData.username}
            onChange={handleChange}
            required
          />
          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={profileData.age}
            onChange={handleChange}
            required
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="buttons">
          <button className="button" type="submit">SUBMIT</button>
        </div>
      </form>
      {updatedProfile && <p>Profile Updated Successfully!</p>}
      <div className="user-details">
        <h1>Your Profile:</h1>
        <div className="Form">
          <p><strong>Name:</strong> {profileData.username}</p>
          <p><strong>Age:</strong> {profileData.age}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => localStorage.clear()}>Clear Local Storage</button>
        <button className="button" onClick={() => window.location.reload()}>Refresh Page</button>
      </div>
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
