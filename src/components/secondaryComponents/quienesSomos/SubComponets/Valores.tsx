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
            <div
              key={index}
              className="valor-card"
              role="article"
            >
              <div className="card-content">
                <div className="icon-wrapper">
                    <IonIcon className="valor-icon" icon={valor.icon} />
                </div>

                <h3 className="valor-titulo">{valor.nombreValor}</h3>
                
                <div className="card-decoration">
                    <span className="valor-numero">
                    {String(index + 1).padStart(2, "0")}
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
