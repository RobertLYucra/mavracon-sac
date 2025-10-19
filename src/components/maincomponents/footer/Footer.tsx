import Logo from '../../../images/logo-oscuro.png';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoLinkedin, logoYoutube } from 'ionicons/icons';
import "./Footer.scss"

const Footer = () => {
  const footerLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/que-hacemos', label: 'Qué hacemos' },
    { href: '/proyectos', label: 'Proyectos' },
    { href: '/innovacion-tecnologia', label: 'Innovación y tecnología' },
    { href: '/quienes-somos', label: 'Quiénes Somos' },
    { href: '/sostenibilidad', label: 'Sostenibilidad' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo-section">
            <a href="/">
              <img src={Logo} alt="Mavracon Logo" className="footer-logo" />
            </a>
            <p className="footer-description">
              Construcción e ingeniería de excelencia para el desarrollo del Perú
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <IonIcon icon={logoFacebook} />
              </a>
              <a href="#" aria-label="Instagram">
                <IonIcon icon={logoInstagram} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <IonIcon icon={logoLinkedin} />
              </a>
              <a href="#" aria-label="YouTube">
                <IonIcon icon={logoYoutube} />
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <h3>Enlaces</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-section">
            <h3>Contacto</h3>
            <div className="contact-info">
              <p>Jr. Manuel Villavicencio 1711, Lince</p>
              <p>Lima, Perú</p>
              <p className="phone">+51 123 456 789</p>
              <p className="email">contacto@mavracon.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Mavracon. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer