import React, { Component } from "react";
import "../assets/css/landing-page.css";

import logoLarge from "../images/logo-lg.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <img src={logoLarge} className="landing-image" alt="wedding-logo" />
      </div>
    );
  }
}

export default LandingPage;
