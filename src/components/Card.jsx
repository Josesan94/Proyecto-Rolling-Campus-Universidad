import React from "react";
import PropTypes from 'prop-types'
import '../styles/cards.css'

const Card = ({title, imageSource,url,text}) => {
  
   return (
       <container>
       <div className="card text-center bg-dark animate__animated animate__fadeInUp " >
           <div className="overflow">
           <img src={imageSource}  alt="biblioteca" className="card-img-top"/>
           </div>
           
           <div className="card-body text-light" >
               <h4 className="card-title">{title}</h4>
               <p className="card-text text-secondary ">
                   {
                       text ? text : "coloque su texto"
                   }
                   
               
               </p>
               <a href={url} className=" btn btn-outline-secondary" target="_blank">Entra a nuestra Biblioteca
               </a>
           </div>
       </div>
       </container>
   )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    url:PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string
}

export default Card;