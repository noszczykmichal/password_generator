import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { isBackdropOpen, backdropCloseHandler } from "../../utils";
import classes from "./Backdrop.module.css";

function Backdrop() {
  const nodeRef = useRef();

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isBackdropOpen.value}
      timeout={300}
      classNames={{
        enterActive: classes["backdrop--open"],
        exitActive: classes["backdrop--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div
        className={classes.backdrop}
        onClick={backdropCloseHandler}
        ref={nodeRef}
      />
    </CSSTransition>
  );
}

export default Backdrop;
