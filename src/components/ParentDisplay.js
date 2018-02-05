import React from "react";
import "../assets/css/our-parents.css";

const ParentDisplay = props => {
  return (
    <div className="parent-display">
      <img className="our-parents-photo" src={props.photo} alt="Parent photo" />
      <div className="parent-info">
        <h2 className="name">{props.parent}</h2>
        <div className="bio">{props.info}</div>
      </div>
    </div>
  );
};

export default ParentDisplay;
