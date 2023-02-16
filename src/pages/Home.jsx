import "../App.css";
import logo from "../assets/img/logo.png";

import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";

import { useState, useEffect } from "react";
import Card from "../components/Card";

export function MiComponente() {
  const [contador, setContador] = useState(() => {
    const storedValue = localStorage.getItem("contador");
    return storedValue !== null ? parseInt(storedValue) : 117;
  });

  useEffect(() => {
    localStorage.setItem("contador", contador);
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button className="likesBtn" onClick={() => setContador(contador + 1)}>
        Give Me Likes
      </button>
    </div>
  );
}
export function Contenido() {
  const [mostrarContenido, setMostrarContenido] = useState(false);

  const handleClick = () => {
    setMostrarContenido(!mostrarContenido);
  };

  return (
    <div>
      <button className="mostrarContenidoBtn" onClick={handleClick}>
        {mostrarContenido ? "Ocultar contenido" : "Mostrar contenido"}
      </button>
      {mostrarContenido && (
       <Card/>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="mainContainer">
      <Navegacion className="" />
      <Slider />
      <div className="textContainer">
        <p>Actualizando componentes</p>
        <h3>Creando Tecnologia</h3>
      </div>
      <MiComponente />

      <Contenido />

      <img className="logo" src={logo} alt="logo" />

      <Footer />
    </div>
  );
}

export default Home;
