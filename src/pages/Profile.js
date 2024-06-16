import React, { useState, useEffect } from 'react';
import './Profile.css';
import userProfile from '../data/userProfile.json';
import persona from '../data/persona.png';
import { FaBirthdayCake, FaVenusMars, FaEnvelope, FaRulerVertical, FaWeight, FaCalculator, FaTint, FaHeart, FaRunning, FaBullseye } from 'react-icons/fa';

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
        <div className="profile-picture-wrapper">
          <div className="semi-circle"></div>
          <div className="profile-picture">
            <img src={persona} alt="Profile" />
          </div>
        </div>
        <div className="profile-details">
          <h2>{profile.name}</h2>
          <div className="profile-info">
            <div className="info-card">
              <p><FaBirthdayCake /> {profile.age}</p>
            </div>
            <div className="info-card">
              <p><FaVenusMars /> {profile.gender}</p>
            </div>
            <div className="info-card">
              <p><FaEnvelope /> {profile.email}</p>
            </div>
            <div className="info-card">
              <p><FaRulerVertical /> {profile.height}</p>
            </div>
            <div className="info-card">
              <p><FaWeight /> {profile.weight}</p>
            </div>
            <div className="info-card">
              <p><FaCalculator /> {profile.bmi}</p>
            </div>
            <div className="info-card">
              <p><FaTint /> {profile.blood_type}</p>
            </div>
            <div className="info-card">
              <p><FaHeart /> {profile.marital_status}</p>
            </div>
            <div className="info-card">
              <p><FaRunning /> {profile.activityLevel}</p>
            </div>
            <div className="info-card">
              <p><FaBullseye /> {profile.goal}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
