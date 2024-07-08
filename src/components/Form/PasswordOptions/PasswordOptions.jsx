import PropTypes from "prop-types";

import Checkbox from "../Checkbox/Checkbox";
import classes from "./PasswordOptions.module.css";

const checkboxLabels = [
  { name: "uppercase", tag: "Include Uppercase Letters" },
  { name: "lowercase", tag: "Include Lowercase Letters" },
  { name: "numbers", tag: "Include Numbers" },
  { name: "symbols", tag: "Include Symbols" },
];

function PasswordOptions({ onCheckboxClick }) {
  return (
    <fieldset className={classes.options}>
      {checkboxLabels.map((el) => (
        <Checkbox
          tag={el.tag}
          key={el.name}
          name={el.name}
          onCheckBoxChange={onCheckboxClick}
        />
      ))}
    </fieldset>
  );
}

PasswordOptions.propTypes = {
  onCheckboxClick: PropTypes.func.isRequired,
};

export default PasswordOptions;
