import React, { Component } from "react";
import Property from "./PropertyBox";
class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [
        {
          id: 1,
          image:
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441787/2_pnagsj.jpg",
          status: "Available",
          price: 15000,
          state: "Kigali",
          city: "Kigali",
          type: "2 bedroom"
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/3_loy1cq.jpg",
          status: "Sold",
          price: 30000,
          state: "Kicukiro",
          city: "Kigali",
          type: "3 bedroom"
        },
        {
          id: 3,
          image:
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/1_k8gvqv.jpg",
          status: "Available",
          price: 40000,
          state: "Gasabo",
          city: "Kigali",
          type: "King Size"
        },
        {
          id: 4,
          image:
            "https://res.cloudinary.com/dodfpnbik/image/upload/v1572441788/4_w3o5fj.jpg",
          status: "Sold",
          price: 50000,
          state: "Musanze",
          city: "North",
          type: "Studio"
        }
      ]
    };
  }
  render() {
    const { properties } = this.state;
    return (
      <React.Fragment>
        <section id="properties">
          <h1>Properties</h1>
          <h3>Here below are properties</h3>
          <div className="container">
            {properties.map(property => (
              <Property
                key={property.id}
                id={property.id}
                image={property.image}
                status={property.status}
                price={property.price}
                state={property.state}
                city={property.city}
                type={property.type}
              />
            ))}
          </div>
          <a type="submit" href="/properties" className="button-1">
            Show all properties
          </a>
        </section>
      </React.Fragment>
    );
  }
}

export default Properties;
