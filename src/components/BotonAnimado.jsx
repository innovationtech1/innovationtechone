import { useState } from "react";
import Card from "./Card";
import "../App.css";

function BotonAnimado() {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    if (mostrarContenido) {
      setIsFadingOut(true);
      setTimeout(() => {
        setMostrarContenido(false);
        setIsFadingOut(false);
      }, 1000);
    } else {
      setMostrarContenido(true);
    }
  };

  return (
    <div>
      <button className="mostrarContenidoBtn" onClick={handleClick}>
        {mostrarContenido ? "Ocultar contenido" : "Mostrar contenido"}
      </button>
      {mostrarContenido && (
        <Card className={`cardContainer ${isFadingOut ? "fade" : "fade-out"}`} />
      )}
    </div>
  );
}

export default BotonAnimado;

