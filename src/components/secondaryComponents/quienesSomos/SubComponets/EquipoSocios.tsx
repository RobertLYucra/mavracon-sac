import { IonIcon } from "@ionic/react"
import { socios } from "../interfaces/Equipo"
import "./styles/EquipoSocio.scss"

const EquipoSocios = () => {
    return (
        <div className="nuestro_equipo_socio">
            <div className="socios">
                <p className="titulo_directorio">SOCIOS ESTRÁTETIGOS</p>
                <div className="cards_directorio">
                    {socios.map((ind, i) => (
                        <figure key={i}>
                            <img src={ind.foto}></img>
                            <div className="datos_personales">
                                <div className="datos">
                                    <p className="name">Ing. {ind.datosPersonales.nombre} {ind.datosPersonales.apellidoPaterno}</p>
                                    <p className="puesto">{ind.puesto}</p>
                                </div>
                                <div className="more-info">
                                    <a href="" className="linkedin"><IonIcon className="icon" icon="logo-linkedin" ></IonIcon></a>
                                    <a href="#" className="more">Ver más</a>
                                </div>
                            </div>

                        </figure>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EquipoSocios