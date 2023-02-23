import { NavLink } from "react-router-dom";
import "../App.css";
import slider1 from "../assets/img/slider1.jpg";
import slider2 from "../assets/img/slider2.jpg";

import slider3 from "../assets/img/slider3.jpg";

import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa";
  import { FaRegNewspaper } from "react-icons/fa";


function SerCard() {
  return (
    <div>
      <div className="SercardConteiner">
        <div className="SercardBody">
          <img src={slider1} alt="img" />
          <h5 className="cardTitle">Desarrollo Web</h5>
          <h4 className="cardDescription">
            Diseñamos tu sitio web con la informacion que necesites
            basada con el catalogo de componentes.
            <br />
            <NavLink className="active" to="/innovationtechone/informacion/">
              <br />
            
              <h4>"Informacion"</h4>
              <br />
              
            </NavLink>
            el desarrollo tiene un costo inicial de $300dlls de anticipo los
            componentes se cobran por separado.
          </h4>
        </div>
      </div>
      <br />
      <br />
      <p className="precio">
        La construcion del sitio tiene un costo inicial de $300 dlls esto
        cubrira el desarrollo , hosting y el dominio los componentes se cobran
        por separado.
      </p>
      <br />
      <div>
        <div className="textContainer">
          <h1 className="cardTitle">Especificaciones</h1>
          <br />
          <h1 className="logoReact">
            <FaReact />
          </h1>

          <h3 className="cardDescription">
            1.-Lo que trabajamos son pagina o sitios web personalizados basados
            en la libreria de REACT react es una libreria creada por "FACEBOOK"
            con la cual desarrolla su aplicacion las ventajas de las
            aplicaciones web es que son mas faciles de mantener se pueden
            compartir mas facil a traves de las redes sociales , no necesitan
            descarga y pueden ser visitadas por cualquiera los 365 dias del año
          </h3>
          <br />
          <br />
        </div>
        <div className="textContainer">
          <h1 className="cardTitle">Especificaciones</h1>
          <br />
          <h1 className="logoGitHub">
            <FaGithub />
          </h1>
          <h3 className="cardDescription">
            Utilizamos GitHub como plataforma de almacecnamiento para crear una
            copia de seguridad asi tu pagina siempre estara disponibe para hacer
            actualizaciones "GITHUB" es la plataforma mas grande de
            almacenamiento del platena.{" "}
            <div>
              <br />
            </div>{" "}
            Alli viven la mayoria de repositorios es el hosting es donde viven
            la mayoria de los proyectos hoy en dia los cambios y actualizaciones
            tambien tienen un costo dependiendo lo que se quiera actualizar es
            por eso que tienes que tener en mente como quieres tu pagina web.{" "}
          </h3>

          <br />
          <br />
        </div>
      </div>

      <br />
      <div className="SercardConteiner">
        <div className="SercardBody">
          <img src={slider2} alt="img" />
          <h5 className="cardTitle">Diseño Grafico</h5>
          <h4 className="cardDescription">
            Diseñamos tus imagenes personalizadas de alta resolucion en
            innovation tech utilizamos las herramientas mas avanzadas para poder
            dar el "PERFECT PIXEL" y lograr que tus imagenes se vean geniales.
          </h4>
        </div>
      </div>
      <br />
      <br />
      <p className="precio">
        El diseño creacion de logotipos o imagenes tiene que ser cubierto desde
        al momneto de ser solicitado tiene costo de $200dlls
      </p>
      <div className="textContainer">
        <h1 className="cardTitle">Especificaciones</h1>
        <br />
        <h1 className="logoFotos">
          <FaRegImages />
        </h1>
        <h3 className="cardDescription">
          Desarrollamos imagenes de alta calidad en innovationTECH utilizamos
          Adobe Photoshop Lunacy Figma y otras herramientas de diseño graficas
          avanzadas para darle color y personalidad a tus imagenes
          <div>
            <br />
          </div>
          Creamos las imagenes de mas alta calidad ya sea en formato jpg , png,
          svg con colores vivos RGB, RGBA , utilizamos capas, mejoramos la
          calidad de una imagen, si tienes una idea nosotros la diseñamos por ti
          sabemos que la creatividad es la mejor manera de llamar la atencion
          asi que no dudes que haremos nuestro mejor esfuerzo poder diseñar esa
          imagen que te esta dando vueltas en la cabeza.
        </h3>

        <br />
        <br />
      </div>
      <br />
      <div className="SercardConteiner">
        <div className="SercardBody">
          <img src={slider3} alt="img" />
          <h5 className="cardTitle">Markiting Digital</h5>
          <h4 className="cardDescription">
            Creamos Campañas publicitarias por medio de GOOGLE ADDS o por medio
            de las redes sociales la publicidad puede ser un metodo asombroso
            para llegar a mas clientes
          </h4>
        </div>
      </div>
      <br />
      <br />
      <p className="precio">
        Las campañas publisitarias estan en desarrollo esperamos contar con este
        servicio lo mas pronto posible.
      </p>
      <div className="textContainer">
        <h1 className="cardTitle">Especificaciones</h1>
        <br />
        <h1 className="logoMkt">
          <FaRegNewspaper />
        </h1>
        <h3 className="cardDescription">
          PROXIMAMENTE MAS IMFORMACION
          <div>
            <br />
          </div>
        </h3>

        <br />
        <br />
      </div>
    </div>
  );
}

export default SerCard;