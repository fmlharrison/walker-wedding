import React, { Component } from "react";
import { ScaleLoader } from "react-spinners";

class RsvpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

  renderForm = () => {
    if (this.props.isSubmitting) {
      return <ScaleLoader color={"#808080"} loading={true} />;
    } else {
      return (
        <form className="rsvp-form" onSubmit={this.handleSubmit}>
          <input
            className="rsvp-form__input"
            type="text"
            name="name"
            placeholder="Your name(s)"
            onChange={this.handleChange}
          />
          <input
            className="rsvp-form__input"
            type="email"
            name="email"
            placeholder="Your e-mail"
            onChange={this.handleChange}
          />
          <div className="rsvp-form__attending" htmlFor=".attending-buttons">
            Can you come?
          </div>
          <div className="rsvp-form__attending">
            <label
              className="rsvp-form__attending-buttons-label"
              htmlFor="#attending"
            >
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
            <label
              className="rsvp-form__attending-buttons-label"
              htmlFor="#attending"
            >
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
            className="rsvp-form__input"
            type="text"
            name="dietary"
            placeholder="Any dietary requirements?"
            onChange={this.handleChange}
          />
          <input
            className="rsvp-form__input"
            type="text"
            name="song"
            placeholder="Your song request"
            onChange={this.handleChange}
          />
          <input
            className="rsvp-form__submit-button"
            type="submit"
            value="Send"
          />
        </form>
      );
    }
  };

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

export default RsvpForm;
