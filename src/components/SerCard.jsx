import "../App.css";
import slider1 from "../assets/img/slider1.jpg";

function SerCard() {
  return (
    <div className="SercardConteiner">
      <div className="SercardBody">
        <img  src={slider1} alt="img" />
        <h5 className="cardTitle">Desarrollo Web</h5>
        <h4 className="cardDescription">Diseñamos tu pagina web con los componentes que nececites del catalogo de componentes del "MENU HOME" el desarrollo tiene un costo inicial de $500dlls de anticipo mas los componentes que contrates.
        
        
        </h4>
        <p className="precio"> La construcion del sitio tiene un costo inicial de $500 dlls esto cubrira el desarrollo , hosting y el dominio  mas componentes</p>

      
      </div>
    </div>
  )
}

export default SerCard