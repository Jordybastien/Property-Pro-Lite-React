import Enzyme, { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Adapter from "enzyme-adapter-react-16/build";
import { Provider } from "react-redux";

import PropertyBox, {
  PropertyBox as PropertyBoxComponent
} from "../homepage/PropertyBox";

Enzyme.configure({ adapter: new Adapter() });
const store = configureStore([thunk])();

describe("PropertyBox View", () => {
  const property = {
    id: 1,
    image: "image",
    status: "available",
    price: '100',
    state: "Kigali",
    city: "Kicukiro",
    type: "2 bedroom"
  };
  it("should render a propertybox component when status is available", () => {
    const component = shallow(
      <PropertyBoxComponent
        id={property.id}
        image={property.image}
        status={property.status}
        price={property.price}
        state={property.state}
        city={property.city}
        type={property.type}
      />
    );
    expect(component).toHaveLength(1);
  });
  it("should render a propertybox component when status is sold", () => {
      property.status='sold';
    const component = shallow(
      <PropertyBoxComponent
        id={property.id}
        image={property.image}
        status={property.status}
        price={property.price}
        state={property.state}
        city={property.city}
        type={property.type}
      />
    );
    expect(component).toHaveLength(1);
  });
});
