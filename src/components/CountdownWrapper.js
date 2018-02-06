import React, { Component } from "react";

import Countdown from "./Countdown";
import "../assets/css/countdown-wrapper.css";

class CountdownWrapper extends Component {
  render() {
    return (
      <div className="countdown-wrapper" >
        <Countdown />
      </div>
    );
  }
}

export default CountdownWrapper;