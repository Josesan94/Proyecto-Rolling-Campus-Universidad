import React from 'react'
import imagen from '../assets/images/IMG_3582-670x270.jpg'

function BecasPage() {
    return (
        <div>
            <div>
            <h1 class="fw-bold text-white pt-3">Inscribite en nuestro programa de becas</h1>

            <p className="texto">Nuestra política institucional busca estimular el desarrollo de talento brindado apoyo especial a los estudiantes que muestren un desempeño académico notable y que, por este compromiso con su formación, sean merecedores de una distinción especial.</p>
            <p className="texto">Universidad de programación también quiere alentar y apoyar a los alumnos cuya situación económica desfavorable ponga en riesgo la continuidad de sus estudios y, en sentido de comunidad, ofrecemos programas de medias becas y becas completas. </p>
            <h2 className="text-white font-italic titulo2">La familia es lo primero</h2>
            <p className="texto"> Generaciones completas de estudiantes y personal han formado parte de esta casa de estudios, es por eso que, en agradecimiento atantos años de compañia, les ofrecemos programas de descuentos a aquellos parientes directos de alumnos, docentes, administrativos y personal de apoyo designado de la Universidad</p>
           
            <br></br>

            *<div class="container-fluid ">
                <img className="imagenNosotros" src={imagen} /> 
                
            </div>

            <br></br>

            <h3 className="text-white font-italic titulo2"> Requisitos </h3>
            <p className="texto">Para solicitarla el alumno deberá: Egresar con el mejor promedio de su promoción en el año inmediato anterior a su solicitud. Se entenderá por tal haber logrado un promedio de notas en los últimos tres años del nivel medio que, en ningún caso, podrá ser inferior a 8,50.</p> 
            <p></p>
            <h3 className="text-white font-italic titulo2"> Documentación</h3>
            <p></p>
            <p className="texto"> El Estudiante que desea calificar debe presentar el "Formulario de Beneficio Arancelario" otorgado por la Universidad.</p>
            <p className="texto"> Por Cualquier Duda o Consulta puede Mandar un correo a becasprogramar@gmail.com, o en su defecto presentarse en Tesorería para pedir mas Info.</p>
            <h3 className="text-white font-italic titulo2"> Tipos:</h3> <p></p>
            <p className="texto">-Razones Económicas</p>
            <p className="texto">-Parentezco entre Alumnos o Personal administrativos</p>
            <p className="texto">-Discapacidad</p>
            <p className="texto">-Mérito Academico</p>

        </div>

        <div class="container">
                <div class="row">
                    <div class="col text-center">
                    <button class="btn text-white btn-lg btn-warning ">¡Quiero saber más!</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default BecasPage;
