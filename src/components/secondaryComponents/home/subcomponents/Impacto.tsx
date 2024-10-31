
import './styles/Impacto.scss'

const Impacto = () => {
  return (
    <div className="our-impact">
      <div className="impact-left">
        <h3 className="titulo">NUESTRO IMPACTO</h3>
        <h1 className="h1_bold">MINERÍA QUE CAMBIA VIDAS</h1>
        <p className="body_large">Contamos con amplia experiencia trabajando diferentes iniciativas para generar un impacto positivo en las familias que dependen de la minería, brindando así paz social a nuestras operaciones y generando una minería responsable y sostenible.</p>

        <a href="https://www.stracon.com/sostenibilidad/" className="button white" target="">
          IR A SOSTENIBILIDAD</a> </div>
      <div className="impact-right">
        <div className="bg_blur"></div>
        <img src="https://www.stracon.com/site/media/Screen-Shot-2023-03-27-at-17.28.04.png" alt="" />
        <div className="text_video">
          <p className="button_play">
            <i className="icon play"></i>
          </p>
          <p className="body_large">Conoce aquí cómo transformamos la vida de las personas y sus comunidades.</p>
        </div>
      </div>
    </div>
  )
}

export default Impacto