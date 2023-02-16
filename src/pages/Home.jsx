import "../App.css";
import logo from "../assets/img/logo.png";

import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";
import BotonAnimado from "../components/BotonAnimado";

import { useState, useEffect } from "react";

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
  return (
    <div className="mainContainer">
      <Navegacion className="" />
      <Slider />
      <div className="textContainer">
        <p>Actualizando componentes</p>
        <h3>Creando Tecnologia</h3>
      </div>
      <ContadorBtn />

      <BotonAnimado />

      <img className="logo" src={logo} alt="logo" />
      <br />

      <div className="video">

      <iframe className="video"  src="https://www.youtube.com/embed/XKnkh047ieo" title="INNOVATIONTECH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
