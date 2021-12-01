import React, { Component } from "react";

export default class Tab extends Component {
  render() {
    let { children, disabled, id } = this.props;
    return (
      <div
        id={id}
        style={{
          opacity: disabled ? "0.8" : 1,
          cursor: disabled ? "default" : "",
          pointerEvents: disabled ? "none" : "",
        }}
      >
        {children}
      </div>
    );
  }
}
