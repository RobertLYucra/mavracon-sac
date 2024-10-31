import "./Portada.scss"

type GreetProps ={
  section:string;
  titulo:string;
  imagen:string;
  description:string;
}

const Portada = (props:GreetProps) => {
  return (
    <div className="banner_portada">
      <img
        src={props.imagen}
        id="video_background"
        className="image_background"
      >
      </img>
      <div className="bg_blur_portada"></div>
      <div className="content-portada">
        <div className="principal">
          < div className="top-portada-p">
            <div className="section">
              <p className="section-text">{props.section}</p>
            </div>
            <div className="text_animation">

              <h1 className="display">{props.titulo}</h1>
              <h3 className="info">{props.description}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portada