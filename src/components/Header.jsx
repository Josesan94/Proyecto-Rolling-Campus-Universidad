import { Fragment } from "react"
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Header() {
    return (
        <Fragment>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand to ='/'>LOGO</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link className="nav-link" to='/becas'>Becas</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link to='/nosotros'>Acerca de Nosotros</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="Carreras" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item to='/cs-juridicas'>Cs Juridicas y Politicas</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item to='/humanidades'>Humanidades</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item to='/ingenierias'>Ingenierias</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item to='/nutricion'>Nutricion</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            
                          
                              <div className="loginbutton" >
                              <Button className="buttonClass" to='/login'>Ingresar</Button>
                              </div>
                            <div >
                            <ReactBootStrap.Button className="buttonClass" to='/registro'>Crear una Cuenta</ReactBootStrap.Button>
                            </div>
                            
                            
                            

                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </Fragment>


    )

}

export default Header


