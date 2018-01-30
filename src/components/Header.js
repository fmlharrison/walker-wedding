import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../assets/css/header.css";
import Title from "./Title";

const left_links = [
  { name: "Our Story", href: "our-story" },
  { name: "Our Family", href: "our-family" },
  { name: "Our Firends", href: "our-friends" }
];

const right_links = [
  { name: "The Big Day", href: "the-big-day" },
  { name: "The Gifts", href: "the-gifts" },
  { name: "RSVP", href: "rsvp" }
];

class Header extends Component {
  renderHeaderLinks = headerLinks => {
    return headerLinks.map(link => {
      return (
        <li>
          <Link className="header-link" to={link.href}>
            {link.name}
          </Link>
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
