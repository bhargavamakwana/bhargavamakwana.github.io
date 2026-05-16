import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-brand">Bhargav Makwana</NavLink>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          {/* <NavLink to="/blog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink> */}
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
