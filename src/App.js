import React, { Component } from "react";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import LandingPage from "./components/LandingPage";

class App extends Component {
  render() {
    return (
      <WeddingWrapper>
        <LandingPage />
      </WeddingWrapper>
    );
  }
}

export default App;
