import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import InputType from "../../components/common/InputType";
import Button from "../../components/common/Button";
import { registerUser } from "../../actions/authActions";

export class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      phoneNumber: "",
      address: "",
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = "/";
    }
  }
  componentWillReceiveProps({auth, errors}) {
    this.setState({ errors });
    if (typeof errors.error !== 'object') {
        toast.error(errors.error, {
            position: toast.POSITION.TOP_RIGHT
          });
    }
    if(auth.isAuthenticated){
        window.location.href="/";
      }
  }
  // to be used in the future  instead of componentWillReceiveProps (getDerivedStateFromProps)
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
      is_admin: true
    };
    this.props.registerUser(newUser);
  }
  render() {
    const { error } = this.state.errors;
    return (
      <React.Fragment>
        <div className="signup-content">
          <div className="signup-form">
            <h1 style={{ textAlign: "center" }}>Property Pro Lite</h1>
            <div className="form-content">
              <p className="line-on-side">
                <span>Sign Up</span>
              </p>
              <div>
                <form noValidate onSubmit={this.onSubmit}>
                  <InputType
                    label="First Name"
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="First name"
                    onChange={this.onChange}
                    error={error ? error.first_name : null}
                  />
                  <InputType
                    label="Last Name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Last name"
                    onChange={this.onChange}
                    error={error ? error.last_name : null}
                  />
                  <InputType
                    label="phoneNumber"
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone eg +250780000000"
                    onChange={this.onChange}
                    error={error ? error.phoneNumber : null}
                  />
                  <InputType
                    label="Address"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    onChange={this.onChange}
                    error={error ? error.address : null}
                  />
                  <InputType
                    label="Email"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.onChange}
                    error={error ? error.email : null}
                  />
                  <InputType
                    label="Enter Password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.onChange}
                    error={error ? error.password : null}
                  />
                  <fieldset className="signup-fieldset align">
                    <input type="checkbox" id="" className="" required="" />
                    <label>
                      I understand and accept{" "}
                      <Link to="#" target="_blank">
                        Terms &amp; conditions
                      </Link>
                    </label>
                  </fieldset>

                  <Button type="submit" label="Register" />
                </form>
              </div>
              <br />
              <p className="line-on-side">
                <span>Or</span>
              </p>
              <Button type="submit" label="Login" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
