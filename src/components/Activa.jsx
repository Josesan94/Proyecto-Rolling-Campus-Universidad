import React from 'react'
import estudiantes from '../assets/images/activa2.jpg'
import { ButtonSub } from './accountBox/common';

 


function Activa() {
    return (
        <div className="flexbox-container">
        <div className="activas"> 
            <img src={estudiantes} alt=""   style={{border:"1px solid black",borderBox:"10px 19px 10px rgba(53,53,53,0.8)"}}/>
        </div>
        <div className="activas-letras">
          <h1 className="activas-letras2"> Activá tu educación</h1>
          <h2 className="activas-letras2"> Conocé nuestra oferta académica</h2> <p></p><p></p><p></p>
          <p className="activas-letras2">Nuestra Universidad Posee un gran catalogo de opciones para tu educación</p>
          <ButtonSub type="submit" 
          >Quiero Inscribirme Ahora</ButtonSub>
        </div>
      </div>
    )
}

export default Activa;