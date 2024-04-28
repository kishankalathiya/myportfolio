import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { HouseFill } from "react-bootstrap-icons";

export default function Navbar() {
  return (
    <div className="navbar" style={{ display: "flex", justifyContent: "space-between" }}>
      <Link style={{ display: "flex", justifyContent: "start" }} className="navbarItem" to={"/"}>
        <HouseFill/>
      </Link>

      <div style={{ display: "flex", justifyContent: "end",marginRight:"4vw" }}>
        <Link className="navbarItem" to={"/aboutMe"}>
          About Me
        </Link>
        <Link className="navbarItem" to={"/portfolio"}>
          Portfolio
        </Link>
        <Link className="navbarItem" to={"/resume"}>
          Resume
        </Link>
      </div>
    </div>
  );
}
