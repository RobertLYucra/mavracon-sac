import { useEffect } from "react";
import Portada from "../plantillas/Portada";
import "./QuienesSomos.scss";
import MisionVision from "./SubComponets/MisionVision";
import Valores from "./SubComponets/Valores";
import EquipoDirectorio from "./SubComponets/EquipoDirectorio";
import EquipoSocios from "./SubComponets/EquipoSocios";
import NextPrev from "../plantillas/NextPrev";

const QuienesSomos = () => {
  useEffect(() => {
    document.title = "Quienes Somos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada
          section="QUIENES SOMOS"
          titulo="Flexibilidad a cualquier contexto"
          imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
          description="En Mavracon somos más que constructores. Somos diseñadores de tus sueños.
Con un legado de años de excelencia y experiencia, hemos sido pioneros en soluciones innovadoras y en diversos megaproyectos."
        />
      </div>

      <div className="mision_vision flex justify-center mb-5 mt-5">
        <MisionVision />
      </div>
      <div className="valores">
        <Valores />
      </div>
      <div className="nuestro_equipo_section mt-5">
        <EquipoDirectorio />
      </div>
      <div className="nuestro_equipo_section mt-5">
        <EquipoSocios />
      </div>
      <div className="prev_next_section_1">
        <NextPrev
          prevTitle="INNOVACION"
          prevLink="/innovacion-tecnologia"
          nextTitle="SOSTENIBILIDAD"
          nextLink="/sostenibilidad"
        />
      </div>
    </div>
  );
};

export default QuienesSomos;
