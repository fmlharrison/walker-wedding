import React, { Component } from "react";
import "./App.css";

import WeddingWrapper from "./components/WeddingWrapper";
import HoldingPage from "./components/HoldingPage";

class App extends Component {
  render() {
    return (
      <WeddingWrapper>
        <HoldingPage />
      </WeddingWrapper>
    );
  }
}

export default App;
