import "../App.css";
import logo from "../assets/img/logo.png";
import { FaPhoneSquare } from "react-icons/fa";

import Slider from "../components/Slider";
import Navegacion from "../components/Navegacion";
import Footer from "../components/footer";

import MenuCookies from "../cookies/MenuCookies";


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
        <img className="logo" src={logo} alt="logo" />
       
      </div>
      <div className="textContainer">
        <br></br>
        <ContadorBtn />
        <br></br>
       
      </div>
      
     
  
      <div className="textContainer">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/XKnkh047ieo"
          title="INNOVATIONTECH"
         
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         
        ></iframe>
        <br />
      
      </div>
      
      <div className="textContainer">
        <Maps />
        <br />
      
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
