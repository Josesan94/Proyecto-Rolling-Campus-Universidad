import React from "react";
import CardProfile from "./CardProfile";
import imgP1 from "../../assets/images/historial.jpg";
import imgP2 from "../../assets/images//dinero-ideas.jpg";
import imgP3 from "../../assets/images/acreditacion.jpg";
import Switch from "@material-ui/core/Switch";
import "../../styles/CardProfile.css";
import Grid from "@material-ui/core/Grid";
import { FormControlLabel } from "@material-ui/core";

import {  Link}   from "react-router-dom";
import Footer2 from '../footer2'

const cardss = [
  {
    id: 1,
    title: "Estado Academico",
    image: imgP1,
    url: "https://www.nypl.org/",
    text: "Obtenga su historia academica segun lo que necesite",
  },
  {
    id: 2,
    title: "Generar cupon de pago",
    image: imgP2,
    url: "https://www.uade.edu.ar/acerca-de-uade/uade-labs/",
    text: "Administre sus pagos dentro de nuestra plataforma",
  },
  {
    id: 3,
    title: "Acreditar pago",
    image: imgP3,
    url: "https://www.unsta.edu.ar/",
    text: "Acredite los pagos correspondientes en nuestro sistema",
  },
];

const CardsProfile = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>    <div class="container">
        <div class="row">
        <div
            class="
              col-sm-12 col-md-9
              px-2
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
          >
               <section
              class="
                row
                my-3
                me-3
                p-3
                d-flex
                justify-content-center
                align-items-center
                placaFondo
              "
              style={{background:"gray", boxShadow:"7px 7px 20px black",borderRadius:"1%"}}
            >
                <div class="row titulo"><h3> Mi Perfil</h3></div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs>
          <Link to={"/tables"}>
            <h1>Mis datos</h1>
          </Link>
        </Grid>

        <Grid item xs>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Usuario activo"
          />
        </Grid>
      </Grid>
      <div className="row d-flex justify-content-center align-content-center ">
      <div className="card-profile">
                  <div className="card-icon">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <div className="card-title">Historia Academica</div>
                  <div className="card-content">
                    Chequea tu historial academico por año, materia y fecha de cursada.
                  </div>
                  <div className="card-footer">
                    <a
                      href="/pages/"
                      style={{textDdecoration: "none", color: "var(--colorLetra)"}}
                      className="letraContraste"
                      >Saber más</a>
                  </div>
                </div>
                <div className="card-profile">
                  <div className="card-icon">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <div className="card-title">Genera tu cupon pago</div>
                  <div className="card-content">
                    Realiza los pagos de cuotas, aranceles y demas dentro de nuestro sistema de gestion de pagos
                  </div>
                  <div className="card-footer">
                    <a
                      href="/pages/"
                      style={{textDdecoration: "none", color: "var(--colorLetra)"}}
                      className="letraContraste"
                      >Saber más</a>
                  </div>
                </div>
                <div className="card-profile">
                  <div className="card-icon">
                    <i className="fas fa-ambulance"></i>
                  </div>
                  <div className="card-title">Acredita tu pago</div>
                  <div className="card-content">
                    Genera la acreditacion de tu pago de manera rapida y sencilla
                  </div>
                  <div className="card-footer">
                    <a
                      href="/pages/"
                      style={{textDdecoration: "none", color: "var(--colorLetra)"}}
                      className="letraContraste"
                      >Saber más</a >
                  </div>
                </div>
        </div>
        </section>
        
      </div>
      </div>
      
      </div>
      <Footer2 />
      </div>

  );
};

export default CardsProfile;
 {/* <div className="row ">
            
          {cardss.map((card) => (
            <div className="col-md-4 " key={card.id}>
              <CardProfile
                title={card.title}
                imageSource={card.image}
                url={card.url}
                text={card.text}
              />
            </div>
          ))}
        </div> */}