import React, { Component } from "react";

import Header from "./Header";

import "../assets/css/wedding-wrapper.css";

class WeddingWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default WeddingWrapper;
