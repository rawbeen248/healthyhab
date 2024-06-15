import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaComments, FaUser, FaHeart, FaBell } from 'react-icons/fa'; // Updated icon for Reminders
import './Layout.css';

const Layout = () => {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="content">
          <Outlet />
        </div>
        <nav className="bottom-nav">
          <Link to="/"><FaComments /></Link>
          <Link to="/profile"><FaUser /></Link>
          <Link to="/lifestyle"><FaHeart /></Link>
          <Link to="/reminders"><FaBell /></Link> {/* Updated link */}
        </nav>
      </div>
    </div>
  );
};

export default Layout;
