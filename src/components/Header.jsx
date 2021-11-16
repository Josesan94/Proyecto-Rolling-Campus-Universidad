import { Fragment } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Logo3 from '../assets/images/Logo.png';

function Header() {
  return (
    <header className="header">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
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
          <ReactBootStrap.Nav.Link className="nav-link text-white" to="/">
            Universidad de Programación
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link as={Link} to={'/'} className="nav-link">
                Inicio
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                className="nav-link"
                as={Link}
                to={'/becas'}
              >
                Becas
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to={'/nosotros'}>
                Nosotros
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Carrera Promocional"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item as={Link} to={'/Carreras'}>
                  Programación Universitaria
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <div className="loginbutton">
                <Link to={'/login'}>
                  <Button className="buttonClass">Ingresar</Button>
                </Link>
              </div>
              <div>
                <Link to={'/register'}>
                  <Button className="buttonClass">Crea una cuenta</Button>
                </Link>
              </div>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </header>
  );
}

export default Header;
