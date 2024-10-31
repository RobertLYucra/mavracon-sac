import { actividades } from '../../home/interfaces/Data'
import { IonIcon } from '@ionic/react';
import './styles/Actividades.hacemos.scss'

const Actividades = () => {

  return (
    <>
      <div className='que-hacer-2'>
        {actividades.map((actividad, i) => (
          <a className='actividades-redirect' key={i} href='#' >
            <div className='figura_card-hacemos'>
              <div className="contenido_card">
                <div className="description-container">
                  <span className='icon-span'><IonIcon className='icon' icon={actividad.icono} ></IonIcon> </span>
                  <h3 className='actividad'>{actividad.actividad}</h3> {/* Ejemplo: nombre de la actividad */}
                </div>
                <div className='ver_mas'>
                  <span><IonIcon className='more-icon' icon={actividad.iconarrow} ></IonIcon> </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default Actividades