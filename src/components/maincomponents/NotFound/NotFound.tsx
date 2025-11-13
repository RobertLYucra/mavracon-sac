import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    document.title = "404 - Página no encontrada | MAVRACON";
    
    // Generar partículas aleatorias
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="not-found">
      {/* Partículas de fondo */}
      <div className="not-found__particles">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Grid de fondo */}
      <div className="not-found__grid" />

      {/* Contenido principal */}
      <div className="not-found__content">
        
        {/* 404 Grande */}
        <div className="not-found__number">
          <h1>404</h1>
          <div className="not-found__number-glow" />
        </div>

        {/* Título */}
        <h2 className="not-found__title">
          Página no encontrada
        </h2>

        {/* Descripción */}
        <p className="not-found__description">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>

        {/* Botones */}
        <div className="not-found__buttons">
          <button
            onClick={() => navigate('/')}
            className="not-found__btn not-found__btn--primary"
          >
            <Home size={20} />
            <span>Volver al inicio</span>
          </button>

          <button
            onClick={() => navigate(-1)}
            className="not-found__btn not-found__btn--secondary"
          >
            <ArrowLeft size={20} />
            <span>Página anterior</span>
          </button>
        </div>

        {/* Enlaces rápidos */}
        <div className="not-found__links">
          <p className="not-found__links-title">Enlaces rápidos</p>
          <div className="not-found__links-grid">
            {['Proyectos', 'Quiénes Somos', 'Sostenibilidad', 'Contacto'].map((link) => (
              <button
                key={link}
                onClick={() => navigate(`/${link.toLowerCase().replace(/\s+/g, '-')}`)}
                className="not-found__link"
              >
                {link}
              </button>
            ))}
          </div>
        </div>

        {/* Icono de búsqueda decorativo */}
        <div className="not-found__search-icon">
          <Search size={48} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;