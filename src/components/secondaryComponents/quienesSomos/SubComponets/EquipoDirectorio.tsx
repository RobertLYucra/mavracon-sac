import { IonIcon } from "@ionic/react"
import { directorios } from "../interfaces/Equipo"
import "./styles/EquipoDirectorio.scss"

const EquipoDirectorio = () => {
    return (
        <div className="nuestro_equipo">
            <p className="equipo_titulo">NUESTRO EQUIPO</p>
            <div className="directorio">
                <p className="titulo_directorio">DIRECTORIO</p>
                <div className="cards_directorio">
                    {directorios.map((ind, i) => (
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

export default EquipoDirectorio