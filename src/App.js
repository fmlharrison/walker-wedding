import React, { Component } from "react";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import PhotoSlider from "./components/PhotoSlider";
// import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <WeddingWrapper>
        <PhotoSlider />
      </WeddingWrapper>
    );
  }
}

export default App;
