import React, { Component } from "react";
import Banner from "../components/homepage/Banner";
import AboutUs from "../components/homepage/AboutUs";
import HowItWorks from "../components/homepage/HowItWorks";
import Properties from "../components/homepage/Properties";
class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <AboutUs />
        <HowItWorks />
        <section id="properties">
          <h1>Properties</h1>
          <h3>Here below are properties</h3>
          <Properties />
          <a type="submit" href="/allProperties" className="button-1">
            Show all properties
          </a>
        </section>
      </React.Fragment>
    );
  }
}

export default Homepage;
