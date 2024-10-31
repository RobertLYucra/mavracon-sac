import Carousel from "./Carousel";
import "./styles/Proyectos.scss"


const Proyectos = () => {

  return (
    <div className="proyectos">
      <div className="top">
        <div className="left-pry">
          <h3 className="n-pry">NUSTROS PROYECTOS</h3>
          <h1>CONSTRUCCIÓN Y DISEÑO DE CALIDAD</h1>
        </div>
        <div className="right-pry">
          <a href=""> MIRA NUESTROS PROYECTOS </a>
        </div>

      </div>
      <div className="bottom">
        <div className="slider_desktop">
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default Proyectos