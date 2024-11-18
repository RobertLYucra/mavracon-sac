import { IonIcon } from "@ionic/react";
import { proyectos } from "../interfaces/Proyectos";
import "./styles/ProyectCard.scss"

const ProyectosCard = () => {
    return (
        <div>
            <div className="filtros-proyectos"></div>
            <div className="proyectos-containers">
                {proyectos.map((proyecto, i) => (
                    <figure className="proyect_card" key={i}>
                        <a href="" className="redirect_proyecto">
                            <div className="top">
                                <div className="t_link">
                                    <p>{proyecto.nombre}</p>
                                    <div className="icons">
                                        <div className="icons-container">
                                            <IonIcon
                                                className="more-icon"
                                                icon="arrow-forward"
                                            ></IonIcon>
                                            <IonIcon
                                                className="more-icon main-icon"
                                                icon="arrow-forward"
                                            ></IonIcon>
                                        </div>
                                    </div>
                                </div>
                                <div className="category">
                                    <p className="category-title"> PROYECTO  </p>
                                    <p className="category-name">{proyecto.categoria}</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <img src={proyecto.imagen} alt="" />
                                <div className="blur"></div>
                                <div className="info">
                                    <div className="lista">
                                        <IonIcon className="icon " icon="location-outline" />
                                        <div className="text-dato">
                                            <h3 className="title">UBICACIÓN</h3>
                                            <h3 className="dato">
                                                {proyecto.ubicacion.departamento}, {proyecto.ubicacion.pais}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="lista tipo_lista">
                                        <IonIcon className="icon" icon="shield-checkmark-outline" />
                                        <div className="text-dato">
                                            <h3 className="title">TIPO</h3>
                                            <h3 className="dato">{proyecto.tipo}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default ProyectosCard;
