import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

import { EDUCATION } from './resume.data';

import './resume-page.styles.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduIndex: 0,
    }
  }

  render() {
    return (
      <div className="resume">
        <div className="education">
          <h2>Education</h2>
          <div className="education-item" onClick={() => { this.setState({eduIndex: this.state.eduIndex + 1}) }}>
            <b><TextTransition text={EDUCATION[this.state.eduIndex % EDUCATION.length].type} springConfig={ presets.gentle } inline /></b>
            <i><TextTransition text={EDUCATION[this.state.eduIndex % EDUCATION.length].school} springConfig={ presets.gentle } inline /></i>
            <i><TextTransition text={EDUCATION[this.state.eduIndex % EDUCATION.length].dates} springConfig={ presets.gentle } inline /></i>
          </div>
        </div>
        <div className="professional-experience">
          <h2>Professional Experience</h2>
          <div className="professional-experience-item">
            <b>Programming internship</b>
            <i>CREO inc / Montréal, QC / 2017 (Summer)</i>
            <ul>
              <li>Develop software capable of emulating electrical circuitry</li>
              <li>Program in Unity with the C# language</li>
              <li>Integrate and debug external software</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
