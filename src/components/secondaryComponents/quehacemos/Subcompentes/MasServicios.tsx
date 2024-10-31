import { IonIcon } from "@ionic/react"
import './styles/MasServicios.scss'

const MasServicios = () => {
    return (
        <div className="mas-servicio-card-main mb-8">
            <div className="mas-servicio-card">
                <h2>CONOCE MÁS DE NUSTROS SERVICIOS</h2>
                <div className="bottom-servicio-video">
                    <a className="" href="" >
                        <div className="blur-mas"/>
                        <div className="fondo">
                            <span>
                                <IonIcon className='icon-play' icon="play-circle" />
                                <p>Revisa los servicios que brindamos en esta infografía. </p>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MasServicios