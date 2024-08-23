import './Inicio.scss'
import Actividades from "./subcomponents/Actividades";
const Inicio = () => {
  return (
    <div className="containers">
      <div className="index-panel">
        <div className="banner_home">
          <video
            src="https://www.stracon.com/site/media/PRINCIPAL-COMPRIMIDO.mp4"
            id="video_background"
            autoPlay
            muted
            playsInline
            className="video_background"
            loop
            poster="https://www.stracon.com/site/media/home.jpg">
          </video>
          <div className="bg_blur"></div>
          <div className="content">
            < div className="top">
              <div className="text_animation">
                <p className="display"> Diseñamos y </p>
                <p className="display display1"> construimos </p>
                <p className="display display1"> tu futuro </p>
              </div>
              <div className="imagen">
                <img src="https://www.shutterstock.com/image-photo/professional-engineering-worker-woman-quality-260nw-2281498631.jpg"></img>
              </div>
            </div>
            <div className="que-hacemos">
              <Actividades/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
