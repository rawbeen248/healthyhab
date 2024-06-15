import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaComments, FaUser, FaHeart, FaBell } from 'react-icons/fa';
import './Layout.css';

const Layout = () => {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        <div className="content">
          <Outlet />
        </div>
        <nav className="bottom-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}><FaComments /></NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}><FaUser /></NavLink>
          <NavLink to="/lifestyle" className={({ isActive }) => (isActive ? 'active' : '')}><FaHeart /></NavLink>
          <NavLink to="/reminders" className={({ isActive }) => (isActive ? 'active' : '')}><FaBell /></NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
