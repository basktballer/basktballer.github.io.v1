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
            <h4>Currently Viewing</h4>
            <p>{altName}</p>
            <h4>Project Description</h4>
            <p>{repocontent.data.description}</p>
          </div>
          <a className="menu-expanded-item" href={repocontent.data.html_url} target="_blank" >View Project Repo</a>
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