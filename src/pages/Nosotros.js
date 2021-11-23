import React from 'react'
import Logo from '../assets/images/Nosotros 1.png'
import Logo2 from '../assets/images/Nosotros 2.png'


function Nosotros() {
    return (

        <div>
            
            <div>
            <h1 className="titulo container-fluid col-12">Nuestra Historia</h1>
            <img className="imagenNosotros" src={Logo} /> <p></p>

            </div>
            <p className="texto">Nuestra Universidad fue reconocida oficialmente como tal y dotada de Personería Jurídica por Decreto Nº 6257 del Poder Ejecutivo de la Nación, el 6 de agosto de l965. </p>
            <p className="texto">Anima desde sus visionarios fundadores, un espíritu de verdadera Universitas Magistrorum et Scholarium, es decir, de profunda compenetración entre los distintos estamentos de su comunidad. Universidad que es ámbito de respuestas universales a las necesidades de desarrollo regional y nacional, dispuesta al compromiso de evangelizar la cultura en todos los campos de la educación sistemática, asistemática, de grado, a distancia y de postgrado.</p>
            <p className="texto">Los claustros de la Universidad son también receptores atentos de preocupaciones de eminentes profesores e intelectuales de nuestro país y del mundo, que así incorporan las aulas universitarias del Noroeste Argentino a las últimas resonancias de la inteligencia contemporánea. Y ha contribuido en gran medida para que todo esto sea así, la labor serena, coherente, firme y silenciosa de toda su comunidad, en más de sesenta y cuatro años de existencia real de la institución.</p>
            <h1 className="titulo"> Prosprectiva</h1>
            <img className="imagenNosotros" src={Logo2} /> <p></p>
            <p className="texto">Hoy, con tres sedes en la Provincia de Tucumán y una en la Ciudad Autónoma de Buenos Aires, con más de 25.000 egresados que contribuyen al crecimiento de empresas e instituciones en la región y en el mundo, trabajamos en conjunto por una Universidad donde existan más oportunidades y potencialidades de crecimiento que de restricciones; donde el diálogo interdisciplinario sea creciente, donde los currículos sean más flexibles y con mayores opciones de ingresos, graduación y post-graduación, donde la investigación y la docencia se integren mejor, y en la cual la formación general dé más plenitud a las disciplinas y profesiones.</p>
            <p className="texto">Por ello estamos obligados a dar respuesta a los cambios que nos interpelan y desafían a repensar como sociedad y como institución universitaria las formas y procedimientos para continuar cumpliendo nuestro rol y atender con calidad cada una de las misiones tradicionales, en el marco de un nuevo y dinámico paradigma histórico.</p>
            <p className="texto">Queremos conservar un ambiente intelectualmente estimulante, que anime el juicio crítico, la capacidad emprendedora, el compromiso que nace de la libertad y de una ética del sí, donde los valores vencen a los antivalores.</p>
            <p className="texto">Nos esforzaremos por una Universidad más abierta a la sociedad y al mundo, en una actitud dialogante y evangelizadora, al servicio de la Iglesia, fiel a su sello fundacional y consecuente con su carisma dominicano y su propia identidad y misión.</p>
            <p className="texto">La Universidad acompaña e impulsa el crecimiento y el desarrollo sustentable del contexto en el cual se encuentra inserta, mediante una fuerte alianza estratégica con empresas e instituciones privadas y públicas, para llevar a cabo actividades que tengan como objeto fortalecer a la comunidad.</p>
            <br></br><br></br>

        </div>
    )
}
export default Nosotros
