import "../App.css";
import img1 from "../assets/img/slider0.jpg";


function Card() {
  return (
    <div className="SercardConteiner">
      <div className="SercardBody">
        <img  src={img1} alt="img" />
        <h5 className="cardTitle">Card Animation</h5>
        <h4 className="cardDescription">Aqui la descripcion de la tarjeta</h4>
        <p className="precio">200 dll "c/u"</p>
      
      </div>
    </div>
  );
}

export default Card;
