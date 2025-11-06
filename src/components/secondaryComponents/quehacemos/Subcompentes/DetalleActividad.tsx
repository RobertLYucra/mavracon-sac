import { useEffect } from 'react';
import { IonIcon } from '@ionic/react';
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
      // Desactivar scroll del body
      document.body.style.overflow = 'hidden';
    } else {
      // Reactivar scroll del body
      document.body.style.overflow = '';
    }

    // Cleanup: asegurar que el scroll se reactive al desmontar
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={`detalle-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`detalle-container ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="detalle-content">
          <button className="volver-btn" onClick={onClose}>
            <IonIcon icon="arrow-back" />
            <span>VOLVER</span>
          </button>

          <div className="detalle-body">
            <div className="detalle-left">
              <img src={actividad.imagenDetalle || actividad.imagen} alt={actividad.actividad} />
            </div>

            <div className="detalle-right">
              <div className="detalle-header">
                <IonIcon className="icon-detalle" icon={actividad.icono} />
                <h2>{actividad.actividad}</h2>
              </div>

              <p className="descripcion-completa">{actividad.descripcion}</p>

              <div className="detalles-lista">
                {actividad.detalles?.map((detalle, index) => (
                  <div key={index} className="detalle-item">
                    <span className="numero">{detalle.numero}</span>
                    <div className="detalle-info">
                      <h3>{detalle.titulo}</h3>
                      {detalle.descripcion && <p>{detalle.descripcion}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleActividad;