import React, { useState, useEffect } from 'react';
import './Reminders.css';
import { FaPlus, FaBell, FaCalendarAlt, FaTrash } from 'react-icons/fa';
import reminderData from '../data/reminders.json';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    setReminders(reminderData.reminders);
  }, []);

  const handleAddReminder = () => {
    if (newReminder && category) {
      const newRem = { text: newReminder, category, date: new Date().toLocaleString() };
      setReminders([...reminders, newRem]);
      setNewReminder('');
      setCategory('');
    }
  };

  const handleDeleteReminder = (index) => {
    setReminders(reminders.filter((_, i) => i !== index));
  };

  return (
    <div className="reminders">
      <div className="reminder-form">
        <input
          type="text"
          placeholder="New reminder..."
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category</option>
          <option value="Health">Health</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <button onClick={handleAddReminder}><FaPlus /></button>
      </div>

      <div className="upcoming-reminders">
        <h2>Upcoming Reminders</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index} className={`reminder-item ${reminder.category.toLowerCase()}`}>
              <div className="reminder-text">{reminder.text}</div>
              <div className="reminder-category">{reminder.category}</div>
              <div className="reminder-date">{reminder.date}</div>
              <button onClick={() => handleDeleteReminder(index)}><FaTrash /></button>
            </li>
          ))}
        </ul>
      </div>

      <div className="reminder-calendar">
        <div className="calendar-placeholder">
          <p>📅</p>
          <p>Calendar component coming soon...</p>
        </div>
      </div>

      <div className="reminder-notifications">
        <div className="notifications-placeholder">
          <p>🔔</p>
          <p>Customize your notification preferences to stay updated with your reminders.</p>
          <button>Set Preferences</button>
        </div>
      </div>

      <div className="reminder-history">
        <div className="history-placeholder">
          <p>📜</p>
          <p>Review and manage your past reminders.</p>
          <button>View History</button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
