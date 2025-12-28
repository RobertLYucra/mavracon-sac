import { IonIcon } from "@ionic/react";
import "./styles/Hacemos.Principal.scss";
import { actividades } from "../interfaces/QueHacemosPrincipal"; // Removed ActionTypes import if unused
import { Link } from "react-router-dom";

const HacemosPrincipal = () => {

  return (
    <>
      <div className="que-hacemos-cards">
        {actividades.map((actividad, i) => (
          <section id={actividad.section} key={i}>
            <figure >
              <IonIcon className="more-icon-mobile" icon={actividad.icono} />
              <h3 className="titulo-mobile">{actividad.actividad}</h3>
              <div className="left-image-actividad">
                <img src={actividad.imagen} alt={actividad.actividad} />
              </div>
              <div className="right-cards-hacemos">
                <IonIcon className="more-icon" icon={actividad.icono} />
                <h3 className="titulo">{actividad.actividad}</h3>
                <p>{actividad.descripcion}</p>
                <Link
                  className="ver-mas-btn"
                  to={`/que-hacemos/${actividad.section}`}
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  VER MÁS
                </Link>
              </div>
            </figure>
          </section>
        ))}
      </div>
    </>
  );
};

export default HacemosPrincipal;
