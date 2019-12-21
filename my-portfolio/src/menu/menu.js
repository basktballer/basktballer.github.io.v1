import React from "react";

export default function Menu() {
  return(
    <div className="menu-bar">
      {/* <div className="name-div container">
      </div> */}
      <div className="menu-expanded">
        <a className="menu-expanded-item" href="#about" >Home</a>
        <a className="menu-expanded-item" href="#skills">Skills</a>
        <h1 id="name">Eden Yeung</h1>      
        <a className="menu-expanded-item" href="#projects">Projects</a>
        <a className="menu-expanded-item" href="#viewer">Viewer</a>
        {/* <a className="menu-expanded-item" href="https://resume.creddle.io/resume/d7158k02e3m" target="_blank">Resume</a> */}
      </div>
    </div>
  )
}