import React, { Component } from "react";

class HowItWorks extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="how-it-works">
          <h1>How it works</h1>
          <h3>These are steps to follow to buy/rent a property</h3>
          <div className="container">
            <div className="box">
              <div className="content">
                <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1573117640/choose_aiex6i.png" />

                <h3>STEP 1</h3>
                <p>
                  Find Property suitable to your demands below or in{" "}
                  <a href="properties.html">All Properties</a>
                </p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1573117639/select_hc489s.png" />

                <h3>STEP 2</h3>
                <p>
                  Click on it, a window will then open with more info about the
                  property, Then click Acquire
                </p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1573117640/choose_aiex6i.png" />

                <h3>STEP 3</h3>
                <p>
                  That is all, it is all yours now, A pleasure doing business with
                  you
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HowItWorks;
