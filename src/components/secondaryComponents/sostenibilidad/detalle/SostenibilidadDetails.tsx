import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { indicador } from "../interfaces/indicadores";
import PilarDetalle from "../subcompentes/PilarDetalle";
import "./styles/SostenibilidadDetails.scss";
import imgAmbiental from "../../../../images/portada_hacemos.jpg";
import imgSocial from "../../../../images/sostenibilidad_portada.png";
import imgGobernanza from "../../../../images/portada_innovacion.jpeg";
import NotFound from "../../../maincomponents/NotFound/NotFound";

const SostenibilidadDetails = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const data = useMemo(() => {
    return indicador.find(
      (ind) => ind.titulo.toLowerCase().replace(/\s+/g, "-") === slug
    );
  }, [slug]);

  const getImageForPillar = (title: string) => {
      if (title.includes("AMBIENTAL")) return imgAmbiental;
      if (title.includes("SOCIAL")) return imgSocial;
      if (title.includes("GOBERNANZA")) return imgGobernanza;
      return imgAmbiental;
  };

  useEffect(() => {
    if (data) {
        document.title = `${data.titulo} - MAVRACON`;
    }
    
  }, [data]);

  if (!data) {
    return <NotFound />;
  }

  return (
    <div className="sostenibilidad-details-page">
      <div className="split-layout">
        {/* Left Panel: Image */}
        <div className="image-panel">
            <img src={getImageForPillar(data.titulo)} alt={data.titulo} />
        </div>

        {/* Right Panel: Content */}
        <div className="content-panel">
            <div className="top-nav">
                <Link to="/sostenibilidad" className="back-link">
                    <IonIcon icon="arrow-back" /> VOLVER
                </Link>
            </div>
            
            <PilarDetalle
                title={data.titulo}
                description={data.descripcion}
                features={data.caracts}
                icon={data.icon}
                // imageSrc prop is removed as image is now handled by parent
                isReversed={false}
            />
        </div>
      </div>
    </div>
  );
};

export default SostenibilidadDetails;
