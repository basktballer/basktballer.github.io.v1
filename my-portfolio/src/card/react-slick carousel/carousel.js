import React from "react";
import Slider from "react-slick";
 
class SimpleSlider extends React.Component {
  
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };

    let {screenshots} = this.props

    if (screenshots.length > 0) {
      return (      
        <Slider {...settings}>
          {screenshots.map((s, index) => (
            <img key={index} className="screenshot" src={s} />        
          ))}
        </Slider>
      );
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

export default SimpleSlider;