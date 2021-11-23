
import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'
import Logo3 from "../assets/images/Logo.png";
import FormContact from "./FormContact";
import instagram from "../assets/images/instagram_internet_media_network_social_icon_123258.png"
import facebook from "../assets/images/facebook_internet_media_network_social_icon_123257.png"
import youtube from "../assets/images/YOUTUBE_icon-icons.com_65487.png"
import twit from "../assets/images/twit.png"
import Header from './Header'

const Footer2 = () => {
    
    return (
      <div className="row">
        <div className='  footer-container '>
      <section className=' col md-4 footer-subscription'>
        <p className='footer-subscription-heading'>
          Dejanos tu consulta aqui. Te responderemos lo mas rapido posible
        </p>
        
        <div className='input-areas'>
          <FormContact />
        </div>
      </section>
      <div class=' col md-4 footer-links'>
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
          <h2>Redes Sociales</h2>
            <div>
            <Link to='/'>
            <img className="iconos" src={instagram} alt="" /></Link>

            </div>
            <br/>
            <div>
            <Link to='/'><img className="iconos" src={facebook} alt="" /></Link>
            

            </div>
            <br/>
            <div>
            <Link to='/'><img className="iconos" src={youtube} alt="" /></Link>
            

            </div>
            <div>
              <br/>
            <Link to='/'><img className="iconos" src={twit} alt="" /></Link>
            

            </div>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to={"/"} className='social-logo'>
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
         
        </div>
      </section>
    </div>
    </div>
        
        
    )
}

export default Footer2;