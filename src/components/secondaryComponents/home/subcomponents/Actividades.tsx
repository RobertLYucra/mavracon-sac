import { actividades } from '../interfaces/Data'
import { IonIcon } from '@ionic/react';
import './Actividades.scss'

const Actividades = () => {

  return (
    <>
      {actividades.map((actividad, i) => (
        <a  className='actividades-redirect' href='#' >
          <div key={i} className='figura_card'>
          <div className="contenido_card">
            <span><IonIcon className='icon' icon={actividad.icono} ></IonIcon> </span>
            <h3 className='actividad'>{actividad.actividad}</h3> {/* Ejemplo: nombre de la actividad */}
            <p className='description'>{actividad.descripcion}</p> {/* Ejemplo: descripción de la actividad */}
            <div className='ver_mas'>
              <p>{actividad.mas}  </p>
              <span><IonIcon className='more-icon' icon={actividad.iconarrow} ></IonIcon> </span>
            </div>
          </div>
        </div>
        </a>
      ))}
    </>
  )
}

export default Actividades