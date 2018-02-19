import React, { Component } from "react";

import Countdown from "./Countdown";
import logo from "../images/logo.png";
import "../assets/css/holding-page.css";

class HoldingPage extends Component {
  render() {
    return (
      <div className="holding-page">
        <img src={logo} className="wedding-logo" alt="wedding-logo" />
        <div className="overlay">
          <div className="holding-text-title main">
            Joe &amp; Lucy<br/> are getting married in:
          </div>
          <div className="main">
            <Countdown />
          </div>
          <div className="holding-text-details">
            Please join us on 28th July
          </div>
        </div>
      </div>
    );
  }
}

export default HoldingPage;
