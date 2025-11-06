import { useState } from 'react';
import { IonIcon } from "@ionic/react";
import './styles/Hacemos.Principal.scss';
import { actividades, Actividades } from "../interfaces/QueHacemosPrincipal";
import DetalleActividad from './DetalleActividad';

const HacemosPrincipal = () => {
  const [actividadSeleccionada, setActividadSeleccionada] = useState<Actividades | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (actividad: Actividades) => {
    setActividadSeleccionada(actividad);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setActividadSeleccionada(null), 300);
  };

  return (
    <>
      <div className="que-hacemos-cards">
        {actividades.map((actividad, i) => (
          <figure key={i} onClick={() => handleClick(actividad)} style={{ cursor: 'pointer' }}>
            <IonIcon className='more-icon-mobile' icon={actividad.icono} />
            <h3 className="titulo-mobile">{actividad.actividad}</h3>
            <div className="left-image-actividad">
              <img src={actividad.imagen} alt={actividad.actividad} />
            </div>
            <div className="right-cards-hacemos">
              <IonIcon className='more-icon' icon={actividad.icono} />
              <h3 className="titulo">{actividad.actividad}</h3>
              <p>{actividad.descripcion}</p>
              <div className="ver-mas-btn">VER MÁS</div>
            </div>
          </figure>
        ))}
      </div>

      {actividadSeleccionada && (
        <DetalleActividad
          actividad={actividadSeleccionada}
          onClose={handleClose}
          isOpen={isOpen}
        />
      )}
    </>
  );
};

export default HacemosPrincipal;