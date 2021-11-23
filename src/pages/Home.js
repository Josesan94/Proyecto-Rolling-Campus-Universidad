import React from 'react';
import Carrusel from '../components/Carousel';
import Header from '../components/Header';
import Register from '../components/DatosAlumno/DatosAlumno';
import Cards from '../components/Cards';
import Becas from '../components/Becas/Becas';
import logito from '../assets/images/Durazno_Naranja_Europea_Elegante_Curvo_Texto_Logo_(1).png';
import logito2 from '../assets/images/Distribucion porcentual del alumnado historico.jpg';
import logito3 from '../assets/images/diseño.jpg';
import '../styles/news.css';
import '../styles/info.css';
import { Card, Button } from 'react-bootstrap';
import news1 from '../assets/images/17-07-19merito (1).jpg';
import news2 from '../assets/images/906901279380a788d217fdadb8ce0618.jpg';
import news3 from '../assets/images/register.jpg';
import news4 from '../assets/images/register.jpg';
import { Typography } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SchoolIcon from '@material-ui/icons/School';
import LaptopIcon from '@material-ui/icons/Laptop';
import { Button as Mbutton } from '@material-ui/core';
import FormContact from '../components/FormContact';
import Footer2 from '../components/footer2';
import Activa from '../components/Activa';
import { ButtonSub } from '../components/accountBox/common';
import styled from "styled-components";
import background from '../assets/images/founding.jpg';
import GlassCard from '../components/NoticiasCards/glasscard';
import ColumnFilter from '../components/TablaAlumno/columnFilter';
import { boxSizing } from '@mui/system';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    padding: '3rem'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Home() {
  const classes = useStyles();
  const bgStyles = {
    background: '#bdc3c7' /* fallback for old browsers */,
    background:
      '-webkit-linear-gradient(to right, #2c3e50, #bdc3c7)' /* Chrome 10-25, Safari 5.1-6 */,
    background: 'white',
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: '0.1px groove',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,1)',
  };
  return (
    <>
    
    <div className="carrusel-container ">
      <Carrusel />
      <div className="container">
          <Activa/> 
      </div>
      <Cards />

      {/* <Becas /> */}
      <div className="container"></div>

      {/* <div
        class="
              col-sm-12
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
      >
        <section
          className="
                row
                my-6
                mx-0
                p-0
                
                justify-content-center
                align-items-center
                
              "
          style={bgStyles}
        >
          <Typography align="center" variant="h3">
            Noticias academicas
          </Typography>
          <hr />
          <div class="row d-flex justify-content-center align-content-center">
            <Card
              style={{
                width: '24rem',
                margin: '1rem',
                border: 'none',
                boxShadow: '0 2px 5px 0 rgba(0,0,0, 1)',
                background:"rgba(53,53,53,0.8)"
              }}
              text="light"
            >
              <Card.Img
                variant="bottom"
                src={news1}
                width="100%"
                className="news-image"
              />
              <Card.Body>
                <Card.Title>
                  <Typography align="center" variant="h4">
                    {' '}
                    Primera camada
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography align="left" variant="h6" component="h4">
                    {' '}
                    Conoce la experiencia de los primeros egresados
                  </Typography>
                </Card.Text>
                <Button type="submit">Ver noticia</Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '24rem',
                margin: '1rem',
                border: 'none',
                boxShadow: '0 2px 5px 0 rgba(0,0,0, 1)',
                background:"rgba(53,53,53,0.8)"
              }}
              text="light"
              
            >
              <Card.Img src={news4} width="100%" className="news-image" />
              <Card.Body>
                <Card.Title>
                  <Typography align="center" variant="h4" component="h4">
                    {' '}
                    Premiados
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography align="left" variant="h6" component="h4">
                    {' '}
                    Nuestra universidad recibio el premio a la innovacion
                    educativa y tecnologica
                  </Typography>
                </Card.Text>
                <Button type="submit">Ver noticia</Button>
              </Card.Body>
            </Card>
            <Card
             style={{
              width: '24rem',
              margin: '1rem',
              border: 'none',
              boxShadow: '0 2px 5px 0 rgba(0,0,0, 1)',
              background:"rgba(53,53,53,0.8)"
            }}
            text="light"
            >
              <Card.Img src={news2} width="100%" className="news-image" />
              <Card.Body>
                <Card.Title>
                  <Typography align="center" variant="h4">
                    Curso de nivelacion inicial
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography align="center" variant="h6" component="h4">
                    {' '}
                    Registrate aqui para recibir toda la informacion del curso
                  </Typography>
                </Card.Text>
                <Button type="submit">Ver noticia</Button>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: '24rem',
                margin: '1rem',
                border: 'none',
                boxShadow: '0 2px 5px 0 rgba(0,0,0, 1)',
                background:"rgba(53,53,53,0.8)"
              }}
              text="light"
            >
              <Card.Img src={news3} width="100%" className="news-image" />
              <Card.Body>
                <Card.Title>
                  <Typography align="center" variant="h4">
                    Las nuevas laptops ya estan disponibles
                  </Typography>
                </Card.Title>
                <Card.Text>
                  <Typography align="left" variant="h6" display="block">
                    {' '}
                    Acercate a seccion alumno para que se te asigne la tuya
                  </Typography>
                </Card.Text>
                <Button type="submit">Ver noticia</Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </div> */}
     <div className=" cardss-creators"  
     style={{
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow:'10px 10px 10px rgba(53,53,53,0.5)',
      zIndex:-1
      }}>
        <div><h1>hola</h1></div>
       < GlassCard />
       
       < GlassCard />
       
      </div>

      

      <div className="metric-block container-fluid theme-dark">
        <div className="container">
          <div className="row cifer-row ">
            <div className="col-12"></div>
            <div className="row d-flex mt-4 mb-5 justify-content-center">
              <div className="col-12 col-md-4 align-items-center justify-content-center number py-4">
                <div className="row cifer-row">
                  <div className="col-4 d-flex text-right align-items-center justify-content-center   ">
                    <EmojiPeopleIcon color="inherit" fontSize="large" />
                  </div>
                  <div className="col-8 text-left">
                    <p className="cifra">+5400</p>
                  </div>
                </div>
                <div className="col-12 px-0 text-center">
                  <p className="name mb-1"> Alumnos nuevos</p>
                </div>
              </div>
              <div className="col-12 col-md-4 align-items-center justify-content-center number py-4">
                <div className="row cifer-row">
                  <div className="col-4 d-flex text-right align-items-center justify-content-center   ">
                    <SchoolIcon color="inherit" fontSize="large" />
                  </div>
                  <div className="col-8 text-left">
                    <p className="cifra">+1250</p>
                  </div>
                </div>
                <div className="col-12 px-0 text-center">
                  <p className="name mb-1"> Becas otorgadas</p>
                </div>
              </div>
              <div className="col-12 col-md-4 align-items-center justify-content-center number py-4">
                <div className="row cifer-row">
                  <div className="col-4 d-flex text-right align-items-center justify-content-center   ">
                    <LaptopIcon color="inherit" fontSize="large" />
                  </div>
                  <div className="col-8 text-left">
                    <p className="cifra">+2500</p>
                  </div>
                </div>
                <div className="col-12 px-0 text-center">
                  <p className="name mb-1"> Notebooks nuevas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex mt-4 justify-content-center ">
            <div className="col-12 col-lg-4 metric d-flex">
              
              <div className="col-12 col-md-8 box">
              <hr/>
                <p className="univ-info">Somos tu mejor opcion</p>
                <p className="author">
                  Junto con un gran equipo de profesores, staff y gerencia.
                  Otorgamos la mejor educacion del pais, el mejor ambiente
                  estudiantil, y las mejores condiciones para desarrollar
                  profesionales de excelencia humana y tecnica.
                </p>
                <p className="role"></p>
              </div>
            </div>
            <div className="col-12 col-lg-4 metric d-flex">
              <div className="col-12 col-md-8 box">
              <hr/>
                <p className="univ-info">Somos tu mejor opcion</p>
                <p className="author">
                  Junto con un gran equipo de profesores, staff y gerencia.
                  Otorgamos la mejor educacion del pais, el mejor ambiente
                  estudiantil, y las mejores condiciones para desarrollar
                  profesionales de excelencia humana y tecnica.
                </p>
                <p className="role"></p>
              </div>
            </div>
            
            <div className="col-12 col-lg-4 metric d-flex">
              
              <div className="col-12 col-md-8 box">
              <hr/>
                <p className="univ-info">Somos tu mejor opcion</p>
                <p className="author">
                  Junto con un gran equipo de profesores, staff y gerencia.
                  Otorgamos la mejor educacion del pais, el mejor ambiente
                  estudiantil, y las mejores condiciones para desarrollar
                  profesionales de excelencia humana y tecnica.
                </p>
                <p className="role"></p>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center my-4">
            <ButtonSub  className="button-more">
              <p>Mas sobre nosotros</p>
            </ButtonSub>
          </div>
          <div className="row d-flex justify-content-center m-1"></div>
        </div>
      </div>
      <div className="container-fluid logo-container mt-2 ">
        <div className={classes.root}>
          <Grid container spacing={6}>
            <Grid item xs>
              <img src={logito} alt="imagen de logo" className="img-grid" />
            </Grid>
            <Grid item xs>
              <img src={logito2} alt="imagen de logo" className="img-grid" />
            </Grid>
            <Grid item xs>
              <img src={logito3} alt="imagen de logo" className="img-grid" />
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer2 />
    </div>
    </>
  );
}

export default Home;