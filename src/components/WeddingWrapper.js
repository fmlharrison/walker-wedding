import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../assets/css/wedding-wrapper.css";

class WeddingWrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="main">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default WeddingWrapper;
