import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { isBackdropOpen, backdropCloseHandler } from "../../utils";
import classes from "./Modal.module.css";

function Modal() {
  const modalRef = useRef();

  return (
    <CSSTransition
      nodeRef={modalRef}
      in={isBackdropOpen.value}
      timeout={500}
      classNames={{
        enterActive: classes["modal--open"],
        exitActive: classes["modal--closed"],
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.modal} ref={modalRef}>
        <div className={classes.modal__text}>
          <p>Pick at least one option!</p>
        </div>
        <div className={classes.modal__actions}>
          <button
            type="button"
            className={classes["modal__action"]}
            onClick={backdropCloseHandler}
          >
            Ok
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
