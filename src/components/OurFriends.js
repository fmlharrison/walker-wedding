import React, { Component } from "react";

import PersonDisplay from "./PersonDisplay";
import "../assets/css/our-friends.css";

import ali from "../images/ali-head-shot-1.png";
import james from "../images/james-head-shot-1.png";
import ellie from "../images/ellie-head-shot-2.png";
import katie from "../images/katie-head-shot-1.png";

import our_friends from "../data/our-friends.json";

class OurFriends extends Component {
  render() {
    return (
      <div className="our-friends">
        <PersonDisplay
          photo={ali}
          parent="Best Man"
          info={our_friends.joe.ali}
        />
        <PersonDisplay
          photo={james}
          parent="Best Man"
          info={our_friends.joe.james}
        />
        <PersonDisplay
          photo={katie}
          parent="Maid of Honour"
          info={our_friends.lucy.katie}
        />
        <PersonDisplay
          photo={ellie}
          parent="Bridesmaid"
          info={our_friends.lucy.ellie}
        />
      </div>
    )
  }
}

export default OurFriends;
