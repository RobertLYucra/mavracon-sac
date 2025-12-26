import { IonIcon } from "@ionic/react"
import "./styles/ProyectoGlobal.scss"
import Peru from '../../home/images/Peru.png'

const ProyectoGlobal = () => {
    return (
        <div className="global_proyecto">
            <div className="global_left">
                <div className='texts-descp' >
                    <span className="subtitle">MAVRACON EN EL MUNDO</span>
                    <h1 className="title">NUESTRAS OPERACIONES <br/> A NIVEL NACIONAL</h1>
                    <p className="description">
                        En Mavracon somos más que constructores, somos diseñadores de tus sueños. 
                        Con un legado de años de excelencia, hemos sido pioneros de soluciones 
                        innovadoras en diversos megaproyectos.
                    </p>
                </div>
                
                <div className='status-grid'>
                    <div className='status-item'>
                        <div className="status-dot current"></div>
                        <div className="status-info">
                            <span className="count">+15</span>
                            <p>PROYECTOS ACTUALES</p>
                        </div>
                    </div>
                    <div className='status-item'>
                        <div className="status-dot completed"></div>
                        <div className="status-info">
                            <span className="count">+40</span>
                            <p>PROYECTOS CULMINADOS</p>
                        </div>
                    </div>
                    <div className='status-item'>
                        <div className="status-dot subsidiary"></div>
                        <div className="status-info">
                            <span className="count">03</span>
                            <p>SUBSIDIARIAS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="global_right">
                <div className='map-container'>
                    <img className='mapa' src={Peru} alt="Mapa de Perú" />
                    
                    {/* Hotspots simulating operations in different regions */}
                    <div className="hotspot" style={{ top: '40%', left: '45%' }}>
                        <div className="pulse"></div>
                        <div className="tooltip">Norte</div>
                    </div>
                    <div className="hotspot" style={{ top: '55%', left: '50%' }}>
                        <div className="pulse"></div>
                        <div className="tooltip">Centro</div>
                    </div>
                    <div className="hotspot" style={{ top: '70%', left: '60%' }}>
                        <div className="pulse"></div>
                        <div className="tooltip">Sur</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectoGlobal