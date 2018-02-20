import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

import "../assets/css/nav-bar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  closeNav = () => {
    this.setState({ collapsed: true });
  };

  render() {
    return (
      <div className="nav-bar-small">
        <Navbar color="faded" light>
          <NavbarBrand href="#" className="mr-auto">
            <Link className="nav-bar-small__title" to="/">
              The Walker Wedding
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/our-story">
                  Our Story
                </Link>
              </NavItem>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/our-family">
                  Our Family
                </Link>
              </NavItem>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/our-friends">
                  Our Friends
                </Link>
              </NavItem>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/the-big-day">
                  The Big Day
                </Link>
              </NavItem>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/the-gifts">
                  The Gifts
                </Link>
              </NavItem>
              <NavItem onClick={this.closeNav}>
                <Link className="nav-bar-small__link" to="/rsvp">
                  RSVP
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
