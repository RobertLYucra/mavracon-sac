import { useEffect } from "react";
import Portada from "../plantillas/Portada"
import ProyectosCard from "./subcomponentes/ProyectosCard";
import ProyectoGlobal from "./subcomponentes/ProyectoGlobal";



const Proyectos = () => {

  useEffect(() => {
    document.title = "Proyectos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada section="PROYECTOS"
          titulo="En toda superficie y condición"
          imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
          description="Brindamos servicios integrados que abarcan el ciclo de vida completo de una mina, desde 
         el planeamiento y constructabilidad, construcción, operación, transferencia al cliente, hasta el cierre de mina."/>
      </div>
      <div className="proyectos mt-20">
        <ProyectosCard/>
      </div>
      <div className="proyecto_global_1 mb-10">
        <ProyectoGlobal/>
      </div>
    </div>
  )
}

export default Proyectos