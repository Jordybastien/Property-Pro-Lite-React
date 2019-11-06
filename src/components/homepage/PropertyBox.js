import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export const PropertyBox = ({ id, image, status, price, state, city, type }) => {
  let checkedStatus;
  if (status === "Available" || status === "available") {
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
            <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/price_xlrbdp.png" />
            Price: RWF {price}/per night
          </span>
          <span className="state">
            <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855021/state_hxq0gu.png" />
            State: {state}
          </span>
          <span className="city">
            <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/city_onuehv.png" />
            City: {city}
          </span>
          <span className="type">
            <img src="https://res.cloudinary.com/dodfpnbik/image/upload/v1572855020/type_mcs8vx.png" />
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
  price: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
export default PropertyBox;
