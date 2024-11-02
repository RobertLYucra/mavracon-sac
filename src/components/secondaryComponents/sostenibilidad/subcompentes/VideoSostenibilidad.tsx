import { IonIcon } from "@ionic/react"
import './styles/VideoSostenibilidad.scss'

const VideoSostenibilidad = () => {
    return (
        <div className="mas-servicio-card-sostenibilidad mb-8">
            <div className="mas-servicio-card">
                <h2>CONOCE MÁS DE NUSTRO INNOVACIÓN</h2>
                <div className="bottom-servicio-video">
                    <a className="" href="" >
                        <div className="blur-mas" />
                        <div className="fondo">
                            <span>
                                <IonIcon className='icon-play' icon="play-circle" />
                                <p>Capacitaciones que cambian vidas. Este fue nuestro proyecto de mujeres operadoras.</p>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoSostenibilidad