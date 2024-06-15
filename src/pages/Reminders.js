import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Reminders.css';
import { FaPlus, FaBell, FaCalendarAlt, FaTrash, FaListUl } from 'react-icons/fa';
import reminderData from '../data/reminders.json';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date());

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

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      const reminderCategories = reminders
        .filter(reminder => new Date(reminder.date).toISOString().split('T')[0] === dateString)
        .map(reminder => reminder.category.toLowerCase());
      
      if (reminderCategories.length === 0) return null;

      const uniqueCategories = [...new Set(reminderCategories)];
      const colorMap = {
        health: 'green',
        work: 'blue',
        personal: 'purple',
      };

      return (
        <div className="tile-content">
          {uniqueCategories.map((category, index) => (
            <div 
              key={index} 
              className="tile-marker" 
              style={{ backgroundColor: colorMap[category] }}
            />
          ))}
        </div>
      );
    }
    return null;
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
        <h2><FaListUl className="header-icon" /> Upcoming Reminders</h2>
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
        <Calendar 
          value={date} 
          onChange={setDate} 
          tileContent={tileContent} 
        />
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
