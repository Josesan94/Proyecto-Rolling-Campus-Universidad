
import React from "react";
import { Link } from "react-router-dom";
import { Button } from './Button';
import '../styles/footer.css'
import Logo3 from "../assets/images/Logo.png";
import FormContact from "./FormContact";

const Footer2 = () => {
    
    return (
        <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Dejanos tu consulta aqui. Te responderemos lo mas rapido posible
        </p>
        
        <div className='input-areas'>
          <FormContact />
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/sign-up'>Quienes somos</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Carrera</Link>
            
            
          </div>
          <div class='footer-link-items'>
            <h2>Contactanos</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Sponsors</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img
                    alt="Logo universidad"
                    src={Logo3}
                    width="100"
                    height="70"
                    // className="d-inline-block align-top"
                  />
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Universidad San Jose del Corazón de Roma © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>

        
        
    )
}

export default Footer2;