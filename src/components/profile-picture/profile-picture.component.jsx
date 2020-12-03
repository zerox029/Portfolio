import React from 'react'
import logo from "../../assets/profile_picture.jpg";

import "./profile-picture.styles.css";

export default function ProfilePicture() {
  return (
    <img src={logo} alt="me" className="profile-picture"/>
  )
}
