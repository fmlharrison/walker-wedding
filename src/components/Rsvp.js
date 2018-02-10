import React, { Component } from "react";

class Rsvp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      plus_one: "",
      email: "",
      attending: "Yes",
      dietary: "",
      song: "",
      hasSubmitted: false
    };
  }

  handleChange = e => {
    console.log(e);
    const target = e.target;
    console.log(target);
    const value = target.value;
    const name = target.name;
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("https://formspree.io/walkerwedding28@gmail.com", {
      method: "POST",
      body: this.emailBody(),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .catch(err => console.log(err))
      .then(r => r.json())
      .then(res => {
        if (res.success === "email sent") {
          console.log(res);
          this.setState({ hasSubmitted: true });
        }
      });
  };

  emailBody = () => {
    const { name, plus_one, email, attending, dietary, song } = this.state;

    const body = {
      Name: name,
      Plus_One: plus_one,
      Email: email,
      Attending: attending,
      Dietary_Requirements: dietary,
      Song: song,
      _subject: "Walker Wedding RSVP"
    };

    return JSON.stringify(body);
  };

  rsvpSuccess = () => {
    if (this.state.hasSubmitted === true) {
      return <div>Thanks for RSVPing! We'll see you at the wedding!</div>;
    }
    return null;
  };

  render() {
    return (
      <div>
        <h2>RSVP</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name."
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="plus_one"
            placeholder="Your plus one's name."
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            onChange={this.handleChange}
          />
          <label htmlFor="#attending">Can you come?</label>
          <select
            id="attending"
            name="attending"
            value={this.state.attending}
            required
            onChange={this.handleChange}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <input
            type="text"
            name="dietary"
            placeholder="Any dietary requirements?"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="song"
            placeholder="Your song request."
            onChange={this.handleChange}
          />
          <input type="submit" value="Send" />
        </form>
        {this.rsvpSuccess()}
      </div>
    );
  }
}

export default Rsvp;
