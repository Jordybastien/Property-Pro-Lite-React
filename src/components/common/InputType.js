import React from "react";
import PropTypes from 'prop-types';

const InputType = ({ label, type, id, name, placeholder, error, onChange }) => {

  return (
    <fieldset className="signup-fieldset">
      <label>{label}</label>
      <span className="important">*</span>
      <input
        type={type}
        className={error?"signup-fields-error":"signup-fields"}
        id={id}
        name={name}
        placeholder={placeholder}
        required
        autoFocus=""
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </fieldset>
  );
};
InputType.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func
}
export default InputType;
