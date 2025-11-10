import { useEffect } from "react";
import Portada from "../plantillas/Portada"
import ProyectosCard from "./subcomponentes/ProyectosCard";
import ProyectoGlobal from "./subcomponentes/ProyectoGlobal";
import NextPrev from "../plantillas/NextPrev";

import PortadaImagen from "../../../images/portada_hacemos.jpg"


const Proyectos = () => {

  useEffect(() => {
    document.title = "Proyectos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada section="PROYECTOS"
          titulo="Afrontando cualquier obstáculo"
          imagen={PortadaImagen}
          description="Cada proyecto presenta desafíos únicos. Hemos ejecutado obras y consultorías en condiciones complejas, logrando resultados óptimos y cumpliendo con todos los objetivos." />
      </div>
      <div className="proyectos mt-5">
        <ProyectosCard />
      </div>
      <div className="proyecto_global_1 mb-10">
        <ProyectoGlobal />
      </div>
      <div className="prev_next_section_1">
        <NextPrev
          prevTitle="QUE HACEMOS"
          prevLink="/que-hacemos"
          nextTitle="INNOVACION"
          nextLink="/innovacion-tecnologia"
        />
      </div>
    </div>
  )
}

export default Proyectos