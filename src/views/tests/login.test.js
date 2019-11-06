import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";

import Login, { Login as LoginComponent } from "../auth/Login";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])();
let wrapper;
describe("Login View", () => {
  let auth = {
    isAuthenticated: false,
    user: {}
  };
  const errors = {};
  it("should render Login component", () => {
    const component = shallow(
      <LoginComponent auth={auth} loginUser={jest.fn()} errors={errors} />
    );
    expect(component).toHaveLength(1);
  });
  it("should redirect user to the main page when he is logged in", () => {
    auth.isAuthenticated = true;
    const event = { target: { value: "this is a value" } };
    const component = shallow(
      <LoginComponent auth={auth} loginUser={jest.fn()} errors={errors} />
    );
    const txtbox = component.find("#email");
    txtbox.simulate("change", event);
    const test = component.instance();
    expect(component).toHaveLength(1);
  });
  it("Testing componentWillReceiveProps case error is a string", () => {
    const component = shallow(
      <LoginComponent auth={auth} loginUser={jest.fn()} errors={errors} />
    );
    const nextPropsSuccess = {
      auth: { isAuthenticated: true },
      errors: { error: "Error Message" }
    };
    component.setProps(nextPropsSuccess);
  });
  it("Testing componentWillReceiveProps case error is an object", () => {
    const component = shallow(
      <LoginComponent auth={auth} loginUser={jest.fn()} errors={errors} />
    );
    const nextPropsSuccess = {
      auth: { isAuthenticated: true },
      errors: { error: {} }
    };
    component.setProps(nextPropsSuccess);
  });
  it("Testing componentWillReceiveProps case not authenticated", () => {
    const component = shallow(
      <LoginComponent auth={auth} loginUser={jest.fn()} errors={errors} />
    );
    const nextPropsSuccess = {
      auth: { isAuthenticated: false },
      errors: { error: {} }
    };
    component.setProps(nextPropsSuccess);
  });
});
