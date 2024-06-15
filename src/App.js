import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat';
import Profile from './pages/Profile';
import Lifestyle from './pages/Lifestyle';
import Reminders from './pages/Reminders'; // Updated import
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Chat />} />
          <Route path="profile" element={<Profile />} />
          <Route path="lifestyle" element={<Lifestyle />} />
          <Route path="reminders" element={<Reminders />} /> {/* Updated route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
