import React from 'react';
import Particles from "react-tsparticles";
import particlesOptions from "./particles.json";

import HomePage from './pages/home-page/home-page.component';

import './App.css';

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <HomePage />
        </div>
    );
}

export default App;
