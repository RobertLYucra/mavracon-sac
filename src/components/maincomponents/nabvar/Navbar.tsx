import { IonIcon } from '@ionic/react';
import Logo from '../../../images/logo-oscuro.png';
import './Navbar.scss';
import { arrowForward } from 'ionicons/icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar si el navbar está abierto o cerrado
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null); // Estado para manejar la etiqueta activa

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Cambia el estado de abierto a cerrado y viceversa
    console.log(isOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link); // Cambia la etiqueta activa al hacer clic
    localStorage.setItem('activeLink', link); // Almacena el link activo en localStorage
  };

  const handleLogoClick = () => {
    setActiveLink(null); // Restablece la etiqueta activa a null
    localStorage.removeItem('activeLink'); // Elimina el activeLink de localStorage
  };

  useEffect(() => {
    const savedLink = localStorage.getItem('activeLink');
    if (savedLink) {
      setActiveLink(savedLink); // Recupera el link activo al recargar la página
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'open' : ''}`}>
        <div className="main-nav">
          <div className="prueba-div">
            <a href='/' onClick={handleLogoClick}><img src={Logo}  className="logo" alt="logo" /></a>
          </div>
          <div className='right'>
            <div className={`nav-ul ${isOpen ? 'open' : ''} `}>
              <ul className='links'>
                <li className={`etiquetas ${activeLink === 'que-hacemos' ? 'active' : ''}`}>
                  <a href='que-hacemos' onClick={() => handleLinkClick('que-hacemos')}>
                    Qué hacemos?
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas ${activeLink === 'proyectos' ? 'active' : ''}`}>
                  <a href='proyectos' onClick={() => handleLinkClick('proyectos')}>
                    Proyectos
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas ${activeLink === 'innovacion-tecnologia' ? 'active' : ''}`}>
                  <a href='innovacion-tecnologia' onClick={() => handleLinkClick('innovacion-tecnologia')}>
                    Innovación y tecnología
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas ${activeLink === 'quienes-somos' ? 'active' : ''}`}>
                  <a href='quienes-somos' onClick={() => handleLinkClick('quienes-somos')}>
                    Quiénes Somos
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas ${activeLink === 'noticias' ? 'active' : ''}`}>
                  <a href='noticias' onClick={() => handleLinkClick('noticias')}>
                    Noticias
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas ${activeLink === 'sostenibilidad' ? 'active' : ''}`}>
                  <a href='sostenibilidad' onClick={() => handleLinkClick('sostenibilidad')}>
                    Sostenibilidad
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
              </ul>
            </div>
            <a href='#' className='contacto'> CONTACTOS </a>
            <button onClick={toggleNavbar} className='menu'>
              <IonIcon className='menu-icon' icon={isOpen?'close':'menu'} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
