import React from 'react'
import '../../styles/register.css'
import {Container,Row,Col,Card,Button} from 'react-bootstrap'
import logo1 from '../../assets/images/IMG_3582-670x270.jpg'
import { Typography } from '@material-ui/core'
function Register() {
    return (
         
      <Card className="bg-white text-white students">
        
  <Card.Img src={logo1} alt="Card image" variant="top"/>
  <Card.ImgOverlay>
    <Card.Title><Typography variant="h6">Accede a nuestro campus virtual<b></b></Typography></Card.Title>
    <Card.Text>
    <Typography variant="body1">Tenemos la mas amplia gama de carreras, servicios y ayuda al estudiante<b></b></Typography>
    </Card.Text>
    <Card.Text><Typography variant="h6">Accede a nuestro campus virtual<b></b></Typography></Card.Text>
  </Card.ImgOverlay>
  
</Card>
    
    )
}

export default Register;
