import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import PhotoSlider from "./components/PhotoSlider";
import OurStory from "./components/OurStory";
import OurFamily from "./components/OurFamily";
// import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <WeddingWrapper>
          <Switch>
            <Route exact path="/" component={PhotoSlider} />
            <Route path="/our-story" component={OurStory} />
            <Route path="/our-family" component={OurFamily} />
          </Switch>
        </WeddingWrapper>
      </Router>
    );
  }
}

export default App;
