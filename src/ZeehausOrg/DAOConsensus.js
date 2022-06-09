import React, { Component } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";

export default class DAOConsensus extends Component {
  state = {};
  render() {
    return (
      <div>
        <iframe
        //   ref={(n) => setIframeTwo(n)}
          title="Use ZEH to Purchase Properties"
          frameBorder="0"
          height="1500"
          width="100%"
          scrolling="no"
          src={
            false
              ? "http://localhost:3000/org/dao"
              : "https://zeehaus.com/org/dao"
          }
        />
      </div>
    );
  }
}
