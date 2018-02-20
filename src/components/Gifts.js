import React, { Component } from "react";

import "../assets/css/gifts.css";
import gifts from "../data/gifts.json";
import lankowi from "../images/lankowi-2015-square.jpg";

class Gifts extends Component {
  renderGiftsText = () => {
    return gifts.details.map(lines => {
      return <p className="gifts__lines">{lines}</p>;
    });
  };

  render() {
    return (
      <div className="gifts">
        <div className="gifts__title">The Gifts</div>
        <div className="gifts__details">{this.renderGiftsText()}</div>
        <img className="gifts__photo" src={lankowi} alt="Joe and Lucy in Lankowi" />
      </div>
    );
  }
}

export default Gifts;
