import logo from "../assets/img/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuCookies() {
  const [isVisible, setIsVisible] = useState(
    !localStorage.getItem("cookies-aceptadas")
  );

  const aceptarCookies = () => {
    localStorage.setItem("cookies-aceptadas", true);
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div className="mainContainer">
          <div className="textContainer" id="aviso-cookies">
            <img className="logoCookies" src={logo} alt="cookies" />
            <h3 className="titulo">Cookies</h3>
            <p className="parrafo">
              Utilizamos cookies propias y de terceros para obtener datos
              estadísticos de la navegación de nuestros usuarios y mejorar
              nuestros servicios.
            </p>
            <button
              className="mostrarContenidoBtn"
              id="btn-aceptar-cookies"
              onClick={aceptarCookies}
            >
              De Acuerdo
            </button>
            <button >
              <NavLink className= "likesBtn"to="/innovationtechone/avisocookies">
               Aviso De Cookies
              </NavLink>
            </button>
          </div>
          <div className="fondo-aviso-cookies" id="fondo-aviso-cookies"></div>
        </div>
      )}
    </div>
  );
}

export default MenuCookies;
