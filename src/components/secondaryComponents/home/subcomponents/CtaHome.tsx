import { IonIcon } from "@ionic/react";
import "./styles/CtaHome.scss";

const CtaHome = () => {
  return (
    <section className="cta-home-section">
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2>¿Listo para construir el futuro?</h2>
        <p>Expertos en Diseño Estructural y Construcción a tu servicio.</p>
        <a href="/contacto" className="cta-button">
          <span>Contáctanos Hoy</span>
          <IonIcon icon="arrow-forward-outline" />
        </a>
      </div>
    </section>
  );
};

export default CtaHome;
