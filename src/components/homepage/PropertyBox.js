import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PropertyBox = ({ id, image, status, price, state, city, type }) => {
  let checkedStatus;
  if (status === "Available") {
    checkedStatus = "available";
  } else {
    checkedStatus = "sold";
  }
  return (
    <React.Fragment>
      <Link to={`/property/${id}`}>
        <div className="box" id={id}>
          <img src={image} className="respic" />
          <span className={checkedStatus}>{status}</span>
          <span className="price">
            <img src="./src/img/icons/price.png" />
            Price: RWF {price}/per night
          </span>
          <span className="state">
            <img src="./src/img/icons/state.png" />
            State: {state}
          </span>
          <span className="city">
            <img src="./src/img/icons/city.png" />
            City: {city}
          </span>
          <span className="type">
            <img src="./src/img/icons/type.png" />
            Type: {type}
          </span>
        </div>
      </Link>
    </React.Fragment>
  );
};
PropertyBox.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
export default PropertyBox;
