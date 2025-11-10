import { ArrowRight, Flag, Layers, MapPin } from "lucide-react";
import { Proyecto } from "../interfaces/Proyectos";

// Componente para vista Grid
export const ProjectCardMinimalista = ({
  proyecto,
}: {
  proyecto: Proyecto;
}) => {
  return (
    <div className="bg-[#101F3B] rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-[#f42534]/50 transition-all duration-300 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={proyecto.imagen}
          alt={proyecto.nombre}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1426]/40 to-[#0a1426]/90" />
      </div>

      <div className="p-6">
        <div className="mb-4">
          <span className="text-xs font-semibold text-[#f42534] uppercase tracking-wider">
            {proyecto.cliente }
          </span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-4">
            {proyecto.nombre}
          </h3>
        </div>

        <div className="space-y-3 py-4 border-t border-b border-white/10">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#f42534] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                Ubicación
              </span>
              <span className="text-sm font-medium text-white mt-0.5">
                {proyecto.ubicacion.departamento}, {proyecto.ubicacion.pais}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-[#f42534] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                Tipo
              </span>
              <span className="text-sm font-medium text-white mt-0.5">
                {proyecto.tipo}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Flag className="w-5 h-5 text-[#f42534] flex-shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                Estado
              </span>
              <span className="text-sm font-medium text-white mt-0.5">
                {proyecto.estado}
              </span>
            </div>
          </div>
        </div>

        <button className="w-full mt-6 flex items-center justify-center gap-3 px-6 py-3 bg-[#f42534] rounded-xl text-white font-semibold transition-all duration-300 hover:bg-[#a11720] hover:shadow-[0_4px_20px_rgba(244,37,52,0.4)] hover:-translate-y-1 active:translate-y-0 group/btn">
          <span>Ver detalles</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
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
}) => {
  return (
    <div className="border-b border-white/10 hover:bg-white/5 transition-all duration-300 group">
      <div className="card-list-1 justify-between flex items-center py-8 px-4 gap-6">
        {/* Número de índice */}
        <div className="flex-shrink-0 w-16">
          <span className="text-2xl font-light text-[#f42534]/60">
            {String(index).padStart(2, "0")}
          </span>
        </div>

        {/* Cliente */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-semibold text-white">
            {proyecto.cliente}
          </h3>
        </div>

        {/* Proyecto */}
        <div className="flex-1 min-w-[180px]">
          <p className="text-base font-normal text-white/90">{proyecto.nombre}</p>
        </div>

        {/* Tipo */}
        <div className="flex-1 min-w-[200px]">
          <p className="text-base font-normal text-white/90">{proyecto.tipo}</p>
        </div>

        {/* Estado */}
        <div className="flex-shrink-0 min-w-[120px]">
          <p className="text-base font-normal text-white/90">
            {proyecto.estado}
          </p>
        </div>

        {/* Botón de acción */}
        <div className="flex-shrink-0">
          <button className="p-2 text-[#f42534] transition-all duration-300 group-hover:translate-x-1">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
