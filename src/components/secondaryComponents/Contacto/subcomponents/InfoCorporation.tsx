import { IonIcon } from "@ionic/react"
import { datosContacto } from "../Interfaces/Contacto"
import "./styles/InfoCorporation.scss"

const InfoCorporation = () => {
  return (
    <div className="contacto-info">
      <p className="title-datos">DATOS DEL CONTACTO</p>
      <ul className="container-datos">
        {
          datosContacto.map((dato,key)=>(
            <li key={key} className="li-datos">
              <a href={dato.url}> <IonIcon className="icon" icon={dato.icon}/>  </a>
              <p className="dato">{dato.valor}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default InfoCorporation