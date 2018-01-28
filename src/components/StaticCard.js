import React, { Component } from "react";

class StaticCard extends Component {
  render() {
    const { position, digit } = this.props;
    return (
      <div className={position}>
        <span>{digit}</span>
      </div>
    );
  }
}

export default StaticCard;
