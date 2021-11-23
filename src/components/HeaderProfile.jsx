import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import Logo3 from '../assets/images/Logo.png';
import { ButtonSub } from './accountBox/common';

import useAuth from '../components/auth/useAuth';

function HeaderProfile() {
  const { user, logout } = useAuth();

  return (
    <Fragment>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className=""
      >
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
          <h2>Mi perfil</h2>
          <ReactBootStrap.Nav>
            <div>
              <ButtonSub type="submit" onClick={logout}>
                Salir
              </ButtonSub>
            </div>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </Fragment>
  );
}

export default HeaderProfile;
