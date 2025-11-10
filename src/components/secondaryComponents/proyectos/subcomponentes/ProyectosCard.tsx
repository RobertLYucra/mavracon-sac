import { useState } from "react";
import { proyectos } from "../interfaces/Proyectos";
import "./styles/ProyectCard.scss";
import { ProjectCardMinimalista, ProjectCardList } from "./Card";
import { IonIcon } from "@ionic/react";
import { gridOutline, listOutline } from "ionicons/icons";

const ProyectosCard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [tipoFilter, setTipoFilter] = useState("Todos");
  const [paisFilter, setPaisFilter] = useState("Todos");

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
              <label className="filter-label">PAÍS</label>
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

      {/* Grid/Lista de proyectos */}
      {viewMode === "list" && proyectosFiltrados.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-8 pb-4">
          <div className="flex items-center py-4 px-4 gap-6 border-b border-white/20">
            <div className="flex-shrink-0 w-16"></div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                CLIENTE
              </span>
            </div>
            <div className="flex-1 min-w-[180px]">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                PROYECTO
              </span>
            </div>
            <div className="flex-1 min-w-[200px]">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                TIPO
              </span>
            </div>
            <div className="flex-shrink-0 min-w-[120px]">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                ESTADO
              </span>
            </div>
            <div className="flex-shrink-0 w-10"></div>
          </div>
        </div>
      )}

      <div className={`proyectos-containers ${viewMode}`}>
        {proyectosFiltrados.map((proyecto, index) =>
          viewMode === "grid" ? (
            <ProjectCardMinimalista key={index} proyecto={proyecto} />
          ) : (
            <ProjectCardList
              key={index}
              proyecto={proyecto}
              index={index + 1}
            />
          )
        )}
      </div>

      {proyectosFiltrados.length === 0 && (
        <div className="no-results">
          <p>No se encontraron proyectos con los filtros seleccionados</p>
        </div>
      )}
    </>
  );
};

export default ProyectosCard;
