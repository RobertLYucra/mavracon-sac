import NextPrev from "../plantillas/NextPrev";
import "./Contacto.scss";
import EmailSender from "./subcomponents/EmailSender";
import { IonIcon } from "@ionic/react";
import { timeOutline, locationOutline, mailOutline, callOutline, logoFacebook, logoLinkedin, logoInstagram, logoYoutube } from "ionicons/icons";

const Contacto = () => {
  return (
    <div className="contacto-page">
      <div className="contacto-split-layout">
        {/* Left Column: Information */}
        <div className="info-panel">
          <div className="info-content">
            <h1 className="hero-title">Contáctanos</h1>
            <p className="hero-description">
              ¿Tienes un proyecto en mente? Estamos listos para ayudarte a construir el futuro.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <IonIcon icon={mailOutline} />
                </div>
                <div className="text-wrapper">
                  <span className="label">Correo Electrónico</span>
                  <a href="mailto:mavracon@gmail.com" className="value">mavracon@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <IonIcon icon={callOutline} />
                </div>
                <div className="text-wrapper">
                  <span className="label">Teléfono</span>
                  <a href="tel:+51927676456" className="value">+51 927 676 456</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <IonIcon icon={locationOutline} />
                </div>
                <div className="text-wrapper">
                  <span className="label">Ubicación</span>
                  <span className="value">Ayacucho, Perú</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <IonIcon icon={timeOutline} />
                </div>
                <div className="text-wrapper">
                  <span className="label">Horario de Atención</span>
                  <span className="value">Lun - Vie: 8am - 6pm</span>
                  <span className="sub-value">Sáb: 9am - 1pm</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Síguenos</h3>
              <div className="social-grid">
                <a href="#" className="social-btn"><IonIcon icon={logoFacebook} /></a>
                <a href="#" className="social-btn"><IonIcon icon={logoLinkedin} /></a>
                <a href="#" className="social-btn"><IonIcon icon={logoInstagram} /></a>
                <a href="#" className="social-btn"><IonIcon icon={logoYoutube} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="form-panel">
          <div className="form-container">
            <h2>Envíanos un mensaje</h2>
            <EmailSender />
          </div>
        </div>
      </div>
      
      <div className="contacto-navigation">
        <NextPrev
          prevTitle="SOSTENIBILIDAD"
          prevLink="/sostenibilidad"
        />
      </div>
    </div>
  );
};

export default Contacto;
