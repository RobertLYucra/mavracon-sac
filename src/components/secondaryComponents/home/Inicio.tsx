import { useEffect } from 'react';
import './Inicio.scss'
import Actividades from "./subcomponents/Actividades";
import VideoImage from "./images/video-image.jpg"
import Global from './subcomponents/Global';
import { IonIcon } from '@ionic/react';
import Proyectos from './subcomponents/Proyectos';
import Impacto from './subcomponents/Impacto';


const Inicio = () => {
  useEffect(() => {
    document.title = "Inicio - MAVRACON";
  }, []);
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
                <p className="display"> Más de 12 años impulsando el desarrollo de nuestro pais</p>
              </div>
              <div className="right-video">
                <div className='text-desc'>
                  <h3>MIRA EL VIDEO</h3>
                  <IonIcon className='more-icon' icon="play-circle" />
                </div>
                <img className='video-image' src={VideoImage}></img>
              </div>
            </div>
            <div className="que-hacemos">
              <Actividades />
            </div>
          </div>
        </div>
        <div className='world_section'>
          <Global />
        </div>

        <div className='proyectos_section'>
          <Proyectos />
        </div>
        <div className='sostenibilidad_section'>
          <Impacto />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
