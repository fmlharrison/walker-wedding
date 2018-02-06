import React, { Component } from "react";

import story from "../data/our-story.json";
import joe_and_lucy from "../images/joe-and-lucy.png";

import "../assets/css/our-story.css";

class OurStory extends Component {
  render() {
    return (
      <div className="our-story">
        <div className="our-story-title">Our Story</div>
        <img src={joe_and_lucy} alt="our-story-image" className="our-story-image" />
        <div className="our-story-text">{story.our_story}</div>
      </div>
    );
  }
}

export default OurStory;
