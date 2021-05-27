import React from "react";
import { Form, Modal } from "react-bootstrap";

const LoginModal = ({ setShow, show }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header className="d-flex justify-content-center">
        <h6 className="m-0">Log in or sign up</h6>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <h4 className="my-4">Welcome to Airbnb</h4>
        <div className="p-2 px-0 border border-1 rounded rounded-3">
          <Form.Control
            placeholder="Contry/Region"
            className="border-0 border-bottom"
          />
          <Form.Control placeholder="Phone number" className="border-0" />
        </div>
        <small className="text-secondary my-3">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.
        </small>
        <button className="btn btn-primary text-white">Continue</button>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
