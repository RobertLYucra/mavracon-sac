import { IonIcon } from "@ionic/react";
import { directorios } from "../interfaces/Equipo";
import "./styles/EquipoDirectorio.scss";

const EquipoDirectorio = () => {
  return (
    <div className="nuestro_equipo">
      <h2 className="equipo_titulo">NUESTRO EQUIPO</h2>

      <div className="directorio">
        <h3 className="titulo_directorio">Directorio</h3>

        <div className="cards_directorio">
          {directorios.map((directorio, index) => (
            <div className="member-card" key={index}>
              <div className="image-wrapper">
                <img
                  src={directorio.foto}
                  alt={`${directorio.datosPersonales.nombre} ${directorio.datosPersonales.apellidoPaterno}`}
                  loading="lazy"
                />
              </div>

              <div className="member-info-overlay">
                <div className="info-content">
                  <h4 className="name">
                    Ing. {directorio.datosPersonales.nombre}{" "}
                    {directorio.datosPersonales.apellidoPaterno}
                  </h4>
                  <p className="position">{directorio.puesto}</p>
                  
                  <div className="divider"></div>

                  <a
                    href={directorio.linkedin || "#"}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${directorio.datosPersonales.nombre}`}
                  >
                    <IonIcon icon="logo-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipoDirectorio;
