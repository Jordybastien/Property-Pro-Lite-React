import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllProperties,
  getPropertyByType
} from "../actions/propertyActions";
import Property from "../components/homepage/PropertyBox";

class AllProperties extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllProperties();
  }
  componentWillReceiveProps({ properties }) {
    this.setState({ properties });
  }
  onChange(e) {
    this.props.getPropertyByType(e.target.value);
  }
  render() {
    const { properties } = this.props.properties;
    return (
      <React.Fragment>
        <section id="properties-container">
          <h1 className="underline">Properties</h1>
          <div className="content">
            <div className="types">
              <div className="" id="">
                <div className="" id="">
                  <h3 className="underline">Filter</h3>
                </div>
                <div id="" className="">
                  <div>
                    <input
                      type="checkbox"
                      className=""
                      value=""
                      id=""
                      onChange={this.onChange}
                    />
                    <label className="">&nbsp;&nbsp;&nbsp;&nbsp;Show All</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className=""
                      value="2 bedroom"
                      id=""
                      onChange={this.onChange}
                    />
                    <label className="">2 Bedroom</label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className=""
                      value="3 bedroom"
                      id=""
                      onChange={this.onChange}
                    />
                    <label className="">3 Bedroom</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className=""
                      value="4 bedroom"
                      id=""
                      onChange={this.onChange}
                    />
                    <label className="">4 bedroom</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="display">
              <div className="row">
                <div className="all-props">
                  {properties
                    .map(property => (
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
                    ))
                    .reverse()
                    .splice(0, 12)}
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <a href="#">&laquo;</a>
            <a className="active" href="#">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">&raquo;</a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  properties: state.properties
});
export default connect(
  mapStateToProps,
  { fetchAllProperties, getPropertyByType }
)(AllProperties);
