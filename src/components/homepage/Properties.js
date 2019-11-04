import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Property from "./PropertyBox";
import { fetchAllProperties } from "../../actions/propertyActions";
class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    };
  }
  componentDidMount() {
    this.props.fetchAllProperties();
  }
  // componentWillReceiveProps({ properties }) {
  //   this.setState({ properties });
  // }
  render() {
    const { properties } = this.props.properties;
    console.log(properties)
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
                image={property.image_url}
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
Properties.propTypes = {
  properties: PropTypes.object,
  fetchAllProperties: PropTypes.func
};
const mapStateToProps = state => ({
  properties: state.properties
});
export default connect(
  mapStateToProps,
  { fetchAllProperties }
)(Properties);
