import Portada from "../plantillas/Portada"
import "./styles/Sostenibilidad.scss"
import CardsSostenibilidad from "./subcompentes/CardsSostenibilidad"
import VideoSostenibilidad from "./subcompentes/VideoSostenibilidad"
const Sostenenibilidad = () => {
    return (
        <div className="containers-sostenibilidad">
            <div className="index-panel">
                <Portada section="SOSTENIBILIDAD"
                    titulo="Construyendo un futuro mejor"
                    imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
                    description="En STRACON apostamos por el desarrollo de las comunidades en nuestras zonas de influencia. 
        Nuestras operaciones incluyen programas que promueven la equidad de género, incentivan el
         crecimiento personal de sus habitantes y potencian sus capacidades para transformar su vida 
         laboral, logrando, de esta manera, la paz social."/>
            </div>

            <div className='sostenibilidad-info'>
                <div className='card-innovacion'>
                    <h3 className='titulo-innovacion'>APOSTAMOS POR UN FUTURO SOSTENIBLE</h3>
                    <div className="informacion">
                    <p>Nos aseguramos de que nuestras operaciones se lleven a cabo de forma segura, con igualdad de condiciones para los colaboradores y que sean responsables con el medio ambiente y beneficiosas para las comunidades.</p>
                    <p className="mt-8">Es por ello que, en STRACON, nuestras acciones se basan en los indicadores ASG (Ambiental, Social y Gobernanza), los cuales nos guían para continuar con nuestro compromiso de seguir siendo una empresa sostenible.</p>
                    </div>
                </div>
            </div>

            <div className="indicadores ">
                <CardsSostenibilidad />
            </div>

            <div className='sostenibilidad-info'>
                <div className='card-innovacion'>
                    <h3 className='titulo-innovacion'>SOSTENIBILIDAD EN ACCIÓN</h3>
                    <p className="">Para implementar una flota autónoma en el proyecto Quellaveco, capacitamos a
                        mujeres para que operen los camiones en su etapa manual. En lugar de enfocar
                        su preparación en una tarea en específica, apuntamos a ampliar sus capacidades
                        a través de una formación que les sirva para el resto de su desarrollo laboral.
                        Estamos convencidos que la sostenibilidad cambia proyectos, carreras y vidas.</p>
                </div>
            </div>

            <div className='videoInnovacion '>
                <VideoSostenibilidad/>
            </div>
        </div>
    )
}

export default Sostenenibilidad