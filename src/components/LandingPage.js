import React, { Component } from "react";
import "../assets/css/landing-page.css";

import lucyAndJoe from "../images/joe-and-lucy.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <img src={lucyAndJoe} className="landing-image" alt="wedding-logo" />
      </div>
    );
  }
}

export default LandingPage;
