import { IonIcon } from "@ionic/react";
import "./styles/Impacto.scss";

const Impacto = () => {
  return (
    <section className="our-impact">
      <div className="our-impact__container">
        <div className="our-impact__content">
          <span className="our-impact__label">Nuestro Impacto</span>
          <h2 className="our-impact__title">Ingeniería que cambia vidas</h2>
          <p className="our-impact__description">
            Contamos con amplia experiencia en iniciativas que generan un
            impacto positivo en las comunidades, ofreciendo soluciones
            sostenibles y responsables que mejoran la calidad de vida y
            promueven el desarrollo social en cada proyecto.
          </p>
          <a
            href="https://www.stracon.com/sostenibilidad/"
            className="our-impact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Ir a Sostenibilidad</span>
            <IonIcon icon="arrow-forward-outline" />
          </a>
        </div>

        <div className="our-impact__media">
          <a href="#video" className="our-impact__video">
            <div className="our-impact__video-overlay" />
            <div className="our-impact__video-content">
              <div className="our-impact__play">
                <IonIcon icon="play-circle" />
              </div>
              <p className="our-impact__video-caption">
                Capacitaciones que cambian vidas. Este fue nuestro proyecto de
                mujeres operadoras.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impacto;
