import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, label}) => {
    return (
        <button type={type} className="button-signup large">
        {label}
      </button>
    )
}
Button.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
export default Button;
