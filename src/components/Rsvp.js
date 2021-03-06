import React, { Component } from "react";

import RsvpForm from "./RsvpForm";
import CountdownWrapper from "./CountdownWrapper";
import "../assets/css/rsvp.css";

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      hasSubmitted: false,
      hasErrored: false
    };
  }

  sendEmail = formInputDetails => {
    this.setState({ isSubmitting: true });
    fetch("https://formspree.io/walkerwedding28@gmail.com", {
      method: "POST",
      body: this.emailBody(formInputDetails),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => {
        console.log(err);
        this.setState({
          isSubmitting: false,
          hasErrored: true
        });
      })
      .then(r => r.json())
      .then(res => {
        if (res.success === "email sent") {
          this.setState({
            isSubmitting: false,
            hasSubmitted: true
          });
        }
      });
  };

  emailBody = emailDetails => {
    const { name, email, attending, dietary, song } = emailDetails;

    const body = {
      Name: name,
      Email: email,
      Attending: attending,
      Dietary_Requirements: dietary,
      Song: song,
      _subject: "Walker Wedding RSVP"
    };

    return JSON.stringify(body);
  };

  rsvpSubmitResult = () => {
    if (this.state.hasSubmitted) {
      return (
        <div className="rsvp-form__submit-message">Thanks for RSVPing!</div>
      );
    }
    if (this.state.hasErrored) {
      return (
        <div className="rsvp-form__submit-message">
          Something went wrong. Please RSVP again.
        </div>
      );
    }
    return null;
  };

  render() {
    return (
      <div className="rsvp-page">
        <div className="rsvp-page__title">RSVP</div>
        {this.rsvpSubmitResult()}
        <RsvpForm
          rsvpEmail={this.sendEmail}
          isSubmitting={this.state.isSubmitting}
        />
        <CountdownWrapper />
      </div>
    );
  }
}

export default Rsvp;
