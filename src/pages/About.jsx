import Navegacion from "../components/Navegacion";
import "../App.css";
import logo2 from '../assets/img/logo2.png'
import Info from "../components/Info";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">About</h3>
      <div className="textContainer">
        <h1 className="cardDescription"> INNOVATIONTECH</h1>
        <img className="logo" src={logo2} alt="logo" />
        <h3 className="cardAbout">
          InnovationTECH fue creado con la idea de poder brindar servicios para
          aquellos usuarios que desconocen o tienen poco conocimiento en el sector tecnologico
          ofreciendo soluciones para crear sitios web
          personalizados que generen impacto en los clientes con el proposito
          de poder ayudar a mejorar y proporcionar la
          informacion al instante dentro de un sitio web como este.
        </h3>
      </div>
      
      <br />
      <Info />
      <br />
      <br />
      <div className="btnContainer">
        <button>
          <NavLink className="likesBtn" to="/innovationtechone/informacion/">
            PREVIEW
          </NavLink>
        </button>
        <button>
          <NavLink className="likesBtn" to="/innovationtechone">
            Next
          </NavLink>
        </button>
      </div>
      <Footer />
    </div>
  );
}
