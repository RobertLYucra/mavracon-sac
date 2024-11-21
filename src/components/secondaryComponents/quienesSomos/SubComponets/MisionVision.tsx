import "./styles/MisionVision.scss"
import { IonIcon } from "@ionic/react"
import "./styles/MisionVision.scss"

const MisionVision = () => {
  return (
    <div className="container_mision_vision">
      <div className='card vision'>
        <IonIcon className='icon' icon='eye-outline' />
        <p className="titulo">NUESTRA VISIÓN</p>
        <p className="info">Ser el proveedor líder a nivel mundial de servicios de minería y construcción.</p>
      </div>
      <div className='card mision'>
        <IonIcon className='icon' icon='rocket-outline' />
        <p className="titulo"> NUESTRA MISIÓN</p>
        <p className="info">Ser el proveedor líder a nivel mundial de servicios de minería y construcción.</p>
      </div>
    </div>
  )
}

export default MisionVision