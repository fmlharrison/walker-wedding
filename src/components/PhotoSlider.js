import React, { Component } from "react";
import Slider from "react-slick";

import CountdownWrapper from "./CountdownWrapper";

import engagement from "../images/engagement.jpg";
import caribean from "../images/caribean-2009.jpg";
import iceland from "../images/iceland-2016.jpg";
import portugal from "../images/portugal-2007.jpg";
import usa from "../images/usa-2016.jpg";

import "../assets/css/photo-slider.css";

class PhotoSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: false,
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    };

    return (
      <div className="home-page">
        <div className="home-page__title">Joe &amp; Lucy</div>
        <div className="home-page__photos">
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
              <img src={portugal} className="slider-photo" alt="wedding-portugal" />
            </div>
            <div key={5}>
              <img src={usa} className="slider-photo" alt="wedding-usa" />
            </div>
          </Slider>
        </div>
        <CountdownWrapper />
      </div>
    );
  }
}

export default PhotoSlider;
