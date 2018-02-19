import React, { Component } from "react";

import Countdown from "./Countdown";
import logo from "../images/logo.png";
import "../assets/css/holding-page.css";

class HoldingPage extends Component {
  render() {
    return (
      <div className="holding-page">
          <div className="holding-page--title">
            Joe &amp; Lucy<br /> are getting married in:
          </div>
          <div className="holding-page--main">
            <Countdown />
          </div>
          <div className="holding-page--details">
            Please join us on 28th July!
          </div>
      </div>
    );
  }
}

export default HoldingPage;
