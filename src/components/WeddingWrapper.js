import React, { Component } from "react";

import Header from "./Header";
import NavBar from "./NavBar";

import "../assets/css/wedding-wrapper.css";

class WeddingWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default WeddingWrapper;
