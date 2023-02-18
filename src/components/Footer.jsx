import "../App.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="footerContainer">
      <div className="redesSociales">
        <h4 className="fbIcon">
          <FaFacebookSquare />
        </h4>
        <h4 className="instaIcon">
          <FaInstagramSquare />{" "}
        </h4>
        <h4 className="waIcon">
          <FaWhatsappSquare />{" "}
        </h4>
      </div>
      Follow Us
      <br />
      <br />
          <div>
        <a className="mail" href="mailto:hectordehoyos@inovationtechone.com?subject=Escribe un Asunto del correo">
          <h4 className="cardDescription">hectordehoyos@inovationtechone.com</h4>
        </a>
        <h6 >Press To Send Mail</h6>
       
      </div>
      <br />
      <h6 className="marcaRegistrada"> &reg;INNOVATIONTECHONE TODOS LOS DERECHOS RESERVADOS</h6>
      
     
    
    </div>
  );
}

export default Footer;
