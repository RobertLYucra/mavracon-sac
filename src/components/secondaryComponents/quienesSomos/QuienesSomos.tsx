import { useEffect } from 'react';
import Portada from '../plantillas/Portada'
import "./QuienesSomos.scss"
import MisionVision from './SubComponets/MisionVision';
import Valores from './SubComponets/Valores';
import EquipoDirectorio from './SubComponets/EquipoDirectorio';
import EquipoSocios from './SubComponets/EquipoSocios';


const QuienesSomos = () => {

  useEffect(() => {
    document.title = "Quienes Somos - MAVRACON";
  }, []);

  return (
    <div className="containers">
      <div className="index-panel">
        <Portada section="QUIENES SOMOS"
          titulo="Nos adecuamos a cualquier"
          imagen="https://wallpapers.com/images/hd/animated-busy-construction-4d8ybs8zf86spdwu.jpg"
          description="Brindamos servicios integrados que abarcan el ciclo de vida completo de una mina, desde 
         el planeamiento y constructabilidad, construcción, operación, transferencia al cliente, hasta el cierre de mina."/>
      </div>

      <div className="nuestro_equipo_section mt-10">
        <EquipoDirectorio />
      </div>
      <div className="nuestro_equipo_section mt-10">
        <EquipoSocios />
      </div>
      <div className="mision_vision flex justify-center mb-10 mt-10">
        <MisionVision />
      </div>
      <div className="valores">
        <Valores />
      </div>

    </div>
  )
}

export default QuienesSomos