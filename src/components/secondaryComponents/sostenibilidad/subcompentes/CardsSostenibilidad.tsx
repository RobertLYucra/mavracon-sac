import { IonIcon } from "@ionic/react";
import { indicador } from "../interfaces/indicadores";
import "./styles/CardsSostenibilidad.scss";

const CardsSostenibilidad = () => {
  return (
    <section className="sostenibilidad-section">
      <div className="sostenibilidad-container">
        <div className="sostenibilidad-grid">
          {indicador.map((ind, index) => (
            <a
              key={index}
              href={`#indicador-${ind.titulo
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="sostenibilidad-card"
            >
              <div className="card-header">
                <IonIcon className="indicador-icon" icon={ind.icon} />
              </div>

              <div className="card-body">
                <h3 className="indicador-titulo">{ind.titulo}</h3>
              </div>

              <div className="card-footer">
                <IonIcon className="arrow-icon" icon="arrow-forward" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSostenibilidad;
