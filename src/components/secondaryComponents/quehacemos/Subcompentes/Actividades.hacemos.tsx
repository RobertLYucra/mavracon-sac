import { actividades } from "../../home/interfaces/Data";
import { IonIcon } from "@ionic/react";
import "./styles/Actividades.hacemos.scss";

const Actividades = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="actividades-grid">
      {actividades.map((actividad, i) => (
        <button
          key={i}
          className="actividad-card"
          onClick={() => scrollToSection(actividad.section)}
        >
          <div className="actividad-content">
            <IonIcon className="actividad-icon" icon={actividad.icono} />
            <h3 className="actividad-title">{actividad.actividad}</h3>
          </div>
          <IonIcon className="arrow-icon" icon="arrow-down" />
        </button>
      ))}
    </div>
  );
};

export default Actividades;
