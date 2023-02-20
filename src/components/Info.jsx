import "../App.css";
import img1 from "../assets/img/slider0.jpg";

 function Info() {
  return (
    <div>
      <div className="SercardConteiner">
        <div className="SercardBody">
          <img src={img1} alt="img" />
          <h5 className="cardTitle">INNOVATIONTECH</h5>
          <h4 className="cardDescription">NUESTROS VALORES </h4>
          <p className="precio">
            <li>CONFIANZA</li>
          </p>
          <p className="precio">
            <li>COMPROMISO</li>
          </p>

          <p className="precio">
            <li>HONESTIDAD</li>
          </p>
          <p className="precio">
            <li>CREATIVIDAD</li>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;