import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo-sm.png";

import "../assets/css/title.css";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <Link className="header-logo" to="/">
          <img src={logo} alt="wedding-title" className="header-logo" />
        </Link>
      </div>
    );
  }
}

export default Title;
