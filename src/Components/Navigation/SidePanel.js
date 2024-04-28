import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { List } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "./Navigation.css"

export default function SidePanel() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button style={{backgroundColor:"rgba(170, 58, 255, 0.5)",border:"none"}} onClick={handleShow}>
        <center>
          <List />
        </center>
      </Button>

      <Offcanvas responsive="sm" show={show} onHide={handleClose} className="sideBarContainer">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>Kishan Kalathiya</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="sideNavLinkContainer">
            <li className="nav-item">
              <Link className="navbarItem" to={"/"} onClick={handleClose}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbarItem" to={"/aboutMe"} onClick={handleClose}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbarItem" to={"/portfolio"} onClick={handleClose}>
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="navbarItem" to={"/resume"} onClick={handleClose}>
                Resume
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
