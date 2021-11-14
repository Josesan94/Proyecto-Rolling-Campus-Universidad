import React, { Fragment } from "react";
//BOOSTRAP COMPONENTS
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo3 from "../assets/images/Logo.png";

function Footer(props) {
  return (
    <Fragment>
      <Navbar variant="dark">
        <Container>
          <Nav className="">
            <Row>
              <Col className="me-auto">
                <Navbar.Brand href="#home">
                  {" "}
                  <img
                    alt="Logo universidad"
                    src={Logo3}
                    width="100"
                    height="70"
                    // className="d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Col>
              <Col className="me-auto">
                <Nav.Link href="https://www.instagram.com/">Instagram</Nav.Link>
                <Nav.Link href="https://www.facebook.com/">Facebook</Nav.Link>
                <Nav.Link href="https://twitter.com">Twitter</Nav.Link>
              </Col>
              <Col className="me-auto">
                <Nav.Link href="#">Acerca de Nosotros</Nav.Link>
                <Nav.Link href="#">Ayuda</Nav.Link>
                <Nav.Link href="#">Privacidad</Nav.Link>
              </Col>

              <Nav.Link href="#" className="me-auto">
                &copy; Copyright 2021 - Universidad San Jose del Corazón de Roma
              </Nav.Link>
            </Row>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
}

export default Footer;
