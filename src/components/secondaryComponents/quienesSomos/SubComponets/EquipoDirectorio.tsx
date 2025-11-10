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
            <figure key={index}>
              <img
                src={directorio.foto}
                alt={`${directorio.datosPersonales.nombre} ${directorio.datosPersonales.apellidoPaterno}`}
              />

              <div className="datos_personales">
                <div className="datos">
                  <p className="name">
                    Ing. {directorio.datosPersonales.nombre}{" "}
                    {directorio.datosPersonales.apellidoPaterno}
                  </p>
                  <p className="puesto">{directorio.puesto}</p>
                </div>

                <div className="more-info">
                  <a
                    href={directorio.linkedin || "#"}
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${directorio.datosPersonales.nombre}`}
                  >
                    <IonIcon icon="logo-linkedin" />
                  </a>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipoDirectorio;
