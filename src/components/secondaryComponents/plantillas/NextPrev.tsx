import { IonIcon } from "@ionic/react"
import "./styles/NextPrev.scss"

interface NextPrevProps {
    prevTitle?: string
    nextTitle?: string
    prevLabel?: string
    nextLabel?: string
    prevLink?: string
    nextLink?: string
}

const NextPrev = ({
    prevTitle,
    nextTitle,
    prevLabel = "ANTERIOR",
    nextLabel = "SIGUIENTE",
    prevLink,
    nextLink
}: NextPrevProps) => {
    const hasPrev = prevTitle && prevLink
    const hasNext = nextTitle && nextLink

    return (
        <div className="section_next_prev">
            <div className="next_prev">
                {hasPrev ? (
                    <div className="prev">
                        <a href={prevLink} className="prev_link">
                            <p className="anterior">{prevLabel}</p>
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
                                <p className="section_prev_title">{prevTitle}</p>
                            </div>
                        </a>
                    </div>
                ) : (
                    <div></div>
                )}
                {hasNext && (
                    <div className="next">
                        <a href={nextLink} className="prev_link">
                            <p className="siguiente">{nextLabel}</p>
                            <div className="section_prev">
                                <p className="section_prev_title">{nextTitle}</p>
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
                )}
            </div>
        </div>
    )
}

export default NextPrev