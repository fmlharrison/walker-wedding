import React, { Component } from "react";

import CountdownUnitContainer from "./CountdownUnitContainer";

class CountdownSection extends Component {
  render() {
    const { unit, digit, shuffleUnit, unitName } = this.props;

    return (
      <div className="section">
        <div className="section-name">{unitName}</div>
        <CountdownUnitContainer
          unit={unit}
          digit={digit}
          shuffle={shuffleUnit}
        />
      </div>
    );
  }
}

export default CountdownSection;
