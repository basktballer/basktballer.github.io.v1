import React, {Component} from "react";
import SimpleSlider from './react-slick carousel/carousel';

export default class Card extends Component {
  
  render () {

    let {screenshots, repocontent, altName} = this.props

    
    if (screenshots !== undefined && repocontent !== undefined) {
      console.log("THese are the repocontent", repocontent);      
      return(
        <div className="card-frame">
          <div className="desc-frame">
            <h4 class="project-headers">Currently Viewing:</h4>
            <p class="project-text">{altName}</p>
            <h4 class="project-headers">Project Description:</h4>
            <p class="project-text">{repocontent.data.description}</p>
            <a className="github-button" href={repocontent.data.html_url} target="_blank" >
              <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" width="80px" height="80px" alt="View Project Repo" />
            </a>
          </div>
          <div className="sliderContainer">
            <SimpleSlider screenshots={screenshots.urls}></SimpleSlider>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}