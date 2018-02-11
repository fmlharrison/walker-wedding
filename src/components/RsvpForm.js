import React, { Component } from "react";

class RsvpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      plus_one: "",
      email: "",
      attending: "Yes",
      dietary: "",
      song: ""
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.rsvpEmail(this.state);
  };

  render() {
    return (
      <form className="rsvp-form-wrapper" onSubmit={this.handleSubmit}>
        <input
          className="rsvp-input"
          type="text"
          name="name"
          placeholder="Your name"
          onChange={this.handleChange}
        />
        <input
          className="rsvp-input"
          type="text"
          name="plus_one"
          placeholder="Your plus one's name"
          onChange={this.handleChange}
        />
        <input
          className="rsvp-input"
          type="email"
          name="email"
          placeholder="Your e-mail"
          onChange={this.handleChange}
        />
        <div className="attending-wrapper" htmlFor=".attending-buttons">
          Can you come?
        </div>
        <div className="attending-wrapper">
          <label className="attend-buttons-label" htmlFor="#attending">
            Yes
          </label>
          <input
            className="attend-buttons-button"
            type="radio"
            name="attending"
            id="#attending"
            value="Yes"
            onChange={this.handleChange}
          />
          <label className="attend-buttons-label" htmlFor="#attending">
            No
          </label>
          <input
            className="attend-buttons-button"
            type="radio"
            name="attending"
            id="#attending"
            value="No"
            onChange={this.handleChange}
          />
        </div>
        <input
          className="rsvp-input"
          type="text"
          name="dietary"
          placeholder="Any dietary requirements?"
          onChange={this.handleChange}
        />
        <input
          className="rsvp-input"
          type="text"
          name="song"
          placeholder="Your song request"
          onChange={this.handleChange}
        />
        <input className="rsvp-submit-button" type="submit" value="Send" />
      </form>
    );
  }
}

export default RsvpForm;
