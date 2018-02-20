import React, { Component } from "react";
import PersonDisplay from "./PersonDisplay";
import "../assets/css/our-family.css";

import father_of_groom from "../images/father-of-groom.png";
import mother_of_groom from "../images/mother-of-groom.png";
import father_of_bride from "../images/father-of-bride.png";
import mother_of_bride from "../images/mother-of-bride.png";

import our_family from "../data/our-family.json";

class OurFamily extends Component {
  render() {
    return (
      <div>
        <div className="our-family__title">Our Family</div>
        <div className="our-family">
          <PersonDisplay
            photo={father_of_groom}
            parent="Father of the Groom"
            info={our_family.joe.father}
          />
          <PersonDisplay
            photo={mother_of_groom}
            parent="Mother of the Groom"
            info={our_family.joe.mother}
          />
          <PersonDisplay
            photo={father_of_bride}
            parent="Father of the Bride"
            info={our_family.lucy.father}
          />
          <PersonDisplay
            photo={mother_of_bride}
            parent="Mother of the Bride"
            info={our_family.lucy.mother}
          />
        </div>
      </div>
    );
  }
}

export default OurFamily;
