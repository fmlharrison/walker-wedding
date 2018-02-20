import React, { Component } from "react";

import story from "../data/our-story.json";
import joe_and_lucy from "../images/joe-and-lucy.png";

import "../assets/css/our-story.css";

class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <div className="our-story__title">Our Story</div>
        <img src={joe_and_lucy} alt="Joe and Lucy" className="our-story__image" />
        <div className="our-story__text">{story.our_story}</div>
      </div>
    );
  }
}

export default OurStory;
