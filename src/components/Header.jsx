import { Fragment } from "react"
import * as ReactBootStrap from "react-bootstrap";
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function Header() {
    return (
        <Fragment>
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark" >
                <ReactBootStrap.Container>
                <ReactBootStrap.Nav.Link className="nav-link text-white"  to='/'>LOGO</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav  className="me-auto">
                        <ReactBootStrap.Nav.Link as={Link} to={'/'} className="nav-link" >Inicio</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link className="nav-link" as={Link} to={'/becas'}>Becas</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/nosotros'}>Acerca de Nosotros</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.NavDropdown title="carreras" id="collasible-nav-dropdown">
                                <ReactBootStrap.NavDropdown.Item to='/cs-juridicas'>Cs Juridicas y Politicas</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item to='/humanidades'>Humanidades</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Item to='/ingenierias'>Ingenierias</ReactBootStrap.NavDropdown.Item>
                                <ReactBootStrap.NavDropdown.Divider />
                                <ReactBootStrap.NavDropdown.Item to='/nutricion'>Nutricion</ReactBootStrap.NavDropdown.Item>
                            </ReactBootStrap.NavDropdown>
                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            
                          
                              <div className="loginbutton" >
                              <Button  to='/login' className="buttonClass">Ingresar</Button>
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


