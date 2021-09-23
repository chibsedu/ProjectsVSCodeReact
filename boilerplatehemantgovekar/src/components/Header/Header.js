import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header-wrapper">
      <div className="logo">
        <NavLink to="/" className="brand">
          Hemant's Website
        </NavLink>
      </div>
      <div className="nav-wrapper">
        <div className="navigation">
          <NavLink to="/about" activeClassName="activeClass">
            About
          </NavLink>
          <NavLink to="/contacts" activeClassName="activeClass">
            Contacts
          </NavLink>
          <NavLink to="/users" activeClassName="activeClass">
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;