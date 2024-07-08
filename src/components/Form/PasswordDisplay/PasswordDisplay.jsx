import PropTypes from "prop-types";

import CopyIcon from "../../UI/CopyIcon";
import classes from "./PasswordDisplay.module.css";

function PasswordDisplay({ password, isCopied, onCopyIconClick }) {
  return (
    <div className={classes["form-control"]}>
      <input
        type="text"
        className={classes["password-display"]}
        value={password}
        readOnly
      />
      <p className={classes["is-copied-tag"]}>{isCopied ? "Copied" : ""}</p>
      <CopyIcon
        onCopy={onCopyIconClick}
        isCopied={isCopied}
        isDisabled={!password}
      />
    </div>
  );
}

PasswordDisplay.propTypes = {
  password: PropTypes.string.isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopyIconClick: PropTypes.func.isRequired,
};

export default PasswordDisplay;
