import { useEffect } from 'react'
import Portada from '../plantillas/Portada'
import "./Innovacion.scss"
import InnovacionCards from './subcomponentes/InnovacionCards'
import VideoInnovacion from './subcomponentes/VideoInnovacion'

const Innovacion = () => {

    useEffect(() => {
        document.title = "Innovacion - MAVRACON";
      }, []);
      
    return (
        <div className="containers">
            <div className="index-panel">
                <Portada section="INNOVACION Y TECNOLOGÍA"
                    titulo="Anticiparse al cambio"
                    imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
                    description="Sabemos que las necesidades cambian de manera constante. Por eso buscamos no solo
                     implementar nuevas tecnologías, sino crear una cultura de innovación que nos permita optimizar
                      procesos y obtener la máxima eficiencia de nuestros recursos."/>
            </div>
            <div className='innovacion-eficiencia'>
                <div className='card-innovacion'>
                     <h3 className='titulo-innovacion'>MÁS INNOVACIÓN, MÁS EFICIENCIA</h3>
                     <p>Buscamos facilitar nuestra gestión diaria a todo nivel. Por eso hemos diseñado un 
                        proyecto interno que propone fomentar y agilizar la toma de decisiones, promover 
                        la comunicación y el trabajo en equipo, y  conseguir mejores resultados con mayor 
                        eficiencia. Su nombre es MAVRACON y tiene cuatro pilares.</p>   
                </div>
            </div>
            <div className="cards-innovacion">
                <InnovacionCards/>
            </div>
            <div className='videoInnovacion'>
                <VideoInnovacion/>
            </div>
        </div>
    )
}

export default Innovacion