import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { indicador } from "../interfaces/indicadores";
import "./styles/CardsSostenibilidad.scss";

const CardsSostenibilidad = () => {
  return (
    <section className="sostenibilidad-section">
      <div className="sostenibilidad-container">
        <div className="sostenibilidad-grid">
          {indicador.map((ind, index) => (
            <Link
              key={index}
              to={`/sostenibilidad/${ind.titulo
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="sostenibilidad-card"
            >
              <div className="card-header">
                <IonIcon className="indicador-icon" icon={ind.icon} />
              </div>

              <div className="card-body">
                <h3 className="indicador-titulo">{ind.titulo}</h3>
                <p className="indicador-desc">{ind.descripcion}</p>
              </div>

              <div className="card-footer">
                <IonIcon className="arrow-icon" icon="arrow-forward" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSostenibilidad;
