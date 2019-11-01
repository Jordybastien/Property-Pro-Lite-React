import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="banner">
          <div id="slides"></div>
          <div className="dark-overlay">
            <div className="container">
              <div className="row">
                <h1>Property Pro Lite</h1>
                <p>
                  Property Pro Lite is a platform where people can create and/or
                  search properties for sale or rent.
                </p>
                <br />
                <form>
                  <fieldset>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className=""
                      placeholder="Search Location"
                    />
                  </fieldset>
                  <fieldset>
                    <select id="type" name="type" className="" required>
                      <option value="1" defaultValue disabled>
                        Any
                      </option>
                      <option value="2">2 Bedroom</option>
                      <option value="3">3 Bedroom</option>
                    </select>
                  </fieldset>
                  <button type="submit" href="#" className="button-1">
                    Search
                  </button>
                </form>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
