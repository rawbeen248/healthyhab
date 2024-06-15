import React, { useState, useEffect } from 'react';
import './Profile.css';
import userProfile from '../data/userProfile.json';
import persona from '../data/persona.png';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate fetching data from a JSON file
    setProfile(userProfile);
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <div className="profile-picture">
          <img src={persona} alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>{profile.name}</h2>
          <div className="profile-info">
            <div className="info-card">
              <p><strong>Age:</strong> {profile.age}</p>
            </div>
            <div className="info-card">
              <p><strong>Gender:</strong> {profile.gender}</p>
            </div>
            <div className="info-card">
              <p><strong>Email:</strong> {profile.email}</p>
            </div>
            <div className="info-card">
              <p><strong>Height:</strong> {profile.height}</p>
            </div>
            <div className="info-card">
              <p><strong>Weight:</strong> {profile.weight}</p>
            </div>
            <div className="info-card">
              <p><strong>BMI:</strong> {profile.bmi}</p>
            </div>
            <div className="info-card">
              <p><strong>Blood Type:</strong> {profile.blood_type}</p>
            </div>
            <div className="info-card">
              <p><strong>Marital Status:</strong> {profile.marital_status}</p>
            </div>
            <div className="info-card">
              <p><strong>Activity Level:</strong> {profile.activityLevel}</p>
            </div>
            <div className="info-card">
              <p><strong>Goal:</strong> {profile.goal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
