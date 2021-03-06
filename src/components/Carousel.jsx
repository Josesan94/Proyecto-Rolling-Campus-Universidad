import { Fragment, useState, useEffect } from "react"
// import axios from 'axios';
import { Carousel } from "react-bootstrap"
import logo1 from '../assets/images/The-Lawn.jpg'
import logo2 from '../assets/images/campus.jpg'
import logo3 from '../assets/images/universidad-norte-santo-tomas-aquino-unsta-798549-100014.jpg'


import '../styles/Carousel.css'

// const axiosInstance = axios.create({
//   baseUrl: "http://localhost:3001",
//   headers:{
//     Authorization: `Bearer ${localStorage.getItem('token')}`
//   }
// });

const Carrusel = () => {

  // const [ofertas,setOfertas] = useState([]);

  // const getOffers = () =>{
  
  //   axiosInstance.get("/ofertas")
  //   .then(resp=>{
  //     setOfertas(resp.data)
  //   })
  // }

  // useEffect(()=>getOffers(),[]);

    return (
        <Fragment>
        <Carousel fade ClassName="container-fluid"  >
  <Carousel.Item className="carousel-item"  >
    <img
      className="d-block w-100 "
      src={logo1}
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption">
      <h1>Universidad San Jose del Corazon de Roma</h1>
      <h3>¬°Inscripciones 2022 abiertas!</h3>
      <a href="/">
         
      </a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Institucional</h3>
      <h3>Conoce nuestra oferta academica</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Biblioteca propia</h3>
      <h1>Accede a todo el material educativo para el cursado</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Fragment>
    )
}


export default Carrusel;