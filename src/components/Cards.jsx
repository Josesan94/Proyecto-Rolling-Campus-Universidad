import React from "react";
import Card from "./Card";
import img1 from "../assets/images/library.jpg"
import img2 from "../assets/images/Students.png"
import img3 from "../assets/images/lab.jpg"


const cards = [
    {
        id:1,
        title: "Library",
        image: img1,
        url: "https://www.nypl.org/",
        text:"Obtenga la membresia para nuestra biblioteca"
    },
    {
        id:2,
        title: "Scientist",
        image: img2,
        url:"https://www.uade.edu.ar/acerca-de-uade/uade-labs/",
        text:"Nueva carrera de investigacion virosica"
    },
    {
        id:3,
        title: "Students",
        image: img2,
        url:"https://www.unsta.edu.ar/",
        text:"Gestione sus tramites dentro de su cuenta de alumno"
    }
]

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center   ">
            <div className="row ">
                {
                    cards.map(card => (
                        
                        <div  className="col-md-4 " key={card.id}>
                        <Card 
                        title={card.title} 
                        imageSource={card.image} 
                        url ={card.url}
                        text = {card.text}
                        />
                        </div>
                    ))
                }
                
                
                
            
            </div>
            
        </div>
    )
}


export default Cards;