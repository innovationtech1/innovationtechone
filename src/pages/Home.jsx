import "../App.css";
import logo from "../assets/img/logo.png";

import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";
import BotonAnimado from "../components/BotonAnimado";

import { useState, useEffect, useRef } from "react";
import MenuCookies from "../cookies/MenuCookies";

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
        <h3>Catalogo de Componentes</h3>
        <p>Creando Tecnologia</p>
        <br />
        <br />
        <h4>Titulo y subtitulo</h4>
        <p className="precio">$20dlls</p>
      </div>
      <div className="textContainer">
        <br />
        <br />
        <h3>Catalogo de Componentes</h3>
        <p>Creando Tecnologia</p>
        <br />
        <br />
        <h4>Articulos Textos Encabezados</h4>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          cupiditate ipsum, odit eaque perferendis odio accusamus deleniti sunt
          iure porro saepe quo praesentium itaque necessitatibus laboriosam
          velit aliquid non et.
        </p>
        <p className="precio">$40dlls</p>
      </div>
      <div className="textContainer">
        <img src={logo} alt="logo" />
        <h4>Imagenes Logotipos Estaticos </h4>
        <p className="precio">$50dlls</p>
      </div>
      <div className="textContainer">
        <img className="logo" src={logo} alt="logo" />
        <h4> Diseño y Animacion de Logotipos</h4>
        <p className="precio">100dlls</p>
      </div>
      <div className="textContainer">
        <br></br>
        <ContadorBtn />
        <br></br>
        <h4>Contador de likes</h4>
        <p className="precio">100dlls</p>
      </div>
      <div className="textContainer">
        <br />
        <br />
        <Slider />
        <h4>Slider Animado incluye la animacion de 4 fotografias</h4>
        <p className="precio">200dlls</p>
      </div>
      <div className="textContainer">
        <BotonAnimado />
        <br />
        <br />
        <h4>Tarjeta Animada</h4>
        <p className="precio">200dlls</p>
      </div>

      <br />
      <div className="textContainer">
        <iframe
         className="video"
          src="https://www.youtube.com/embed/XKnkh047ieo"
          title="INNOVATIONTECH"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br />
        <br />
        <h4>Subir un video </h4>
        <p className="precio">150dlls</p>
      </div>

      <Footer />
      <MenuCookies />
    </div>
  );
}

export default Home;
