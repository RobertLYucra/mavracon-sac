import { useEffect } from "react";
import Portada from "../plantillas/Portada";
import "./styles/Sostenibilidad.scss";
import CardsSostenibilidad from "./subcompentes/CardsSostenibilidad";
import NextPrev from "../plantillas/NextPrev";
import portadaimg from "../../../images/sostenibilidad_portada.png";
import VideoSostenibilidad from "./subcompentes/VideoSostenibilidad";

const Sostenenibilidad = () => {
    useEffect(() => {
        document.title = "Sostenibilidad - MAVRACON";
    }, []);

    return (
        <div className="containers-sostenibilidad">
            <div className="index-panel">
                <Portada
                    section="SOSTENIBILIDAD"
                    titulo="Hacia un futuro más prometedor"
                    imagen={portadaimg}
                    description="En MAVRACON impulsamos el desarrollo sostenible de las comunidades a través de iniciativas que promueven la equidad, el crecimiento profesional y la capacitación técnica, contribuyendo a la integración social y al fortalecimiento de las capacidades locales."
                />
            </div>

            <div className="sostenibilidad-info">
                <div className="card-innovacion">
                    <h3 className="titulo-innovacion">
                        APOSTAMOS POR UN FUTURO SOSTENIBLE
                    </h3>
                    <div className="informacion">
                        <p>
                            En MAVRACON, garantizamos operaciones seguras, inclusivas y
                            responsables con el medio ambiente y las comunidades. Nos guiamos
                            por los indicadores ASG (Ambiental, Social y Gobernanza) para
                            mantener nuestro compromiso con la sostenibilidad.
                        </p>
                    </div>
                </div>
            </div>

            <div className="indicadores">
                <CardsSostenibilidad />
            </div>

            {/* Detailed Pillars have been moved to separate pages */}

            <div className="sostenibilidad-info">
                <div className="card-innovacion">
                    <h3 className="titulo-innovacion">SOSTENIBILIDAD EN ACCIÓN</h3>
                    <p className="">
                        En nuestro enfoque de ingeniería y consultoría, capacitamos a
                        equipos para desarrollar habilidades clave que no solo cubren tareas
                        específicas, sino que promueven su crecimiento integral. Creemos que
                        la sostenibilidad transforma proyectos, carreras y comunidades,
                        impulsando un impacto positivo en cada etapa.
                    </p>
                </div>
            </div>

            <div className='videoInnovacion'>
                <VideoSostenibilidad />
            </div>
            
            <div className="prev_next_section_1">
                <NextPrev
                    prevTitle="QUIENES SOMOS"
                    prevLink="/quienes-somos"
                    nextTitle="CONTACTOS"
                    nextLink="/contacto"
                />
            </div>
        </div>
    );
};

export default Sostenenibilidad;
