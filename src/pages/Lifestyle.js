import React from 'react';
import './Lifestyle.css';
import userProfile from '../data/users.json';
import assessment from '../data/assessment.json';
import { FaAppleAlt, FaDumbbell, FaBed, FaSmoking, FaHeartbeat, FaBrain, FaTint, FaRunning, FaClock, FaChartLine } from 'react-icons/fa';

const Lifestyle = () => {
  const profile = userProfile.profile_tags;
  const data = assessment.general_assessment;

  const getStatusClass = (status) => {
    return status === 'Good' ? 'status-good' : 'status-bad';
  };

  const renderProgressBar = (value, labels = ['Low', 'Medium', 'High']) => {
    const progressBarColor = value > 50 ? 'progress-green' : 'progress-red';
    return (
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className={`progress ${progressBarColor}`} style={{ width: `${value}%` }}></div>
        </div>
        <div className="progress-labels">
          {labels.map((label, index) => (
            <span key={index} className={`progress-label ${index === 2 ? 'right-label' : ''}`}>
              {label}
            </span>
          ))}
        </div>
      </div>
    );
  };

  const renderRating = (value) => {
    return <div className={`rating rating-${value}`}>{value}</div>;
  };

  return (
    <div className="lifestyle-data">
      <div className="section data-analytics">
        <FaChartLine className="data-analytics-icon" />
        <div className={`data-analytics-card ${getStatusClass(data.physical_health_life_style.diet.nutrition_balance)}`}>
          <h3><FaHeartbeat /> Physical Health</h3>
          <div className="data-item">
            <span><FaAppleAlt /> Diet</span>
            {renderProgressBar(data.physical_health_life_style.diet.nutrition_balance === 'Balanced' ? 60 : 40, ['Unbalanced', 'Balanced', 'Optimal'])}
          </div>
          <div className="data-item">
            <span><FaClock /> Meal Frequency</span>
            {renderProgressBar(data.physical_health_life_style.diet.meal_frequency * 20)}
          </div>
          <div className="data-item">
            <span><FaTint /> Hydration</span>
            {renderProgressBar(data.physical_health_life_style.diet.hydration === 'Adequate' ? 60 : 40)}
          </div>
          <div className="data-item">
            <span><FaRunning /> Exercise Frequency</span>
            {renderProgressBar(data.physical_health_life_style.exercise.frequency === '3 times a week' ? 60 : 40)}
          </div>
          <div className="data-item">
            <span><FaHeartbeat /> Exercise Intensity</span>
            {renderProgressBar(data.physical_health_life_style.exercise.intensity === 'Moderate' ? 60 : 40)}
          </div>
          <div className="data-item">
            <span><FaBed /> Sleep Quality</span>
            {renderProgressBar(data.physical_health_life_style.sleep.sleep_quality, ['Poor', 'Average', 'Good'])}
          </div>
          <div className="data-item">
            <span><FaClock /> Sleep Duration</span>
            {renderProgressBar(data.physical_health_life_style.sleep.sleep_duration === '7-8 hours' ? 60 : 40)}
          </div>
        </div>
        <div className={`data-analytics-card ${getStatusClass(data.mental_health_life_style.emotional_wellbeing.mood_stability)}`}>
          <h3><FaBrain /> Mental Health</h3>
          <div className="data-item">
            <span>Stress Management</span>
            {renderProgressBar(data.mental_health_life_style.stress_management.coping_mechanisms.length * 20)}
          </div>
          <div className="data-item">
            <span>Relaxation Techniques</span>
            {renderProgressBar(data.mental_health_life_style.stress_management.relaxation_techniques.length * 20)}
          </div>
          <div className="data-item">
            <span>Mood Stability</span>
            {renderProgressBar(data.mental_health_life_style.emotional_wellbeing.mood_stability === 'Stable' ? 60 : 40)}
          </div>
          <div className="data-item">
            <span>Anxiety Levels</span>
            {renderProgressBar(data.mental_health_life_style.emotional_wellbeing.anxiety_levels === 'Low' ? 60 : 40)}
          </div>
          <div className="data-item">
            <span>Depression Symptoms</span>
            {renderProgressBar(data.mental_health_life_style.emotional_wellbeing.depression_symptoms === 'None' ? 60 : 40)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lifestyle;
