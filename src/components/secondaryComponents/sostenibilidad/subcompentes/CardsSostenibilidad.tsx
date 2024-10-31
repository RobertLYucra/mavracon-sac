import { IonIcon } from '@ionic/react'
import { indicador } from '../interfaces/indicadores'
import './styles/CardsSostenibilidad.scss'

const CardsSostenibilidad = () => {
  return (
    <div className="sostenibilidad-cards-detalle">
      {indicador.map((ind, i) => (
        <a key={i} href='#' >
          <IonIcon className='more-icon-mobile' icon={ind.icon} ></IonIcon>
          <h2 className="titulo">{ind.titulo}</h2>
          <IonIcon className='more-icon' icon="arrow-forward" ></IonIcon>
        </a>
      ))}
    </div>
  )
}

export default CardsSostenibilidad