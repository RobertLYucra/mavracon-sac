import { useState } from "react";
import { proyectos, Proyecto } from "../interfaces/Proyectos";
import "./styles/ProyectCard.scss";
import { ProjectCardMinimalista, ProjectCardList } from "./Card";
import { IonIcon } from "@ionic/react";
import { gridOutline, listOutline, chevronDownOutline } from "ionicons/icons";
import ProyectoModal from "./ProyectoModal";

const ProyectosCard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [tipoFilter, setTipoFilter] = useState("Todos");
  const [paisFilter, setPaisFilter] = useState("Todos");
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProyecto, setSelectedProyecto] = useState<Proyecto | null>(null);

  const handleOpenModal = (proyecto: Proyecto) => {
    setSelectedProyecto(proyecto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProyecto(null);
  };

  // Función para manejar el toggle de ver más/menos
  const handleToggleShowAll = () => {
    if (showAll) {
      // Si está mostrando todo, hacer scroll suave hacia arriba
      window.scrollTo({
        top: 150,
        behavior: "smooth",
      });
    }
    setShowAll(!showAll);
  };

  // Extraer tipos y países únicos
  const tipos = ["Todos", ...Array.from(new Set(proyectos.map((p) => p.tipo)))];
  const paises = [
    "Todos",
    ...Array.from(new Set(proyectos.map((p) => p.ubicacion.departamento))),
  ];

  // Filtrar proyectos
  const proyectosFiltrados = proyectos.filter((proyecto) => {
    const matchTipo = tipoFilter === "Todos" || proyecto.tipo === tipoFilter;
    const matchPais =
      paisFilter === "Todos" || proyecto.ubicacion.departamento === paisFilter;
    return matchTipo && matchPais;
  });

  // Limitar a 3 proyectos si showAll es false
  const proyectosMostrados = showAll
    ? proyectosFiltrados
    : proyectosFiltrados.slice(0, 3);

  return (
    <>
      {/* Sección de filtros */}
      <div className="filtros-section">
        <div className="filtros-header">
          <h2 className="filtros-title">
            Encuentra los proyectos que te interesan:
          </h2>

          <div className="filtros-controls">
            {/* Filtro Tipo */}
            <div className="filter-group">
              <label className="filter-label">TIPO DE PROYECTO</label>
              <select
                className="filter-select"
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value)}
              >
                {tipos.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            {/* Filtro País */}
            <div className="filter-group">
              <label className="filter-label">UBICACIÓN</label>
              <select
                className="filter-select"
                value={paisFilter}
                onChange={(e) => setPaisFilter(e.target.value)}
              >
                {paises.map((pais) => (
                  <option key={pais} value={pais}>
                    {pais}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle vista */}
            <div className="view-toggle">
              <button
                className={`toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                aria-label="Vista en cuadrícula"
              >
                <IonIcon icon={gridOutline} />
              </button>
              <button
                className={`toggle-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                aria-label="Vista en lista"
              >
                <IonIcon icon={listOutline} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Header de lista (solo visible en desktop) */}
      {viewMode === "list" && proyectosFiltrados.length > 0 && (
        <div className="list-header">
          <div className="list-header-content">
            <div className="list-header-index"></div>
            <div className="list-header-client">
              <span>CLIENTE</span>
            </div>
            <div className="list-header-project">
              <span>PROYECTO</span>
            </div>
            <div className="list-header-type">
              <span>TIPO</span>
            </div>
            <div className="list-header-status">
              <span>ESTADO</span>
            </div>
            <div className="list-header-action"></div>
          </div>
        </div>
      )}

      {/* Grid/Lista de proyectos */}
      <div className={`proyectos-containers ${viewMode}`}>
        {proyectosMostrados.map((proyecto, index) =>
          viewMode === "grid" ? (
            <ProjectCardMinimalista 
              key={index} 
              proyecto={proyecto}
              onOpenModal={() => handleOpenModal(proyecto)}
            />
          ) : (
            <ProjectCardList
              key={index}
              proyecto={proyecto}
              index={index + 1}
              onOpenModal={() => handleOpenModal(proyecto)}
            />
          )
        )}
      </div>

      {proyectosFiltrados.length === 0 && (
        <div className="no-results">
          <p>No se encontraron proyectos con los filtros seleccionados</p>
        </div>
      )}

      {/* Botón Ver más */}
      {proyectosFiltrados.length > 3 && (
        <div className="ver-mas-section">
          <button className="ver-mas-btn" onClick={handleToggleShowAll}>
            <span>{showAll ? "Ver menos" : "Ver más proyectos"}</span>
            <IonIcon
              icon={chevronDownOutline}
              className={`ver-mas-icon ${showAll ? "rotated" : ""}`}
            />
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProyecto && (
        <ProyectoModal
          proyecto={selectedProyecto}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default ProyectosCard;
