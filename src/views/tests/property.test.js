import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";

import Property, { Property as PropertyComponent } from "../Property";
import { JestEnvironment } from "@jest/environment";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])();
const property = {
    propertyFound: false,
    singleProperty: {}
  };
let match = {
    params: {
        id:1
    }
}

describe("Single Property View", () => {
    it("should render Property View", () => {
        const component = shallow(
          <PropertyComponent property={property} match={match}getPropertyById={jest.fn()}/>
        );
        expect(component).toHaveLength(1);
      });
      // In case param is null
      it("should render Property View when param is null", () => {
        match.params.id = null;
        const component = shallow(
          <PropertyComponent property={property} match={match}getPropertyById={jest.fn()}/>
        );
        expect(component).toHaveLength(1);
      });
      it("Testing componentWillReceiveProps when params is valid", () => {
        match.params.id = 1;
        const component = shallow(<PropertyComponent property={property} match={match}getPropertyById={jest.fn()}/>);
        const nextPropsSuccess = {property: { singleProperty: { data: [{
            image_url: ''
        }] } }};
        component.setProps(nextPropsSuccess);
      });
      it("Testing componentWillReceiveProps when params is null", () => {
        match.params.id = null;
        const component = shallow(<PropertyComponent property={property} match={match}getPropertyById={jest.fn()}/>);
        const nextPropsSuccess = {property: { singleProperty: { data: [{
            image_url: ''
        }] } }};
        component.setProps(nextPropsSuccess);
      });
});