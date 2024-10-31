import { pilares } from "../Interfaces/Pilares"
import "./styles/InnovacionCards.scss"

const InnovacionCards = () => {
    return (
        <div className="innovacion-cards-detalle">
            {pilares.map((pilar, i) => (
                <figure key={i}>
                    <h2 className="contador">0{i + 1}</h2>
                    <h2 className="titulo">{pilar.titulo}</h2>
                    <p>{pilar.descripcion}</p>
                </figure>
            ))}
        </div>
    )
}

export default InnovacionCards