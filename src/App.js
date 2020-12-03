import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import particlesOptions from './particles.json';

import HomePage from './pages/home-page/home-page.component';
import Projects from './pages/projects-page/projects-page.component';
import Resume from './pages/resume-page/resume-page.component';
import Contact from './pages/contact-page/contact-page.component';
import Menu from './components/menu/menu.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Particles options={particlesOptions}/>

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>

      <hr />
      
      <Menu />
    </div>
  );
}

export default App;
