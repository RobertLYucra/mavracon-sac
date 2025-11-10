import "./Portada.scss";

interface PortadaProps {
  section: string;
  titulo: string;
  imagen: string;
  description: string;
  imageAlt?: string;
}

const Portada: React.FC<PortadaProps> = ({
  section,
  titulo,
  imagen,
  description,
  imageAlt,
}) => {
  return (
    <section className="banner_portada">
      <img
        src={imagen}
        alt={imageAlt || titulo}
        id="video_background"
        className="image_background"
        loading="lazy"
      />
      <div className="bg_blur_portada" aria-hidden="true"></div>
      <div className="content-portada">
        <div className="principal">
          <div className="top-portada-p">
            <div className="section">
              <p className="section-text">{section}</p>
            </div>
            <div className="text_animation">
              <h1 className="display">{titulo}</h1>
              <h3 className="info">{description}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portada;
