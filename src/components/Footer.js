import React, { Component } from "react";

import "../assets/css/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <hr />
        Website by <a className="footer__link" href="https://github.com/fmlharrison">Felix Harrison</a>
      </div>
    );
  }
}

export default Footer;
