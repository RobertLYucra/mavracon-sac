import { ArrowRight, Flag, Layers, MapPin } from "lucide-react";
import { Proyecto } from "../interfaces/Proyectos";
import "./styles/Card.scss";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { arrowForward } from "ionicons/icons";

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-"); 
};

// Componente para vista Grid
export const ProjectCardMinimalista = ({
  proyecto,
}: {
  proyecto: Proyecto;
  onOpenModal?: () => void;
}) => {
  const slug = proyecto.slug || slugify(proyecto.nombre);
  
  return (
    <div className="proyect_card">
      <Link to={`/proyectos/${slug}`} className="redirect_proyecto">
        <div className="card-image-wrapper">
          <img
            src={proyecto.imagen}
            alt={proyecto.nombre}
            className="card-image"
          />
          <div className="card-overlay" />
        </div>

        <div className="card-content">
          <div className="card-header">
            <span className="card-tag">{proyecto.categoria}</span>
            <h3 className="card-title">{proyecto.nombre}</h3>
          </div>

          <div className="card-details">
            <div className="card-detail-item">
              <MapPin className="detail-icon" />
              <div className="detail-content">
                <span className="detail-label">Ubicación</span>
                <span className="detail-value">
                  {proyecto.ubicacion.departamento}, {proyecto.ubicacion.pais}
                </span>
              </div>
            </div>

            <div className="card-detail-item">
              <Layers className="detail-icon" />
              <div className="detail-content">
                <span className="detail-label">Tipo</span>
                <span className="detail-value">{proyecto.tipo}</span>
              </div>
            </div>

            <div className="card-detail-item">
              <Flag className="detail-icon" />
              <div className="detail-content">
                <span className="detail-label">Estado</span>
                <span className="detail-value">{proyecto.estado}</span>
              </div>
            </div>
          </div>

          <div className="card-cta">
            <span>Ver proyecto</span>
            <ArrowRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

// Componente para vista Lista
export const ProjectCardList = ({
  proyecto,
  index,
}: {
  proyecto: Proyecto;
  index: number;
  onOpenModal?: () => void;
}) => {
  const slug = proyecto.slug || slugify(proyecto.nombre);

  return (
    <Link to={`/proyectos/${slug}`} className="project-card-list">
      <div className="list-content">
        <div className="list-index">
          <span>{String(index).padStart(2, "0")}</span>
        </div>

        <div className="list-client">
          <div className="list-mobile-label">Cliente</div>
          <h3>{proyecto.cliente}</h3>
        </div>

        <div className="list-project">
          <div className="list-mobile-label">Proyecto</div>
          <p>{proyecto.nombre}</p>
        </div>

        <div className="list-type">
          <div className="list-mobile-label">Tipo</div>
          <p>{proyecto.tipo}</p>
        </div>

        <div className="list-status">
          <div className="list-mobile-label">Estado</div>
          <p>{proyecto.estado}</p>
        </div>

        <div className="list-action">
          <button type="button" aria-label="Ver proyecto">
            <IonIcon icon={arrowForward}></IonIcon>
          </button>
        </div>
      </div>
    </Link>
  );
};
