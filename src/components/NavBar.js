import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import "../assets/css/nav-bar.css"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar= () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="nav-bar-small">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">WW</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/our-story">Our Story</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/our-family">Our Family</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/our-friends">Our Friends</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/the-big-day">The Big Day</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/the-gifts">The Gifts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/rsvp">RSVP</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
