import "../App.css";
import img1 from "../assets/img/slider0.jpg";


function Card() {
  return (
    <div className="cardConteiner">
      <div className="cardBody">
        <h5 className="cardTitle">Card Animation</h5>
        <h4 className="cardDescription">Aqui la descripcion de la tarjeta</h4>
        <p className="cardDescription">Presiona  abajo para activar la animacion</p>
        <img  src={img1} alt="img" />
      </div>
    </div>
  );
}

export default Card;
