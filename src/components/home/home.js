import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "white",
        padding: 20,
      }}
    >
      <Link to="/">
        <div style={{ cursor: "pointer" }}>Rooms</div>
      </Link>
      <Link to="/facility">
        <div style={{ cursor: "pointer" }}>Facilities</div>
      </Link>
      <Link to="/contact">
        <div style={{ cursor: "pointer" }}>Contact</div>
      </Link>
      <Link to="/about">
        <div style={{ cursor: "pointer" }}>About</div>
      </Link>
    </div>
  );
};

export default Navbar;
