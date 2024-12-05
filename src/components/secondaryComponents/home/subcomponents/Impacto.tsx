
import { IonIcon } from '@ionic/react'
import './styles/Impacto.scss'

const Impacto = () => {
  return (
    <div className="our-impact">
      <div className="impact-left">
        <h3 className="titulo">NUESTRO IMPACTO</h3>
        <h1 className="h1_bold">INGENIERÍA QUE CAMBIA VIDAS</h1>
        <p className="body_large">Contamos con amplia experiencia en iniciativas que generan un impacto positivo en las comunidades, ofreciendo soluciones sostenibles y responsables que mejoran la calidad de vida y promueven el desarrollo social en cada proyecto.</p>

        <a href="https://www.stracon.com/sostenibilidad/" className="button_white" target="">
          IR A SOSTENIBILIDAD</a> </div>
      <div className="impact-right">
        <div className="bottom-servicio-video">
          <a className="" href="" >
            <div className="blur-mas" />
            <div className="fondo">
              <span>
                <IonIcon className='icon-play' icon="play-circle" />
                <p>Capacitaciones que cambian vidas. Este fue nuestro proyecto de mujeres operadoras.</p>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Impacto