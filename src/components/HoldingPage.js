import React, { Component } from "react";

import Countdown from "./Countdown";
import "../assets/css/holding-page.css";

class HoldingPage extends Component {
  render() {
    return (
      <div className="holding-page">
          <div className="holding-page__title">
            Joe &amp; Lucy<br /> are getting married in:
          </div>
          <div className="holding-page__main">
            <Countdown />
          </div>
          <div className="holding-page__details">
            Please join us on 28th July!
          </div>
      </div>
    );
  }
}

export default HoldingPage;
