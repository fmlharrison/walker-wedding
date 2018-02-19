import React, { Component } from "react";

import PhotoSlider from "./PhotoSlider";
import HoldingPage from "./HoldingPage";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 564;

    if (isMobile) {
      return (
        <div className="home--mobile">
          <HoldingPage />
        </div>
      );
    } else {
      return (
        <div className="home--main">
          <PhotoSlider />
        </div>
      );
    }
  }
}

export default HomePage;
