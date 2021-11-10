import React from 'react'
import Carrusel from '../components/Carousel';

import Register from '../components/RegisterSection/Register';
import Cards from '../components/Cards';
import Becas from '../components/Becas/Becas';


function Home() {
    return (
        <div>
            <Carrusel />
            <div className="container-fluid d-flex justify-content-center">
            <h1>El futuro ha llegado a nuestra Universidad
              </h1>
              </div>
            <Cards />
           <Register />
           <Becas />
           
        </div>
    )
}

export default Home;

