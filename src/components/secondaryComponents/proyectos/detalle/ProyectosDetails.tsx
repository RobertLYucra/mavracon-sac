import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline, closeOutline, playCircleOutline } from "ionicons/icons";
import { proyectos as projectsList } from "../interfaces/Proyectos";
import NextPrev from "../../plantillas/NextPrev";
import NotFound from "../../../maincomponents/NotFound/NotFound";
import "./styles/ProyectosDetails.scss";

// Utility to slugify if not present
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .trim()
    .replace(/\s+/g, "-") 
    .replace(/[^\w\-]+/g, "") 
    .replace(/\-\-+/g, "-"); 
};

const ProyectosDetails = () => {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Synchronous lookup since 'proyectos' is static
  const data = projectsList.find((p) => {
    const pSlug = p.slug || slugify(p.nombre);
    return pSlug === slug;
  });

  if (!data) return <NotFound />;

  const galleryItems = [
    ...(data.galleryVideo || []).map(item => {
      const isString = typeof item === 'string';
      return {
        type: 'video' as const,
        url: isString ? item : item.url,
        thumbnail: !isString ? item.thumbnail : undefined,
        title: !isString ? item.title : undefined
      };
    }),
    ...(data.galleryImage || []).map(url => ({ type: 'image' as const, url })),
  ];

  return (
    <div className="proyectos-details-page">
      <div className="split-layout">
        {/* Left Panel - Image */}
        <div className="image-panel">
          <img src={data.imagen} alt={data.nombre} />
        </div>

        {/* Right Panel - Content */}
        <div className="content-panel">
          <div className="top-nav">
            <Link to="/proyectos" className="back-link">
              <IonIcon icon={arrowBackOutline} /> VOLVER
            </Link>
          </div>

          <div className="project-header">
            <span className="project-category">{data.cliente} / {data.categoria}</span>
            <h1>{data.nombre}</h1>
            
            <div className="project-meta-grid">
                <div className="meta-item">
                    <h4>UBICACIÓN</h4>
                    <p>{data.ubicacion.departamento || "Perú"}</p>
                </div>
                <div className="meta-item">
                    <h4>TIPO</h4>
                    <p>{data.tipo}</p>
                </div>
                 <div className="meta-item">
                    <h4>ESTADO</h4>
                    <p>{data.estado}</p>
                </div>
            </div>
          </div>

          <div className="project-description">
            <h3>Alcance del Proyecto</h3>
            <p className="mb-4 text-gray-400">{data.alcance}</p>
            
            {data.descripcion && (
                <ul>
                    {data.descripcion.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
          </div>
          
        </div>
      </div>

      {/* Full Width Gallery Section */}
      {galleryItems.length > 0 && (
         <div className="project-full-gallery">
             <div className="gallery-container">
                 <h3>Galería del Proyecto</h3>
                 <div className="gallery-grid">
                     {galleryItems.map((item, idx) => (
                         <div key={idx} className="gallery-item" onClick={() => setSelectedImage(item.url)}>
                            {item.type === 'video' ? (
                                <div className="video-thumbnail">
                                    {item.thumbnail ? (
                                        <img src={item.thumbnail} alt={item.title || "Video thumbnail"} className="preview-image" />
                                    ) : (
                                        <video 
                                          src={`${item.url}#t=0.5`} 
                                          muted 
                                          preload="metadata"
                                          playsInline
                                          className="preview-video" 
                                        />
                                    )}
                                    <div className="play-icon">
                                        <IonIcon icon={playCircleOutline} />
                                    </div>
                                </div>
                            ) : (
                                <img src={item.url} alt={`${data.nombre} - Galeria ${idx + 1}`} />
                            )}
                            <div className="overlay">
                                <IonIcon icon={arrowBackOutline} style={{transform: 'rotate(135deg)', fontSize: '2rem'}} />
                            </div>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
      )}

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={() => setSelectedImage(null)}>
                    <IonIcon icon={closeOutline} />
                </button>
                {galleryItems.find(item => item.url === selectedImage)?.type === 'video' ? (
                    <video src={selectedImage} controls autoPlay className="lightbox-video" />
                ) : (
                    <img src={selectedImage} alt="Full View" />
                )}
            </div>
        </div>
      )}

      {/* Project Navigation Footer using NextPrev */}
      {(() => {
             const currentIndex = projectsList.findIndex(p => (p.slug || slugify(p.nombre)) === slug);
             const prevIndex = (currentIndex - 1 + projectsList.length) % projectsList.length;
             const prevProject = projectsList[prevIndex];
             const prevSlug = prevProject.slug || slugify(prevProject.nombre);

             const nextIndex = (currentIndex + 1) % projectsList.length;
             const nextProject = projectsList[nextIndex];
             const nextSlug = nextProject.slug || slugify(nextProject.nombre);
             
             return (
                 <div className="project-navigation-footer">
                    <NextPrev 
                        prevTitle={prevProject.nombre}
                        prevLink={`/proyectos/${prevSlug}`}
                        nextTitle={nextProject.nombre}
                        nextLink={`/proyectos/${nextSlug}`}
                        prevLabel="ANTERIOR"
                        nextLabel="SIGUIENTE"
                    />
                 </div>
             );
      })()}

    </div>
  );
};

export default ProyectosDetails;
