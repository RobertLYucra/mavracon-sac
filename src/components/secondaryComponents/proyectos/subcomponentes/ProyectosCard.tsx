import { proyectosCarousel } from "../interfaces/Proyectos";
import "./styles/ProyectCard.scss";
import { ProjectCardMinimalista } from "./Card";

const ProyectosCard = () => {
  return (
    <div className="proyectos-containers">
      {proyectosCarousel.map((proyecto, index) => (
        <ProjectCardMinimalista key={index} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default ProyectosCard;
