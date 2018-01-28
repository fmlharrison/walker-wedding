import React, { Component } from "react";

import Countdown from "./Countdown";

import "../assets/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <Countdown />
      </div>
    );
  }
}

export default Footer;
