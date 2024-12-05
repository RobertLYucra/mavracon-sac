import { IonIcon } from "@ionic/react"
import "./styles/NextPrev.scss"

const NextPrev = () => {
    return (
        <div className="section_next_prev">
            <div className="next_prev">
                <div className="prev">
                    <a href="#" className="prev_link">
                        <p className="anterior">ANTERIOR</p>
                        <div className="section_prev">
                            <div className="icons">
                                <div className="icons-container">
                                    <IonIcon
                                        className="more-icon"
                                        icon="arrow-back"
                                    ></IonIcon>
                                    <IonIcon
                                        className="more-icon main-icon"
                                        icon="arrow-back"
                                    ></IonIcon>
                                </div>
                            </div>
                            <p className="section_prev_title">QUÉ HACEMOS</p>
                        </div>
                    </a>
                </div>
                <div className="next">
                    <a href="#" className="prev_link">
                        <p className="siguiente">SIGUIENTE</p>
                        <div className="section_prev">
                            <p className="section_prev_title">INNOVACION Y TECNOLOGÍA</p>
                            <div className="icons">
                                <div className="icons-container">
                                    <IonIcon
                                        className="more-icon"
                                        icon="arrow-forward"
                                    ></IonIcon>
                                    <IonIcon
                                        className="more-icon main-icon"
                                        icon="arrow-forward"
                                    ></IonIcon>
                                </div>
                            </div>

                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NextPrev