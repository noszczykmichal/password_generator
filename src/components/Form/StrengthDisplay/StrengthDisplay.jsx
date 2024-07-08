import PropTypes from "prop-types";

import classes from "./StrengthDisplay.module.css";

function StrengthDisplay({ numberOfColoredSquares }) {
  let coloredSquares = [];
  let squareBackgroundColor = "#18171F";
  let displayTag = "";

  if (numberOfColoredSquares !== 0) {
    switch (numberOfColoredSquares) {
      case 1:
        squareBackgroundColor = "#F64A4A";
        displayTag = "too weak!";
        break;
      case 2:
        squareBackgroundColor = "#FB7C58";
        displayTag = "weak";
        break;
      case 3:
        squareBackgroundColor = "#F8CD65";
        displayTag = "medium";
        break;
      default:
        squareBackgroundColor = "#A4FFAF";
        displayTag = "strong";
    }

    coloredSquares = new Array(numberOfColoredSquares)
      .fill(null)
      .map((el, i) => (
        <div
          className={classes["filling-item"]}
          style={{ backgroundColor: `${squareBackgroundColor}` }}
          key={i}
        />
      ));
  }

  return (
    <div className={classes["strength-display"]}>
      <p className={classes["strength-display__title"]}>Strength</p>
      <div className={classes["strength-display__container"]}>
        <p className={classes["strength-display__tag"]}>{displayTag}</p>
        <div className={classes["strength-display__items"]}>
          <div className={classes["strength-display__item"]} />
          <div className={classes["strength-display__item"]} />
          <div className={classes["strength-display__item"]} />
          <div className={classes["strength-display__item"]} />
          <div className={classes["filling-items"]}>{coloredSquares}</div>
        </div>
      </div>
    </div>
  );
}

StrengthDisplay.propTypes = {
  numberOfColoredSquares: PropTypes.number.isRequired,
};

export default StrengthDisplay;
