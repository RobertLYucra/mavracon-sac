import './styles/Global.scss'
import Mapa from '../images/mapamundi.png'

const Global = () => {
  return (
    <div className="global">
      <div className="global_left">
        <h1>Nuevas operaciones en el mundo</h1>
      </div>

      <div className="global_right">

      <img src={Mapa}alt="" />
      </div>
    </div>
  )
}

export default Global