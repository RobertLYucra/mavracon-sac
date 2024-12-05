import NextPrev from "../plantillas/NextPrev"
import "./Contacto.scss"
import EmailSender from "./subcomponents/EmailSender"

const Contacto = () => {
    return (
        <div className="contacto-container">
            <div className="section">
            </div>
            <div className="section-dato-sender mb-12">
                <EmailSender />
            </div>
            <div className="prev_next_section_1">
                <NextPrev />
            </div>
        </div>
    )
}

export default Contacto