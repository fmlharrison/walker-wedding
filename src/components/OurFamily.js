import React, { Component } from "react";
import ParentDisplay from "./ParentDisplay";
import "../assets/css/our-parents.css";

import father_of_groom from "../images/father-of-groom.png";
import mother_of_groom from "../images/mother-of-groom.png";
import father_of_bride from "../images/father-of-bride.png";
import mother_of_bride from "../images/mother-of-bride.png";

import our_family from "../data/our-family.json";

class OurFamily extends Component {
  render() {
    return (
      <div className="our-family">
        <ParentDisplay
          photo={father_of_groom}
          parent="Father of the Groom"
          info={our_family.joe.father}
        />
        <ParentDisplay
          photo={mother_of_groom}
          parent="Mother of the Groom"
          info={our_family.joe.mother}
        />
        <ParentDisplay
          photo={father_of_bride}
          parent="Father of the Bride"
          info={our_family.lucy.father}
        />
        <ParentDisplay
          photo={mother_of_bride}
          parent="Mother of the Bride"
          info={our_family.lucy.mother}
        />
      </div>
    );
  }
}

export default OurFamily;
