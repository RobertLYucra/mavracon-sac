import { useEffect } from 'react'
import Portada from '../plantillas/Portada'
import "./Innovacion.scss"
import InnovacionCards from './subcomponentes/InnovacionCards'
import VideoInnovacion from './subcomponentes/VideoInnovacion'

import portadaInnovacionFoto from "../../../images/portada_innovacion.jpeg"
import NextPrev from '../plantillas/NextPrev'

const Innovacion = () => {

    useEffect(() => {
        document.title = "Innovacion - MAVRACON";
    }, []);

    return (
        <div className="containers">
            <div className="index-panel">
                <Portada section="INNOVACION Y TECNOLOGÍA"
                    titulo="Estar un paso adelante"
                    imagen={portadaInnovacionFoto}
                    description="Entendemos que las necesidades evolucionan constantemente. Por eso, no solo adoptamos nuevas tecnologías, sino que fomentamos una cultura de innovación para optimizar procesos y maximizar la eficiencia de nuestros recursos." />
            </div>
            <div className='innovacion-eficiencia'>
                <div className='card-innovacion'>
                    <h3 className='titulo-innovacion'>MÁS INNOVACIÓN, MÁS EFICIENCIA</h3>
                    <p>Nos enfocamos en optimizar nuestra gestión diaria. Por eso, creamos MAVRACON, un proyecto interno que promueve una toma de decisiones ágil, mejora la comunicación y fortalece el trabajo en equipo, todo para lograr resultados más eficientes.</p>
                </div>
            </div>
            <div className="cards-innovacion">
                <InnovacionCards />
            </div>
            {/* <div className='videoInnovacion'>
                <VideoInnovacion />
            </div> */}
            <div className="prev_next_section_1">
                <NextPrev
                    prevTitle="PROYECTOS"
                    prevLink="/innovacion-tecnologia"
                    nextTitle="QUIENES SOMOS"
                    nextLink="/quienes-somos"
                />
            </div>
        </div>
    )
}

export default Innovacion