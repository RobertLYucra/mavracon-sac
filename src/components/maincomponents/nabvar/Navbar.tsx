import { IonIcon } from '@ionic/react';
import Logo from '../../../images/logo-oscuro.png';
import './Navbar.scss';
import { arrowForward } from 'ionicons/icons';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar si el navbar está abierto o cerrado
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {


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
            <a href='/'><img src={Logo} className="logo" alt="logo" /></a>
          </div>
          <div className='right'>
            <div className={`nav-ul ${isOpen ? 'open' : ''} `}>
              <ul className='links'>
                <li className={`etiquetas`}>
                  <a href='que-hacemos' >
                    Qué hacemos?
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas`}>
                  <a href='proyectos' >
                    Proyectos
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas `}>
                  <a href='innovacion-tecnologia' >
                    Innovación y tecnología
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas`}>
                  <a href='quienes-somos'>
                    Quiénes Somos
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas `}>
                  <a href='sostenibilidad' >
                    Sostenibilidad
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
                <li className={`etiquetas`}>
                  <a href='noticias' >
                    Noticias
                  </a>
                  <IonIcon className='icon' icon={arrowForward} />
                </li>
              </ul>
            </div>
            <a href='contacto' className='contacto'> CONTACTOS </a>
            <button onClick={toggleNavbar} className='menu'>
              <IonIcon className='menu-icon' icon={isOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
