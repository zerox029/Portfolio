import React from 'react'

import './menu.styles.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-item">
        <p>Home page</p>
      </div>
      <div className="menu-item">
        <p>Projects</p>
      </div>
      <div className="menu-item">
        <p>Resume</p>
      </div>
      <div className="menu-item">
        <p>Contact me</p>
      </div>
    </div>
  )
}

export default Menu;