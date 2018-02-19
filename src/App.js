import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import PhotoSlider from "./components/PhotoSlider";
import OurStory from "./components/OurStory";
import OurFamily from "./components/OurFamily";
import OurFriends from "./components/OurFriends";
import Rsvp from "./components/Rsvp";
import TheBigDay from "./components/TheBigDay";
import Gifts from "./components/Gifts";

class App extends Component {
  render() {
    return (
      <Router>
        <WeddingWrapper>
          <Switch>
            <Route exact path="/" component={PhotoSlider} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/our-family" component={OurFamily} />
            <Route path="/our-friends" component={OurFriends} />
            <Route path="/the-big-day" component={TheBigDay} />
            <Route path="/the-gifts" component={Gifts} />
            <Route path="/rsvp" component={Rsvp} />
          </Switch>
        </WeddingWrapper>
      </Router>
    );
  }
}

export default App;
