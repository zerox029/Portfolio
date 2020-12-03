import React from 'react'
import { Link } from 'react-router-dom';

import './menu.styles.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <Link to="/">Home</Link>
      </div>
      <div className="menu-item">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="menu-item">
        <Link to="/resume">Resume</Link>
      </div>
      <div className="menu-item">
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Menu;