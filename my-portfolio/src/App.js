import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Eden's Personal Portfolio Site</h2>
        <div className="container">
          <h4>About</h4>
          <p className="content">
            Full-stack developer groomed at Lighthouse Labs with working experience in industrial robot development and supply chain. 
            As a developer with an engineering mindset, I am passionate about building web applications for solving modern problems. 
            With my diverse background, I am an eager and quick learner, not afraid of challenges and willing to take ownership. 
            Currently working on refactoring final Lighthouse Labs project to use React hooks and / or Redux to make code more efficient and logical. 
          </p>
        </div>
        <div className="container">
          <h4>Web Development Projects</h4>
          <ul className="content">
            <li><a href="https://github.com/basktballer/TheWallMidterm">Resource Sharing Wall</a></li>
            <li><a href="https://github.com/basktballer/lhl-final-project">Squabble Budgeting App</a></li>
            <li><a href="https://github.com/basktballer/student-assessments">Student Assessments React Front End</a></li>
            <li><a href="https://github.com/basktballer/tweeter">Tweeter</a></li>
            <li><a href="https://github.com/basktballer/tinyapp">Tiny App</a></li>
            <li><a href="https://github.com/basktballer/Chatty">Chatty</a></li>
          </ul>
        </div>

        <div>
          <a href="https://resume.creddle.io/resume/d7158k02e3m">Please click here for link to online resume.</a>
        </div>
      </div>
    );
  }
}

export default App;
