import React, { Component } from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { showLocal } from "./ThirdSection";

export default class DAOConsensus extends Component {
  state = {};
  render() {
    return (
      <div>
        <iframe
          //   ref={(n) => setIframeTwo(n)}
          title="Use ZEH to Purchase Properties"
          frameBorder="0"
          height="2000"
          width="100%"
          scrolling="no"
          src={
            showLocal
              ? "http://localhost:3000/org/dao"
              : "https://zeehaus.com/org/dao"
          }
        />
      </div>
    );
  }
}
