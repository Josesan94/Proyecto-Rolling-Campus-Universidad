import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo3 from '../assets/images/Logo.png';
import { ButtonSub } from './accountBox/common';

function Header() {
  return (
    <header className="header">
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Nav.Link as={Link} to="/">
            <ReactBootStrap.Navbar.Brand>
              <img
                src={Logo3}
                width="70"
                height="50"
                className="d-inline-flex"
                alt="React Bootstrap logo"
              />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link
            as={Link}
            to="/"
            className="nav-link text-white"
          >
            Universidad de Programación
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link as={Link} to="/" className="nav-link">
                Inicio
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                className="nav-link"
                as={Link}
                to={'/becas'}
              >
                Becas
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to="/nosotros">
                Nosotros
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Carrera Promocional"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item as={Link} to="/Carreras">
                  Programación Universitaria
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <div>
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', outline: 'none' }}
                >
                  <ButtonSub type="submit">Ingresar</ButtonSub>
                </Link>
              </div>
              <div>
                <Link
                  to="/register"
                  style={{ textDecoration: 'none', outline: 'none' }}
                >
                  <ButtonSub type="submit">Registrarse</ButtonSub>
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
