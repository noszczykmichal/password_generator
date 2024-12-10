import PropTypes from "prop-types";

import classes from "./Slider.module.css";

function Slider({ displayedValue, onChange }) {
  const maxValue = 20;

  return (
    <>
      <div className={classes["slider-control"]}>
        <h2 className={classes["slider-control__title"]}>Character Length</h2>
        <p className={classes["slider-control__display"]}>{displayedValue}</p>
      </div>
      <div className={classes["slider-container"]}>
        <input
          type="range"
          min="0"
          max={maxValue}
          value={displayedValue}
          onChange={onChange}
        />
        <div
          className={classes["slider-container__progress"]}
          style={{
            width: `${4.7 * displayedValue}%`,
          }}
        />
      </div>
    </>
  );
}

Slider.propTypes = {
  displayedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Slider;
