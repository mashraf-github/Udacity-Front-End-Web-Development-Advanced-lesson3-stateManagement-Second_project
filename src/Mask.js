import React, { Component } from "react";

class Mask extends Component {
  render() {
    return (
      this.props.showMask && (
        <div
          className="loading-mask"
          style={{ top: document.documentElement.scrollTop }}
        >
          <img src={require("./imgs/loading.gif")} alt="Loading..." />
        </div>
      )
    );
  }
}

export default Mask;
