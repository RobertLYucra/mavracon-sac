import Actividades from "./Subcompentes/Actividades.hacemos"
import Portada from "../plantillas/Portada"
import HacemosPrincipal from "./Subcompentes/Hacemos.Principal"
import { useEffect } from "react"
import NextPrev from "../plantillas/NextPrev"
import hacemosPortada from "../../../images/portada_hacemos.jpg"

const QueHacemos = () => {

  useEffect(() => {
    document.title = "Que Hacemos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada section="QUE HACEMOS"
          titulo="Generamos valor en cada ciclo"
          imagen={hacemosPortada}
          description="Brindamos servicios integrados que abarcan el ciclo de vida 
                  completo de un proyecto, desde el planeamiento y constructabilidad, construcción, 
                  operación, transferencia al cliente, hasta el cierre de proyecto."/>
      </div>
      <div className="mt-10 mb-28">
        <Actividades />
      </div>
      <div className="hacemos-main mt-10" >
        <HacemosPrincipal />
      </div>
      {/* <div className="mas-servicios mt-6">
        <MasServicios />
      </div> */}
      <NextPrev
        nextTitle="PROYECTOS"
        nextLink="/proyectos"
      />
    </div>
  )
}

export default QueHacemos