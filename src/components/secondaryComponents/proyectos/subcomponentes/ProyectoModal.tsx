import { X, MapPin, Layers, Flag, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Proyecto } from "../interfaces/Proyectos";
import { useState, useEffect } from "react";
import "./styles/ProyectoModal.scss";
import { IonIcon } from "@ionic/react";
import { playCircleOutline } from "ionicons/icons";


interface ProyectoModalProps {
  proyecto: Proyecto;
  isOpen: boolean;
  onClose: () => void;
}

const ProyectoModal = ({ proyecto, isOpen, onClose }: ProyectoModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    ...(proyecto.galleryVideo || []).map(item => {
      const isString = typeof item === 'string';
      return {
        type: 'video' as const,
        url: isString ? item : item.url,
        thumbnail: !isString ? item.thumbnail : undefined
      };
    }),
    ...(proyecto.galleryImage || []).map(url => ({ type: 'image' as const, url })),
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    if (galleryItems.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (galleryItems.length > 0) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? galleryItems.length - 1 : prev - 1
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="proyecto-modal-overlay" onClick={handleBackdropClick}>
      <div className="proyecto-modal">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X />
        </button>

        <div className="modal-content">
          {/* Columna Izquierda - Galería */}
          <div className="modal-left">
            <div className="modal-gallery">
              {galleryItems.length > 0 ? (
                <>
                  <div className="gallery-main">
                    {galleryItems[currentImageIndex].type === 'video' ? (
                         <video
                            src={galleryItems[currentImageIndex].url}
                            className="gallery-image"
                            controls
                            autoPlay
                         />
                    ) : (
                        <img
                          src={galleryItems[currentImageIndex].url}
                          alt={`${proyecto.nombre} - Imagen ${currentImageIndex + 1}`}
                          className="gallery-image"
                        />
                    )}
                    
                    {galleryItems.length > 1 && (
                      <>
                        <button
                          className="gallery-nav gallery-prev"
                          onClick={prevImage}
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft />
                        </button>
                        <button
                          className="gallery-nav gallery-next"
                          onClick={nextImage}
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight />
                        </button>
                      </>
                    )}
                  </div>

                  {galleryItems.length > 1 && (
                    <div className="gallery-thumbnails">
                      {galleryItems.map((item, idx) => (
                        <button
                          key={idx}
                          className={`thumbnail ${idx === currentImageIndex ? "active" : ""}`}
                          onClick={() => setCurrentImageIndex(idx)}
                        >
                          {item.type === 'video' ? (
                                <div className="thumbnail-video-wrapper">
                                     {item.thumbnail ? (
                                         <img src={item.thumbnail} alt="Video thumb" className="thumbnail-image" />
                                     ) : (
                                         <video 
                                            src={`${item.url}#t=0.5`} 
                                            muted 
                                            preload="metadata"
                                            playsInline
                                            className="thumbnail-video" 
                                         /> 
                                     )}
                                     <div className="play-icon-small">
                                        <IonIcon icon={playCircleOutline} />
                                     </div>
                                </div>
                          ) : (
                                <img src={item.url} alt={`Miniatura ${idx + 1}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="gallery-main">
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.nombre}
                    className="gallery-image"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="modal-right">
            <div className="modal-header">
              <span className="modal-tag">{proyecto.cliente}</span>
              <h2 className="modal-title">{proyecto.nombre}</h2>
            </div>

            <div className="modal-info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <Building2 />
                </div>
                <div className="info-content">
                  <span className="info-label">PROYECTO</span>
                  <span className="info-value">{proyecto.categoria}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Flag />
                </div>
                <div className="info-content">
                  <span className="info-label">ESTADO</span>
                  <span className="info-value">{proyecto.estado}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Layers />
                </div>
                <div className="info-content">
                  <span className="info-label">TIPO</span>
                  <span className="info-value">{proyecto.tipo}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin />
                </div>
                <div className="info-content">
                  <span className="info-label">UBICACIÓN</span>
                  <span className="info-value">
                    {proyecto.ubicacion.departamento}, {proyecto.ubicacion.pais}
                  </span>
                </div>
              </div>
            </div>

            <div className="modal-section">
              <h3 className="section-title">Alcance del Proyecto</h3>
              <p className="section-text">{proyecto.alcance}</p>
            </div>

            {proyecto.descripcion && proyecto.descripcion.length > 0 && (
              <div className="modal-section">
                <h3 className="section-title">Descripción</h3>
                <ul className="description-list">
                  {proyecto.descripcion.map((desc, idx) => (
                    <li key={idx}>  {desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProyectoModal;
