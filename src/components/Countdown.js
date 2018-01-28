import React, { Component } from "react";

import CountdownSection from "./CountdownSection";

import "../assets/css/countdown.css";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  convertMS(ms) {
    let d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return { days: d, hours: h, minutes: m, seconds: s };
  }

  updateTime() {
    const weddingDate = new Date("2018-07-28 13:30:00").getTime();
    const now = new Date().getTime();
    const diffInDate = this.convertMS(weddingDate - now);

    // on day chanage, update days and shuffle state
    if (diffInDate.days !== this.state.days) {
      const daysShuffle = !this.state.daysShuffle;
      this.setState({
        days: diffInDate.days,
        daysShuffle
      });
    }

    // on hour chanage, update hours and shuffle state
    if (diffInDate.hours !== this.state.hours) {
      const hoursShuffle = !this.state.hoursShuffle;
      this.setState({
        hours: diffInDate.hours,
        hoursShuffle
      });
    }

    // on minute chanage, update minutes and shuffle state
    if (diffInDate.minutes !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      this.setState({
        minutes: diffInDate.minutes,
        minutesShuffle
      });
    }

    // on second chanage, update seconds and shuffle state
    if (diffInDate.seconds !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      this.setState({
        seconds: diffInDate.seconds,
        secondsShuffle
      });
    }
  }

  render() {
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle
    } = this.state;

    return (
      <div className={"flipClock"}>
        <CountdownSection
          unit={"days"}
          digit={days}
          shuffleUnit={daysShuffle}
          unitName={"Days"}
        />
        <CountdownSection
          unit={"hours"}
          digit={hours}
          shuffleUnit={hoursShuffle}
          unitName={"Hours"}
        />
        <CountdownSection
          unit={"minutes"}
          digit={minutes}
          shuffleUnit={minutesShuffle}
          unitName={"Minutes"}
        />
        <CountdownSection
          unit={"seconds"}
          digit={seconds}
          shuffleUnit={secondsShuffle}
          unitName={"Seconds"}
        />
      </div>
    );
  }
}

export default Countdown;
