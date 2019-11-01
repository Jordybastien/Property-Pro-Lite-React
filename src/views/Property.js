import React, { Component } from "react";

class Property extends Component {
  render() {
    console.log("Reached here");
    return (
      <React.Fragment>
        <section id="property-container">
          <h1 className="underline">Property Information</h1>
          <div className="content">
            <div className="display">
              <div className="row">
                <img src="./src/img/slides/img3.jpg" />
                <span className="available">Available</span>
                <div className="info">
                  <div className="">
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="./src/img/icons/price.png"
                          className="infopic"
                        />
                        Price:{" "}
                      </span>
                      <span className="info-item-col-2">15,000 Frw</span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="./src/img/icons/state.png"
                          className="infopic"
                        />
                        State:{" "}
                      </span>
                      <span className="info-item-col-2">Kigali </span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="./src/img/icons/city.png"
                          className="infopic"
                        />
                        City:
                      </span>
                      <span className="info-item-col-2"> Kigali</span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="./src/img/icons/type.png"
                          className="infopic"
                        />
                        Type:
                      </span>
                      <span className="info-item-col-2"> 2 Bedroom</span>
                    </div>
                    <br />

                    <div className="button-purchase">
                      <a type="submit" href="login.html" className="button-1">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="more-info">
                  <h1 className="underline">More Information</h1>
                  <br />
                  <p>
                    This is a property located in Kigali as shown up there it
                    has 2 rooms and it is suitable for your stay, to see where
                    it is located just scroll down to view the localization
                    below.
                  </p>
                </div>
              </div>
              <div className="maps">
                <h2 className="underline putcenter">Localisation</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.0105606276884!2d30.10389248311537!3d-1.969412627286686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2srw!4v1561640905725!5m2!1sen!2srw"
                  width="100%"
                  height="450"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="more-props">
              <h3 className="underline">More Properties</h3>

              <a href="property.html">
                <div className="box">
                  <img src="./src/img/properties/8.jpg" />
                  <span className="available">Available</span>
                  <span className="price">
                    <img src="./src/img/icons/price.png" />
                    Price: RWF 15,000/per night
                  </span>
                  <span className="state">
                    <img src="./src/img/icons/state.png" />
                    State: Kigali
                  </span>
                  <span className="city">
                    <img src="./src/img/icons/city.png" />
                    City: Kigali
                  </span>
                  <span className="type">
                    <img src="./src/img/icons/type.png" />
                    Type: 2 bedroom
                  </span>
                </div>
              </a>
              <a href="property.html">
                <div className="box">
                  <img src="./src/img/properties/5.jpg" />
                  <span className="available">Available</span>
                  <span className="price">
                    <img src="./src/img/icons/price.png" />
                    Price: RWF 15,000/per night
                  </span>
                  <span className="state">
                    <img src="./src/img/icons/state.png" />
                    State: Kigali
                  </span>
                  <span className="city">
                    <img src="./src/img/icons/city.png" />
                    City: Kigali
                  </span>
                  <span className="type">
                    <img src="./src/img/icons/type.png" />
                    Type: 2 bedroom
                  </span>
                </div>
              </a>
              <a href="property.html">
                <div className="box">
                  <img src="./src/img/properties/10.jpg" />
                  <span className="available">Available</span>
                  <span className="price">
                    <img src="./src/img/icons/price.png" />
                    Price: RWF 15,000/per night
                  </span>
                  <span className="state">
                    <img src="./src/img/icons/state.png" />
                    State: Kigali
                  </span>
                  <span className="city">
                    <img src="./src/img/icons/city.png" />
                    City: Kigali
                  </span>
                  <span className="type">
                    <img src="./src/img/icons/type.png" />
                    Type: 2 bedroom
                  </span>
                </div>
              </a>
              <a href="property.html">
                <div className="box">
                  <img src="./src/img/properties/7.jpg" />
                  <span className="available">Available</span>
                  <span className="price">
                    <img src="./src/img/icons/price.png" />
                    Price: RWF 15,000/per night
                  </span>
                  <span className="state">
                    <img src="./src/img/icons/state.png" />
                    State: Kigali
                  </span>
                  <span className="city">
                    <img src="./src/img/icons/city.png" />
                    City: Kigali
                  </span>
                  <span className="type">
                    <img src="./src/img/icons/type.png" />
                    Type: 2 bedroom
                  </span>
                </div>
              </a>
            </div>
          </div>
          <button className="button-flag">Flag as fraudulent</button>
        </section>
      </React.Fragment>
    );
  }
}

export default Property;
