import React, { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-us">
          <h1>About Us</h1>
          <h3>
            Property Pro Lite is a platform where people can create and/or
            search properties for sale or rent.{" "}
          </h3>
          <div className="container">
            <p>
              Property Pro Lite is a platform where people can create and/or
              search properties for sale or rent.
              <br />
              This is a project i am still working on during bootcamp, we neve
              know something might come out of it
              <br />
              This is just a sample text to replace the missing about company
              informations.
            </p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default AboutUs;
