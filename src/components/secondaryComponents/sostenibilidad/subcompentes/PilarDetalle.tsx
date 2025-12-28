import { IonIcon } from "@ionic/react";
import { Caracteristicas } from "../interfaces/indicadores";
import "./styles/PilarDetalle.scss";

interface PilarProps {
  title: string;
  description: string;
  features: Caracteristicas[];
  icon: string;
  imageSrc?: string;
  isReversed?: boolean;
}

const PilarDetalle: React.FC<PilarProps> = ({
  title,
  description,
  features,
  icon,
  imageSrc,
  isReversed = false,
}) => {
  return (
    <section className={`pilar-section ${isReversed ? "reversed" : ""}`} id={`indicador-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="pilar-container">
        <div className="pilar-content">
          <div className="pilar-header">
            <div className="icon-wrapper">
              <IonIcon icon={icon} />
            </div>
            <h2 className="pilar-title">{title}</h2>
          </div>
          <p className="pilar-description">{description}</p>
          <ul className="pilar-features">
            {features.map((feature, index) => (
              <li key={feature.id} className="feature-item">
                <span className="feature-number">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span>{feature.desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="pilar-visual">
          {imageSrc ? (
            <div className="pilar-image-container">
                <img src={imageSrc} alt={title} />
            </div>
          ) : (
            /* Placeholder for future images or illustrative graphics */
            <div className="pilar-graphic-placeholder">
                <IonIcon icon={icon} className="watermark-icon" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PilarDetalle;
