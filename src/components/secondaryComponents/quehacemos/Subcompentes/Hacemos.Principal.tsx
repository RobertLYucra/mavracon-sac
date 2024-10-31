import { IonIcon } from "@ionic/react"
import './styles/Hacemos.Principal.scss'
import { actividades } from "../interfaces/QueHacemosPrincipal"

const HacemosPrincipal = () => {
  return (
    <div className="que-hacemos-cards">
      {actividades.map((actividad, i) => (
        <figure key={i}>
          <IonIcon className='more-icon-mobile' icon={actividad.icono} ></IonIcon>
          <h3 className="titulo-mobile">{actividad.actividad}</h3>
          <div className="left-image-actividad">
            <img src={actividad.imagen} />
          </div>
          <div className="right-cards-hacemos">
            <IonIcon className='more-icon' icon={actividad.icono} ></IonIcon>
            <h3 className="titulo"> {actividad.actividad} </h3>
            <p>{actividad.descripcion}</p>
            <a href={actividad.redireccion}>VER MÁS</a>
          </div>
        </figure>
      ))}

    </div>
  )
}

export default HacemosPrincipal