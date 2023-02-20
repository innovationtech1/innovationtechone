import "../App.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function PiePagina() {
  return (
    <div>
      <div className="redesSociales">
        <a href="https://www.facebook.com/Innovationtechsa" target="_blank">
          <h4 className="fbIcon">
            <FaFacebookSquare />
          </h4>
        </a>
        <a href="https://www.instagram.com/innovationtechone/" target="_blank">
          <h4 className="instaIcon">
            <FaInstagramSquare />
          </h4>
        </a>
        <a href="https://twitter.com/HectordeHoyos4" target="_blank">
          <h4 className="twIcon">
            <BsTwitter />
          </h4>
        </a>
      </div>
      <div className="textCenter">
        <div>Follow Us</div>

        <div>
          <a
            className="mail"
            href="mailto:hectordehoyos@inovationtechone.com?subject=Escribe un Asunto del correo"
          >
            <h4 className="cardDescription">
              hectordehoyos@inovationtechone.com
            </h4>
          </a>
          <h6>Press To Send Mail</h6>
        </div>
      </div>
    </div>
  );
}

export default PiePagina;
