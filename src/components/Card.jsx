import "../App.css";
import img1 from "../assets/img/slider0.jpg";


function Card() {
  return (
    <div className="cardConteiner">
      <div className="cardBody">
        <img  src={img1} alt="img" />
        <h5 className="cardTitle">Card Animation</h5>
        <h4 className="cardDescription">Aqui la descripcion de la tarjeta</h4>
      
      </div>
    </div>
  );
}

export default Card;
