import { IonIcon } from "@ionic/react"
import { valores } from "../interfaces/Valores"
import "./styles/Valores.scss"


const Valores = () => {
    return (
        <div className="valores-somos">
            <p className="titulo-section">NUESTROS VALORES</p>
            <div className="valores-cards-detalle">
                {valores.map((ind, i) => (
                    <a key={i} href='#' >
                        <IonIcon className='more-icon-mobile' icon={ind.icon} ></IonIcon>
                        <h2 className="titulo">{ind.nombreValor}</h2>
                        <IonIcon className='more-icon' icon="arrow-forward" ></IonIcon>
                    </a>
                ))}
            </div>
        </div>

    )
}

export default Valores