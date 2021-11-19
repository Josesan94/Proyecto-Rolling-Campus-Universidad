import { Fragment } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Logo3 from "../assets/images/Logo.png";

function HeaderProfile() {
  return (
    <Fragment>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" className="">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            <img
              src={Logo3}
              width="70"
              height="50"
              className="d-inline-flex"
              alt="React Bootstrap logo"
            />
          </ReactBootStrap.Navbar.Brand>
          <h2 >Nombre usuario</h2>
          
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </Fragment>
  );
}

export default HeaderProfile;