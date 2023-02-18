import "../App.css";
import logo from "../assets/img/logo.png";
import { FaPhoneSquare } from "react-icons/fa";

import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";
import BotonAnimado from "../components/BotonAnimado";
import MenuCookies from "../cookies/MenuCookies";
import NavMuestra from "../components/NavMuestra";

import { useState, useEffect, useRef } from "react";
import Maps from "../components/Maps";

export function ContadorBtn() {
  const [contador, setContador] = useState(() => {
    const storedValue = localStorage.getItem("contador");
    return storedValue !== null ? parseInt(storedValue) : 117;
  });

  useEffect(() => {
    localStorage.setItem("contador", contador);
  }, [contador]);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button className="likesBtn" onClick={() => setContador(contador + 1)}>
        Give Me Likes
      </button>
    </div>
  );
}

function Home() {
  const iframeRef = useRef(null);
  useEffect(() => {
    function handleTouchStart(event) {
      event.preventDefault({ passive: true });
    }

    const iframeElement = iframeRef.current;
    if (iframeElement) {
      iframeElement.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
    }

    return () => {
      if (iframeElement) {
        iframeElement.removeEventListener("touchstart", handleTouchStart, {
          passive: true,
        });
      }
    };
  }, []);

  return (
    <div className="mainContainer">
      <Navegacion className="" />
      <Slider />
      <div className="textContainer">
        <br />
        <br />
        <h3 className="cardTitle">Catalogo de Componentes</h3>
        <p className="cardDescription">Creando Tecnologia</p>
        <br />
        <br />
        <h4 className="cardDescription">Titulo y subtitulo</h4>
        <p className="precio">$20dlls</p>
      </div>
      <div className="textContainer">
        <br />
        <br />
        <h3 className="cardTitle">Catalogo de Componentes</h3>
        <p className="cardDescription">Creando Tecnologia</p>
        <br />

        <p className="cardDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          cupiditate ipsum, odit eaque perferendis odio accusamus deleniti sunt
          iure porro saepe quo praesentium itaque necessitatibus laboriosam
          velit aliquid non et.
        </p>
        <br />
        <h4 className="cardDescription"> Articulos Textos Encabezados</h4>
        <p className="precio">$40dlls</p>
      </div>
      <div className="textContainer">
        <img src={logo} alt="logo" />
        <h4 className="cardDescription">Imagenes Logotipos Estaticos </h4>
        <p className="precio">$50dlls</p>
      </div>
      <div className="textContainer">
        <img className="logo" src={logo} alt="logo" />
        <h4 className="cardDescription"> Diseño y Animacion de Logotipos</h4>
        <p className="precio">100dlls</p>
      </div>
      <div className="textContainer">
        <br></br>
        <ContadorBtn />
        <br></br>
        <h4 className="cardDescription">Contador de likes</h4>
        <p className="precio">100dlls</p>
      </div>
      <div className="textContainer">
        <br />
        <br />
        <Slider />
        <h4 className="cardDescription">
          Slider Animado incluye la animacion de 4 fotografias
        </h4>
        <p className="precio">200dlls</p>
      </div>
      <div className="textContainer">
        <BotonAnimado />
        <br />
        <br />
        <h4 className="cardDescription">Tarjeta Animada</h4>
        <p className="precio">200dlls</p>
      </div>
      <br />
      <div className="textContainer">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/XKnkh047ieo"
          title="INNOVATIONTECH"
         
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
        ></iframe>
        <br />
        <br />
        <h4 className="cardDescription">Crear Editar Subir Un Video </h4>
        <p className="precio">150dlls</p>
      </div>
      <div className="textContainer">
        <NavMuestra />
        <br />
        <br />
        <h4 className="cardDescription">
          Incluir Menu desplegable a la aplicacion incluye 4 paginas extra
        </h4>
        <p className="precio">500dlls</p>
      </div>
      <div className="textContainer">
        <Maps />
        <br />
        <br />
        <h4 className="cardDescription">
          Incluir API GOOGLEMAPS Geolozalizacion{" "}
        </h4>
        <p className="precio">500dlls</p>
      </div>

      <MenuCookies />
      <br /><br />

  <a className="phoneSquare" href="tel:+12108102141">
        <FaPhoneSquare />
      </a>
      <p className="cardDescription">Call Us</p>
      <Footer />
    </div>
  );
}

export default Home;
