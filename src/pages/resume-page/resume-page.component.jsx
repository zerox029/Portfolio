import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

import { EDUCATION, WORK } from './resume.data';

import './resume-page.styles.css';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eduIndex: 0,
      proIndex: 0
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
          <div className="professional-experience-item" onClick={() => { this.setState({proIndex: this.state.proIndex + 1}) }}>
            <b><TextTransition text={WORK[this.state.proIndex % WORK.length].title} springConfig={ presets.gentle } inline /></b>
            <i><TextTransition text={WORK[this.state.proIndex % WORK.length].subtitle} springConfig={ presets.gentle } inline /></i>
            <ul>
              {
                WORK[this.state.proIndex % WORK.length].tasks.map(task => {
                  return <li><TextTransition text={task} springConfig={ presets.gentle } /></li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
