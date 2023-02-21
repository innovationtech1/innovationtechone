import Navegacion from "../components/Navegacion";
import "../App.css";
import logo2 from '../assets/img/logo2.png'
import Info from "../components/Info";
import Footer from "../components/footer";


export default function About() {
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">About</h3>
      <div className="textContainer">
        <h1 className="cardDescription"> INNOVATIONTECH</h1>
        <img className="logo" src={logo2} alt="logo" />
        <h3 className="cardAbout">
          Innovation tech fue creado con la idea de poder brindar servicios a
          quedas personas que desconocen o tienen poco conocimiento de como
          funciona la tegnologia web con a intencion de poder crear sitios
          web personalizados que generen impacto en los clientes esto y con el proposito
          de poder brindar un mejor servicio contando con la informacion que los
          clientes necesita al instante.
        </h3>
      </div>
      <br />
      <Info />
      <br />
      <Footer/>
    </div>
  );
}
