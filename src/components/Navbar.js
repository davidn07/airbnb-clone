import React, { useState } from "react";
import Logo from "assets/images/airbnb.svg";
import { Form, InputGroup, Dropdown } from "react-bootstrap";
import { ImSphere } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className={
        colorChange
          ? `bg-white fixed-top p-2 d-flex justify-content-around align-items-center`
          : `bg-transperent fixed-top p-2 d-flex justify-content-around align-items-center`
      }
    >
      <img src={Logo} alt="Logo" height="30px" className="d-md-block d-none" />
      <InputGroup className="input-width shadow bg-body d-flex align-items-center border rounded-pill">
        <Form.Control
          placeholder="Start you search"
          className="border-0 rounded-pill"
        />
        <FaSearch className="mx-2" />
      </InputGroup>
      <div className="align-items-center d-md-flex d-none">
        <p className={colorChange ? "m-0 text-dark" : "m-0 text-white"}>
          Become a host
        </p>
        <ImSphere
          className={colorChange ? "mx-4 text-secondary" : "mx-4 text-white"}
        />
        <Dropdown>
          <Dropdown.Toggle
            className="rounded-pill"
            variant={colorChange ? "outline-dark" : "outline-light"}
            id="dropdown-basic"
            drop="start"
            noCaret
          >
            <GiHamburgerMenu
              className={
                colorChange ? "me-4 text-secondary" : "me-4 text-white"
              }
            />
            <FaUserCircle
              className={colorChange ? "text-secondary" : "text-white"}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setShow(true)}>Signup</Dropdown.Item>
            <Dropdown.Item onClick={() => setShow(true)}>Login</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <LoginModal setShow={setShow} show={show} />
    </div>
  );
};

export default Navbar;
