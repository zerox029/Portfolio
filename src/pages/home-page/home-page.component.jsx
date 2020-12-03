import React from 'react'

import IntroText from '../../components/intro-text/intro-text.component';
import ProfilePicture from '../../components/profile-picture/profile-picture.component';
import SocialMedias from '../../components/social-medias/social-medias.component';

import './home-page.styles.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <IntroText />
      <ProfilePicture />
      <SocialMedias />
    </div>
  )
}

export default HomePage;