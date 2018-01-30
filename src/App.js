import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import PhotoSlider from "./components/PhotoSlider";
import OurStory from "./components/OurStory";
// import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <Router>
        <WeddingWrapper>
          <Switch>
            <Route exact path="/" component={PhotoSlider} />
            <Route path="/our-story" component={OurStory} />
          </Switch>
        </WeddingWrapper>
      </Router>
    );
  }
}

export default App;
