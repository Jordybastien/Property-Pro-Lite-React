import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar menulg">
          <div className="container">
            <a className="site-title" href="/">
              Property Pro Lite
            </a>

            <ul className="menu-lg">
              <li>
                <a href="/properties"> Properties</a>
              </li>
              <li>
                <a href="/dashboard"> Dashboard</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="navbar menusm">
          <div className="container">
            <a className="site-title" href="/">
              Property Pro Lite
            </a>

            <ul className="menu-lg addonsul">
              <li>
                <a href="/properties"> Properties</a>
              </li>
              <li>
                <a href="/dashboard"> Dashboard</a>
              </li>
              <li>
                <a href="/signup">Sign Up</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
