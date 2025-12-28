import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { paperPlaneOutline } from "ionicons/icons";
import "./styles/EmailSender.scss";
import {
  ContactFormData,
  interestOptions,
  InterestType,
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
    <div className="email-form-pure">
      <div className="input-group">
        <label>¿Qué te interesa?</label>
        <div className="interest-buttons">
            {interestOptions.map((option) => (
                <button
                key={option.value}
                type="button"
                onClick={() => handleInterestChange(option.value)}
                className={`interest-btn ${
                    formData.interest === option.value ? "active" : ""
                }`}
                >
                {option.label}
                </button>
            ))}
        </div>
      </div>

      <div className="input-grid">
        <div className="input-group">
          <input
              type="text"
              name="fullName"
              placeholder="Tu Nombre Completo"
              value={formData.fullName}
              onChange={handleInputChange}
              className="modern-input"
          />
        </div>

        <div className="input-group">
          <input
              type="email"
              name="email"
              placeholder="Tu Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="modern-input"
          />
        </div>

        <div className="input-group">
          <input
              type="text"
              name="subject"
              placeholder="Asunto"
              value={formData.subject}
              onChange={handleInputChange}
              className="modern-input"
          />
        </div>
      </div>

      <div className="input-group">
        <textarea
            name="message"
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="modern-input textarea"
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="submit-btn-modern"
      >
        <span>Enviar Mensaje</span>
        <IonIcon icon={paperPlaneOutline} />
      </button>
    </div>
  );
};

export default EmailSender;
