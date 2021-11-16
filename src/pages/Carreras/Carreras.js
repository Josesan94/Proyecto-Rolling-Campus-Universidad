import React from 'react'
import promo from '../../assets/images/Program.jpg'

function Carreras() {
    return (
        <div>
            <div className="programacion">
                <img src={promo}/>
            </div>
            <h1 className="titulo3">Presentación</h1>
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
        </div>
    )
}

export default Carreras
