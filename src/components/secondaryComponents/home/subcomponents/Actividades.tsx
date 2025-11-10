import { actividades } from "../interfaces/Data";
import { IonIcon } from "@ionic/react";
import "./styles/Actividades.scss";

const Actividades = () => {
  return (
    <>
      <div className="que-hacer">
        {actividades.map((actividad, i) => (
          <a className="actividades-redirect" key={i} href={`/que-hacemos`}>
            <div className="figura_card">
              <div className="contenido_card">
                <div className="description-container">
                  <span className="icon-span">
                    <IonIcon className="icon" icon={actividad.icono}></IonIcon>{" "}
                  </span>
                  <h3 className="actividad">{actividad.actividad}</h3>
                  <p className="description">{actividad.descripcion}</p>
                </div>
                <div className="ver_mas">
                  <p className="ver-mas-text">{actividad.mas} </p>
                  <span>
                    <IonIcon
                      className="more-icon"
                      icon={actividad.iconarrow}
                    ></IonIcon>{" "}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Actividades;
