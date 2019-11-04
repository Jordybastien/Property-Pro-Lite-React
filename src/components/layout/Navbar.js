import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const guestLinks = (
      <React.Fragment>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </React.Fragment>
    );
    const authLinks = (
      <React.Fragment>
        {/* <li>
          <Link to="/dashboard"> Dashboard</Link>
        </li> */}
        <li>
          <a href="/logout"onClick={this.onLogoutClick.bind(this)}>Logout</a>
        </li>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <nav className="navbar menulg">
          <div className="container">
            <Link className="site-title" to="/">
              Property Pro Lite
            </Link>
            <ul className="menu-lg">
              <li>
                <Link to="/allProperties"> Properties</Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>
        <nav className="navbar menusm">
          <div className="container">
            <Link className="site-title" to="/">
              Property Pro Lite
            </Link>

            <ul className="menu-lg addonsul">
              <li>
                <Link to="/properties"> Properties</Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
