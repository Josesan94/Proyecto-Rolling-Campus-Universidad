import { Fragment } from "react"
import * as ReactBootStrap from "react-bootstrap";

function Header() {
    return (
        <Fragment>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand href="#home">Universidad Tanto</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link href="#features">Becas</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#pricing">Acerca de Nosotros</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="Carreras" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Cs Juridicas y Politicas</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Humanidades</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Ingenierias</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Nutricion</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>

                            <ReactBootStrap.Button variant="warning">Ingresar</ReactBootStrap.Button>
                            <ReactBootStrap.Button variant="danger">Crear una Cuenta</ReactBootStrap.Button>

                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </Fragment>


    )

}

export default Header


