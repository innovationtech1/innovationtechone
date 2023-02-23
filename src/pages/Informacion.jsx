
import "../App.css";
import logo from "../assets/img/logo.png";

import { NavLink } from "react-router-dom";


import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";
import BotonAnimado from "../components/BotonAnimado";
import NavMuestra from "../components/NavMuestra";


import { useState, useEffect, useRef } from "react";
import Maps from "../components/Maps";
import PiePagina from "../components/PiePagina";
import AcordionInfo from "../components/Acordion";

import SliderComponent from "../components/SliderDeImagenes";





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

export default function Informacion() {
 
  return (
    <div>
      <Navegacion />
      <h3 className="pageTitle">Informacion</h3>
      <br />
      <br />
      <div className="textContainer">
        <br />
        <br />
        <h3 className="cardTitle">Catalogo de Componentes</h3>
        <p className="cardTitle">Creando Tecnologia</p>
        <br />
        <br />
        <h4 className="cardDescription">Titulo y subtitulo</h4>
        <p className="precio">$20dlls</p>
      </div>
      <div className="textContainer">
        <br />
        <br />
        <h3 className="cardTitle">Catalogo de Componentes</h3>
        <p className="cardTitle">Creando Tecnologia</p>
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
      <br />
      <div className="textContainer">
        <PiePagina />
        <br />
        <br />
        <h4 className="cardDescription">
          Redes sociales y correo electronico dinamico
        </h4>
        <p className="precio">300dlls</p>
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
      <br />

      <div className="textContainer">
        <AcordionInfo />
        <br />
        <h4 className="cardDescription">Acordion desplegable para servicios</h4>
        <p className="precio">200dlls</p>
        <br />
      </div>
      <br />

      <div className="textContainer">
        <Maps />
        <br />
        <br />
        <h4 className="cardDescription">
          Incluir API GOOGLEMAPS Geolozalizacion
        </h4>
        <p className="precio">500dlls</p>
      </div>

      <div className="textContainer">
        <br />
        <SliderComponent />
        <br />
        <h4 className="cardDescription">Slider de Imagenes</h4>
        <p className="precio">500dlls</p>
      </div>
      <div className="btnContainer ">
        <button>
          <NavLink className="likesBtn" to="/innovationtechone/servicios/">
            Previos
          </NavLink>
        </button>
        <button>
          <NavLink className="likesBtn" to="/innovationtechone/about/">
            Next
          </NavLink>
        </button>
      </div>

      <Footer />
    </div>
  );
}
