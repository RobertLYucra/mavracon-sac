import { IonIcon } from "@ionic/react";
import { socios } from "../interfaces/Equipo";
import "./styles/EquipoSocio.scss";

const EquipoSocios = () => {
    return (
      <div className="nuestro_equipo_socio">
        <div className="socios">
          <h3 className="titulo_directorio">Socios Estratégicos</h3>

          <div className="cards_directorio">
            {socios.map((socio, index) => (
              <figure key={index}>
                <img
                  src={socio.foto}
                  alt={`${socio.datosPersonales.nombre} ${socio.datosPersonales.apellidoPaterno}`}
                />

                <div className="datos_personales">
                  <div className="datos">
                    <p className="name">
                      Ing. {socio.datosPersonales.nombre}{" "}
                      {socio.datosPersonales.apellidoPaterno}
                    </p>
                    <p className="puesto">{socio.puesto}</p>
                  </div>

                  <div className="more-info">
                    <a
                      href={socio.linkedin || "#"}
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${socio.datosPersonales.nombre}`}
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

export default EquipoSocios;
