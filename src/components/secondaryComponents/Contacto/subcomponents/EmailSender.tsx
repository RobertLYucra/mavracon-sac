import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import "./styles/EmailSender.scss";
import {
  ContactFormData,
  contactInfo,
  interestOptions,
  InterestType,
  socialLinks,
} from "../Interfaces/Contacto";

const EmailSender: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    interest: null,
  });

  const handleInterestChange = (interest: InterestType) => {
    setFormData((prev) => ({ ...prev, interest }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío
  };

  return (
    <div className="email-sender">
      <div className="email-sender__container">
        {/* Left Section - Contact Info */}
        <div className="email-sender__info">
          <div className="email-sender__header">
            <h1 className="email-sender__title">Contáctanos</h1>
            <p className="email-sender__subtitle">
              ¿Tienes un proyecto de construcción o ingeniería civil? Nos
              encantaría ayudarte a hacerlo realidad.
            </p>
          </div>

          <div className="email-sender__contact-list">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="email-sender__contact-item"
              >
                <div className="email-sender__contact-icon">
                  <IonIcon icon={info.icon} />
                </div>
                <span className="email-sender__contact-text">{info.text}</span>
              </div>
            ))}
          </div>

          <div className="email-sender__socials">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="email-sender__social-link"
                aria-label={social.label}
              >
                <IonIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="email-sender__form-wrapper">
          <div className="email-sender__form">
            <div className="email-sender__interest">
              <label className="email-sender__label">Estoy interesado en</label>
              <div className="email-sender__interest-buttons">
                {interestOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleInterestChange(option.value)}
                    className={`email-sender__interest-btn ${
                      formData.interest === option.value ? "active" : ""
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="email-sender__fields">
              <input
                type="text"
                name="fullName"
                placeholder="Nombre completo"
                value={formData.fullName}
                onChange={handleInputChange}
                className="email-sender__input"
              />

              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                className="email-sender__input"
              />

              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleInputChange}
                className="email-sender__input"
              />

              <textarea
                name="message"
                placeholder="Mensaje"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="email-sender__textarea"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="email-sender__submit"
            >
              <IonIcon icon="paper-plane-outline" />
              <span>Enviar Mensaje</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSender;
