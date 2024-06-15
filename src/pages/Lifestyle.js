import React from 'react';
import './Lifestyle.css';
import userProfile from '../data/users.json';
import assessment from '../data/assessment.json';
import { FaAppleAlt, FaDumbbell, FaBed, FaSmoking, FaHeartbeat, FaBrain, FaTint, FaRunning, FaClock } from 'react-icons/fa';

const Lifestyle = () => {
  const profile = userProfile.profile_tags;
  const data = assessment.general_assessment;

  const getStatusClass = (status) => {
    return status === 'Good' ? 'status-good' : 'status-bad';
  };

  const renderProgressBar = (value) => {
    return (
      <div className="progress-bar">
        <div className="progress" style={{ width: `${value}%` }}></div>
      </div>
    );
  };

  const renderRating = (value) => {
    return <div className={`rating rating-${value}`}>{value}</div>;
  };

  return (
    <div className="lifestyle-data">
      <div className="section">
        <div className={`lifestyle-card ${getStatusClass(profile['lifestyle.diet.preferences'])}`}>
          <h3><FaAppleAlt /> Diet</h3>
          <p><span>Preferences:</span> {profile['lifestyle.diet.preferences']}</p>
          <p><span>Restrictions:</span> {profile['lifestyle.diet.restrictions']}</p>
        </div>
        <div className={`lifestyle-card ${getStatusClass(profile['lifestyle.exercise.frequency'])}`}>
          <h3><FaDumbbell /> Exercise</h3>
          <p><span>Frequency:</span> {profile['lifestyle.exercise.frequency']}</p>
          <p><span>Activities:</span> {profile['lifestyle.exercise.activities']}</p>
        </div>
        <div className={`lifestyle-card ${getStatusClass(profile['lifestyle.sleep.sleep_quality'])}`}>
          <h3><FaBed /> Sleep</h3>
          <p><span>Average Sleep Hours:</span> {profile['lifestyle.sleep.average_sleep_hours']}</p>
          <p><span>Sleep Quality:</span> {profile['lifestyle.sleep.sleep_quality']}</p>
        </div>
        <div className={`lifestyle-card ${getStatusClass(profile['lifestyle.habits.smoking'])}`}>
          <h3><FaSmoking /> Habits</h3>
          <p><span>Smoking:</span> {profile['lifestyle.habits.smoking']}</p>
          <p><span>Alcohol:</span> {profile['lifestyle.habits.alcohol']}</p>
          <p><span>Caffeine:</span> {profile['lifestyle.habits.caffeine']}</p>
        </div>
      </div>

      <div className="section">
        <h2>Data Analytics</h2>
        <div className={`data-analytics-card ${getStatusClass(data.physical_health_life_style.diet.nutrition_balance)}`}>
          <h3><FaHeartbeat /> Physical Health</h3>
          <div className="data-item">
            <FaAppleAlt /> <span>Diet:</span> {renderRating(data.physical_health_life_style.diet.nutrition_balance)}
          </div>
          <div className="data-item">
            <FaClock /> <span>Meal Frequency:</span> <div className="progress-container">{renderProgressBar(data.physical_health_life_style.diet.meal_frequency)}</div>
          </div>
          <div className="data-item">
            <FaTint /> <span>Hydration:</span> <div className="progress-container">{renderProgressBar(data.physical_health_life_style.diet.hydration)}</div>
          </div>
          <div className="data-item">
            <FaRunning /> <span>Exercise Frequency:</span> <div className="progress-container">{renderProgressBar(data.physical_health_life_style.exercise.frequency)}</div>
          </div>
          <div className="data-item">
            <FaHeartbeat /> <span>Exercise Intensity:</span> <div className="progress-container">{renderProgressBar(data.physical_health_life_style.exercise.intensity)}</div>
          </div>
          <div className="data-item">
            <FaBed /> <span>Sleep Quality:</span> {renderRating(data.physical_health_life_style.sleep.sleep_quality)}
          </div>
          <div className="data-item">
            <FaClock /> <span>Sleep Duration:</span> <div className="progress-container">{renderProgressBar(data.physical_health_life_style.sleep.sleep_duration)}</div>
          </div>
        </div>
        <div className={`data-analytics-card ${getStatusClass(data.mental_health_life_style.emotional_wellbeing.mood_stability)}`}>
          <h3><FaBrain /> Mental Health</h3>
          <div className="data-item">
            <FaBrain /> <span>Stress Management:</span> {renderRating(data.mental_health_life_style.stress_management.coping_mechanisms.length)}
          </div>
          <div className="data-item">
            <FaBrain /> <span>Relaxation Techniques:</span> {renderRating(data.mental_health_life_style.stress_management.relaxation_techniques.length)}
          </div>
          <div className="data-item">
            <FaBrain /> <span>Mood Stability:</span> {renderRating(data.mental_health_life_style.emotional_wellbeing.mood_stability)}
          </div>
          <div className="data-item">
            <FaBrain /> <span>Anxiety Levels:</span> {renderRating(data.mental_health_life_style.emotional_wellbeing.anxiety_levels)}
          </div>
          <div className="data-item">
            <FaBrain /> <span>Depression Symptoms:</span> {renderRating(data.mental_health_life_style.emotional_wellbeing.depression_symptoms)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
