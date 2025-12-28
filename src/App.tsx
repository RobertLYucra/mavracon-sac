import "./App.scss";
import Navbar from "./components/maincomponents/nabvar/Navbar";
import Inicio from "./components/secondaryComponents/home/Inicio";
import { Route, Routes } from "react-router-dom";
import QueHacemos from "./components/secondaryComponents/quehacemos/QueHacemos";
import Proyectos from "./components/secondaryComponents/proyectos/Proyectos";
import Innovacion from "./components/secondaryComponents/innovacion/Innovacion";
import QuienesSomos from "./components/secondaryComponents/quienesSomos/QuienesSomos";
import Footer from "./components/maincomponents/footer/Footer";
import Sostenenibilidad from "./components/secondaryComponents/sostenibilidad/Sostenenibilidad";
import SostenibilidadDetails from "./components/secondaryComponents/sostenibilidad/detalle/SostenibilidadDetails";
import ProyectosDetails from "./components/secondaryComponents/proyectos/detalle/ProyectosDetails";
import QueHacemosDetails from "./components/secondaryComponents/quehacemos/detalle/QueHacemosDetails";
import NotFound from "./components/maincomponents/NotFound/NotFound";
import Contacto from "./components/secondaryComponents/Contacto/Contacto";

function App() {

  return <>
    <Navbar />
    <div className="routes-main">
      <div className="routes">
        <Routes>
          <Route path="/proyectos/:slug" element={<ProyectosDetails />} ></Route>
          <Route path="/" element={<Inicio />} ></Route>
          <Route path="/que-hacemos" element={<QueHacemos />} ></Route>
          <Route path="/que-hacemos/:slug" element={<QueHacemosDetails/>} ></Route>
          <Route path="/proyectos" element={<Proyectos />} ></Route>
          <Route path="/innovacion-tecnologia" element={<Innovacion />} ></Route>
          <Route path="/quienes-somos" element={<QuienesSomos />} ></Route>
          <Route path="/noticias" element={<Inicio />} ></Route>
          <Route path="/sostenibilidad" element={<Sostenenibilidad />} ></Route>
          <Route path="/sostenibilidad/:slug" element={<SostenibilidadDetails />} ></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
    <Footer />
  </>;
}

export default App;
