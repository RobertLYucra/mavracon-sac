import { IonIcon } from "@ionic/react"
import Mapa from '../images/mapamundi.png'
import "./styles/ProyectoGlobal.scss"

const ProyectoGlobal = () => {
    return (
        <div className="global_proyecto">
            <div className="global_left">
                <div className='texts-descp' >
                    <h3>MAVRACON EN EL MUNDO</h3>
                    <h1>NUESTRAS OPERACIONES A NIVEL NACIONAL</h1>
                    <p>En Mavracon somos mas que contructores, Nosotros somos diseñadores de tus sueños. Con un legado
                        de años de excelencia y experiencia, hemos sido pioneros de soluciones
                        innovadoras y pioneros en diversos megaproyectos.
                    </p>
                </div>
                <div className='status'>
                    <div className='status-projects'>
                        <IonIcon className='icon text-red-500' icon='ellipse' />
                        <p>PROYECTOS ACTUALES</p>
                    </div>
                    <div className='status-projects mid-status'>
                        <IonIcon className='icon text-blue-400' icon='ellipse' />
                        <p>PROYECTOS CULMINADOS</p>
                    </div>
                    <div className='status-projects'>
                        <IonIcon className='icon text-yellow-300' icon='ellipse' />
                        <p>SUBSIDIARIAS</p>
                    </div>
                </div>
            </div>

            <div className="global_right">
                <div className='imagen'>
                    <img className='mapa' src={Mapa} alt="" />
                </div>
                <div className='bonotes'>
                    <div className='btn'>
                        <p>Perú</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectoGlobal