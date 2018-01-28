import React, { Component } from "react";

import logo from "../images/logo-sm.png";

import "../assets/css/title.css";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <img src={logo} alt="wedding-title" className="header-logo" />
      </div>
    );
  }
}

export default Title;
