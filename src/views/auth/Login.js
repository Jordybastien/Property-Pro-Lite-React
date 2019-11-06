import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import InputType from "../../components/common/InputType";
import Button from "../../components/common/Button";
import { loginUser } from "../../actions/authActions";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
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
  componentWillReceiveProps({ auth, errors }) {
    this.setState({ errors });
    if (errors.error && typeof errors.error !== "object") {
      toast.error(errors.error, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    if (auth.isAuthenticated) {
      window.location.href = "/";
    }
  }
  // to be used in the future  instead of componentWillReceiveProps (getDerivedStateFromProps)
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user);
  }
  render() {
    const { errors } = this.state;
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
                    label="Email"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.onChange}
                    error={errors ? errors.email : null}
                  />
                  <InputType
                    label="Enter Password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.onChange}
                    error={errors ? errors.password : null}
                  />
                  <Button type="submit" label="Login" />
                </form>
              </div>
              <br />
              <p className="line-on-side">
                <span>Or</span>
              </p>
              <Button type="submit" label="Signup" id="lgn-btn"/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
