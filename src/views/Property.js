import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPropertyById } from "../actions/propertyActions";
import Properties from "../components/homepage/Properties";

export class Property extends Component {
  constructor() {
    super();
    this.state = {
      propertyFound: false,
      singleProperty: {}
    };
  }
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getPropertyById(this.props.match.params.id);
    }
  }
  componentWillReceiveProps({ property }) {
    const singleProperty = property.singleProperty.data[0];
    this.setState({ singleProperty });
    if (this.props.match.params.id) {
      this.props.getPropertyById(this.props.match.params.id);
    }
  }
  render() {
    const { data } = this.props.property.singleProperty;
    return (
      <React.Fragment>
        <section id="property-container">
          <h1 className="underline">Property Information</h1>
          <div className="content">
            <div className="display">
              <div className="row">
                <img src={data ? data[0].image_url : null} />
                <span className={data ? data[0].status : null}>
                  {data ? data[0].status : null}
                </span>
                <div className="info">
                  <div className="">
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/price_xlrbdp.png"
                          className="infopic"
                        />
                        Price:{" "}
                      </span>
                      <span className="info-item-col-2">
                        {data ? data[0].price : null} Frw
                      </span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855021/state_hxq0gu.png"
                          className="infopic"
                        />
                        State:{" "}
                      </span>
                      <span className="info-item-col-2">
                        {data ? data[0].state : null}{" "}
                      </span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/city_onuehv.png"
                          className="infopic"
                        />
                        City:
                      </span>
                      <span className="info-item-col-2">
                        {" "}
                        {data ? data[0].city : null}
                      </span>
                    </div>
                    <br />
                    <div className="info-item">
                      {" "}
                      <span className="info-item-col-1">
                        <img
                          src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/type_mcs8vx.png"
                          className="infopic"
                        />
                        Type:
                      </span>
                      <span className="info-item-col-2">
                        {" "}
                        {data ? data[0].type : null}
                      </span>
                    </div>
                    <br />

                    <div className="button-purchase">
                      <a type="submit" href="login.html" className="button-1">
                        Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="more-info">
                  <h1 className="underline">More Information</h1>
                  <br />
                  <p>
                    This is a property located in Kigali as shown up there it
                    has 2 rooms and it is suitable for your stay, to see where
                    it is located just scroll down to view the localization
                    below.
                  </p>
                </div>
              </div>
              <div className="maps">
                <h2 className="underline putcenter">Localisation</h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.0105606276884!2d30.10389248311537!3d-1.969412627286686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2srw!4v1561640905725!5m2!1sen!2srw"
                  width="100%"
                  height="450"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
            <div className="more-props">
              <h3 className="underline">More Properties</h3>
              <Properties />
            </div>
          </div>
          <button className="button-flag">Flag as fraudulent</button>
        </section>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  property: state.property
});

export default connect(
  mapStateToProps,
  { getPropertyById }
)(Property);
