import React from "react";
import "../assets/css/person-display.css";

const PersonDisplay = props => {
  return (
    <div className="person-display">
      <img className="person-display__photo" src={props.photo} alt="Family or friend headshot" />
      <div className="person-display__text">
        <h2 className="name">{props.parent}</h2>
        <div className="bio">{props.info}</div>
      </div>
    </div>
  );
};

export default PersonDisplay;
