import Actividades from "./Subcompentes/Actividades.hacemos"
import Portada from "../plantillas/Portada"
import HacemosPrincipal from "./Subcompentes/Hacemos.Principal"
import MasServicios from "./Subcompentes/MasServicios"
import { useEffect } from "react"

const QueHacemos = () => {

  useEffect(() => {
    document.title = "Que Hacemos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada section="QUE HACEMOS"
          titulo="Agregamos valor en cada etapa"
          imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
          description="Brindamos servicios integrados que abarcan el ciclo de vida 
                  completo de una mina, desde el planeamiento y constructabilidad, construcción, 
                  operación, transferencia al cliente, hasta el cierre de mina."/>
      </div>
      <div className="mt-10">
        <Actividades />
      </div>
      <div className="hacemos-main mt-10" >
        <HacemosPrincipal />
      </div>
      <div className="mas-servicios mt-6">
        <MasServicios />
      </div>

    </div>
  )
}

export default QueHacemos