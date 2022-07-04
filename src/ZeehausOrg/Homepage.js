import React, { Component } from "react";
import DAOConsensus from "./DAOConsensus";
import Footer from "./Footer";
import MiddleSection from "./MiddleSection";
import Nav from "./Nav";
import SectionLogo from "./SectionLogo";
import SectionOne from "./SectionOne";
import SectionOneA from "./SectionOneA";
import ThirdSection from "./ThirdSection";
import CoinVideo from "./Video";

export default class Homepage extends Component {
  render() {
    const path = window.location.pathname;
    console.log("Path", path);
    return (
      <div>
        <div>
          <SectionOne />
          <SectionOneA />
          <MiddleSection />
          <CoinVideo />
          <ThirdSection />
        </div>
      </div>
    );
  }
}
