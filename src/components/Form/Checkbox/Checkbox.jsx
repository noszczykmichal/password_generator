import PropTypes from "prop-types";

import classes from "./Checkbox.module.css";

function Checkbox({ tag, name, onCheckBoxChange }) {
  return (
    <label htmlFor={name}>
      <input
        type="checkbox"
        name={name}
        onChange={onCheckBoxChange}
        id={name}
      />
      {tag}
      <span className={classes["checkbox"]} />
    </label>
  );
}

Checkbox.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired,
};

export default Checkbox;
