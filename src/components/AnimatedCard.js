import React, { Component } from "react";

class AnimatedCard extends Component {
  render() {
    const { position, digit, animation } = this.props;
    return (
      <div className={`flipCard ${position} ${animation}`}>
        <span>{digit}</span>
      </div>
    );
  }
}

export default AnimatedCard;
