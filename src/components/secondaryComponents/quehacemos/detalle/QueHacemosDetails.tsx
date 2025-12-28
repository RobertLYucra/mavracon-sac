import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { actividades } from "../interfaces/QueHacemosPrincipal";
import NextPrev from "../../plantillas/NextPrev";
import NotFound from "../../../maincomponents/NotFound/NotFound";
import "./styles/QueHacemosDetails.scss";

// Utility to normalize section id to slug just in case
// const slugify = (text: string) => text; 

const QueHacemosDetails = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    // Find current activity
    const currentIndex = actividades.findIndex(a => a.section === slug);
    const data = actividades[currentIndex];

    if (!data) return <NotFound />;

    // Calculate Prev/Next
    const prevIndex = (currentIndex - 1 + actividades.length) % actividades.length;
    const nextIndex = (currentIndex + 1) % actividades.length;

    const prevItem = actividades[prevIndex];
    const nextItem = actividades[nextIndex];

    return (
        <div className="que-hacemos-details-page">
            <div className="split-layout">
                {/* Left Panel - Image */}
                <div className="image-panel">
                    <img src={data.imagenDetalle || data.imagen} alt={data.actividad} />
                </div>

                {/* Right Panel - Content */}
                <div className="content-panel">
                    <div className="top-nav">
                        <Link to="/que-hacemos" className="back-link">
                            <IonIcon icon={arrowBackOutline} /> VOLVER
                        </Link>
                    </div>

                    <div className="service-header">
                        <span className="service-category">SERVICIOS INTEGRALES</span>
                        <h1>{data.actividad}</h1>
                    </div>

                    <div className="service-description">
                         <p>{data.descripcion}</p>
                    </div>

                    {data.detalles && data.detalles.length > 0 && (
                        <div className="service-details-list">
                            <h3>Servicios Incluidos</h3>
                             <div className="details-grid">
                                {data.detalles.map((detalle, idx) => (
                                    <div key={idx} className="detail-item">
                                        <div className="detail-number">{detalle.numero}</div>
                                        <h4>{detalle.titulo}</h4>
                                        {detalle.descripcion && <p>{detalle.descripcion}</p>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Footer */}
            <div className="details-footer">
                <NextPrev 
                    prevTitle={prevItem.actividad}
                    prevLink={`/que-hacemos/${prevItem.section}`}
                    nextTitle={nextItem.actividad}
                    nextLink={`/que-hacemos/${nextItem.section}`}
                    prevLabel="SERVICIO ANTERIOR"
                    nextLabel="SIGUIENTE SERVICIO"
                />
            </div>
        </div>
    );
};

export default QueHacemosDetails;
