import React from 'react'
import estudiantes from '../assets/images/activa2.jpg'
import {Button} from "react-bootstrap"

function Activa() {
    return (
        <div className="flexbox-container">
        <div className="activas"> 
            <img class="img-fluid" src={estudiantes} alt="" />
        </div>
        <div className="activas-letras">
          <h1 className="activas-letras2"> Activa tu Educación</h1>
          <h2 className="activas-letras2"> Conoce nuestras ofertas academicas</h2> <p></p><p></p><p></p>
          <p className="activas-letras2">Nuestra Universidad Posee un gran catalogo de opciones para tu educación</p>
          <Button variant="primary">Quiero Inscribirme Ahora</Button>
        </div>
      </div>
    )
}

export default Activa
