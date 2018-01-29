import React, { Component } from "react";
import Slider from "react-slick";

import engagement from "../images/engagement.jpg";
import caribean from "../images/caribean-2009.jpg";
import iceland from "../images/iceland-2016.jpg";
import lankowi from "../images/lankowi-2015.jpg";
import portugal from "../images/portugal-2007.jpg";

import "../assets/css/photo-slider.css";

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div>
        <Slider {...settings}>
          <div key={1}>
            <img src={engagement} className="slider-photo" alt="wedding-caribean" />
          </div>
          <div key={2}>
            <img src={caribean} className="slider-photo" alt="wedding-caribean" />
          </div>
          <div key={3}>
            <img src={iceland} className="slider-photo" alt="wedding-iceland" />
          </div>
          <div key={4}>
            <img src={lankowi} className="slider-photo" alt="wedding-lankowi" />
          </div>
          <div key={5}>
            <img src={portugal} className="slider-photo" alt="wedding-portugal" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default PhotoSlider;
