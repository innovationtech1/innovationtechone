import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider0 from "../assets/img/slider0.jpg";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";
import slider3 from "../assets/img/slider3.jpg";

const Data = [
  {
    title: "TECNOLOGIA WEB A TU ALCANCE",
    description: "CONOCE NUESTROS SERVICIOS Y PRODUCTOS",
    image: slider0,
  },
  {
    title: "PROBLEMAS CON TU SITIO WEB",
    description: "DISEÑAMOS TU PAGINA WEB DESDE CERO",
    image: slider1,
  },
  {
    title: "NECEISTAS UN LOGOTIPO ",
    description: " EDICION DE FOTOGRAFIA Y VIDEO DIGITAL",
    image: slider2,
  },
  {
    title: "CAMPAÑAS DE MARKETING",
    description: "UTILIZAMOS GOOGLE ADSENSE",
    image: slider3,
  },
];

const SliderComponent = () => {
  return (
    <Carousel>
      {Data.map((image, index) => (
        <div key={index}>
          <h3 className="carusel-title-react">{image.title}</h3>
          <p carusel-description-react>{image.description}</p>
          <img src={image.image} alt={image.title} />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
