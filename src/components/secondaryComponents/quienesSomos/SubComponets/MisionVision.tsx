import "./styles/MisionVision.scss"
import { IonIcon } from "@ionic/react"
import "./styles/MisionVision.scss"

const MisionVision = () => {
  return (
    <div className="container_mision_vision">
      <div className='card vision'>
        <IonIcon className='icon' icon='eye-outline' />
        <p className="titulo">NUESTRA VISIÓN</p>
        <p className="info">Nuestra visión es ser reconocidos como la compañía en servicios de Ingeniería e Infraestructura más confiable del país.</p>
      </div>
      <div className='card mision'>
        <IonIcon className='icon' icon='rocket-outline' />
        <p className="titulo"> NUESTRA MISIÓN</p>
        <p className="info">Nuestra misión es resolver las necesidades de Servicios de Ingeniería e Infraestructura de nuestros clientes, más allá de las obligaciones contractuales.</p>
      </div>
    </div>
  )
}

export default MisionVision