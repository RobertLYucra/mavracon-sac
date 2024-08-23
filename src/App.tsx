import { useState } from "react";
import "./App.scss";
import Navbar from "./components/maincomponents/nabvar/Navbar";
import Inicio from "./components/secondaryComponents/home/Inicio";
import { Route, Router, Routes } from "react-router-dom";
import QueHacemos from "./components/secondaryComponents/quehacemos/QueHacemos";
import Proyectos from "./components/secondaryComponents/proyectos/Proyectos";

function App() {

  return <>
    <Navbar />  


    <div className="routes">
      <Routes>
        <Route path="/" element={<Inicio />} ></Route>
        <Route path="/que-hacemos" element={<QueHacemos />} ></Route>
        <Route path="/proyectos" element={<Proyectos />} ></Route>
        <Route path="/innovacion-tecnologia" element={<Inicio />} ></Route>
        <Route path="/quienes-somos" element={<Inicio />} ></Route>
        <Route path="/noticias" element={<Inicio />} ></Route>
        <Route path="/sostenibilidad" element={<Inicio />} ></Route>
      </Routes>
    </div>

  </>;
}

export default App;
