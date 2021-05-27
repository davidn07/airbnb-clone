import React from "react";
import Logo from "assets/images/airbnb.svg";
import { Form, InputGroup } from "react-bootstrap";
import { ImSphere } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-white fixed-top p-2 d-flex justify-content-around align-items-center">
      <img src={Logo} alt="Logo" height="30px" className="d-md-block d-none" />
      <InputGroup className="input-width shadow bg-body d-flex align-items-center border rounded-pill">
        <Form.Control
          placeholder="Start you search"
          className="border-0 rounded-pill"
        />
        <FaSearch className="mx-2" />
      </InputGroup>
      <div className="align-items-center d-md-flex d-none">
        <p className="m-0">Become a host</p>
        <ImSphere className="mx-4" />
        <div className="border border-1 rounded-pill px-3 pb-1">
          <GiHamburgerMenu className="me-4" />
          <FaUserCircle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
