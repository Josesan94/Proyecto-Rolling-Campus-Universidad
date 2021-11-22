
import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'
import Logo3 from "../assets/images/Logo.png";
import FormContact from "./FormContact";
import instagram from "../assets/images/instagram_internet_media_network_social_icon_123258.png"
import facebook from "../assets/images/facebook_internet_media_network_social_icon_123257.png"
import youtube from "../assets/images/YOUTUBE_icon-icons.com_65487.png"
import twit from "../assets/images/twit.png"

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
            <Link to='/sign-up'>¿Quienes somos?</Link>
            <Link to='/'>Testimonios</Link>
            <Link to='/'>Carreras</Link>
            
            
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <div>
            <Link to='/'>Instagram</Link>
            <img className="iconos" src={instagram} alt="" />

            </div>
            <div>
            <Link to='/'>Facebook</Link>
            <img className="iconos" src={facebook} alt="" />

            </div>
            <div>
            <Link to='/'>Youtube</Link>
            <img className="iconos" src={youtube} alt="" />

            </div>
            <div>
            <Link to='/'>Twitter</Link>
            <img className="iconos" src={twit} alt="" />

            </div>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
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


