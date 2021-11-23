import React from 'react'
import promo from '../../assets/images/Program.jpg'


function Carreras() {
    return (
        <div className="programador"> 
            <div className="programacion">


                <h2 className="titulo3">Presentación</h2>
                <div className="text-center">
               <img src={promo} class="img-fluid" width="500px" alt="..."></img>
                   </div>  <p></p>
                <p className="texto2">La Argentina muestra una actividad econconómica robusta en el área de desarrollo de software, originada en y retroalimentándose con una cultura informática temprana y ampliamente extendida, al menos en los principales centros urbanos.</p>
                <p className="texto2">El aumento sostenido que se espera en la demanda global de servicios asociados a las tecnologías de la información y las comunicaciones (TICs) augura para el área un amplio
                    potencial de crecimiento.</p>
                <h2 className="titulo3"> Objetivos</h2>
                <p className="texto2">Formar técnicos/as capaces de elucidar e implementar soluciones en un amplio espectro de problemas asociados a las tareas de diseño/programación dentro del desarrollo de software, en un alcance razonable para un egresado/a pre-universitario, siendo capaces de aprovechar los conceptos aprehendidos en la carrera para pensar y resolver situaciones concretas, y basados en una amplia experiencia práctica obtenida durante el recorrido de la carrera.</p>
                <p className="texto2">En particular se espera que un egresado/a posea las siguientes capacidades:</p>
                <p className="texto2">- concebir una solución, implementarla y describir los conceptos que fundamentan las decisiones que tomó, ante un problema concreto de diseño y/o programación de complejidad mediana.</p>
                <p className="texto2">- construir programas informáticos teniendo en cuenta parámetros básicos de calidad (grado de test, claridad, mantenibilidad, robustez, extensibilidad) en varios lenguajes de programación, e incorporar nuevos lenguajes y estilos de programación al marco de los conceptos que conoce.</p>
                <p className="texto2">- manejar con fluidez el entorno que necesita un programador para trabajar: sistema operativo, entornos de desarrollo, entornos de ejecución.</p>
                <p className="texto2">- tener elementos que le faciliten el trabajo en grupo, tanto en lo actitudinal (compartir conocimientos, privilegiar colaboración a competencia, organizar tareas) como en lo técnico (conocer herramientas y entornos).</p>
                <p className="texto2">- incorporar a su práctica nuevas herramientas que vayan apareciendo en el ámbito profesional.</p>
                <p className="texto2">- comprender que las actividades de programación se inscriben muchas veces en un marco más amplio de proyectos de desarrollo de software, y cuáles son sus roles específicos dentro de un equipo de proyecto.</p>
                <h2 className="titulo3"> ¿Necesito Tener Conocimientos Previos en Informatica? </h2>
                <p className="texto2">Nuestra Universidad se caracteriza por el Prestigio y la excelencia en su Enseñanza, por lo cual no es necesario una Base en Informatica ya que con la Carrera de "Programador Universitario" vas a adquirir todos los conocimientos necesarios no solo para Utilizar la Pc, sino También las herramientas para ser un Programador Full-Stack</p>
                <h2 className="titulo3"> Plan de Estudio</h2>
                <p></p>
                <div class="container">
                    <div class="row">
                        <div class="col" >
                        <h3 className="color-white"> Primer Año</h3>
                        <p> -Introduccion a la Programacion </p>
                        <p> -C++ </p>
                        <p> -Logica </p>
                        </div>
                        <div class="col">
                        <h3> Segundo Año</h3>
                        <p>-HTML</p>
                        <p>-CSS</p>
                        <p>-Introduccion a las Bases de Datos No Relacionales</p>
                        </div>
                        <div class="col">
                        <h3 > Tercer Año</h3>
                        <p >-Phyton</p>
                        <p>-Analisis de Datos</p>
                        <p>-Herramientas Complementarias</p>
                        <p>-Desarrollo Web</p>
                        </div>
                        <div class="col">
                        <h3> Cuarto Año</h3>
                        <p>-Seguridad Informatica</p>
                        <p>-Programacion FullStack</p>
                        <p>-Proyecto de Integracion Final</p>
                        </div>
                    </div>
                </div>


            </div>
            </div>

    )
}

export default Carreras;