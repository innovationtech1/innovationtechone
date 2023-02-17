import "../App.css";
import slider1 from "../assets/img/slider1.jpg";

function SerCard() {
  return (
    <div className="SercardConteiner">
      <div className="SercardBody">
        <img  src={slider1} alt="img" />
        <h5 className="cardTitle">Desarrollo Web</h5>
        <h4 className="cardDescription">Diseñamos tu pagina web con los componentes que tu nececites del catalogo de componentes el desarrollo tiene un costo inicial de $200 dlls de anticipo </h4>
        <p className="precio">$200 dlls </p>
      
      </div>
    </div>
  )
}

export default SerCard