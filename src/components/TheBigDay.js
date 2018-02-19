import React, { Component } from "react";
import moment from "moment";

import the_big_day from "../data/the-big-day";
import "../assets/css/the-big-day.css";

class TheBigDay extends Component {
  renderDate = () => {
    return the_big_day.address.map(line => {
      return <p>{line}</p>;
    });
  };

  render() {
    return (
      <div className="big-day">
        <div className="big-day__title">The Big Day</div>
        <div className="big-day__details">
          <p className="big-day__date">
            Join us on {moment(the_big_day.date).format("dddd Do MMMM YYYY")}
          </p>
          <div className="big-day__address">{this.renderDate()}</div>
          <p className="big-day__info">{the_big_day.info}</p>
          <p className="big-day__contact">{the_big_day.contact}</p>
        </div>
      </div>
    );
  }
}

export default TheBigDay;
