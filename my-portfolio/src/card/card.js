import React from "react";
import SimpleSlider from './react-slick carousel/carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward, faFastForward } from '@fortawesome/free-solid-svg-icons'
export default function Card( {altName, screenshots, repocontent, incrementProject, decrementProject} ) {
    
    if (screenshots !== undefined && repocontent !== undefined) {
      return(
        <div className="card-frame">
          <div className="desc-frame">
            <p className="project-headers">{altName}</p>
            <p className="help-text">(Swipe images, arrows change projects)</p>
            {/* <p className="project-text">{repocontent.description}</p> */}
          </div>
          <div className="sliderContainer">
            <SimpleSlider screenshots={screenshots}></SimpleSlider>
          </div>
          <div className="project-nav">
              <a className="nav-button" onClick={decrementProject} target="_blank" >
                <FontAwesomeIcon icon={faFastBackward} color='white' size='3x' title="Previous Project"/>                 
              </a>
              <a className="github-button" href={repocontent.html_url} target="_blank" >
                <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" width="40px" height="40px" alt="View Project Repo" />
              </a>
              <a className="nav-button" onClick={incrementProject} target="_blank" >
              <FontAwesomeIcon icon={faFastForward} color='white' size='3x' title="Next Project"/>                 
              </a>
            </div>
        </div>
      )
    } else {
      return(<div></div>)
    }

}