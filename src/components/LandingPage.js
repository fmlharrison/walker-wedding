import React, { Component } from "react";
import "../assets/css/landing-page.css";

import logo from "../images/logo.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <img src={logo} className="landing-image" alt="wedding-logo" />
      </div>
    );
  }
}

export default LandingPage;
