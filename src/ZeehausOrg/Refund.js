import React, { Component } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

export default class Refund extends Component {
  state = {};
  render() {
    return (
      <div>
        <iframe
          //   ref={(n) => setIframeTwo(n)}
          title="Refund"
          frameBorder="0"
          height="1500"
          width="100%"
          scrolling="no"
          src={
            false
              ? "http://localhost:3000/org/refund"
              : "https://zeehaus.com/org/refund"
          }
        />
      </div>
    );
  }
}
