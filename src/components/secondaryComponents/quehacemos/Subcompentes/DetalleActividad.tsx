import { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
import { X } from 'lucide-react';
import { Actividades } from '../interfaces/QueHacemosPrincipal';
import './styles/DetalleActividad.scss';

interface DetalleActividadProps {
  actividad: Actividades;
  onClose: () => void;
  isOpen: boolean;
}

const DetalleActividad = ({ actividad, onClose, isOpen }: DetalleActividadProps) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="detalle-overlay" onClick={handleBackdropClick}>
      <div className="detalle-modal">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X />
        </button>

        <div className="modal-content">

          {/* Columna Izquierda - Imagen */}
          <div className="modal-left">
            <div className="detalle-image-wrapper">
              <img 
                src={actividad.imagenDetalle || actividad.imagen} 
                alt={actividad.actividad}
                className="detalle-image"
              />
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="modal-right">
            <div className="modal-header">
              <div className="header-icon">
                <IonIcon icon={actividad.icono} />
              </div>
              <h2 className="modal-title">{actividad.actividad}</h2>
            </div>

            <div className="modal-section">
              <p className="section-text">{actividad.descripcion}</p>
            </div>

            {actividad.detalles && actividad.detalles.length > 0 && (
              <div className="modal-section">
                <h3 className="section-title">Servicios Incluidos</h3>
                <div className="detalles-grid">
                  {actividad.detalles.map((detalle, index) => (
                    <div key={index} className="detalle-card">
                      <div className="detalle-numero">{detalle.numero}</div>
                      <div className="detalle-content">
                        <h4>{detalle.titulo}</h4>
                        {detalle.descripcion && <p>{detalle.descripcion}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleActividad;