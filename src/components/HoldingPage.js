import React, { Component } from "react";

import Countdown from "./Countdown";
import "../assets/css/holding-page.css";

class HoldingPage extends Component {
  render() {
    return (
      <div className="holding-page">
        <div className="holding-text-title main">
          Joe &amp; Lucy are getting married in:
        </div>
        <div className="main">
          <Countdown />
        </div>
        <div className="holding-text-details">Please join us on 28th July</div>
        <div className="holding-text-details">
          Brookfield Barn
        </div>
        <div className="holding-text-details">
          Winterpit Lane
        </div>
        <div className="holding-text-details">
          Lower Beeding
        </div>
        <div className="holding-text-details">
          Horsham RH13 6LY
        </div>
      </div>
    );
  }
}

export default HoldingPage;
