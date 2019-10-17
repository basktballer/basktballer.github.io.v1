import React, {Component} from "react";

export default class Menu extends Component {
  render () {
    return(
      <div className="menu-expanded">
        <a className="menu-expanded-item" href="/" >Home</a>
        <a className="menu-expanded-item" href="#about">About</a>
        <a className="menu-expanded-item" href="#skills">Skills</a>
        <a className="menu-expanded-item" href="#projects">Projects</a>
        <a className="menu-expanded-item" href="#viewer">Viewer</a>
        <a className="menu-expanded-item" href="https://resume.creddle.io/resume/d7158k02e3m" target="_blank">Resume</a>
      </div>
    )
  }
}