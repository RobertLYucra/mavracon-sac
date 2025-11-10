import { actividades } from "../../home/interfaces/Data";
import { IonIcon } from "@ionic/react";
import "./styles/Actividades.hacemos.scss";

const Actividades = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 150; // Ajusta este valor (150px arriba del centro)

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="que-hacer-2">
        {actividades.map((actividad, i) => (
          <div
            className="actividades-redirect"
            key={i}
            onClick={() => scrollToSection(actividad.section)}
            style={{ cursor: "pointer" }}
          >
            <div className="figura_card-hacemos">
              <div className="contenido_card">
                <div className="description-container">
                  <span className="icon-span">
                    <IonIcon className="icon" icon={actividad.icono} />
                  </span>
                  <h3 className="actividad">{actividad.actividad}</h3>
                </div>
                <div className="ver_mas">
                  <span>
                    <IonIcon className="more-icon" icon={actividad.iconarrow} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Actividades;
