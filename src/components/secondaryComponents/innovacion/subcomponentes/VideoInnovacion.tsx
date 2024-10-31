import { IonIcon } from "@ionic/react"
import './styles/VideoInnovacion.scss'

const VideoInnovacion = () => {
    return (
        <div className="mas-servicio-card-innovacion mb-8">
            <div className="mas-servicio-card">
                <h2>CONOCE MÁS DE NUSTRO INNOVACIÓN</h2>
                <div className="bottom-servicio-video">
                    <a className="" href="" >
                        <div className="blur-mas"/>
                        <div className="fondo">
                            <span>
                                <IonIcon className='icon-play' icon="play-circle" />
                                <p>Más segura y más eficiente. Conoce más sobre Quellaveco.</p>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoInnovacion