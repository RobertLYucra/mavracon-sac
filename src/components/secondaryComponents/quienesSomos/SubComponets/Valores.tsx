import { IonIcon } from "@ionic/react";
import { valores } from "../interfaces/Valores";
import "./styles/Valores.scss";

const Valores = () => {
  return (
    <section className="valores-somos">
      <div className="valores-container">
        <h2 className="titulo-section">NUESTROS VALORES</h2>

        <div className="valores-grid">
          {valores.map((valor, index) => (
            <a
              key={index}
              href={`#valor-${valor.nombreValor
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="valor-card"
            >
              <div className="card-header">
                <IonIcon className="valor-icon" icon={valor.icon} />
              </div>

              <div className="card-body">
                <h3 className="valor-titulo">{valor.nombreValor}</h3>
              </div>

              <div className="card-footer">
                <span className="valor-numero">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <IonIcon className="arrow-icon" icon="arrow-forward" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
