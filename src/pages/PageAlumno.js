import React   from "react";
import styled from "styled-components";
import MateriasTable from "../components/TablaAlumno/table";

const AlumnoContainer = styled.div `
background-color: white;
  width: 100%;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  overflow: hidden;

  @media (max-width:1049px) {
    Table{
      width: 100%;
    }
    Table tr{
        display:flex;
        flex-direction: column;
        border:1px solid grey;
        padding:1em;
        margin-bottom: 1em;
    }
    Table thead{
      display:none
    }
}

  

`;

const Title = styled.h1`

font-size: large;
font-weight: bold;

`

const PageAlumno = () => {
  return (
      <AlumnoContainer>
          <Title>Tabla Alumno</Title>
          <MateriasTable/>
      </AlumnoContainer>
  )
};

export default PageAlumno;