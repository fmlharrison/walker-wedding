import React, { Component } from "react";

import "../assets/css/header.css";
import Title from "./Title";

const left_links = ["Our Story", "Our Family", "Our Firends"];

const right_links = ["The Big Day", "The Gifts", "RSVP"];

class Header extends Component {
  renderHeaderLinks = headerLinks => {
    return headerLinks.map(link => {
      return (
        <li>
          <a className="header-link" href="#">
            {link}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <header className="header">
        {this.renderHeaderLinks(left_links)}
        <Title />
        {this.renderHeaderLinks(right_links)}
      </header>
    );
  }
}

export default Header;
