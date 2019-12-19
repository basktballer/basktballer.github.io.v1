import React from "react";
import Slider from "react-slick";
 
function SimpleSlider(screenshots) {
  
  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  if (screenshots.length !== 0) {
    return (      
      <Slider {...settings}>
        {screenshots.screenshots.map((s, index) => (
          <img key={index} alt={'screenshot# ' + index} className="screenshot" src={s} />        
        ))}
      </Slider>
    );
  } else {
    return (
      <p>Loading</p>
    )
  }
}

export default SimpleSlider;