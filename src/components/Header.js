import React, { Component } from "react";

import "../assets/css/header.css";

const links = [
  "Our Story",
  "Our Family",
  "Our Firends",
  "Lucy & Joe",
  "The Big Day",
  "The Gifts",
  "RSVP"
];

class Header extends Component {
  renderHeaderLinks = headerLinks => {
    return headerLinks.map(link => {
      return (
        <li>
          <a className="header-link" href="#">{link}</a>
        </li>
      );
    });
  };

  render() {
    return <header className="header">{this.renderHeaderLinks(links)}</header>;
  }
}

export default Header;
