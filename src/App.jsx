import { createPortal } from "react-dom";

import Form from "./components/Form/Form";
import Backdrop from "./components/UI/Backdrop";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <main>
      {createPortal(
        <>
          <Backdrop />
          <Modal />
        </>,
        document.getElementById("modal-root")
      )}
      <Form />
    </main>
  );
}

export default App;
