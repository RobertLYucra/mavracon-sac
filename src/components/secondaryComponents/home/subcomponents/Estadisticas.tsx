import { IonIcon } from "@ionic/react";
import "./styles/Estadisticas.scss";

const stats = [
  {
    value: "+18",
    label: "Años de Experiencia",
    icon: "time-outline",
  },
  {
    value: "+50",
    label: "Proyectos Ejecutados",
    icon: "briefcase-outline",
  },
  {
    value: "+1000",
    label: "Colaboradores",
    icon: "people-outline",
  },
  {
    value: "100%",
    label: "Compromiso",
    icon: "heart-outline",
  },
];

const Estadisticas = () => {
  return (
    <section className="estadisticas-section">
      <div className="estadisticas-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">
              <IonIcon icon={stat.icon} />
            </div>
            <div className="stat-info">
              <h2 className="stat-value">{stat.value}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estadisticas;
