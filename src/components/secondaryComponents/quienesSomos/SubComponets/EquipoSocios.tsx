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
              <div className="member-card" key={index}>
                <div className="image-wrapper">
                  <img
                    src={socio.foto}
                    alt={`${socio.datosPersonales.nombre} ${socio.datosPersonales.apellidoPaterno}`}
                    loading="lazy"
                  />
                </div>

                <div className="member-info-overlay">
                  <div className="info-content">
                    <h4 className="name">
                      Ing. {socio.datosPersonales.nombre}{" "}
                      {socio.datosPersonales.apellidoPaterno}
                    </h4>
                    <p className="position">{socio.puesto}</p>
                    
                    <div className="divider"></div>

                    <a
                      href={socio.linkedin || "#"}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${socio.datosPersonales.nombre}`}
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

export default EquipoSocios;
