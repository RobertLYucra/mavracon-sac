import { IonIcon } from "@ionic/react";
import Logo from "../../../images/logo-oscuro.png";
import "./Navbar.scss";
import { arrowForward, menuOutline, closeOutline } from "ionicons/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "que-hacemos", label: "Qué hacemos?" },
    { href: "proyectos", label: "Proyectos" },
    { href: "innovacion-tecnologia", label: "Innovación y tecnología" },
    { href: "quienes-somos", label: "Quiénes Somos" },
    { href: "sostenibilidad", label: "Sostenibilidad" },
  ];

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Bloquea scroll del body cuando está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Cierra con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`backdrop ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <div className="main-nav">
          <div className="prueba-div">
            <a href="/">
              <img src={Logo} className="logo" alt="logo" />
            </a>
          </div>

          <div className="right">
            <div className={`nav-ul ${isOpen ? "open" : ""}`}>
              <div className={`nav-ul__panel ${isOpen ? "open" : ""}`}>
                {/* Header con logo y botón cerrar */}
                <div className="menu-header">
                  <img src={Logo} className="logo-mobile" alt="logo" />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="close-button"
                    aria-label="Cerrar menú"
                  >
                    <IonIcon className="close-icon" icon={closeOutline} />
                  </button>
                </div>

                <ul className="links">
                  {navLinks.map((link) => (
                    <li key={link.href} className="etiquetas">
                      <a href={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                      </a>
                      <IonIcon className="icon" icon={arrowForward} />
                    </li>
                  ))}
                </ul>

                {/* Botón contacto en mobile */}
                <div className="mobile-contact">
                  <a
                    href="contacto"
                    className="contacto"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTÁCTANOS
                  </a>
                </div>
              </div>
            </div>

            <a href="contacto" className="contacto">
              CONTACTO
            </a>

            <button
              onClick={toggleNavbar}
              className={`menu ${isOpen ? "open" : ""}`}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <IonIcon
                className="menu-icon"
                icon={isOpen ? closeOutline : menuOutline}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;