import { useState } from "react";

import { arrayFiller } from "../../utils";
import { backdropOpenHandler } from "../../utils";
import PasswordDisplay from "./PasswordDisplay/PasswordDisplay";
import Slider from "./Slider/Slider";
import PasswordOptions from "./PasswordOptions/PasswordOptions";
import StrengthDisplay from "./StrengthDisplay/StrengthDisplay";
import ArrowIcon from "../UI/ArrowIcon";
import classes from "./Form.module.css";

function Form() {
  const [passwordLength, setPasswordLength] = useState("0");
  const [pickedOptions, setPickedOptions] = useState({});
  const [passwordValue, setPasswordValue] = useState("");
  const [isCopiedToClipboard, setIsCopiedToClipboard] = useState(false);
  const [numberOfPickedOptions, setNumberOfPickedOptions] = useState(0);

  const allChars = {
    uppercase: arrayFiller(65, 90),
    lowercase: arrayFiller(97, 122),
    numbers: arrayFiller(48, 57),
    symbols: [
      ...arrayFiller(33, 47),
      ...arrayFiller(58, 64),
      ...arrayFiller(91, 96),
      ...arrayFiller(123, 126),
    ],
  };

  const onSliderChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsCopiedToClipboard(false);
    setNumberOfPickedOptions(0);

    let selectedChars = [];
    let arrayOfASCII = [];

    const currentNumberOfPickedOptions = Object.keys(pickedOptions)
      .map((option) => pickedOptions[option] === true)
      .reduce((acc, curr) => {
        if (curr !== true) {
          return acc + 0;
        }
        return acc + 1;
      }, 0);

    if (currentNumberOfPickedOptions === 0) {
      backdropOpenHandler();
      return;
    }

    Object.keys(pickedOptions).forEach((key) => {
      if (pickedOptions[key] === true) {
        selectedChars = [...selectedChars, ...allChars[key]];
      }
    });

    for (let i = 1; i <= passwordLength; i++) {
      const randomCharPassword = Math.round(
        Math.random() * (selectedChars.length - 0) + 0
      );
      arrayOfASCII.push(selectedChars[randomCharPassword]);
    }
    const generatedPassword = arrayOfASCII
      .map((char) => String.fromCharCode(char))
      .join("");

    setPasswordValue(generatedPassword);
    setNumberOfPickedOptions(currentNumberOfPickedOptions);
  };

  const checkboxChangeHandler = (e) => {
    const name = e.target.getAttribute("name");
    const isChecked = e.target.checked;
    setPickedOptions((prevState) => ({ ...prevState, [name]: isChecked }));
  };

  const onIconClickHandler = () => {
    setIsCopiedToClipboard(true);
    navigator.clipboard.writeText(passwordValue);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Password Generator</h1>
      <PasswordDisplay
        isCopied={isCopiedToClipboard}
        password={passwordValue}
        onCopyIconClick={onIconClickHandler}
      />
      <div className={classes["form-control--big"]}>
        <Slider displayedValue={passwordLength} onChange={onSliderChange} />
        <PasswordOptions onCheckboxClick={checkboxChangeHandler} />
        <StrengthDisplay numberOfColoredSquares={numberOfPickedOptions} />
        <button disabled={passwordLength === "0"}>
          Generate
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}

export default Form;
